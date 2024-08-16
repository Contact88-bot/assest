import React from 'react';
import Icon from '../../components/Nav/Icon';
import WhiteIcon from '../../components/Nav/whiteIcon';
import { FaUserLock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import block from "../../images/block.jpg"



const Blocked = () => {
  return (
    <div>
        <div className='bg-white'>
            <nav className='flex bg-neutral justify-between lg:px-20 md:px-10 px-3 md:py-3 border-b border-neutral shadow-b shadow-md shadow-black/30'>
                <div>
                    <WhiteIcon/>
                </div>
                <div>
                    <button className='text-red-600 border border-gray-500 rounded-full p-3 mt-2'>
                    <FaUserLock size={20} />
                    </button>
                </div>
            </nav>

            <div className='bg-white md:h-screen'>
                <div className='py-10'>
                    <div className='flex justify-center'>
                        <div className='flex  space-x-5 md:border md:border-black bg-neutral text-black md:px-20 mx-3 md:mx-0 px-3 py-5'>
                            <div className='text-red-600 mt-1.5'>
                                <MdCancel size={35} />
                            </div>
                            <div>
                                <h3 className='text-red-600 uppercase font-semibold text-lg'>Account Suspended!</h3>
                                <p className='text-gray-400 text-sm'>Your account has been suspended by our security system.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:flex-row justify-center flex flex-col-reverse md:mt-16 mt-10 space-x-[5%]'>
                        <div className='md:pt-16 pt-0 px-5 md:w-1/3'>
                            <h1 className='text-2xl text-blue-600 uppercase font-semibold font-Montserrat'>Don<span className='font-Lobster'>'</span>t Worry</h1>
                            <h3 className='py-5 text-sm capitalize tracking-wider'>We'll help you recover your account</h3>
                            <p className='text-black/80 font-semibold'>
                                <span className='capitalize pb-2'>Our customer support is available 24/7.</span> <br />
                                <span className=''>They will review your account, make sure your details adhere to our terms of use and guide you towards the process of re-activation.</span>
                            </p>
                        </div>
                        <div className='flex justify-center align-center'>
                            <img className='relative md:left-0 -left-10' src={block} alt="blocked" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <footer className='py-3'>
                <p className='text-center font-semibold'>support@assestproxy.com</p>
            </footer>
        </div>
    </div>
  )
}

export default Blocked;