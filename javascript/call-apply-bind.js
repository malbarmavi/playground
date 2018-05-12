let person = {
  fistName: 'Muhammad',
  lastName: 'Albarmawi',
  getFullName: function () {
    return `${this.fistName} ${this.lastName}`
  }
}

let zain = {
  fistName: 'Zain',
  lastName: 'Albarmawi'
}

person.getFullName(); //  => Muhammad Albarmawi

let getFullName = person.getFullName

getFullName() //  => undefined undefined

// call

getFullName.call(person); // =>  Muhammad Albarmawi
getFullName.call(zain); // =>  Zain Albarmawi

// apply

getFullName.apply(person); // =>  Muhammad Albarmawi
getFullName.apply(zain); // =>  Zain Albarmawi

// bind

getFullName.bind(person); // => f
getFullName.bind(zain); // =>  f

getFullName.bind(person)(); // =>  Muhammad Albarmawi
getFullName.bind(zain)(); // =>  Zain Albarmawi

// normaly after useing bind we will store the new function with deffrent varible
let getPersonName = getFullName.bind(person)
getPersonName() // // =>  Muhammad Albarmawi
