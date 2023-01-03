import {MoneyType} from "./App";
import {CurrentBancomat} from "./CurrentBankomat";
import styled from "styled-components";


type CityPropsType = {
    data: Array<MoneyType>
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((el) => {
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
            <Wrapper>
                {mappedMoney}
            </Wrapper>

        </div>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
  
`