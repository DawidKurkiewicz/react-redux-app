import React from 'react'


class Add extends React.Component {
state = {
    sum: 0,
    first: this.props.first,
    second: this.props.second
}







    render() {
        return (

            <div>
                <h2> Results : {this.state.sum} </h2>
                <input
                    value={this.state.first}
                    onChange = {this.addFirstInput}
                >
                </input>
                <input
                    value={this.state.second}
                    onChange = {this.addSecondInput}
                >
                </input>

            </div>
        )
    }
}

Add.defaultProps = {
    first: 3,
    second: 4
}

export default Add