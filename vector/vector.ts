
//////////// LIBRARY ///////////////////
//declare module module_vector
//{
class Vector
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
      */
    static fromEmpty() { return new this([]); }

    static sum(v1: Vector, v2: Vector) : Vector
    { 
        if (v1.size() != v2.size()) throw new Error("Sizes to no match"); 
        return v1; 
    }
}

//export { Vector }; 
    
//}

///////////////// TEST /////////////////////

let v1 = new Vector([1,2,3]); 
let v2 = Vector.fromEmpty(); 

document.body.innerHTML = v1.to_str(); 

