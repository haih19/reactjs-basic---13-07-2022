import React from "react";

// class ChildComponent extends React.Component {

//     state = {
//         firstName: '',
//         lastName: '',
//         arrJob: []
//     }

//     handleOnChangeFName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }

//     handleOnChangeLName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         alert('Submit')
//     }

//     render() {
//         let { name, age, address, jobList } = this.props;
//         console.log(jobList);

//         return (
//             <>
//                 <div>
//                     {
//                         jobList.map((element) => {
//                             return (<div key={element.id}>
//                                 Job: {element.title} - Salary: {element.salary}$
//                             </div>)
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    let { jobList } = props;

    return (
        <>
            <div>
                {
                    jobList.map((element) => {
                        return (<div key={element.id}>
                            Job: {element.title} - Salary: {element.salary}$
                        </div>)
                    })
                }
            </div>
        </>
    )
}

export default ChildComponent