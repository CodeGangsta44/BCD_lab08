'use strict';

function task1(){

  let elem = document.getElementById('task1');
  let area = 0;
  let array_of_coor = elem.getElementsByClassName('triangle');
  let array_x = [];
  let array_y = [];

  for (let i in array_of_coor){
    if(!isNaN(parseInt(i, 10))){
      if (!(i % 2)) array_x.push(array_of_coor[i].value);
      else array_y.push(array_of_coor[i].value);
    }
  }
  array_x.forEach(function (item, i){area += (item*array_y[(i + 1) % 3])});
  array_y.forEach(function (item, i){area -= (item*array_x[(i + 1) % 3])});
  area = (Math.abs(area)) / 2;
  elem.getElementsByClassName('answer')[0].value = area;
}

function task2(){
  let elem = document.getElementById('task2');
  let temp = elem.getElementsByClassName('swap')[0].value;
  elem.getElementsByClassName('swap')[0].value = elem.getElementsByClassName('swap')[1].value;
  elem.getElementsByClassName('swap')[1].value = temp;
}

function task3(){
  let elem = document.getElementById('task3');
  let array = elem.getElementsByClassName('array')[0].value.split(' ');
  let counter = 0;

  array.map((i)=>(parseInt(i, 10)));

  let max = array[0];
  array.forEach(function (item){
    if(item == max) counter++;
    if(item > max){
      max = item;
      counter = 1;
    }
  });
  elem.getElementsByClassName('answer')[0].value = 'Максимальний елемент '
  + max
  + ' зустрічається: '
  + counter;
}

function task4(){
  let obj = document.getElementById('task4').getElementsByClassName('triangle');
  let sides = [];
  for(let i of obj){
    let temp = parseInt(i.value, 10);
    if(!isNaN(temp) && temp > 0){
      sides.push(temp);
    }
  }
  let ans = '';
  if(sides.length == 3){
    if(sides[0] < sides[1] + sides[2]
      && sides[1] < sides[0] + sides[2]
      && sides[2] < sides[0] + sides[1]){
        ans = 'Трикутник існує';
    } else ans = 'Трикутник не існує';
  } else ans = 'Некоректні дані';
  document.getElementById('task4').getElementsByClassName('answer')[0].value = ans;
}

function task5(id, action){
  let elem = document.getElementById(id);
  if(action === 'over') elem.style.height = '300px';
  if(action === 'out') elem.style.height = '200px';
}

function task6(option){
  let elem = document.getElementById('line');
  let width = parseInt(elem.style.width, 10);
  switch (option) {

    case 'sub':
    width -= 5;
    elem.style.width = (width < 0 ? 0 : width) + '%';
    break;

    case 'add':
    width += 5;
    elem.style.width = (width > 100 ? 100 : width) + '%';
    break;

    default:
    elem.align = option;
    break;
  }
}

function task7(){
  let elems = document.getElementById('task7').getElementsByClassName('form');
  let course = elems[0].value;
  let duration = elems[1].value;
  let language = elems[2].value;
  let lang_coef;
  let total = 0;
  let price;
  switch (course) {
    case 'C++': price = 400; break;
    case 'JavaScript': price = 350; break;
    case 'Python': price = 300; break;
    case 'Java': price = 450; break;
    case 'C++': price = 450; break;
  }
  total += price;
  total *= parseInt(duration, 10);
  switch (language) {
    case 'Англійська': total *= 1; lang_coef = 1; break;
    case 'Українська': total *= 1.3; lang_coef = 1.3; break;
    case 'Російська': total *= 1.2; lang_coef = 1.2; break;
    case 'Суржик': total = 'безцінно'; lang_coef = 'безцінно'; break;
  }
  let answer = 'Обраний курс: ' + course + '\n' +
  'Тривалість(у тижнях): ' + duration + '\n' +
  'Обрана мова: ' + language + '\n' +
  'Коефіцієнт мови: ' + lang_coef + '\n' +
  'Повна вартість: ' + total + (isNaN(parseInt(total, 10)) ? '' : 'грн');
  elems[3].value = answer;
}

function task8(elem, option){
  if (option == 'colour'){
    let colours = ['rgb(130, 177, 255)', 'rgb(130, 255, 171)', 'rgb(244, 255, 130)', 'rgb(255, 130, 130)', 'rgb(219, 158, 255)'];
    let curr_col = elem.style.background;
    let new_col = curr_col;
    while(new_col == curr_col){
      new_col = colours[Math.floor(Math.random() * 5)];
    }
    elem.style.background = new_col;
  }
  if (option == 'back'){
    document.getElementById('table').style.backgroundImage = 'url(./img/' + elem.value + '.png' + ')';
  }
}

function task9(){
  let elems = document.getElementsByClassName('order');
  let new_order;
  let new_total = parseInt(elems[1].value, 10) * parseInt(elems[2].value, 10);;
  if(elems[3].value != ''){

    new_order = elems[3].value.split('\n');
    let curr_total = parseInt(new_order.pop().split(' ')[1])
    new_order = new_order.join('\n');
    new_order += '\n' + elems[0].value + ' ' + elems[1].value + 'X' + elems[2].value + ' = ' +
    parseInt(elems[1].value, 10) * parseInt(elems[2].value, 10) + 'грн\n' +
    'Сума: ' + (curr_total + new_total) + 'грн';

  } else {

    new_order = 'Перелік товарів:' + '\n' +
    elems[0].value + ' ' + elems[1].value + 'X' + elems[2].value + ' = ' +
    parseInt(elems[1].value, 10) * parseInt(elems[2].value, 10) + 'грн\n' +
    'Сума: ' + new_total + 'грн';

  }
  elems[3].rows = new_order.split('\n').length;
  elems[3].value = new_order;
}

function task10(elem){
  document.getElementById('reverse').value = elem.value.split('').reverse().join('');
}

function task11(elem){
  let num = parseInt(elem.value, 10);
  let dividers = [];
  for (let i = 1; i <= num; i++){
    if(num % i == 0) dividers.push(i);
  }
  document.getElementById('dividers').value = dividers.join(', ');
}

function task12(){

  function add_zeros(num){
    while(num.length < 6){
      num.unshift('0');
    }
    return num;
  }

  function is_lucky(num){
    let sum_1 = 0, sum_2 = 0;
    for(let i = 0; i < 3; i++){
      sum_1 += parseInt(num[i], 10);
      sum_2 += parseInt(num[i + 3], 10);
    }
    return sum_1 == sum_2 ? 1 : 0;
  }

  let counter = 0;
  let curr_num = [];
  for(let i = 0; i < 1000000; i++){
    curr_num = add_zeros(i.toString().split(''));
    counter += is_lucky(curr_num);
  }
  document.getElementById('lucky').value = counter;
}

function task13(){

  let elems = document.getElementsByClassName('week');
  let date = elems[0].value;
  date = date.split('.').reverse();
  date.map((i) => (parseInt(i, 10)));
  let date_start = (new Date(date[0], 0, 1));
  let date_end = (new Date(date[0], date[1] - 1, date[2]));
  let extra = date_start.getDay();
  let days = date_end - date_start;
  let weeks = Math.floor((days + ((extra - 1)*86400000)) / (7*86400000));
  elems[1].value = (weeks + 1);

}

function task14(elem){
  let text = elem.value.split(' ');
  let counter = 0;
  for (let i of text){
    if (i !== '') counter++;
  }
  document.getElementById('count').value = counter;
}

function task15(option, vehicle){
  let elems = document.getElementsByClassName('car');

  if(option == 'start'){
    let cars = [new Car(elems[0], 5000), new Car(elems[1], 4000), new Car(elems[2], 6000)];
    for (let i = 0; i < 3; i++){
      cars[i].move('auto', document.getElementById('taho'));
    }
    vehicle.move('manual', document.getElementById('taho'));
  }
  if(option == 'shift'){
    vehicle.shift();
  }
  if(option == 'again'){
    vehicle.get_ready();
    document.getElementById('car').style.marginLeft = '0%';
    for (let i = 0; i < 3; i++){
      elems[i].style.marginLeft = '0%';
    }
  }

}

function task16(elem){
  function check_str_domen(str) {
        var reg=/^[\w\dA-z.-]+$/;
        return reg.test(str);
  }
  function check_str_login(str) {
        var reg=/^[\w\dA-z.!#$%&'*+-/=?^_`{|}~]+$/;
        return reg.test(str);
  }
  document.getElementById('valid').value = '';
  let email = elem.value.split('@');
  if(email.length !== 2){
    document.getElementById('valid').value = 'Адреса неправильна';
    return;
  }
  let login = email[0];
  let domen = email[1];
  if(!check_str_login(login) || !check_str_domen(domen)){
    document.getElementById('valid').value = 'Адреса неправильна';
    return;
  }
  document.getElementById('valid').value = 'Адреса правильна';
}
