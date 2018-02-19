
// initiates num for the sum
num = 0;

// For each input from the process do the following..
process.argv.forEach(function(value, i) {
	  if(i == 0){

	  }
	  else if(i == 1){

	  }
	  else{
	  	var number = Number(value);
	  	num += number;
	  }
})
console.log(num);