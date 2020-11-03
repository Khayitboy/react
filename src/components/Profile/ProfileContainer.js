import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);