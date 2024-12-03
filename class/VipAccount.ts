import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
               
    }

        deposit = (value: number): void => {
        this.balance += value + 10
        console.log(`Valor depositado: R$:${this.balance.toFixed(2)}`)
    }
}