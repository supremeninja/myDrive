//считывание клика
let tab = document.querySelectorAll('.tab');
tab.forEach(function (element) {
    element.onclick = showTabs;
});
//обработка клика
function showTabs() {
    //получение даты,активность кнопки
    
    let data = this.getAttribute('data');
    if (data === '1') {
        tab[0].style.fontWeight = 'bold';
        tab[1].style.fontWeight = 'normal';
        tab[2].style.fontWeight = 'normal';        
    } else if (data === '2') {
        tab[1].style.fontWeight = 'bold';
        tab[0].style.fontWeight = 'normal';
        tab[2].style.fontWeight = 'normal';        
    } else {
        tab[2].style.fontWeight = 'bold';
        tab[1].style.fontWeight = 'normal';
        tab[0].style.fontWeight = 'normal';        
    }
    //скрываем все 
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
    //показываем нужный
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}


    // css .tab-body[data="3"]
    // '.tab-body[data="'+data+'"]'
    //document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';