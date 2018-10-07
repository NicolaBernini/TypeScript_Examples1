
export class Test
{
    private name: string; 
    private description: string; 
    private cond: boolean; 
    
    constructor(name: string, description:string, cond: boolean)
    {
        this.name = name; 
        this.description = description; 
        this.cond = cond; 
    }
    
    get_name(): string 
    {
        return this.name; 
    }
    
    check(): string
    {
        let res = "[" + this.name + "] (" + this.description + ") --> "; 
        if(this.cond) return res + "SUCCESS"; 
        return res + "FAILED"; 
    }
}


export class TestList
{
    private list: Test[]=[]; 
    
    constructor()
    {
        //this.list = new Test()[]; 
    }
    
    add(t: Test)
    {
        this.list.push(t); 
    }
    
    run(): string 
    {
        var res = "------- Running Tests -------\n"; 
        for(let t of this.list) res += t.check() + "\n"; 
        return res; 
    }
}
