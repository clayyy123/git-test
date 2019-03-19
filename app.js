function numbers() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}

function numbersTwo() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}

functionDeclaration();
alert();

var functionDeclaration = function() {
  console.loeg('hi');
};

function alert() {
  alert('this is an alert');
}

//write function called reverse where it reverses a string.
//Hint: use concatenation and for loop

function reverse(string) {
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
    return reverseString;
  }
}

reverse('boogers');

('sregoob');

var word = 'hello';
word.length = 5;
word[0] = 'h';
