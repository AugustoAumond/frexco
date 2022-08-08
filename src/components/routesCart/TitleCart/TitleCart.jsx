import styled from "styled-components";


function TitleCart(){
    return(
        <DivTitle>
            <div>
                <h1>
                    Itens Selecionados
                </h1>
            </div>

        </DivTitle>
    )
}
export default TitleCart;

const DivTitle = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
color: #82B421;
`