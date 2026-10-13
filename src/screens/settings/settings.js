import React, { useState } from "react";
import { Header } from "../../components";
import { appImages } from "../../assets";
import { colors } from "../../utils";
import { navigate, reset } from "../../navigation/navigationService";
import ROUTES from "../../navigation/routeConstants";

export const Settings = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [highQualityUploads, setHighQualityUploads] = useState(true);
  const [logoutModal, setLogoutModal] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleLogout = () => {
    setLogoutModal(false);
    reset(ROUTES.LANDING);
  };

  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-2xl">
          {toastMsg}
        </div>
      )}

      <Header label="Settings & Preferences" />

      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-6">
        {/* Creator Studio & Monetization Group */}
        <div className="p-5 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Creator Studio & Monetization
          </h3>

          <div className="space-y-3">
            <div
              onClick={() => navigate(ROUTES.MONETIZATION)}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center p-2"
                  style={{
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
                  }}
                >
                  <img src={appImages.monetize} alt="Monetize" className="w-full h-full object-contain invert" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Creator Fund & Payouts</h4>
                  <p className="text-[11px] text-zinc-400">View royalties, grants, and Stripe balance</p>
                </div>
              </div>
              <img src={appImages.skipForward} alt="Go" className="w-4 h-4 object-contain invert opacity-60" />
            </div>

            <div
              onClick={() => navigate(ROUTES.INSIGHTS)}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center p-2"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primaryBlue}, ${colors.purple})`,
                  }}
                >
                  <img src={appImages.insights} alt="Insights" className="w-full h-full object-contain invert" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Production Analytics</h4>
                  <p className="text-[11px] text-zinc-400">Audience retention, festival queries, demographic</p>
                </div>
              </div>
              <img src={appImages.skipForward} alt="Go" className="w-4 h-4 object-contain invert opacity-60" />
            </div>
          </div>
        </div>

        {/* Account & Privacy Settings */}
        <div className="p-5 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Account & Security
          </h3>

          <div className="space-y-4">
            {/* Private Account Switch */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={appImages.accountPrivacy} alt="Privacy" className="w-5 h-5 object-contain invert opacity-70" />
                <div>
                  <h4 className="text-xs font-bold text-white">Private Studio Portfolio</h4>
                  <p className="text-[11px] text-zinc-400">Only verified collaborators can view slates</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsPrivate(!isPrivate);
                  showToast(isPrivate ? "Studio portfolio now public" : "Studio portfolio now private");
                }}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  isPrivate ? "bg-pink-500" : "bg-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    isPrivate ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* High Quality Media */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <div className="flex items-center gap-3">
                <img src={appImages.dataUsage} alt="Data" className="w-5 h-5 object-contain invert opacity-70" />
                <div>
                  <h4 className="text-xs font-bold text-white">Upload 4K DCI Masters</h4>
                  <p className="text-[11px] text-zinc-400">Always preserve full sensor bitrates</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setHighQualityUploads(!highQualityUploads);
                  showToast(highQualityUploads ? "Standard bitrate active" : "4K DCI masters active");
                }}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  highQualityUploads ? "bg-pink-500" : "bg-white/20"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    highQualityUploads ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone: Logout */}
        <div className="p-5 rounded-3xl bg-red-500/[0.04] border border-red-500/20 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setLogoutModal(true)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold text-xs transition-colors border border-red-500/20"
          >
            <img src={appImages.logout} alt="Logout" className="w-4 h-4 object-contain" />
            <span>Sign Out of IndieMate</span>
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {logoutModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setLogoutModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-[#0d1627] border border-white/15 p-6 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-3 text-xl">
              ⚠️
            </div>
            <h3 className="text-base font-bold text-white mb-1">
              Sign out of IndieMate?
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              You will need to sign in again to manage your productions, slates, and chats.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setLogoutModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-zinc-400 bg-white/5 hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
