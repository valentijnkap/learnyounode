
num = 0;
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