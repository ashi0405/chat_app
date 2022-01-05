import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import { selectUser } from './features/userSlice'
import "./Msg.css"
import {useSelector} from "react-redux"

const Msg=forwardRef(
    ({id,contents:{
    timestamp,displayName,email,message,photo,uid}
},ref )=> {
    const user=useSelector(selectUser)
    return (
        <div ref={ref} className={`msg ${user.email===email && "message_sender"}`}>
            <Avatar className="message_photo" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )}
)
export default Msg
