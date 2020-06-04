const tableHeaders = document.querySelectorAll("table th");

for (let i = 0; i < tableHeaders.length; i++) {
    tableHeaders[i].addEventListener("click", function () {
        sortTable(i);
    });

    tableHeaders[i].addEventListener("mouseover", function () {
        tableHeaders[i].style.color = "green";
    })

    tableHeaders[i].addEventListener("mouseout", function () {
        tableHeaders[i].style.color = "black";
    })
}

function sortTable(index) {
    let swap;
    let table = document.getElementById("table");
    let swapping = true;
    let number = index === 2;

    while (swapping) {
        swapping = false;
        const rows = table.rows;
        let i;
        for (i = 1; i < (rows.length - 1); i++) {
            swap = false;

            let x = rows[i].getElementsByTagName("td")[index];
            let y = rows[i + 1].getElementsByTagName("td")[index];

            if (!number) {
                if (x.textContent > y.textContent) {
                    swap = true;
                    break;
                }
            } else {
                if ((+x.textContent) > (+y.textContent)) {
                    swap = true;
                    break;
                }
            }
        }
        if (swap) {
            const column1 = rows[i].getElementsByTagName("td");
            const column2 = rows[i + 1].getElementsByTagName("td");
            let z = 0;
            for (const tableElement of column1) {
                const t = tableElement.textContent;
                tableElement.textContent = column2[z].textContent;
                column2[z].textContent = t;
                z++;
            }
            swapping = true;
        }
    }
}