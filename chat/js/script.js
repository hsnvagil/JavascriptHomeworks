class Message {
    constructor(text, type, time) {
        this.messageText = text;
        this.messageType = type;
        this.createdTime = time;
    }
}

class Person {
    constructor(personName) {
        this.name = personName;
        this.msg = [];
    }
}


let minimize = true;
let persons = JSON.parse(localStorage.getItem("chat"));
if (persons == null) {
    persons = [];
}
loadChatHistory();

document.getElementById("newPersonName").addEventListener("keypress", function (event) {
    if (event.which === 13) {
        event.preventDefault();
        document.getElementById("addPerson").click();
    }
});

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.which === 13) {
        event.preventDefault();
        document.getElementById("sendButton").click();
    }
});

function loadChatHistory() {
    const personPanel = document.querySelector(".person-panel");
    let p;
    for (p of persons) {
        personPanel.innerHTML += `<div class="person-grid"><span>${p.name}</span></div>`;
    }
    personListSelectedChanged();
}

function loadMessages(item) {
    let PersonName = item.getElementsByTagName("span")[0].textContent;
    document.getElementById("personName").textContent = PersonName;
    const messages = document.querySelector(".messages");
    messages.innerHTML = "";
    let p;
    for (p of persons) {
        if (p.name === PersonName) {
            let m;
            for (m of p.msg) {
                if (m.messageType === "send") {
                    messages.innerHTML += `<div class="send-message"><span>${m.messageText}
                                           <span class="tooltip">${m.createdTime}</span>
                                           </span></div>`;
                } else {
                    messages.innerHTML += `<div class="receive-message"><span>${m.messageText}
                                           <span class="tooltip">${m.createdTime}</span>
                                           </span></div>`;
                }
            }
        }
    }
}

function personListSelectedChanged() {
    const panel = document.getElementById("personPanel");
    const grids = panel.getElementsByClassName("person-grid");
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("active");
            let c;
            for (c of current) {
                c.className = c.className.replace(" active", "");
            }
            this.className += " active";
            loadMessages(this);
        });
    }
    if (grids.length > 0) {
        grids[grids.length - 1].click();
    }
    if (persons.length > 0) {
        document.getElementById("input").disabled = false;
        document.querySelector(".location-btn").disabled = false;
        document.getElementById("sendButton").disabled = false;
    }
}

function maximizeMinimizeWindow() {
    if (minimize) {
        document.querySelector(".window").style.width = "100%";
        document.querySelector(".window").style.height = "98%";
        minimize = false;
    } else {
        document.querySelector(".window").style.width = "600px";
        document.querySelector(".window").style.height = "600px";
        minimize = true;
    }
}

function addPerson() {
    const newPersonName = document.getElementById("newPersonName");
    if (newPersonName.value.length < 1) {
        return;
    }

    for (const person of persons) {
        if(person.name === newPersonName.value){
            return;
        }
    }
    const personPanel = document.querySelector(".person-panel");
    personPanel.innerHTML += `<div class="person-grid"><span>${newPersonName.value}</span></div>`;
    persons.push(new Person(newPersonName.value));
    localStorage.setItem("chat", JSON.stringify(persons));
    personListSelectedChanged();
    newPersonName.value = "";
}

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    const messagesText = document.getElementById("input");
    messagesText.value += `${position.coords.latitude} ${position.coords.longitude}`;
}

function sendMessage() {
    const messagesText = document.getElementById("input");
    let type = "";
    if (messagesText.value.length < 1) {
        return;
    }
    const ran = Math.floor(Math.random() * 10);
    const messages = document.querySelector(".messages");
    const createdTime = new Date();
    const formattedTime = `${createdTime.toLocaleDateString()} ${createdTime.toLocaleTimeString()}`;

    if (ran % 2 === 0) {
        messages.innerHTML += `<div class="send-message"><span>${messagesText.value}
                                           <span class="tooltip">${formattedTime}</span>
                                           </span></div>`;
        type = "send";
    } else {
        messages.innerHTML += `<div class="receive-message"><span>${messagesText.value}
                                           <span class="tooltip">${formattedTime}</span>
                                           </span></div>`;
        type = "receive";
    }
    const panel = document.getElementById("personPanel");
    const grids = panel.getElementsByClassName("person-grid active");
    let chatPersonName = grids[0].getElementsByTagName("span")[0].textContent;
    let p;
    for (p of persons) {
        if (p.name === chatPersonName) {
            p.msg.push(new Message(messagesText.value, type, formattedTime));
        }
    }
    localStorage.setItem("chat", JSON.stringify(persons));
    messagesText.value = "";
}