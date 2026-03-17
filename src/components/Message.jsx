export default function Message({ text, sender }) {
    const isBot = sender === "bot";
  
    return (
      <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}>
        <div
          className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm ${
            isBot
              ? "bg-gray-200 text-black"
              : "bg-purple-500 text-white"
          }`}
        >
          {text}
        </div>
      </div>
    );
  }