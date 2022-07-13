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



    render() {
        return (
            <>
                <div className="information">
                    <label htmlFor="">Enter your name:</label>
                    <input onChange={this.handleOnChangeName} type="text" />
                </div>
                <div className="information">
                    <label htmlFor="">Enter your age:</label>
                    <input onChange={this.handleOnChangeAge} type="text" />
                </div>
                <div className="display">
                    <div>My name's {this.state.name}</div>
                    <div>My age's {this.state.age}</div>
                </div>
            </>
        )
    }
}

export default MyComponent