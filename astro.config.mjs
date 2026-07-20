import { fileURLToPath, URL } from "node:url";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

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
        ssr: {
            noExternal: ["astro-icon", "@iconify/*"],
        },
        resolve: {
            // workerd's export conditions don't match @iconify/utils' exports map,
            // so it falls back to the CJS build, which references the undefined
            // `module` global in workerd. Alias straight to the ESM build instead.
            alias: {
                "@iconify/utils": fileURLToPath(
                    new URL("./node_modules/@iconify/utils/lib/index.mjs", import.meta.url),
                ),
            },
        },
    },
});
