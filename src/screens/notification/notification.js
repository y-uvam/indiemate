import React, { useState } from "react";
import { Header } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

const CATEGORIES = [
  { key: "all", label: "All", icon: appImages.bell },
  { key: "likes", label: "Likes", icon: appImages.heart },
  { key: "comments", label: "Comments", icon: appImages.comment },
  { key: "ratings", label: "Ratings", icon: appImages.star },
  { key: "mentions", label: "Mentions", icon: appImages.mention },
  { key: "followers", label: "Followers", icon: appImages.follow },
  { key: "monetization", label: "Finance", icon: appImages.monetize },
];

const INITIAL_NOTIFICATIONS = [
  {
    id: "n1",
    type: "likes",
    user: "mike_builds",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    action: "appreciated your recent Slate 'Cinematography Essentials'",
    time: "2m ago",
    read: false,
    badgeColor: colors.red,
    icon: appImages.heart,
  },
  {
    id: "n2",
    type: "ratings",
    user: "jessica_art",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    action: "left a review on your short film 'Neon Dreams'",
    highlightText: '"Masterpiece of visual storytelling! 5.0 ★"',
    time: "15m ago",
    read: false,
    badgeColor: colors.yellow,
    icon: appImages.star,
  },
  {
    id: "n3",
    type: "monetization",
    user: "IndieMate Finance",
    avatar: appImages.dummyuser,
    action: "Stripe payout of $1,420.00 processed for Q3 Creator Grants",
    time: "1h ago",
    read: true,
    badgeColor: colors.onlineGreen,
    icon: appImages.monetize,
  },
  {
    id: "n4",
    type: "followers",
    user: "roger_deakins",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    action: "started following your production dispatch",
    time: "3h ago",
    read: true,
    badgeColor: colors.primaryBlue,
    icon: appImages.follow,
  },
  {
    id: "n5",
    type: "comments",
    user: "claudia_vfx",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    action: "commented on 'Low Light Anamorphic': 'Which sensor calibration did you use?'",
    time: "1d ago",
    read: true,
    badgeColor: colors.storyRing,
    icon: appImages.comment,
  },
];

export const Notification = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const filtered = notifications.filter(
    (n) => activeTab === "all" || n.type === activeTab
  );

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      <Header
        label="Activity & Notifications"
        rightIcon={appImages.check}
        onRightPress={markAllRead}
      />

      <div className="max-w-3xl mx-auto px-4 pt-4">
        {/* Categories Bar */}
        <div className="overflow-x-auto no-scrollbar pb-3 mb-4">
          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    active
                      ? "text-white shadow-md shadow-pink-500/20"
                      : "text-zinc-400 bg-white/5 hover:bg-white/10"
                  }`}
                  style={
                    active
                      ? {
                          background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                        }
                      : {}
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(ROUTES.HOME)}
              className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-colors cursor-pointer ${
                item.read
                  ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.05]"
                  : "bg-white/[0.06] border-pink-500/30 hover:bg-white/[0.09]"
              }`}
            >
              <div className="relative w-11 h-11 rounded-full shrink-0">
                <img
                  src={item.avatar}
                  alt={item.user}
                  className="w-full h-full rounded-full object-cover border border-white/10"
                />
                <span
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center p-1 border-2 border-[#07111d]"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  <img
                    src={item.icon}
                    alt={item.type}
                    className="w-full h-full object-contain invert"
                  />
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-200 leading-snug">
                  <span className="font-bold text-white mr-1.5">{item.user}</span>
                  {item.action}
                </p>

                {item.highlightText && (
                  <p className="text-[11px] text-pink-300 font-medium mt-1 bg-white/5 p-2 rounded-lg border border-white/5">
                    {item.highlightText}
                  </p>
                )}

                <span className="text-[10px] text-zinc-500 block mt-1.5">
                  {item.time}
                </span>
              </div>

              {!item.read && (
                <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0 self-center" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
