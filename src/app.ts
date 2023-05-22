//THERE IS A LOT THAT AN BE DONE IN THE TS CONFIG, THAT AFFECTS THE BEHAVIOUR OF OUR CODES HERE, A WHOLE LOT!!!!! SO EXPLORE




//the main difference between typescript and javascript is that typescript uses a strict type but javascript does not

// const char = 'Teju Dairo'
//this will always be a string as it is declared and the type cannot be changed later same is true for numbers, booleans arays and the likes  and the likes

// let age = 'the love of my life'
//okay now the thing is that i can assign age to be a string again since initially I said that let the age be equal to something and the type was a string, if i do otherwise i will get an error same is for isBracket etc..meaning here that you can change the value of the variable but not the type, this is the concept of the strict functionality of typescript

// let isBracket = false

// artist = 'nba youngboy' // i can assign age to be a string again since initially I said that let the age be equal to something and the type was a string, if i do otherwise i will get an error same is for isBracket etc

// const runThis = (Diameter) => {
//since I specified the type to be number then passing a string as our param will bring out an error, but if the type was not specified, we are not going to get any error even though under normal JS it is expected to bring out an error
// return Diameter * Math.PI
// }

// console.log(runThis('hello'))

//FOR ARRAYS AND OBJECTS

//FOR ARRAYS
// const ourArray = ['money', 'fame', 'time']
//ourArray.push(89) this will not work cos what we have inside of the array are strings and so we cannot add number like that added to the array list
// ourArray.push('79')  we will not have any issues doing this cos what we are pushing in is a string

// const ourArrayTwo = [23,'money', 'fame', 'time'] //the variable type itself is fixed also is the values in the variable

//now since i already said that ourArrayTwo should be an array, then I cannot say that
//ourArrayTwo= 'for teh love of God' a string again
//with the ourArrayTwo containing two types, we can push any resembling types onto the array without no issues

//ourArrayTwo.push(34)//no errors
//ourArrayTwo.push('emily') //no errors
// ourArrayTwo[2]=90 //no errors cos the content of the array is of two types and we are passing either of the types this can go for other usecases too

//FOR OBJECTS
// let ninjas={
// name:'mario',  //the rules that applies to naming variables apply to this also
// belt:'black',
// age: 30
// }

//the three properties inside of that object work the same way

// ninjas.name='tejumola'  //there is no problem with this cos name was initiallu set to a string and then we do that again
// ninjas.name = 50 //there is a problem with this cos name is a string and you cannot change that to a number just like that

//ninjas=34 this will give error because ninja has a type of object and cannot be reset to a number
// ninjas.basketballing='fry' we cannot add extra properties to the already defined ones

// ninjas={name:'opeyemi', belt:'green', age:90} //as we cannot say that ninjas should be equal to a strange data type, but we can still set it as an object since it was initially an object

// //EXPLICIT TYPES
// let decy:number //we are explicitly stating that
//decy='food' we cannot say that we want to set decy to string again since we initially said it should be a number
//decy=56 // there is no problem with this
//decy=[] //this will not work

// let hexy:string
// //hexy=56 //this will not work as we already say that the hexy should be string
//hexy='hsdhsdjsdkj' //no errors

// let obj:object //this means anything that is object in nature
//obj=[] //this is possible because array is a form of object
// obj={} //also possible cos we stated that we wanted it to be an object
//obj={name:'johnson',age:'45',school:'SOS'}

//COMBINING TYPES
// let okayTwo:number | string //meaning that the type could be a number or a string  and note that we are using 'let', because we plan to chnage it later and that is why we are not using const

// okayTwo='fish' //no error cos we can have a string or a number
// okayTwo=67  //this is number there will be no problem
//okayTwo=[]  //this is an array there will be a problem
// okayTwo='decoder' //there will be no problem with this

// let yamy={} //this is stated that this is the object syntax that we want and hence we cannot do something other than this
// yamy=[]  //no errror cos array is still an object

//also we can state this specifically that

//so {} and object is the same if we are stating that

//rice is an object but the properties inside must have the declared type
// let rice:{
// namey:string|number|object, //this is a union type
// agey:number,
// currency:number
// }

//so if i say
// rice={
// namey:'grade', //namey can also be a number
// agey:45,
// amount:45
// } //there is no going to be a problem with this cos we provided what we declared.

// let booly:boolean
// booly=false //no error
//booly='fried' //error cos we are saying type should be string which is not what we specified

// let fryii: string[]

// fryii=['black','teju']  //there is a problem with this cos we stated that it should be a string
//fryii=[45]  //there will be a problem with this cos it is a number

// let fish: string[]=[]  //interpreted that what should be inside of the array is string and then set
// fish.push('money') //there is no problem with this cos we said it should be string and then

//DYNAMIC TYPE---THE ANY TYPE--THE ANY TYPE MEANS THAT WE--can set the type to be of any type meaning we can change the type later on, it could initially be a string, and later on it could be a boolean etc

//  let time:any

// time='food'  //no problems
//  time=false  //no problems
//  time= 78   //no problems
//  time={
// model:'nokia',
//  time:'2022'
//  }    //no probelems

// name can be of any type same is applicable to objects

// let radio:{name:any, age:any, datemi:any}  //first off radio should be an object and then every value of the properties inside could be of any type

// radio= {name:false, age:56, datemi:3031}
// radio={name:56, age:34, datemi:'jdjdjd'}

//FUNCTION TYPE IN TYPESCRIPT

// console.log('sis')
//FUNCTION TYPE IN TYPESCRIPT

// let greet=()=>{   //automatically typescript knows that this has a type of function just like other data types too
// console.log('hello world')
// }

//greet='hello'//there will be an error cos we are later setting stuff to be equal to a string which is expected to be function

//let greet: Function //we are explicitly stating that the variable we are declaring should be a function, but notice that function starts with 'capital F' here

//greet = () => {
console.log('hello, again')
//} //no errors cos we already declared that stuff should be function

//in the code below, we are sying that values that should be passed inside of a and b should be numbers and then c is optional which could be a number or a string and we set the default value to be 10 which can change anytime to be a string or a number and we console log it
//const add = (a: number, b: number, c: number | string = 10) => {
// console.log(a+b)
//console.log(c) //hover over this and it shows void becasue we are not returning anything unlike the one below which returns a number or somthing , void is different from undefined
//}

//add(5, 10, 'gt')

//WHEN WE CREATE A FUNCTION AND RETURN A VALUE

//the :number at the end does not really matter right //since it is expectd that a number will be returned

// const minus = (a: number, b: number): number => {
//return a + b
//}
//ts knows that what will be returned from the above should be a number and hence expects you to pass in a number, so i cannot say that result='food'  no!!!

//let result = minus(20, 17)
//console.log(result)

//WORKING WITH TYPE ALIASES, basically we can make use of the alias since we know that we will be needing it again later, just like representing that with a variable but type this time. so if more stuffs are created in the future, then we won't have to rewrite stuffs

type StringOrNum = string | number //we can use this later anywhere we will be needing it

type uidName = { name: string; num: number | boolean } //object and the stuffs inside must take that format

let titi: uidName
//the benefits of aliases
titi = {
  name: 'kolapo',
  num: 65,
}

let good: StringOrNum
good = 'tyr'

const greety = (a: StringOrNum, b: number) => {}

//FUNCTION SIGNATURES, this describes the general structure of a function, what argument it takes in and what type of data it returns

//()=>void , this function is taking no argument and it is returning void

//Example 1
let greet: (a: string, b: string) => void //meaning must return void and this is the signature
greet = (name: string, greeting: string) => {
  // console.log(`${name} says ${greeting}`)
}

//Example 2
let calc: (a: number, b: number, c: string) => number //this is the signature
//i.e return number
//the main purpose is that when we are writing our functions, the functions should take the same type that we had in the say calc, but the naming could be different

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}

type fish = { name: string; age: number }

//Example 3
let logDetails: (obj: { name: string; age: number }) => void
//what is inside of the brackets is the parameters

logDetails = (ninja: { name: string; age: number }) => {
  // console.log(`ninja.name is ${ninja.age} years old`)
}

type stringOrNum = number
let radio: stringOrNum

let radial: Function

radial = (a: stringOrNum, b: stringOrNum) => {
  return a + b
}

// console.log(radial('foo', 5))

//for the function signatures, say that we have
type fishpie = { a: number; b: number } //this is for the alias

let rad: (a: number, b: number) => void

//rad = (aa: number, bb: number) => {}




//DOM INTERACTION AND TYPECASTING

//just like javascript, we can use the typescript to interact with the DOM, like eventlisteners, buttonclicks, adding styles and the likes

const anchor = document.querySelector('a') //we are selecting all the anchors in the html
console.log(anchor?.href) //meaning if anchor does exists then console.log the href of the anchor tag
// console.log(anchor?.firstChild) //same rules here

const form = document.querySelector('.new-item-form')
console.log(form?.children) //console.log the diff children that we have inside of the form, and do not forget that the form that we used as a variable name is normal form that is recognized by typescript, you can also name it your own way.

//INPUTS
const type = document.querySelector('#type') as HTMLSelectElement //as it is in our html this is called TYPECASTING
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
let amount = document.querySelector('#amount') as HTMLInputElement

form?.addEventListener('submit', (e: Event) => {
  // Event just like Function--capital letter
  e.preventDefault()
  console.log(type.value)
  console.log(details.value)
  console.log(toFrom.value)
  console.log(amount.valueAsNumber)
  //valueAsNumber will bring the stuff out as a number and not just like a string
})

let user: [number, string, boolean] //tuples
user = [1, 'food', false]

let dev: [number, string, boolean] = [1, 'food', false] //can be written like this also

//TUPLES ARE LIKE ARRAYS THAT WE CAN MAP THROUGH ALSO
user.map((indi) => {
  console.log(indi)
})

//ENUMS--lists of related constants
const small = 1
const medium = 2
const large = 3

const enum Size {
  small = 1,
  Medium,
  Large,
}
let mySize = Size.Medium
console.log(mySize)

function incomeTax(income: number): number {
  if (income < 2000) {
    return 0
  } else {
    return 6
  }
}

let employee: { name: string | number; age: number } = { name: 'teju', age: 90 } //better set stuffs like this rather than saying employee= this and that again

let employ: { name: string | number; age: number } = {
  name: 'teju',
  age: 90,
}

//INTERSECTIONs just like uniouns is another way of combinig stuffs

let weight: number & string //does not make sense tho but there are cases when you have to combine stuffs together


//LITERAL TYPES
let quantity: 50 | string = 50 //meaning that if we are to set the quantity to a number, it must be 50 and not any other value, also we can have it as a string, no problem
