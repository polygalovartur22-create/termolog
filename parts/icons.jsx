// Minimal stroked icons — 1.5px stroke, inherit currentColor

const Icon = ({ children, size = 20, weight = 1.5, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={weight}
       strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const IcoThermo = (p) => (
  <Icon {...p}>
    <path d="M14 14.76V4.5a2.5 2.5 0 0 0-5 0v10.26a4.5 4.5 0 1 0 5 0Z" />
    <line x1="11.5" y1="9" x2="11.5" y2="16" />
  </Icon>
);

const IcoPlane = (p) => (
  <Icon {...p}>
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5Z" />
  </Icon>
);

const IcoTruck = (p) => (
  <Icon {...p}>
    <path d="M1 17V5h13v12" />
    <path d="M14 8h4l3 4v5h-7" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </Icon>
);

const IcoShield = (p) => (
  <Icon {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const IcoFlower = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9V3M12 21v-6M9 12H3M21 12h-6M15 9l4-4M5 19l4-4M15 15l4 4M5 5l4 4" />
  </Icon>
);

const IcoPill = (p) => (
  <Icon {...p}>
    <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" />
    <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" transform="rotate(-45 12 12)" />
  </Icon>
);

const IcoClock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

const IcoArrow = (p) => (
  <Icon {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </Icon>
);

const IcoArrowUR = (p) => (
  <Icon {...p}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="8 7 17 7 17 16" />
  </Icon>
);

const IcoCheck = (p) => (
  <Icon {...p}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

const IcoSignal = (p) => (
  <Icon {...p}>
    <path d="M3 12c4-4 14-4 18 0" />
    <path d="M6 15c2.5-2.5 9.5-2.5 12 0" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </Icon>
);

const IcoPhone = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Icon>
);

const IcoMail = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </Icon>
);

const IcoMessage = (p) => (
  <Icon {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>
);

const IcoCamera = (p) => (
  <Icon {...p}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </Icon>
);

const IcoDoc = (p) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </Icon>
);

const IcoMenu = (p) => (
  <Icon {...p}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Icon>
);

const IcoClose = (p) => (
  <Icon {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
);

Object.assign(window, {
  Icon, IcoThermo, IcoPlane, IcoTruck, IcoShield, IcoFlower, IcoPill,
  IcoClock, IcoArrow, IcoArrowUR, IcoCheck, IcoSignal, IcoPhone, IcoMail,
  IcoMessage, IcoCamera, IcoDoc, IcoMenu, IcoClose
});
