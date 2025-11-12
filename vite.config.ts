import { defineConfig, loadEnv } from 'vite';
import path from "path"
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    console.log('Valor leído de VITE_API_URL:', env.VITE_API_URL);

    return {
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"), 
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_API_URL, 
                    changeOrigin: true,
                },
            },
        },
    };
});