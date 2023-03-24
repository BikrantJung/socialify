import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["sans"],
});

const root = `
  :root {
    --sans-font: ${inter.style.fontFamily};
  }
  `;
export { root };
