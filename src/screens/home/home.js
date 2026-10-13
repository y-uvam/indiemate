import React, { useRef, useState } from "react";
import { Header, PostItem, Filter, ContentTypeSheet } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

const CREATOR_STORIES = [
  {
    id: "s1",
    name: "Aarav Sharma",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    hasUnseen: true,
    role: "Director",
  },
  {
    id: "s2",
    name: "Rhea Kapoor",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    hasUnseen: true,
    role: "DP / 35mm",
  },
  {
    id: "s3",
    name: "Kabir Khan",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    hasUnseen: true,
    role: "Writer",
  },
  {
    id: "s4",
    name: "Elena Rostova",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    hasUnseen: false,
    role: "Sound Mixer",
  },
  {
    id: "s5",
    name: "Marcus Vance",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    hasUnseen: true,
    role: "Colorist",
  },
  {
    id: "s6",
    name: "Chloe Zhao",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    hasUnseen: false,
    role: "Producer",
  },
];

const FEED_DATA = [
  {
    id: "1",
    price: "$600 / Day",
    postType: "project",
    title: "Dhanda Empire - Teaser & Casting Call",
    description:
      "Looking for supporting actors and 1st AC in Los Angeles / Mumbai for our upcoming feature noir thriller 'Dhanda Empire'. Shot entirely on ARRI Alexa 35 with vintage Hawk Anamorphic lenses.",
    likes: 842,
    comments: 54,
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1200&auto=format&fit=crop&q=80",
    ],
    author: {
      name: "Kabir Khan",
      handle: "@kabirkhan_films",
      role: "Director & Producer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      location: "Los Angeles • Feature Noir",
    },
  },
  {
    id: "2",
    price: "4K DCI",
    postType: "slate",
    title: "Lighting Setup Breakdown: Neon Rain Sequence",
    description:
      "Detailed lighting slate breakdown from yesterday's night shoot. Key light: Aputure 600c through 8x8 Magic Cloth. Edge: Nanlite Pavotubes dialed to 240° hue with 80% saturation. Shot on RED V-Raptor.",
    likes: 620,
    comments: 39,
    images: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1200&auto=format&fit=crop&q=80",
    ],
    author: {
      name: "Rhea Kapoor",
      handle: "@rheak_cinema",
      role: "Cinematographer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      location: "Vancouver • Cine Slates",
    },
  },
  {
    id: "3",
    price: "Vertical Proof",
    postType: "bite",
    title: "Silent Horizon - Micro-Short Proof of Concept",
    description:
      "Proof of concept cut for our underground short film. Captured during sunset golden hour in the Mojave desert. Full sound design performed in Dolby Atmos.",
    likes: 1290,
    comments: 112,
    images: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&auto=format&fit=crop&q=80",
    ],
    author: {
      name: "Aarav Sharma",
      handle: "@aarav_sharma",
      role: "Writer & Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      location: "Austin • Indie Horizon",
    },
  },
];

export const Home = () => {
  const filterRef = useRef(null);
  const contentTypeRef = useRef(null);
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      {/* Header matching deeds */}
      <Header
        isHome={true}
        leftButton={appImages.plus}
        leftButtonPress={() => contentTypeRef.current?.present()}
        filterIcon={true}
        onFilterPress={() => filterRef.current?.present()}
      />

      <main className="max-w-4xl mx-auto px-4 pt-4">
        {/* Creator Stories Reel Bar */}
        <section className="mb-6 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-4">
            {/* User "Add Story" Slot */}
            <div
              onClick={() => contentTypeRef.current?.present()}
              className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group select-none"
            >
              <div className="relative w-16 h-16 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={appImages.dummyuser}
                  alt="Your story"
                  className="w-full h-full rounded-full object-cover border-2 border-[#07111d]"
                />
                <span
                  className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                  }}
                >
                  +
                </span>
              </div>
              <span className="text-[11px] font-medium text-zinc-400 group-hover:text-white">
                Your Slate
              </span>
            </div>

            {/* Other Creators' Active Stories */}
            {CREATOR_STORIES.map((story) => (
              <div
                key={story.id}
                onClick={() => setActiveStory(story)}
                className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group select-none"
              >
                <div
                  className="w-16 h-16 rounded-full p-0.5 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: story.hasUnseen
                      ? `linear-gradient(135deg, ${colors.orange} 0%, ${colors.storyRing} 50%, ${colors.purple} 100%)`
                      : "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-full h-full rounded-full object-cover border-2 border-[#07111d]"
                  />
                </div>
                <span className="text-[11px] font-medium text-zinc-300 group-hover:text-white max-w-[70px] truncate">
                  {story.name.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Stories Preview Modal if clicked */}
        {activeStory && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setActiveStory(null)}
          >
            <div
              className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={FEED_DATA[0].images[0]}
                alt="Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2">
                  <img
                    src={activeStory.avatar}
                    alt={activeStory.name}
                    className="w-8 h-8 rounded-full border border-white"
                  />
                  <div>
                    <span className="text-xs font-bold block leading-tight">
                      {activeStory.name}
                    </span>
                    <span className="text-[10px] text-zinc-300">
                      {activeStory.role}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feed Posts List */}
        <section className="space-y-6">
          {FEED_DATA.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </section>
      </main>

      {/* Filter Bottom Sheet */}
      <Filter
        ref={filterRef}
        onFilterChange={(filters) => console.log("Filters applied:", filters)}
      />

      {/* Content Type Bottom Sheet */}
      <ContentTypeSheet
        ref={contentTypeRef}
        onSelectType={(type) => {
          if (type === "project") navigate(ROUTES.MOVIE);
          else if (type === "bite") navigate(ROUTES.REELS);
          else navigate(ROUTES.HOME);
        }}
      />
    </div>
  );
};

export default Home;
