import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(18, 'Jubilas',230)
peopleAccount.deposit(500);
peopleAccount.withdraw(30)

const companyAccount: CompanyAccount = new CompanyAccount(66, 'Feliz S.A', 73620)
companyAccount.getLoan(1000)

const vipAccount : VipAccount = new VipAccount ('Jubilas', 18)
vipAccount.deposit(10)