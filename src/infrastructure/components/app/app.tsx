import { Layout } from "../../layout/layout";
import { AppRoutes } from "../../routes/appRoutes";

function App() {
    return (
        <div className="flex max-sm:flex-col max-md:flex-row h-auto w-auto">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}

export default App;
