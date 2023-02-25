function addition(){
    let a;
    let b;
    while(true){
        a = prompt("первое число", 0);
        b = prompt("второе число", 0);
        if(isFinite(a) && isFinite(b)) break;
        else alert("Введите числа!!!");
    }
    return +a + +b;
};

function multiplication(){
    let a;
    let b;
    while(true){
        a = prompt("первое число", 0);
        b = prompt("второе число", 0);
        if(isFinite(a) && isFinite(b)) break;
        else alert("Введите числа!!!");
    }
    return +a * +b;
};

function subtraction(){
    let a;
    let b;
    while(true){
        a = prompt("первое число", 0);
        b = prompt("второе число", 0);
        if(isFinite(a) && isFinite(b)) break;
        else alert("Введите числа!!!");
    }
    return +a - +b;
};

function division(){
    let a;
    let b;
    while(true){
        a = prompt("первое число", 0);
        b = prompt("второе число", 0);
        if(isFinite(a) && isFinite(b)) break;
        else alert("Введите числа!!!");
    }
    return +a / +b;
};

alert(division());
