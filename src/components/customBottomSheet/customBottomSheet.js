import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useCallback,
} from "react";
import { colors } from "../../utils";
import { appImages } from "../../assets";

export const CustomBottomSheet = forwardRef(
  (
    {
      children,
      title,
      subtitle,
      showCloseButton = true,
      onClose,
      maxWidth = "max-w-xl",
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    const present = useCallback(() => {
      setVisible(true);
      document.body.style.overflow = "hidden";
    }, []);

    const dismiss = useCallback(() => {
      setVisible(false);
      document.body.style.overflow = "";
      if (onClose) onClose();
    }, [onClose]);

    useImperativeHandle(ref, () => ({
      present,
      dismiss,
    }));

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape" && visible) {
          dismiss();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }, [visible, dismiss]);

    if (!visible) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          onClick={dismiss}
        />

        {/* Sheet Content Card */}
        <div
          className={`relative z-10 w-full ${maxWidth} rounded-t-3xl sm:rounded-3xl border shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-6 duration-300`}
          style={{
            backgroundColor: "rgba(10, 16, 26, 0.95)",
            borderColor: colors.transparentWhite15,
            boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px ${colors.storyRing}20`,
          }}
        >
          {/* Top Grab Bar for Mobile Sheet Feel */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-12 h-1.5 rounded-full bg-white/20" />
          </div>

          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                {title && (
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>
                )}
              </div>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={dismiss}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors border border-white/10"
                >
                  <img
                    src={appImages.close}
                    alt="Close"
                    className="w-3.5 h-3.5 object-contain invert"
                  />
                </button>
              )}
            </div>
          )}

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto no-scrollbar max-h-[75vh]">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default CustomBottomSheet;
