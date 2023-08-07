import selectIcon from '../../../assets/assignment_turned_in.svg'

const Details = () => {
    return (

        <div className="relative mt-[500px] w-full">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" className=' h-[1230px] w-full'>
                <path d="M0 99.1443L280.008 17.9024C371.134 -8.5368 468.469 -3.87164 556.649 31.1613L964.518 193.205C1058.85 230.684 1165.29 221.848 1252.16 169.327C1518.24 8.44727 1836.35 277.853 1721.49 566.795L1440.35 1274H0V99.1443Z" fill="#00A6FF" fill-opacity="0.09" />
            </svg>
            <div className="absolute md:-top-[420px] flex justify-center items-center gap-11">
                <div className="">
                    <img src="https://s3-alpha-sig.figma.com/img/8624/d01b/bfdf003dfd1768c26887b043807b8f24?Expires=1691971200&Signature=CWECf3psvEKDSLPGjPVXI1cLH8G3Aqxb3UvJong7SalSLJPZhA8e7tLV-qctszMbfz2xVKkhXN-5kHaKxzxO6mGVMxBXeJfV5tDPFQ7tHojUNRJ04MEOH0o7ePqAHh7EKELAtxrp2bk9DkBNWitL1SuuYHgE48i9PkdvPy~NF0wwTgu6Hi~U2pGZoO6OpPejNZcydVZIhB-QX3cwvuoFQFT16bV4iY4uzhdTX4NMFX7YiZKGdF8dcBs7lwY5VxGdcGkVBHbOwAIyCrdGDeTHMvlTvfDFKe3EUZhMinZMFkDS4oR9IWS7CAK1tYDHZXr1R5nI4xnJvPfRJis~EgJZaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='md:w-[706px] md:h-[633px]' alt="" />
                </div>
                <div className="mt-20">
                    <p className='md:text-5xl text-2xl font-semibold text-[#2F2F2F] mb-14'>Live <span className='text-[#138ED1]'>without
                    </span> pain & <br /> get back to being you</p>
                    <div className="flex items-center gap-5">
                        <img src={selectIcon} alt="" />
                        <p className='text-xl font-semibold'>Check doctor profiles</p>
                    </div>
                    <div className="flex items-center gap-5 my-9">
                        <img src={selectIcon} alt="" />
                        <p className='text-xl font-semibold'>Book appointments</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={selectIcon} alt="" />
                        <p className='text-xl font-semibold'>Receive your consultation</p>
                    </div>
                    <div className="flex items-center gap-5 mt-9">
                        <img src={selectIcon} alt="" />
                        <p className='text-xl font-semibold'>Get your solutions</p>
                    </div>
                    <button className="btn  w-[215px]  bg-[#138ED1] text-2xl text-white capitalize rounded-[29px] mt-3 font-medium">Explore</button>

                </div>
            </div>
            {/* Why choose us? */}
            <div className="absolute md:top-[340px]">
                <div className="md:text-5xl text-2xl font-semibold text-[#2F2F2F] flex justify-center">
                    <p>Why</p>
                    <div className="ml-3">
                        <span className='text-[#138ED1]'>Choose</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="212" height="19" viewBox="0 0 212 19" fill="none">
                            <path d="M1 7.58766C14.0706 6.02065 27.6023 5.07645 40.9148 4.05599C50.1295 3.34964 59.1922 2.79394 68.5206 2.6555C78.3871 2.50907 87.6845 1.01145 97.6799 1.01145C116.984 1.01145 135.922 0.796534 155.043 2.22926C165.631 3.02265 176.013 4.08618 186.473 5.15202C190.857 5.59885 195.047 6.51409 199.379 6.97875C202.929 7.3595 205.115 6.82795 207.984 8.13568C214.171 10.9567 204.512 8.90007 200.514 8.44013C172.073 5.16789 141.398 5.56812 112.319 5.97405C100.573 6.13803 88.7967 6.68278 77.0652 7.03964C63.036 7.4664 49.9261 10.3944 36.6126 12.4589C36.0918 12.5397 11.375 16.4665 11.9945 16.7822C12.7106 17.147 15.6151 16.904 16.5357 16.904C25.6465 16.904 34.3709 15.9622 43.2452 14.9859C54.9778 13.6952 66.3339 13.6159 78.2005 13.6159C104.124 13.6159 130.409 12.9729 156.118 14.5901C161.957 14.9574 176.888 15.2962 179.541 18" stroke="#008DD9" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <p className='-ml-8'>us?</p>
                </div>
                <p className='text-[#6E6E6E] text-center md:text-xl text-sm mt-4'>We want you and your heart to be healthy so you can live a <br /> happy life!</p>
{/* happly life */}
                <div className=" flex justify-center items-center mt-10">
                    <div className="ml-20">
                        {/* 1st box */}

                        <div className="flex gap-11">
                            <div className="w-[373px] h-[200px] rounded-[33px] shadow-xl pl-7 pt-5 relative bg-white">
                                 <p className='text-2xl font-semibold'>Expert doctors</p>
                                 <p className="text-base font-medium mt-6">Get in touch with our team of expert <br /> doctors with years of experience, and <br /> hop on to your journey towards <br /> recovery!</p>
                                 <img src="https://s3-alpha-sig.figma.com/img/813d/0227/832cd1ac22f2911861e73d73ab56c99b?Expires=1692576000&Signature=ZesMI6Ov03Vbo0cEVrm2csRqI8hbQegUQPklSvXa4UQM7iu3B7NmzEo1v4r-RQyknaa0XFLHZYKsznCSQ38jIofodtW9p5vm4UghVQYqZT12iIkhGytszjo3dCekQBmwGf1p5BvUtOlsJ4sBwwTzvjItqJ3P3jagMg8qZ906ewf7tsZJSGGoGJ6HwHEC6j39Ny9QaIpzX18Qd0MLjTuNf~BSc~MQ8vIoxCVxTlVjOHhU7BJNw74I0Lu1oHx78EO6L7UByh1hLwXhNlAc9eoNJBtUHGF2NuKz9rP3Z8lf0OXyayNbTuq6TvcV2XV3z6xj0S2w5C8OkvXkvjwcNZPg4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='md:w-[100px] md:h-[100px] w-[80px] h-[80px] rounded-full absolute md:-top-[50px]
                                 right-0' alt="" />
                            </div>
                            <div className="w-[373px] h-[200px] rounded-[33px] shadow-xl pl-7 pt-5 relative bg-white mt-14">
                                 <p className='text-2xl font-semibold'>Expert doctors</p>
                                 <p className="text-base font-medium mt-6">Get in touch with our team of expert <br /> doctors with years of experience, and <br /> hop on to your journey towards <br /> recovery!</p>
                                 <img src="https://s3-alpha-sig.figma.com/img/813d/0227/832cd1ac22f2911861e73d73ab56c99b?Expires=1692576000&Signature=ZesMI6Ov03Vbo0cEVrm2csRqI8hbQegUQPklSvXa4UQM7iu3B7NmzEo1v4r-RQyknaa0XFLHZYKsznCSQ38jIofodtW9p5vm4UghVQYqZT12iIkhGytszjo3dCekQBmwGf1p5BvUtOlsJ4sBwwTzvjItqJ3P3jagMg8qZ906ewf7tsZJSGGoGJ6HwHEC6j39Ny9QaIpzX18Qd0MLjTuNf~BSc~MQ8vIoxCVxTlVjOHhU7BJNw74I0Lu1oHx78EO6L7UByh1hLwXhNlAc9eoNJBtUHGF2NuKz9rP3Z8lf0OXyayNbTuq6TvcV2XV3z6xj0S2w5C8OkvXkvjwcNZPg4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='md:w-[100px] md:h-[100px] w-[80px] h-[80px] rounded-full absolute md:-top-[50px]
                                 right-0' alt="" />
                            </div>
                        </div>

                        {/* 2nd box */}
                        <div className="flex gap-11">
                            <div className="w-[373px] h-[200px] rounded-[33px] shadow-xl pl-7 pt-5 relative bg-white mt-20">
                                 <p className='text-2xl font-semibold'>Expert doctors</p>
                                 <p className="text-base font-medium mt-6">Get in touch with our team of expert <br /> doctors with years of experience, and <br /> hop on to your journey towards <br /> recovery!</p>
                                 <img src="https://s3-alpha-sig.figma.com/img/813d/0227/832cd1ac22f2911861e73d73ab56c99b?Expires=1692576000&Signature=ZesMI6Ov03Vbo0cEVrm2csRqI8hbQegUQPklSvXa4UQM7iu3B7NmzEo1v4r-RQyknaa0XFLHZYKsznCSQ38jIofodtW9p5vm4UghVQYqZT12iIkhGytszjo3dCekQBmwGf1p5BvUtOlsJ4sBwwTzvjItqJ3P3jagMg8qZ906ewf7tsZJSGGoGJ6HwHEC6j39Ny9QaIpzX18Qd0MLjTuNf~BSc~MQ8vIoxCVxTlVjOHhU7BJNw74I0Lu1oHx78EO6L7UByh1hLwXhNlAc9eoNJBtUHGF2NuKz9rP3Z8lf0OXyayNbTuq6TvcV2XV3z6xj0S2w5C8OkvXkvjwcNZPg4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='md:w-[100px] md:h-[100px] w-[80px] h-[80px] rounded-full absolute md:-top-[50px]
                                 right-0' alt="" />
                            </div>
                            <div className="w-[373px] h-[200px] rounded-[33px] shadow-xl pl-7 pt-5 relative bg-white mt-32">
                                 <p className='text-2xl font-semibold'>Expert doctors</p>
                                 <p className="text-base font-medium mt-6">Get in touch with our team of expert <br /> doctors with years of experience, and <br /> hop on to your journey towards <br /> recovery!</p>
                                 <img src="https://s3-alpha-sig.figma.com/img/813d/0227/832cd1ac22f2911861e73d73ab56c99b?Expires=1692576000&Signature=ZesMI6Ov03Vbo0cEVrm2csRqI8hbQegUQPklSvXa4UQM7iu3B7NmzEo1v4r-RQyknaa0XFLHZYKsznCSQ38jIofodtW9p5vm4UghVQYqZT12iIkhGytszjo3dCekQBmwGf1p5BvUtOlsJ4sBwwTzvjItqJ3P3jagMg8qZ906ewf7tsZJSGGoGJ6HwHEC6j39Ny9QaIpzX18Qd0MLjTuNf~BSc~MQ8vIoxCVxTlVjOHhU7BJNw74I0Lu1oHx78EO6L7UByh1hLwXhNlAc9eoNJBtUHGF2NuKz9rP3Z8lf0OXyayNbTuq6TvcV2XV3z6xj0S2w5C8OkvXkvjwcNZPg4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='md:w-[100px] md:h-[100px] w-[80px] h-[80px] rounded-full absolute md:-top-[50px]
                                 right-0' alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/5550/d698/7abdc343ec5597511b0cfad06f6f7e17?Expires=1691971200&Signature=Ray951QzQkFIx3-5OnJI~htLaLPUjY7o2PvTarC5XxKuhV8h3S0-cZMGz8el0x0cPV5mJEObGGjwSuS4l5lS8R9Opt7vqZGsTnXAefIJMXDLaZdkJ4p1BGmedg1m4Dm1pFaWJU6G3D4R7CEzuiFxErOWFG1N1mpEFavScZd8rOBzAg46wCmJmOFEERldHVGCAT5QEZ1V832XKBIGAYW776PwSf3JzWBNVoDz-3L3VjuZ1WzTaqvQFX4yeYjYmJhcmegy4zDkEubMwUsYlJn0RNjKaBPb28h15TSgcUoItlLzDgyCLZ4wuS15hqU1~j2zPH4eSYRCdKkOudM6uICZjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='md:h-[707px] md:w-[800px]' alt="" />
                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default Details;