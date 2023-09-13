import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: `@import "./style.scss";`, //но, стили из файла все равно не видны, без дополнительных ипортов
                },
            },
        },
    },
})
