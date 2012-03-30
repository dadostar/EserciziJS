var cubo = function(){
	var dom = DOMAIN([[0,1],[0,1],[0,1]])([10,10,10]);
	COLOR([0,0,0])(dom);
	DRAW(dom);
}

var parallelepipedo = function(l){

	var dom = DOMAIN([[0,1]])([20]);
	var parallelepipedo = MAP(function(p){
		var u = p[0];
		return [5*u,3*u,1.5*u];
	})(dom);
	COLOR([0,0,0])(parallelepipedo);
	DRAW(parallelepipedo);

}