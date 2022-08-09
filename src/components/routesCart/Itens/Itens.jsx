import styled from "styled-components";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import TitleItems from "./TitleItems/TitleItems";

import {Desable, Valid} from './Itens.actions';

function Itens(){
    const [number, setNumber] = useState(0);
    const [valid, setValid] = useState(false);

    const history = useHistory();

    const products = JSON.parse(localStorage.getItem('List_products'));

    useEffect(()=>{

    },[valid, number, products])

    function Edit(number, valid, index){  
        let produto = products; 
        products.map((e, i)=>{
            if (i === index){
                 if (valid === false){
                    setNumber(e.quantidade);
                    setValid(!valid);
                    Valid(valid, index);
                } else {
                    Valid(valid, index);
                    produto.map((e, i)=>{
                        if (i === index){
                            e.quantidade = number;
                        }
                    })
                    localStorage.setItem('List_products', JSON.stringify(produto));
                    setNumber(0);
                    setValid(!valid);
                }    
            } else {
                Desable(valid, i);
            }
        })   
    }

    function Delete(index){
        let produto = products;
        produto.map((e, i)=>{
            if (index === i){
                produto.splice(index, 1);
                if (produto.length > 0){
                   localStorage.setItem('List_products', JSON.stringify(produto)); 
                } else {
                    localStorage.removeItem('List_products');
                    history.push('/')
                }
                setNumber(number+1);
            }
        })
    }

    return(
        <DivItens>
            <TitleItems/>

            {products.map((e, index)=>(
                <Div key={index} index={index}>
                    <ul  id="flexItems">
                        <li>
                            <img src={e.item.photo} alt="" />
                        </li>

                        <li id='quantidade'>
                            <p id={`p${index}`}>{e.quantidade}</p>
                            <input id={`input${index}`} value={number} onChange={((e)=>setNumber(e.currentTarget.value))} type='number'></input>
                        </li>

                        <li>
                            {e.item.name}
                        </li>
                    </ul>

                    <div id="divbutton">
                        <button id={`edit${index}`} onClick={(()=>Edit(number, valid, index))}>Editar</button>
                        <button id={`delete${index}`} onClick={(()=>Delete(index))}>Excluir</button>
                    </div>
                </Div>
            ))}
            
        </DivItens>
    )
}
export default Itens;

const DivItens = styled.div`

`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px;
    border: solid 1px #82b42142;

    @media (max-width: 500px){
        flex-direction: column;
    }


    #flexItems {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        color: #333758;
        width: 60%;
        margin: 20px; 
        
        li {
            width: 150px;
            display: flex;
            justify-content: center;

            @media (max-width: 500px){
                font-size: 14px;
            }
        }
    }

    #quantidade {
        margin-left: -15px;
    }

    input {
        display: none;
        width: 30px;
        height: 15px;
        position: relative;
        right: 13px;
    }

    p {
        display: flex;
    }


    img {
        width: 60px;
        margin-left: -20px;
    }

    #divbutton {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        min-width: 50px;
    }

    button {
        cursor: pointer;
        border-radius: 5px;
        width: 90px;
        height: 20px;
        margin: 5px;
        transition: 0.5s;
        background: #82B421;
        color: white;
        border: white;

        @media (max-width: 500px){
            margin: 10px;
            width: 75px;
        }
    }

    button:hover {
        background: #333758;
        color: white;
        border: white;
    }

`