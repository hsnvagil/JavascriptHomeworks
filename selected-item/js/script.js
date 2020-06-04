const listElement = document.querySelectorAll("li");
let lastClick ;
let selectedArray = [];
for(let i = 0; i< listElement.length; i++){
    listElement[i].addEventListener("click",function (event) {
        if (event.ctrlKey) {
            if(selectedArray.includes(i)){
                selectedArray.splice(selectedArray.indexOf(i),1);
            }
            else {
                selectedArray.push(i);
            }
            lastClick = i;
        }
        else if (event.shiftKey) {
            selectedArray = [];
            if(lastClick  < i) {
                for (let j = lastClick; j <= i; j++) {
                    selectedArray.push(j);
                }
            }
            else if(lastClick > i){
                for (let j = i; j <= lastClick; j++) {
                    selectedArray.push(j);
                }
            }
        }
        else {
            selectedArray = [];
            selectedArray.push(i);
            lastClick = i;
        }

        for(let z=0;z<listElement.length;z++){
            if(selectedArray.includes(z)){
                listElement[z].classList.add("selected");
            }
            else{
                listElement[z].classList.remove("selected");
            }
        }
    })
}

listElement[0].click();