function numberIsPrime(num){
	for (var i = 2; i< num; i++){
		if (num%i ===0){
			return false;

		}
	}
	return true
}

function display (n){
	var array = [2];
	for (var i = 3; i < n; i +=2){
		if (numberIsPrime(i)){
			array.push(i); 
		}
	}
	console.log(array);
}
display(100);