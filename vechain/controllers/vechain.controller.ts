import express from 'express';
import vechainService from '../services/vechain.service';
import debug from 'debug';

class VechainController {

    async getBalance(req: express.Request, res: express.Response){

        const balance = await vechainService.balance(req.params.address);
        console.log("Balance cons: "+balance)
        res.status(200).send({balance: balance});
    }
}
export default new VechainController();
