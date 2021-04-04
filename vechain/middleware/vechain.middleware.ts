import express from 'express';

class VechainMiddleware {

    async extractAddress(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.address;
        next();
    }
    async validateRequiredTransferBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body
            && req.body.fromPublicKey
            && req.body.fromPrivateKey
            && req.body.toPublicKey
            && req.body.amount) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields`});
        }
    }

}
export default new VechainMiddleware();
