const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

let showInConsole

function inbox(input) {
showInConsole = input;
console.log({showInConsole});
}

function sure() {
  confirm("This will get rid of your progress do you still wish to continue?")
}

function check() {
  document.getElementById("classmate")
  console.log("Nice you checked a box!")
}