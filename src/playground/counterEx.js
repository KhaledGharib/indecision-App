
let count = 0

const incr = () =>{
	count+=1
	renderCounterApp()
}


const minus = ()=>{
	count-=1

	renderCounterApp()
}


const reset = () => {
count = 0
renderCounterApp()
}

const renderCounterApp = () => {
	const templete2 = (
		<div>
	
			<h1>count:{count}</h1>
			<button onClick={incr}>+1</button>
			<button onClick={minus}>-1</button>
			<button onClick={reset}>reset</button>
			
	
		</div>
	)
	
	ReactDOM.render(templete2,appRoot)
}



renderCounterApp()