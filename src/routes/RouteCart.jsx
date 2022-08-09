import styled from "styled-components";

import HeaderCart from "../components/routesCart/Header/Header";
import TitleCart from "../components/routesCart/TitleCart/TitleCart";
import Itens from "../components/routesCart/Itens/Itens";
import ButtonBack from './../components/routesCart/ButtonBack/ButtonBack';

function RouteCart(){
    return (
        <DivRouteCart>
           <HeaderCart/>

            <div id="border">
              <TitleCart/>

                <Itens/>  

                <ButtonBack/>
            </div>
           
        </DivRouteCart>
    )
}
export default RouteCart;

const DivRouteCart = styled.div`
width: 100%;
min-height: 100vh;

    #border {
        border: solid 2px #82B421;
    }
`