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

let number = prompt("Eded daxil edin");
let n = parseInt(number);
if (n < 2) {
        console.log("eded ne sadedir ne de murekkebdir");
    }
    else {
        let isPrime = true;
         for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
if (isPrime) {
        console.log("Eded sadedir");
    }
    else {
        console.log("Eded murekkebdir");
    }
