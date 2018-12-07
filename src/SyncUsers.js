import React from "react"
import { database } from './firebaseConfig'

class SyncUsers extends React.Component {

    state = {
        data: null
    }

    componentDidMount() {
        database.ref('/jfddl6/randomusers').once(
            'value',
            snapshot => {
                const arrayOfUsers = snapshot.val().results
                this.setState({ data: arrayOfUsers })
            }
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
export default SyncUsers