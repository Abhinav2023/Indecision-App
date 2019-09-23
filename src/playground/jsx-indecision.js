console.log('App.js is running');

var app={
    title: "Indecision App",
    subtitle: "Put your life in the hands of computer",
    options: []
};

const onFormSubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        renderApp();
    }
}

const onDelete=()=>{
    if(app.options.length>0){
        app.options=[];
        renderApp();
    }
}

const whatIDo=()=>{
    const num=Math.floor(Math.random()* app.options.length);
    const val=app.options[num];
    alert(val);
}

var appRoot=document.getElementById('app');

function renderApp(){
    var template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ? "Here Are your options" : "None Options"}</p>
            {app.options.length};
            <button disabled={app.options.length===0} onClick={whatIDo} >What I do</button>
            <button onClick={onDelete}>Delete All The Options</button>
            <ol>
            {
                app.options.map((option)=><li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Options</button>
            </form>
        </div>
    )
    ReactDOM.render(template,appRoot);
}

renderApp();