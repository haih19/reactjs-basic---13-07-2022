import React from "react";

class ChildComponent extends React.Component {

    state = {
        show: false
    }

    handleShowHide = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleDelete = (event) => {
        this.props.deleteAJob(event)
    }

    render() {
        let { arrJob } = this.props
        let { show } = this.state
        const marginLeft = {
            marginLeft: "12px"
        }
        return (

            <>
                <div>
                    {!show ?
                        <button onClick={this.handleShowHide}>show</button>
                        :
                        <>
                            <div>
                                {
                                    arrJob.map((element) => {
                                        return (
                                            <div key={element.id}>
                                                {element.title} - {element.salary}$
                                                <span
                                                    onClick={() => this.handleDelete(element)}
                                                    style={marginLeft}>X</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button onClick={this.handleShowHide}>hide</button>
                        </>
                    }
                </div>

            </>
        )
    }
}


export default ChildComponent;