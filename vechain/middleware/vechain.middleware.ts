import express from 'express';

class VechainMiddleware {

    async extractAddress(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.address;
        next();
    }
}
export default new VechainMiddleware();
