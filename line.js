var Line = function (a,b,c) {
	
	if(!(this istanceof Line)){
		return new Line(a,b,c);
	}
	this.a = a || 0;
	this.b = b || 0;
	this.c = c || 0;
}