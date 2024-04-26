function rerollRandomPage() {
  const beginPage = 144;
  const endPage = 445;
  const maxPages = endPage - beginPage + 1;
  return Math.ceil(Math.random() * maxPages) + beginPage - 1;
}

function rerollRandomName(namesArray) {
  const endNameIndex = namesArray.length;
  const randomNameIndex = Math.floor(Math.random() * endNameIndex);
  console.log(randomNameIndex);
  return namesArray[randomNameIndex];
}

document.getElementById("reroll").addEventListener("click", () => {
  console.log("running...");
  const randomPageNumber = rerollRandomPage();
  console.log(randomPageNumber);
  document.getElementById("random-page").innerHTML = randomPageNumber;
  const namesHtmlList = document.getElementsByClassName("name");
  console.log(namesHtmlList);
  // const namesList = namesHtmlList.map((nameHtml) => nameHtml.innerHTML);
  const namesArray = [];
  for (nameLi of namesHtmlList) {
    namesArray.push(nameLi.innerHTML);
  }
  const randomName = rerollRandomName(namesArray);
  document.getElementById("random-name").innerHTML = randomName;
});

document.getElementById("add-name-btn").addEventListener("click", () => {
  const name = document.getElementById("name-input").value;
  const newListItem = document.createElement("li");
  newListItem.className = "name";
  newListItem.innerHTML = name;
  document.getElementById("names-list").append(newListItem);
});
