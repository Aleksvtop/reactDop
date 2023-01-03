import {MoneyType} from "./App";
import styled from "styled-components";


type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBancomat = (props: CurrentBankomatPropsType) => {
    return (
        <Banknote color={props.money.banknotes === 'Dollars' ? 'darkseagreen' : 'palevioletred'}>
            {props.money.banknotes}
            <Value>{props.money.value}</Value>
        </Banknote>
    )
}
const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'palevioletred') {
      return 'palevioletred'
    } else {
      return 'darkseagreen'
    }
  }};
  width: 200px;
  height: 100px;
  margin: 10px;

  };
`
const Value = styled.div`
  justify-content: center;
`
