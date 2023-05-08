let search=document.getElementById('in')
let submit=document.getElementById('x')
let subMenu=document.querySelector('.submenu')
let item=document.getElementById('item')
let modal=document.querySelector('.modal')
let password=document.getElementById('pass')
let user=document.getElementById('username')
let btna=document.querySelector('.login')

search.addEventListener('input', function(){
 const searchText=search.value;

  const result = window.find(searchText);
  if (result) {
    console.log(`Found "${searchText}" on the page.`);
    
  } else {
    console.log(`Unable to find "${searchText}" on the page.`);
  }
});


btna.addEventListener('click',function(event){
  event.preventDefault()
   
      modal.style.display='block'
     console.log(modal);
    

})
document.addEventListener('click',function (event) {
  event.preventDefault()
   
  if ((!modal.contains(event.target)) && (!btna.contains(event.target))) {
    // clicked outside of modal, close it
    event.preventDefault()
    modal.style.display = 'none'
  }
});
   
  

  
