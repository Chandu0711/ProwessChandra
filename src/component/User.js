import './CSS/user.css';
import Usertable from './Usertable';
function User(){
    return(
        <div class="userultimate">
            <div className="heading-1">
                <h1 className="user-1">User Details</h1>
            </div>
            <div><Usertable></Usertable></div>
    </div>
    );
}
export default User;