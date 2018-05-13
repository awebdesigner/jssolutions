/*
*Version: 1
*/
//Source object. 
//An array containing objects as values.
const students =[
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
  let newArr = [] // will hold an array of new objects
  for( i = 0; i < propSource.length; i++ ) //Loop through the array
  	newArr.push( Object.assign( {score: '', term: 0 }, propSource[i] ) ) //{score: '', term: 0 } new properties to assign a new object. propSource[i] is object and source for old properties(props).  
  return newArr // Return the array
}

console.log( copyProps( students ) ) // See result in console

/*
*Similar solution. Different approach. Advanced code to some.
*Version: 2
*/

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
];

function copyProps( propSource ) { //We don't loop. Array.map() will loop for us
  return Object.assign( {score: '', term: 0 }, propSource )
}

console.log( students.map( copyProps ) ) //array.map used.
