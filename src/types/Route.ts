import { Options } from "http-proxy-middleware";

export interface Route { 
 path:string,
 auth: boolean,
 proxy: Options
};