import React from "react";


class AddComponent extends React.Component {


    state = {
        title: '',
        salary: ''
    }

    handleOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * (100 - 10) + 10),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })

    }

    render() {
        return (
            <>
                <form action="/action_page.php" >
                    <label htmlFor="">Job title:</label><br />
                    <input onChange={this.handleOnChangeTitleJob}
                        type="text" id="fname" value={this.state.title} />
                    <br />
                    <label htmlFor="">Salary:</label><br />
                    <input onChange={this.handleOnChangeSalary}
                        type="text" id="lname" value={this.state.salary} /> <br /><br />
                    <input onClick={this.handleSubmit}
                        type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default AddComponent;