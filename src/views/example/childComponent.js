import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { jobList } = this.props;
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ? //neu showjob = false thi
                    <div>
                        <button onClick={this.handleShowHide}>Show</button>
                    </div>

                    ://showjobs === true then do the task
                    <>
                        <div>
                            {
                                jobList.map((element) => {
                                    return (
                                        <div key={element.id}>
                                            Job: {element.title} - Salary: {element.salary}$
                                        </div>)
                                })
                            }
                        </div>
                        <div>
                            <button onClick={this.handleShowHide}>Hide</button>
                        </div>
                    </>
                }

            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { jobList } = props;

//     return (
//         <>
//             <div>
//                 {
//                     jobList.map((element) => {
//                         return (<div key={element.id}>
//                             Job: {element.title} - Salary: {element.salary}$
//                         </div>)
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent