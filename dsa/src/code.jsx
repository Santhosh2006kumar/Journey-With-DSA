import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ children, language = "java" }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        borderRadius: "8px",
        padding: "16px",
        fontSize: "15px"
      }} className="user-select-none"
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
