// var num=20;
// var num2=35;

// function addition(num, num2){
//     console.log(num+num2)
// }
// addition(num, num2)



// var array = [12,23,43,45,6,7,2];
// var target = 35;

// function addition(array, target){
//     for(i=0; i<array.length; i++){
//         for(j=i+1; j<array.length; j++){
//             if(array[i] + array[j] == target){
//                 console.log(array[i], array[j])
//             }
//         }
//     }
// }
// addition(array, target)

// Q. Find subtraction of give two numbers by using function. 

// var number1 = 9876;
// var number2 = 5678;
// function subtraction(number1, number2){
//        console.log(number1-number2)
//     }
// subtraction(number1, number2)

// Q. Find multiplication of give two numbers by using function. 

// var number3 = 9876;
// var number4 = 5678;

// function multiplication(number3, number4){
//     console.log(number3 * number4)
// }
// multiplication(number3, number4)

// Q. Find three numbers from given array who's addition is equal to target.


var array = [34,45,56,67,78,34,76,234,567,7834,56,34];
var target = 112;
function additionOfThreeNumber(array, target){
    var flag = false;
        for(i=0; i<array.length; i++){
            for(j=i+1; j<array.length; j++){
                for(k=j++; k<array.length; k++){
                    if(array[i] + array[j] + array[k] == target){
                        console.log(array[i], array[j], array[k])
                        flag=true;
                    }
                    
                }
            }
        }
        if(flag == false){
            console.log("false")
        }
}
additionOfThreeNumber(array, target)
















