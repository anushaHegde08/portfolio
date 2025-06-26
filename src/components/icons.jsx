export const GradientDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
    </defs>
  </svg>
);

export const CircularProgress = ({ percentage = 0, size = 56 }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      className="transform -rotate-90"
    >
      <circle
        cx="28"
        cy="28"
        r="24"
        stroke="#374151"
        strokeWidth="6"
        fill="none"
      />
      <circle
        cx="28"
        cy="28"
        r="24"
        stroke="url(#primaryGradient)"
        strokeWidth="6"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: "stroke-dashoffset 0.3s ease" }}
      />
    </svg>
  );
};

export const ExperienceSvg = () => (
  <svg
    width="42"
    height="42"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 472.615 472.615"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path
            fill="url(#primaryGradient)"
            d="M328.776,104.453V39.385H143.839v65.068h-41.097v164.386h106.595l-3.853-30.821h61.645l-3.853,30.821h106.595V104.453 H328.776z M308.227,104.453H164.388V59.934h143.839V104.453z"
          ></path>
        </g>
      </g>
      <g>
        <g>
          <polygon
            fill="url(#primaryGradient)"
            points="260.709,289.388 256.857,320.213 215.759,320.213 211.906,289.388 102.743,289.388 102.743,433.229 369.873,433.229 369.873,289.388 "
          ></polygon>
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="url(#primaryGradient)"
            x="410.969"
            y="104.457"
            width="61.647"
            height="328.773"
          ></rect>
        </g>
      </g>
      <g>
        <g>
          <rect
            fill="url(#primaryGradient)"
            x="0"
            y="104.457"
            width="61.647"
            height="328.773"
          ></rect>
        </g>
      </g>
    </g>
  </svg>
);

export const EmailSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 -2.5 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title>email [#1572]</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-340.000000, -922.000000)"
          fill="url(#primaryGradient)"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
              id="email-[#1572]"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const PhoneSvg = () => (
  <svg
    height="24"
    width="24"
    version="1.1"
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="url(#primaryGradient)"
        d="M27.2,18.3c-3-3-6.5-3.4-9-0.8c0,0,0,0,0,0c-0.3,0.3-0.6,0.6-0.8,1c-1.4-1.2-2.6-2.5-3.8-3.8c0.4-0.3,0.7-0.5,1-0.8 c2.5-2.5,2.2-6-0.8-9c-3-3-6.5-3.4-9-0.8c-2.7,2.7-3.1,7.4-1,10.6c3.5,5.2,8.6,10.4,13.8,13.8c1.4,0.9,3,1.3,4.6,1.3 c2.2,0,4.4-0.8,5.9-2.3C30.6,24.8,30.3,21.3,27.2,18.3z"
      ></path>
    </g>
  </svg>
);

export const LinkedInSvg = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="url(#primaryGradient)"
        d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z"
      ></path>
    </g>
  </svg>
);
