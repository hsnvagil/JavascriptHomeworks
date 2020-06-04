var parent = document.querySelector(".file-list > li");
const childs = document.querySelectorAll(".file-list > li > ul > li");

parent.querySelector("a").addEventListener("click",function () {
    const child = parent.querySelector("ul");
    if (child.style.display === "none") {
        child.style.display = "block";
    } else {
        child.style.display = "none";
    }
})

parent.querySelector("a").addEventListener("mouseover",function () {
    this.style.fontWeight = "600";
})

parent.querySelector("a").addEventListener("mouseout",function () {
    this.style.fontWeight = "normal";
})

for (const child of childs) {
    child.querySelector("a").addEventListener("mouseover",function () {
        this.style.fontWeight = "600";
    })
    child.querySelector("a").addEventListener("mouseout",function () {
        this.style.fontWeight = "normal";
    })
    child.querySelector("a").addEventListener("click", function () {
        const subChild = child.querySelector("ul");
        if(subChild != null) {
            if (subChild.style.display === "none") {
                subChild.style.display = "block";
            } else {
                subChild.style.display = "none";
            }
        }
    });
}