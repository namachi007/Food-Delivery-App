import React from "react";

class MemberCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <h1>This is about page using class based component</h1>
                <h2>name: {this.props.name}</h2>
            </div>
        )
    }
}

export default MemberCard