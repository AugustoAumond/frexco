import './../Global.css';
import styled from "styled-components";
//import axios from 'axios'

import Header from "../components/homepage/Header/Header";
import Cart from '../components/homepage/Cart/Cart';
import Title from '../components/homepage/Title/Title';
import Products from '../components/homepage/Products/Products'


function Homepage() {

  const items = JSON.parse(localStorage.getItem('List_products'));

  /*async function fetchData() {
      await axios.get(`https://www.fruityvice.com/api/fruit/all`)
    .then((e) => {
      console.log(e);  
    })
    .catch((e) => {
      console.error(e);
    })
  }

  fetchData();*/

  return (
      <DivHomePage>    
        <Header/> 

        <Cart items={items}/>

        <Title/>

        <Products/>

      </DivHomePage>  
  );
}

export default Homepage;

const DivHomePage = styled.div`

`
