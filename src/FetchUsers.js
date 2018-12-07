import React from "react"

class FetchUsers extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?results=10")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    data: data.results
                })
            )
    }

    render() {
        return (
            <div>
                {
                    this.state.data &&
                    this.state.data.map(user => (
                        <div key={user.login.uuid}>
                            <div>
                                <a href={"mailto: " + user.email}>{user.email}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default FetchUsers;