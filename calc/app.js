let a = ''
let b = ''
let sign = ''
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '%']
const action = ['-', '+', 'x', '/', '+/-']

const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = ''
  b = ''
  sign = ''
  finish = false
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  //нажата ас
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  //получаю нажатую кнопку
  const key = event.target.textContent;
  //если 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      out.textContent = a;
    }
    else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }
    else {
      b += key;
      out.textContent = b;//a???
    }
    console.log(a, b, sign)
  }

  //если +- /
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return
  }
  //нажато равно
  if (key === '=') {
    a = parseInt(a, 10)
    // b = parseInt(b, 10)
    if (b === '') b = a;
    if (b.endsWith('%')) {
      switch (sign) {
        case "+":
          b = parseInt(b.slice(0, -1), 10)
          a = ((a / 100) * b) + (+a);
          break;
          case "-":
            b = parseInt(b.slice(0, -1), 10)
            a = a -(a / 100) * b;
            break;
      }
    } else {
      b = parseInt(b, 10)
      switch (sign) {
        case "+":
          a = a + b;
          break;
        case "-":
          a = a - b;
          break;
        case "x":
          a = a * b;
          break;
        case "/":
          if (b === '0') {
            out.textContent = 'Ошибка';
            a = '';
            b = '';
            sign = '';
            return;
          }
          a = a / b;
          break;
          
      }
    }
    finish = true;
    out.textContent = a;
  }

}