import {Route} from '../types/Route'

const routes: Array<Route> = [
   { 
        path: '/public',
        auth: false,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/public`]: '',
            },
        }
    },
    {
        path: '/private',
        auth: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/private`]: '',
            },
        }
    }
];

export {routes};