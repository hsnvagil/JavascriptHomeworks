function f() {
    const list = document.getElementById("linkList"), listElement = list.getElementsByTagName("li");
    for (const element of listElement) {
        const link = element.getElementsByTagName("a");
        if(link[0].textContent.includes("http")) {
            link[0].style.borderBottom = "0.5px dashed";
            link[0].href = link[0].textContent;
        }
    }
}

f();