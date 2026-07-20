import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

/**
 * @see https://astro.build/config
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({
    site: "https://samyakbardiya.dev",
    adapter: cloudflare(),
    vite: {
        plugins: [Icons({ compiler: "astro" }), tailwindcss()],
    },
});
