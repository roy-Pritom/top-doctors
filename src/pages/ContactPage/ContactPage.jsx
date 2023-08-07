// import '../../pages/Home/Banner/Banner.css'
import personIcon from '../../assets/person.svg'
import callIcon from '../../assets/call.svg'
import mailIcon from '../../assets/mail.svg'
import circleIcon from '../../assets/Ellipse 26.svg'

const ContactPage = () => {
    return (
        <div>
            <div className="md:text-5xl text-2xl font-semibold text-[#2F2F2F] flex justify-center">

                <div className="ml-3">
                    <span className='text-[#138ED1]'>Contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" className='lg:w-[199px] h-[19px] w-[100px]'>
                        <path d="M1 7.58766C13.2576 6.02065 25.9476 5.07645 38.4321 4.05599C47.0736 3.34964 55.5726 2.79394 64.3208 2.6555C73.5736 2.50907 82.2926 1.01145 91.6664 1.01145C109.769 1.01145 127.529 0.796534 145.461 2.22926C155.391 3.02265 165.127 4.08618 174.936 5.15202C179.048 5.59885 182.977 6.51409 187.04 6.97875C190.368 7.3595 192.419 6.82795 195.109 8.13568C200.912 10.9567 191.853 8.90007 188.104 8.44013C161.433 5.16789 132.665 5.56812 105.395 5.97405C94.3794 6.13803 83.3357 6.68278 72.3339 7.03964C59.1773 7.4664 46.8829 10.3944 34.3975 12.4589C33.9091 12.5397 10.7297 16.4665 11.3106 16.7822C11.9822 17.147 14.706 16.904 15.5694 16.904C24.1135 16.904 32.2952 15.9622 40.6175 14.9859C51.6203 13.6952 62.2701 13.6159 73.3986 13.6159C97.7097 13.6159 122.36 12.9729 146.47 14.5901C151.945 14.9574 165.948 15.2962 168.436 18" stroke="#008DD9" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='lg:-ml-7 md:ml-3'>us</p>
            </div>

            <div className="mt-8 md:mt-14 flex md:flex-row flex-col justify-center items-center lg:gap-20 gap-10 ">
                <img src="https://s3-alpha-sig.figma.com/img/e4b9/3ace/226c3e1f7a8f3824955999d207f510fc?Expires=1692576000&Signature=JAMhBDNpsKxcFk8lMpCxU6Sm9dQfcDVXPADzdTr-C~sFSbHGYRmsmCFALJdIfwd6sihA3P2JkUyH-KfGLyRHoFe9f8h2t8hkZJ8HH4pq2l7fQfYsYV-iuBS7WKT2y7TFqAwqDjFGJcBg-p8DKZdEW-ar5Wxhef0b~7~n6DPA8xhrYQi7a9aqKlmZc5ev82lKdM69l7umfJloE7S879k7UBV-Hp-d51-tYqcw1iX-dq9ArHMRcmZK9Ma0ZXuU-kX5G0FA2JBD9AIw4imyRuO~8LbHPxhq1I0emCscKdZXXg5LhlgHBc4yejaHNUrsJwY1k1pn~qT3nrx0sMhMPMUZFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="lg:w-[470px] h-[339px] w-full md:w-[350px] " id="contact-img" alt="" />
                <div className="">
                <div className="relative flex  items-center md:gap-7">
                    
                    <img src={circleIcon}  className='' alt="" />
                    <img src={personIcon}  className='absolute md:top-[24px] md:left-[30px]
                     top-[24px] left-[30px]' alt="" />
                    
                    <input type="text" placeholder="Full Name" className="input input-bordered lg:w-[600px]  max-w-xs " />
                </div>
                <div className="relative flex  items-center md:gap-7">
                    
                    <img src={circleIcon}  className='' alt="" />
                    <img src={mailIcon}  className='absolute md:top-[24px] md:left-[30px] top-[24px] left-[30px]' alt="" />
                    
                    <input type="text" placeholder="Email" className="input input-bordered lg:w-[600px]  max-w-xs " />
                </div>
                <div className="relative flex  items-center md:gap-7">
                    
                    <img src={circleIcon}  className='' alt="" />
                    <img src={callIcon}  className='absolute md:top-[24px] md:left-[30px] top-[24px] left-[30px]' alt="" />
                    
                    <input type="text" placeholder="Phone number" className="input input-bordered lg:w-[600px]  max-w-xs " />
                </div>
                <button className='btn  capitalize bg-[#008DD9] rounded-[10px] text-white text-xl font-medium w-[180px] h-[50px] ml-[12px] md:ml-[10px] lg:ml-[270px] mt-3'>Submit</button>
                </div>



            </div>


        </div>
    );
};

export default ContactPage;