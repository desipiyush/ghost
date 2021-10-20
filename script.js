var bb = document.getElementById("bb");
var aa = document.getElementById("aa");
var color = ["red", "blue", "green", "red", "blue","green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green", "red", "blue", "green",];
var i = 0;
function changecolor() {
    i = i < color.length ? ++i : 0;
    aa.style.backgroundColor = color[i];
}
aa.style.background = "url(ghost.jpg)";
aa.style.backgroundBlendMode = "darken";
aa.style.minHeight = "100vh";
aa.style.cursor = "pointer";
aa.style.transition = ".2s";
