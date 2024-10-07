import React, { useEffect, useState } from 'react';
import defaultUserImg from './../../img/pngegg.png';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './../../../Components/Login System/Config/firebase'; // Import Firestore
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import './Sidenav.css';
import defaultUserImgMale from './../../img/male.png';
import defaultUserImgFemale from './../../img/female.png';

const SideNav = ({ visible }) => {
    const [sideNavVisible, setSideNavVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [userGender, setUserGender] = useState('male');
    const [username, setUsername] = useState(''); // State for username
    const navigate = useNavigate();

    const toggleSideNav = () => {
        setSideNavVisible(!sideNavVisible);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);
            setIsLoggedIn(!!currentUser);
            if (currentUser) {
                // Fetch username from Firestore
                const userDoc = await getDoc(doc(db, 'Users', currentUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUsername(userData.username); // Set username from Firestore
                    setUserGender(userData.gender || 'male'); // Optionally set gender if available
                }
            } else {
                setUsername('');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            toast.success('Logged Out Successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Error signing out');
        }
    };

    const profilePic = userGender === 'female' ? defaultUserImgFemale : defaultUserImgMale;

    return (
        <div className={`sidenav ${visible ? 'visible' : ''}`}>
            <h2>Menu</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Ranks - Roles</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            {isLoggedIn ? (
                <li className="nav-item dropdown imgDropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        id="userDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <p className='d-inline-block ms-3 imgDropdown'>{username}</p>{/* Display the username here */}
                    </a>
                    <ul className="dropdown-menu dropdownMenu" aria-labelledby="userDropdown">
                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </li>
            ) : (
                <>
                    <button className='reg'>
                        <a href="/login">Login</a>
                    </button>
                    <button className='reg'>
                        <a href="/register">Sign up</a>
                    </button>
                </>
            )}
            <ToastContainer />
        </div>
    );
};

export default SideNav;
