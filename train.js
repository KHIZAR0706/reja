console.log("TRAIN AREA!");
console.log("***************");

// B - TASK
// Masalani izohi: Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// Masalan: countDigits("khizar1ab3khu13na07zarov6") 7ni return qiladi.

// Masalani yechimi: 

function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      count++;
    }
  }
  return count;
}

console.log(countDigits("khizar1ab3khu13na07zarov6"));



// A - TASK
/* Masalani izohi:
Shunday 2 parametrli function tuzing, hamda 1-parametrdagi letterni, 2-parametrdagi word qatnashgan sonini return qilishi kerak. MASALAN: countLetter("e", "engineer") 3 sonini return qiladi.
*/

// Masalani yechimi:

// function countLetter(letter, word) {
//    let count = 0;
//    for(let i = 0; i < word.length; i++) {
//        if (word[i] === letter) {
//            count++;
//        }
//    }
//    return count;
// }
//const result = countLetter("e", "engineer");
// console.log("result:", result);



// console.log("Jack Ma maslahatlari");
// const list = [
//    "yaxshi talaba bo'ling", // 0-20
//    "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//    "o'zingizni ishlashingizni boshlang", // 30-40
//    "siz kuchli bo'lgan narsalarni qiling", // 40-50
//    "yoshlarga investitsiya qiling", // 50-60
//    "endi dam oling, foydasi yoq endi", // 60
// ];

// NodeJS event loop va Callback functionlarni o'rganamiz! => CALLBACK FUNCTIONS

//  function maslahatBering(a, callback) {
//  if(typeof a !== 'number') callback ("insert a number", null);
//  else if(a <= 20)  callback(null, list[0]);
//  else if(a > 20 && a <= 30) callback(null, list[1]);
//  else if(a > 30 && a <= 40) callback(null, list[2]);
//  else if(a > 40 && a <= 50) callback(null, list[3]);
//  else if(a > 50 && a <= 60) callback(null, list[4]);
//  else{
//    setInterval(() => {
//    callback(null, list[5]);
//     }, 1000);

//    setTimeout(function () {
//       callback(null, list[5]);
//        }, 5000)
//      }
//   }

// maslahatBering(10, (err, data) => {
//  if(err) console.log('ERROR:', err);
//   console.log('javob:', data);
//  })


// maslahatBering(26, (err, data) => {
//  if(err) console.log('ERROR:', err);
//   console.log('javob:', data);
//  })


// maslahatBering(38, (err, data) => {
//  if(err) console.log('ERROR:', err);
//   console.log('javob:', data);
//  })


// maslahatBering(49, (err, data) => {
//  if(err) console.log('ERROR:', err);
//   console.log('javob:', data);
//  })


// maslahatBering(55, (err, data) => {
//  if(err) console.log('ERROR:', err);
//   console.log('javob:', data);
//  })


// maslahatBering(61, (err, data) => {
//  if(err) console.log('ERROR:', err);
//   console.log('javob:', data);
//  })


// maslahatBering("salom", (err, data) => {
//   if(err) console.log('ERROR:', err);
//   else{
//     console.log('javob:', data);
//   }
   
// });

// console.log('passed  here 0');
// maslahatBering(65, (err, data) => {
//  if(err) console.log('ERROR:', err);
//    else{
//  console.log('javob:', data);
//  }
   
//  });
//  console.log('passed here 1');


// ASYNC FUNCTIONS!

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else{
//        return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(list[5]);
//        }, 5000);
//      });
//   }
// }

//  CALL via Then & Catch!

// console.log("passed here 0");
// maslahatBering(20)
//   .then(data => {
//     console.log('javob:', data);
//   })
//   .catch(err => {
//    console.log('ERROR:', err); 
//   });
// console.log("passed here 1");


// CALL via Async & Await!

//  async function run() {
//    let javob = await maslahatBering(20);
//    console.log(javob);
//    javob = await maslahatBering(70);
//    console.log(javob);
//    javob = await maslahatBering(41);
//    console.log(javob);
// }
// run();

// console.log("EXECUTE");
//  ⭐️ Asynchronous: CALLBACK, ASYNC && PROMISE

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//  if (b === 0) {
//    callback("Mahraj nolga teng bololmaydi", null);
//  } else {
//    callback(null, a % b);
//  }
// }

// CALL
// qoldiqliBolish(10, 6, (err, data) => {
//  if (err) {
//    console.log("Error:", err);
//  } else {
//    console.log("Data:", data);
//  }
// });