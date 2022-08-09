import styled from "styled-components"
import { useState } from "react";

import {useSelector} from 'react-redux';

import { useHistory } from "react-router-dom";

import {Adicionar} from './Products.action'

function Products(){
    const [number, setNumber] = useState();

    const history = useHistory();

    const list = useSelector((state)=>state.list);  
    
    function Add (list, number){
        if (number == '' || number == 0){
            window.alert('Insira a quantidade')
        } else {
            Adicionar(list, number);
            setNumber('');
        } 
        history.push('/');
    }

    return(
        <DivProducts>
            {list?.map((e, index)=>(
                <div id="flex" key={index}>
                    <img id="img" src={e.photo}/>
                    <div id='description'>
                        <h3>
                            {e.name}
                        </h3>  

                        <Description>
                            <li className="open"> Gênero: {e.genus}</li>
                            <li className="open"> Familia: {e.family}</li>
                            <li className="open"> Order: {e.order}</li>
                            <li id="nutricion">Informações Nutricionais
                                <div id="infos">
                                    <ul id="infosUL">
                                        <li> Carboidratos: {e.nutritions.carbohydrates}</li>
                                        <li>Proteinas: {e.nutritions.protein}</li>
                                        <li>Gorduras: {e.nutritions.fat}</li>
                                        <li>Açucar: {e.nutritions.sugar}</li>
                                    </ul>
                                </div>
                            </li>                            
                        </Description> 

                        <Button>
                            <input id={e.name} onChange={((e)=>setNumber(e.currentTarget.value))}/>
                            <button onClick={(()=> Add(e, number))}>
                                Adicionar
                            </button>
                        </Button>
                    </div>
                    
                </div>
            ))}      
        </DivProducts>
    )
}
export default Products;

const DivProducts = styled.div`
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    display: flex;

    #flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #82B421;
        margin: 40px;
        width: 185px;
        height: 320px;

        @media (max-width: 1145px){
            margin: 25px;
        }
    }

    #img {
        margin-top: 25px;
        width: 148px;
        height: 100px;
    }

    #description {
        display: flex;
        flex-direction: column;
        color: #333758;
        width: 90%;
    }
`

const Description = styled.ul`
    list-style: none;
    margin: -15px;
    margin-left: -20px;
 
    li {
        width: 100%;
    }

    .open {
        display: flex;
    }

    #infos {
        display: none;
        width: 180px;
        height: 100px;
        background: #333758;
        color: #82B421;
        font-size: 16px;
        border: solid white;
    }

    #infosUL {
        margin: 5px;
        list-style: square;
    }

    #nutricion:hover {
        #infos {
            position: absolute;
            display: flex;
            align-items: center;
        }
    }
`

const Button = styled.div`
margin-top: 42px;
display: flex;
align-items: center;
justify-content: center;

    input{
        margin:3px;
        height: 15px;
        width: 25px;
        color: #82B421;
        border: solid 1px #333758;
        padding: 4px;
        border-radius: 3px;
        background: white;
    }

    button {
        font-size: 13px;
        color: #82B421;
        font-weight: 700;
        margin:3px;
        height: 25px;
        width: 120px;
        background: white;
        border: solid 1px #333758;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.5s;
    }

    button: hover {
        background: #333758;
        color: white;
    }
    
`