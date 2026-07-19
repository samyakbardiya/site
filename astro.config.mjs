import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

/**
 * @see https://astro.build/config
 * @type {import('astro').AstroUserConfig}
 */
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
});
