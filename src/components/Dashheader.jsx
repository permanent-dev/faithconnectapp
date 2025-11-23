import React, { useEffect } from 'react'
import { BellDotIcon } from 'lucide-react';
import apiService from '../services/api';
import axios from 'axios';
import { useState } from 'react';

function Dashheader() {
    const users = [
        { id: 1, color: "rgb(255,165,0)", radius: '50%', icon: <img src="/image 63.png" alt="" /> },

    ]

    // const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [userData, setUserData] = useState(null);






    useEffect(() => {

        const fetchProfile = async () => {
            // const userToken = localStorage.getItem('authToken');
            setLoading(true)
            try {
                const result = await apiService.getMemberProfile();

                if (result?.success) {
                    // const { id, ...userDetails } = result.data;

                    setUserData(result.data);
                };

                // console.log(result);
                // console.log(loading);
                // console.log(userData);
            } catch (error) {
                // setErrors(error.message);
                console.log('fetching  profile error:', error.message)

            } finally {
                setLoading(false)
            }
        };

        fetchProfile();

    }, []);

    // Second useEffect to monitor userData changes
    useEffect(() => {
        console.log('Updated userData:', userData);
        console.log(loading)
    }, [userData]);

    if (errors) return <div className='border-red-300 border-2 rounded-l p-1 '>Error: {errors}</div>





    return (
        <div className='flex justify-between mt-[31px] max-w-screen gap-45 items-center '>
            <div className='capitalize font-bold text-[1.7rem] font-bold p-1 flex justify-center items-center gap-1 '>
                <p >
                    welcome!
                </p>



                <p
                    style={{
                        color: 'yellow',
                        fontSize: "3rem",
                    }} >
                    {userData ? userData.first_name : (<span> </span>)}
                </p>



            </div>
            <div className='flex gap-2 justify-center items-center'>
                <BellDotIcon strokeWidth={3} size={45} />
                <div className='flex bg-[#fefefe] rounded-l-[7rem] items-center'>
                    <p >
                        {users.map(p => (
                            <span key={p.id} style={{
                                borderRadius: '50%',
                                overflow: "hidden",
                                display: "inline-block",
                                height: "6.1rem"
                            }}>
                                {p.icon}
                            </span>

                        ))}
                    </p>
                    <p>

                        <span style={{
                            display: "block",
                            overflow: "hidden",
                            textTransform: "",
                            fontWeight: "bold",
                            textShadow: "2px 2px 7px #101010",
                            padding: "0 9px",

                        }}>
                            {userData ? (`${userData.first_name}${` `}${userData.last_name}`) : (` `)}
                            <br />
                            {userData ? userData.email : (` `)}
                        </span>

                    </p>
                </div>

            </div>


        </div>
    )
}

export default Dashheader