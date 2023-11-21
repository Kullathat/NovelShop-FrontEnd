import { useAuth } from "./hooks/use-auth";
import Loading from "./layout/Loading";
import Router from "./router/Route"


function App() {
    const { initLoading } = useAuth;
  if (initLoading) return <Loading/>;
    return (<>
        <Router />
    </>)
}

export default App