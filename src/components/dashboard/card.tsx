"use client";
import React from "react";
import Link from "next/link";
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
const Card:React.FC<Institution>=({id,name,address,city,state,pinCode,admins}:Institution)=>{
    return(
        <Link href={`/institution/${id}`}>
            <div className="flex flex-col items-start justify-around m-10 border-2 p-10 rounded-4xl cursor-pointer">
                <h1>{name}</h1>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{state}</h3>
                <h3>{pinCode}</h3>
            </div>
        </Link>
    );
}

export default Card;