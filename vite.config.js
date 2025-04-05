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
        port: 8080,       // Postavlja port na 9000
       
            proxy: {
                '/api': `http://localhost:8080/api`,  // Pravilno formira URL
            },
            
           
       
    },
});

