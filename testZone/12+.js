 0118 [Shorthand Object Properties]
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // Using the new shorthand property syntax:
  return {
    max,
    min,
    sum,
    avg
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);

0119 [Computed properties]
const role = 'host';
const person = 'SpaceNinja';
//OLD VERSION WORKS
const team = {};
team[role] = person; 
//NEW VERISON WORKS
const team = {
  //role: person //DOESNT WORK, role будет равно строке "role", а не переменной :(
  [role]: person, 
  [1+6+9]: 'sixteen'}

//OLD VER.
function addProp(obj,k,v){
  const copy = {
    ...obj // создем объект из переменнной team
  };
  copy[k] = v;
  return copy;
} //==={ 16: 'sixteen', director: 'james..', happy: ":), host: 'Jools Holland"}

//NEW VER.
const addProp = (obj, k, v) => {
  return { ...obj,
              [k]: v
         }
}
addProp(team, 'happy', ':)');

0120 [Adding Method to the Objects]

const math = {
  multiply : function(x,y) {
    return x*y;
  },
  add : function(x,y) {
    return x+y;
  },
  devide : function(x,y) {
    return x/y;
  }
}

0121 [ShortHand Method Syntax] В масиве могут быть просто функции без ключа, выполняются вызовом переменной, в этом случае auth

const auth = {
  username: 'TommyBot', // #1 element
  login() {
    console.log('loggged')
  }, // #2 element
  logout() {
    console.log('logouted');
  } // #3 element
}

0122 [KEYWORD THIS] this - DOM елемент с которым происходит работа, если такого нет это window
Если внтури объекта - это объект (ex. const bigObj ={});

