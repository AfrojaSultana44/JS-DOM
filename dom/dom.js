// console.log('Hello from JS')
// console.log(document.body)

const student = {
  name: "Moni",
  ID: 11,
  study: function (time) {
    // console.log(time, "study korteche")
  },
};

const liCollection = document.getElementsByTagName("li");
// console.log(liCollection)
for (const li of liCollection) {
  // console.log(li)
  // console.log(li.innerText)
}

// option-1: getElementsByTagName
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  // console.log(h1)
  // console.log(h1.innerText)
}

// option-2: getElementById
const fruitsTitle = document.getElementById("fruits-title");
fruitsTitle.innerText = "Fruits changed by JS";

// option-3: getElementsByClassName
const places = document.getElementsByClassName("important-places");
for (const place of places) {
  // console.log(place.innerText)
}

// option-4: querySelector
const list = document.querySelector(".fruits-container li");
console.log(list.innerText);

//option-5: querySelectorAll
const someLi = document.querySelectorAll(".fruits-container li");
// console.log(someLi)
for (const li of someLi) {
  // console.log(li.innerText)
}

// const title = document.getElementById("fruits-title")
// title.getAttribute("class")
