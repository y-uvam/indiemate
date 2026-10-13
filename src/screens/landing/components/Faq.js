import React, { useState } from 'react';
import { commonText, colors } from '../../../utils';

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: `${commonText.whatAreYouCreating} & ${commonText.chooseATypeToGetStarted}`,
      a: `${commonText.welcomeMessage} — ${commonText.letstart} ${commonText.synopsisPlaceholder}`,
    },
    {
      q: commonText.eligibilityChecklist,
      a: `${commonText.reqViews}. ${commonText.reqOriginal}. ${commonText.copyrightAgreement}`,
    },
    {
      q: commonText.legalAgreements,
      a: commonText.termsAgreement,
    },
    {
      q: commonText.enableTipButton,
      a: `${commonText.tipButtonSubtitleMovie}. ${commonText.tipButtonSubtitleBite}.`,
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-6 max-w-4xl mx-auto border-t"
      style={{ borderColor: colors.transparentWhite10 }}
    >
      <div className="text-center mb-16">
        <span
          className="text-xs font-bold uppercase tracking-widest block mb-3"
          style={{ color: colors.storyRing }}
        >
          {commonText.help}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: colors.white }}>
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden transition-colors"
            style={{
              backgroundColor: colors.transparentWhite5,
              borderColor: colors.transparentWhite10,
            }}
          >
            <button
              className="w-full p-5 text-left text-sm sm:text-base font-semibold flex items-center justify-between gap-4 cursor-pointer"
              style={{ color: colors.white }}
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            >
              <span>{faq.q}</span>
              <span
                className={`text-lg transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}
                style={{ color: colors.pink }}
              >
                +
              </span>
            </button>
            {openFaq === index && (
              <div
                className="px-5 pb-5 text-xs sm:text-sm leading-relaxed"
                style={{ color: colors.subtitleGray }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
