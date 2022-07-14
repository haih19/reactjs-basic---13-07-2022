import React from "react";


class AddComponent extends React.Component {


    state = {
        titleJob: '',
        salary: ''
    }

    handleOnChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>>Check state: ", this.state);
    }

    render() {
        return (
            <>
                <form action="/action_page.php" >
                    <label htmlFor="">Job title:</label><br />
                    <input onChange={this.handleOnChangeTitleJob}
                        type="text" id="fname" value={this.state.titleJob} />
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