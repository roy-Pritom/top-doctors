import ratingLogo from '../../../assets/grade.svg'
import arrowIcon from '../../../assets/Arrow 1.svg'
import circleIcon from '../../../assets/Ellipse 12.svg'
import circle1Icon from '../../../assets/Ellipse 4.svg'
import circle2Icon from '../../../assets/Ellipse 5.svg'
const TopDoctors = () => {
    return (
        <div>
            <h3 className="text-center md:text-5xl text-3xl font-semibold">Take a look at our list of <span className="text-[#138ED1]">specialized</span><br /> doctors</h3>
            <p className="text-[#6E6E6E] text-center md:text-xl text-sm mt-4">Explore our list of specialized cardiologists and <br /> get treated by the best in the field</p>
            <div className="flex justify-center items-center md:gap-16 gap-8 md:mt-16 mt-12">

                <div className="w-[353px] h-[390px] search pl-8 pt-6  relative">
                    <p className="text-[28px] font-semibold">Dr. Yusuf Qureshi</p>
                    <button className="btn btn-sm bg-[#138ED1] text-sm text-white capitalize rounded-2xl mt-3">Cardiologist</button>
                    <div className="flex gap-1 items-center mt-3">
                        <p className='text-xl font-semibold'>4.3</p>
                        <img src={ratingLogo} alt="" />
                        <p className='text-[#6E6E6E] text-xl font-medium'>( 75 Reviews )</p>
                    </div>
                    <p className='text-xl font-semibold my-2'>150+ patients treated</p>
                    <p className='text-xl font-medium'>12+ years experience</p>
                    <div className="absolute md:left-[49.5px] md:top-[240px]">
                        <img src="https://s3-alpha-sig.figma.com/img/938b/9973/44bb1100a6fa5227a57e12caeb959d9a?Expires=1691971200&Signature=anWq9Oyz7mZIfrkUIaGPlY2CHh9M7FaBbelDooiujLzMFpcLKzxmfv5zuBlRv1yW1tNbPetKhOI4Kh3FV6kxX3YtT8mwvpPA4oXcjwFQ0EyAece2EkcaxYnFj-vRX9XE-cff0BH3mAuk-OOcW2QMP5eMv5SGBf3CY3sI0PQC01SIA8hYYysMAriAf6EbgxgRJV2ZnWFAAilvrqqm6u8MCT6zsKE8heg5nIp4zKun~6aNEWYIs08dh2Ut5WWmj3VLburY4Q7n6NfWKOb3jrCtxk4TnEyAEWnThFothtnYjupLDS0g8HBG2GRIKCVuUWeo9LVhn8i7xCXljsbdKFVSQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='w-[254px] h-[254px] rounded-full' alt="" />
                    </div>
                </div>
                <div className="w-[353px] h-[390px] search pl-8 pt-6  relative">
                    <p className="text-[28px] font-semibold">Dr. Aditya Dutta</p>
                    <button className="btn btn-sm bg-[#138ED1] text-sm text-white capitalize rounded-2xl mt-3">Cardiologist</button>
                    <div className="flex gap-1 items-center mt-3">
                        <p className='text-xl font-semibold'>4.7</p>
                        <img src={ratingLogo} alt="" />
                        <p className='text-[#6E6E6E] text-xl font-medium'>( 100 Reviews )</p>
                    </div>
                    <p className='text-xl font-semibold my-2'>200+ patients treated</p>
                    <p className='text-xl font-medium'>20+ years experience</p>
                    <div className="absolute md:left-[49.5px] md:top-[240px]">
                        <img src="https://s3-alpha-sig.figma.com/img/ec4c/240a/1a413bb7f2a9bf18c275fe325fb2a42f?Expires=1691971200&Signature=bYAbHO~oydyf7yZtaETptzF2Q6BPYzGr-uK0O6XXtcWfYJH8SN8ZVfLzMaSAi5jAPjo6WuM4Ap0Tyj4yZrJeYdH1~8NixZcEfIBpD7aAC57JJGRqENsyZVaiCm7vLTsIUcWGOKBk9xNFY4nELqOJU4Q8s4V~POBq6OFYFxtqP7b1FYeR5Z9JcjB4QxOjiq2CzyoPGXNMU6FNBlNgt4VAzMG~mdyZktXVUMMSrObLJlgLuYM15QHpqDD5g0kH8rFvBJMXUVeyp419dxFGFdDxtQcdzIieM81bhVy8BJCaL~4cw7vMVDkx1SGuvHQedolIt0Jg9ZapgcgcK3TAD8CZdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='w-[254px] h-[254px] rounded-full' alt="" />
                    </div>
                </div>
                <div className="w-[353px] h-[390px] search pl-8 pt-6  relative">
                    <p className="text-[28px] font-semibold">Dr. Diptesh Kumar</p>
                    <button className="btn btn-sm bg-[#138ED1] text-sm text-white capitalize rounded-2xl mt-3">Cardiologist</button>
                    <div className="flex gap-1 items-center mt-3">
                        <p className='text-xl font-semibold'>4.3</p>
                        <img src={ratingLogo} alt="" />
                        <p className='text-[#6E6E6E] text-xl font-medium'>( 43 Reviews )</p>
                    </div>
                    <p className='text-xl font-semibold my-2'>150+ patients treated</p>
                    <p className='text-xl font-medium'>5+ years experience</p>
                    <div className="absolute md:left-[49.5px] md:top-[240px]">
                        <img src="https://s3-alpha-sig.figma.com/img/4ba1/a928/7edc75df58d7daaa6c72497085b3b04a?Expires=1691971200&Signature=fxRH56y6g4pFCFBgfb49oCB4QY3w3b3XBVHkqODlV~eChDAwPWa~mEKPBoAveeGI6TgjzU86PQ1iH~l6PpFnJi3NKfLag4~89~p6S7cgAhagEeRO-qRkOLycc7ymUGmVuiPsKcwUak-52Jf5X3dTdtekxX1gR29wk0daVZadht6cDnO-InzVkcKKANGZ8NOFmDy9RGJaOzWNO2z3VxY0-MKbyZVaORiZW4yzj7Oop5R3HKBXu1rcGjt7naaQLWA~OHEhucniMPOwGinbsGTmzY53qvbdPk063YKFAxCFbEcOvvM7nt9cGqLQ77a-zkKZcM6z4NjDtisqcN2EJBSA5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='w-[254px] h-[254px] rounded-full' alt="" />
                    </div>
                    <div className="cursor-pointer">

                        <img src={circleIcon} className='absolute md:left-[300px] md:top-[100px]' alt="" />
                        <img src={arrowIcon} className='absolute md:left-[360px] md:top-[170px] ' alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-[125px]">
                <img src={circle1Icon} alt="" />
                <img src={circle2Icon} alt="" />
                <img src={circle2Icon} alt="" />
            </div>


     
        </div>
    );
};

export default TopDoctors;