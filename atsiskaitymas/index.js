/*<!-- The `multiple` attribute lets users select multiple files. -->
<input type="file" id="file-selector" multiple>
<script>
  
</script>

const file = new File(['foo'], 'new-note.txt', {
  type: 'text/plain',
})

function download() {
  const link = document.createElement('a')
  const url = URL.createObjectURL(file)

  link.href = url
  link.download = file.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}*/



let obj={
    name:'titas',
    score:60,
    health:100
}

// let= res=localStorage.getItem('mokykla');
//localStorage.setItem();




//   function drag(event) {
//     event.dataTransfer.setData("text", event.target.id);
//   }
  
//   // Functions to handle the drop event
//   function allowDrop(event) {
//     event.preventDefault();
//   }
  
//   function drop(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     event.target.appendChild(document.getElementById(data));
//   }
