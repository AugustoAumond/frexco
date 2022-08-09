import styled from "styled-components"

import { useHistory } from "react-router-dom";

import {BsFillCartFill} from 'react-icons/bs'
import { useEffect } from "react";


function Cart (props) {     
    const items = props.items ? '!' : null;

    const history = useHistory();

    function Cart(){
        history.push('/cart')
    }

    return(
        <DivCart id="divcart">
            <ButtonCart id="buttoncart" onClick={(()=>Cart())} items={items}>
                Carrinho
                <BsFillCartFill id="cart" />
            </ButtonCart>
        </DivCart>
    )
}
export default Cart;

const DivCart = styled.div`
    position: fixed;
    width: 100%;
    height: 40px;
    justify-content: flex-end;
    display: flex;
 
`

const ButtonCart = styled.button`
    border: gray 1px solid;
    display: ${props => !props.items? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    background: ${props => !props.items? 'white' : '#263409'};
    color: ${props => !props.items? '#333758' : 'white'};
    font-family: calibri;
    width: 150px;
    height: 100%;
    cursor: pointer;

    @media (max-width: 500px){
        height: 25px;
        width: 110px;
    } 

    

    #alert {
    display: flex;
    font-size: 16px;
    width: 5px;
    height: 35px;
    color: red;
    }

    #cart{
    margin: 5px;
    font-size: 18px;
    }
`