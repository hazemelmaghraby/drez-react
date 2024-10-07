import React, { useEffect, useState } from 'react'
import { auth, db } from './../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Loading from './../../Tools/Loading/Loading'

const Profile = () => {
    const [userDetails, setuUserDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docPick = await getDoc(docRef);
            if (docPick.exists) {
                setuUserDetails(docPick.data());
                console.log(docPick.data());
            } else {
                console.log('user not logged in.');

            }
        })

    }
    useEffect(() => {
        fetchUserData()
    }, [])

    async function logout() {
        try {
            await auth.signOut();
            window.location.href = '/login'
            console.log(`${userDetails.username} Loged out seuccessfully.`);

        } catch (error) {
            console.log(error);

        }
    }
    return (

        <div>
            {userDetails ? (
                <>
                    <h1>{userDetails.username}</h1>
                    <h3>{userDetails.email}</h3>
                    <button onClick={logout}>
                        Sign Out
                    </button>
                </>
            ) : (
                <Loading />
            )
            }   </div>
    )
}

export default Profile