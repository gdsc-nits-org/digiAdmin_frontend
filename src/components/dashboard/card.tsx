"use client";
import Link from "next/link";
interface User {
  id: string;
  email: string;
  name: string;
  firebaseId: string;
  role: string;
  Institution: Institution;
}

interface Institution {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  admins: User[];
}
const Card: React.FC<Institution> = ({
  id,
  name,
  address,
  city,
  state,
  pinCode,
  admins,
}: Institution) => {
  return (
    <Link href={`/institution/${id}`}>
      <div className="m-10 flex cursor-pointer flex-col items-start justify-around rounded-4xl border-2 p-10">
        <h1>{name}</h1>
        <h3>{address}</h3>
        <h3>{city}</h3>
        <h3>{state}</h3>
        <h3>{pinCode}</h3>
        {admins.map((item)=>(
          <>
            {item.name}
          </>
        ))}
      </div>
    </Link>
  );
};

export default Card;
