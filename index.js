const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newArray = tutorials.map(function(item){

  })
  return newArray
  

  }

  function newTitleCase(string) {
    let stringArray = string.split("");
    for(let i in stringArray){
      stringArray[i] = stringArray[i] = stringArray[i][0].toUpperCase()  + stringArray[i].slice(1);
    }
    return stringArray.join("");
  }
