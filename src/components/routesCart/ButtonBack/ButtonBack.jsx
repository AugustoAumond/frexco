import styled from "styled-components";

import {useHistory} from 'react-router-dom';

function Back (){

    const history = useHistory();

    function Back(){
        history.push('/');
    }

    return (
        <DivBack>
            <button onClick={(()=>Back())}>
                <h3>
                   Voltar aos items 
                </h3>   
            </button>
        </DivBack>
    )
}
export default Back;

const DivBack = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 30px 0;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 5px;
        width: 120px;
        height: 30px;
        transition: 0.5s;
        background: #82B421;
        color: white;
        border: white;
    }

    button:hover {
        background: #333758;
        color: white;
        border: white;
    }
`
