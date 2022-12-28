import {createProxyMiddleware} from 'http-proxy-middleware';
import {Express} from "express";
import { Route } from '../types/Route';

const setupProxy = (app:Express, routes:Array<Route>) => { 
    routes.forEach(route => { 
        console.log(route);
        app.use(route.path, createProxyMiddleware(route.proxy));
    })
}

export {setupProxy}