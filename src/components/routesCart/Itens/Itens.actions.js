
export function Valid(valid, index){
    if (valid === false){
        document.querySelector(`#input${index}`).style.display = 'flex';
        document.querySelector(`#p${index}`).style.display = 'none';
        document.querySelector(`#delete${index}`).disabled = true;
    } else {
        document.querySelector(`#input${index}`).style.display = 'none';
        document.querySelector(`#p${index}`).style.display = 'flex';
        document.querySelector(`#delete${index}`).disabled = false;
    }
}

export function Desable(valid, i){
    if (valid === false){
        document.querySelector(`#delete${i}`).disabled = true;
        document.querySelector(`#edit${i}`).disabled = true;
    }
    else {
        document.querySelector(`#delete${i}`).disabled = false;
        document.querySelector(`#edit${i}`).disabled = false;
        }
    }
