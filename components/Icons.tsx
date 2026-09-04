import React from 'react';

export const TxLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 6h14" />
    <path d="M15 2l4 4-4 4" />
    <path d="M10 6v14" />
  </svg>
);

export const EthereumIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
  </svg>
);

export const UniswapIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#FF007A" />
    <path
      d="M12.87 19.34a7.17 7.17 0 0 1-5.18-2.22 7.6 7.6 0 0 1-2.07-5.58 7.37 7.37 0 0 1 2.3-5.3 6.96 6.96 0 0 1 5-2.05 6.92 6.92 0 0 1 5 2.1 7.4 7.4 0 0 1 2.05 5.58c0 1.95-.7 3.73-2.12 5.17a6.97 6.97 0 0 1-4.98 2.3z"
      fill="#fff"
    />
  </svg>
);

export const WorldIdIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);
