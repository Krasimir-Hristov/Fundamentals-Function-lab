function calc(a,b,operator){


    switch (operator) {
        case `multiply`:
            let multiply = (a,b) => a * b;
            console.log(multiply(a,b));
            break;
    
        case `divide`:
            let divide = (a,b) => a / b;
            console.log(divide(a,b));
            break;

            case `add`:
            let add = (a,b) => a + b;
            console.log(add(a,b));
            break;

            case `subtract`:
            let subtract = (a,b) => a - b;
            console.log(subtract(a,b));
            
            break;
    }


}
calc(50,13,'subtract');
calc(12,
    19,
    'add');
calc(40,
    8,
    'divide');
    calc(5,
        5,
        'multiply')
