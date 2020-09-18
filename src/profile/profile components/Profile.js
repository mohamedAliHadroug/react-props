import React,{Fragment} from 'react'
import Fullname from './Fullname'
import Bio from './Bio'
import Profession from './Profession'


const Profile = ({children}) =>{
    const handlclick = (e) =>{
        // e.preventDefault()
        alert("I'm Mohamed Ali Hadroug")
    }
    return (
        <>
            <Fullname fname = " Mohamed Ali Hadroug " />
            <Bio bio = " Full STack Web Developer "/>
            <Profession profession = " Drug dealer " />
            <Fragment >{children}</Fragment>
            <br />
            <button onClick={handlclick}  style={{padding :"10px",margin:"20px", fontSize: "20px"}}>About me</button>
        </>
    )
}

export default Profile