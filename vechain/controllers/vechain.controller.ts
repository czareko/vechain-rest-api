import express from 'express';
import vechainService from '../services/vechain.service';
import debug from 'debug';

class VechainController {

    async getBalance(req: express.Request, res: express.Response){

        const result = await vechainService.balance(req.params.address);
        res.status(200).send(result);
    }
}
export default new VechainController();
