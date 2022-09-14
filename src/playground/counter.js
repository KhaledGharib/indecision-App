class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handlerest=this.handlerest.bind(this)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        const stringCount=localStorage.getItem('count')
        const count= parseInt(stringCount,10)
        if(!isNaN(count)){
            this.setState(()=>({count}))
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!== this.state.count){
            localStorage.setItem("count",this.state.count)
        }
      }

    handleAddOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        })
    }
    handleMinusOne(){

        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            }
        })

    }
    handlerest(){

        this.setState(()=>{
            return{
                count:0
            }
        })

    }
    render(){
        return(

            <div>
            
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handlerest}>reset</button>
                
            </div>

        )

    }
}

ReactDOM.render(<Counter/>,document.getElementById("app"))

// let count = 0
// const addOne = ()=>{

//     count++
//     renderApp()
// }
// const miusone = () =>{

//     count-=1
//     renderApp()
// }
// const reset = () =>{
    
//     count=0
//     renderApp()
// }





// const appRoot= document.getElementById('app');

// const renderApp=()=>{
//     const template2 =(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={miusone}>-1</button>
//             <button onClick={reset}>reset</button>
        
//         </div>
//     )
    
    


//     ReactDOM.render(template2,appRoot) 


// }


// renderApp()