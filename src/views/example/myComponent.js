import React from "react";

class MyComponent extends React.Component {

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
                <form action="/action_page.php" >
                    <label htmlFor="">First name:</label><br />
                    <input onChange={this.handleOnChangeFName}
                        type="text" id="fname" value={this.state.firstName} />
                    <br />
                    <label htmlFor="">Last name:</label><br />
                    <input onChange={this.handleOnChangeLName}
                        type="text" id="lname" value={this.state.lastName} /> <br /><br />
                    <input onClick={this.handleSubmit}
                        type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default MyComponent