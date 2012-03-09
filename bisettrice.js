var bisettrice = function (p) {
	return p.y - p.x > 0;
	
}
var planFilter = function (punti, f) {
  var pts = punti || [];

  	var res = [];

  for(var i = 0; i < punti.length; i++){
	if( f(punti[i]) )
	res.push(punti[i]);
}
return res;
}
