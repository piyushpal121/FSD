document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("btn-space").innerText = `Button Clicked!`;
});
document.getElementById("selectbox").addEventListener("onfocus", () => {
  document.getElementById("text-space").innerText = `${Event}`;
});

let para = document.createElement("p")
para.textContent = "------CONTENT--------";
para.id = "para";
document.body.appendChild(para)