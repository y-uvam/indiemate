import React, { useState, useRef, useMemo } from "react";
import { Header, Filter } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

const CATEGORIES = [
  "All",
  "Feature Films",
  "Cinematography",
  "Short Films",
  "Noir & Thriller",
  "Color Grading",
  "Lighting Slates",
  "Sound Design",
  "Sci-Fi",
  "Documentary",
];

const EXPLORE_POSTS = [
  {
    id: "ex_1",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80",
    title: "Midnight Drift",
    author: "Kabir Khan",
    likes: 1420,
    comments: 89,
    type: "project",
    tag: "FEATURE • 4K",
    isLarge: true,
  },
  {
    id: "ex_2",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80",
    title: "Cyberpunk Studio Slate",
    author: "Rhea Kapoor",
    likes: 830,
    comments: 42,
    type: "slate",
    tag: "SLATE",
  },
  {
    id: "ex_3",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=800&auto=format&fit=crop&q=80",
    title: "Anamorphic Flares 35mm",
    author: "Elena Rostova",
    likes: 540,
    comments: 29,
    type: "bite",
    tag: "BITE",
  },
  {
    id: "ex_4",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80",
    title: "Neon Shadows Overdrive",
    author: "Aarav Sharma",
    likes: 960,
    comments: 63,
    type: "project",
    tag: "SHORT FILM",
  },
  {
    id: "ex_5",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
    title: "Kodak 5219 Grain Emulation",
    author: "Marcus Vance",
    likes: 710,
    comments: 31,
    type: "slate",
    tag: "COLOR GRADE",
  },
  {
    id: "ex_6",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
    title: "Desert Solitude",
    author: "Chloe Zhao",
    likes: 1850,
    comments: 140,
    type: "project",
    tag: "FEATURE • 8K",
    isLarge: true,
  },
  {
    id: "ex_7",
    image:
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&auto=format&fit=crop&q=80",
    title: "Night Sequence Lighting Plot",
    author: "Siddharth Roy",
    likes: 490,
    comments: 18,
    type: "slate",
    tag: "GEAR PLOT",
  },
  {
    id: "ex_8",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    title: "Virtual Production LED Volume",
    author: "Devendra Verma",
    likes: 670,
    comments: 24,
    type: "project",
    tag: "VIRTUAL PROD",
  },
  {
    id: "ex_9",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80",
    title: "Sound Stage Frequencies",
    author: "Alex Rivera",
    likes: 420,
    comments: 15,
    type: "bite",
    tag: "ATMOS",
  },
  {
    id: "ex_10",
    image:
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&auto=format&fit=crop&q=80",
    title: "Golden Hour Steadicam Run",
    author: "Sarah Jenkins",
    likes: 1100,
    comments: 72,
    type: "bite",
    tag: "CAMERA OP",
  },
  {
    id: "ex_11",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    title: "Vintage Lenses Comparison",
    author: "Karan Johar",
    likes: 930,
    comments: 51,
    type: "slate",
    tag: "LENS TEST",
  },
];

export const Browse = () => {
  const filterRef = useRef(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return EXPLORE_POSTS.filter((post) => {
      const matchSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase());
      const matchCat =
        selectedCategory === "All" ||
        post.tag.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        post.type.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchSearch && matchCat;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      {/* Header */}
      <Header
        label="Explore & Discover"
        hasLeftButton={false}
        filterIcon={true}
        onFilterPress={() => filterRef.current?.present()}
      />

      <div className="max-w-6xl mx-auto px-4 pt-4">
        {/* Search Bar Bar Matching deeds CustomSearch */}
        <div className="relative mb-4 flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search films, cinematography styles, rigs, or directors..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500/60 transition-colors"
            />
            <img
              src={appImages.browse}
              alt="Search"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 object-contain invert opacity-60"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-zinc-300"
              >
                ✕
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => filterRef.current?.present()}
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
            title="Filters"
          >
            <img
              src={appImages.filter}
              alt="Filter"
              className="w-5 h-5 object-contain invert"
            />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="overflow-x-auto no-scrollbar pb-3 mb-4">
          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? "text-white shadow-lg shadow-pink-500/20"
                      : "text-zinc-400 bg-white/5 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                  style={
                    active
                      ? {
                          background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing}, ${colors.purple})`,
                        }
                      : {}
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Dynamic Explore Grid matching deeds COLUMN_WIDTH & LARGE_TILE */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
          {filteredPosts.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => navigate(ROUTES.MOVIE)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 ${
                item.isLarge
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-square"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tag Badge */}
              <div className="absolute top-2.5 right-2.5 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/15">
                  {item.tag}
                </span>
              </div>

              {/* Hover Dark Vignette & Meta Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-sm font-bold text-white leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 font-medium mb-3">
                  {item.author}
                </p>

                <div className="flex items-center gap-4 text-xs font-bold text-white">
                  <span className="flex items-center gap-1.5">
                    <img
                      src={appImages.heart}
                      alt="Likes"
                      className="w-3.5 h-3.5 object-contain"
                    />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <img
                      src={appImages.comment}
                      alt="Comments"
                      className="w-3.5 h-3.5 object-contain invert"
                    />
                    {item.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Filter ref={filterRef} />
    </div>
  );
};

export default Browse;
