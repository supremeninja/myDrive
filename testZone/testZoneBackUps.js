//is checked Radio
let radio = document.querySelectorAll('.radio-input');
console.log(radio);
document.querySelector('.push').addEventListener('click', function() {

for (let i of radio) { 
  if(i.checked) {
    console.log(i.value)
  }  
}

});

