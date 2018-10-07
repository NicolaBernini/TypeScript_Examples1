
import {Vector} from './vector'; 

let v1 = new Vector([1,2,3]);
let v2 = new Vector([2,3,5]); 

console.log(v1.to_str());
console.log(Vector.sum(v1, v2)); 
console.log(Vector.dot(v1, v2)); 
console.log(Vector.scalar_prod(3, v1)); 
