import React, { useState, useRef } from "react";
import { CustomBottomSheet } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { goBack, navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

const CAST_AND_CREW = [
  {
    id: "cr1",
    name: "Kabir Khan",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "cr2",
    name: "Siddharth Roy",
    role: "Producer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "cr3",
    name: "Salim Khan",
    role: "Writer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "c1",
    name: "Aarav Sharma",
    role: "Lead Actor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "c2",
    name: "Rhea Kapoor",
    role: "Lead Actress",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "c3",
    name: "Devendra Verma",
    role: "Antagonist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
  },
];

const TRAILERS = [
  {
    id: "t1",
    title: "Official Festival Trailer",
    duration: "2:30",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "t2",
    title: "BTS: 60mph Stunts & Camera Tracking",
    duration: "3:45",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "t3",
    title: "Director's Cut & Audio Commentary",
    duration: "5:12",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "t4",
    title: "VFX & Dolby Atmos Breakdown",
    duration: "4:20",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&auto=format&fit=crop&q=80",
  },
];

const REVIEWS = [
  {
    id: "r1",
    name: "Alex Rivera",
    rating: 5,
    date: "2 days ago",
    comment:
      "Absolute indie cinema masterpiece! The anamorphic bokeh and deliberate camera pans keep you in constant tension.",
  },
  {
    id: "r2",
    name: "Sarah Jenkins",
    rating: 4.5,
    date: "1 week ago",
    comment:
      "Incredible performances by the lead cast. A must-watch for anyone who loves grounded psychological thrillers.",
  },
  {
    id: "r3",
    name: "Rohan Gupta",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Top notch direction and background sound mixing. The plot twists in the third act completely blew me away!",
  },
];

export const Movie = () => {
  const ratingSheetRef = useRef(null);
  const [userRating, setUserRating] = useState(5);
  const [reviewNote, setReviewNote] = useState("");
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleRateSubmit = () => {
    if (reviewNote.trim()) {
      setReviewsList([
        {
          id: `rev_${Date.now()}`,
          name: "Yuvam Sharma",
          rating: userRating,
          date: "Just now",
          comment: reviewNote.trim(),
        },
        ...reviewsList,
      ]);
    }
    ratingSheetRef.current?.dismiss();
    setReviewNote("");
    showToast(`Submitted ${userRating}-star critique!`);
  };

  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-2xl">
          {toastMsg}
        </div>
      )}

      {/* Hero Cinematic Poster Banner matching deeds heroContainer */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&auto=format&fit=crop&q=80"
          alt="Dhanda Empire"
          className="w-full h-full object-cover"
        />

        {/* Cinematic Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111d] via-[#07111d]/50 to-black/60" />

        {/* Floating Back Button */}
        <button
          type="button"
          onClick={goBack}
          className="absolute top-6 left-6 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/15 transition-all shadow-xl"
        >
          <img
            src={appImages.backarrow}
            alt="Back"
            className="w-4 h-4 object-contain invert"
          />
        </button>

        {/* Hero Play Trailer Button with signature gradient circle */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            type="button"
            onClick={() => showToast("Streaming 4K Ultra HD Trailer...")}
            className="w-20 h-20 rounded-full p-1 shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
            style={{
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.storyRing} 50%, ${colors.purple} 100%)`,
            }}
          >
            <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <img
                src={appImages.play}
                alt="Play"
                className="w-8 h-8 object-contain invert translate-x-1 group-hover:scale-110 transition-transform"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Main Details Section */}
      <main className="max-w-4xl mx-auto px-4 -mt-16 relative z-20">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
            Dhanda Empire
          </h1>
          <p className="text-sm font-semibold text-zinc-400 mb-3">
            The rise and battle for supreme control.
          </p>

          {/* Meta Badges Row */}
          <div className="flex flex-wrap items-center gap-2">
            {["2026", "U/A 16+", "2h 15m"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-white/10 text-zinc-300 border border-white/10"
              >
                {badge}
              </span>
            ))}
            <span
              className="px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white shadow-md"
              style={{
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
              }}
            >
              4K Ultra HD
            </span>
          </div>
        </div>

        {/* Synopsis */}
        <section className="mb-8 p-6 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
            Synopsis
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Set in the sprawling underbelly of Mumbai and the Mojave badlands,
            'Dhanda Empire' chronicles the covert rise of a visionary logistics
            magnate caught between syndicate crosshairs and federal
            surveillance. Captured natively in 4K anamorphic on ARRI Alexa 35.
          </p>
        </section>

        {/* Ratings Summary Card matching deeds ratingsCard */}
        <section className="mb-8 p-6 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={appImages.star}
              alt="Rating"
              className="w-8 h-8 object-contain"
            />
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white">4.8</span>
                <span className="text-sm text-zinc-500 font-bold">/ 5.0</span>
              </div>
              <span className="text-xs text-zinc-400">
                (1,240 Indie Ratings)
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => ratingSheetRef.current?.present()}
            className="px-6 py-3 rounded-2xl text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
            }}
          >
            ★ Rate Film & Write Review
          </button>
        </section>

        {/* Cast & Crew Horizontal Carousel matching deeds DUMMY_CAST_AND_CREW */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Cast & Production Crew
          </h3>
          <div className="overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center gap-4">
              {CAST_AND_CREW.map((person) => (
                <div
                  key={person.id}
                  onClick={() => navigate(ROUTES.PROFILE)}
                  className="w-32 shrink-0 p-3 rounded-2xl bg-[#0c1424]/80 border border-white/5 hover:border-pink-500/40 cursor-pointer text-center group transition-colors"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-16 h-16 rounded-full mx-auto mb-2 object-cover border-2 border-white/10 group-hover:scale-105 transition-transform"
                  />
                  <h4 className="text-xs font-bold text-white truncate group-hover:text-pink-400">
                    {person.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 mt-0.5 truncate">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trailers & BTS Carousel matching deeds DUMMY_TRAILERS */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Trailers, Stunts & BTS Reels
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRAILERS.map((trailer) => (
              <div
                key={trailer.id}
                onClick={() => showToast(`Playing ${trailer.title}`)}
                className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-black aspect-video"
              >
                <img
                  src={trailer.image}
                  alt={trailer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-bold text-white drop-shadow">
                  <span className="truncate mr-2">{trailer.title}</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-[10px]">
                    {trailer.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audience Reviews */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Filmmaker Critiques & Reviews ({reviewsList.length})
          </h3>
          <div className="space-y-3">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="p-4 rounded-2xl bg-[#0c1424]/80 border border-white/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">
                      {rev.name}
                    </span>
                    <span className="text-xs text-yellow-400">
                      {"★".repeat(Math.round(rev.rating))}
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-500">{rev.date}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {rev.comment}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rating Sheet Modal */}
      <CustomBottomSheet
        ref={ratingSheetRef}
        title="Critique 'Dhanda Empire'"
        subtitle="Share your rating with the independent cinema community"
      >
        <div className="space-y-4">
          <div className="flex justify-center gap-2 py-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setUserRating(star)}
                className="text-3xl transition-transform hover:scale-125"
              >
                {star <= userRating ? "⭐" : "☆"}
              </button>
            ))}
          </div>

          <textarea
            rows={3}
            value={reviewNote}
            onChange={(e) => setReviewNote(e.target.value)}
            placeholder="Write your notes on cinematography, directing, and score..."
            className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-pink-500/60"
          />

          <button
            type="button"
            onClick={handleRateSubmit}
            className="w-full py-3 rounded-xl text-xs font-bold text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
            }}
          >
            Submit Review
          </button>
        </div>
      </CustomBottomSheet>
    </div>
  );
};

export default Movie;
