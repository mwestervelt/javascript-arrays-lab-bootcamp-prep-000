// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [... kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]

}
function removeLastKitten() {
  return
}

function removeFirstKitten() {

}
