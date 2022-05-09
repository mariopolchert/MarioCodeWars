// const list = document.querySelector("ul");
// const inputNumber = document.querySelector("#inputNumber");
// const submitBtn = document.querySelector(".submit");

// const listNumbers = (number) => {
//     // location.reload();
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             writeNumbers("fizzbuzz");
//         } else if (i % 3 === 0) {
//             writeNumbers("fizz");
//         } else if (i % 5 === 0) {
//             writeNumbers("buzz");
//         } else writeNumbers(i);
//     }
// };

// const writeNumbers = (element) => {
//     let listItem = document.createElement("li");
//     listItem.innerText = element;
//     list.appendChild(listItem);
// };

// submitBtn.addEventListener("click", () => listNumbers(inputNumber.value));

// //listNumbers(inputNumber.value);
// //--------------------------------------------------------------------
// const movies = ["Star Wars", "Inception", "Batman", "Superman"];

// movies.forEach((elem) => {
//     let movie = document.createElement("h2");
//     movie.innerText = elem;
//     document.body.appendChild(movie);
// });

//---------------------------------------------------------------------
//const findMultiples = (int, lim) => (int + int < lim ? int + int : lim);
// function findMultiples(integer, limit) {
//     let result = [];
//     let element = integer;
//     while (element <= limit) {
//         result.push(element);
//         element += integer;
//     }
//     return result;
// }

// (5, 25), [5, 10, 15, 20, 25])

// const findMultiples = (int, lim) => (lim > int ? int : (int += int));
// const findMultiples = (int, lim) => {
//     do {
//         int += int;
//         return int;
//     } while (lim > int);
// };
//  const findMultiples = (n, l) =>
//      Array.from({ length: ~~(l / n) }, (a, i) => i * n + n);
// const findMultiples = (n, l) => [...Array(~~(l / n))].map((_, i) => i * n + n);

// console.log(findMultiples(3, 25));
// -------------------------------------------------------------------

// function sameCase(a, b) {
//     if (!(/[A-Za-z]/.test(a) && /[A-Za-z]/.test(b))) {
//         return -1;
//     } else if (
//         (/[a-z]/.test(a) && /[a-z]/.test(b)) ||
//         (/[A-Z]/.test(a) && /[A-Z]/.test(b))
//     ) {
//         return 1;
//     }
//     return 0;
// }

// console.log(sameCase("a", 5));
// console.log(sameCase("a", "b"));
// console.log(sameCase("a", "B"));
// console.log(sameCase("	", "Z"));
// console.log(sameCase("H", ":"));

// // If either of the characters is not a letter, return -1
// // If both characters are the same case, return 1
// // If both characters are letters, but not the same case, return 0

// // let a = "k";
// // console.log(/a/g.test("a"));
// // console.log(/a-z/g.test("a"));
// // console.log(/[a-z]/g.test("a"));
// // console.log(/w/g.test("a"));
// // console.log(/W/g.test("a"));
//---------------------------------------------------------------
// const betterThanAverage = (c, y) => c.reduce((a, c) => a + c, 0) / c.length < y;

// // ("betterThanAverage([2, 3], 5) should return True");
// console.log(betterThanAverage([2, 3, 5], 5));
// ----------------------------------------------------------------------------
// function solve(s) {
//     let result = [0, 0, 0, 0];
//     [...s].forEach((l) => {
//         if (/[A-Z]/.test(l)) result[0]++;
//         else if (/[a-z]/.test(l)) result[1]++;
//         else if (/[0-9]/.test(l)) result[2]++;
//         else result[3]++;
//     });
//     return result;
// }

// const solve = (str) =>
//     [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map((rgx) => str.split(rgx).length - 1);

// console.log(solve("*'&ABCDabcde12345"));

// console.log("*'&ABCDabcde12345".split(/[A-Z]/));
// console.log("*'&ABCDabcde12345".split(/[A-Z]/).length);

//    Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

// Test.assertDeepEquals(solve("Codewars@codewars123.com"),[1,18,3,2]);
// Test.assertDeepEquals(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
// Test.assertDeepEquals(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
// Test.assertDeepEquals(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
// Test.assertDeepEquals(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
// Test.assertDeepEquals(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
// -------------------------------------------------------------------------------------

// const zeroAndOne = (s) =>
//     s
//         .split("01")
//         .filter((x) => x)
//         .join();

// function zeroAndOne(s) {
//     return s.split(/01|10/).join("").length;
// }

// const zeroAndOne = s => s.replace(/(10|01)/g, '').length

// // doTest("01", 0);
// // doTest("10", 0);
// // doTest("110110", 2);
// // doTest("110100", 2);
// console.log(zeroAndOne("01"));
// console.log(zeroAndOne("10"));
// console.log(zeroAndOne("110110"));
// console.log(zeroAndOne("110100"));
// console.log(zeroAndOne("110100"));
// console.log(zeroAndOne("11101111"));

// expected 2 to equal 6"));

// Choose any two adjacent positions in the string
// If one of them is 0, and the other one is 1,
// remove these two digits from the string.
// -------------------------------------------------------------------------------

// function capitalizeWord(word) {
//     word = word[0].toUpperCase() + word.slice(1);
//     return word;
// }

// console.log(capitalizeWord("glasswear"));
// // Test.assertSimilar(capitalizeWord('word'), 'Word');
// // Test.assertSimilar(capitalizeWord('i'), 'I');
// // Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
// ------------------------------------------------------------------------------

// solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
//     return ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
//             (temp + 273.15) *
//             0.082) /
//         volume;

// };

// console.log(solution(44, 30, 3, 2, 5, 50)); //  0.7146511212121212
// console.log(solution(60, 20, 10, 30, 10, 100)); // 5.099716666666667

// Ptotal​=V(M1​m1​​+M2​m2​​)RT​
// Input

// Six values :

//     M1M_1M1​, M2M_2M2​: molar masses of both gases, in grams (ggg)
//     m1m_1m1​ and m2m_2m2​: present mass of both gases, in  g⋅mol−1\ g \cdot mol^{-1} g⋅mol−1
//     VVV: volume of the vessel, in  dm3\ dm^3 dm3
//     TTT: temperature, in  °C\ \degree C °C
// ---------------------------------------------------------------------------------
// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

// function changeMe(moneyIn) {
//     let accepted = ["£5", "£2", "£1", "50p", "20p"];
//     if (!accepted.includes(moneyIn)) return moneyIn;
//     switch (moneyIn) {
//         case "£5":
//             return "20p ".repeat(24) + "20p";
//             break;
//         case "£2":
//             return "20p ".repeat(9) + "20p";
//             break;
//         case "£1":
//             return "20p ".repeat(4) + "20p";
//             break;
//         case "50p":
//             return "20p ".repeat(2) + "10p";
//             break;
//         case "20p":
//             return "10p 10p";
//             break;
//     }
// }

// console.log(changeMe("£1")); //  "20p 20p 20p 20p 20p"
// console.log(changeMe("50p")); //  "20p 20p 10p"
// console.log(changeMe("20p")); //  "10p 10p"
// console.log(changeMe("Money")); // "Money"

// Expected: '10p 10p', instead got: 20
// Expected: 'Not a specified coin or note', instead got: NaN
//---------------------------------------------------------------------------

// const flip = (d, a) =>
//     d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

// // const flip = (d, a) => JSON.parse(JSON.stringify(a.sort((a, b) => a - b)));
// console.log(flip("R", [3, 2, 1, 2])); // [1, 2, 2, 3]);
// console.log(flip("L", [1, 4, 5, 3, 5])); // [5, 5, 4, 3, 1]);
// console.log(flip("L", [1, 3, 4, 5, 5])); // [5, 5, 4, 3, 1]);
// //expected [ 1, 3, 4, 5, 5 ] to deeply equal [ 5, 5, 4, 3, 1 ]
//----------------------------------------------------------------------------
//
// const quadratic = (x1, x2) => [1, -(x1 + x2), x1 * x2];

// // quadratic(1,2) = (1, -3, 2)
// // This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0
// // quadratic(0,1) = (1, -1, 0)
// // This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0
// console.log(quadratic(0, 1)); //[1, -1, 0]);
// console.log(quadratic(1, 1)); //[1, -2, 1]);
// console.log(quadratic(-4, -9)); //[1, 13, 36]);
// console.log(quadratic(-5, -4)); //[1, 9, 20]);
// console.log(quadratic(4, -9)); //[1, 5, -36]);
// console.log(quadratic(5, -4)); //[1, -1, -20]);
//-----------------------------------------------------------------------------

// function amountOfPages(summary) {
//     let result = "";
//     let count = 1;
//     while (result.length < summary) {
//         result += count;
//         count++;
//     }

//     //console.log("result: ", result);
//     console.log("result.length / summary: ", result.length);
//     console.log("count: ", count);
//     console.log(
//         "result.slice:================== ",
//         result.slice(-count.toString().length)
//     );
//     console.log("count number of digits: ", count.toString().length);
//     // console.log("result.slice: ", result.slice(count.toString().length - 1));
//     console.log();
//     // return result.length;
//     return result.length;
// }

// console.log(amountOfPages(8999)); // expected 8999 to equal 999
// //console.log(amountOfPages(8999)); // expected 8999 to equal 999
// console.log(amountOfPages(5)); // 5
// console.log(amountOfPages(25)); // 17
// console.log(amountOfPages(1095)); // 401
// console.log(amountOfPages(185)); // 97
// console.log(amountOfPages(660)); // 256

// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total:

// ----------------------------------------------------------------------------------

// function solve(arr) {
//     let alphabet = [
//         "A",
//         "B",
//         "C",
//         "D",
//         "E",
//         "F",
//         "G",
//         "H",
//         "I",
//         "J",
//         "K",
//         "L",
//         "M",
//         "N",
//         "O",
//         "P",
//         "Q",
//         "R",
//         "S",
//         "T",
//         "U",
//         "V",
//         "W",
//         "X",
//         "Y",
//         "Z",
//     ];
//     let result = [];
//     arr.forEach((word) => {
//         word = word.toUpperCase();
//         let sum = 0;
//         for (let index in word) {
//             if (word[index] === alphabet[index]) sum += 1;
//         }
//         result.push(sum);
//         sum = 0;
//     });
//     return result;
// }

// console.log(solve(["abode", "ABc", "xyzD"])); //  [4, 3, 1]
// console.log(solve(["abide", "ABc", "xyz"])); // [4, 3, 0]
// console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); //    [6, 5, 7]
// console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]
//-------------------------------------
// function disemvowel(str) {
//     vowels = ["a", "e", "i", "o", "u"];
//     for (let letter of str) {
//         if (letter === String.fromCharCode(92)) {
//             str = str.replace(letter, `${"\nn"}`);
//         } else if (vowels.includes(letter)) {
//             str = str.replace(letter, "");
//         }
//     }
//     return str;
//}

// function disemvowel(str) {
//     vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     str = str.replace("\n", "\\\\n");
//     str = str.replace("'v", " \\'v");

//     for (let l of str) {
//         if (vowels.includes(l)) {
//             str = str.replace(l, "");
//         }
//     }
//     return str;
// }
// disemvowel = (str) => str.replace(/[aeiou]/gi, "");

// console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
// console.log(
//     disemvowel(
//         "No offense but,\nYour writing is among the worst I've ever read"
//     )
// ); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"

// // expected 'N ffns bt,\\nYr wrtng s mng th wrst \'v vr rd' to equal 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd'

// // String.fromCharCode(65, 66, 67); // returns 'ABC'
// // console.log(String.fromCharCode(92));
// // const word = "No offense but,\nYour writing is among the worst I've ever read";
// // let l = "\n";
// // console.log(word.replace(l, "\\n"));
//------------------------------------------------------------------------------------------

// function slicesToName(n) {
//     if (typeof n === "number" && n >= 2) {
//         if (n === 2) return "sandwich";
//         else if (n % 2 === 0) return "sandwich ".repeat(n / 2 - 1) + "sandwich";
//         else if (n % 2 !== 0 && n === 3) {
//             return "bread sandwich";
//         } else {
//             n -= 3;
//             return (
//                 "bread sandwich " + "sandwich ".repeat(n / 2 - 1) + "sandwich"
//             );
//         }
//     }
//     return null;
// }

// function nameToSlices(name) {
//     if (typeof name === "string" && name !== "") {
//         const arr = name.split(" ");
//         let sum = 0;
//         if (arr.length <= 1 && arr[0] === "bread") return null;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === "bread" && i !== 0) {
//                 return null;
//             }
//         }
//         for (let word of arr) {
//             if (word === "bread") {
//                 sum += 1;
//             } else if (word === "sandwich") {
//                 sum += 2;
//             } else return null;
//         }
//         return sum;
//     }
//     return null;
// }

// counts[num] = counts[num] ? counts[num] + 1 : 1;

// have fun!

// const slices = {};
// for (let n = 2; n < 101; n++)
//     slices[n] =
//         (n % 2 ? `bread ` : ``) + Array(~~(n / 2)).fill(`sandwich`).join` `;
// const names = {};
// for (let n in slices) names[slices[n]] = n;

// function slicesToName(n) {
//     return n in slices ? slices[n] : null;
// }

// function nameToSlices(name) {
//     return name in names ? names[name] : null;
// }

// console.log(slicesToName(false)); //  null
// console.log(slicesToName(1)); //  null
// console.log(slicesToName(-2)); //  null
// console.log(slicesToName("bread")); //  null
// console.log(slicesToName(2)); //  'sandwich'
// console.log(slicesToName(3)); //  'bread sandwich'
// console.log(slicesToName(11)); // 'bread sandwich sandwich sandwich sandwich sandwich'
// console.log(slicesToName(8)); //  'sandwich sandwich sandwich sandwich'
// console.log(nameToSlices(12)); // null
// console.log(nameToSlices("")); // null
// console.log(nameToSlices("sandwich sandwich bread sandwich")); // null
// console.log(nameToSlices("sand wich")); // null
// console.log(nameToSlices("bread sandwich")); // 3
// console.log(nameToSlices("sandwich sandwich sandwich sandwich")); // 8
// console.log(nameToSlices("bread")); // null
// console.log(nameToSlices("bread sandwich sandwich sandwich")); // 7
// console.log(nameToSlices("bread sandwich bread sandwich")); // null
//************************************************************************************ */

// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//     console.log("condition:", (counts[num] = counts[num]));
//     console.log("counts[num], before:", counts[num]);
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
//     console.log("counts[num], after:", counts[num]);
// }

// console.log(counts[5], counts[2], counts[9], counts[4]);
// console.log(counts);
//**************************************************************************************** */

// function Mouse(name, size, color, legs, eyes) {
//     this.name = name;
//     this.size = size;
//     this.color = color;
//     this.legs = legs;
//     this.eyes = eyes;
//     this.makeSound = function () {
//         console.log("meek");
//     };
//     this.run = function () {
//         console.log(`${this.name} is running`);
//     };
//     this.jump = function () {
//         console.log("mouse is jumping");
//     };

//     return this;
// }

// const tiny = new Mouse("tiny", "big", "grey", 4, 3);
// const mighty = new Mouse("mighty", "small", "green", 2, 4);
// const blablalba = new Mouse();
// console.log(blablalba);
// console.log(mighty.size);
// console.log(tiny.makeSound());
// console.log(mighty.run());
//***************************************************************************************************** */
// function chmodCalculator(perm) {
//     const codes = {
//         rwx: "7",
//         "rw-": "6",
//         "r-x": "5",
//         "r--": "4",
//         "-wx": "3",
//         "-w-": "2",
//         "--x": "1",
//         "---": "0",
//     };
//     let result = "";
//     const values = ["user", "group", "other"];
//     for (let i = 0; i < 3; i++) {
//         if (codes.hasOwnProperty(perm[values[i]])) {
//             result += codes[perm[values[i]]];
//         } else result += "0";
//     }
//     return result;
// }

// function chmodCalculator(perm) {
//     let octal = (p) =>
//         !p
//             ? 0
//             : 4 * +(p[0] === "r") + 2 * +(p[1] === "w") + 1 * +(p[2] === "x");

//     return "" + octal(perm.user) + octal(perm.group) + octal(perm.other);
// }

// console.log(chmodCalculator({ user: "rwx", group: "r-x", other: "r-x" })); //     "755"
// console.log(chmodCalculator({ user: "rwx", group: "r--", other: "r--" })); //     "744"
// console.log(chmodCalculator({ user: "r-x", group: "r-x", other: "r-x" })); //     "555"
// console.log(chmodCalculator({ group: "rwx" })); //      "070"
//---------------------------------------------------------------------------------------------

// const NATO = {
//     a: "Alfa",
//     n: "November",
//     b: "Bravo",
//     o: "Oscar",
//     c: "Charlie",
//     p: "Papa",
//     d: "Delta",
//     q: "Quebec",
//     e: "Echo",
//     r: "Romeo",
//     f: "Foxtrot",
//     s: "Sierra",
//     g: "Golf",
//     t: "Tango",
//     h: "Hotel",
//     u: "Uniform",
//     i: "India",
//     v: "Victor",
//     j: "Juliett",
//     w: "Whiskey",
//     k: "Kilo",
//     x: "Xray",
//     l: "Lima",
//     y: "Yankee",
//     m: "Mike",
//     z: "Zulu",
// };

// function to_nato(words) {
//     const i = [",", ".", "!", "?"];
//     // words = words.toLowerCase().replaceAll(" ", "").split("");
//     words = words.toLowerCase().trim().split("");
//     let result = [];
//     words.forEach((item) => {
//         if (NATO.hasOwnProperty(item)) result.push(NATO[item]);
//         else if (i.includes(item)) result.push(item);
//     });
//     result = result.join(" ");
//     return result;
// }

// function to_nato(words) {
//     return words
//         .toLowerCase()
//         .split("")
//         .map((char) => NATO[char])
//         .join("")
//         .trim();
// }

// function to_nato(words) {
//     return words
//         .replace(/\s/g, "")
//         .toLowerCase()
//         .split("")
//         .map((e) => (NATO[e] ? NATO[e] : e))
//         .join(" ");
// }

// console.log(to_nato("If you can read")); // "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo A
// console.log(to_nato("Did not see that coming")); // "Delta India Delta November Oscar Tango Sierra Echo Echo Tango otel Alfa Tango Charlie Oscar Mike India November Golf"
// console.log(to_nato("go for it!")); //"Golf Oscar Foxtrot Oscar Romeo India Tango !"

//------------------------------------------------------------------------------------
// function nthFibo(n) {
//     let numbers = [0, 1];
//     let result;
//     for (let i = 1; i < n; i++) {
//         numbers.push(numbers[i] + numbers[i - 1]);
//     }
//     result = numbers[n - 1];
//     numbers = [0, 1];
//     return result;
// }

// function nthFibo(n) {
//     return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
// }

// function nthFibo(n) {
//     let [prev, curr] = [0, 1];
//     for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//     return prev;
// }

// //console.log(nthFibo(15));

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// console.log(nthFibo(1)); //   0,"1-st Fibo"
// console.log(nthFibo(2)); //   1,"2-nd Fibo"
// console.log(nthFibo(3)); //   1,"3-rd Fibo"
// console.log(nthFibo(4)); //   2,"4-th Fibo"
// console.log(nthFibo(5)); //   2,"4-th Fibo"
// console.log(nthFibo(6)); //   2,"4-th Fibo"
// console.log(nthFibo(7)); //   2,"4-th Fibo"
// console.log(nthFibo(8)); //   2,"4-th Fibo"
//console.log(nthFibo(9)); //   2,"4-th Fibo"

//-----------------------------------------------------------------------------------

// const getKey = (key, i) => {
//     if (key + i > 25) {
//         return key + i - 26;
//     } else if (key + i < 0) {
//         return key + i + 26;
//     }
//     return key + i;
// };

// function encryptor(key, message) {
//     const alphabet = [
//         "Aa",
//         "Bb",
//         "Cc",
//         "Dd",
//         "Ee",
//         "Ff",
//         "Gg",
//         "Hh",
//         "Ii",
//         "Jj",
//         "Kk",
//         "Ll",
//         "Mm",
//         "Nn",
//         "Oo",
//         "Pp",
//         "Qq",
//         "Rr",
//         "Ss",
//         "Tt",
//         "Uu",
//         "Vv",
//         "Ww",
//         "Xx",
//         "Yy",
//         "Zz",
//     ];
//     let result = "";
//     if (key === 0) return message;
//     if (!message || message === "") return "";
//     message = message.split("");
//     for (let letter of message) {
//         if (/[A-Za-z]/.test(letter)) {
//             alphabet.forEach((pair, i, a) => {
//                 if (pair.includes(letter)) {
//                     if (/[A-Z]/.test(letter)) {
//                         result += alphabet[getKey(key, i)][0];
//                     } else result += alphabet[getKey(key, i)][1];
//                 }
//             });
//         } else result += letter;
//     }
//     return result;
// }

// function encryptor(key, message) {
//     key = ((key % 26) + 26) % 26;
//     return message.replace(/[a-z]/gi, (x) =>
//         String.fromCharCode(
//             ((x.charCodeAt() - (/[A-Z]/.test(x) ? 65 : 97) + key) % 26) +
//                 (/[A-Z]/.test(x) ? 65 : 97)
//         )
//     );
// }

// function encryptor(key, message) {
//     key = ((key % 26) + 26) % 26;
//     console.log(key);
//     return message.replace(/[a-z]/gi, (letter) => {
//         const shift = letter >= "a" ? 97 : 65;
//         return String.fromCharCode(
//             ((letter.charCodeAt() - shift + key) % 26) + shift
//         );
//     });
// }

// console.log(encryptor(13, ""), ""); // ''
// console.log(encryptor(0, "no cypher"), "no cypher"); // 'no cypher'
// console.log(encryptor(13, "Caesar Cipher"), "===Pnrfne Pvcure - Caesar Cipher"); // 'Pnrfne Pvcure'
// console.log(encryptor(-5, "Hello World!"), "Czggj Rjmgy!"); // 'Czggj Rjmgy!'
// console.log(encryptor(27, "Whoopi Goldberg"), "Xippqj Hpmecfsh"); //'Xippqj Hpmecfsh'

// function myfunction(key) {
//     let result = ((key % 26) + 26) % 26;
//     console.log("key % 26", key % 26);
//     console.log("(key % 26) + 26", (key % 26) + 26);

//     return result;
// }

// console.log("result: ", myfunction(-51));

// console.log("modulo: ", 55 % 26);

//-----------------------------------------------------------------------------------------------
// "  *\n ***\n*****\n ***\n  *\n"
// function diamond(n) {
//     if (n % 2 === 0 || n <= 0) return null;
//     let counter = 0;
//     let diam = [];
//     let result = "";
//     for (let i = 1; i <= 2 * n - 1; i += 2) {
//         if (i <= n) {
//             diam.push(i);
//         } else {
//             counter = n;
//             counter -= i - n;
//             diam.push(counter);
//         }
//     }
//     diam.forEach((item) => {
//         result += " ".repeat((n - item) / 2) + "*".repeat(item) + "\n";
//     });
//     return result;
// }

// console.log(diamond(1)); // "*\n"
// console.log(diamond(3)); // " *\n***\n *\n"
// console.log(diamond(5)); // "  *\n ***\n*****\n ***\n  *\n"
// console.log(diamond(2)); // null
// console.log(diamond(-3)); //  null
// console.log(diamond(0)); // null
// console.log(diamond(13)); // null
// -------------------------------------------------------------------------------------------------

// const arr2bin = (arr) =>
//     arr
//         .filter((i) => typeof i === "number")
//         .reduce((a, c) => a + c, 0)
//         .toString(2);

// console.log(arr2bin([1, 2])); // "11"
// console.log(arr2bin([1, 2, 3, 4, 5])); // "1111"
// console.log(arr2bin([1, 10, 100, 1000])); // "10001010111"
// console.log(arr2bin([null])); //  "0"
// console.log(arr2bin([true, true, false, 15])); // "1111"

//   Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

// This is a modification on the Kata: Array2Binary addition hope you like it
//--------------------------------------------------------------------------------------------------

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// function solution(n) {
//     if (n < 0) return 0;
//     let sum = 0;
//     for (let i = 3; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) sum += i;
//     }
//     return sum;
// }

// const solution = (n) =>
//     n <= 0
//         ? 0
//         : Array.from({ length: n }, (_, i) =>
//               i % 3 == 0 || i % 5 == 0 ? i : 0
//           ).reduce((x, y) => x + y);

// function solution(number) {
//     var n3 = Math.floor(--number / 3),
//         n5 = Math.floor(number / 5),
//         n15 = Math.floor(number / 15);
//     return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
// }

// console.log(solution(10));
//--------------------------------------------------------------------------------------------------

// const areaOfPolygonInsideCircle = (r, n) =>
//     (n * r ** 2 * Math.sin((Math.PI * 2) / n)) / 2;

// // area = n * (r)² * sin(2π/n) / 2,
// // having rc - circumcircle radius

// console.log(areaOfPolygonInsideCircle(3, 3)); // returns 11.691
// //console.log(areaOfPolygonInsideCircle(3, 3)); // returns 11.691
// console.log(areaOfPolygonInsideCircle(5.8, 7)); // returns 92.053
// console.log(areaOfPolygonInsideCircle(4, 5)); // returns 38.042
// ------------------------------------------------------------------------------------------------

/**
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.


// function whiteBlackAreas(cols, rows) {
//     const all = [...cols, ...rows];
//     let w = [];
//     let b = [];
//     cols.map((c, i) => {
//         while()
//     })
//     w = w.reduce((a, c) => a + c);
//     b = b.reduce((a, c) => a + c);
//     return [w, b];
// }

//console.log(rowsGenerator.next());

// const arr = Array.from({ length: 5 }, (v, i) => i);
// // [0, 1, 2, 3, 4]
// console.log(arr);

// assert(Array.isArray(whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2])), 'Returned solution should be an array')
// console.log(whiteBlackAreas([3, 1, 2, 7, 1], [1, 8, 4, 5, 2])); // [146,134], 'Returned solution should give total white area = 146, total black area = 134, returned as a 2-element array')
//console.log(whiteBlackAreas([1, 1, 1, 1], [0, 0, 0])); // [146,134], 'Returned solution should give total white area = 146, total black area = 134, returned as a 2-element array')
//console.log(whiteBlackAreas([0, 0, 0, 0], [1, 1, 1])); // [146,134], 'Returned solution should give total white area = 146, total black area = 134, returned as a 2-element array')
// console.log(
//     whiteBlackAreas(
//         [3, 1, 2, 7, 1, 11, 12, 3, 8, 1],
//         [1, 8, 4, 5, 2, 21, 5, 2, 2, 17]
//     )
// ); // [1583,1700], 'Returned solution should give total white area = 1583, total black area = 1700, returned as a 2-element array')
//console.log(whiteBlackAreas([3], [2])); //    [6, 0],    "Returned solution should give total black area = 0 when there is only one row and one column in the board, since the only cell is colored WHITE"

// function whiteBlackAreas(cols, rows) {
//     if (cols.length % 2 === 0) {
//         cols.push(0);
//         rows.push(0);
//     }
//     let products = [];
//     for (let c of cols) {
//         rows.forEach((r) => products.push(c * r));
//     }
//     let whiteArea = 0;
//     let blackArea = 0;
//     products.forEach((item, index) =>
//         index % 2 === 0 ? (whiteArea += item) : (blackArea += item)
//     );
//     return [whiteArea, blackArea];
// }

// function whiteBlackAreas(cols, rows) {
//     let w = [];
//     let b = [];
//     cols.forEach((c, i) => {
//         let r = 0;
//         while (r < rows.length) {
//             if (i % 2 === 0) {
//                 if (r % 2 === 0) w.push(c * rows[r]);
//                 else b.push(c * rows[r]);
//             } else {
//                 if (r % 2 !== 0) w.push(c * rows[r]);
//                 else b.push(c * rows[r]);
//             }
//             r++;
//         }
//     });
//     let sumw = w.reduce((a, c) => a + c, 0);
//     let sumb = b.reduce((a, c) => a + c, 0);
//     return [sumw, sumb];
// }

// function whiteBlackAreas(cols, rows) {
//     let w = 0;
//     let b = 0;
//     cols.forEach((c, i) => {
//         let r = 0;
//         while (r < rows.length) {
//             if (i % 2 === 0) {
//                 if (r % 2 === 0) w += c * rows[r];
//                 else b += c * rows[r];
//             } else {
//                 if (r % 2 !== 0) w += c * rows[r];
//                 else b += c * rows[r];
//             }
//             r++;
//         }
//     });
//     return [w, b];
// }
*/
//-------------------------------------------------------------------------------------------------------------------------

// const arrayDiff = (a, b) => a.filter((i) => !b.includes(i));
// // function arrayDiff(a, b) {
// //     return a.filter((item) => !b.includes(item));
// // }

// // Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// // It should remove all values from list a, which are present in list b keeping their order.
// // arrayDiff([1,2],[1]) == [2]
// // If a value is present in b, all of its occurrences must be removed from the other:
// // arrayDiff([1,2,2,2,3],[2]) == [1,3]

// console.log(arrayDiff([1, 2], [1])); // [2], "a was [1,2], b was [1]");
// console.log(arrayDiff([1, 2, 2], [1])); // [2, 2], "a was [1,2,2], b was [1]");
// console.log(arrayDiff([1, 2, 2], [2])); // [1], "a was [1,2,2], b was [2]");
// console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2], "a was [1,2,2], b was []");
// console.log(arrayDiff([], [1, 2])); // [], "a was [], b was [1,2]");
// console.log(arrayDiff([1, 2, 3], [1, 2])); // [3], "a was [1,2,3], b was [1,2]");

//----------------------------------------------------------------------------------------------------------------------------
// function solution(roman) {
//     const romans = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };
//     let result = 0;
//     let minus = 0;
//     const romanArr = [...roman];
//     for (let i = 0; i < romanArr.length; i++) {
//         if (romans[romanArr[i]] < romans[romanArr[i + 1]]) {
//             minus = romans[romanArr[i]];
//         } else if (minus !== 0) {
//             result += romans[romanArr[i]] - minus;
//             minus = 0;
//         } else if (romans[romanArr[i]]) result += romans[romanArr[i]];
//     }
//     return result;
// }

// console.log(solution("LXXI", 71));
// console.log(solution("XXI", 21));
// console.log(solution("I", 1));
// console.log(solution("IX", 9));
// console.log(solution("MMVIII", 2008));
// console.log(solution("MDCLXVI", 1666));
// console.log(solution("MCMLXVI", 1966));
// console.log(solution("MMMDCCXXIV ", 3724));
//----------------------------------------------------------------------------------------------------------------

// function inArray(a1, a2) {
//     let result = [];
//     for (let word of a1) {
//         a2.forEach((item) => {
//             if (item.match(word) !== null) {
//                 if (!result.includes(word)) result.push(word);
//             }
//         });
//     }
//     return result.sort();
// }

// a1 = ["arp", "live", "strong"];
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// console.log(inArray(a1, a2)); // ["live", "strong"]);

// function inArray(array1, array2) {
//     return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
// }

//----------------------------------------------------------------------------------------------------------------

// const shark = (pd, sd, ys, ss, d) =>
//     pd / ys > (d ? sd / (ss / 2) : sd / ss) ? "Shark Bait!" : "Alive!";

// console.log(shark(12, 50, 4, 8, true)); // "Alive!"
// console.log(shark(7, 55, 4, 16, true)); // "Alive!"
// console.log(shark(24, 0, 4, 8, true)); // "Shark Bait!"

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
// sharkSpeed = how fast it can move in metres/second.
// pd = how far you need to swim to safety in metres.
// ys = how fast you can swim in metres/second.
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".
//----------------------------------------------------------------------------------

// function duplicateEncode(w) {
//     let result = "";
//     w = w.toLowerCase();
//     for (let i in w) {
//         w.indexOf(w.charAt(i)) !== w.lastIndexOf(w.charAt(i))
//             ? (result += ")")
//             : (result += "(");
//     }
//     return result;
// }

// console.log(duplicateEncode("din")); // "((("
// console.log(duplicateEncode("recede")); // "()()()"
// console.log(duplicateEncode("Success")); // ")())())", "should ignore case"
// console.log(duplicateEncode("(( @")); // "))(("

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
