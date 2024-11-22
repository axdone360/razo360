import { Admin_State } from '../App'
import { useRecoilState,useSetRecoilState} from 'recoil'
import Login from '../components/LoginAdmin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
    const [adminState,setAdminState] = useRecoilState(Admin_State)
console.log("Connected",adminState);

    return (
        <div>
            {adminState ? <AdminDashboard/>:<Login/>}
        </div>
    )  
}

export default Admin