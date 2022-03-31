import { defineConfig } from "vite";
import ViteRsw from "vite-plugin-rsw";
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';
// https://github.com/lencx/vite-plugin-rsw
export default defineConfig({
    clearScreen: true,
    server: {
        host: '0.0.0.0',
        port: 4000,
        fs: {
            strict: true,
            allow: [
                '..'
            ]
        }
    },
    build: {
        sourcemap: process.env.SOURCE_MAP === 'true',
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            mode: 'development',
            srcDir: 'src-web',
            filename: 'sw.ts',
            base: '/',
            strategies: 'injectManifest',
            manifest: {
            // content of manifest
            },
            workbox: {
            // workbox options for generateSW
            }
        }),
        replace({
            __DATE__: new Date().toISOString(),
            preventAssignment: true,
        }),
        ViteRsw()
    ],
});
