import React, { useState } from "react";
import { Header } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

const HIGHLIGHTS = [
  {
    id: "h1",
    title: "ARRI BTS",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "h2",
    title: "Lenses",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "h3",
    title: "Festivals",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "h4",
    title: "Slates",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "h5",
    title: "Awards",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=200&auto=format&fit=crop&q=80",
  },
];

const GRID_POSTS = [
  {
    id: "p1",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    likes: 840,
    type: "project",
  },
  {
    id: "p2",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    likes: 620,
    type: "slate",
  },
  {
    id: "p3",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&auto=format&fit=crop&q=80",
    likes: 1290,
    type: "bite",
  },
  {
    id: "p4",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&auto=format&fit=crop&q=80",
    likes: 960,
    type: "project",
  },
  {
    id: "p5",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
    likes: 710,
    type: "slate",
  },
  {
    id: "p6",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80",
    likes: 1850,
    type: "project",
  },
];

const REEL_POSTS = [
  {
    id: "r1",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    views: "142K",
  },
  {
    id: "r2",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    views: "89K",
  },
  {
    id: "r3",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&auto=format&fit=crop&q=80",
    views: "215K",
  },
  {
    id: "r4",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&auto=format&fit=crop&q=80",
    views: "67K",
  },
];

export const Profile = () => {
  const [activeTab, setActiveTab] = useState(0); // 0: Posts, 1: Reels, 2: Tagged, 3: Saved
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [profileName, setProfileName] = useState("Yuvam Sharma");
  const [profileBio, setProfileBio] = useState(
    "Independent Filmmaker & Director of Photography 🎬 • ARRI Mini LF & Cooke Anamorphic /i • Based in Mumbai / Los Angeles • Currently shooting 'Neon Shadows'",
  );
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-2xl">
          {toastMsg}
        </div>
      )}

      {/* Header */}
      <Header
        label="@yuvam_director"
        hasLeftButton={false}
        rightIcon={appImages.settings}
        onRightPress={() => navigate(ROUTES.SETTINGS)}
      />

      <div className="max-w-4xl mx-auto px-4 pt-4">
        {/* Profile Card Header */}
        <div className="p-6 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl mb-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar with Signature Story Ring */}
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 shrink-0"
              style={{
                background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.storyRing} 50%, ${colors.purple} 100%)`,
              }}
            >
              <img
                src={appImages.dummyuser}
                alt={profileName}
                className="w-full h-full rounded-full object-cover border-4 border-[#07111d]"
              />
            </div>

            {/* Profile Info & Metrics */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h2 className="text-xl font-extrabold text-white tracking-wide">
                      {profileName}
                    </h2>
                    <span className="w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">
                      ✓
                    </span>
                  </div>
                  <p className="text-xs text-pink-400 font-semibold tracking-wider uppercase mt-0.5">
                    Director & Cinematographer
                  </p>
                </div>

                {/* Edit & Share Buttons matching deeds */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditProfileOpen(true)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    Edit Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      showToast("Profile link copied!");
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    Share
                  </button>
                </div>
              </div>

              {/* Stats Counters matching deeds profileStats */}
              <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-2xl bg-white/[0.03] border border-white/5 my-3">
                <div className="text-center">
                  <span className="block text-base font-extrabold text-white">
                    42
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Posts
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-base font-extrabold text-white">
                    18.4K
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Followers
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-base font-extrabold text-white">
                    385
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Following
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-base font-extrabold text-pink-400">
                    2.4M
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Views
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-zinc-300 leading-relaxed max-w-xl">
                {profileBio}
              </p>

              {/* Verified Gear Kit Badges */}
              <div className="flex flex-wrap gap-1.5 mt-3 justify-center sm:justify-start">
                {[
                  "ARRI Alexa Mini LF",
                  "Cooke Anamorphics",
                  "DaVinci Studio",
                  "Stunt Choreography",
                ].map((gear) => (
                  <span
                    key={gear}
                    className="text-[10px] font-semibold text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5"
                  >
                    {gear}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Row matching deeds HIGHLIGHTS */}
          <div className="mt-6 pt-5 border-t border-white/10 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group select-none"
                  onClick={() =>
                    showToast(`Opening "${item.title}" collection`)
                  }
                >
                  <div className="w-14 h-14 rounded-full p-0.5 bg-white/15 group-hover:scale-105 transition-transform duration-200 border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-medium text-zinc-300 group-hover:text-white">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Tabs matching deeds activeTab (Posts, Reels, Tagged, Saved) */}
        <div className="flex border-b border-white/10 mb-4">
          {[
            { id: 0, label: "Projects & Slates", icon: appImages.posts },
            { id: 1, label: "Reels & Bites", icon: appImages.reels },
            { id: 2, label: "Film Credits", icon: appImages.tag },
            { id: 3, label: "Saved Vault", icon: appImages.saved },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-pink-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                className={`w-3.5 h-3.5 object-contain ${
                  activeTab === tab.id ? "" : "invert opacity-50"
                }`}
              />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 0: Posts Grid */}
        {activeTab === 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {GRID_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(ROUTES.MOVIE)}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
              >
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 text-white font-bold text-xs">
                  <span>❤️ {post.likes}</span>
                  <span className="uppercase text-[10px] px-2 py-0.5 rounded bg-white/20">
                    {post.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 1: Reels Grid */}
        {activeTab === 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {REEL_POSTS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => navigate(ROUTES.REELS)}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
              >
                <img
                  src={reel.image}
                  alt="Reel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-[11px] font-bold text-white drop-shadow">
                  <img
                    src={appImages.play}
                    alt="Views"
                    className="w-3 h-3 object-contain invert"
                  />
                  <span>{reel.views}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Tagged Credits */}
        {activeTab === 2 && (
          <div className="p-8 text-center rounded-3xl bg-white/[0.02] border border-white/5">
            <h4 className="text-sm font-bold text-white mb-1">
              Verified Credits & Collaborations
            </h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Credited in 6 international feature films and festival short
              selections as DP and Lead Editor.
            </p>
          </div>
        )}

        {/* Tab 3: Saved Vault */}
        {activeTab === 3 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {GRID_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(ROUTES.MOVIE)}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
              >
                <img
                  src={post.image}
                  alt="Saved"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Profile Modal */}
      {editProfileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setEditProfileOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#0d1627] border border-white/15 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">
                Edit Filmmaker Profile
              </h3>
              <button
                onClick={() => setEditProfileOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-pink-500/60"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Bio & Filmography
                </label>
                <textarea
                  rows={3}
                  value={profileBio}
                  onChange={(e) => setProfileBio(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-pink-500/60"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setEditProfileOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-zinc-400 bg-white/5 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditProfileOpen(false);
                    showToast("Profile changes saved successfully!");
                  }}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg shadow-pink-500/25"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
