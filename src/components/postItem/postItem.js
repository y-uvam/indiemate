import React, { useState, useRef, useCallback } from "react";
import { colors } from "../../utils";
import { appImages } from "../../assets";
import { CommentSheet } from "../commentSheet/commentSheet";
import { CustomBottomSheet } from "../customBottomSheet/customBottomSheet";
import { navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

export const PostItem = ({ item }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(item?.likes || 342);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showHeartPop, setShowHeartPop] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const commentSheetRef = useRef(null);
  const moreSheetRef = useRef(null);

  const images = item?.images || [
    item?.image ||
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1000&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1000&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1000&auto=format&fit=crop&q=80",
  ];

  const author = item?.author || {
    name: "Vikramaditya Motwane",
    handle: "@motabor",
    role: "Director & Producer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    location: "Mumbai • ARRI Alexa Mini LF",
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLike = useCallback(() => {
    if (!liked) {
      setLiked(true);
      setLikesCount((c) => c + 1);
      setShowHeartPop(true);
      setTimeout(() => setShowHeartPop(false), 900);
    } else {
      setLiked(false);
      setLikesCount((c) => Math.max(0, c - 1));
    }
  }, [liked]);

  const handleDoubleTap = () => {
    if (!liked) {
      handleLike();
    } else {
      setShowHeartPop(true);
      setTimeout(() => setShowHeartPop(false), 900);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    showToast(saved ? "Removed from saved films" : "Saved to your library");
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="w-full max-w-2xl mx-auto mb-8 rounded-3xl bg-[#0c1322]/80 border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-white/15">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-[#1e293b] text-white text-xs font-semibold shadow-2xl border border-white/20 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <img
            src={appImages.check}
            alt="Status"
            className="w-4 h-4 object-contain brightness-200"
          />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Profile Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate(ROUTES.PROFILE)}
        >
          {/* Avatar with Signature Story Ring */}
          <div
            className="w-11 h-11 rounded-full p-0.5 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.storyRing} 50%, ${colors.purple} 100%)`,
            }}
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="w-full h-full rounded-full object-cover border border-[#07111d]"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                {author.name}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: colors.onlineGreen }}
              />
            </div>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span>{author.role}</span>
              <span>•</span>
              <span className="text-zinc-500">{author.location}</span>
            </div>
          </div>
        </div>

        {/* 3-Dots Action Button */}
        <button
          type="button"
          onClick={() => moreSheetRef.current?.present()}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/10"
          aria-label="Post options"
        >
          <img
            src={appImages.threeDots}
            alt="Options"
            className="w-4 h-4 object-contain brightness-150"
          />
        </button>
      </div>

      {/* Media Carousel Showcase */}
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black select-none overflow-hidden cursor-pointer"
        onDoubleClick={handleDoubleTap}
      >
        <img
          src={images[currentSlide]}
          alt={item?.title || "Production Preview"}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Top-Right Badge (e.g., PROJECT • $600 or SLATE • 4K) */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <div
            className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md border border-white/20"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.45)",
            }}
          >
            <span style={{ color: colors.orange }}>
              {item?.postType?.toUpperCase() || "PROJECT"}
            </span>
            <span className="mx-1.5 text-white/40">•</span>
            <span>{item?.price || "4K UHD"}</span>
          </div>

          {images.length > 1 && (
            <div className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/50 backdrop-blur-md border border-white/15">
              {currentSlide + 1}/{images.length}
            </div>
          )}
        </div>

        {/* Carousel Arrow Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/15 transition-all"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/15 transition-all"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Double-tap Heart Pulse Animation */}
        {showHeartPop && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="text-7xl animate-ping duration-500">❤️</div>
          </div>
        )}

        {/* Bottom Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentSlide
                    ? "w-4 bg-pink-500 shadow-sm"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating Signature Action Bar (matching deeds actionBarInner) */}
      <div className="px-4 py-3">
        <div
          className="w-full rounded-2xl p-1.5 border backdrop-blur-xl flex items-center justify-around"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            borderColor: colors.transparentWhite12,
          }}
        >
          {/* Like */}
          <button
            type="button"
            onClick={handleLike}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all hover:bg-white/5 active:scale-95"
            style={{
              color: liked ? colors.storyRing : colors.white,
            }}
          >
            <img
              src={liked ? appImages.heart : appImages.like}
              alt="Like"
              className={`w-4 h-4 object-contain ${liked ? "scale-110" : "invert"}`}
            />
            <span>{likesCount}</span>
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Comment */}
          <button
            type="button"
            onClick={() => commentSheetRef.current?.present()}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-white hover:bg-white/5 transition-all active:scale-95"
          >
            <img
              src={appImages.comment}
              alt="Comment"
              className="w-4 h-4 object-contain invert"
            />
            <span>{item?.comments || 28}</span>
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Rate */}
          <button
            type="button"
            onClick={() => navigate(ROUTES.MOVIE)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-yellow-400 hover:bg-white/5 transition-all active:scale-95"
          >
            <img
              src={appImages.star}
              alt="Rating"
              className="w-4 h-4 object-contain"
            />
            <span>4.9</span>
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Share */}
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(window.location.href);
              showToast("Project link copied to clipboard!");
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-white hover:bg-white/5 transition-all active:scale-95"
          >
            <img
              src={appImages.send}
              alt="Share"
              className="w-4 h-4 object-contain invert"
            />
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Save / Bookmark */}
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all hover:bg-white/5 active:scale-95"
            style={{
              color: saved ? colors.storyRing : colors.white,
            }}
          >
            <img
              src={saved ? appImages.saved : appImages.save}
              alt="Save"
              className={`w-4 h-4 object-contain ${saved ? "" : "invert"}`}
            />
          </button>
        </div>
      </div>

      {/* Description & Caption Area */}
      <div className="px-5 pb-5 pt-1 text-xs">
        <p className="text-zinc-300 leading-relaxed">
          <span className="font-bold text-white mr-2">{author.name}</span>
          {expanded
            ? item?.description ||
              "Principal photography wrapped on our sci-fi short film 'Chronos Fall'. Shot on ARRI Alexa Mini LF paired with Cooke Anamorphic /i lenses. Color grade finalized in DaVinci Resolve with Kodak 2383 emulation."
            : (
                item?.description ||
                "Principal photography wrapped on our sci-fi short film 'Chronos Fall'. Shot on ARRI Alexa Mini LF paired with Cooke Anamorphic /i lenses..."
              ).slice(0, 130) + "... "}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="font-bold text-pink-400 hover:underline ml-1"
          >
            {expanded ? "less" : "more"}
          </button>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {[
            "#IndieFilm",
            "#Cinematography",
            "#ARRI",
            "#Anamorphic",
            "#ColorGrading",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold text-zinc-400 bg-white/5 hover:text-white px-2 py-0.5 rounded-md cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Sheets & Dialogs */}
      <CommentSheet ref={commentSheetRef} />

      {/* Post Options Bottom Sheet matching deeds moreSheet */}
      <CustomBottomSheet
        ref={moreSheetRef}
        title="Production Options"
        subtitle="Manage, explore, or share this cinema entry"
      >
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => {
              moreSheetRef.current?.dismiss();
              navigate(ROUTES.MOVIE);
            }}
            className="w-full flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
          >
            <img
              src={appImages.info}
              alt="Details"
              className="w-4 h-4 object-contain invert"
            />
            <span>Full Details & Film Specs</span>
          </button>

          <button
            type="button"
            onClick={() => {
              handleSave();
              moreSheetRef.current?.dismiss();
            }}
            className="w-full flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
          >
            <img
              src={saved ? appImages.saved : appImages.save}
              alt="Save"
              className="w-4 h-4 object-contain invert"
            />
            <span>{saved ? "Remove from Saved" : "Save to Film Vault"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(window.location.href);
              moreSheetRef.current?.dismiss();
              showToast("Link copied to clipboard!");
            }}
            className="w-full flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
          >
            <img
              src={appImages.copy}
              alt="Copy"
              className="w-4 h-4 object-contain invert"
            />
            <span>Copy Project Link</span>
          </button>

          <button
            type="button"
            onClick={() => {
              moreSheetRef.current?.dismiss();
              showToast("Creator followed! You'll receive slate updates.");
            }}
            className="w-full flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs transition-colors"
          >
            <img
              src={appImages.follow}
              alt="Follow"
              className="w-4 h-4 object-contain invert"
            />
            <span>Follow Creator</span>
          </button>

          <button
            type="button"
            onClick={() => {
              moreSheetRef.current?.dismiss();
              showToast("Post reported. Our curation team will review it.");
            }}
            className="w-full flex items-center gap-3.5 p-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold text-xs transition-colors border border-red-500/20"
          >
            <img
              src={appImages.report}
              alt="Report"
              className="w-4 h-4 object-contain"
            />
            <span>Report Content</span>
          </button>
        </div>
      </CustomBottomSheet>
    </article>
  );
};

export default PostItem;
