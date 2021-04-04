import {Vechain} from "../../common/interfaces/vechain.interface";
import {thorify} from "thorify";
import Web3 from "web3";

class VechainService implements Vechain {
    async balance(address: string) {
        const web3 = thorify(new Web3(), "http://localhost:8669");
        if(!web3.utils.isAddress(address)){
            const errorMessage = "Provided address is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted.";
            return {error: errorMessage};
        }
        const balance = await web3.eth.getBalance(address)
            .then((res: any) => {
                //console.log("RES in service:"+web3.utils.fromWei(res, 'ether'));
                return web3.utils.fromWei(res, 'ether');
            });

        return balance;
    }
}
export default new VechainService();
