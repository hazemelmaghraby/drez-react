import React, { useState } from 'react';
import './Form.css'; // Reuse the same CSS file
import Background from './../../Tools/Background/Background';
import NavBatNum2 from './../NavBarNum2/NavbarNum2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';
import { auth, db } from './../Config/firebase';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male'); // New state for gender
    const [alert, setAlert] = useState({ message: '', type: '', show: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const q = query(collection(db, 'Users'), where('username', '==', username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setAlert({ message: 'This username is already taken. Please choose another.', type: 'danger', show: true });
                return;
            }

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user) {
                // Store the user data in Firestore + the genderr
                await setDoc(doc(db, 'Users', user.uid), {
                    email: user.email,
                    username: username,
                    password: password,
                    gender: gender // Store the gender
                });
            }
            setAlert({ message: 'Account has been created successfully!', type: 'success', show: true });
            window.location.href = '/login';
        } catch (error) {
            console.error(error.message);
            if (error.code === 'auth/email-already-in-use') {
                setAlert({ message: 'This email is already registered. Please use a different email.', type: 'danger', show: true });
            } else {
                setAlert({ message: error.message, type: 'danger', show: true });
            }
        }
    };

    return (
        <>
            <NavBatNum2 />
            <div className="form-container">
                <Background />
                <div className="form-wrapper">
                    <h2>Register</h2>
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
                        <div className="form-group">
                            <label>Gender</label>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="male"
                                        checked={gender === 'male'}
                                        onChange={() => setGender('male')}
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="female"
                                        checked={gender === 'female'}
                                        onChange={() => setGender('female')}
                                    />
                                    Female
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn-submit">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
