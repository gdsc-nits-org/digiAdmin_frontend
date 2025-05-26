"use client";
import React,{useState} from "react";

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

const Dashboard:React.FC=()=>{
    const [name]=useState("Bytehead");
    return(
        <div className="bg-[#080414] min-h-screen text-[#ffffff] flex flex-col items-center justify-center">
            <p className="text-4xl md:text-8xl">
                Welcome {name}
            </p>
            <div className="flex flex-wrap items-center justify-center">
                College 1
            </div>
        </div>
    );
}
export default Dashboard;