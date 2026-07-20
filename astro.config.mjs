import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

/**
 * @see https://astro.build/config
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({
    site: "https://samyakbardiya.dev",
    integrations: [icon()],
    vite: {
        plugins: [tailwindcss()],
    },
});
