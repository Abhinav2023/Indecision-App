import React from "react";

export default class AddOptions extends React.Component {
    state={
        error: undefined
    };
    addOptions =(e)=> {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOptions}>
                    <input className="add-option__input"type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}