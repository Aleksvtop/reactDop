import {MoneyType} from "./App";


type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBancomat = (props: CurrentBankomatPropsType) => {
    return (
        <div>
            {props.money.banknotes}
        </div>
    )
}