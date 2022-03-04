import "./index.css";
import logo from "./logo/notes-icon-mac.jpg";

let img = document.createElement("img");
img.src = logo;
document.getElementById("logo").append(img);

let arr = JSON.parse(localStorage.getItem("note")) || [];
notess(arr);

document.getElementById("addnotes").addEventListener("click", () => {
  let note = document.getElementById("note").value;
  let obj = {
    task: note,
  };
  arr.push(obj);
  document.getElementById("note").value = "";
  localStorage.setItem("notes", JSON.stringify(arr));
  notess(arr);
});

function notess(arr) {
  document.getElementById("seenote").innerHTML = "";

  
    arr.map((elem, index) => {
      let Div = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerText = index + 1 + ":" + " ";
      let h4 = document.createElement("h4");
      h4.innerText = elem.task;
      let deletBtn = document.createElement("button");
      deletBtn.innerText = "Delete";
      deletBtn.addEventListener("click", function () {
        deleteNotes(index);
      });
     Div.append(h3, h4);
      document.getElementById("seenote").append(Div, deletBtn);
    });
  }


function deleteNotes(index) {
  arr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(arr));
  notess(arr);
}