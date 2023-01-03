import {BanknotesType, MoneyType} from "./App";
import {City} from "./City";

type CountryPropsType = {
    data: MoneyType[]
    setFilter: (filter:BanknotesType) => void
    filter: BanknotesType
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilter('All')
    }

    const setDollars = () => {
        props.setFilter('Dollars')
    }

    const setRubles = () => {
        props.setFilter('Rubles')
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRubles}>Rubles</button>
            <City data={props.data}/>
        </div>
    )
}