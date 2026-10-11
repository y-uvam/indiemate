import React from "react";
import { colors } from "../../utils";

export const RoundIconButton = ({
  icon,
  onPress,
  isGradient = false,
  badge = null,
  className = "",
  ariaLabel = "Action",
}) => {
  return (
    <button
      type="button"
      onClick={onPress}
      aria-label={ariaLabel}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 group ${
        isGradient
          ? "shadow-lg shadow-pink-500/25"
          : "bg-white/5 hover:bg-white/10 border border-white/10"
      } ${className}`}
      style={
        isGradient
          ? {
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.storyRing} 50%, ${colors.lightRed} 100%)`,
            }
          : {}
      }
    >
      {typeof icon === "string" ? (
        <img
          src={icon}
          alt={ariaLabel}
          className="w-4 h-4 object-contain brightness-200 filter group-hover:scale-110 transition-transform"
        />
      ) : (
        icon
      )}

      {badge !== null && badge > 0 && (
        <span
          className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center text-white border border-[#051424]"
          style={{
            background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
};
