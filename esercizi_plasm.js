var cubo = function(){
	var dom = DOMAIN([[0,1],[0,1],[0,1]])([10,10,10]);
	COLOR([0,0,0])(dom);
	DRAW(dom);
}

var parallelepipedo = function(l){

	var dom = DOMAIN([[0,1],[0,1],[0,1]])([20,20,20]);
	var parallelepipedo = MAP(function(p){
		var u = p[0];
		return [5*p[0]*l,3*p[1]*l,1.5*p[2]*l];
	})(dom);
	COLOR([0,0,0])(parallelepipedo);
	DRAW(parallelepipedo);

}

var sfera = function(l){
	var dom = DOMAIN([[0,PI],[0,2*PI]]);
	var sfera = MAP(function(p){
		var u = p[0]-PI/2;
		var v = p[1]-PI;
		return [Math.cos(u)*Math.cos(v)*l,Math.cos(u)*Math.sin(v)*l,Math.cos(u)*l];
	})(dom);
	COLOR([0,0,0])(sfera);
	DRAW(sfera);

}


