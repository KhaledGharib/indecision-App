//render, constructor, handleToggleVisibailtiy
//visibility -> fales

let visibality =false

const toggle = () => {

	visibality = !visibality;
runderr()
}

const runderr = ()=>{
	const templete =(
		<div>
			<h1>Toggle Button</h1>
				<button onClick={toggle}>
					{visibality ? "Don't click on me" : "Ohh.. hey there!"}			
				</button>
				{visibality && (
					<div>
						<p>siuuuuuuuuuuuu</p>
					</div>
				)}
			</div>
		)
	ReactDOM.render(templete, document.getElementById("app"));

}

runderr()

