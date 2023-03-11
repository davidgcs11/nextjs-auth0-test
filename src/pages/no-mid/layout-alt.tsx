import Links from "@/components/Links";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NextPageWithLayout } from "../_app";

const LayoutAltPage: NextPageWithLayout = () => {
    const { user } = useUser();
    return <div>
        LayoutAltPage: {user?.email}<br></br><br></br>
        <Links />
    </div>
}

LayoutAltPage.getLayout = (page: React.ReactElement) => {
    return <div>Layout {page}</div>
}

export default withPageAuthRequired(LayoutAltPage);