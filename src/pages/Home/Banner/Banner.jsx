
import './Banner.css'
import expertLogo from '../../../assets/stethoscope.svg'
import timeLogo from '../../../assets/lab_profile.svg'
import resetLogo from '../../../assets/device_reset.svg'
import searchLogo from '../../../assets/search.svg'
const Banner = () => {
    return (
        <div className="relative md:mb-24 mb-12">
            <div className="banner lg:h-[680px] md:h-[500px] h-[730px] w-full flex justify-center items-center">
                <div className="flex md:flex-row flex-col justify-center items-center gap-0">
                    <div className="px-3 lg:px-0  md:mt-0">
                        <h3 className="lg:text-5xl text-2xl font-semibold text-[#2F2F2F]">Find the <span className="text-[#138ED1]">Best</span> Cardiologists <br /> in Bhubaneshwar</h3>
                        <p className="lg:text-xl text-sm font-medium lg:mt-6 mt-3">Get all your heart issues treated with the best doctors in town! <br /> Now with us find the best cardiologists in Bhubaneshwar.</p>
                        <button className="btn btn-lg lg:mt-8 mt-3 rounded-[41px] bg-[#138ED1] capitalize md:text-2xl font-medium text-white border-none md:w-[270px] lg:w-[333px] w-[210px]">Book <span className='lowercase'>appointment</span></button>
                        <div className="">
                            <button className="btn btn-lg lg:mt-8 mt-3 rounded-[41px] bg-white capitalize md:text-2xl font-medium text-[#138ED1] border-[1px] border-solid border-[#008DD9] lg:w-[333px] md:w-[270px] w-[210px]">Download <span className='lowercase'>app</span></button>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/1358/2b7b/26f0b94af9a0ce09e38f9af6ecfef800?Expires=1691971200&Signature=DsX1CUk-XkMGd2wfZB5blJgSplIUYV7odi0UXiYKGABZAhYCDPQ0AbGQsr312ULTrpyBTTyEtc3YN8yrbdqI7KOC6qSEAEf4mu99hz3-05IIJ14~n2ZdVIqLd9pEHceBQf9rbgqvUmJT8QG6NrfNT~itF45GhiARHU1QsjMrBHxKc7Jvi08Gr5~Lg-rIgtbHtQhRfPoSO~qqbn1MaI-oX3-phuVW2wVEDBsYn4e0moYHF1ntgxueMjx~xA7E6AJerv3TyomB~l-uQQ7O6r7UKhCp-cpUf3X-s7QnzYWGHsjdigPVs~U4Qw2eJS-FBC88jPQ~mdVCM~3Xl0JepOSQ4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="lg:w-[531px] md:w-[550px] md:h-[h-578px] w-full" alt="" />
                    </div>
                </div>

            </div>
            <div className="lg:w-[283px] lg:h-[150px] md:w-[260px] md:h-[150px] bg-white rounded-[28px] shadow-lg md:p-4 p-2 absolute lg:left-[830px] lg:bottom-[110px]
              md:left-[400px] md:bottom-[40px] left-[30px] bottom-[30px]">
                
                <div className="flex items-center gap-4">
                 <div className="bg-[#75CFFF] rounded-[50%] w-[33px] h-[33px] flex justify-center items-center">
                 <img src={expertLogo} alt="" className=' w-5 h-5 ' />
                 </div>
                    <p className='text-base font-semibold'>50+ Expert cardiologists</p>
                </div>
                <div className="flex items-center gap-4 my-3">
                 <div className="bg-[#75CFFF] rounded-[50%] w-[33px] h-[33px] flex justify-center items-center">
                 <img src={timeLogo} alt="" className=' w-5 h-5 ' />
                 </div>
                    <p className='text-base font-semibold'>Timely report delivery</p>
                </div>
                <div className="flex items-center gap-4">
                 <div className="bg-[#75CFFF] rounded-[50%] w-[33px] h-[33px] flex justify-center items-center">
                 <img src={resetLogo} alt="" className=' w-5 h-5 ' />
                 </div>
                    <p className='text-base font-semibold'>24x7 medical assistance</p>
                </div>
            </div>
            {/* search */}
        <div className="mb-8 absolute lg:left-[210px] lg:top-[640px] md:left-[22px] md:top-[470px] left-[20px] -bottom-[80px]">
                <input type="text" placeholder='Search for doctors, hospitals, medicines...' className='lg:pl-8 md:pl-3 pl-1 search lg:w-[706px] md:w-[500px] md:h-[75px] w-[300px] h-[60px]  text-[#6E6E6E] md:text-xl text-sm font-normal' />
            <div className="bg-[#138ED1] md:w-[80px] md:h-[75px] h-[60px] flex justify-center items-center absolute lg:left-[627px] md:left-[420px] md:bottom-0 left-[250px] 
            top-0 cursor-pointer">
                <img src={searchLogo} alt="" />
            </div>

        </div>

        </div>
    );
};

export default Banner;