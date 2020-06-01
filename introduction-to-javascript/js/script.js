openTask(0);

function openTask(j) {
    var ul = document.getElementById("taskList");
    var listItems = ul.getElementsByTagName("li");
    var x = document.getElementById("container").querySelectorAll("section");
    for (var i = 0; i < x.length; i++) {
        if (i == j) {
            listItems[i].classList.add("selected");
            x[i].style.display = "block";
            continue;
        }
        x[i].style.display = "none";
        listItems[i].classList.remove("selected");
    }
}

function sumNumber(numbers) {
    numbers = numbers.split(',');
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += (+numbers[i]);
    }
    return total;
}

function findGCD(x, y) {
    while (y) {
        var temp = y;
        y = x % y;
        x = temp;
    }

    return x;
}

function findDivisors(x) {
    var divisors = [];
    for (var i = 1; i <= x; i++) {
        if (x % i == 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function findDigits(text) {
    var count = 0;
    text = text.split(/\s/).join('');
    for (var i = 0; i < text.length; i++) {
        const element = (+text[i]);
        if (!isNaN(element)) {
            count++;
        }
    }
    return count;
}

function displayStatistics(numbers) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var odd = 0;
    var even = 0;
    numbers = numbers.split(',');
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (isNaN(element) || element.length < 1) {
            continue;
        }
        if (element < 0) {
            negative++;
        } else if (element == 0) {
            zero++;
        } else {
            positive++;
        }
        if (element % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    return object = {
        positive: positive,
        negative: negative,
        zero: zero,
        odd: odd,
        even: even
    };
}

function shiftDigits(digits, shiftCount) {
    digits = digits.toString();
    var length = digits.length;
    if (length <= shiftCount) {
        return "Invalid input";
    }
    var shiftDigits = "";
    for (let i = 0; i < length; i++) {
        shiftDigits += digits[shiftCount];
        shiftCount++;
        if (shiftCount >= length) {
            shiftCount = 0;
        }
    }
    return shiftDigits;
}

function mulTable() {
    var html = "<table style='border:0px'>";
    html += "<tr style='height:40px;'>";
    html += "<td style='width:40px;background-color:#666;color:white;border-radius:40%''>X</td>";
    for (var i = 1; i <= 10; i++) {
        html += "<td style='width:40px;background-color:gray;color:white; border-radius:40%;'>" + i + "</td>";
    }
    html += "</tr>";
    for (var a = 2; a <= 10; a++) {
        html += "<tr style='height:40px;'>";
        html += "<td style='width:40px;background-color:gray;color:white;border-radius:40%;'>" + a + "</td>";
        for (var b = 1; b <= 10; b++) {
            html += "<td style='width:40px; background-color:mediumseagreen; border-radius:40%; color:white;'>" + a * b + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}

function findGuestNumber(n) {
    var equals = false;
    var z = 0;
    var y = 100;
    var x = 0;
    while (!equals) {
        x = (y - z) / 2 + z;
        x = Math.trunc(x);
        var answer = prompt(`${x} is this your number?.. ( ${x} >N , ${x} <N , ${x} =N)`);

        switch (answer) {
            case '=':
                equals = true;
                break;
            case '<':
                z = x;
                break;
            case '>':
                y = x;
                break;
        }
    }
}

function solveTask1() {
    var task1Result = document.getElementById("task1Result");
    task1Result.style.color = "gainsboro";
    var numbers = document.getElementById("numbers").value;
    var result = sumNumber(numbers);
    if (isNaN(result)) {
        task1Result.style.color = "red";
        task1Result.textContent = "invalid input";
        return;
    }
    task1Result.textContent = result;
}

function solveTask2() {
    var task2Result = document.getElementById("task2Result");
    task2Result.style.color = "gainsboro";
    var x = (+document.getElementById("firstNumber").value);
    var y = (+document.getElementById("secondNumber").value);
    var result = findGCD(x, y);
    if (isNaN(result)) {
        task2Result.style.color = "red";
        task2Result.textContent = "invalid input";
        return;
    }
    document.getElementById("task2Result").textContent = result;
}

function solveTask3() {
    var number = (+document.getElementById("number").value);
    var task3Result = document.getElementById("task3Result");
    task3Result.style.color = "gainsboro";
    if (isNaN(number)) {
        task3Result.style.color = "red";
        task3Result.textContent = "invalid input";
        return;
    }
    var result = findDivisors(number);
    task3Result.textContent = result;
}

function solveTask4() {
    var text = document.getElementById("text").value;
    var task4Result = document.getElementById("task4Result");
    task4Result.textContent = findDigits(text);
}

function solveTask5() {
    var numbers = document.getElementById("numbers1").value;
    var result = displayStatistics(numbers);
    document.getElementById("positive").textContent = result.positive;
    document.getElementById("negative").textContent = result.negative;
    document.getElementById("zero").textContent = result.zero;
    document.getElementById("even").textContent = result.even;
    document.getElementById("odd").textContent = result.odd;
}

function solveTask6() {
    var answer = true;
    while (answer) {
        var firstNum = prompt("First Number");
        if (firstNum == null) {
            break;
        }
        var secondNum = prompt("Second Number");
        if (secondNum == null) {
            break;
        }
        var sign = prompt("Operation ( + , - , x , / )", "+");
        if (sign == null) {
            break;
        }
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        var result = 0;
        switch (sign) {
            case "+":
                result = firstNum + secondNum;
                break;
            case "-":
                result = firstNum - secondNum;
                break;
            case "x":
                result = firstNum * secondNum;
                break;
            case "/":
                result = firstNum / secondNum;
                break;
            default:
                result = "NaN";
                break;
        }
        var message = "Result: " + result.toString() + "! Would you like to continue again?";
        answer = confirm(message);
    }
}

function solveTask7() {
    var digits = (+document.getElementById("digits").value);
    var shiftCount = (+document.getElementById("shiftCount").value);
    var task7Result = document.getElementById("task7Result");
    task7Result.style.color = "gainsboro";
    var result = shiftDigits(digits, shiftCount);
    if (result == "Invalid input") {
        task7Result.style.color = "red";
        task7Result.textContent = result;
        return;
    }
    task7Result.textContent = result;
}

function solveTask8() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = new Date();
    var answer = true;
    var i = date.getDay();
    while (answer) {
        var dayOfTheWeek = weekday[i];
        message = "Day of the week " + dayOfTheWeek.toString() + ". Do you want to see the next day?";
        answer = confirm(message);
        i++;
        if (i > 6) {
            i = 0;
        }
    }
}

function solveTask9() {
    document.querySelector(".task-9").innerHTML = mulTable();
}

function solveTask10() {
    var guestNumber = document.getElementById("guestNumber").value;
    if (!isNaN(guestNumber) && guestNumber > 0 && guestNumber < 100) {
        findGuestNumber(guestNumber);
    }
}