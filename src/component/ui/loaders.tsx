import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-transparent">
      <svg
          className="w-14 h-14"
          fill="url(#dragonballGradient)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
          <linearGradient id="dragonballGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 165, 0, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0.8)" />
          </linearGradient>
        </defs>

        <circle cx="4" cy="12" r="3">
          <animate
            id="spinner_qFRN"
            begin="0;spinner_OcgL.end+0.25s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="12" cy="12" r="3">
          <animate
            begin="spinner_qFRN.begin+0.1s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="20" cy="12" r="3">
          <animate
            id="spinner_OcgL"
            begin="spinner_qFRN.begin+0.2s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;