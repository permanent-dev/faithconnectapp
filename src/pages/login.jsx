import React from 'react'
import Formheader from '../components/formheader'
import Forms from '../components/forminputs'
import '../index.css'
import '../components/inputsstyle.css'
import '../components/headerstyle.css'
import { Link } from 'react-router-dom'










const Login = () => {




    return (
        <div>
            <div className=" flex-col-1 gap-5 md:flex gap-45 justify-center rounded-[2rem] mt-[2rem] mx-auto shadow-[2px_2px_4px_#222227] w-[80vw] ">
                <div className="right">
                    <img src="/Mask group.png" alt="" />
                    <img src="/Mask group2.png" alt="" />
                    <img src="/Mask group1.png" alt="" />
                </div>
                <div className="left">
                    <div><img src="public/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></div>
                    <form action="">
                        <Formheader headers="log in" />
                        <Forms label="username" />
                        <Forms label="password" />
                        <Link to="/dashboard/home"><div ><button className='buttton'>log in</button></div></Link>

                    </form>
                    <div className='justify-center grid capitalize border-t-[2px] mt-[2rem]'>
                        <span className='flex mt-[-0.8rem] bg-[#ffffff]'>
                            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20210618182605%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="" />
                            <p>google</p>

                        </span>
                    </div>
                    <p className='text-xl mt-7'>don't have an account yet ?
                        <span className='text-[#223399] capitalize'>
                            <Link to="/register" > sign up</Link>
                        </span>
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Login;
