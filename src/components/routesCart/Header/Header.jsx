import styled from "styled-components"

function Header(){
    return(
        <DivHeader>
        
            <img src={`${process.env.PUBLIC_URL}/Frexco.png`} alt="" />

        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.div`
    width: 100%;
    min-height: 100px;
    background: white;
    display: flex;
    justify-content: center;

    img {
        height: 70%;
    }

    
`