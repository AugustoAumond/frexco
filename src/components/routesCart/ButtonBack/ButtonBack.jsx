import styled from "styled-components";

function Back (){
    return (
        <DivBack>
            <button>
                Voltar aos items
            </button>
        </DivBack>
    )
}
export default Back;

const DivBack = styled.div`
width: 100%;
display: flex;
justify-content: center;`
