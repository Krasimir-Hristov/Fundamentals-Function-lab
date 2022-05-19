function solve(numOne,numTwo,numThree){

  console.log(positiveOrNegative(numOne,numTwo,numThree));

//  if(positiveOrNegative(numOne,numTwo,numThree) >= 0){
//      console.log(`Positive`);
//  }else{
//      console.log(`Negative`);
//  }
//  function positiveOrNegative(num1,num2,num3){
    
//     return num1 * num2 * num3
// }


function positiveOrNegative(num1,num2,num3){
    let result = '';

    if((num1 * num2 * num3) >= 0){
        result = `Positive`
    }else{
        result = `Negative`
    }
    return result;
}


}
solve(5,12,-15);

solve(-6,-12,14);

solve(-1,-2,-3);

solve(-5,1,1);