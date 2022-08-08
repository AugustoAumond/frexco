import axios from "axios";

export function Api(){
    async function fetchData() {
        await axios.get(`https://www.fruityvice.com/api/fruit/all`)
      .then((e) => {
        console.log(e.data);  
      })
      .catch((e) => {
        console.error(e);
      })
    }

    return fetchData();
}
