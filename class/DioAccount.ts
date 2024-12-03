export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Você depositou o valor R$: ${this.balance.toFixed(2)}`)
    }
  }

  withdraw = (draw: number): void => {
    if(this.balance - draw >= 0 && this.validateStatus() ){
      console.log(`Valor solicitado para saque: R$: ${draw.toFixed(2)}`)
    } else  {
      console.log(`Saldo insuficiente para saque, consulte seu SALDO!`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
