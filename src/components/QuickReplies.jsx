export default function QuickReplies({ options, onSelect }) {
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="border border-purple-400 text-purple-500 px-4 py-1 rounded-full hover:bg-purple-100"
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }