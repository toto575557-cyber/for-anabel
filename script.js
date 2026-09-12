const screens = document.querySelectorAll(".screen");

let currentScreen = 1;
let isTransitioning = false;


/* SCREEN TRANSITION */

function nextScreen(number) {

    if (
        number < 1 ||
        number > screens.length ||
        isTransitioning ||
        number === currentScreen
    ) {
        return;
    }

    const current =
        document.getElementById("screen" + currentScreen);

    const next =
        document.getElementById("screen" + number);

    if (!current || !next) {
        return;
    }

    isTransitioning = true;

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

        currentScreen = number;

        window.scrollTo(0, 0);

        setTimeout(() => {
            isTransitioning = false;
        }, 700);

    }, 350);
}


/* ALREADY KNOW */

function alreadyKnow() {

    const message =
        document.getElementById("secret");

    message.textContent =
        "Then maybe you already know why you have been on my mind. ♡";

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
        "Then I think we should make that happen. ♡";

    celebrate();
}


/* BLUSH ANSWER */

function blushAnswer() {

    const answer =
        document.getElementById("answer");

    answer.textContent =
        "Good... because making you smile was the whole point. ♡";

    celebrate();
}


/* CELEBRATION */

function celebrate() {

    const box =
        document.getElementById("confetti");

    if (!box) {
        return;
    }

    box.innerHTML = "";

    for (let i = 0; i < 45; i++) {

        const dot =
            document.createElement("span");

        dot.style.left =
            Math.random() * 100 + "vw";

        dot.style.animationDelay =
            Math.random() * 1.5 + "s";

        dot.style.animationDuration =
            2.5 + Math.random() * 2 + "s";

        box.appendChild(dot);
    }
}


/* RESTART */

function restart() {

    const answer =
        document.getElementById("answer");

    const secret =
        document.getElementById("secret");

    const confetti =
        document.getElementById("confetti");

    if (answer) {
        answer.textContent = "";
    }

    if (secret) {
        secret.textContent = "";
    }

    if (confetti) {
        confetti.innerHTML = "";
    }

    currentScreen = 1;
    isTransitioning = false;

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    setTimeout(() => {

        const firstScreen =
            document.getElementById("screen1");

        if (firstScreen) {
            firstScreen.classList.add("active");
        }

    }, 100);
    }
