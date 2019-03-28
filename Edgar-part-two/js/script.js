const eventType = prompt('What type of event are you attending?');
const tempFahr = parseFloat(prompt('What is the temperature?'), 10);

let result;

if (eventType === 'casual') {
  result = 'something comfy';
}
if (eventType === 'semi-formal') {
  result = 'a polo';
}

if (eventType === 'formal') {
  result = 'a suit';
}



if (tempFahr > 70){
  result += ' & no jacket';
} else if (tempFahr > 53) {
  result += ' & a jacket';
} else {
  result += ' & a coat';
}

// result += ' a coat'


console.log(result);
// console.log('testing')
