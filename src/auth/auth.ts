import Keycloak from "keycloak-connect";
import session from "express-session";
import {Express} from "express";
import { Route } from '../types/Route';

const setupAuth = (app:Express, routes: Array<Route>) => {
    const memoryStore = new session.MemoryStore();
    const keycloak = new Keycloak({ store: memoryStore });

    app.use(session({
        secret:'<RANDOM GENERATED TOKEN>',
        resave: false,
        saveUninitialized: true,
        store: memoryStore
    }));

    app.use(keycloak.middleware());
    routes.filter(r => r.auth).forEach(route => app.use(route.path, keycloak.protect(), (req,res,next) => next()));
}

export {setupAuth}