
import './Banner.css'
import expertLogo from '../../../assets/stethoscope.svg'
import timeLogo from '../../../assets/lab_profile.svg'
import resetLogo from '../../../assets/device_reset.svg'
import searchLogo from '../../../assets/search.svg'
const Banner = () => {
    return (
        <div className="relative md:mb-24 mb-12">
            <div className="banner lg:h-[680px] w-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="">
                        <h3 className="md:text-5xl text-2xl font-semibold text-[#2F2F2F]">Find the <span className="text-[#138ED1]">Best</span> Cardiologists <br /> in Bhubaneshwar</h3>
                        <p className="md:text-xl text-sm font-medium mt-6">Get all your heart issues treated with the best doctors in town! <br /> Now with us find the best cardiologists in Bhubaneshwar.</p>
                        <button className="btn btn-lg mt-8 rounded-[41px] bg-[#138ED1] capitalize md:text-2xl font-medium text-white border-none lg:w-[333px]">Book <span className='lowercase'>appointment</span></button>
                        <div className="">
                            <button className="btn btn-lg mt-8 rounded-[41px] bg-white capitalize md:text-2xl font-medium text-[#138ED1] border-[1px] border-solid border-[#008DD9] lg:w-[333px]">Download <span className='lowercase'>app</span></button>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/1358/2b7b/26f0b94af9a0ce09e38f9af6ecfef800?Expires=1691971200&Signature=DsX1CUk-XkMGd2wfZB5blJgSplIUYV7odi0UXiYKGABZAhYCDPQ0AbGQsr312ULTrpyBTTyEtc3YN8yrbdqI7KOC6qSEAEf4mu99hz3-05IIJ14~n2ZdVIqLd9pEHceBQf9rbgqvUmJT8QG6NrfNT~itF45GhiARHU1QsjMrBHxKc7Jvi08Gr5~Lg-rIgtbHtQhRfPoSO~qqbn1MaI-oX3-phuVW2wVEDBsYn4e0moYHF1ntgxueMjx~xA7E6AJerv3TyomB~l-uQQ7O6r7UKhCp-cpUf3X-s7QnzYWGHsjdigPVs~U4Qw2eJS-FBC88jPQ~mdVCM~3Xl0JepOSQ4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-[531px] md:h-[h-578px] w-full" alt="" />
                    </div>
                </div>

            </div>
            <div className="md:w-[283px] md:h-[150px] bg-white rounded-[28px] shadow-lg md:p-4 p-2 absolute lg:right-[300px] lg:bottom-[240px]">
                
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
        <div className="mb-8 absolute lg:left-[210px] lg:top-[640px]">
                <input type="text" placeholder='Search for doctors, hospitals, medicines...' className='pl-8 search lg:w-[706px] lg:h-[75px] text-[#6E6E6E] text-xl font-normal' />
            <div className="bg-[#138ED1] md:w-[80px] md:h-[75px] flex justify-center items-center absolute md:left-[627px] md:bottom-0 cursor-pointer">
                <img src={searchLogo} alt="" />
            </div>

        </div>

        </div>
    );
};

export default Banner;