import callIcon from '../../../assets/call2.svg'
const Footer = () => {
    return (
      <div className=" p-10 bg-[#1F1F1F]  text-white">
          <footer className="footer p-10 bg-[#1F1F1F]  text-white">
        <div>
         <img src="https://s3-alpha-sig.figma.com/img/629f/f9bc/1671f45dd70fcc98ccd63fd9b593b28e?Expires=1692576000&Signature=DpbXVBjhLgSPmCL9UjKp5Ni6Y5FASMGEdQcFQRLHLk2LJ5uGOQZMvrDZk67ZtrqzMkxixUQRH6agiQntzq4UkkXjwlMaNNHGUniVRTfQBkEZpqKyqGPQHVBd93pY2D~ySEmNDPrRXU0QT5XxFvI2vTAve~A19g46IKNFalkUigvSz3lSeucSJA2LXJaG6C1ZcneIqLxcSzarNTlQy3NwWkT8q6tlc4L2RXrZMit3LnbZyrakZc0LwCzWSRNWs93gFCjYLiTNUYQwCtQL7hE0sNGiNXjbMO0PPkQ2zunHiysD87Mr7b7Y2mo5FGbVAiFbvoXu-c~-ooxbzhETM04ZyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="w-[130px] h-[130px]" alt="" />
          <p>Book doctor appointments online and get your ailments treated  <br />in no time with our expert medical support systems.Get rid <br /> of all your medical problem with our expert panel of doctors who <br /> guide you towards a healthier life.</p>
          <div className="relative mt-5">
                            <input type="text" placeholder='+91 |' className='pl-8 call lg:w-[400px] md:h-[75px] w-[300px] h-[50px] text-black text-2xl font-semibold' />
                            <div className="bg-[#138ED1] md:w-[80px] md:h-[75px] h-[50px] flex justify-center items-center absolute right-0 lg:bottom-[0px]   cursor-pointer bottom-[0px] md:bottom-0 call-icon">
                                <img src={callIcon} alt="" className='' />
                            </div>

                        </div>
        </div> 
        <div className='md:mt-24'>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Appointments</a> 
          <a className="link link-hover">Lab tests</a> 
          <a className="link link-hover">A-Z medicine</a> 
          <a className="link link-hover">Doctor support</a>
        </div> 
        <div className='md:mt-24'>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">General info</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Terms of services</a> 
          <a className="link link-hover">Consultation</a>
          <a className="link link-hover">How it works</a>
        </div> 
        <div className='md:mt-24'>
          <span className="footer-title">Talk to us</span> 
          <a className="link link-hover">support@notinline.com</a> 
          <a className="link link-hover">appointment@notinline.com</a> 
          <a className="link link-hover">+91 12345 67899</a>
          <a className="link link-hover">+91 97642 09752</a>
        </div>
  
      </footer>
        <hr className="text-white border-white bg-white" />
        <p className="mt-8">© 2021-2023 All Rights Reserved</p>
      </div>
    );
};

export default Footer;