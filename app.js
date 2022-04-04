var outputScreen=document.getElementById("output-screen")
function display(num){
    outputScreen.value += num;
    console.log('chl')
}
function del(){
    outputScreen.value= outputScreen.value.slice(0,-1)
    console.log('chl rha')
}
function Clear(){
    outputScreen.value="";
    console.log('cg')
}
function calculate(){
    outputScreen.value = eval(outputScreen.value);
    console.log('chl rha hai')
}
function displaypower(num2){
    outputScreen.value=outputScreen.value*outputScreen.value;
    console.log('ok')
}
