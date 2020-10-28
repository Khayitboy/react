import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
    debugger;
    if (props.users.length === 0){
        props.setUsers([
            { id: 1, photoUrl:'./static/media/banner.927e6ffb.jpg', followed:false, fullName: "Dmitry", status: 'I am a boss', location:{city:'Minsk', country:'Belarus'} },
            { id: 2, photoUrl:'./static/media/banner.927e6ffb.jpg', followed:true, fullName: "Sasha", status: 'I am a boss', location:{city:'Moscow', country:'Russia'} },
            { id: 3, photoUrl:'./static/media/banner.927e6ffb.jpg', followed:true, fullName: "Khayitboy", status: 'I am a boss', location:{city:'Tashkent', country:'Uzbekistan'} }
        ])
    }
    

    return (  <div>
        {
            props.users.map(u =>  <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={ () => {props.unfollow(u.id)}}>UnFollow</button>:<button onClick={ () => {props.follow(u.id)}}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
    )
    
}

export default Users;