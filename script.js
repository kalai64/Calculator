// create Elements
const container = document.createElement("container");
container.className = "container";
document.body.append(container);

const calculator = document.createElement("div");
calculator.className = "calculator";
container.append(calculator);

// Output screen
const result = document.createElement("input");
result.id = "result";
result.setAttribute("placeholder", "0");

// Clear
const clean = document.createElement("button");
clean.setAttribute("onclick","result.value=``")
clean.setAttribute("type", "button");
clean.setAttribute("style", "color:red");
clean.innerText = "c";
clean.id = "clear";


const back = document.createElement("button");
back.setAttribute("type", "button");
back.setAttribute("onclick","del()")
back.innerText = "←";
back.id = "del";

const dot = document.createElement("button");
dot.setAttribute("type", "button");
dot.setAttribute("onclick","display('.')")
dot.innerText = ".";

const multi = document.createElement("button");
multi.setAttribute("type", "button");
multi.setAttribute("onclick","display('*')")
multi.innerText = "x";
multi.setAttribute("style", "color:blue");

const s7 = document.createElement("button");
s7.setAttribute("type", "button");
s7.setAttribute("onclick","display('7')")
s7.innerText = "7";

const s8 = document.createElement("button");
s8.setAttribute("type", "button");
s8.setAttribute("onclick","display('8')")
s8.innerText = "8";

const s9 = document.createElement("button");
s9.setAttribute("type", "button");
s9.setAttribute("onclick","display('9')")
s9.innerText = "9";

const division = document.createElement("button");
division.setAttribute("type", "button");
division.setAttribute("onclick","display('/')")
division.innerText = "/";
division.setAttribute("style", "color:blue");

const s4 = document.createElement("button");
s4.setAttribute("type", "button");
s4.setAttribute("onclick","display('4')")
s4.innerText = "4";

const s5 = document.createElement("button");
s5.setAttribute("type", "button");
s5.setAttribute("onclick","display('5')")
s5.innerText = "5";

const s6 = document.createElement("button");
s6.setAttribute("type", "button");
s6.setAttribute("onclick","display('6')")
s6.innerText = "6";

const subtract = document.createElement("button");
subtract.setAttribute("type", "button");
subtract.setAttribute("onclick","display('-')")
subtract.innerText = "-";
subtract.id = "subtract";
subtract.setAttribute("style", "color:blue");

const s1 = document.createElement("button");
s1.setAttribute("type", "button");
s1.setAttribute("onclick","display('1')")
s1.innerText = "1";
s1.id = "1";

const s2 = document.createElement("button");
s2.setAttribute("type", "button");
s2.setAttribute("onclick","display('2')")
s2.innerText = "2";
s2.id = "2";

const s3 = document.createElement("button");
s3.setAttribute("type", "button");
s3.setAttribute("onclick","display('3')")
s3.innerText = "3";
s3.id = "3";

const plus = document.createElement("button");
plus.setAttribute("type", "button");
plus.setAttribute("onclick","display('+')")
plus.innerText = "+";
plus.id = "add";
plus.setAttribute("style", "color:blue");

const s0 = document.createElement("button");
s0.setAttribute("type", "button");
s0.setAttribute("onclick","display('0')")
s0.innerText = "0";

const s00 = document.createElement("button");
s00.setAttribute("type", "button");
s00.setAttribute("onclick","display('00')")
s00.innerText = "00";

const equal = document.createElement("button");
equal.setAttribute("type", "button");
equal.setAttribute("onclick","res()")
equal.innerText = "=";
equal.id = "equal";

calculator.append(
  result,
  clean,
  back,
  dot,
  multi,
  s7,
  s8,
  s9,
  division,
  s4,
  s5,
  s6,
  subtract,
  s1,
  s2,
  s3,
  plus,
  s0,
  s00,
  equal
);
console.log(calculator);

// Logics


function display(num){
  result.value += num;
}

function del(){
  result.value= result.value.toString().slice(0,-1);
}

function res(){
  
  result.value = eval(result.value);
}
