// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let list = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//   console.log("div was clicked");
// });

// ul.addEventListener("click", function(event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// }); 

// for(li1 of list) {
  
//   li1.addEventListener("click", function(event) {
//   event.stopPropagation(); 
//   console.log("list was clicked");
// });
// }

// Todo App:-
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
  // console.log(inp.value);
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);

  ul.appendChild(item);
  inp.value = "";
});
ul.addEventListener("click", function(event) {
  // console.log("Item Deleted");
  // console.dir(event.target.nodeName);

  if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    // console.log(listItem);
    listItem.remove();
    console.log("delete");
  }else{
    console.log("don't delete");
  }
}) 


// let delBtns = document.querySelectorAll(".delete");
// for(let delBtn of delBtns) {
// delBtn.addEventListener("click", function() {
//    let par = this.parentElement;
//    console.log(par); 
//    par.remove();
//   })
// }
