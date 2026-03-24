"use client";

import { useState } from "react";

const faqs = [
  {
    q: "한국 주식계좌(증권계좌)도 신고해야 하나요?",
    a: "네, 신고 대상입니다. 주식계좌의 경우 보유 주식의 시장가치와 현금 잔액을 합산한 금액이 기준이 됩니다. 미래에셋, 키움, 삼성증권 등 국내 증권사 계좌 모두 해당됩니다.",
  },
  {
    q: "국민연금도 신고 대상인가요?",
    a: "대부분의 세무 전문가들은 국민연금을 FBAR 신고 대상에서 제외하는 편입니다. 다만 개인 연금저축이나 IRP 계좌는 포함될 수 있으므로 전문가 확인을 권장합니다.",
  },
  {
    q: "FBAR랑 FATCA 둘 다 해야 하나요?",
    a: "기준 금액에 따라 둘 다 해야 할 수도 있습니다. FBAR는 $10,000 초과 시 무조건 의무이고, FATCA는 그보다 높은 금액 기준이 따로 적용됩니다. 두 제도는 별개이므로 FATCA 기준 미달이어도 FBAR는 신고해야 합니다.",
  },
  {
    q: "몇 년 전부터 신고를 못 했는데 어떻게 하나요?",
    a: "Streamlined Filing Compliance Procedures를 통해 자진 신고하면 페널티를 크게 줄이거나 면제받을 수 있습니다. 고의성이 없었다는 것을 소명해야 하며, 전문가와 함께 준비하는 것을 강력히 권장합니다.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            background: "var(--surface)",
            border: open === i ? "1px solid var(--gold)" : "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left flex items-center justify-between gap-4 px-6 py-4"
            style={{ color: "var(--foreground)" }}
          >
            <span className="font-medium text-base">{faq.q}</span>
            <span
              style={{
                color: "var(--gold)",
                fontSize: 20,
                flexShrink: 0,
                transition: "transform 0.2s",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div
              className="px-6 pb-5"
              style={{ color: "#bbb", lineHeight: 1.75, fontSize: 15 }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
