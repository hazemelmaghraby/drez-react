import React, { useEffect, useState } from 'react';
import './Form.css';
import Background from '../../Tools/Background/Background';
import NavBatNum3 from './../NavBarNum2/NavbarNum3';
import { auth, db } from './../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [alert, setAlert] = useState({ message: '', type: '', show: false });

    useEffect(() => {
        // Check if the user is already logged in
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, redirect to profile
                window.location.href = '/profile';
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = await getDoc(doc(db, 'Users', user.uid));
            if (userDoc.exists()) {
                setUsername(userDoc.data().username);
                setAlert({ message: `${userDoc.data().username} logged in successfully!`, type: 'success', show: true });
                // Redirect to a protected route after a short delay
                setTimeout(() => {
                    window.location.href = '/profile';
                }, 2000);
            } else {
                setAlert({ message: 'User data not found. Please contact support.', type: 'danger', show: true });
            }
        } catch (error) {
            console.error(error); // Log the full error for debugging

            switch (error.code) {
                case 'auth/wrong-password':
                    setAlert({ message: 'Incorrect password. Please try again.', type: 'danger', show: true });
                    break;
                case 'auth/user-not-found':
                    setAlert({ message: 'No account found with this email. Please sign up.', type: 'danger', show: true });
                    break;
                case 'auth/invalid-email':
                    setAlert({ message: 'Invalid email format. Please enter a valid email.', type: 'danger', show: true });
                    break;
                case 'auth/invalid-credential':
                    setAlert({ message: 'Invalid credentials. Please try again.', type: 'danger', show: true });
                default:
                    setAlert({ message: 'An error occurred. Please try again later.', type: 'danger', show: true });
            }
        }
    };


    return (
        <>
            <NavBatNum3 />
            <div className="form-container">
                <Background />
                <div className="form-wrapper">
                    <h2>Login</h2>
                    {alert.show && (
                        <div className={`alert alert-${alert.type}`} role="alert">
                            {alert.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
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

export default Login;
