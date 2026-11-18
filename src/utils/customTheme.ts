import { createTheme } from "@mantine/core";

// Brand green (deep + vibrant) & neutral slate
// - 900/950: teks/body (kontras tinggi)
// - 600/700: aksen utama (klik, hover)
// - 500: dekorasi/gradient
export const theme = createTheme({
  colors: {
    green: [
      "#f0fdf4", // 100
      "#dcfce7", // 200
      "#bbf7d0", // 300
      "#86efac", // 400
      "#4ade80", // 500
      "#22c55e", // 600
      "#16a34a", // 700
      "#15803d", // 800
      "#14532d", // 900
      "#052e16", // 950
    ],
    secondary: [
      "#ebf9fc", // 100
      "#dfedef", // 200
      "#c0d8dd", // 300
      "#9dc2ca", // 400
      "#80b0ba", // 500
      "#6da4b0", // 600
      "#619fac", // 700
      "#508a97", // 800
      "#427b87", // 900
      "#2e6b77", // 950
    ],
    neutral: [
      "#f8fafc", // 100
      "#f1f5f9", // 200
      "#e2e8f0", // 300
      "#cbd5e1", // 400
      "#94a3b8", // 500
      "#64748b", // 600
      "#475569", // 700
      "#334155", // 800
      "#1e293b", // 900
      "#0f172a", // 950
    ],
    ],
    warning: [
      "#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24",
      "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f",
    ],
    success: [
      "#f0fdf4", "#dcfce7", "#bbf7d0", "#9ef2c5", "#6ee7b7",
      "#34d399", "#22c55e", "#15803d", "#14532d", "#052e16",
    ],
    failed: [
      "#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171",
      "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d",
    ],
    default: [
      "#ecf4ff", "#dce4f5", "#b9c7e2", "#94a8d0", "#748dc0",
      "#5f7cb7", "#5474b4", "#44639f", "#3a5890", "#2c4b80",
    ],
  },

  // Mantine token primer = green (biar color="green" / variant="green" ikut brand)
  primaryColor: "green",
  primaryShade: 9,

  // Radius modern, konsisten
  radius: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },

  fontFamily: "Roboto, sans-serif",
});
