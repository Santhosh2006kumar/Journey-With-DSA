import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AIChat({ onClose }) {
  const location = useLocation();
  const { problem, language } = location.state || {};

  // Messages shown in UI
  const [messages, setMessages] = useState([
    {
      role: "user",
      text: `Help me solve the problem: ${problem}.
Explain the logic, provide a dry run, and analyze the time complexity.`,
    },
  ]);

  // Query sent to backend
  const [query, setQuery] = useState(
    `Help me solve the problem: ${problem}.
Explain the logic, provide a dry run, and analyze the time complexity.`
  );

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Prevent double API call (React 18 StrictMode)
  const hasFetched = useRef(false);

  // Backend call
  useEffect(() => {
    if (!query || hasFetched.current) return;

    hasFetched.current = true;
    setLoading(true);

    fetch("http://127.0.0.1:8000/aichat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: data.reply },
        ]);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
        hasFetched.current = false;
      });
  }, [query]);

  // Handle user send
  const handleSend = () => {
    if (!input.trim()) return;

    const newQuery = input.trim();

    // show user message immediately
    setMessages((prev) => [
      ...prev,
      { role: "user", text: newQuery },
    ]);

    setQuery(newQuery);
    setInput("");
  };

  return (
    <div className="ai-chat-overlay container">
      <div className="ai-chat-box">

        {/* HEADER */}
        <div className="ai-chat-header bg-primary p-2 d-flex justify-content-between text-white">
          <h4>🤖 AI Assist</h4>
          <Link to="/" className="btn btn-close" onClick={onClose}></Link>
        </div>

        <p className="text-muted px-2">
          {problem ? problem.toLowerCase() : "problem1"} • {language ? language : "language"}
        </p>

        {/* CHAT BODY */}
        <div className="ai-chat-body d-flex flex-column gap-3 p-3"
             style={{ height: "77vh", overflowY: "auto" }}>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`rounded p-3 ${
                msg.role === "user"
                  ? "bg-primary bg-opacity-25 align-self-end"
                  : " align-self-start"
              }`}
              style={{ maxWidth: "85%" }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.text}
              </ReactMarkdown>
            </div>
          ))}

          {loading && (
            <div className="align-self-start p-2">
              <strong className="text-primary me-2">
                AI Assist is analyzing
              </strong>
              <div className="spinner-border spinner-border-sm"></div>
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="p-3 d-flex gap-2">
          <input
            className="form-control"
            type="text"
            placeholder="Ask a doubt..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="btn btn-primary" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
