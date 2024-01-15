console.log('---------------------')
console.log('Esercizio 1')
console.log('---------------------')

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  confront(utente) {
    if (this.age > utente.age) {
      return `${this.firstName} è più vecchio di ${utente.firstName}`
    } else {
      return `${utente.firstName} è più vecchio di ${this.firstName}`
    }
  }
}

const newUser = new User('Ciro', 'Vitiello', 30, 'Rimini')
console.log(newUser)
const newUser2 = new User('Shiba', 'Inu', 23, 'Milano')
console.log(newUser2)

console.log(newUser2.confront(newUser))

console.log('---------------------')
console.log('Esercizio 2')
console.log('---------------------')

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  sameOwner(owner) {
    if (this.ownerName === owner.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const petInput = document.getElementById('petName')
const ownerInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')

const saveButton = document.querySelector('form button')

const animals = []

const fillRowWithCards = function () {
  const row = document.getElementById('animals')

  row.innerHTML = ''

  animals.forEach((animal) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')

    newCol.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${animal.petName} of ${animal.ownerName}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Type of animal:        ${animal.species}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Race:      ${animal.breed}</h6>
              </div>
          </div>
          `

    row.appendChild(newCol)
  })

  petInput.value = ''
  ownerInput.value = ''
  speciesInput.value = ''
  breedInput.value = ''
}

const formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', function (e) {
  e.preventDefault()

  const animalCreated = new Pet(
    petInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  )

  console.log('scheda animale creata!', animalCreated)

  animals.push(animalCreated)

  fillRowWithCards()
})
