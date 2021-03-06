/**
  * @brief It defines a Vector Class supporting some basic operations 
  */
export class Vector
{ 
    private data: number[]; 
    // NOTE: Constructor can not be overloaded (yet) so instead of overloading use factory methods
    /**
      * @brief The Constructor builds from an Array   
      */ 
    constructor(_data: number[]) { this.data = _data; }

    //// VECTOR INTERFACE /////
    size(): number { return this.data.length; }
    get(i: number) : number 
    { 
        if (i >= this.data.length) throw new Error("Index out of bouds"); 
        return this.data[i]; 
    }
    
    put(i: number, v: number)
    {
        if (i >= this.data.length) throw new Error("Index out of bouds"); 
        this.data[i] = v; 
    }

    to_str(): string
    { 
        let res = "Size=" + this.data.length + " [";  
        for (var i = 0; i < this.data.length; i++)
        { 
            res += this.data[i]; 
            if (i < this.data.length - 1) res += ", "; 
        } 
        res += "]"; 
        return res; 
    }


    ///////// STATIC METHODS ////////
    /**
      * @brief Static Factory method  
      * @note Used instead of Constructor Overloading (which is not supported in TS)
      */
    static fromEmpty() { return new this([]); }
    static fromLength(n: number) 
    {
        var res = new Vector(new Array(n)); 
    }

    static sum(v1: Vector, v2: Vector) : Vector
    { 
        if (v1.size() != v2.size()) throw new Error("Sizes do not match"); 
        var res = new Vector(Array(v1.size())); 
        for(var i = 0; i < v1.size(); ++i) res.put(i, v1.get(i)+v2.get(i));
        
        return res; 
    }

    static sub(v1: Vector, v2: Vector) : Vector
    { 
        if (v1.size() != v2.size()) throw new Error("Sizes do not match"); 
        var res = new Vector(Array(v1.size())); 
        for(var i = 0; i < v1.size(); ++i) res.put(i, v1.get(i)-v2.get(i));
        
        return res; 
    }
    
    static dot(v1: Vector, v2: Vector) : number 
    { 
        if (v1.size() != v2.size()) throw new Error("Sizes do not match"); 
        let res = 0; 
        for(var i = 0; i < v1.size(); ++i) res += v1.get(i)*v2.get(i); 
        
        return res; 
    }
    
    static scalar_prod(k: number, v1: Vector) : Vector 
    { 
        var res = new Vector(Array(v1.size())); 
        for(var i = 0; i < v1.size(); ++i) res.put(i, v1.get(i)*k); 
        return res; 
    }
}

/////// JS FIDDLE TEST ///////////

/*
let v1 = new Vector([1,2,3]); 
let v2 = Vector.fromEmpty(); 

document.body.innerHTML += v1.to_str()+"<br/>"; 

let v3 = Vector.sum(v1, v1); 

document.body.innerHTML += v3.to_str()+"<br/>"; 
*/
