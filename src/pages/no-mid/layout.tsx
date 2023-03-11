import Links from "@/components/Links";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NextPageWithLayout } from "../_app";

const LayoutPage: NextPageWithLayout = () => {
    const { user } = useUser();
    return <div>
        LayoutPage: {user?.email}<br></br><br></br>
        <Links />
    </div>
}

LayoutPage.getLayout = (page: React.ReactElement) => {
    return <div>Layout {page}</div>
}

export default withPageAuthRequired(LayoutPage);