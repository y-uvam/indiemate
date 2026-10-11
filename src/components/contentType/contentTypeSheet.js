import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { colors } from "../../utils";
import { appImages } from "../../assets";
import { CustomBottomSheet } from "../customBottomSheet/customBottomSheet";

export const ContentTypeSheet = forwardRef(({ onSelectType }, ref) => {
  const sheetRef = useRef(null);

  useImperativeHandle(ref, () => ({
    present: () => sheetRef.current?.present(),
    dismiss: () => sheetRef.current?.dismiss(),
  }));

  const types = [
    {
      id: "project",
      title: "New Film / Project",
      subtitle: "Upload feature film, short, pitch slate, or indie collaboration",
      icon: appImages.project,
      gradient: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
      tag: "FEATURE / SHORT",
    },
    {
      id: "slate",
      title: "Production Slate & Notes",
      subtitle: "Share call sheets, lighting plots, crew vacancies, or gear lists",
      icon: appImages.slate,
      gradient: `linear-gradient(135deg, ${colors.storyRing}, ${colors.purple})`,
      tag: "BTS & SPECS",
    },
    {
      id: "bite",
      title: "Vertical Reel / Bite",
      subtitle: "Post a 9:16 vertical proof of concept, showreel, or quick scene",
      icon: appImages.reels,
      gradient: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.purple})`,
      tag: "VERTICAL 4K",
    },
  ];

  const handleSelect = (id) => {
    sheetRef.current?.dismiss();
    if (onSelectType) onSelectType(id);
    else alert(`Create ${id.toUpperCase()} workflow triggered!`);
  };

  return (
    <CustomBottomSheet
      ref={sheetRef}
      title="Create New Production"
      subtitle="Select the format for your indie cinema release"
    >
      <div className="space-y-3">
        {types.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink-500/50 hover:bg-white/[0.08] cursor-pointer transition-all duration-200 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 shadow-lg group-hover:scale-105 transition-transform"
              style={{ background: item.gradient }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain brightness-200"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {item.title}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-pink-300">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                {item.subtitle}
              </p>
            </div>

            <img
              src={appImages.skipForward}
              alt="Go"
              className="w-4 h-4 object-contain opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            />
          </div>
        ))}
      </div>
    </CustomBottomSheet>
  );
});

export default ContentTypeSheet;
