document.getElementById('button').addEventListener('click', mussuem)

let age = 12

let day = 'saturday'
function mussuem () {
  age = document.getElementById('age').value
  day = document.getElementById('day').value
  if (( day === 'tuesday' || day === 'thursday') || ( age > 12 && age < 21)){
     document.getElementById('results').innerHTML = 'you are allowed for student pricing!'
  } else {
    document.getElementById('results').innerHTML = 'you must pay the original price'
  }
}
