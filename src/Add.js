import React from 'react'
import { connect } from 'react-redux'



class Add extends React.Component {
    state = {
        first: this.props.first,
        second: this.props.second
    }

    addFirstInput = event => {
        this.setState({
            first: event.target.value 
        })

    }

    addSecondInput = event => {
        this.setState({
            second: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2> Results : {
                    Number(this.state.first) + Number(this.state.second)
                }
                </h2>
                <input
                    type="number"
                    value={this.state.first}
                    onChange={this.addFirstInput}
                >
                </input>
                <input
                    type="number"
                    value={this.state.second}
                    onChange={this.addSecondInput}
                >
                </input>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    first: state.add.first,
    second: state.add.second
})
const mapDispatchToProps = dispatch => ({

})



// Add.defaultProps = {
//     first: 3,
//     second: 4
// }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)