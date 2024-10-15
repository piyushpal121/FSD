document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("btn-space").innerText = `Button Clicked!`;
});
document.getElementById("selectbox").addEventListener("onfocus", () => {
  document.getElementById("text-space").innerText = `${Event}`;
});

let para = document.createElement("p");
para.textContent = "------CONTENT--------";
para.id = "para";
document.body.appendChild(para);

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

divBox = document.getElementById("div-box");
divBox.style.background = "lightblue";
divBox.style.width = "200px";
divBox.style.height = "200px";
divBox.style.marginTop = "1rem";
divBox.style.marginBottom = "1rem";

document.getElementById('hidebtn').addEventListener('click', () => {
  document.getElementById('hidebtn').style.display = "none"
})