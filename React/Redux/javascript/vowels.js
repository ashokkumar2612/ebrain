// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
  
// console.log (countVowels('adwoiuyahgeiuwheiuhweiouhowiuehoweihoieuhiuk'));

// function withoutVowels(string) {
//     var withoutVowels = "";
//     for (var i = 0; i < string.length; i++) {
//         if (!isVowel(string[i])) {
//           withoutVowels += string[i];
//         }
//       }
//       return withoutVowels;
//   }
//   function isVowel(char) {
//     return 'aeiou'.includes(char);
//   }
//   console.log(withoutVowels('Hello World!'));

const sliceFunction = (str,ind,char) =>
Array.from(str).slice(0,ind).join('') + char + Array.from(str).slice(ind+1,Array.from(str).length).join('')
 console.log(sliceFunction('Ashok',1,'@'))

const chart = (str, ind, char) => {
ind.forEach(i => {
    str = sliceFunction(str, i, char)
})
return str
}
console.log(chart("ashok", [1,2],"5"))

// const replaceChars = (str, indices, char) => {
    // let replacedString = str;
//     // for (let i = 0; i < indices.length; i++) {
//     //     replacedString = sliceFunction(replacedString, indices[i], char)
//     // }
    // indices.forEach(i => {
        // str = sliceFunction(str, i, char)
    // })
    // return str
// }

// const replaceChars = (str, indices, char) => indices.reduce((str, i) => sliceFunction(str, i, char), str)

// console.log(replaceChars("Arun", [0, 3], "*"))

a = 10
let element = 0
for (let i = 1; i < a; i++) {
    element += i
}
console.log(element)

