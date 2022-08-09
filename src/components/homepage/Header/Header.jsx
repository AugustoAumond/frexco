import styled from "styled-components";

function Header(){
    return(
        <DivHeader>
            <Init>
                <img src={`${process.env.PUBLIC_URL}/Frexco.png`} alt="" />
            </Init>

            <Slogam className="primary">
                <p> Direto do campo para a sua <span> CASA </span></p>
            </Slogam>
        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    border: solid 1px #82b42136;
`

const Init = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 30%;
    padding: 15px;


    img {
        width: 50%;
        max-width: 300px;

        @media (max-width: 500px){
            width: 70%;
            
        }
    }

`

const Slogam = styled.div`
    display: flex;
    background: #82B421;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;
    font-size: 26px;
    font-weight: 500;

    p {
        color: white;
    }
    
    span {
        color: #33375899;
    }

    @media (max-width: 500px){
        font-size: 20px;
        padding: 5px;
    }
`