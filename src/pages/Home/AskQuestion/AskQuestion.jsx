
const AskQuestion = () => {
    return (
        <div className="lg:mt-52 lg:mb-[96px]  mb-14 mt-[200px]">
            <div className="md:text-5xl text-2xl font-semibold text-[#2F2F2F] flex justify-center">
                <p>Still have</p>
                <div className="ml-3">
                    <span className='text-[#138ED1]'>questions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='lg:w-[238px] h-[19px] w-[100px]'>
                        <path d="M1 7.58766C15.6967 6.02065 30.9116 5.07645 45.8803 4.05599C56.2414 3.34964 66.4314 2.79394 76.9203 2.6555C88.0143 2.50907 98.4682 1.01145 109.707 1.01145C131.412 1.01145 152.706 0.796534 174.206 2.22926C186.111 3.02265 197.785 4.08618 209.546 5.15202C214.476 5.59885 219.187 6.51409 224.058 6.97875C228.049 7.3595 230.507 6.82795 233.733 8.13568C240.69 10.9567 229.829 8.90007 225.334 8.44013C193.355 5.16789 158.864 5.56812 126.168 5.97405C112.96 6.13803 99.7188 6.68278 86.5279 7.03964C70.7534 7.4664 56.0126 10.3944 41.0429 12.4589C40.4573 12.5397 12.6657 16.4665 13.3622 16.7822C14.1674 17.147 17.4332 16.904 18.4684 16.904C28.7126 16.904 38.5223 15.9622 48.5006 14.9859C61.6927 13.6952 74.4616 13.6159 87.8044 13.6159C116.953 13.6159 146.508 12.9729 175.415 14.5901C181.98 14.9574 198.769 15.2962 201.752 18" stroke="#008DD9" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='lg:-ml-7'>?</p>
            </div>

            {/* questions container */}
            <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-[113px] gap-6 md:gap-12 lg:gap-0">


                <div className="">
                    <img src="https://s3-alpha-sig.figma.com/img/08af/d260/3d9661534d25bfd561f68f49a4a9a673?Expires=1692576000&Signature=COtlUlWDfvnCMQSpsFZWENhuCtjMAOTwSFEtRti0sTFvJnzSvIElhvvfwdjrrgRpJCi4XMwJfe1EBMISWXYDpUqIRjUTT6TDT2Cp~~Tj4GI3Oxznd3YcC5ic-us2HDirpPSON5iSOrw5WcEmKYTBIP4PQ5xEBAXVoq-7jKq8BhaYC8IIqL~xIX78YHHhZvg2Pz4sAIx7ljlQynnfPg9E-D0K3xwL4NorbJjCHmbLzKUMbfxRlzwtsTh6zuUUI3K3DGS4Y-Gq4BghKHzpfsi55hSOa25DSYiQvMaxNHKUQ9J4t9DTKwldgQSVQ9RinBawORcCjo302Hwhhs6SZO-erQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="lg:w-[529px] lg:h-[433px] w-full h-full" alt="" />
                </div>
                {/* questions */}
                <div className="">


         
            <div className="md:text-5xl text-2xl font-semibold text-[#2F2F2F] flex justify-center ">
              
              <div className="ml-3">
                  <span className='text-[#138ED1]'>Frequently</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='lg:w-[272px] h-[19px] w-[100px]'>
                      <path d="M1 7.58766C17.8855 6.02065 35.3665 5.07645 52.5646 4.05599C64.4688 3.34964 76.1765 2.79394 88.2276 2.6555C100.974 2.50907 112.985 1.01145 125.898 1.01145C150.835 1.01145 175.301 0.796534 200.002 2.22926C213.681 3.02265 227.094 4.08618 240.606 5.15202C246.27 5.59885 251.683 6.51409 257.279 6.97875C261.865 7.3595 264.689 6.82795 268.395 8.13568C276.389 10.9567 263.91 8.90007 258.746 8.44013C222.004 5.16789 182.376 5.56812 144.81 5.97405C129.635 6.13803 114.422 6.68278 99.2661 7.03964C81.1422 7.4664 64.206 10.3944 47.0068 12.4589C46.3339 12.5397 14.4032 16.4665 15.2034 16.7822C16.1285 17.147 19.8808 16.904 21.0701 16.904C32.84 16.904 44.1107 15.9622 55.5751 14.9859C70.732 13.6952 85.4027 13.6159 100.733 13.6159C134.222 13.6159 168.179 12.9729 201.392 14.5901C208.934 14.9574 228.224 15.2962 231.651 18" stroke="#008DD9" stroke-width="2" stroke-linecap="round" />
                  </svg>
              <p className=''>questions</p>

              </div>
              <p className='lg:-ml-5 ml-2'>asked </p>
          </div>

          <div className="md:ml-24 mt-9 md:w-[480px] h-[90px] w-full question-box flex items-center pl-5">
             <p className="text-lg font-semibold">Can I book an appointment on behalf of <br /> someone else?</p>
          </div>
          <div className="md:ml-24 mt-[18px] md:w-[480px] h-[90px] w-full question-box flex items-center pl-5">
             <p className="text-lg font-semibold">Why do I need a cardiologist?</p>
          </div>
          <div className="md:ml-24 mt-[18px] md:w-[480px] h-[90px] w-full question-box flex items-center pl-5">
             <p className="text-lg font-semibold">Can I get a weekend appointment</p>
          </div>
          <div className="md:ml-24 mt-[18px] md:w-[480px] h-[90px] w-full question-box flex items-center pl-5">
             <p className="text-lg font-semibold">Is there an option for online consultation?</p>
          </div>
            </div>


                </div>
            </div>
    
    );
};

export default AskQuestion;