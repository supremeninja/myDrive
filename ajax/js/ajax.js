// XMLHttpRequest
function ajax(url, method, functionName, dataArray) { //create a function
    let xhttp = new XMLHttpRequest(); 
    xhttp.open(method, url, true);//create a request
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //заголовки
    xhttp.send(dataArray); //инициализировать послать запрос
    //функция к-я выполняется по результату ajax запроса
    xhttp.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) {
            functionName(this);
        }
    }
}
//всомогательная функция, приобразовывает строку в массив
function requestData(dataArr) { 
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`; //перебераются ключи, и лепятся к ним их значения
    }
    //console.log(out);
    return out;
}
//функция которая обрабатывает результат
function f1(data) {  
    //console.log(data);
}

let a = {
    "name": "SpaceNinja",
    "age": 25,
    "WillBecomeAProgrammerAT": 26
}

ajax('back.php', 'POST', f1, requestData(a))