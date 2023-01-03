import {MoneyType} from "./App";
import {CurrentBancomat} from "./CurrentBankomat";


type CityPropsType = {
    data: Array<MoneyType>
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((el,index) => {
        return(
            /*<li key={index}>
                <div>{el.banknotes}</div>
                <div>{el.value}</div>
                <div>{el.number}</div>
            </li>*/
            <CurrentBancomat money={el}/>
        )
    })

    return (
        <div>
            <div></div>
            <div></div>
            <ul>
                {mappedMoney}
            </ul>

        </div>
    )
}