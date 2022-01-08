const entrada = document.querySelector("#entrada");
const itemsUl = document.querySelector("#lista");
entrada.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        if (!this.value) return;
        const novoTextoItem = this.value;
        const novoItem = document.createElement("li");
        novoItem.innerText = novoTextoItem;
        itemsUl.appendChild(novoItem);
        this.value = "";
    }
});