function forLoop(array) {
  for (let i = 0, i < 25; i++) {
    array = array.push('I am ${i} strange loop.')
  }
  return array
}