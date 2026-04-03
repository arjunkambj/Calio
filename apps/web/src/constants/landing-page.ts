export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How are prop firms verified and ranked?",
    answer:
      "We verify each firm through a combination of real trader reviews, payout proof verification, and analysis of trading rules and conditions. Rankings factor in Trustpilot scores, payout speed, platform reliability, and overall trader satisfaction.",
  },
  {
    question: "What is a prop firm evaluation?",
    answer:
      "An evaluation is a trading challenge set by a prop firm to assess your skills before granting you a funded account. You typically trade a simulated account with specific profit targets, drawdown limits, and minimum trading days. Once you pass, you receive a funded account to trade with real capital.",
  },
  {
    question: "How do I choose the right prop firm?",
    answer:
      "Consider your trading style, preferred platform, drawdown type (EOD vs trailing), payout speed, and account size. Use our comparison table to filter firms by these criteria and read verified reviews from other traders before making a decision.",
  },
  {
    question: "What is the difference between EOD and trailing drawdown?",
    answer:
      "End-of-Day (EOD) drawdown calculates your maximum loss based on your account balance at the close of each trading day, giving you more intraday flexibility. Trailing drawdown follows your highest account balance in real time, which is more restrictive but often comes with lower evaluation fees.",
  },
  {
    question: "How do prop firm payouts work?",
    answer:
      "After passing your evaluation and meeting minimum trading requirements, you can request a payout. Most firms process payouts within 1–7 business days via methods like ACH, crypto, or wire transfer. Profit splits typically range from 80% to 90% in the trader's favor.",
  },
  {
    question: "Are discount codes on this site legitimate?",
    answer:
      "Yes — all discount codes and promotional offers listed on Calio are sourced directly from our partner firms. We maintain active relationships with every listed firm and update codes regularly to ensure they are valid and provide genuine savings on evaluation fees.",
  },
];
