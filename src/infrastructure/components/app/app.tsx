import { Layout } from "../../layout/layout";
import { AppRoutes } from "../../routes/appRoutes";

function App() {
    return (
        <div className=" flex flex-row">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}

export default App;
