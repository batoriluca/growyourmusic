// Some random colors

const numBalls = 50;
const balls = [];

const screen1 = document.getElementById("sc1");

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("i");
    if (i % 3 == 0) {
        ball.classList.add("fa-solid");
        ball.classList.add("fa-arrow-trend-up");
    } else if (i % 3 == 1) {
        ball.classList.add("fa-solid");
        ball.classList.add("fa-music");
    } else {
        ball.classList.add("fa-solid");
        ball.classList.add("fa-sack-dollar");
    }
    ball.style.color = "#6657DA";


    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;

    ball.style.transform = `scale(${Math.random()})`;
    ball.style.fontSize = `${Math.random() + 1}em`;

    balls.push(ball);
    screen1.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ], {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
        }
    );
});