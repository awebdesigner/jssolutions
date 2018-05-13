/*
*Copy properties from one JS object to another object.
*The object you are copying from is called a source object.
*The source object is not affected at all.
* Notes: 
********* 1). Omitted semi-colons to terminate statements since JavaScript allows.
********* 2). Omitted the curly brackets because I have one statement nested in the for loop
*Version: 1
*/
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

function addProps( addTo ) {
  let newArr = []
  for( i = 0; i < addTo.length; i++ ) //
  	newArr.push( Object.assign( {score: '', term: 0 }, addTo[i] ) )
  
  return newArr
}

console.log( addProps( students ) )

/*
* Same solution, approached differently for less but advanced code.
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

function addProps( addTo ) {
  return Object.assign( {score: '', term: 0 }, addTo )
}

console.log( students.map( addProps ) )
