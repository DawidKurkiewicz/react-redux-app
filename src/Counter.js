import React from 'react'
import PropTypes from 'prop-types';



class Counter extends React.Component {
    state = {
        value: this.props.startValue
    }

    plusHandler = () => {
        this.setState({ value: this.state.value + 1 })
    }

    minusHandler = () => {
        this.setState({ value: this.state.value - 1 })
    }


    render() {
        return (
            <div>
                <h1>
                    {this.state.value}
                </h1>
                <button
                    onClick={this.plusHandler}>
                    +
                </button>
                <button
                    onClick={this.minusHandler}>
                    -
                </button>

            </div>

        )
    }
}


Counter.defaultProps = {
    startValue: 3
}

Counter.propTypes = {
    startValue: PropTypes.number.isRequired
  }

export default Counter