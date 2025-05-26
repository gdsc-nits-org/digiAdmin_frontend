"use client";
import React from "react";
interface User{
    id:string;
    email:string;
    name:string;
    firebaseId:string;
    role:string;
    Institution:Institution;
}

interface Institution{
    id:string;
    name:string;
    address:string;
    city:string;
    state:string;
    pinCode:string;
    admins:User[];
}
const Card:React.FC<Institution>=({name,address,city,state,pinCode,admins}:Institution)=>{
    return(
        <div>
            {name}
            {address}
            {city}
            {state}
            {pinCode}
        </div>
    );
}

export default Card;