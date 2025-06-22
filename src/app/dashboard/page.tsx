"use client";
import * as components from "../../components";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../lib/firebase";
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

const Dashboard = () => {
  const [_user] = useAuthState(auth);
  // Dummy data for institutions
  const dummyInstitutions: Institution[] = [
    {
      id: "1",
      name: "Tech University",
      address: "123 Innovation Drive",
      city: "San Francisco",
      state: "CA",
      pinCode: "94107",
      admins: [],
    },
    {
      id: "2",
      name: "Bytehead Academy",
      address: "456 Code Street",
      city: "New York",
      state: "NY",
      pinCode: "10001",
      admins: [],
    },
    {
      id: "3",
      name: "Algo Institute",
      address: "789 Binary Blvd",
      city: "Austin",
      state: "TX",
      pinCode: "73301",
      admins: [],
    },
  ];
  console.log(_user);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#080414] p-10 text-[#ffffff]">
      <p className="text-center text-4xl md:text-8xl">Welcome {_user?_user.displayName:"User"}</p>
      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-6">
        {dummyInstitutions.map((institution) => (
          <components.Dashboard.Card key={institution.id} {...institution} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
