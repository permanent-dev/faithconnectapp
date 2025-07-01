import React from 'react'
import Formheader from '../components/formheader'
import Forms from '../components/forminputs'
import '../index.css'
import '../components/inputsstyle.css'
import '../components/headerstyle.css'
import { Link } from 'react-router-dom'









// function Submit() {

// };
// export { Submit };

const Register = () => {
    return (
        <>
            <div>
                <div className="flex-col-1 md:flex gap-10 md:gap-45 justify-center border-[3px] rounded-[2rem] mt-[2rem] mx-auto shadow-[2px_2px_4px_#222227] w-[80vw]">
                    <div className="left">
                        <div><img src="public/ChatGPT_Image_Jun_3__2025__04_38_53_PM-removebg-preview 1.png" alt="" /></div>
                        <form action="">
                            <Formheader headers="create account" />
                            <Forms label="full name" />
                            <Forms label="email" />
                            <Forms label="password" typeof="password" />
                            <button className='buttton'>sign up</button>


                        </form>
                        <div className='justify-center grid capitalize border-t-[2px] mt-[2rem]'>
                            <span className='flex mt-[-0.8rem] bg-[#ffffff]'>
                                <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20210618182605%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" alt="" />
                                <p>google</p>

                            </span>
                        </div>
                        <p className='text-xl mt-7'>Have an account already ?
                            <span className='text-[#223399] capitalize'>
                                <Link to="/login" > log in</Link>
                            </span>
                        </p>
                    </div>
                    <div className="right">
                        <img src="public/Mask group.png" alt="" />
                        <img src="public/Mask group2.png" alt="" />
                        <img src="public/Mask group1.png" alt="" />
                    </div>

                </div>

            </div>
        </>

    )
}

export default Register