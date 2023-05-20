// var buttons=document.getElementsByClassName("button");
// var display=document.getElementById("display");
// var operand1=0;
// var operand2=null;
// var operator=null;
// for(var i=0;i<buttons.length;i++){
//     buttons[i].addEventListener('click',function(){
//         var value=this.getAttribute('data-value');
//         if(value=='+'){//if an operator is clicked
//             operator='+';
//             operand1=parseFloat(display.textContent);

//         }
//         else if(value=='='){
//             operand2==parseFloat(display.textContent);
//             //use eval to get result
//             //so result on dispalay

//         }
//         else{
//             display.innerText+=value;
//         }

//     });
// }
/*var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "AC") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}*/

var btn=document.getElementsByClassName("button");
var displ=document.getElementById("display");
displ.innerText="";
var op1=0,op2=null,operator=null;
for(var i=0;i<btn.length;i++){
btn[i].addEventListener('click',function(){
    var value=this.getAttribute('data-value');
    var text=displ.innerText.trim();
    switch(value){
        case "+":
            operator=value;
            op1=parseFloat(text);
            displ.innerText="";
            break;
        case "-":
            operator=value;
            op1=parseFloat(text);
            displ.innerText="";
            break;
        case "*":
            operator=value;
            op1=parseFloat(text);
            displ.innerText="";
            break;
        case "/":
            operator=value;
            op1=parseFloat(text);
            displ.innerText="";
            break;
        case "AC":
            displ.innerText="";
            break;
        case ".":
            if(text.length&&!text.includes('.')){
                displ.innerText=text+'.';
            }
            break;
        case "%":
            op1=parseFloat(text);
            op1=op1/100;
            displ.innerText=op1;
            break;

        case "sign":
            op1 = parseFloat(text);
            op1 = -1 * op1;
            displ.innerText = op1;

        case "=":
            op2 = parseFloat(text);
            var result = eval(op1 + ' ' + operator + ' ' + op2);
            if (result) {
                displ.innerText = result;
                op1 = result;
                op2 = null;
                operator = null;
            }
            break;
        default:
            displ.innerText+=value;
            break;
    }
});
}
