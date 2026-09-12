const screens = document.querySelectorAll(".screen");

let currentScreen = 1;


/* SCREEN TRANSITION */

function nextScreen(number) {

    if (number < 1 || number > screens.length) {
        return;
    }

    const current = document.getElementById(
        "screen" + currentScreen
    );

    const next = document.getElementById(
        "screen" + number
    );

    if (!next) {
        return;
    }

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

        currentScreen = number;

        window.scrollTo(0, 0);

    }, 350);
}


/* ALREADY KNOW */

function alreadyKnow() {

    const message =
        document.getElementById("secret");

    message.textContent =
        "Then you already know exactly what I'm trying to say. ♡";

    message.animate(
        [
            {
                opacity: 0,
                transform: "translateY(15px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 700,
            easing: "ease-out",
            fill: "forwards"
        }
    );
}


/* YES ANSWER */

function yesAnswer() {

    const answer =
        document.getElementById("answer");

    answer.textContent =
        "Then it's a date. ♡";

    celebrate();
}


/* BLUSH ANSWER */

function blushAnswer() {

    const answer =
        document.getElementById("answer");

    answer.textContent =
        "Okay... now I'm the one blushing. ♡";

    celebrate();
}


/* CELEBRATION */

function celebrate() {

    const box =
        document.getElementById("confetti");

    box.innerHTML = "";

    for (let i = 0; i < 60; i++) {

        const dot =
            document.createElement("span");

        dot.style.left =
            Math.random() * 100 + "vw";

        dot.style.animationDelay =
            Math.random() * 1.5 + "s";

        dot.style.animationDuration =
            2 + Math.random() * 2 + "s";

        box.appendChild(dot);
    }
}


/* RESTART */

function restart() {

    document
        .getElementById("answer")
        .textContent = "";

    document
        .getElementById("secret")
        .textContent = "";

    document
        .getElementById("confetti")
        .innerHTML = "";

    currentScreen = 1;

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    setTimeout(() => {

        document
            .getElementById("screen1")
            .classList.add("active");

    }, 100);
}