//JS libraries, plugins, frameworks
//UI Libraries
//Utilites Libraries

//below was done in the console.
//moment
// ƒ f(){return H.apply(null,arguments)}
// moment();
// $ {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: K, _d: Wed Feb 07 2024 14:13:02 GMT-0500 (Eastern Standard Time), …}
// moment().format("dddd");
// 'Wednesday'
// moment().format("ddd");
// 'Wed'
// moment().format("dd");
// 'We'
// moment().format("d");
// '3'

let today = moment().format("dddd Do [of] MMMM");
let todayElement = document.querySelector("#today");
todayElement.innerHTML = today;

let tomorrowElement = document.querySelector("#tomorrow");
let tomorrow = moment().add(1, "day").format("dddd Do [of] MMMM");
tomorrowElement.innerHTML = tomorrow;
