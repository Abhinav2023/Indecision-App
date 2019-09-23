// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

class Visible extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility=this.toggleVisibility.bind(this);
        this.state={
            visiblility: false
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        })
    }
    render(){
        return (
            <div>
            <h1>Visible Toggle</h1>
            <button onClick={this.toggleVisibility}>
                {this.state.visibility ? "Hide Details" : "Show Details"}
            </button>
            {
                this.state.visibility && (
                    <p>Hey. these are some details of you</p>
                )
            }
            </div>
        )
    }
}

ReactDOM.render(<Visible />,document.getElementById('app'));