import React, { useState } from "react";
import { appImages } from "../../assets";
import { colors } from "../../utils";

const INITIAL_CONVERSATIONS = [
  {
    id: "chat_1",
    name: "Kabir Khan",
    role: "Director",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    message:
      "Just reviewed the rough cut of scene 14. The pacing is phenomenal!",
    time: "10:14 AM",
    unread: 2,
    online: true,
  },
  {
    id: "chat_2",
    name: "Rhea Kapoor",
    role: "Cinematographer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    message: "Cooke anamorphic lens kit is booked for Monday. Pick up at 8 AM.",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: "chat_3",
    name: "Aarav Sharma",
    role: "Writer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    message:
      "Sent the revised dialogue draft for act 3. Let me know your thoughts.",
    time: "2d ago",
    unread: 0,
    online: false,
  },
  {
    id: "chat_4",
    name: "Elena Rostova",
    role: "Sound Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    message:
      "Foley recordings for the subway chase are uploaded to your drive.",
    time: "Oct 8",
    unread: 0,
    online: false,
  },
  {
    id: "chat_5",
    name: "Marcus Vance",
    role: "Lead Colorist",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    message: "LUT exports are ready with the Kodak 2383 saturation curve.",
    time: "Oct 5",
    unread: 0,
    online: true,
  },
];

const INITIAL_MESSAGES = {
  chat_1: [
    {
      id: "m1",
      sender: "other",
      text: "Hey Yuvam! Did you get a chance to review the Dhanda Empire scene 14 revision?",
      time: "10:02 AM",
    },
    {
      id: "m2",
      sender: "me",
      text: "Yes! The pacing in the standoff is so much tighter now. Loved the audio cut before the gunshot.",
      time: "10:06 AM",
    },
    {
      id: "m3",
      sender: "other",
      text: "Awesome! Here's the color reference we locked in for the night exterior.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80",
      time: "10:10 AM",
    },
    {
      id: "m4",
      sender: "other",
      text: "Just reviewed the rough cut of scene 14. The pacing is phenomenal!",
      time: "10:14 AM",
    },
  ],
};

export const Chat = () => {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeChatId, setActiveChatId] = useState("chat_1");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");
  const [newChatModal, setNewChatModal] = useState(false);
  const [callAlert, setCallAlert] = useState(null);

  const activeConv =
    conversations.find((c) => c.id === activeChatId) || conversations[0];
  const activeChatMessages = messages[activeChatId] || [];

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: `msg_${Date.now()}`,
      sender: "me",
      text: inputText.trim(),
      time: "Just now",
    };

    setMessages((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMsg],
    }));

    // Update conversation snippet
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeChatId
          ? { ...c, message: inputText.trim(), time: "Just now", unread: 0 }
          : c,
      ),
    );

    setInputText("");

    // Simulate collaborator reply
    setTimeout(() => {
      const reply = {
        id: `reply_${Date.now()}`,
        sender: "other",
        text: "Got it! Looking into that right away.",
        time: "Just now",
      };
      setMessages((prev) => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), reply],
      }));
    }, 1500);
  };

  const filteredConversations = conversations.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#07111d] text-white flex flex-col">
      {/* Call simulation notification */}
      {callAlert && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-zinc-900 border border-pink-500/50 shadow-2xl flex items-center gap-3 animate-in fade-in">
          <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
            📞
          </div>
          <div>
            <h5 className="text-xs font-bold text-white">{callAlert}</h5>
            <p className="text-[10px] text-zinc-400">
              Connecting secure crew audio line...
            </p>
          </div>
          <button
            onClick={() => setCallAlert(null)}
            className="text-xs px-2 py-1 rounded-md bg-white/10 ml-2"
          >
            End
          </button>
        </div>
      )}

      {/* Main Dual-Pane Chat Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4 flex flex-col h-[calc(100vh-64px)]">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 rounded-3xl bg-[#0c1322]/80 border border-white/[0.08] backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Left Pane: Conversations List (hidden on mobile if viewing active chat) */}
          <div
            className={`md:col-span-5 lg:col-span-4 flex flex-col border-r border-white/10 ${
              activeChatId ? "hidden md:flex" : "flex"
            }`}
          >
            {/* Conversations Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white">
                  Direct & Crew Lounge
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Encrypted production communications
                </p>
              </div>

              <button
                type="button"
                onClick={() => setNewChatModal(true)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                }}
                title="New Chat"
              >
                +
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-3 border-b border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search crew or production..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500/50"
                />
                <img
                  src={appImages.browse}
                  alt="Search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 object-contain invert opacity-50"
                />
              </div>
            </div>

            {/* Active Online Row */}
            <div className="p-3 border-b border-white/5 overflow-x-auto no-scrollbar flex items-center gap-3">
              {conversations.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveChatId(c.id)}
                  className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group"
                >
                  <div className="relative w-11 h-11 rounded-full p-0.5 group-hover:scale-105 transition-transform">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-full h-full rounded-full object-cover border border-zinc-900"
                    />
                    {c.online && (
                      <span
                        className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0c1322]"
                        style={{ background: colors.onlineGreen }}
                      />
                    )}
                  </div>
                  <span className="text-[10px] text-zinc-400 max-w-[50px] truncate">
                    {c.name.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-white/5">
              {filteredConversations.map((item) => {
                const isActive = item.id === activeChatId;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveChatId(item.id);
                      setConversations((prev) =>
                        prev.map((c) =>
                          c.id === item.id ? { ...c, unread: 0 } : c,
                        ),
                      );
                    }}
                    className={`flex items-center gap-3.5 p-3.5 cursor-pointer transition-colors ${
                      isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-full shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover border border-white/10"
                      />
                      {item.online && (
                        <span
                          className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0c1322]"
                          style={{ background: colors.onlineGreen }}
                        />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-xs font-bold text-white truncate">
                          {item.name}
                        </h4>
                        <span className="text-[10px] text-zinc-500">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 truncate leading-snug">
                        {item.message}
                      </p>
                    </div>

                    {item.unread > 0 && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white shrink-0 shadow"
                        style={{
                          background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing}, ${colors.lightRed})`,
                        }}
                      >
                        {item.unread}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Pane: Active Chat Room (ChatCard) */}
          <div
            className={`md:col-span-7 lg:col-span-8 flex flex-col h-full bg-[#070e1a]/60 ${
              !activeChatId ? "hidden md:flex" : "flex"
            }`}
          >
            {/* Chat Room Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0b1322]/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                {/* Back button for mobile */}
                <button
                  type="button"
                  onClick={() => setActiveChatId(null)}
                  className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white"
                >
                  ←
                </button>

                <div className="relative w-10 h-10 rounded-full">
                  <img
                    src={activeConv.avatar}
                    alt={activeConv.name}
                    className="w-full h-full rounded-full object-cover border border-white/10"
                  />
                  {activeConv.online && (
                    <span
                      className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-black"
                      style={{ background: colors.onlineGreen }}
                    />
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {activeConv.name}
                    <span className="text-[10px] font-semibold text-pink-400 px-1.5 py-0.2 rounded bg-pink-500/10">
                      {activeConv.role}
                    </span>
                  </h3>
                  <p className="text-[10px] text-zinc-400">
                    {activeConv.online
                      ? "Online • In Studio"
                      : "Offline • Last seen 2h ago"}
                  </p>
                </div>
              </div>

              {/* Call simulation buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCallAlert(`Calling ${activeConv.name}...`)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Voice Call"
                >
                  <img
                    src={appImages.mic}
                    alt="Call"
                    className="w-4 h-4 object-contain invert"
                  />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCallAlert(
                      `Starting Video Conference with ${activeConv.name}...`,
                    )
                  }
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Video Call"
                >
                  <img
                    src={appImages.camera}
                    alt="Video"
                    className="w-4 h-4 object-contain invert"
                  />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar">
              <div className="text-center my-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold text-zinc-500 bg-white/5 border border-white/5">
                  End-to-End Encrypted Crew Channel
                </span>
              </div>

              {activeChatMessages.map((msg) => {
                const isMe = msg.sender === "me";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[78%] sm:max-w-[65%] rounded-2xl p-3.5 shadow-md ${
                        isMe
                          ? "rounded-tr-sm text-white"
                          : "rounded-tl-sm bg-[#162133] border border-white/10 text-zinc-200"
                      }`}
                      style={
                        isMe
                          ? {
                              background: `linear-gradient(135deg, ${colors.storyRing} 0%, ${colors.purple} 100%)`,
                            }
                          : {}
                      }
                    >
                      {msg.image && (
                        <div className="rounded-xl overflow-hidden mb-2 max-h-56">
                          <img
                            src={msg.image}
                            alt="Attachment"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {msg.text && (
                        <p className="text-xs leading-relaxed">{msg.text}</p>
                      )}

                      <div
                        className={`text-[9px] mt-1.5 flex items-center gap-1 ${
                          isMe
                            ? "justify-end text-white/70"
                            : "justify-start text-zinc-500"
                        }`}
                      >
                        <span>{msg.time}</span>
                        {isMe && <span>✓✓</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Message Input Bar matching deeds */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-white/10 bg-[#0a121f]/90 backdrop-blur-md flex items-center gap-2"
            >
              <button
                type="button"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Attach Slate / Asset"
              >
                <img
                  src={appImages.imageupload}
                  alt="Attach"
                  className="w-4 h-4 object-contain invert opacity-70"
                />
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Message ${activeConv.name}...`}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500/60"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex items-center gap-1.5"
                style={{
                  background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                }}
              >
                <span>Send</span>
                <img
                  src={appImages.send}
                  alt="Send"
                  className="w-3.5 h-3.5 object-contain invert"
                />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* New Chat Modal */}
      {newChatModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setNewChatModal(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#0d1627] border border-white/15 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">
                Start New Crew Conversation
              </h3>
              <button
                onClick={() => setNewChatModal(false)}
                className="text-zinc-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-400 mb-4">
              Search verified filmmakers, sound mixers, gaffers, and editors in
              your network.
            </p>

            <div className="space-y-2 max-h-60 overflow-y-auto no-scrollbar">
              {conversations.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setActiveChatId(c.id);
                    setNewChatModal(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{c.name}</h5>
                    <p className="text-[10px] text-zinc-400">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
