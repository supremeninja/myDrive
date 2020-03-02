//is checked Radio
HTML
<div>
Radio:
<input type='radio' class='radio-input' id='radio-1' name ='r0' value='#1' checked="checked">
<label for='radio-1'>Option 1</label> 
<input type='radio' class='radio-input' id='radio-2' name ='r0' value='#2'>
<label for='radio-2'>Option 2</label> 
<input type='radio' class='radio-input' id='radio-3' name ='r0' value='#3'>
<label for='radio-3'>Option 3</label> 
</div>
<div><button class='push'>Go!</button></div>
HTML
let radio = document.querySelectorAll('.radio-input');
console.log(radio);
document.querySelector('.push').addEventListener('click', function() {

for (let i of radio) { 
  if(i.checked) {
    console.log(i.value)
  }  
}

});

let divYellow = document.querySelectorAll('.block');
//console.log(divYellow);
divYellow.forEach(function(i){
  i.onclick = function() {
    let arg =  i.style.background;
    switch(arg) {
    case 'yellow' :
            arg = i.style.background = 'green';
            console.log('1');
            break;
  case 'green' :
            arg = i.style.background ='red';
            console.log('2');
            break;
   default:
            arg = i.style.background = 'yellow';
            console.log('3');
          }

  }
});


