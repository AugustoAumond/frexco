import styled from "styled-components";

function TitleItems(){
    return(
        <DivTitleItems>
            <li>Foto</li>
            <li>Quantidade</li>
            <li>Nome do Produto</li>
        </DivTitleItems>
    )
}
export default TitleItems;

const DivTitleItems = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 60%;
    margin: 20px;
    font-weight: 700;
`