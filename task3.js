class Tovar{
    
    constructor(name, price, quantity, description){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

let tovars = [
    new Tovar("Яблоко", 2, 5, "abc"),
    new Tovar("fdГруша", 2, 10, "abc"),
    new Tovar("Банан", 2, 6, "abc"),
    new Tovar("Вишняfd", 2, 10, "acbc"),
    new Tovar("fdАрбуз", 2, 5, "acbc")
];

function filtr(arr, str){

    let strArr = str.split('&');
    let elements = strArr.map((item) => item.split(/(-|>=?|<=?|=)/).filter((punkt) => punkt && /[^-]/.test(punkt)));
    let arrOtvet = arr;
    let flagName = -1;
    let flagPrice = -1;
    let flagQuanity = -1;
    let flagDescription = -1;

    //заполняем флажшки индексами в каком подмассиве какое свойство
    for(let i = 0; i< elements.length; i++){
        flagName = elements[i][0] == 'name' ? i : flagName;
        flagPrice = elements[i][0] == 'price' ? i : flagPrice;
        flagQuanity = elements[i][0] == 'quantity' ? i : flagQuanity;
        flagDescription = elements[i][0] == 'description' ? i : flagDescription;
    }

    //проходим каждый подмассив
    for(let i = 0; i < elements.length; i++){

        //проверяем какое свойство лежит в данном подмассиве
        switch(elements[i][0]){
            case"name":
                //проверяем какое условие у данного свойства и фильтруем массив по условию
                switch(elements[flagName][1]){
                    case"contains":
                        arrOtvet = arrOtvet.filter(item => item.name.includes(elements[flagName][2]));
                        break;
                    case"starts":
                        arrOtvet = arrOtvet.filter(item => item.name.startsWith(elements[flagName][2]));
                        break;
                    case"ends":
                        arrOtvet = arrOtvet.filter(item => item.name.endsWith(elements[flagName][2]));
                        break;                       
                }
                break;
            case"price":
                //проверяем какое условие у данного свойства и фильтруем массив по условию
                switch(elements[flagPrice][1]){
                    case"=":
                        arrOtvet = arrOtvet.filter(item => item.price == elements[flagPrice][2] );
                        break;    
                    case">":
                        arrOtvet = arrOtvet.filter(item => item.price > elements[flagPrice][2] );
                        break;    
                    case"<":
                        arrOtvet = arrOtvet.filter(item => item.price < elements[flagPrice][2] );
                        break;    
                    case">=":
                        arrOtvet = arrOtvet.filter(item => item.price >= elements[flagPrice][2] );
                        break;    
                    case"<=":
                        arrOtvet = arrOtvet.filter(item => item.price <= elements[flagPrice][2] );
                        break;  
                }
                break;
            case"quantity":
                //проверяем какое условие у данного свойства и фильтруем массив по условию
                switch(elements[flagQuanity][1]){
                    case"=":
                        arrOtvet = arrOtvet.filter(item => item.quantity == elements[flagQuanity][2] );
                        break;    
                    case">":
                        arrOtvet = arrOtvet.filter(item => item.quantity > elements[flagQuanity][2] );
                        break;    
                    case"<":
                        arrOtvet = arrOtvet.filter(item => item.quantity < elements[flagQuanity][2] );
                        break;    
                    case">=":
                        arrOtvet = arrOtvet.filter(item => item.quantity >= elements[flagQuanity][2] );
                        break;    
                    case"<=":
                        arrOtvet = arrOtvet.filter(item => item.quantity <= elements[flagQuanity][2] );
                        break;  
                }
                break;
            case"description":
                //проверяем какое условие у данного свойства и фильтруем массив по условию
                switch(elements[flagDescription][1]){
                    case"contains":
                        arrOtvet = arrOtvet.filter(item => item.description.includes(elements[flagDescription][2]));
                        break;
                    case"starts":
                        arrOtvet = arrOtvet.filter(item => item.description.startsWith(elements[flagDescription][2]));
                        break;
                    case"ends":
                        arrOtvet = arrOtvet.filter(item => item.description.endsWith(elements[flagDescription][2]));
                        break;                       
                }
                break;
        }
    }
    date2 = new Date();
    return arrOtvet;
};
console.log(JSON.stringify(filtr(tovars, 'name-contains-fd&price-=2-&quantity->5&description-ends-abc')));
