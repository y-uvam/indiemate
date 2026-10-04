import React from "react";
import { intro1, intro2, intro3, intro4 } from "../../../assets";

export const Features = () => {
  const featureCards = [
    {
      id: 1,
      image: intro1,
      title: "Build Your Legacy",
      subtitle:
        "Tag your crew, share the revenue. Every upload builds a verified visual resume, and every view funds the entire production team.",
    },
    {
      id: 2,
      image: intro2,
      title: "The New Era of Storytelling",
      subtitle:
        "Escape the algorithm. A dedicated ecosystem to host, discover, and fund independent films.",
    },
    {
      id: 3,
      image: intro3,
      title: "The Global Stage",
      subtitle:
        "Host digital premieres, submit your work to exclusive in-app film festivals, and cast your Projects directly to the big screen.",
    },
    {
      id: 4,
      image: intro4,
      title: "Network Without the Noise",
      subtitle:
        "Connect with filmmakers globally through real-time chat, collaborative project sharing, and daily cinematic challenges.",
    },
  ];

  // Duplicate cards for seamless, unbroken infinite continuous scroll
  const displayCards = [...featureCards, ...featureCards];

  return (
    <section
      id="features"
      className="py-8 sm:py-12 w-full relative select-none overflow-hidden"
    >
      {/* Infinite Looping Track - Smooth continuous 60fps movement, pauses on hover */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-infinite-carousel flex items-center gap-8 sm:gap-12 px-6">
          {displayCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="feature-card-item flex-shrink-0 select-none cursor-pointer"
            >
              {/* Outer Bezel Frame - Clean Glass, No Shadows */}
              <div className="w-[290px] sm:w-[330px] md:w-[355px] p-2 sm:p-2.5 rounded-[36px] sm:rounded-[42px] border bg-white/[0.06] border-white/20 hover:border-white/40 hover:bg-white/[0.09] backdrop-blur-xl transition-all duration-300">
                {/* Inner Card Framing with High Curved Corners */}
                <div className="relative w-full h-[470px] sm:h-[530px] md:h-[570px] rounded-[28px] sm:rounded-[34px] overflow-hidden bg-[#090e1a]">
                  {/* Full-bleed Feature Poster Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Ambient Vignette */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Progressive Feathered Blur Layer */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
                    style={{
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0) 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0) 100%)",
                    }}
                  />

                  {/* Bottom Scrim: Image, Heading, Subheading */}
                  <div
                    className="absolute inset-x-0 bottom-0 pt-16 pb-6 px-6 sm:px-7 flex flex-col justify-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(7, 17, 29, 0.95) 0%, rgba(7, 17, 29, 0.65) 55%, transparent 100%)",
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed font-normal">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
