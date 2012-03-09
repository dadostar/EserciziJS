var filtraesomma = function (arr) {
	return arr.filter(function(it){return it >0; }).reduce(function(sum,curr){ return sum + curr ;})
}