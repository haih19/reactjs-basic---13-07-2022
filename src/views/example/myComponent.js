import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Mark',
        age: 24
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnClick = () => {
        alert('clicked!')
    }



    render() {
        console.log(this.state);
        return (
            <>
                <div className="information">
                    <label htmlFor="">Enter your name:</label>
                    <input onChange={this.handleOnChangeName} type="text" value={this.state.name} />
                </div>
                <div className="information">
                    <label htmlFor="">Enter your age:</label>
                    <input onChange={this.handleOnChangeAge} type="text" value={this.state.age} />
                </div>
                <div className="display">
                    <div>My name's {this.state.name}</div>
                    <div>My age's {this.state.age}</div>
                </div>

                <div className="third">
                    <button onClick={this.handleOnClick}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent