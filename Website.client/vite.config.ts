import {defineConfig} from "vite";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true
            }
        }
    }
});