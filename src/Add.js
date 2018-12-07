import React from 'react'


class Add extends React.Component {
state = {
    first: this.props.first,
    second: this.props.second
}

addFirstInput = element => {
    this.setState ({
        first: element.target.value
    })

}

addSecondInput = element => {
    this.setState ({
        second: element.target.value
    })
}





    render() {
        return (

            <div>
                <h2> Results : {
                    parseInt(this.state.first) + parseInt(this.state.second)
                }
                 </h2>
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