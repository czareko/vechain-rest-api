import {Vechain} from "../../common/interfaces/vechain.interface";
import {thorify} from "thorify";
import Web3 from "web3";
import {TransferDto} from "../dto/transfer.dto";

class VechainService implements Vechain {
    async balance(address: string) {
        const web3 = thorify(new Web3(), "http://localhost:8669");
        if(!web3.utils.isAddress(address)){
            const errorMessage = "Provided address is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted.";
            return {error: errorMessage};
        }
        const balance = await web3.eth.getBalance(address)
            .then((res: any) => {
                return web3.utils.fromWei(res, 'ether');
            });

        return balance;
    }

    async sendTokens(transfer: TransferDto) {

        const web3 = thorify(new Web3(), "http://localhost:8669");
        let sender = {
            address: transfer.fromPublicKey,
            privateKey: transfer.fromPrivateKey
        }
        web3.eth.accounts.wallet.add(sender.privateKey)

        let receiver = transfer.toPublicKey

        return web3.eth.sendTransaction({
            from: sender.address,
            to: receiver,
            value: web3.utils.toWei(transfer.amount, 'ether')
        }).then((receipt: any) => {
            return receipt;
        })
    }

}
export default new VechainService();
