import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";


class MyComponent extends React.Component {

    state = {
        arrJob: [
            {
                id: 1,
                title: 'Tester',
                salary: 500
            },
            {
                id: 2,
                title: 'Developer',
                salary: 750
            },
            {
                id: 3,
                title: 'QA',
                salary: 700
            }
        ]
    }



    render() {
        return (
            <>
                <AddComponent></AddComponent>

                <ChildComponent
                    jobList={this.state.arrJob}
                >

                </ChildComponent>
            </>
        )
    }
}

export default MyComponent