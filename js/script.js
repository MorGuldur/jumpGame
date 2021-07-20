const tank = document.getElementById("tank");
let bomb = document.getElementById("bomb");

document.addEventListener("keydown", function (event) {
	jump();
});

function jump() {
	if (tank.classList != "jump") {
		tank.classList.add("jump")
	}
	setTimeout(function () {
		tank.classList.remove("jump")
	}, 800)
};

let isAlive = setInterval (function() {
	let tankTop = parseInt(window.getComputedStyle(tank).getPropertyValue("top"));
	let bombLeft = parseInt(window.getComputedStyle(bomb).getPropertyValue("left"));

	if (bombLeft < 200 && bombLeft > 0 && tankTop >= 360) {
		alert("GAME OVER!");
	}
}, 1) 