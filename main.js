//  01   Write a function to find the largest number in an array..........

let arr = [12, 4, 53, 23, 57, 456, 4523, 647, 53, 5, 4, 4,55, 53];
function largestNumber() {
    return Math.max(...arr);
}
console.log(largestNumber())



// 02  Write a function to find the smallest number in an array..............

function smallestNumber() {
    return Math.min(...arr)
}
console.log(smallestNumber())





 // 03   Write a function to remove duplicates from an array.....................

function removeDublicate() {
    return arr.filter((ind, num) => arr.indexOf(ind) === num)
}
console.log(removeDublicate())




 // 04   Write a function to check if a given number is prime or not..............

let array1 = [4, 5, 8, 6, 9, 7, 12, 11];
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    } return true
}
console.log(array1.filter(isPrime));




// // // 05   Write a function to reverse a string...................

let fullName = 'Lucky';
function reverseStr() {
    let splarr = fullName.split('');
    let revarr = splarr.reverse();
    let joinarr = revarr.join('')
    return joinarr;
}
console.log(reverseStr());




// // //  06   Write a function to check if a given string is a palindrome............

// // // palindrome ?  =>  str === reverse(str) 

let str = 'madam';
function revstr() {
    let spl = str.split('');
    let rev = spl.reverse();
    let reverseStr = rev.join('');
    if (str == reverseStr) {
        console.log(`${str} is a palindrome`)
    } else {
        console.log(`${str} is not a palindrome`)
    }
}
revstr();


// // // 07   Write a function to check if a given string is an anagram of another string.........
let a = 'lucky';
let b = 'ckluy';

function anagramFunc() {
    let al = a.length;
    let bl = b.length;

    if (al !== bl) {
        console.log(`Invalid input`)
        return
    }
    let sa = a.split('').sort().join('');
    console.log(sa)
    let as = b.split('').sort().join('');
    console.log(as)
    if (sa === as) {
        console.log(true)
    } else {
        console.log(false)
    }

}
anagramFunc()




// // //  08   Write a function to find the factorial of a given number...............

let fact = 3;
let result = 1;

function factorial00() {
    if (fact == 0 || fact == 1) {
        return 1;
    } else if (fact > 1) {
        for (let i = fact; i >= 1; i--) {
            result = result * i
        }
        return result;
    }
}
console.log(factorial00())




// // // 09   Write a function to find the sum of an array of numbers............
let sumarr = [1, 2, 3, 4, 5, 6]; // 21
let sumOfArr = 0;

function sum() {
    for (let i = 0; i < sumarr.length; i++) {
        sumOfArr += sumarr[i];
    } return sumOfArr;
}
console.log(sum())




// // // 10   Write a function to find the average of an array of numbers...........

function avg() {
    return sumOfArr / (sumarr.length);
}
console.log(avg())

// // //  11   Write a function to convert a string to title case....................

let tStra = 'lucky';

function ttst() {
    return tStra.replace(tStra[0], tStra[0].toUpperCase())
}
console.log(ttst());

// // // 12  Write a function to convert a string to camel case....................

// // // 13  Write a function to convert a string to a kebab case...............

// // // 14  Write a function to truncate a string to a given length.....................

// // // 15  Write a function to remove all spaces from a string................
let reStr = '     file ';

function trimming() {
    return reStr.trim(' ');
}
console.log(trimming())


// // // 16   Write a function to capitalise the first letter of each word in a string..........
// // // 17  Write a function to generate a random number between two given numbers...

let min = 12;
let max = 23;
const aaa = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(aaa)


// // // 18  Write a function to shuffle an array.....

// // // 19  Write a function to flatten an array of nested arrays.

let arr19 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
function flattenArr() {
    return arr19.flat(2)
}
console.log(flattenArr());


// // // 20  Write a function to find the second largest number in an array.
let arr20 = [1, 2, 3, 4, 5, 26, 7, 8, 9, 11, 12, 13, 15];
let arrr = [];
function secLargest() {
    arr20.sort(function (a, b) { return a - b })
    for (let i = arr20.length - 1; i > 0; i--) {
        arrr.push(arr20[i])
    }
    return arrr[1]
}
console.log(secLargest())


// // // 21  Write a function to find the second smallest number in an array.

let arr21 = [1,2,3,4,5,-621,32,43,-32,444,-234,0,-98];
function secondSmallest(){
    arr21.sort((a, b) => a - b);
    return arr21[1];
}
console.log(secondSmallest())


// // // 22  Write a function to find the maximum sum of two numbers in an array.
let arr22 = [1, 2, 3, 5, 6, 4, 8, 9, 55, 7, 15];
let MaxSumNum = 0;
function MaxSum(a, b) {
    for (let i = 0; i < arr22.length; i++) {
        for (let j = i + 1; j < arr22.length; j++) {
            let twoNumSum = arr22[i] + arr22[j];
            if (twoNumSum > MaxSumNum) {
                MaxSumNum = twoNumSum
            }
        }
    }
    return MaxSumNum;
}
console.log(MaxSum())


// // // 23  Write a function to find the second maximum sum of two numbers in an array.
let arr23 = [1, 22, 13, 41, 55, 26, 7, 8, 9];
function secondMaxSum() {
    arr23.sort((a, b) => a - b);
    return arr23[arr23.length - 2] + arr23[arr23.length - 3];
}
console.log(secondMaxSum())


// // // 24  Write a function to find the intersection of two arrays...

// // Intersection => same values in both arrays...

let arr24 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr24a = [2, 4, 6, 7, 9, 0, 11];
let intersection = []
function intersectionOfArrays() {
    //    intersection = arr24.filter(e => arr24a.indexOf(e) !== -1);
    intersection = [...arr24, ...arr24a];
    intersection = intersection.filter((e, el) => intersection.indexOf(e) !== el)
    return intersection;
}
console.log(intersectionOfArrays())


// // // 25  Write a function to find the union of two arrays...

let arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr25a = [2, 4, 6, 7, 9, 0, 11];
let unionOfArr = [];

function findUnion() {
    unionOfArr = [...arr25, ...arr25a].sort((a, b) => a - b);
    unionOfArr = unionOfArr.filter((e1, e2) => { return unionOfArr.indexOf(e1) === e2 })
    return unionOfArr;
}
console.log(findUnion());

// // // 26  Write a function to find the difference of two arrays...

let arr26 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr26a = [2, 4, 6, 7, 9, 0, 11];
let differenceOfArr = [];

function findDifference(){
   let diff1 = arr26.filter(x => !arr26a.includes(x))
   let diff2 = arr26a.filter(x => !arr26.includes(x))
   differenceOfArr = [...diff1, ...diff2]
  return differenceOfArr
}
console.log(findDifference())


// // // 27  Write a function to sort an array in ascending order.

let arr27 = [1, 3, 2, 4, 6, 5, 8, 0, 9, 7];

function ascendingOrder() {
    arr27.sort((a, b) => a - b);
    return arr27;
}
console.log(ascendingOrder())


// // // // 28  Write a function to sort an array in descending order.
let arr28 = [1, 3, 2, 4, 6, 5, 8, 0, 9, 7];

function descendingOrder() {
    arr28.sort((a, b) => b - a);
    return arr28;
}
console.log(descendingOrder())


// // // 29  Write a function to filter out all even numbers from an array.

let arr29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19];
let evenList = []
function findEven() {
    for (let i = 0; i < arr29.length; i++) {
        if (arr29[i] % 2 === 0) {
            evenList.push(arr29[i])
        }
    }
    return evenList;
}
console.log(findEven())

// // // 30 Write a function to filter out all odd numbers from an array.

let arr30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19];
let oddList = [];
function findOdd() {
    for (let i = 0; i < arr30.length; i++) {
        if (arr30[i] % 2 !== 0) {
            oddList.push(arr30[i])
        }
    }
    return oddList
}
console.log(findOdd())


// // // 31  Write a function to calculate the distance between two points.
let num1 = 23;
let num2 = 32;

function calcDistance() {
    return num1 > num2 ? num1 - num2 : num2 - num1;
}
console.log(calcDistance())


// // // // 32  Write a function to calculate the area of a circle.

let r = 3; // r = radius of circle
let PI = 3.142857142857143

function calcAreaOfCercle() {
    area = PI * (r * r)
    return ` The area of circle is ${area.toFixed(2)}`
}
console.log(calcAreaOfCercle())



// // // // 33  Write a function to calculate the perimeter of a circle.
let radius = 3;
let pi = 3.142857142857143

function calcPerimeterOfCercle() {
    let perimeter = 2 * pi * radius
    return ` The perimeter of circle is ${perimeter.toFixed(2)}`
}
console.log(calcPerimeterOfCercle());



// // // 34  Write a function to calculate the area of a rectangle.

function areaOfRectangle(width, length) {
    let area = width * length;
    return ` Area of rectangle is ${area}`
}
console.log(areaOfRectangle(4, 5))

// // // 35   Write a function to calculate the perimeter of a rectangle.
function perimeterOfRectangle(width, length) {
    perimeter = 2 * (width + length);
    return ` The perimeter of rectangle is ${perimeter}`
}
console.log(perimeterOfRectangle(2, 3))



// // // 36  Write a function to calculate the area of a triangle.
function areaOfTriangle(base, height) {
    let area = 1 / 2 * (base * height);
    return ` The area of Triangle is ${area}`
}
console.log(areaOfTriangle(4, 6));


// area when all sides are given....
let side1 = 3;
let side2 = 4;
let side3 = 5;
let s = (side1 + side2 + side3) / 2;

function triangleArea() {
    area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return ` Area of Triangle is ${area}`
}
console.log(triangleArea())


// // // 37  Write a function to calculate the perimeter of a triangle.
let s1 = 2;
let s2 = 7;
let s3 = 8;

function perimeterOfTriangle() {
    if ((s1 + s2) < s3) {
        return ` Invalid input : make sure (Side1 + Side2) > Side3`
    }
    return `The perimeter of triangle is : ${(s1+s2+s3)}`;
}
console.log(perimeterOfTriangle())


// // // 38  Write a function to check if a given year is a leap year or not.

let Year = 2024;

function leapYear(){
 if((Year % 4 ===0) && (Year % 100 !==0) || Year % 400 ==0){
    return `${Year} is a leap Year`
 }
 return `${Year} is not a leap Year`
}
console.log(leapYear())


// // 39  Write a function to convert a number to Roman numerals.
// // 40  Write a function to convert a Roman numeral to a number.
// // 41  Write a function to generate all possible permutations of a given string.
// // 42  Write a function to generate all possible combinations of a given string.
// // 43  Write a function to find the first non-repeating character in a string.
// // 44  Write a function to find the maximum occurring character in a string.
// // 45  Write a function to count the number of vowels in a string.

let vowelStr = 'javascript';
let count = 0;
function countVowel(){
  let vowel = ['a','e','i','o','u'];
 for(let i of vowelStr){
    if(vowel.includes(i)){
        count++
    }
 }
 return count;
}
console.log(countVowel(vowelStr));


// // // 46  Write a function to count the number of consonants in a string.

let consonantsStr = 'javascript';
let resultCount = 0;

function countConsonant(){
    let vowel = ['a','e','i','o','u']
    for(let i of consonantsStr){
        if(!vowel.includes(i)){
            resultCount++
        }  
    } 
    return resultCount
}
console.log(countConsonant())


// 47  Write a function to find the length of the longest consecutive sequence in an array of numbers.
// 48  Write a function to find the length of the longest increasing subarray in an array of numbers.
// 49  Write a function to find the length of the longest decreasing subarray in an array of numbers.
// 50  Write a function to find the number of occurrences of a given element in an array.

// Looping is a crucial concept in JavaScript, and here are some common problems that can be solved using loops:
// 01  Write a program to print the numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.table(i)
}


// 02 Write a program to print the even numbers between 1 and 20 using a for loop.

for (let i = 1; i <= 20; i++) {
    if(i %2 === 0){
        console.log(i)
    }
}


// 03 Write a program to print the odd numbers between 1 and 20 using a for loop.

for (let i = 1; i <= 20; i++) {
    if(i %2 !== 0){
        console.log(i)
    }
}


// 04 Write a program to print the sum of numbers from 1 to 10 using a for loop.

let summ = 0;
for (let i = 0; i <= 10; i++) {
    summ += i;

} console.log(summ)


// 05 Write a program to print the product of numbers from 1 to 10 using a for loop.

let productOfNum = 1;
for (let i = 1; i <= 10; i++) {
    productOfNum *= i;

} console.log(productOfNum)


// 06 Write a program to find the factorial of a given number using a for loop.
let givenNum = 5;
factorial = 1;

for (let i = 1; i <= givenNum; i++) {
    factorial *= i

} console.log(factorial)



// // //  07  Write a program to print the Fibonacci series up to a given number using a for loop.
// Fibonacci series 0,1,1,2,3,5,8,13,21,34,55.....
 let fibNum = 14;
let n1 = 0;
let n2 =1;
let nextTerm ;
 for(let i =1; i<= fibNum;i++){
     console.log(n1)
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}



//  08  Write a program to check if a given number is a prime number using a for loop.

let primeNum = 23;
let resultPrime = true;

if (primeNum === 1) {
    console.log(` 1 is neither prime  nor composite number! `)
} if (primeNum < 1) {
    console.log(`${primeNum} is not a prime number`)
} else if (primeNum > 1) {
    for (let i = 2; i < primeNum; i++) {
        if (primeNum % i === 0) {
            resultPrime = false;
        }
    }
    if (resultPrime) {
        console.log(`${primeNum} is a prime number`)
    } else {
        console.log(`${primeNum} is not a prime number`)
    }
}

//  09  Write a program to check if a given number is a perfect number using a for loop.
// perfect Numbers => 6,28,496,8128....
let perfectNum = 28;
let totalOf = 0
for(let i = 1; i <perfectNum; i++){
    if(perfectNum % i ===0){
        totalOf += i
    }
} if(totalOf ===perfectNum){
    console.log(`${perfectNum} is a perfect number`)
}else{
    console.log(`${perfectNum} is not a perfect number`)
}

//  10  Write a program to find the sum of digits of a given number using a while loop.

//  11  Write a program to reverse a given number using a while loop.

let givenNumerr = 341;
let revNum ;

let i = 0;
while(i < givenNumerr){
    let aRiv = givenNumerr.toString().split('').reverse().join('');
   revNum= +aRiv
    i++
}
console.log(revNum);



//  12  Write a program to check if a given number is a palindrome using a while loop.
// let pNum = 131;
// let palindromeNum;
// i = 0;
// while(i < pNum){
//   let reNum = pNum.toString().split('').reverse().join('');
//   console.log(reNum)
//   i++
// }



//  13  Write a program to find the GCD of two numbers using a while loop.
//  14  Write a program to find the LCM of two numbers using a while loop.
//  15  Write a program to print the multiplication table of a given number using a nested for loop.
//  16  Write a program to print a pattern of stars using a nested for loop.
//  17  Write a program to print the Pascal's triangle using a nested for loop.

// // // Write a program to find the sum of two matrices.
// // // Write a program to multiply two matrices.
// // // Write a program to check if a given array is sorted in ascending order or not.
// // // Write a program to check if a given array is sorted in descending order or not.
// // // Write a program to find the intersection of two arrays.
// // // Write a program to find the union of two arrays.
// // // Write a program to find the difference of two arrays.
// // // Write a program to find the common elements between two arrays.
// // // Write a program to find the frequency of each element in an array.
// // // Write a program to find the maximum sum subarray in an array.
// // // Write a program to rotate an array by a given number of positions.
// // // Write a program to split an array into two parts from a specific index.
// // // Write a program to find the kth smallest element in an array.
// // // Write a program to find the kth largest element in an array.
// // // Write a program to shuffle the elements of an array.
// // // Write a program to find the first non-repeating element in an array.
// // // Write a program to find the subarray with the largest sum in an array.
// // // Write a program to find the subarray with the smallest sum in an array.



// // // Here are some common object-related problem-solving questions in JavaScript:
// // // Write a program to check if an object is empty.
// // // Write a program to count the number of properties in an object.
// // // Write a program to check if an object contains a specific property.
// // // Write a program to get the values of all properties in an object as an array.
// // // Write a program to merge two objects.
// // // Write a program to clone an object.
// // // Write a program to get the keys of an object as an array.
// // // Write a program to create an object from two arrays.
// // // Write a program to convert an object to an array of key-value pairs.
// // // Write a program to sort an array of objects by a specific property.
// // // Write a program to filter an array of objects based on a specific property value.
// // // Write a program to group an array of objects by a specific property value.
// // // Write a program to check if two objects are equal or not.
// // // Write a program to get the maximum value in an object.
// // // Write a program to get the minimum value in an object.
// // // Write a program to get the sum of all values in an object.
// // // Write a program to find the average value of all properties in an object.
// // // Write a program to find the median value of all properties in an object.
// // // Write a program to find the mode value of all properties in an object.
// // // Write a program to calculate the standard deviation of all properties in an object.


// // // Here are some common promises-related problem-solving questions in JavaScript:
// // // 01  Write a program to create a promise that resolves after a given amount of time.
// // // 02  Write a program to chain promises.
// // // 03  Write a program to handle errors in a promise chain.
// // // 04  Write a program to use Promise.all to execute multiple promises concurrently.
// // // 05  Write a program to use Promise.race to execute multiple promises concurrently and return the result of the first one that resolves.
// // // 06  Write a program to use async/await to handle promises in a synchronous-looking way.
// // // 07  Write a program to use Promise.resolve and Promise.reject to create resolved and rejected promises, respectively.
// // // 08  Write a program to use the finally method to execute code after a promise resolves or rejects.
// // // 09  Write a program to use Promise.any to execute multiple promises concurrently and return the result of the first one that resolves, ignoring any rejections.
// // // 10  Write a program to use Promise.allSettled to execute multiple promises concurrently and return an array of their results, whether they resolved or rejected.


