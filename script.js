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
//--------------------------------------------------------------------------------------

// const quarterOf = (m) => m > 9 ? 4 : m > 6 ? 3 : m > 3 ? 2 : 1;

// console.log(quarterOf(3)); // 1)
// console.log(quarterOf(8)); // 3)
// console.log(quarterOf(11)); // 4)
//-------------------------------------------------------------------------------------

// function warnTheSheep(arr) {
//     let wolfIndex = arr.findIndex((el) => el === "wolf");
//     return wolfIndex === arr.length - 1
//         ? "Pls go away and stop eating my sheep"
//         : `Oi! Sheep number ${
//               arr.length - wolfIndex - 1
//           }! You are about to be eaten by a wolf`;
// }

// const warnTheSheep = (a) =>
//     (a = a.length - a.indexOf("wolf") - 1)
//         ? `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`
//         : "Pls go away and stop eating my sheep";

// const warnTheSheep = (queue) =>
//     ((val) =>
//         val
//             ? `Oi! Sheep number ${val}! You are about to be eaten by a wolf!`
//             : `Pls go away and stop eating my sheep`)(
//         queue.reverse().indexOf("wolf")
//     );

// // Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// // Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// // Input: ["sheep", "sheep", "wolf"]
// // Output: "Pls go away and stop eating my sheep"

// console.log(
//     warnTheSheep([
//         "sheep",
//         "sheep",
//         "sheep",
//         "sheep",
//         "sheep",
//         "wolf",
//         "sheep",
//         "sheep",
//     ])
//); // "Oi! Sheep number 5! You are about to be eaten by a wolf!"
// console.log(
//     warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
// ); // "Oi! Sheep number 6! You are about to be eaten by a wolf!"
// console.log(warnTheSheep(["sheep", "wolf", "sheep"])); // "Oi! Sheep number 1! You are about to be eaten by a wolf
// console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // "Oi! Sheep number 1! You are about to be eaten by a wolf
//-------------------------------------------------------------------------------------------------
// function likes(names) {
//     let s = "";
//     let i = 0;
//     switch (names.length) {
//         case 0:
//             s = `no one likes this`;
//             break;
//         case 1:
//             s = `${names[i]} likes this`;
//             break;
//         case 2:
//             s = `${names[i]} and ${names[i + 1]} like this`;
//             break;
//         case 3:
//             s = `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`;
//             break;
//         default:
//             s = `${names[i]}, ${names[i + 1]} and ${
//                 names.length - 2
//             } others like this`;
//             break;
//     }
//     return s;
// }

// //   []                                -->  "no one likes this"
// // ["Peter"]                         -->  "Peter likes this"
// // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// // Note: For 4 or more names, the number in "and 2 others" simply increases.

// console.log(likes([])); // 'no one likes this');
// console.log(likes(["Peter"])); // 'Peter likes this');
// console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this');
// console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this');
// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this');
// ----------------------------------------------------------------------------------------
// function findOdd(A) {
//     const o = A.reduce(function (a, c) {
//         return a[c] ? ++a[c] : (a[c] = 1), a;
//     }, {});
//     let odd;
//     for (const [k, v] of Object.entries(o)) {
//         if (v % 2 !== 0) odd = k;
//     }
//     return odd;
// }

// // TODO const findOdd = (xs) => xs.reduce((a, b) => a ^ b);      ^ = XOR operation
// // TODO function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }

// //   [7] should return 7, because it occurs 1 time (which is odd).
// //   [0] should return 0, because it occurs 1 time (which is odd).
// //   [1,1,2] should return 2, because it occurs 1 time (which is odd).
// //   [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// //   [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
// console.log(findOdd([10])); // 10
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
//-----------------------------------------------------------------------------------------------

// function recurse(n) {
//     if (n < 10) return n;
//     else return (n % 10) + recurse((n - (n % 10)) / 10);
// }

// function digital_root(n) {
//     let result = recurse(n);
//     while (result > 9) {
//         result = recurse(result);
//     }
//     return result;
// }

// // TODO function digital_root(n) {
// //     return ((n - 1) % 9) + 1;
// // }

// // TODO function digital_root(n) {
// //     if (n < 10) return n;
// //     return digital_root(
// //       n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// //   }

// console.log(digital_root(456));
// console.log(digital_root(132189));
// console.log(digital_root(493193));

//   Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// console.log(digital_root(16)); // 7
// console.log(digital_root(456)); // 6
// -------------------------------------------------------------------------------------------------
// function spinWords(s) {
//     return s
//         .split(" ")
//         .map((c) => {
//             return c.length > 4 ? (c = c.split("").reverse().join("")) : c;
//         })
//         .join(" ");
// }

// // TODO function spinWords(string){
// //     return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// //   }

// // Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// console.log(spinWords("Welcome")); // "emocleW"
// console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
// console.log(spinWords("This is a test")); // "This is a test"
// console.log(spinWords("This is another test")); // "This is rehtona test"
// console.log(spinWords("You are almost to the last test")); // "You are tsomla to the last test"
// console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more"
// console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one"
//---------------------------------------------------------------------------------------------------------
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// const countBits = (n) => {
//     return [...n.toString(2)].filter((n) => n === "1").length;
// };

// // TODO countBits = n => n.toString(2).split('0').join('').length;

// console.log(countBits(0)); // 0
// console.log(countBits(4)); // 1
// console.log(countBits(7)); // 3
// console.log(countBits(9)); // 2
// console.log(countBits(10)); // 2
//-------------------------------------------------------------------------------------------------
// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text) {
//     let obj = {};
//     for (let char of text.toLowerCase()) {
//         !obj[char] ? (obj[char] = 1) : obj[char]++;
//     }
//     let result = 0;
//     for (let value of Object.values(obj)) {
//         if (value > 1) result++;
//     }
//     return result;
// }

// TODO function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// console.log(duplicateCount("")); // 0
// console.log(duplicateCount("abcde")); // 0
// console.log(duplicateCount("aabbcde")); // 2
// console.log(duplicateCount("aabBcde")); // 2,"should ignore case"
// console.log(duplicateCount("Indivisibility")); // 1
// console.log(duplicateCount("Indivisibilities")); // 2, "characters may not be adjacent"
//---------------------------------------------------------------------------------------------------
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers) {

// }

// function findOutlier(a) {
//     let e = 0;
//     for (let i = 0; i < 3; i++) {
//         if (a[i] % 2 === 0) e++;
//     }
//     let ix = a.findIndex((n) => {
//         return e > 1 ? n % 2 !== 0 : n % 2 === 0;
//     });
//     return a[ix];
// }

// console.log(findOutlier([0, 1, 2])); // 1
// console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3
// console.log(findOutlier([1, 1, 0, 1, 1])); // 0
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
// console.log(
//     findOutlier([
//         -31374703, 165540153, 119220727, 120389379, 183215910, -60331925,
//         184643203, -179359363, -133725593, 146621797,
//     ])
// ); // expected -31374703 to equal 183215910
// ----------------------------------------------------------------------------------------------
// Collect|Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// function alphabetPosition(text) {
//     const small = {
//         a: "1",
//         b: "2",
//         c: "3",
//         d: "4",
//         e: "5",
//         f: "6",
//         g: "7",
//         h: "8",
//         i: "9",
//         j: "10",
//         k: "11",
//         l: "12",
//         m: "13",
//         n: "14",
//         o: "15",
//         p: "16",
//         q: "17",
//         r: "18",
//         s: "19",
//         t: "20",
//         u: "21",
//         v: "22",
//         w: "23",
//         x: "24",
//         y: "25",
//         z: "26",
//     };
//     let result = "";
//     for (let letter of text) {
//         if (/[A-Za-z]/.test(letter))
//             result += small[letter.toLowerCase()] + " ";
//     }
//     return result.trimEnd();
// }
// console.log(alphabetPosition("sl8v]wv5"));
// console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// console.log(alphabetPosition("The narwhal bacons at midnight.")); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
// -----------------------------------------------------------------------------------------------
// Collect|

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function recurse(n) {
//     if (n < 10) return n;
//     return (n % 10) * recurse((n - (n % 10)) / 10);
// }

// function persistence(n) {
//     if (n < 10) return 0;
//     let counter = 1;
//     let result = recurse(n);
//     while (result > 9) {
//         result = recurse(result);
//         counter++;
//     }
//     return counter;
// }

// console.log(persistence(39)); //3
// console.log(persistence(4)); //0
// console.log(persistence(25)); //2
// console.log(persistence(999)); //4
// ----------------------------------------------------------------------------------------------------------------------
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str) {
//     let result = "";
//     let temp = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (/[_-]/gi.test(str[i])) {
//             result += "";
//             temp = i;
//         } else if (temp !== 0) {
//             result += str[i].toUpperCase();
//             temp = 0;
//         } else result += str[i];
//     }
//     return result;
// }

// // TODO function toCamelCase(str){
// //   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// // }

// console.log(toCamelCase("")); // '', "An empty string was provided but not returned")
// console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// console.log(toCamelCase("A-B-C")); // "ABC", "toCamelCase('A-B-C') did not return correct value")
// -----------------------------------------------------------------------------------------------------------------------

// Collect|
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(w) {
//     let a = w.split(" ");
//     let o = {};
//     a.forEach((e) => {
//         o[e.match(/[1-9]/g)] = e;
//     });
//     let r = "";
//     for (let v of Object.values(o)) r += `${v} `;
//     return r.trim();
// }

// // TODO function order(words){

// //   return words.split(' ').sort(function(a, b){
// //     return a.match(/\d/) - b.match(/\d/);
// //  }).join(' ');
// // }

// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
// console.log(order("")); // "", "empty input should return empty string"
//-------------------------------------------------------------------------------------------------
// function tribonacci(s, n) {
//     let i = 0;
//     while (s.length < n) {
//         s.push(s[i] + s[i + 1] + s[i + 2]);
//         i++;
//     }
//     return s.slice(0, n);
// }

// // console.log(tribonacci([1, 1, 1], 10)); //[1,1,1,3,5,9,17,31,57,105]
// // console.log(tribonacci([0, 0, 1], 10)); //[0,0,1,1,2,4,7,13,24,44]
// // console.log(tribonacci([0, 1, 1], 10)); //[0,1,1,2,4,7,13,24,44,81]
// // console.log(tribonacci([1, 0, 0], 10)); //[1,0,0,1,1,2,4,7,13,24]
// // console.log(tribonacci([0, 0, 0], 10)); //[0,0,0,0,0,0,0,0,0,0]
// // console.log(tribonacci([1, 2, 3], 10)); //[1,2,3,6,11,20,37,68,125,230]
// // console.log(tribonacci([3, 2, 1], 10)); //[3,2,1,6,9,16,31,56,103,190]
// console.log(tribonacci([1, 1, 1], 1)); //[1]
// console.log(tribonacci([300, 200, 100], 0)); //[]
// console.log(tribonacci([0.5, 0.5, 0.5], 30)); //[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]
//-------------------------------------------------------------------------------------------------
// function Xbonacci(s, n) {
//     let j = 0;
//     let r = 0;
//     while (s.length < n) {
//         for (let i = 0 + j; i < s.length; i++) {
//             r += s[i];
//         }
//         s.push(r);
//         r = 0;
//         j++;
//     }
//     return s.slice(0, n);
// }

// console.log(Xbonacci([0, 1], 10)); //[0,1,1,2,3,5,8,13,21,34]
// console.log(Xbonacci([1, 1], 10)); //[1,1,2,3,5,8,13,21,34,55]
// console.log(Xbonacci([0, 0, 0, 0, 1], 10)); //[0,0,0,0,1,1,2,4,8,16]
// console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10)); //[1,0,0,0,0,0,1,2,3,6]
// console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20)); //[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence
//--------------------------------------------------------------------------------------------------
// function isPangram(s) {
//     const alphabet = [
//         "a",
//         "b",
//         "c",
//         "d",
//         "e",
//         "f",
//         "g",
//         "h",
//         "i",
//         "j",
//         "k",
//         "l",
//         "m",
//         "n",
//         "o",
//         "p",
//         "q",
//         "r",
//         "s",
//         "t",
//         "u",
//         "v",
//         "w",
//         "x",
//         "y",
//         "z",
//     ];
//     return alphabet.every((i) => s.toLowerCase().includes(i));
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("This is not a pangram."));
// // "The quick brown fox jumps over the lazy dog." true
// // "This is not a pangram." false
//------------------------------------------------------------------------------------------
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str) {
//     let r = "";
//     str = str.split(" ").forEach((i) => {
//         r += /\w/.test(i) ? i.slice(1) + i[0] + "ay " : i;
//     });
//     return r.trim();
// }

// TODO function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }

// // function pigIt(str) {
// //     str = str.split(" ");
// //     let result = "";
// //     str.forEach((item) => {
// //         result += /\w/.test(item) ? item.slice(1) + item[0] + "ay " : item;
// //     });
// //     return result.trim();
// //}

// console.log(pigIt("Pig latin is cool")); // "igPay atinlay siay oolcay"
// console.log(pigIt("This is my string")); // "hisTay siay ymay tringsay"
// console.log(pigIt("Hello world !")); // "hisTay siay ymay tringsay"
//------------------------------------------------------------------------------------------------------

// function isPrime(num) {
//     let div = [13, 11, 7, 5, 3, 2];
//     if (div.includes(num)) return true;
//     else if (num === 1 || num < 1) return false;
//     else if (div.some((item) => num % item === 0)) return false;
//     for (let i = 3, r = Math.sqrt(num); i <= r; i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
//------------------------------------------------------------------------------------------------------
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder = function (iterable) {
//     let result = [];
//     for (let i in iterable) {
//         if (iterable[i] === result[result.length - 1]) result.push();
//         else result.push(iterable[i]);
//     }
//     return result;
// };

// // TODO var uniqueInOrder=function(iterable){
// //     return [...iterable].filter((a, i) => a !== iterable[i-1])
// // }

// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A','B','C','D','A','B'])
// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
//--------------------------------------------------------------------------------------------------------
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// const narcissistic = (v) =>
//     v ===
//     Array.from(v.toString()).reduce((a, c, _, arr) => a + c ** arr.length, 0);

// // function narcissistic(value) {
// //     const number = value.toString().length;
// //     const arr = Array.from(value.toString());
// //     const result = arr.reduce(
// //         (acc, curr, index, array) => acc + curr ** array.length,
// //         0
// //     );
// //     return result;
// // }

// console.log(narcissistic(7)); // true, "7 is narcissistic"
// console.log(narcissistic(371)); // true, "371 is narcissistic"
// console.log(narcissistic(153)); // true,    153
// console.log(narcissistic(1652)); // false,  1938
//-----------------------------------------------------------------------------------------------------------

// function validSolution(b) {
//     // firstCondition
//     let firstCondition = b.every((l) =>
//         l.every((n) => n !== 0 && [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(n))
//     );
//     // secondCondition
//     let obj = {};
//     for (let line of b) {
//         for (let i = 0; i < 9; i++) {
//             obj[i] ? obj[i].push(line[i]) : (obj[i] = [line[i]]);
//         }
//     }
//     let v = Object.values(obj);
//     let secondCondition = v.every((l) =>
//         l.every((n) => n !== 0 && [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(n))
//     );
//     // third condition
//     let obj3 = {};
//     let counter = 3;
//     for (let line of b) {
//         for (let i = 0; i < 3; i++) {
//             obj3[i]
//                 ? obj[i].push(line.splice(0, 3))
//                 : (obj3[i] = [...line.splice(0, 3)]);
//             // console.log(line.splice(0, 3));
//         }
//         console.log(line);
//     }

//     console.log(obj3);
//     // console.log(b);
//     // final result
//     return firstCondition && secondCondition;
// }

// console.log(
//     validSolution([
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [2, 3, 1, 5, 6, 4, 8, 9, 7],
//         [3, 1, 2, 6, 4, 5, 9, 7, 8],
//         [4, 5, 6, 7, 8, 9, 1, 2, 3],
//         [5, 6, 4, 8, 9, 7, 2, 3, 1],
//         [6, 4, 5, 9, 7, 8, 3, 1, 2],
//         [7, 8, 9, 1, 2, 3, 4, 5, 6],
//         [8, 9, 7, 2, 3, 1, 5, 6, 4],
//         [9, 7, 8, 3, 1, 2, 6, 4, 5],
//     ])
// ); // false

//expected true to equal false

// console.log(
//     validSolution([
//         [5, 3, 4, 6, 7, 8, 9, 1, 2],
//         [6, 7, 2, 1, 9, 5, 3, 4, 8],
//         [1, 9, 8, 3, 4, 2, 5, 6, 7],
//         [8, 5, 9, 7, 6, 1, 4, 2, 3],
//         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//         [9, 6, 1, 5, 3, 7, 2, 8, 4],
//         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//         [3, 4, 5, 2, 8, 6, 1, 7, 9],
//     ])
// ); //   true

// console.log(
//     validSolution([
//         [5, 3, 4, 6, 7, 8, 9, 1, 2],
//         [6, 7, 2, 1, 9, 0, 3, 4, 8],
//         [1, 0, 0, 3, 4, 2, 5, 6, 0],
//         [8, 5, 9, 7, 6, 1, 0, 2, 0],
//         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//         [9, 0, 1, 5, 3, 7, 2, 1, 4],
//         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//         [3, 0, 0, 4, 8, 1, 1, 7, 9],
//     ])
// ); //    false

// function validSolution(b) {
//     return b.every((l) =>
//         l.every((n) => n !== 0 && [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(n))
//     );
// }

// const a = [5, 3, 4, 6, 7, 8, 9, 1, 2];
// const sl = a.slice(3);
// console.log(a);
// const sl2 = a.slice(3);
// console.log(a);
// console.log(sl);
// console.log(sl2);

//---------------------------------------------------------------------------------------------------

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// const digPow = (n, p) => {
//     const r = Array.from(n.toString()).reduce((a, c, i) => a + c ** (p + i), 0);
//     return r % n === 0 ? r / n : -1;
// };

// console.log(digPow(89, 1)); // 1
// console.log(digPow(92, 1)); // -1
// console.log(digPow(695, 2)); // 2
// console.log(digPow(46288, 3)); // 51
//---------------------------------------------------------------------------------------------------------
// function findEvenIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let l = arr.slice(0, i).reduce((a, c) => a + c, 0);
//         let r = arr.slice(i + 1, arr.length).reduce((a, c) => a + c, 0);
//         if (l === r) return i;
//     }
//     return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3, "The array was: [1,2,3,4,3,2,1]
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1, "The array was: [1,100,50,-51,1,1]
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1, "The array was: [1,2,3,4,5,6]
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3, "The array was: [20,10,30,10,10,15,35]
//---------------------------------------------------------------------------------------------------------
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//     let odds = [];
//     return array
//         .map((n) => {
//             if (n % 2 === 0) return n;
//             else {
//                 odds.push(n);
//                 return "x";
//             }
//         })
//         .map((n) => {
//             odds.sort((a, b) => a - b);
//             return n === "x" ? (n = odds.shift()) : n;
//         });
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
// console.log(sortArray([])); // []
//--------------------------------------------------------------------------------------------------------

// const getCount = (str) =>
//     str.split("").filter((l) => ["a", "e", "i", "o", "u"].includes(l)).length;

// console.log(getCount("abracadabra")); // 5

// TODO function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

//----------------------------------------------------------------------------------------------------------
// Square every digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// const squareDigits = (num) =>
//     Number(
//         num
//             .toString()
//             .split("")
//             .map((n) => (+n) ** 2)
//             .join("")
//     );

// console.log(squareDigits(3212)); //  9414
// console.log(squareDigits(2112)); //  4114
// console.log(squareDigits(0)); // 0
//-----------------------------------------------------------------------------------------------------------
// Highest and lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers) {
//     const result = numbers.split(" ").map((n) => Number(n));
//     return `${Math.max(...result)} ${Math.min(...result)}`;
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
// console.log(highAndLow("1 2 3")); // "3 1"
//---------------------------------------------------------------------------------------------------------
// Rot13
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message) {
//     const code = (c) => {
//         if (c < 91) return c + 13 > 90 ? (c = c + 13 - 26) : (c += 13);
//         else return c + 13 > 122 ? (c = c + 13 - 26) : (c += 13);
//     };
//     message = message
//         .split("")
//         .map((l) => {
//             return /[A-Za-z]/g.test(l)
//                 ? (l = String.fromCharCode(code(l.charCodeAt())))
//                 : l;
//         })
//         .join("");
//     return message;
// }

// TODO const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));

// console.log(rot13("Test!")); // Output: Grfg
//----------------------------------------------------------------------------------------------------------
// Maximum subarray sum

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// var maxSequence = function (arr) {
//     let sums = [];
//     let max = 0;
//     let tempSum = 0;
//     for (let i in arr) {
//         if (arr[i] > 0) {
//             for (let j = i; j < arr.length; j++) {
//                 sums.length
//                     ? sums.push(sums[sums.length - 1] + arr[j])
//                     : sums.push(arr[j]);
//             }
//             tempSum = Math.max.apply(null, sums);
//             if (tempSum > max) max = tempSum;
//             sums = [];
//         }
//     }
//     return max;
// };

// TODO var maxSequence = function(arr){
//     var min = 0, ans = 0, i, sum = 0;
//     for (i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min);
//     }
//     return ans;
//   }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //  6
// -----------------------------------------------------------------------------------------------------------
// Pete the baker 5kyu
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// function cakes(recipe, available) {
//     let max = 0;
//     let temp = 0;
//     for (let [key, value] of Object.entries(recipe)) {
//         if (available[key] / value >= 0) {
//             temp = Math.trunc(available[key] / value);
//             if (temp <= 0) return 0;
//             if (max === 0 || max > temp) max = temp;
//             temp = 0;
//         } else if (max === 0) return 0;
//         else return 0;
//     }
//     return max;
// }
// // TODO function cakes(recipe, available) {
// //     return Object.keys(recipe).reduce(function(val, ingredient) {
// //       return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
// //     }, Infinity)
// //   }

// console.log(
//     cakes(
//         { flour: 500, sugar: 200, eggs: 1 },
//         { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//     )
// ); // 2

// console.log(
//     cakes(
//         { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//         { sugar: 500, flour: 2000, milk: 2000 }
//     )
// ); // 0
//-------------------------------------------------------------------------------------------------------
// 5 kyu   Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// function moveZeros(arr) {
//     for (let n of arr) {
//         if (n === 0) {
//             arr.splice(arr.indexOf(n), 1);
//             arr.push(0);
//         }
//     }
//     return arr;
// }

// TODO var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
//   }

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]
//----------------------------------------------------------------------------------------------------------
// 5 kyu   RGB To Hex Conversion
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:

// rgb(255, 255, 255); // returns FFFFFF
// rgb(255, 255, 300); // returns FFFFFF
// rgb(0, 0, 0); // returns 000000
// rgb(148, 0, 211); // returns 9400D3
// const rgb = (r, g, b) => {
//     const arr = [r, g, b];
//     let result = [];
//     arr.map((n) => {
//         if (n < 0) result.push(0);
//         else if (n > 255) result.push(255);
//         else result.push(n);
//     });
//     result = result
//         .map((n) => n.toString(16).toUpperCase())
//         .map((n) => (n.length < 2 ? 0 + n : n))
//         .join("");
//     return result;
// };

// console.log(rgb(4, 156, 268)); // '049CFF'
// console.log(rgb(148, 11, 225)); // '940BE1'
// console.log(rgb(0, 0, 0)); // '000000'
// console.log(rgb(0, 0, -20)); // '000000'
// console.log(rgb(300, 255, 255)); // 'FFFFFF'
// console.log(rgb(173, 255, 47)); // 'ADFF2F'
// console.log((255).toString(16));
//---------------------------------------------------------------------------------------------------------
// 8 kyu  Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// const even_or_odd = (number) => number % 2 === 0 ? "Even" : "Odd";
//------------------------------------------------------------------------------------------------------------
// 8 kyu  Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     return number > 0 ? -number : Math.abs(number);
// }

// TODO const opposite = (n) => -n;

// console.log(opposite(-1));
// //------------------------------------------------------------------------------------------------------------
// 8 kyu  Convert a Number to a String!
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
// Examples:
// 123 --> "123"
// 999 --> "999"

// const numberToString = (num) => num.toString();

// console.log(numberToString(123));
//------------------------------------------------------------------------------------------------------------
// 8 kyu   Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// const boolToWord = (bool) => (bool ? "Yes" : "No");

// console.log(boolToWord(true));
// console.log(boolToWord(false));
//----------------------------------------------------------------------------------------------------------
// 8 kyu Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// const solution = (str) => str.split("").reverse().join("");
// console.log(solution("world")); // 'dlrow'
// console.log(solution("hello")); // 'olleh'
// console.log(solution("")); // ''
// console.log(solution("h")); // 'h'
//-------------------------------------------------------------------------------------------------------------
// 8 kyu  Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
//     The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// function makeNegative(n) {
//     return n > 0 ? -n : n;
// }

// console.log(makeNegative(0)); // -42
//--------------------------------------------------------------------------------------------------------------
// 8 kyu   Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// const positiveSum = (arr) =>
//     arr.reduce((a, c) => (a > 0 ? a : 0) + (c > 0 ? c : 0), 0);

// console.log(positiveSum([1, 2, 3, 4, 5])); //15
// console.log(positiveSum([1, -2, 3, 4, 5])); //13
// console.log(positiveSum([])); //0
// console.log(positiveSum([-1, -2, -3, -4, -5])); //0
// console.log(positiveSum([-1, 2, 3, 4, -5])); //9
//------------------------------------------------------------------------------------------------------------
// 8 kyu   String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//     return s.repeat(n);
// }

// console.log(repeatStr(3, "*")); // "***"
// console.log(repeatStr(5, "#")); // "#####"
// console.log(repeatStr(2, "ha ")); // "ha ha "
//------------------------------------------------------------------------------------------------------------
// 8 kyu  Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// const removeChar = (s) => s.slice(1, -1);

// console.log(removeChar("eloquent")); // 'loquen'
// console.log(removeChar("country")); // 'ountr'
// console.log(removeChar("person")); // 'erso'
// console.log(removeChar("place")); // 'lac'
// console.log(removeChar("ooopsss")); // 'oopss'
//------------------------------------------------------------------------------------------------------------
// 8 kyu   Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
//

// function findSmallestInt(args) {
//     return Math.min(...args);
// }

// console.log(findSmallestInt([78, 56, 232, 12, 8])); //  8,'Should return the smallest int 8'
// console.log(findSmallestInt([78, 56, 232, 12, 18])); //  12,'Should return the smallest int 12'
// console.log(findSmallestInt([78, 56, 232, 412, 228])); //  56,'Should return the smallest int 56'
// console.log(findSmallestInt([78, 56, 232, 12, 0])); //  0,'Should return the smallest int 0'
// console.log(findSmallestInt([1, 56, 232, 12, 8])); //  1,'Should return the smallest int 1'
//-------------------------------------------------------------------------------------------------------------
// 4 kyu   Sum Strings as Numbers
// Given the string representations of two integers, return the string representation of the sum of those integers.
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// function sumStrings(a, b) {
//     // return (BigInt(parseInt(a)) + BigInt(parseInt(b))).toString();
//     return (BigInt(a.toString()) + BigInt(b.toString())).toString();
// }

// console.log(sumStrings("123", "456")); // '579'
// console.log(
//     sumStrings("712569312664357328695151392", "8100824045303269669937")
// ); // expected '7.125774134884027e+26' to equal '712577413488402631964821329'
//--------------------------------------------------------------------------------------------------------------
// 8 kyu  Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// const abbrevName = (name) =>
//     name
//         .split(" ")
//         .map((n) => n[0].toUpperCase())
//         .join(".");
// console.log(abbrevName("Sam Harris")); // "S.H"
// console.log(abbrevName("Patrick Feenan")); // "P.F"
// console.log(abbrevName("Evan Cole")); // "E.C"
// console.log(abbrevName("p favuzzi")); // "P.F"
// console.log(abbrevName("David Mendieta")); // "D.M"
//------------------------------------------------------------------------------------------------------------------
// 8 kyu   Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

// const booleanToString = (b) => b.toString();

// console.log(booleanToString(true)); // "true", 'When we pass in true, we want the string "true" as output');
// console.log(booleanToString(false)); // "false", 'When we pass in false, we want the string "false" as output');
//------------------------------------------------------------------------------------------------------------------
// 8 kyu   Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]

// const maps = (x) => x.map((x) => x + x);

// console.log(maps([1, 2, 3])); // [2, 4, 6]
// console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
// console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]
//----------------------------------------------------------------------------------------------------------------
// 8 kyu   A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// function findNeedle(h) {
//     let n = h.findIndex((w) => w === "needle");
//     return n !== -1
//         ? `found the needle at position ${n}`
//         : "Your function didn't return anything";
// }

// console.log(
//     findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"])
// undefined, "Your function didn't return anything"
// console.log(findNeedle(haystack_1)); // undefined, "Your function didn't return anything"
//---------------------------------------------------------------------------------------------------------------
// 8 kyu  Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

// console.log(isDivisible(3, 3, 4)); //false
// console.log(isDivisible(12, 3, 4)); //true
// console.log(isDivisible(8, 3, 4)); //false
// console.log(isDivisible(48, 3, 4)); //true
//--------------------------------------------------------------------------------------------------------------
// 7 kyu  Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

// function getMiddle(s) {
//     return s.length % 2 === 0
//         ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
//         : s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
// }

// console.log(getMiddle("test")); //"es"
// console.log(getMiddle("testing")); //"t"
// console.log(getMiddle("middle")); //"dd"
// console.log(getMiddle("A")); //"A"
//----------------------------------------------------------------------------------------------------------------
// 7 kyu  You're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
//     In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// const isSquare = (n) => Number.isInteger(n ** 0.5);

// console.log(isSquare(-1)); // false, "-1: Negative numbers cannot be square numbers"
// console.log(isSquare(0)); // true, "0 is a square number (0 * 0)"
// console.log(isSquare(3)); // false, "3 is not a square number"
// console.log(isSquare(4)); // true, "4 is a square number (2 * 2)"
// console.log(isSquare(25)); // true, "25 is a square number (5 * 5)"
// console.log(isSquare(26)); // false, "26 is not a square number"
//-------------------------------------------------------------------------------------------------------
// 7 kyu  List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// const filter_list = (l) => l.filter((l) => Number.isInteger(l));

// console.log(filter_list([1, 2, "a", "b"])); // [1, 2]
// console.log(filter_list([1, "a", "b", 0, 15])); // [1, 0, 15])
// console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1, 2, 123])
//-------------------------------------------------------------------------------------------------------
// 7 kyu  Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     str = str.toLowerCase().split("");
//     return (
//         str.filter((x) => x === "x").length ===
//         str.filter((o) => o === "o").length
//     );
// }

// console.log(XO("xo")); // true
// console.log(XO("xxOo")); // true
// console.log(XO("xxxm")); // false
// console.log(XO("Oo")); // false
// console.log(XO("ooom")); // false
//--------------------------------------------------------------------------------------------------------
// 7 kyu Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIsogram(str) {
//     let result = {};
//     str = str.toLowerCase().split("");
//     str.forEach((s) => {
//         if (!result[s]) result[s] = 1;
//         else result[s] += 1;
//     });
//     return !Object.values(result).filter((v) => v > 1).length > 0;
// }

// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isogram")); // true
// console.log(isIsogram("aba")); // false, "same chars may not be adjacent"
// console.log(isIsogram("moOse")); // false, "same chars may not be same case"
// console.log(isIsogram("isIsogram")); // false
// console.log(isIsogram("")); // true, "an empty string is a valid isogram"
//----------------------------------------------------------------------------------------------------------
// 7 kyu  Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// const findShort = (s) =>
//     Array.from(s.split(" ")).reduce(
//         (a, c, i) =>
//             i === 0 ? (a = c.length) : c.length < a ? (a = c.length) : a,
//         0
//     );

// // TODO function findShort(s) {
// //     return Math.min.apply(
// //         null,
// //         s.split(" ").map((w) => w.length)
// //     );
// // }

// // TODO function findShort(s) {
// //     return Math.min(...s.split(" ").map((s) => s.length));
// // }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
// console.log(
//     findShort(
//         "turns out random test cases are easier than writing out basic ones"
//     )
// ); // 3
// console.log(findShort("Let's travel abroad shall we")); // 2
//------------------------------------------------------------------------------------------------------------------
// 7 kyu Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// const sumTwoSmallestNumbers = (n) =>
//     n.sort((a, b) => a - b).reduce((a, c, i) => (i < 2 ? a + c : a + 0), 0);

// TODO    function sumTwoSmallestNumbers(numbers) {
//         var [ a, b ] = numbers.sort((a, b) => a - b)
//         return a + b
//       }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13 , "Sum should be 13"
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6 , "Sum should be 6"
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10 , "Sum should be 10"
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24 , "Sum should be 24"
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16 , "Sum should be 16"
//-----------------------------------------------------------------------------------------------------------------
// 7 kyu   Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum(a, b) {
//     [a, b] = [a, b].sort((a, b) => a - b);
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSum(0, -1)); //-1
// console.log(getSum(0, 1)); //1
//---------------------------------------------------------------------------------------------------------------
// 7 kyu Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     let result = [];
//     for (let i = 0; i < s.length; i++) {
//         result.push(s[i].repeat(i + 1));
//     }
//     return result
//         .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
//         .join("-");
// }

// // TODO function accum(s) {
// //     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// //   }

// console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
//------------------------------------------------------------------------------------------------------------------
// 7 kyu Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!"
// "####################################man!"

// return masked string
// const maskify = (cc) =>
//     cc.length < 5
//         ? cc
//         : cc.substring(0, cc.length - 4).replace(/[\s\S]/g, "#") +
//           cc.substring(cc.length - 4);

// TODO  function maskify(cc) {
//     return cc.replace(/.(?=....)/g, '#');
//   }

// console.log(maskify("w#qsrw##e##rwjsw")); // '############wjsw'
// console.log(maskify("4556364607935616")); // '############5616'
// console.log(maskify("1")); // '1'
// console.log(maskify("11111")); // '#1111'
// expected 'w#qsrw##e##rwjsw' to equal '############wjsw'
//--------------------------------------------------------------------------------------------------------------------
// 7 kyu   Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
// const friend = (f) => f.filter((f) => f.length === 4);

// console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
// console.log(
//     friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// ); // ["Jimm", "Cari", "aret"]
// console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]
//----------------------------------------------------------------------------------------------------------------------
// 7 kyu Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// // (In this case, all triangles must have surface greater than 0 to be accepted).

// const isTriangle = (a, b, c) => {
//     let r = [a, b, c].sort((x, y) => x - y);
//     return r[0] + r[1] > r[2];
// };

// // isTriangle(7,1,8) should equal false

// console.log(isTriangle(1, 2, 2)); // true
// console.log(isTriangle(7, 2, 2)); // false
// console.log(isTriangle(7, 1, 8)); // false
//------------------------------------------------------------------------------------------------------------------------
// 7 kyu Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// const longest = (s1, s2) =>
//     Array.from(new Set([...s1, ...s2]))
//         .sort()
//         .join("");

//  TODO  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
// console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"
//----------------------------------------------------------------------------------------------------------------------
// 7 kyu Find the next perfect square!
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// const findNextSquare = (sq) =>
//     Number.isInteger(sq ** 0.5) ? (sq ** 0.5 + 1) ** 2 : -1;

// console.log(findNextSquare(121)); // 144, "Wrong output for 121"
// console.log(findNextSquare(625)); // 676, "Wrong output for 625"
// console.log(findNextSquare(319225)); // 320356, "Wrong output for 319225"
// console.log(findNextSquare(15241383936)); // 15241630849, "Wrong output for 15241383936"
// console.log(findNextSquare(155)); // -1, "Wrong output for 155"
// console.log(findNextSquare(342786627)); // -1, "Wrong output for 342786627"
//----------------------------------------------------------------------------------------------------------------------
// 6 kyu  Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str) {
//     str = str.split("");
//     let r = [];
//     while (str.length > 0) {
//         str.length > 1
//             ? r.push(str.splice(0, 2).join(""))
//             : r.push(str.splice(0, 1) + "_");
//     }
//     return r;
// }

// function solution(s){
// TODO     return (s+"_").match(/.{2}/g)||[]
//  }

// console.log(solution("abcdef")); // ["ab", "cd", "ef"]
// console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
// console.log(solution("")); // []
//-------------------------------------------------------------------------------------------------------------------------
// 6 kyu Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// This is the first kata in series:
//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique

// const findUniq = (arr) => {
//     arr.sort((a, b) => a - b);
//     return arr[0] === arr[1] ? arr.pop() : arr.shift();
// };

// console.log(findUniq([1, 0, 0])); // 1
// console.log(findUniq([0, 1, 0])); // 1
// console.log(findUniq([0, 0, 1])); // 1
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([1, 1, 2, 1, 1])); // 2
// console.log(findUniq([3, 10, 3, 3, 3])); // 10
// console.log(findUniq([13, 10, 13, 13, 13])); // 10
//-----------------------------------------------------------------------------------------------------------------
// 6 kyu Are they the "same"?
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// function comp(array1, array2) {
//     array1.map((n) => {
//         if (array2.includes(n ** 2)) array2.splice(array2.indexOf(n ** 2), 1);
//         else return false;
//     });
//     console.log(array1);
//     console.log(array2);
//     return array2.length === 0 ? true : false;
// }

// TODO function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
//   }

// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [
//     11 * 11,
//     121 * 121,
//     144 * 144,
//     19 * 19,
//     161 * 161,
//     19 * 19,
//     144 * 144,
//     19 * 19,
// ];
// console.log(comp(a1, a2)); // true
// console.log(
//     comp(
//         [3, 8, 5, 2, 4, 3, 0, 1, 4, 9, 1, 2, 5, 5, 7, 3, 9, 5],
//         [25, 0, 9, 10, 64, 16, 4, 1, 16, 4, 81, 25, 81, 9, 49, 25, 1, 25]
//     )
// );
// // It should work with random inputs too - Expected: false, instead got: true
// //  TODO  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
// console.log(
//     comp(
//         [9, 4, 0, 4, 4, 8, 6, 1, 1, 6, 7, 10, 0, 2, 3, 8, 7, 5],
//         [49, 25, 36, 81, 16, 0, 4, 100, 16, 49, 9, 16, 64, 1, 64, 36, 1, 1]
//     )
// );
// // It should work with random inputs too - Expected: false, instead got: true
//-------------------------------------------------------------------------------------------------------------------
// 6 kyu Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have also created other katas. Take a look if you enjoyed this kata!
// const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// function findMissingLetter(array) {
//     const alphabet = [
//         "a",
//         "b",
//         "c",
//         "d",
//         "e",
//         "f",
//         "g",
//         "h",
//         "i",
//         "j",
//         "k",
//         "l",
//         "m",
//         "n",
//         "o",
//         "p",
//         "q",
//         "r",
//         "s",
//         "t",
//         "u",
//         "v",
//         "w",
//         "x",
//         "y",
//         "z",
//     ];
//     let upper = false;
//     if (/[A-Z]/.test(array[0])) {
//         upper = true;
//         array = array.map((n) => n.toLowerCase());
//     }
//     let first = alphabet.indexOf(array[0]);
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] !== alphabet[first + i]) {
//             return upper
//                 ? alphabet[first + i].toUpperCase()
//                 : alphabet[first + i];
//         }
//     }
// }

// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // 'e'
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // 'P'
//--------------------------------------------------------------------------------------------------------------------------
// 6 kyu Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// // ]

// function towerBuilder(nFloors) {
//     let r = [];
//     let j = 0;
//     for (let i = 1; i <= nFloors; i++) {
//         r.push(
//             " ".repeat(nFloors - i) +
//                 "*".repeat(1 + j) +
//                 " ".repeat(nFloors - i)
//         );
//         j += 2;
//     }
//     nFloors = r;
//     return nFloors;
// }

// console.log(towerBuilder(1)); // ["*"]
// console.log(towerBuilder(2)); // [" * ","***"]
// console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
// // expected [ '*', '***' ] to deeply equal [ ' * ', '***' ]
// // expected [ ' * ', ' *** ' ] to deeply equal [ ' * ', '***' ]
//-----------------------------------------------------------------------------------------------------------------
// 6 kyu  Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// function high(x) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     x = x.split(" ");
//     let sum = 0;
//     let max = 0;
//     let r = "";
//     for (let word of x) {
//         for (let l of word) {
//             sum += alphabet.indexOf(l) + 1;
//         }
//         if (sum > max) {
//             max = sum;
//             r = word;
//         }
//         sum = 0;
//     }
//     return r;
// }

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }

// console.log(high("man i need a taxi up to ubud")); // 'taxi'
// console.log(high("what time are we climbing up the volcano")); // 'volcano'
// console.log(high("take me to semynak")); // 'semynak'
// console.log(high("aa b")); // 'aa'
// console.log(high("b aa")); // 'b'
// console.log(high("bb d")); // 'bb'
// console.log(high("d bb")); // 'd'
// console.log(high("aaa b")); // 'aaa'
//---------------------------------------------------------------------------------------------------------------
// Ranked up to 4kyu
//---------------------------------------------------------------------------------------------------------------
// 6 kyu +1 Array
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//     the array can't be empty
//     only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
// [4, 3, 2, 5] would return [4, 3, 2, 6]

// function upArray(arr) {
//     if (arr.some((n) => n < 0 || n > 9) || arr.length === 0) return null;
//     arr[arr.length - 1]++;
//     let counter = arr.length - 1;
//     while (arr[counter] > 9) {
//         if (counter === 0) {
//             arr[counter] %= 10;
//             arr.unshift(1);
//         } else {
//             arr[counter] %= 10;
//             arr[counter - 1]++;
//             counter--;
//         }
//     }
//     return arr;
// }

// // Expected: '[1, 0, 0, 0]', instead got: '[0, 0, 0]'

// console.log(upArray([9, 9, 9])); // [1,0,0,0]
// console.log(upArray([2, 3, 9])); // [2,4,0]
// console.log(upArray([4, 3, 2, 5])); // [4,3,2,6]
// console.log(upArray([1, -9])); // null
//----------------------------------------------------------------------------------------------------
// 8 kyu  Be Concise III - Sum Squares
// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.
// A few hints:
//     Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!
// const sumSquares = (a) => a.reduce((a, c) => +a + c ** 2);
// console.log(sumSquares([1, 2, 3, 4, 5])); // 55
// console.log(sumSquares([7, 3, 9, 6, 5])); // 200
// console.log(sumSquares([11, 13, 15, 18, 2])); // 843
// console.log(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])); // 110

//----------------------------------------------------------------------------------------------------------
// 8 kyu Lexical this
// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
// Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// var Person = function () {
//     var person = {
//         _name: "Leroy",
//         _friends: [],
//         fillFriends(f) {
//             this._friends.push(...f);
//         },
//     };
//     return person;
// };

// const m = new Person();
// m.fillFriends("Ana");
// m.fillFriends("Frank");
// console.log(m);
// // expected [ [ 'bob', 'john' ] ] to deeply equal [ 'bob', 'john' ]
//--------------------------------------------------------------------------------------------------------
// 8 kyu Generate user links
// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c

// function generateLink(user) {
//     return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
// }

// console.log(generateLink("matt c")); // ("http://www.codewars.com/users/matt%20c");
// console.log(generateLink("g964")); // "http://www.codewars.com/users/g964"
// console.log(generateLink("GiacomoSorbi")); // ("http://www.codewars.com/users/GiacomoSorbi");
// console.log(generateLink("ZozoFouchtra")); // ("http://www.codewars.com/users/ZozoFouchtra");
// console.log(generateLink("colbydauph")); // ("http://www.codewars.com/users/colbydauph");
// console.log(generateLink("m_polchert")); // 'https://www.codewars.com/users/m_polchert'
//--------------------------------------------------------------------------------------------------------
// 7 kyu Sort Numbers
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// const solution = (n) => (n ? n.sort((a, b) => a - b) : []);

// console.log(solution([1, 2, 3, 10, 5])); // [1,2,3,5,10]
// console.log(solution(null)); // should return []
// console.log(solution([])); // []
// console.log(solution([20, 2, 10])); // [2,10,20]
// console.log(solution([2, 20, 10])); // [2,10,20]
//-------------------------------------------------------------------------------------------------
// 7 kyu Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// const number = (a) => a.map((l, i) => `${i + 1}: ${l}`);

// console.log(number([])); // [], 'Empty array should return empty array'
// console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"], 'Return the correct line numbers'
//---------------------------------------------------------------------------------------
// 7 kyu Make a function that does arithmetic!
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// A few examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

// const arithmetic = (a, b, o) =>
//     o[0] === "a" ? a + b : o[0] === "s" ? a - b : o[0] === "m" ? a * b : a / b;

// console.log(arithmetic(1, 2, "add")); // 3, "'add' should return the two numbers added together!"
// console.log(arithmetic(8, 2, "subtract")); // 6, "'subtract' should return a minus b!"
// console.log(arithmetic(5, 2, "multiply")); // 10, "'multiply' should return a multiplied by b!"
// console.log(arithmetic(8, 2, "divide")); // 4, "'divide' should return a divided by b!"

// function arithmetic(a, b, operator) {
//     const operation = {
//         add(a, b) {
//             return a + b;
//         },
//         subtract(a, b) {
//             return a - b;
//         },
//         multiply(a, b) {
//             return a * b;
//         },
//         divide(a, b) {
//             return a / b;
//         },
//     };
//     return operation[operator](a, b);
// }

// function arithmetic(a, b, operator) {
//     const ccase = {
//         add: a + b,
//         subtract: a - b,
//         multiply: a * b,
//         divide: a / b,
//     };
//     return ccase[operator];
// }

//  TODO const arithmetic = (a, b, operator) =>
//     ({
//         add: a + b,
//         subtract: a - b,
//         multiply: a * b,
//         divide: a / b,
//     }[operator]);
//--------------------------------------------------------------------------------------
// 6 kyu  Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             console.log(numbers[i], numbers[j]);
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }
// }

// TODO twoSum=(n,t,r)=>[r=n.indexOf(n.filter(u=>n.includes(t-u))[0]),n.lastIndexOf(t-n[r])]

// console.log(twoSum([1, 2, 3], 4)); //  sort(numericalCompare), [0,2]);
// console.log(twoSum([1234, 5678, 9012], 14690)); //  sort(numericalCompare), [1,2]);
// console.log(twoSum([2, 2, 3], 4)); //  sort(numericalCompare), [0,1]);
//--------------------------------------------------------------------------------------------
// 6 kyu Write Number in Expanded Form
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// function expandedForm(num) {
//     numStr = num
//         .toString()
//         .split("")
//         .reduce(
//             (a, c, i, arr) =>
//                 c > 0 ? a + c + "0".repeat(arr.length - i - 1) : a,
//             []
//         )
//         .match(/[1-9]0*/g)
//         .reduce((a, c, i) => (i === 0 ? a : `${a} + ${c}`));
//     return numStr;
// }

// TODO function expandedForm(num) {
//     return String(num)
//             .split("")
//             .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
//             .filter((num) => Number(num) != 0)
//             .join(" + ")
//   }

//  TODO expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ')

// console.log(expandedForm(12)); // '10 + 2');
// console.log(expandedForm(42)); // '40 + 2');
// console.log(expandedForm(70304)); // '70000 + 300 + 4');
//-----------------------------------------------------------------------------------------
