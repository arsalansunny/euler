var sum = 0
var calcLimit = prompt("Find the sum of multiples of 3 and 5 upto ?")
for (var i=0 ; i<calcLimit ; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum = sum+=i
	}
}
console.log(sum)
