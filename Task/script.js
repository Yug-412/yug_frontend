function add() {
  if (inputdata.value == "") {
    window.alert("the data is empty");
  } else {
    const adddata = document.createElement("li");
    const tasklist = document.getElementById("tasklist");
    tasklist.appendChild(adddata);
    adddata.innerHTML = document.getElementById("inputdata").value;
    document.getElementById("inputdata").value = "";
    deleteTask(adddata);
  }
}
function deleteTask(adddata) {
  const deletebtn = document.createElement("button");
  deletebtn.innerHTML = "delete";
  adddata.appendChild(deletebtn);
  deletebtn.onclick = function () {
    adddata.remove();
  };
}
