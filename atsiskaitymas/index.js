let pirmasvard=0;
let paskutinisvard=3;
function loadSampleNames() {

    let names = ["Andrew", "Robert", "Steve" ].slice(pirmasvard, paskutinisvard);
    pirmasvard+=3;
    paskutinisvard+=3;
    if (localStorage.getItem("names")) {
      let existingNames = JSON.parse(localStorage.getItem("names"));
      names = existingNames.concat(names);
    }
  
    localStorage.setItem("names", JSON.stringify(names));
  
    for (let i = 0; i <= gridItems.length - 1; i++) {
      let nameIndex = names.length - 1 - i;
      if (nameIndex >= 0) {
      gridItems[i].textContent = names[nameIndex];
      }
      }
  }
  
  let loadSampleButton = document.querySelector(".load-sample");
  loadSampleButton.addEventListener("click", loadSampleNames);

  
  function exportToFile() {
    let gridItems = document.querySelectorAll(".grid-item");
  
    let userData = "";
    for (let i = 0; i < gridItems.length; i++) {
      let itemText = gridItems[i].textContent;
      if (itemText.trim() !== "empty") {
        if (userData !== "") {
          userData += "\n";
        }
        userData += itemText;
      }
    }
  
    let file = new Blob([userData], { type: "text/plain" });
  
    let fileURL = URL.createObjectURL(file);
  
    let downloadLink = document.createElement("a");
    downloadLink.href = fileURL;
    downloadLink.download = "sarasas.txt";
    downloadLink.click();
  }
  
  let exportButton = document.querySelector(".export-button");
  exportButton.addEventListener("click", exportToFile);
  


function copyToClipboard() {
    let gridItems = document.querySelectorAll(".grid-item");
    let userData = "";
    for (let i = 0; i < gridItems.length; i++) {
      let itemText = gridItems[i].textContent;
      if (itemText.trim() !== "empty") {
        userData += itemText + " ";
      }
    }
    navigator.clipboard.writeText(userData)
  }
  
  let copyButton = document.querySelector(".copy-button");
  copyButton.addEventListener("click", copyToClipboard);
  
const dropButton = document.getElementById("drop-button");
dropButton.addEventListener("click", function() {
  
  const input = document.createElement("input");
  input.type = "file";

  input.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
      const fileContent = reader.result;
      const fileType = file.type;
      if (fileType === "text/plain") {
        processTextFile(fileContent);
      }
    });
    reader.readAsText(file);
  });
  input.click();
});


function processTextFile(fileContent) {
  let names = fileContent.split("\n");
  let gridItems = document.querySelectorAll(".grid-item");

  for (let i = 0; i < gridItems.length; i++) {
    if (i < names.length) {
      gridItems[i].textContent = names[i].trim();
    } else {
      gridItems[i].textContent = "empty";
    }
  }
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', drop);
});

let draggedItem = null;

function dragStart(event) {
  draggedItem = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  if (draggedItem !== this) {
    draggedItem.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }
}
