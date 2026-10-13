import React, { useState, useRef, useEffect, useCallback } from "react";
import { CommentSheet, CustomBottomSheet } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

const REELS_DATA = [
  {
    id: "r1",
    videoBg:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1080&auto=format&fit=crop&q=80",
    author: {
      name: "Rhea Kapoor",
      handle: "@rheak_cinema",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    caption:
      "Proof of concept test: Low-light sensitivity on ARRI 35 with Cooke 40mm anamorphic. No noise reduction applied in grade.",
    music: "Hans Zimmer • Time (Ambient Cine Mix)",
    likes: 1840,
    comments: 142,
    shares: 88,
  },
  {
    id: "r2",
    videoBg:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1080&auto=format&fit=crop&q=80",
    author: {
      name: "Kabir Khan",
      handle: "@kabirkhan_films",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    },
    caption:
      "On set stunt choreo breakdown for 'Dhanda Empire'. 4 camera package tracking at 60mph.",
    music: "Ludwig Göransson • Can You Hear The Music",
    likes: 3210,
    comments: 290,
    shares: 215,
  },
  {
    id: "r3",
    videoBg:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1080&auto=format&fit=crop&q=80",
    author: {
      name: "Aarav Sharma",
      handle: "@aarav_sharma",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    caption:
      "Color harmony masterclass: Teal and copper balance using split toning curves in Resolve 19.",
    music: "Max Richter • On The Nature of Daylight",
    likes: 2450,
    comments: 188,
    shares: 130,
  },
];

export const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [following, setFollowing] = useState({});
  const [toastMsg, setToastMsg] = useState(null);

  const commentSheetRef = useRef(null);
  const moreSheetRef = useRef(null);

  const currentReel = REELS_DATA[currentIndex];

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REELS_DATA.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + REELS_DATA.length) % REELS_DATA.length,
    );
  }, []);

  const toggleLike = () => {
    const isNowLiked = !liked[currentReel.id];
    setLiked({ ...liked, [currentReel.id]: isNowLiked });
  };

  const toggleSave = () => {
    const isNowSaved = !saved[currentReel.id];
    setSaved({ ...saved, [currentReel.id]: isNowSaved });
    showToast(isNowSaved ? "Saved to your film vault" : "Removed from saved");
  };

  const toggleFollow = () => {
    const isNowFollowing = !following[currentReel.author.handle];
    setFollowing({
      ...following,
      [currentReel.author.handle]: isNowFollowing,
    });
    showToast(isNowFollowing ? "Following creator" : "Unfollowed creator");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") handleNext();
      if (e.key === "ArrowUp") handlePrev();
      if (e.key === " ") setIsPlaying((p) => !p);
      if (e.key === "m") setIsMuted((m) => !m);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-[#07111d] text-white flex flex-col">
      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-2xl">
          {toastMsg}
        </div>
      )}

      {/* Main Reels Viewport Container */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
        <div className="relative w-full max-w-md h-[82vh] sm:h-[86vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black flex flex-col justify-between">
          {/* Reel Visual Background */}
          <div
            className="absolute inset-0 bg-cover bg-center select-none cursor-pointer"
            style={{ backgroundImage: `url(${currentReel.videoBg})` }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <img
                    src={appImages.play}
                    alt="Play"
                    className="w-6 h-6 object-contain invert translate-x-0.5"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Top Bar Controls */}
          <div className="relative z-10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-white/90 drop-shadow">
                Bites & Proofs
              </span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>

            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-black/60 transition-colors"
            >
              <img
                src={isMuted ? appImages.mute : appImages.unmute}
                alt="Sound"
                className="w-4 h-4 object-contain invert"
              />
            </button>
          </div>

          {/* Bottom Area: Creator info on left, Actions column on right */}
          <div className="relative z-10 p-5 flex items-end justify-between gap-4">
            {/* Left: Creator Profile, Follow, Caption & Rotating Vinyl Disc */}
            <div className="flex-1 min-w-0 pb-1">
              {/* Creator Handle + Follow */}
              <div className="flex items-center gap-3 mb-2.5">
                <div
                  onClick={() => navigate(ROUTES.PROFILE)}
                  className="w-10 h-10 rounded-full p-0.5 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing}, ${colors.purple})`,
                  }}
                >
                  <img
                    src={currentReel.author.avatar}
                    alt={currentReel.author.name}
                    className="w-full h-full rounded-full object-cover border border-black"
                  />
                </div>

                <div
                  onClick={() => navigate(ROUTES.PROFILE)}
                  className="cursor-pointer"
                >
                  <h4 className="text-sm font-bold text-white hover:underline drop-shadow">
                    {currentReel.author.name}
                  </h4>
                  <p className="text-[11px] text-zinc-300">
                    {currentReel.author.handle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={toggleFollow}
                  className={`ml-2 px-3.5 py-1 rounded-full text-xs font-bold transition-all shadow-md ${
                    following[currentReel.author.handle]
                      ? "bg-white/20 text-white border border-white/30"
                      : "text-white"
                  }`}
                  style={
                    !following[currentReel.author.handle]
                      ? {
                          background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                        }
                      : {}
                  }
                >
                  {following[currentReel.author.handle]
                    ? "Following"
                    : "+ Follow"}
                </button>
              </div>

              {/* Caption */}
              <p className="text-xs text-white/95 leading-relaxed line-clamp-2 drop-shadow mb-3">
                {currentReel.caption}
              </p>

              {/* Soundtrack / Music marquee with rotating disc */}
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                <span className="text-sm animate-bounce">🎵</span>
                <span className="truncate max-w-[200px]">
                  {currentReel.music}
                </span>

                {/* Rotating Vinyl Record */}
                <div className="w-6 h-6 rounded-full border-2 border-white/40 bg-zinc-900 animate-spin flex items-center justify-center shrink-0 ml-1">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                </div>
              </div>
            </div>

            {/* Right: Vertical Action Column matching deeds ReelItem */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              {/* Like */}
              <button
                type="button"
                onClick={toggleLike}
                className="flex flex-col items-center gap-1 group active:scale-90 transition-transform"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                    liked[currentReel.id]
                      ? "bg-pink-600/40 border-pink-500 text-pink-400"
                      : "bg-black/40 border-white/15 text-white group-hover:bg-black/60"
                  }`}
                >
                  <img
                    src={
                      liked[currentReel.id] ? appImages.heart : appImages.like
                    }
                    alt="Like"
                    className={`w-5 h-5 object-contain ${
                      liked[currentReel.id] ? "scale-110" : "invert"
                    }`}
                  />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow">
                  {currentReel.likes + (liked[currentReel.id] ? 1 : 0)}
                </span>
              </button>

              {/* Comment */}
              <button
                type="button"
                onClick={() => commentSheetRef.current?.present()}
                className="flex flex-col items-center gap-1 group active:scale-90 transition-transform"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/15 text-white group-hover:bg-black/60 transition-all">
                  <img
                    src={appImages.comment}
                    alt="Comment"
                    className="w-5 h-5 object-contain invert"
                  />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow">
                  {currentReel.comments}
                </span>
              </button>

              {/* Share */}
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  showToast("Reel link copied to clipboard!");
                }}
                className="flex flex-col items-center gap-1 group active:scale-90 transition-transform"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/15 text-white group-hover:bg-black/60 transition-all">
                  <img
                    src={appImages.send}
                    alt="Share"
                    className="w-5 h-5 object-contain invert"
                  />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow">
                  {currentReel.shares}
                </span>
              </button>

              {/* Save */}
              <button
                type="button"
                onClick={toggleSave}
                className="flex flex-col items-center gap-1 group active:scale-90 transition-transform"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                    saved[currentReel.id]
                      ? "bg-yellow-500/30 border-yellow-400 text-yellow-300"
                      : "bg-black/40 border-white/15 text-white group-hover:bg-black/60"
                  }`}
                >
                  <img
                    src={
                      saved[currentReel.id] ? appImages.saved : appImages.save
                    }
                    alt="Save"
                    className={`w-5 h-5 object-contain ${
                      saved[currentReel.id] ? "" : "invert"
                    }`}
                  />
                </div>
                <span className="text-[11px] font-bold text-white drop-shadow">
                  Save
                </span>
              </button>

              {/* Options */}
              <button
                type="button"
                onClick={() => moreSheetRef.current?.present()}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/15 text-white hover:bg-black/60 transition-all active:scale-90"
              >
                <img
                  src={appImages.threeDots}
                  alt="More"
                  className="w-4 h-4 object-contain brightness-150"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Up / Down Navigation Controls for Desktop */}
        <div className="hidden sm:flex flex-col gap-3 ml-4">
          <button
            type="button"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
            title="Previous Reel"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
            title="Next Reel"
          >
            ↓
          </button>
        </div>
      </div>

      <CommentSheet ref={commentSheetRef} />

      <CustomBottomSheet
        ref={moreSheetRef}
        title="Reel Options"
        subtitle="Explore creator, audio or save"
      >
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => {
              moreSheetRef.current?.dismiss();
              navigate(ROUTES.MOVIE);
            }}
            className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs"
          >
            <img
              src={appImages.info}
              alt="Info"
              className="w-4 h-4 object-contain invert"
            />
            <span>View Associated Production Film</span>
          </button>
          <button
            type="button"
            onClick={() => {
              moreSheetRef.current?.dismiss();
              showToast("Remix sound saved");
            }}
            className="w-full flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs"
          >
            <img
              src={appImages.reels}
              alt="Sound"
              className="w-4 h-4 object-contain invert"
            />
            <span>Use this Audio Slate</span>
          </button>
        </div>
      </CustomBottomSheet>
    </div>
  );
};

export default Reels;
