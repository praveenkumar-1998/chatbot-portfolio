export default function ChatHeader() {
    return (
      <div className="bg-purple-500 text-white p-4 flex items-center justify-between rounded-t-xl">
        <div>
          <h2 className="font-semibold">LeadBots</h2>
          <p className="text-sm text-green-200">● Online Now</p>
        </div>
        <button className="text-white text-xl">✕</button>
      </div>
    );
  }