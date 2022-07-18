import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";

class MyComponent extends React.Component {

    state = {
        arrJob: [
            {
                id: 1,
                title: "Developer",
                salary: 750
            },
            {
                id: 2,
                title: "BA",
                salary: 450
            },
            {
                id: 3,
                title: "Marketing",
                salary: 250
            }
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteAJob = (job) => {
        let currentJOb = this.state.arrJob;

        currentJOb = currentJOb.filter(element => element.id !== job.id);

        this.setState({
            arrJob: currentJOb
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJob={this.state.arrJob}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent