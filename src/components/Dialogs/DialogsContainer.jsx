import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addMessage2: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    } 

}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    // withAuthRedirect
)(Dialogs);;