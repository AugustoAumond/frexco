import styled from "styled-components";

function TitleItems(){
    return(
        <Div>
            <DivTitleItems>
                <li id="foto">Foto</li>
                <li>Quantidade</li>
                <li>Nome do Produto</li>
            </DivTitleItems>
        </Div>
    )
}
export default TitleItems;

const Div = styled.div`
@media(max-width: 500px){
    display: flex;
    justify-content: center;
}
    `

const DivTitleItems = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 60%;
    margin: 20px;
    font-weight: 700;
    font-size: 20px;
    color: #333758;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        margin: 5px;
    }

    @media (max-width: 500px){
        font-size: 14px;
    }
 
`