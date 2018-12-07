import React from 'react'
import { connect } from 'react-redux'
import {addFirstInput, addSecondInput } from './state/add'



class Add extends React.Component {

    render() {
        return (
            <div>
                <h2> Results : {
                    Number(this.props._first) + Number(this.props._second)
                }
                </h2>
                <input
                    type="number"
                    value={this.props._first}
                    onChange={this.props._addFirstInput}
                >
                </input>
                <input
                    type="number"
                    value={this.props._second}
                    onChange={this.props._addSecondInput}
                >
                </input>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    _first: state.add.first,
    _second: state.add.second
})
const mapDispatchToProps = dispatch => ({
    _addFirstInput: event => dispatch(addFirstInput(event.target.value)),
    _addSecondInput: event => dispatch(addSecondInput(event.target.value))
})




export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)