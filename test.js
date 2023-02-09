var foo = 'foo';

function bob(){
	
	var foo = 'foo2';
	if(true){
		var foo = 'foo3';
	}
	console.log(foo);
}

bob();

console.log(foo);


function b(){
	var myVar;
	console.log(myVar);

}

function a(){
	var myVar =2;
	console.log(myVar);
	b();
}

var myVar =1;
console.log(myVar);
a();
console.log(myVar);



var addTo = function(passed){
	var add = function(inner){
		return passed + inner;
	}
	return add;
}

var addSomeNumber = new addTo(3)(1);

console.log(addSomeNumber);


class x{
	B b = new B(this);
	console.log(b);

}

class B {
	B(X x) {
		console.log(x);
	}
}

//console.log(addSomeNumber(1));



