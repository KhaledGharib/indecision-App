const appRoot= document.getElementById('app');

const app = {
    'title' :"Indecision",
    'subtilte': "put your life in the hands of a computer",
    'options':[]
}

const onFormSubmit=(e)=>{
    e.preventDefault()

    const option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value=''
        renderApp()
    }

}

const wipe=()=>{
    
    app.options=[]
    
    renderApp()
}
const makeDeciion = () =>{
    const randomNum = Math.floor(Math.random()*app.options.length)
    const option = app.options[randomNum]
    alert(option)
}
const renderApp=()=>{
    const template =(
        <div>
        
            <h1>{app.title}</h1>
            {app.subtilte && <p>{app.subtilte}</p>}
            {app.options.length > 0 ? 'Her are your options':'No options'}
            <p>{app.options.length}</p>
           <button onClick={wipe}>Remove all</button>
           <button disabled={app.options.length ===0} onClick={makeDeciion}>pick some thing</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>)
        
    
    
    
    ReactDOM.render(template,appRoot) 
    
}



renderApp()