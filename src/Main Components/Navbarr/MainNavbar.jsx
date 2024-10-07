import React, { useEffect, useState } from 'react';
import logo from './../img/pngegg2.png';
import './MainNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from './../Tools/Sidenav/Sidenav';
import { auth, db } from './../../Components/Login System/Config/firebase';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'; // Import these functions
import defaultUserImgMale from './../img/male.png'; // Replace with the correct path
import defaultUserImgFemale from './../img/female.png'; // Replace with the correct path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainNavbar = () => {
    const [sideNavVisible, setSideNavVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [userGender, setUserGender] = useState('male'); // New state for gender
    const navigate = useNavigate();

    const toggleSideNav = () => {
        setSideNavVisible(!sideNavVisible);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setIsLoggedIn(true);

                // Fetch user data from Firestore
                const userDoc = await getDoc(doc(db, 'Users', currentUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserGender(userData.gender); // Set the user's gender
                }
            } else {
                setIsLoggedIn(false);
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
        <>
            <nav className="navbar navbar-expand-lg bg-dark mainNavbar">
                <div className="container">
                    <a className="navbar-brand mainNavbarBrand" href="/">
                        <img src={logo} alt="error" className='navimg' />DRE.$
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSideNav}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={sideNavVisible}
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Main Navbar Items */}
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Developers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ranks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="userDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={profilePic} // Use the determined profile picture
                                            alt="Profile"
                                            className="rounded-circle"
                                            style={{ width: '40px', height: '40px' }}
                                        />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="userDropdown">
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
                        </ul>
                    </div>
                </div>
            </nav>
            <SideNav visible={sideNavVisible} />
            <ToastContainer />
        </>
    );
}

export default MainNavbar;

















// import React, { useEffect, useState } from 'react';
// import logo from './../img/pngegg2.png';
// import './MainNavbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import SideNav from './../Tools/Sidenav/Sidenav';
// import { auth } from './../../Components/Login System/Config/firebase';
// import { useNavigate } from 'react-router-dom';
// import defaultUserImg from './../img/profile.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

// const MainNavbar = () => {
//     const [sideNavVisible, setSideNavVisible] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null);
//     const history = useNavigate();

//     const toggleSideNav = () => {
//         setSideNavVisible(!sideNavVisible);
//     };

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(currentUser => {
//             setUser(currentUser);
//             setIsLoggedIn(!!currentUser);
//         });

//         return () => unsubscribe();
//     }, []);

//     const handleLogout = async () => {
//         try {
//             await auth.signOut();
//             toast.success('Logged Out Successfully'); // Show success toast
//             history.push('/login'); // Redirect to login after logout
//         } catch (error) {
//             // console.error("Error signing out: ", error);
//             toast.error('Error signing out'); // Show error toast
//         }
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-dark mainNavbar">
//                 <div className="container">
//                     <a className="navbar-brand mainNavbarBrand" href="/">
//                         <img src={logo} alt="error" className='navimg' />DRE.$
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         onClick={toggleSideNav}
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded={sideNavVisible}
//                         aria-label="Toggle navigation"
//                     >
//                         <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             {/* Main Navbar Items */}
//                             <li className="nav-item">
//                                 <a className="nav-link" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Developers</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Ranks</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Services</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">Our Team</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">About Us</a>
//                             </li>
//                             {isLoggedIn ? (
//                                 <li className="nav-item dropdown">
//                                     <a
//                                         className="nav-link dropdown-toggle"
//                                         href="#"
//                                         role="button"
//                                         id="userDropdown"
//                                         data-bs-toggle="dropdown"
//                                         aria-expanded="false"
//                                     >
//                                         <img
//                                             src={defaultUserImg}
//                                             alt="Profile"
//                                             className="rounded-circle"
//                                             style={{ width: '40px', height: '40px' }}
//                                         />
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="userDropdown">
//                                         <li><a className="dropdown-item" href="/profile">Profile</a></li>
//                                         <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
//                                     </ul>
//                                 </li>
//                             ) : (
//                                 <>
//                                     <button className='reg'>
//                                         <a href="/login">Login</a>
//                                     </button>
//                                     <button className='reg'>
//                                         <a href="/register">Sign up</a>
//                                     </button>
//                                 </>
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <SideNav visible={sideNavVisible} />
//             <ToastContainer /> {/* Add the ToastContainer here */}
//         </>
//     );
// }

// export default MainNavbar;
