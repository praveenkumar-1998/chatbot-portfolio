import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex p-3 border-t">
      <input
        className="flex-1 border rounded-full px-4 py-2 outline-none"
        placeholder="Reply..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-purple-500 text-white px-4 rounded-full"
      >
        Send
      </button>
    </div>
  );
}