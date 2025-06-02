function add() {
  const lidata = document.createElement("li");
  const uldata = document.getElementById("ullist");
  uldata.appendChild(lidata);
  lidata.innerText = document.getElementById("inputdata").value;
  document.getElementById("inputdata").value = "";
  del(lidata);
}
function del(lidata) {
  const btn = document.createElement("button");
  lidata.appendChild(btn);
  btn.innerText = "delete";
  btn.onclick = function () {
    lidata.remove();
  };
}
