import React from "react";

class MyComponent extends React.Component {


    state = {
        name: 'Mark',
        age: 24,
        email: 'default',
        topic: 'default'
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

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangeTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    render() {

        return (
            <>
                <div className="form-container">
                    <div className="item item-1">
                        <h3>Send us a message</h3>
                    </div>

                    <div className="information-container">
                        <div className="item item-2">
                            <label htmlFor="">
                                Your name:
                            </label>
                            <input onChange={this.handleOnChangeName} type="text" />
                        </div>
                        <div className="item item-3">
                            <label htmlFor="">
                                Your age:
                            </label>
                            <input onChange={this.handleOnChangeAge} type="text" />
                        </div>
                        <div className="item item-4">
                            <label htmlFor="">
                                Email address:
                            </label>
                            <input onChange={this.handleOnChangeEmail} type="text" />
                        </div>
                        <div className="item item-5">
                            <label htmlFor="">
                                Topic:
                            </label>
                            <input onChange={this.handleOnChangeTopic} type="text" />
                        </div>
                    </div>

                    <div className="item item-6">
                        <label htmlFor="">
                            Write your message:
                        </label>
                        <input type="text" />

                    </div>

                    <div className="item item-7">
                        <button type="submit">Send</button>
                    </div>

                </div>
                <div className="content">
                    <div className="name">Hello my name's {this.state.name}</div>
                    <div className="age">My age's {this.state.age}</div>
                    <div className="email">My email add's {this.state.email}</div>
                    <div className="topic">My topic's {this.state.topic}</div>
                </div>
            </>
        )
    }
}

export default MyComponent