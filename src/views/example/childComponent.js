import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {
        let { jobList } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false ?
                    <>
                        <div>
                            <button onClick={this.handleShowHide}>Show</button>
                        </div>
                    </>
                    :
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