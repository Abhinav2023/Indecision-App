class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.RemoveAll=this.RemoveAll.bind(this);
        this.RandomPick=this.RandomPick.bind(this);
        this.AddOption=this.AddOption.bind(this);
        this.RemoveOption=this.RemoveOption.bind(this);
        this.state={
            options:props.options
        };
    };

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
              this.setState(() => ({ options }));
            }
        } catch (e) {
        // proton bsdk
        }
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
          }
    }
    componentWillUnmount(){
        console.log("Unmounting the component")
    }

    RandomPick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    RemoveAll(){
        this.setState(()=>({options: []}))
    }

    RemoveOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove!==option)
        }));
        
    }

    

    AddOption(option){
        if(!option){
            return "Enter Valid entry to add item"
        }else if(this.state.options.indexOf(option)>-1){
            return "This already exist";
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put Your Life in the hands of computer";
        return (
            <div>
                <Header />
                <Action RandomPick={this.RandomPick} hasOption={this.state.options.length >0}/>
                <Options options={this.state.options} RemoveAll={this.RemoveAll} RemoveOption={this.RemoveOption}/>
                <AddOptions AddOption={this.AddOption}/>
            </div>
        );
    }
}

Indecision.defaultProps={
    options: []
}

const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}
Header.defaultProps={
    title: "Indecision",
    subtitle: "Put Your Hands in the control of keyboard"
}


const Action=(props)=>{
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.RandomPick}>What I do?</button>
        </div>
    );
}


const Options=(props)=>{
    return(
        <div>
            <p>Options Compnents Here!!</p>
            <button onClick={props.RemoveAll}>Delete All</button>
            {props.options.length===0 && <p>Please add a option</p>}
            {props.options.map(option => <Option key={option} optiontext={option} RemoveOption={props.RemoveOption}/>)}
        </div>
    )
}

const Option=(props)=>{
    return(
        <div>
            {props.optiontext}
            <button onClick={(e)=>{props.RemoveOption(props.optiontext)}}>Remove</button>
        </div>
    )
}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.addOptions=this.addOptions.bind(this);
        this.state={
            error: undefined
        }
    }
    addOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error= this.props.AddOption(option);
        this.setState(() => ({ error }));
  
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Indecision />, document.getElementById('app'));

