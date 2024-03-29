class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this);
        this.minusOne=this.minusOne.bind(this);
        this.reset=this.reset.bind(this);
        this.state={
            count: 0
        };
    }

    componentDidMount(){
        try{
            const count=parseInt(localStorage.getItem("count"), 10);
            if(count){
                this.setState(()=>({count}));
            }
        }
        catch(e){
            alert(e);
        }
    }
        

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            const count=parseInt(this.state.count,10);
            localStorage.setItem("count",count);
        }
    }

    addOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count +1
            };
        })
    }

    minusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            };
        })
    }

    reset(){
        this.setState((prevState)=>{
            return {
                count: 0
            }
        })
    }
    render(){
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />,document.getElementById('app'));