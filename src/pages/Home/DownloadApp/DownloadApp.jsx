import callIcon from '../../../assets/call2.svg'

const DownloadApp = () => {
    return (
        <div className="relative md:mt-20 mt-12">
            <div className="md:text-5xl text-2xl font-semibold text-[#2F2F2F] flex justify-center ">
                <p>Download the</p>
                <div className="ml-3">
                    <span className='text-[#138ED1]'>NotInLine</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="238" height="19" viewBox="0 0 238 19" fill="none" className='lg:w-[238px] h-[19px] w-[100px]'>
                        <path d="M1 7.58766C15.6967 6.02065 30.9116 5.07645 45.8803 4.05599C56.2414 3.34964 66.4314 2.79394 76.9203 2.6555C88.0143 2.50907 98.4682 1.01145 109.707 1.01145C131.412 1.01145 152.706 0.796534 174.206 2.22926C186.111 3.02265 197.785 4.08618 209.546 5.15202C214.476 5.59885 219.187 6.51409 224.058 6.97875C228.049 7.3595 230.507 6.82795 233.733 8.13568C240.69 10.9567 229.829 8.90007 225.334 8.44013C193.355 5.16789 158.864 5.56812 126.168 5.97405C112.96 6.13803 99.7188 6.68278 86.5279 7.03964C70.7534 7.4664 56.0126 10.3944 41.0429 12.4589C40.4573 12.5397 12.6657 16.4665 13.3622 16.7822C14.1674 17.147 17.4332 16.904 18.4684 16.904C28.7126 16.904 38.5223 15.9622 48.5006 14.9859C61.6927 13.6952 74.4616 13.6159 87.8044 13.6159C116.953 13.6159 146.508 12.9729 175.415 14.5901C181.98 14.9574 198.769 15.2962 201.752 18" stroke="#008DD9" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='lg:-ml-3 ml-3'>app</p>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" className='w-full md:h-[800px] h-[1000px]'  fill="none">
                <path d="M-186.954 541.043C-174.754 530.866 -174.207 512.309 -185.787 501.431L-335.421 360.876C-496.668 209.413 -341.675 -55.7563 -130.576 10.4186L152 99L472.5 221.5L595.891 264.795C663.613 288.557 737.401 288.597 805.149 264.907L1032.93 185.257C1113.83 156.969 1202.74 162.697 1279.34 201.132L1359.8 241.501C1390.51 256.91 1424.39 264.934 1458.75 264.934C1630.16 264.934 1736.11 451.843 1648.07 598.913L1435.5 954H-4.5L-193.704 573.14C-199.154 562.169 -196.362 548.89 -186.954 541.043Z" fill="#00A6FF" fill-opacity="0.07" />
            </svg>
            <div className="absolute lg:top-[100px] top-[100px] ">


                <div className="flex md:flex-row flex-col items-center justify-center lg:gap-14 lg:ml-48 md:gap-28 md:mt-14 lg:mt-0">
                    <img src="https://s3-alpha-sig.figma.com/img/c35a/b78d/518b05bea19fa9d35e4404df919ddb20?Expires=1692576000&Signature=XqvdrUUuK3YAvvuoYRkzZU0cszu-KAQgaFxx1680bbQFam32WDHj~ubZNnSukvbjnsAh1vl3AbuVACbKvo9j166wbHCMcS3Qnyn4gfO9iEFrBldTbssbzs2r4rFy~f5NmnPJSxAT8DqnI0LKZmpcDT4svDKk5DevhFVgT~sKXfmWYc35uySaSbqqNamW2lyKIqpJy0QDTdHdslJujxkAloC4piD7yKXO3OmCRqvRSzyDK4m3HmAlpSzYY23cUBaoNEhUo-sdRfdOVDmiPoV9h7MfSJfiOuAmvdpwSKn5Ho15r2gDroJJDBLjfmGe8Yq2S9UNzc4g5PGtnl-p2BgsfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-[385px] h-[684px] w-full" alt="" />
                    <div className="lg:mt-60">
                        <div className="">
                            <input type="text" placeholder='+91 |' className='pl-8 search lg:w-[600px] md:h-[75px] w-[300px] h-[50px] text-black text-2xl font-semibold' />
                            <div className="bg-[#138ED1] md:w-[80px] md:h-[75px] h-[50px] flex justify-center items-center absolute right-0 lg:bottom-[240px]   cursor-pointer bottom-[176px] md:bottom-[402px]">
                                <img src={callIcon} alt="" className='' />
                            </div>

                        </div>
                        <div className="flex lg:flex-row flex-col items-center md:gap-5 mt-12">
                            <button className="btn btn-lg bg-[#333] text-white text-xl font-semibold w-[300px]">
                                <img src="https://s3-alpha-sig.figma.com/img/398f/74f7/98a428e87d673c6aa3786111ebd1a23a?Expires=1692576000&Signature=Sscte10sLvwW1lhAyW0hd1VhFF0PMEgQDJT~ZMXQq5QiKmZCJP-H9HDEL7iIwbLyCUkDWLQ3jtHntq3denbapZpgGw8kTpIboOgubZJcOvRD8vfQRV0DI0SI1-AQXp~doqAzEhBKkljvp4arwOV~xi2FFWEHD72F0RfKHtvUrLDj7hO-oKkQsC3u2NID28pHhQVL7tWVBx9FUl58527jJE0kxOW8tM5Fuw-BSCgLYmApgCZlsf4F5EQL~u4xAQ3VrSAcUsMl53GVKnmba6SuMOoeIjfx8dtILGmKQIv3WYVAo1RI-2BCqrL82OeSj-VXCHX2S9~pqH4RxUp~8ODFZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='h-[57px] w-[59px]' alt="" />
                                Play store
                            </button>
                            <button className="btn btn-lg bg-[#333] text-white text-xl font-semibold w-[300px]">
                                <img src="https://s3-alpha-sig.figma.com/img/ad21/989e/50b475e4a724e84efdb1fca2e540aba2?Expires=1692576000&Signature=Qn9DFM0qrJsTPdWp5TQVU8PRcdLxEF7oLH2fVB5JbUgxfw8AL4PazeDQ1oKRSHJdFds8AWXyPjwKtoUOD2AzsxiMZwwY-9HSBcEIUwPHtQ8t5XA1kyERkPEO5BLiTUgCfVszdJu7aU2YXRV3m2vmX-sKZp3KJvGqBeAfHWsaM0tCRoQAqzjZaaMAgbTOBNI65N3QsQuSn96XDeee3MDFP4phRt-RgjOVlNSWIblEQRhQMYE6kA5jwnnX4mqEIAuO29HjrpJMY~0B81z-nCLVzYnJ-13PwlOPm~KRZlGDs5vioY-L699xoTDLO7mQVu3rGlHoNlfAEp-r4YxDPClgrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='h-[57px] w-[59px]' alt="" />
                                App store
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;