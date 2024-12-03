import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
    cnpj: number;

    constructor(cnpj:number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.cnpj = cnpj;
    }

    getLoan = (loan: number): void => {

      const tax = 0.1
      const totalLoan = loan * tax

        if(this.status === true){
            this.balance += totalLoan
            console.log(`Você solicitou um emprestimos de: R$:${loan.toFixed(2)}. O efetivo da contratação é de: R$:${totalLoan.toFixed(2)}`)
        } else {
            console.log('Conta inválida')
        }

        
    }

    deposit = (): void => {
        console.log('A empresa depositou')
    }
};