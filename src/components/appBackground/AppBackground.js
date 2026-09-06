import React from "react";
import { Lottie } from "lottie-react";
import { colors } from "../../utils";
import { animations } from "../../assets";

export const AppBackground = ({
  children,
  className = "",
  style = {},
  withAnimation = true,
  animationData = animations?.background,
  animationOpacity = 0.6,
  animationFixed = true,
  loop = true,
  autoplay = true,
  withGlow = true,
  glowVariant = "default",
  overflowHidden = true,
  as: Component = "div",
  ...rest
}) => {
  const resolvedAnimation = animationData?.default || animationData;

  return (
    <Component
      className={`min-h-screen w-full relative flex flex-col font-sans ${
        overflowHidden ? "overflow-x-hidden" : ""
      } ${className}`.trim()}
      style={{
        backgroundColor: colors.background,
        color: colors.offwhite,
        ...style,
      }}
      {...rest}
    >
      {/* Background Lottie Animation Layer */}
      {withAnimation && resolvedAnimation && (
        <div
          className={`pointer-events-none select-none z-0 overflow-hidden ${
            animationFixed ? "fixed inset-0" : "absolute inset-0"
          }`}
          style={{ opacity: animationOpacity }}
          aria-hidden="true"
        >
          <Lottie
            src={resolvedAnimation}
            animationData={resolvedAnimation}
            loop={loop}
            autoplay={autoplay}
            className="w-full h-full"
            style={{
              width: "100%",
              height: "100%",
            }}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid slice",
            }}
          />
        </div>
      )}

      {/* Ambient background glow layers */}
      {withGlow && glowVariant !== "none" && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
          aria-hidden="true"
        >
          {/* Top-center / primary glow */}
          <div
            className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[480px] rounded-full opacity-50 blur-[120px] transition-opacity duration-700"
            style={{
              background:
                glowVariant === "cinema"
                  ? `radial-gradient(circle, ${colors.magenta} 0%, ${colors.darkblue} 70%, transparent 100%)`
                  : glowVariant === "subtle"
                  ? `radial-gradient(circle, ${colors.primaryBlue}20 0%, ${colors.purple}10 50%, transparent 80%)`
                  : `radial-gradient(circle, ${colors.primaryBlue}33 0%, ${colors.purple}20 45%, transparent 75%)`,
            }}
          />

          {/* Top-right accent glow */}
          <div
            className="absolute top-[5%] -right-[10%] sm:right-[5%] w-[480px] max-w-[80vw] h-[400px] rounded-full opacity-35 blur-[100px] transition-opacity duration-700"
            style={{
              background:
                glowVariant === "cinema"
                  ? `radial-gradient(circle, ${colors.storyRing}40 0%, ${colors.magenta}20 50%, transparent 80%)`
                  : `radial-gradient(circle, ${colors.storyRing}33 0%, ${colors.pink}22 45%, transparent 75%)`,
            }}
          />

          {/* Mid-page subtle fill glow */}
          <div
            className="absolute top-[45%] -left-[10%] w-[500px] max-w-[70vw] h-[450px] rounded-full opacity-20 blur-[130px]"
            style={{
              background: `radial-gradient(circle, ${colors.primaryBlue}25 0%, ${colors.purple}15 50%, transparent 75%)`,
            }}
          />

          {/* Bottom ambient glow */}
          <div
            className="absolute bottom-0 right-1/4 w-[600px] max-w-[85vw] h-[350px] rounded-full opacity-15 blur-[140px]"
            style={{
              background: `radial-gradient(circle, ${colors.purple}30 0%, ${colors.darkblue} 60%, transparent 80%)`,
            }}
          />
        </div>
      )}

      {/* Page content layer */}
      <div className="relative z-10 flex-1 flex flex-col w-full">
        {children}
      </div>
    </Component>
  );
};
