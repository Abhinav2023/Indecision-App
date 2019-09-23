import React from "react";
import AddOptions from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class Indecision extends React.Component {
    state={
        options: [],
        selectedOption: undefined
    }

    RandomPick=()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }))
    }

    RemoveAll=()=>{
        this.setState(()=>({options: []}))
    }

    RemoveOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove!==option)
        }));
        
    }

    handleClearSelection=()=>{
        this.setState(()=>({
            selectedOption:undefined
        }))
    }

    AddOption=(option)=>{
        if(!option){
            return "Enter Valid entry to add item"
        }else if(this.state.options.indexOf(option)>-1){
            return "This already exist";
        }
        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }

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

    

    render() {
        const title = "Indecision";
        const subtitle = "Put Your Life in the hands of computer";
        return (
            <div>
                <Header />
                <div className="background">
                    <div className="container">
                        <Action RandomPick={this.RandomPick} hasOption={this.state.options.length >0}/>
                        <div className="widget">
                            <Options options={this.state.options} RemoveAll={this.RemoveAll} RemoveOption={this.RemoveOption}/>
                            <AddOptions AddOption={this.AddOption}/>
                        </div>
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelection={this.handleClearSelection}
                    />
                </div>
                
            </div>
        );
    }
}