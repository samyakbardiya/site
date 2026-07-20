import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

/**
 * @see https://astro.build/config
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({
    site: "https://samyakbardiya.dev",
    adapter: cloudflare(),
    integrations: [icon()],
    vite: {
        plugins: [tailwindcss()],
    },
});

