import React from "react"

class SyncUsers extends React.Component {
    state = {
        data: null
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
export default SyncsUsers