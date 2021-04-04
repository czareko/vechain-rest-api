import express from 'express';
import vechainService from '../services/vechain.service';
import debug from 'debug';

class VechainController {

    async getBalance(req: express.Request, res: express.Response){
        const result = await vechainService.balance(req.params.address);
        res.status(200).send(result);
    }
    async sendTokens(req: express.Request, res: express.Response){
        const status = await vechainService.sendTokens(req.body);
        res.status(200).send(status);
    }
}
export default new VechainController();
