import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { colors } from "../../utils";
import { appImages } from "../../assets";
import { CustomBottomSheet } from "../customBottomSheet/customBottomSheet";

const INITIAL_COMMENTS = [
  {
    id: "c1",
    author: "Christopher Nolan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    text: "The anamorphic lens choice here truly accentuates the emotional claustrophobia of the protagonist. Incredible lighting setup!",
    time: "2h ago",
    likes: 48,
    isLiked: false,
  },
  {
    id: "c2",
    author: "Greta Gerwig",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    text: "The color palette in the second sequence gave me absolute chills. Are you presenting this cut at Sundance?",
    time: "4h ago",
    likes: 31,
    isLiked: true,
  },
  {
    id: "c3",
    author: "Roger Deakins",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "Magnificent practical flare control on the wide shot. Reminds me of classic 70mm grain.",
    time: "1d ago",
    likes: 112,
    isLiked: false,
  },
];

export const CommentSheet = forwardRef((props, ref) => {
  const sheetRef = useRef(null);
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState("");

  useImperativeHandle(ref, () => ({
    present: () => sheetRef.current?.present(),
    dismiss: () => sheetRef.current?.dismiss(),
  }));

  const handleSend = (e) => {
    e?.preventDefault();
    if (!newComment.trim()) return;

    const added = {
      id: `c_${Date.now()}`,
      author: "Yuvam Sharma",
      avatar: appImages.dummyuser,
      text: newComment.trim(),
      time: "Just now",
      likes: 0,
      isLiked: false,
    };

    setComments([added, ...comments]);
    setNewComment("");
  };

  const toggleCommentLike = (id) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            likes: c.isLiked ? c.likes - 1 : c.likes + 1,
            isLiked: !c.isLiked,
          };
        }
        return c;
      })
    );
  };

  return (
    <CustomBottomSheet
      ref={sheetRef}
      title="Discussion & Comments"
      subtitle={`${comments.length} cinema community insights`}
    >
      <div className="flex flex-col h-full max-h-[60vh]">
        {/* Comments List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4 no-scrollbar">
          {comments.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full p-0.5 shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${colors.storyRing}, ${colors.purple})`,
                }}
              >
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white truncate">
                    {item.author}
                  </span>
                  <span className="text-[10px] text-zinc-500">{item.time}</span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {item.text}
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() => toggleCommentLike(item.id)}
                    className="flex items-center gap-1.5 text-[11px] font-medium transition-colors"
                    style={{
                      color: item.isLiked ? colors.storyRing : "#a1a1aa",
                    }}
                  >
                    <img
                      src={appImages.heart}
                      alt="Like"
                      className={`w-3.5 h-3.5 object-contain ${
                        item.isLiked ? "" : "opacity-60"
                      }`}
                    />
                    <span>{item.likes}</span>
                  </button>

                  <button
                    type="button"
                    className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Comment Input Field */}
        <form
          onSubmit={handleSend}
          className="pt-3 border-t border-white/10 flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-white/10">
            <img
              src={appImages.dummyuser}
              alt="You"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 relative">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add your critique or note..."
              className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500/60"
            />
            <button
              type="button"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              😊
            </button>
          </div>

          <button
            type="submit"
            disabled={!newComment.trim()}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
            }}
          >
            Post
          </button>
        </form>
      </div>
    </CustomBottomSheet>
  );
});

export default CommentSheet;
