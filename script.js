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