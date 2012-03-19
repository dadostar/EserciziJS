



var Node = function (x,y,l,c,r,f) {
	this.dx = y;
	this.sx = x;

	this.l = l;
	this.c = c;
	this.r = r;
	this.f = f;

	this.visited = false;

}


Node.prototype.isLeaf = function() {
	return this.l === null && this.r === null && this.r === null;
}

Node.prototype.split = function(n) {
	var sx;
	var dx;
	var head;

	(function(s,d,n){
		if(s < d && d < n)
		{
			sx = s;
			dx = n;
			head = d;

		}

		else  {
			sx = n;
			dx = d;
			head = s;
		};

	})(this.sx,this.dx,n);

	this.f.insertValue(head);
	this.f.l = 
	var nsx  = new Node(sx);
	var ndx  = new Node(dx);

}

Node.prototype.findSuccessor = function(x) {

}

Node.prototype.isFull = function() {
	return this.x !== null && this.y !== null;
}

Node.prototype.sortValues = function() {
	if (this.isFull()) {
		var c ;

		if (this.sx > this.dx) {
			
				c = this.sx;
				this.sx = this.dx;
				this.sx = c;
			
		};
		
			

	};

	
}

var BTree = function() {
	this.node = new Node();
}

BTree.prototype.insertValue = function(n){
	insertionNode = this.node.findSuccessor(n);
	

	while(this.insertionNode.isFull()){
		insertionNode = insertionNode.split();
	}
}






