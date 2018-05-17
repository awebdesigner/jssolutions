//Copy Object Props
//Source object. 
//Data source containing objects as values to an array.
//Note in JS an array is always an object.
const students = [
  {
      first: 'David',
      Last: 'Wampamba',
      id: '2015/2/Boarding'
  },
   {
    first: 'Moses',
    Last: 'Opio',
    id: '2015/3/Day'
  },
  {
    first: 'Francis',
    Last: 'Kyambadde',
    id: '2017/7/Boarding'
  }
]

//Function: copyProps. Accepts a single parameter. The parameter should be array contain object values

function copyProps( propSource ) {
  
  let newArr = [] //Will hold an array of new objects
  
  for( i = 0; i < propSource.length; i++ ) //Loop through the array
    
  	newArr.push( Object.assign( {score: '', term: 0 }, propSource[i] ) ) //{score: '', term: 0 } new properties to assign a new object. propSource[i] is object and source for old properties(props).  
  
  return newArr // Return the array
}

console.log( copyProps( students ) ) // See result in console

/*
* Solution: 2
* JS features to learn about.
* - Object.assign()
* - Array.map()
*/

function copyProps( propSource ) { //We don't loop. Array.map() will loop for us
  
  return Object.assign( {score: '', term: 0 }, propSource )
  
}

console.log( students.map( copyProps ) ) //array.map used.

/*
* Solution: 3
* Contributed by Ronald Kasendwa. 
* ES6 features to learn about.
* - Arrow functions
* - Spread operator
*/
students = students.map( student => ({...student, score:'', term:0 } ) )
console.log( students )

/*
 *Result from all the solutions above.
 *You can see new properties e.g score and term on each object.
*/
Array [
        Object { first: "David", Last: "Wampamba", id: "2015/2/Boarding", score: "", term: 0 }, 
        Object { first: "Moses", Last: "Opio", id: "2015/3/Day", score: "", term: 0 },
        Object { first: "Francis", Last: "Kyambadde", id: "2017/7/Boarding", score: "", term: 0 }
]
