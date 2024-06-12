let a=[1,2,"ritista",true];
console.log(a);
console.log(a[0]);
console.log(a[2]);
console.log(a.length);//length of array
console.log(typeof a);//type of array(object)
a[1]="shrestha";//changing the value of second object
console.log(a[1]);
console.log(a);

a.push("hari");
console.log(a);

a.pop();
console.log(a);


//forloop
console.log("for loop");
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}

//shift
console.log(a);
a.shift();
console.log(a);

//unshift
a.unshift("good")
console.log(a);


let c;
console.log(c);
console.log(typeof c);

let d=null;
console.log(d);
console.log(typeof d);


//for of
for(index of a){
    console.log(index);
}

//for in
for(index in a){
    console.log(a[index]);
}

a.forEach((element) => {
    console.log(element);
});


