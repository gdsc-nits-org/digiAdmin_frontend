"use client";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../lib/firebase";
const Login: React.FC = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [_user] = useAuthState(auth);
    return (
        <div className="flex flex-col items-center justify-center bg-[#080414] text-[#ffffff] min-h-screen">
            <div className="flex flex-col gap-8 items-center justify-center bg-[#5e5ef44a] p-10 rounded-4xl border-2 w-[90%] md:w-[70%] lg:w-[50%]">
                <p className="">
                    Welcome to DigiAdmin! 🚀

                    You&apos;re currently logged out — but you&apos;re just one step away from unlocking a smarter way to work.
                    Log in with your authorized account to access a powerful suite of tools designed to simplify your administrative workflow. Whether you&apos;re managing schedules, organizing documents, coordinating teams, or generating reports — DigiAdmin puts everything you need in one intuitive dashboard.

                    No more juggling platforms or wasting time on repetitive tasks. With DigiAdmin, you stay in control, focused, and ahead of the game.

                    Ready to streamline your day? Log in and take command! 💼✨
                </p>
                <button onClick={() => signInWithGoogle()} className="pl-10 pr-10 pt-4 pb-4 bg-[#00a6ff] text-[#20004a] rounded-md glowlogin">SIGN IN WITH GOOGLE</button>
            </div>
        </div>
    );
}

export default Login;
