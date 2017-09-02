var ourButton = document.getElementById("our-button");
var  ourList = document.getElementById("our-list");
var ourHeadLine = document.getElementById("our-headLine");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

for(i = 0;i < listItems.length;i++){
listItems[i].addEventListener("click",activateItem);
}

function activateItem(){
ourHeadLine.innerHTML = this.innerHTML;
}


ourButton.addEventListener("click",doSomething);

function doSomething(){

ourList.innerHTML += "<li>Do Something</li>";

}