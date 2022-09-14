class Toggle extends React.Component{
constructor (props){
	super(props)
	this.handlevisibilty = this.handlevisibilty.bind(this)
	this.state={
		visibality : false
	}
}
handlevisibilty(){
	this.setState((prevState)=>{
		return{
		visibality : !prevState.visibality
		}
	})
}
	render(){

		return(
			<div>
			<h1>Toggle Button</h1>
				<button onClick={this.handlevisibilty}>
					{this.state.visibality ? "Don't click on me" : "Ohh.. hey there!"}			
				</button>
				{this.state.visibality && (
					<div>
						<p>siuuuuuuuuuuuu</p>
					</div>
				)}
			</div>
		)
	}
}




ReactDOM.render(<Toggle/>, document.getElementById("app"))