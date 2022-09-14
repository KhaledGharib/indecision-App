
const appRoot = document.getElementById("app")

let info = {
	title:"Indecision App",
    subtitle:"Put your life in the hands of a computer",
   option:[ ]
}

const formOnSubmit = (e) => {
	e.preventDefault()
	
	const option = e.target.elements.option.value

	if (option) {
		info.option.push(option)
		e.target.elements.option.value = ""
		runderForm()
	}
}

const remove = ()=>{
info.option = []
runderForm()
}


const pick = ()=> {

	const randomNum = Math.floor(Math.random() * info.option.length)
	const option = info.option[randomNum]
	alert(option)

}

const runderForm = () =>{

	const templete =( 
		<div>
			<h2>{info.title ? info.title : "anonymous"}</h2>
			<p>{info.subtitle}</p>
			<p>{info.option.length > 0 ? "Here your options" : "No options"}</p>
			<p>{info.option.length}</p> 
				<ol>
					{
						info.option.map((option)=> <li key={option}>{option}</li>)
					}
				</ol>
			<form onSubmit={formOnSubmit}>
				<input  type="text" name="option"/>
				<button>Add Option</button>
			</form>
			<button onClick={remove}>remove All</button>
			<button disabled={info.option.length === 0} onClick={pick}>pick</button>

	
			</div>
	)
	
	
	
	ReactDOM.render(templete , appRoot)

}


runderForm()




