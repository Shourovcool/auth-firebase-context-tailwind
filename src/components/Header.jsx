import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/'><button className="btn btn-ghost mr-5 text-4xl text-white">Auth Master</button></Link>
                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                {user && <Link className="btn btn-ghost text-xl" to='/orders'>Orders</Link>}
                {user && <Link className="btn btn-ghost text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-xs btn-active btn-warning mx-3">Signout</button>
                    </> : <></>

                }
            </div>
        </div >
    );
};

export default Header;