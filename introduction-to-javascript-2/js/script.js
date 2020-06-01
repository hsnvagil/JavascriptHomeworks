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

function greaterThan(x, y) {
    if (x < y)
        return -1;
    else if (x > y)
        return 1;
    return 0;
}

function factorial(x) {
    var f = [];
    if (x == 0 || x == 1) {
        return 1;
    }
    if (f[x] > 0) {
        return f[n];
    }
    return f[x] = factorial(x - 1) * x;
}

function convertOneNumber(x, y, z) {
    var oneNumber = x + y + z;
    return oneNumber;
}

function rectangleArea(x, y) {
    if (y != undefined)
        return x * y;
    else
        return x * x;
}

function isPerfectNumber(x) {
    if (x == 0) {
        return false;
    }
    var count = 0;
    for (var i = 1; i < x; i++) {
        if (x % i == 0) {
            count += i;
        }
    }
    return count == x;
}

function isPerfectNumberOfRange(x, y) {
    var nums = [];
    for (var i = x; i < y; i++) {
        if (isPerfectNumber(i)) {
            nums.push(i);
        }
    }
    return nums;
}

function timeValidation(time) {
    var regex = '^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$';
    return time.match(regex);
}

function convertTime(hours, minutes, seconds) {
    hours = hours.padStart(2, '0');
    minutes = minutes.padStart(2, '0');
    seconds = seconds.padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function convertTimeToSeconds(hours, minutes, seconds) {
    hours = hours.padStart(2, '0');
    minutes = minutes.padStart(2, '0');
    seconds = seconds.padStart(2, '0');
    var sec = (+hours) * 3600 + (+minutes) * 60 + (+seconds);
    return sec;
}

function convertSecondsToTime(givenSeconds) {
    date = new Date(givenSeconds * 1000);
    hours = date.getUTCHours().toString();
    minutes = date.getUTCMinutes().toString();
    seconds = date.getSeconds().toString();
    return convertTime(hours, minutes, seconds);
}


function solveTask1() {
    var x = (+document.getElementById("firstNumber").value);
    var y = (+document.getElementById("secondNumber").value);

    var result = greaterThan(x, y).toString();
    document.getElementById("task1Result").textContent = result;
}

function solveTask2() {
    var x = (+document.getElementById("number").value);
    var result = factorial(x).toString();

    document.getElementById("task2Result").textContent = result;
}

function solveTask3() {
    document.getElementById("task3Result").style.color = "moccasin";
    var x = document.getElementById("firstNum").value;
    var y = document.getElementById("secondNum").value;
    var z = document.getElementById("thirdNum").value;
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        document.getElementById("task3Result").style.color = "red";
        document.getElementById("task3Result").textContent = "only number";
        return;
    }

    var result = convertOneNumber(x, y, z);
    document.getElementById("task3Result").textContent = result;
}

function solveTask4() {
    document.getElementById("task4Result").style.color = "moccasin";
    var x = document.getElementById("length").value.trim();
    var y = document.getElementById("width").value.trim();

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("task4Result").style.color = "red";
        document.getElementById("task4Result").textContent = "only number";
        return;
    }
    if (y.length < 1) {
        document.getElementById("task4Result").textContent = rectangleArea(x);
    } else {
        document.getElementById("task4Result").textContent = rectangleArea(x, y);
    }
}

function solveTask5() {
    document.getElementById("task5Result").style.color = "moccasin";
    var x = document.getElementById("numbrer").value;
    if (isNaN(x)) {
        document.getElementById("task5Result").style.color = "red";
        document.getElementById("task5Result").textContent = "only number";
        return;
    }
    if (isPerfectNumber(x)) {
        document.getElementById("task5Result").textContent = "It is a perfect number";
    } else {
        document.getElementById("task5Result").textContent = "It is not a perfect number";
    }
}

function solveTask6() {
    document.getElementById("task6Result").style.color = "moccasin";
    var x = document.getElementById("startNum").value;
    var y = document.getElementById("endNum").value;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("task6Result").style.color = "red";
        document.getElementById("task6Result").textContent = "only number";
        return;
    }

    var nums = isPerfectNumberOfRange(x, y);
    document.getElementById("task6Result").textContent = nums;
}

function solveTask7() {
    document.getElementById("task7Result").style.color = "moccasin";
    var h = document.getElementById("hour").value.trim();
    var m = document.getElementById("minute").value.trim();
    var s = document.getElementById("second").value.trim();
    var result = convertTime(h, m, s);
    if (timeValidation(result) == null) {
        document.getElementById("task7Result").style.color = "red";
        document.getElementById("task7Result").textContent = "invalid time";
        return;
    }
    document.getElementById("task7Result").textContent = result;
}

function solveTask8() {
    document.getElementById("task8Result").style.color = "moccasin";
    var h = document.getElementById("hours").value.trim();
    var m = document.getElementById("minutes").value.trim();
    var s = document.getElementById("seconds").value.trim();
    var result = convertTimeToSeconds(h, m, s);
    document.getElementById("task8Result").textContent = result;
}

function solveTask9() {
    var seconds = document.getElementById("Seconds").value.trim();
    var result = convertSecondsToTime(seconds);
    document.getElementById("task9Result").textContent = result;
}

function solveTask10() {
    document.getElementById("task10Result").style.color = "moccasin";
    var sHours = document.getElementById("sHours").value.trim();
    var sMinutes = document.getElementById("sMinutes").value.trim();
    var sSeconds = document.getElementById("sSeconds").value.trim();

    var eHours = document.getElementById("eHours").value.trim();
    var eMinutes = document.getElementById("eMinutes").value.trim();
    var eSeconds = document.getElementById("eSeconds").value.trim();

    var start = convertTimeToSeconds(sHours, sMinutes, sSeconds);
    var end = convertTimeToSeconds(eHours, eMinutes, eSeconds);
    if (start > end) {
        document.getElementById("task10Result").style.color = "red";
        document.getElementById("task10Result").textContent = "Invalid time";
        return;
    }
    var duration = end - start;
    var result = convertSecondsToTime(duration);
    document.getElementById("task10Result").textContent = result;
}