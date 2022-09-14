class information {
    constructor(name = "Anonymous" , age = 0 ){
        this.name = name
        
        this.age = age
    
    }


    getinfo(){
        return `Hi. I am ${this.name}! and my age is ${this.age} `     
    }

}


class addT extends information{

    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }

    getinfo(){
        let getInfo = super.getinfo()

        if (this.homeLocation){
            getInfo += ` I'm visiting from ${this.homeLocation}.`
        }
return getInfo
    }

}

const me = new addT ("Khaled" ,19 , "Turkye,Karabuk")

console.log(me.getinfo())



const other = new addT()
console.log(other.getinfo())



