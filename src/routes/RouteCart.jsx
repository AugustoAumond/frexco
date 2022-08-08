import styled from "styled-components";

import HeaderCart from "../components/routesCart/Header/Header";
import TitleCart from "../components/routesCart/TitleCart/TitleCart";
import Itens from "../components/routesCart/Itens/Itens";

function RouteCart(){
    return (
        <DivRouteCart>
           <HeaderCart/>

           <TitleCart/>

            <Itens/>
        </DivRouteCart>
    )
}
export default RouteCart;

const DivRouteCart = styled.div`
width: 100%;
min-height: 100vh;
`