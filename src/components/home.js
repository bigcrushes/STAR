import { useAuth } from "../hooks/useAuth";
import Login from './login.component'
import Missions from './Missions/Missions';


const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            {user ? <Missions /> : <Login />}
        </div>

    )
}
  
export default Home;
