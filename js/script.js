const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const search = () => {
  let filter = document.getElementById('searchInput').value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");
  for(let i = 0; i < tr.length; i++){
    let td = tr[i].getElementsByTagName("td")[0];
    if(td){
      let textValue = td.textContent || td.innerHTML;
      if(textValue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}