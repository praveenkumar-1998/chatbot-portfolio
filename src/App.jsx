import { useState, useEffect, useRef } from "react";
export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hi, I'm Praveenkumar 👋", sender: "bot" },
    { text: "What would you like to know about me?", sender: "bot" },
  ]);

  const [options, setOptions] = useState([
    "About Me",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Tools",
    "Download Resume",

  ]);

  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // 🔥 Resume-based responses
  const getResponse = (option) => {
    switch (option) {
      case "About Me":
        return "Full Stack Developer with 2.7+ years experience in React.js, React Native, Node.js, and MongoDB.";

      case "Experience":
        return "Currently working at Sankara Software Solutions. Built scalable apps like Resilink (500+ users) and Project Hub.";

      case "Projects":
        return "Resilink (Society Management Platform) and Project Hub (Jira-like tool with Kanban board).";

      case "Skills":
        return "React.js, React Native, Node.js, Redux, WebSocket, MongoDB, SQL.";

      case "Education":
        return "M.Sc Computer Science (2019–2021) and B.Sc Computer Science (2016–2019).";

      case "Tools":
        return "Git, GitHub, Firebase, Postman, VS Code.";

      default:
        return "Ask something else 👀";
    }


  };
  const handleOptionClick = (option) => {
    // 👉 Resume download
    if (option === "Download Resume") {
      const link = document.createElement("a");
      link.href = `${import.meta.env.BASE_URL}${import.meta.env.VITE_RESUME_PATH}`;
      link.download = "PraveenKumar_Resume.pdf";
      link.click();
      return;
    }

    setMessages((prev) => [...prev, { text: option, sender: "user" }]);
    setOptions([]);
    setTyping(true);

    setTimeout(() => {
      const reply = getResponse(option);

      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
      setTyping(false);

      setOptions([
        "About Me",
        "Experience",
        "Projects",
        "Skills",
        "Education",
        "Tools",
        "Download Resume",
      ]);
    }, 900);
  };

  return (<div className="h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">

    {/* HEADER */}
    <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-lg shadow">
          🤖
        </div>
        <div>
          <h2 className="font-semibold text-lg">Praveenkumar</h2>
          <p className="text-xs text-green-300">● Available for hire</p>
        </div>
      </div>
    </div>

    {/* CHAT AREA */}
    <div className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl w-full mx-auto space-y-4">

      {messages.map((msg, i) => {
        const isBot = msg.sender === "bot";

        return (
          <div
            key={i}
            className={`flex items-end gap-2 animate-fadeIn ${isBot ? "justify-start" : "justify-end"
              }`}
          >
            {isBot && (
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs shadow">
                🤖
              </div>
            )}

            <div
              className={`px-4 py-2 text-sm max-w-[70%] shadow-md ${isBot
                ? "bg-white rounded-2xl rounded-bl-sm text-gray-800"
                : "bg-purple-500 text-white rounded-2xl rounded-br-sm"
                }`}
            >
              {msg.text}
            </div>
          </div>
        );
      })}

      {/* TYPING */}
      {typing && (
        <div className="flex items-center gap-2 animate-fadeIn">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
            🤖
          </div>

          <div className="bg-white px-4 py-2 rounded-2xl flex gap-1 shadow">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.2s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.4s]"></span>
          </div>
        </div>
      )}

      {/* OPTIONS */}
      {options.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 animate-fadeIn">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className={`px-4 py-2 rounded-full transition shadow-sm ${opt === "Download Resume"
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "border border-purple-500 text-purple-600 hover:bg-purple-100"
                }`}            >
              {opt}
            </button>
          ))}
        </div>
      )}

      <div ref={endRef} />
    </div>
  </div>

  );
}
