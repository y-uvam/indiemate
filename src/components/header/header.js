import React from "react";
import { RoundIconButton } from "./RoundIconButton";
import { appImages } from "../../assets";
import { colors, commonText } from "../../utils";
import { goBack, navigate } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

export const Header = ({
  leftButton,
  leftButtonPress,
  hasLeftButton = true,
  customTitle,
  label,
  isHome = false,
  filterIcon = false,
  onFilterPress,
  rightIcon,
  onRightPress,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-xl border-b border-white/[0.08] bg-[#07111d]/85">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {hasLeftButton && (
            <RoundIconButton
              icon={leftButton || appImages.backarrow}
              onPress={leftButtonPress ? leftButtonPress : goBack}
              ariaLabel="Navigate"
            />
          )}

          {customTitle ? (
            customTitle
          ) : isHome ? (
            <div className="flex items-center gap-2">
              <span
                className="text-lg font-black tracking-wider uppercase"
                style={{
                  background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.storyRing} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {commonText.appName}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/10 text-pink-300 border border-pink-500/20">
                FILM FEED
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white tracking-wide">
                {label}
              </h2>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5">
          {rightIcon ? (
            <RoundIconButton
              icon={rightIcon}
              onPress={onRightPress}
              ariaLabel="Right Action"
            />
          ) : (
            isHome && (
              <RoundIconButton
                icon={appImages.bell}
                badge={3}
                onPress={() => navigate(ROUTES.NOTIFICATIONS)}
                ariaLabel="Notifications"
              />
            )
          )}

          {filterIcon && (
            <RoundIconButton
              icon={appImages.filter}
              onPress={onFilterPress}
              ariaLabel="Filter"
            />
          )}
        </div>
      </div>
    </header>
  );
};
