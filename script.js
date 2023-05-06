var icon = document.getElementById("icon");
icon.onclick = function () {
if (document.body.classList.toggle("dark-theme")){
icon.src = "sun.png";
}else{
icon.src = "moon.png";
}
}
