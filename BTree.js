var Node = function (x,y,l,c,r,f) {
	var dx = y;
	var sx = x;

	var l = l;
	var c = c;
	var r = r;
	var f = f;

	var visited = false;

}

Node.prototype.isLeaf = function() {
	return this.l === null && this.r === null && this.r === null;
}

Node.prototype.split = function(n) {

}

Node.prototype.findSuccessor = function(x) {

}

Node.prototype.isFull = function() {
	return this.x !== null && this.y !== null;
}


var Btree = function(){

	var nodo = new Node();
	
}



Btree.prototype.insert = function(n) {

	insertionNode = this.node.findSuccessor(n);
	insertionNode.visited = true;

	if(this.insertionNode.isFull()){
		insertionNode.split();
	}
	else{
		if (this.x !== null) {
			var max = max(n,this.x);
			var min = min(n,this.x);
			this.y = max;
			this.y = min;
		}
		if (this.y !== null) {
			var max = max(n,this.x);
			var min = min(n,this.x);
			this.y = max;
			this.y = min;
		}
		 
	}

}



