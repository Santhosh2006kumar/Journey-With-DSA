from django.shortcuts import render

from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

# for model

from typing import TypedDict , List  , Union
from dotenv import load_dotenv
from langgraph.graph import StateGraph
from langgraph.graph.message import add_messages
from langchain_mistralai import ChatMistralAI
from langchain_core.messages import HumanMessage,SystemMessage,AIMessage    

load_dotenv()

class AgentState(TypedDict):
    messages : List[Union[HumanMessage,AIMessage]]

system_prompt = """
You are an AI coding assistant.
Help the user solve programming and DSA problems clearly.

Always explain:
1) The core logic
2) A step-by-step dry run with an example
3) Time and space complexity

Use simple language and clean code.

The preferred language is Java.
You support solutions only in Java, Python, and C.
If the user requests any other language, politely inform them that only Java, Python, and C are supported and ask them to choose one.

If a problem has already been discussed and solved,
and the user asks for a solution in another supported language (Java, Python, or C),
assume they are referring to the same problem.
Do not ask for the problem again.
Provide the solution in the requested language.

Do not give unnecessary explanations.
"""

llm = ChatMistralAI(model="mistral-small-latest")

def firstNode(state : AgentState):
    response = llm.invoke([SystemMessage(content=system_prompt)]+  state["messages"])
    state["messages"].append(AIMessage(content=response.content))
    return {
        "messages": [AIMessage(content=response.content)]
    }

graph = StateGraph(AgentState)
graph.add_node("fnode",firstNode)
graph.set_entry_point("fnode")
graph.set_finish_point("fnode")

agent =  graph.compile()

from IPython.display import display , Image
display(Image(agent.get_graph().draw_mermaid_png()))


conversion_history = []

@csrf_exempt
def AIChat(request):
    if request.method == "POST":
        data = json.loads(request.body)
        query = data.get("query")
        global conversion_history
        if not query:
            return JsonResponse({"error": "Empty query"}, status=400)

        
        
        conversion_history.append(HumanMessage(content=query))
        print("Received query:", query)
        result = agent.invoke({"messages": conversion_history})
        final_reply = result["messages"][-1].content
        
        print(final_reply)

        return JsonResponse({
            "reply": final_reply
        })

    return JsonResponse({"error": "Invalid request"}, status=400)


