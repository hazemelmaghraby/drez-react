import React, { useEffect, useState } from 'react';
import './AdminLogin.css';
import Background from '../../Tools/Background/Background';
import NavBarNum4 from './../NavBarNum2/NavbarNum4';
import { auth, db } from './../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ message: '', type: '', show: false });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                window.location.href = '/admin/dashboard'; // Redirect to admin dashboard
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setAlert({ message: 'All fields are required.', type: 'danger', show: true });
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if the user is in the Admins collection
            const adminDoc = await getDoc(doc(db, 'Admins', user.uid));
            if (adminDoc.exists()) {
                const adminData = adminDoc.data();
                if (adminData.username === username) {
                    setAlert({ message: `${adminData.username} logged in successfully!`, type: 'success', show: true });
                    setTimeout(() => {
                        window.location.href = '/admin/dashboard';
                    }, 2000);
                } else {
                    // Username does not match
                    await auth.signOut(); // Sign out the user if not a valid admin
                    setAlert({ message: 'Username does not match.', type: 'danger', show: true });
                }
            } else {
                // User not found in Admins collection
                await auth.signOut(); // Sign out the user if not an admin
                setAlert({ message: 'Admin account not found.', type: 'danger', show: true });
            }
        } catch (error) {
            console.error("Error during login:", error);
            setAlert({ message: error.message, type: 'danger', show: true });
        }
    };

    return (
        <>
            <NavBarNum4 />
            <div className="form-container">
                <Background />
                <div className="form-wrapper">
                    <h2>Admin Login</h2>
                    {alert.show && (
                        <div className={`alert alert-${alert.type}`} role="alert">
                            {alert.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
