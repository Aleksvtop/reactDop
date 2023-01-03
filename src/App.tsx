import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotesType = 'All' | 'Dollars' | 'Rubles'
export type MoneyType = {
  banknotes: BanknotesType
  value: number
  number: string
}

let defaultMoney: MoneyType[] = [
  {banknotes: 'Dollars', value: 100, number: 'a1234567890'},
  {banknotes: 'Dollars', value: 50, number: 'z1234567890'},
  {banknotes: 'Rubles', value: 100, number: 'w1234567890'},
  {banknotes: 'Dollars', value: 100, number: 'e1234567890'},
  {banknotes: 'Dollars', value: 50, number: 'c1234567890'},
  {banknotes: 'Rubles', value: 100, number: 'r1234567890'},
  {banknotes: 'Dollars', value: 50, number: 'x1234567890'},
  {banknotes: 'Rubles', value: 50, number: 'v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filterValue: BanknotesType): MoneyType[] => {
  if(filterValue==='All'){
    return defaultMoney
  }
  return money.filter(el => el.banknotes === filterValue)
}
function App() {
  const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
  const [filter, setFilter] = useState<BanknotesType>('All')

  const filteredMoney = moneyFilter(money, filter)
  console.log(filteredMoney)

  return (
    <div className="App">
      <Country
          data={filteredMoney}
          setFilter={setFilter}
          filter={filter}
      />

    </div>
  );
}

export default App;
