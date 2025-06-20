// src/types/images.d.ts (or media.d.ts)

// ... (your existing image declarations for png, jpg, jpeg, gif, svg) ...

// Declare modules for common video formats
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}

declare module "*.ogg" {
  const src: string;
  export default src;
}

// Add other video formats if you use them, e.g.:
// declare module '*.mov' {
//   const src: string;
//   export default src;
// }
// declare module '*.avi' {
//   const src: string;
//   export default src;
// }
