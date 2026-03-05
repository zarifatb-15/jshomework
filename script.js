// 1.ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.
// let number =prompt("Eded daxil edin");
// let n= parseInt(number);
// if(n %3==0 && n %7==0)
// console.log("Eded 3 ve 7-e bolunur");
// else
// console.log("Eded 3 ve 7-e bolunmur");

// 2 Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin sayini tapin.

// let count = 0;
// let n = 0;
// let m = 10;
// for (let i = n + 1; i < m; i++) {
//   if (i % 2 !== 0) count++;
// }
// console.log(count);

// 3 Verilmis n ve m (n<m) ededleri arasindaki tek ededlerin cemini tapin.

// let sum=0;
// let n = 0;
// let m = 10;

// for (let i = n + 1; i < m; i++) {
//   if (i % 2 !== 0)
//     sum+=i;
// }
// console.log(sum);

// 4 Verilmis n tam ededinin sade ve ya murekkeb oldugunu tapin.

// let number = prompt("Eded daxil edin");
// let n = parseInt(number);

// if (n < 2) {
//     console.log("Eded ne sadedir ne de murekkebdir");
// } else {
//     let isPrime = true; 

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
   
//     if (isPrime) {
//         console.log("Eded sadedir");
//     } else {
//         console.log("Eded murekkebdir");
//     }
// }



// 5)Verilmish arrayin icindeki cut ededlerin cemini tapin.
// let arr= prompt("Ededleri daxil edin");
// arr=arr.split(",");
// let sum=0;

//  for(let i=0; i<arr.length; i++){
//    let num= parseInt(arr[i]);
//     if(num%2===0){
//         sum+=num;
//     }
//  }
//  console.log(`Cut ededlerin cemi ${sum}`);
 

//function sumEvenNumbers

// function sumEvenNumbers(inputArr) {
//     if (!inputArr) return 0;

//     return inputArr
//                .split(",")
//                .map(item=>Number(item.trim()))
//                .filter(num => !isNaN(num))
//                .filter(num => num % 2===0)
//                .reduce((sum,num)=>sum+num,0);
// }
// let data= prompt("Ededleri daxil edin (vergulle ayrilmis)");
// let result = sumEvenNumbers(data);
// console.log(`Cut ededlerin cemi ${result}`);
 


// 6)Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let arr=[1,2,3,4,5,6];
// let sum=0;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//         sum+=arr[i]**2;
//     }
// }
// console.log(`Cut ededlerin kvadratlarinin cemi ${sum}`);    

// function sumEvenSquares(inputArr) {
//     if (!inputArr) return 0;
//     let sum=0;
//     for(let i=0; i<inputArr.length; i++){
//         if(inputArr[i]%2===0){
//             sum+=inputArr[i]**2;
//         }
//     }
//     return sum;

// }
// console.log(`Cut ededlerin kvadratlarinin cemi ${sumEvenSquares([1,2,3,4,5,6])}`);



/*7) Elə bir funksiya yazın ki 2 parametr qəbul eləsin
hər 2 parametrin rəqəm olub-olmamağını yoxlamalısınız
əgər hər 2si də rəqəmdirsə yazdığınız funksiya həmin 2 rəqəm arasındakı ədədlərin cəmini return etməlidir (misal üçün parametrlər 10 və 15dirsə 10,11,12,13,14,15 cəmini qaytarmalıdır)*/


// function rangeSum(num1, num2) {

// }
