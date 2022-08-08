import styled from "styled-components";
import { useEffect, useState } from "react";

import TitleItems from "./TitleItems/TitleItems";

import {Desable, Valid} from './Itens.actions';

function Itens(){
    const [number, setNumber] = useState(0);
    const [valid, setValid] = useState(false)

    const products = JSON.parse(localStorage.getItem('List_products'));

    useEffect(()=>{

    },[valid, number])

    function Edit(number, valid, index){  
        let produto = products; 
        products.map((e, i)=>{
            if (i === index){
                 if (valid === false){
                    setNumber(number);
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

    console.log(number, products);

    function Delete(){

    }

    return(
        <DivItens>
            <TitleItems/>

            {products.map((e, index)=>(
                <Div key={index} index={index}>
                    <ul  id="flexItems">
                        <li><img src={e.item.photo} alt="" />
                        
                        </li>

                        <li id='quantidade'>
                            <p id={`p${index}`}>{e.quantidade}</p>
                            <input id={`input${index}`} value={number} onChange={((e)=>setNumber(e.currentTarget.value))} type='number'></input>
                        </li>

                        <li>
                            {e.item.name}
                        </li>
                    </ul>

                    <button id={`edit${index}`} onClick={(()=>Edit(number, valid, index))}>Editar</button>
                    <button id={`delete${index}`} onClick={(()=>Delete())}>Excluir</button>
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

    #flexItems {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        color: #333758;
        width: 60%;
        margin: 20px; 
        
        li {
            width: 55px;
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
        width: 50px;
        margin-left: -20px;
    }

    button {
        cursor: pointer;
        width: 90px;
        height: 20px;
        margin: 5px;
        transition: 0.5s;
    }

    button:hover {
        background: #333758;
        color: white;
        border: white;
    }

`