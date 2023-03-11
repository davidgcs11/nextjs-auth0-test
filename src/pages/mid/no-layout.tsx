import Links from "@/components/Links";
import { useUser } from "@auth0/nextjs-auth0/client";
import { NextPageWithLayout } from "../_app";

const NoLayoutPage: NextPageWithLayout = () => {
    const { user } = useUser();
    return <div>
        NoLayoutPage: {user?.email}<br></br><br></br>
        <Links />
    </div>
}

export default NoLayoutPage;