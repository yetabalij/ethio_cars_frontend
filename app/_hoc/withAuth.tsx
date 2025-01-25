import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType)=>{
    return function ProtectedRoute(){
        const router = useRouter()

        useEffect(()=>{
            const session = localStorage.getItem("adminSession")

            if(!session){
                router.push("/admin/login")
            }
        },[router]);

        return <WrappedComponent/>
    }
}

export default withAuth