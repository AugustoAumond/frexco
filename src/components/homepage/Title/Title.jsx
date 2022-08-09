import styled from "styled-components"

function Title(){
    return (
        <DivTitle>
            <h1 className="primary">
                CONHEÇA NOSSOS PRODUTOS!
            </h1>
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.title`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    margin: 10px;

    .primary {
        border-bottom: solid 1px #33375899;
    }

    @media (max-width: 500px){
        h1 {
            font-size: 24px;
        }
    }
`