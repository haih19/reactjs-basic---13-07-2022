import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeFName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeLName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let { title, salary } = this.state

        if (!title || !salary) {
            alert('Missing required params')
            return;
        }

        console.log(this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10),
            title: this.state.title,
            salary: parseInt(this.state.salary)
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title:</label><br />
                    <input
                        type="text" onChange={this.handleChangeFName} value={this.state.title} /><br /><br />


                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text" onChange={this.handleChangeLName} value={this.state.salary} /> <br /><br />

                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>

                {/* <div>
                    <div>My name is {this.state.title}</div>
                    <div>Last name is {this.state.salary}</div>
                </div> */}
            </>
        )
    }
}

export default AddComponent;