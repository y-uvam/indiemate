import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { colors } from "../../utils";
import { CustomBottomSheet } from "../customBottomSheet/customBottomSheet";

export const Filter = forwardRef(({ onFilterChange }, ref) => {
  const sheetRef = useRef(null);
  const [activeContent, setActiveContent] = useState("Bites");
  const [activeGenre, setActiveGenre] = useState("All");
  const [activeSort, setActiveSort] = useState("Newest");

  const contentTypes = ["Bites", "Slates", "Projects"];
  const genres = [
    "All",
    "Drama",
    "Horror",
    "Experimental",
    "Comedy",
    "Action",
    "Sci-Fi",
    "Documentary",
  ];
  const sortOptions = ["Newest", "For You", "Top Rated", "Trending"];

  useImperativeHandle(ref, () => ({
    present: () => sheetRef.current?.present(),
    dismiss: () => sheetRef.current?.dismiss(),
  }));

  const handleApply = () => {
    if (onFilterChange) {
      onFilterChange({
        content: activeContent,
        genre: activeGenre,
        sort: activeSort,
      });
    }
    sheetRef.current?.dismiss();
  };

  return (
    <CustomBottomSheet
      ref={sheetRef}
      title="Filter Feed & Discovery"
      subtitle="Refine content across genres and production formats"
    >
      <div className="space-y-6">
        {/* Content Type Section */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Content Type
          </span>
          <div className="flex flex-wrap gap-2.5">
            {contentTypes.map((item) => {
              const active = activeContent === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveContent(item)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "text-white shadow-lg shadow-pink-500/20"
                      : "text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                  style={
                    active
                      ? {
                          background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing}, ${colors.purple})`,
                          border: "1px solid transparent",
                        }
                      : {}
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Genre Section */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Genre & Theme
          </span>
          <div className="flex flex-wrap gap-2">
            {genres.map((item) => {
              const active = activeGenre === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveGenre(item)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    active
                      ? "text-white shadow-md shadow-pink-500/20"
                      : "text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/5"
                  }`}
                  style={
                    active
                      ? {
                          background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                        }
                      : {}
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Sort By
          </span>
          <div className="flex flex-wrap gap-2.5">
            {sortOptions.map((item) => {
              const active = activeSort === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveSort(item)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "text-white shadow-md shadow-blue-500/20"
                      : "text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                  style={
                    active
                      ? {
                          background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.purple})`,
                        }
                      : {}
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Apply Button */}
        <div className="pt-4 border-t border-white/10 flex gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveContent("Bites");
              setActiveGenre("All");
              setActiveSort("Newest");
            }}
            className="flex-1 py-3 rounded-2xl text-xs font-bold text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="flex-1 py-3 rounded-2xl text-xs font-bold text-white shadow-lg shadow-pink-500/25 transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.storyRing} 50%, ${colors.purple} 100%)`,
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </CustomBottomSheet>
  );
});

export default Filter;
