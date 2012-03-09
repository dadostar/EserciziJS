var Punto = function (x , y) {
	
	this.x = x || 0;
	this.y = y || 0;
	
}

Punto.prototype.getDistanza = function (p) {
		
		return Math.sqrt(Math.pow((p.x - this.x),2)+Math.pow((p.y - this.y),2));
		
	};
	

var Triangolo = function (p1 , p2 , p3) {
	
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	
}

Triangolo.prototype.getPerimetro = function () {
		return this.p1.getDistanza(p2) + this.p1.getDistanza(p3) + this.p2.getDistanza(p3);
		
	};
	
	
Triangolo.prototype.getArea = function () {
			
			var p = this.getPerimetro() / 2;
			var a = this.p1.getDistanza(this.p2);
			var b = this.p1.getDistanza(this.p3);
			var c = this.p2.getDistanza(this.p3);
			
			return Math.sqrt(p * (p - a) * (p - b) * (p - c));
			
		}
		
Punto.prototype.translate = function (dx,dy) {
	
	this.x += dx;
	this.y += dy;
	
	return this;
	
}

var rand = function (minim,maxim) {
	return minim + Math.random() * (maxim - minim);
	
}

var RandomPoint = function () {
	var p = new Punto(rand(-100,100),rand(-100,100));
	return p ;
}


var generaNpunti = function (n) {
	var res = [];
	for (var a = 0; a < n ; a++) {
		res.push(RandomPoint());
		
	}
	
	return res;
	
}











