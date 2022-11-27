const container = document.querySelector(".container");
const greetings = document.querySelector(".greetings");
const begin = document.querySelector(".btn");
const back = document.createElement("div");
back.classList.add("btn");
back.textContent = "В начало";

let step = 1;
begin.addEventListener("click", () => {
    let numberOfRings = +prompt("Введите количество колец");
    while (isNaN(numberOfRings) || numberOfRings === 0) {
        numberOfRings = +prompt(
            "Вводите, пожалуйста, только натуральные числа!"
        );
    }
    container.innerHTML = "";
    hanoi(numberOfRings, "A", "C", "B");
    putIntoContaiter("К О Н Е Ц");

    container.append(back);
});

back.addEventListener("click", () => {
    container.innerHTML = "";
    container.append(greetings);
    step = 1;
});

function hanoi(n, i, j, k) {
    if (n === 1) {
        putIntoContaiter(
            step + ". Кольцо " + n + " – со стержня " + i + " на стержень " + j
        );
        step++;
    } else {
        hanoi(n - 1, i, k, j);
        putIntoContaiter(
            step + ". Кольцо " + n + " – со стержня " + i + " на стержень " + j
        );
        step++;
        hanoi(n - 1, k, j, i);
    }
}

function putIntoContaiter(string) {
    const p = document.createElement("p");
    p.style.margin = "1em";
    p.style.textAlign = "center";
    p.textContent = string;
    container.append(p);
}
