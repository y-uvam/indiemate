import React from "react";
import { Header } from "../../components";
import { colors } from "../../utils";

export const Monetization = () => {
  return (
    <div className="min-h-screen bg-[#07111d] text-white pb-24">
      <Header label="Creator Fund & Monetization" />

      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
        {/* Earnings Card */}
        <div
          className="p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(232, 145, 125, 0.15) 0%, rgba(245, 60, 109, 0.15) 50%, rgba(66, 50, 143, 0.25) 100%)`,
          }}
        >
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-300">
                Available Studio Balance
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-1 mb-2">
                $4,850.00
              </h2>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Next automated payout: Oct 15, 2026 to Stripe Express</span>
              </div>
            </div>

            <button
              type="button"
              className="px-6 py-3.5 rounded-2xl text-xs font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-transform"
              style={{
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.storyRing})`,
              }}
            >
              Withdraw to Bank
            </button>
          </div>
        </div>

        {/* Revenue Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block mb-1">
              Direct Cinema Tipping
            </span>
            <span className="text-2xl font-black text-white">$2,140.00</span>
            <span className="text-[11px] text-emerald-400 block mt-1">+18% this month</span>
          </div>

          <div className="p-5 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block mb-1">
              Indie Creator Fund Grants
            </span>
            <span className="text-2xl font-black text-white">$1,950.00</span>
            <span className="text-[11px] text-pink-400 block mt-1">Sundance Shortlist Bonus</span>
          </div>

          <div className="p-5 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block mb-1">
              Slate & LUT Licensing
            </span>
            <span className="text-2xl font-black text-white">$760.00</span>
            <span className="text-[11px] text-blue-400 block mt-1">42 Cine downloads</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="p-6 rounded-3xl bg-[#0c1424]/80 border border-white/[0.08] backdrop-blur-xl">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Recent Royalties & Tips
          </h3>

          <div className="divide-y divide-white/5 space-y-3">
            {[
              { id: 1, title: "Supporter Tip on 'Dhanda Empire'", from: "Christopher Nolan", amount: "+$250.00", date: "Today" },
              { id: 2, title: "Kodak 2383 LUT Pack Purchase", from: "Elena Rostova", amount: "+$45.00", date: "Yesterday" },
              { id: 3, title: "Stripe Automatic Payout", from: "Stripe US Inc.", amount: "-$1,420.00", date: "Oct 8" },
            ].map((tx) => (
              <div key={tx.id} className="pt-3 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white">{tx.title}</h4>
                  <p className="text-[10px] text-zinc-400">{tx.from} • {tx.date}</p>
                </div>
                <span
                  className={`font-black text-sm ${
                    tx.amount.startsWith("+") ? "text-emerald-400" : "text-zinc-400"
                  }`}
                >
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
