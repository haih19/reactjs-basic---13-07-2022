import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleOnChangeFName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('Submit')
    }

    render() {
        return (
            <>
                <div>Child Component {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent