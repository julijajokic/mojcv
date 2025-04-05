import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    build: {
        target: 'esnext', // ili 'module'
        modulePreload: true,
        sourcemap: true,
      },
    server: {
        host: '0.0.0.0',  // Omogućava pristup sa drugih uređaja
        port: 9000,       // Postavlja port na 9000
       
            proxy: {
                '/api': `https://mojcv-production-8561.up.railway.app/api`,  // Pravilno formira URL
            },
            
           
       
    },
});

