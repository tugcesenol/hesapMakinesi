var sayi1=0;
var sayi2=0;
var operator;
function sayiyiGoster(sayi) {    
    if(document.Calculator.Input.value==0) {
    	document.Calculator.Input.value=sayi;
    }
    else {
    	document.Calculator.Input.value=document.Calculator.Input.value + sayi;
    }
}
function toplama() {
    sayi1=parseFloat(document.Calculator.Input.value);
    document.Calculator.Input.value="";
    operator=toplama;
}
function cikarma() {
    sayi1=parseFloat(document.Calculator.Input.value);
    document.Calculator.Input.value="";
    operator=cikarma;
}
function carpma() {
    sayi1=parseFloat(document.Calculator.Input.value);
    document.Calculator.Input.value="";
    operator=carpma;
}
function bolme() {
    sayi1=parseFloat(document.Calculator.Input.value);
    document.Calculator.Input.value="";
    operator=bolme;
}
function esittirIslemi() {
    sayi2=parseFloat(document.Calculator.Input.value);
    if(operator==toplama ) {
        document.Calculator.Input.value=sayi1+sayi2;
    }
    if(operator==cikarma) {
        document.Calculator.Input.value=sayi1-sayi2;
    }
    if(operator==carpma) {
        document.Calculator.Input.value=sayi1*sayi2;
    }
    if(operator==bolme) {
        document.Calculator.Input.value=sayi1/sayi2;
    }  
}