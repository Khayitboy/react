import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().dialogsPage;
//                 let addMessage2 = () => {
//                     store.dispatch(addMessageActionCreator());
//                 } 
//                 let onMessageChange2 = (text) => {
//                     store.dispatch(onMessageChangeActionCreator(text));
//                 } 
//                 return (
//                     <Dialogs 
//                     addMessage2={addMessage2} 
//                     onMessageChange2={onMessageChange2} 
//                     dialogsPage={state} 
//                     />
//                 )}
//             }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addMessage2: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange2: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        }
    } 
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;