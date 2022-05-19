function order(product,quantity){

    let price = 0;


    switch(product){

        case `coffee`:
        price = 1.50
        break;
        case `water`:
        price = 1
        break;

        case `coke`:
        price = 1.4
        break;

        case `snacks`:
        price = 2
        break;
    }




    console.log(priceCounter(quantity,price).toFixed(2))


    function priceCounter(quantity,price){
        return quantity * price
     }

}
order(`water`,5);

order(`coffee`,2)