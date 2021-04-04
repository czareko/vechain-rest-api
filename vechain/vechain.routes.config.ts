import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import VechainController from "./controllers/vechain.controller";
import VechainMiddleware from "./middleware/vechain.middleware"

export class VechainRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'VechainRoutes');
    }

    configureRoutes() {
        this.app.param(`address`, VechainMiddleware.extractAddress);
        this.app.route(`/balance/:address`)
            .get(VechainController.getBalance);
        return this.app;
    }

}
