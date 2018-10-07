
import {Vector} from './vector'; 
import {Test, TestList} from './test'; 

let v1 = new Vector([1,2,3]);
let v2 = new Vector([2,3,5]); 

console.log(v1.to_str());
console.log(Vector.sum(v1, v2)); 
console.log(Vector.dot(v1, v2)); 
console.log(Vector.scalar_prod(3, v1)); 


var tl = new TestList(); 

tl.add(new Test("Dot Product1", "T1=" + Vector.dot(v1, v2), (Vector.dot(v1, v2)==23))); 

console.log(tl.run()); 


