//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//8) Write a function called 'twins' which takes an array and returns true if every pair of items in the array is the same.

//8a) twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
//8b) twins(['a', 'a', 'b', 'z']) should return false
//8c) twins(['a', 'a', 'b']) should return false
//8d) twins(['a', 'a', 'b', undefined]) should return false

var twins = function (userInput){
	var i;
	var l = userInput.length;
	//console.log(userInput.length);
	if (l % 2 === 1) {
		// console.log("false");
		return false;
	}	
	for (var i=0; i<l; i+=2){	
		if (userInput[i] !== userInput[i+1]){
			// console.log("false");
			return false;
		}
	}
	return true;
};	
//8a) 
// twins(['a', 'a', 'b', 'b', 'c', 'c']) //should return true
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
//8b)
// twins(['a', 'a', 'b', 'z']) //should return false
console.log(twins(['a', 'a', 'b', 'z']));
//8c) 
// twins(['a', 'a', 'b']) //should return false
console.log(twins(['a', 'a', 'b']));
//8d) 
// twins(['a', 'a', 'b', undefined]) //should return false
console.log(twins(['a', 'a', 'b', undefined]));