function ClearInput(item){
    document.querySelector(`#${item.name}`).value = ''; 
}

function ShowCart(){
    document.querySelector('#buttoncart').style.background = '#263409';
    document.querySelector('#buttoncart').style.color = 'white';
}


export function Adicionar(item, quantidade){
    ClearInput(item);
    ShowCart(item);
    let produto = {quantidade: Number(quantidade), item: item};
    let list_products = JSON.parse(localStorage.getItem('List_products'));
    if (!localStorage.getItem('List_products')){
        localStorage.setItem('List_products', JSON.stringify([produto]));
    } else {
        let validation = false;
        list_products.map((e, index)=>{
            if (e.item.id === produto.item.id){     
                list_products[index].quantidade = Number(e.quantidade) + Number(produto.quantidade);      
                validation = true; 
            }           
        }) 

        if (validation === true) {
            localStorage.setItem('List_products', JSON.stringify(list_products)) 
        } else {
            list_products.push(produto);        
            localStorage.setItem('List_products', JSON.stringify(list_products));
        } 
    }
}