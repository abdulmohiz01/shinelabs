import Image from "next/image"

const Info = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex sm:flex-col lg:flex-row py-[40px] gap-[40px] font-redhat md:w-[80%] sm:px-[20px] m-auto">
        <div className="md:w-[80%] sm:w-full flex items-center justify-center" >
          <Image src='/doctor.png' alt="doctor" width={376} height={562} className="sm:w-[337px] sm:h-[505px] md:w-[375px] md:h-[512px]" />
        </div>
        <div className="flex flex-col items-start mt-[50px]">
          <h3 className="md:text-[22px] sm:text-[19px] text-accent font-[800] ">NEW SCIENTIFIC DISCOVERY</h3>
          <h1 className="text-primary font-[700] md:text-[36px] sm:text-[32px] leading-normal ">Top Physicians Have Discovered The Main, Root Cause Of All Forms Of Sleep Disorders — and How Easy It Actually Is To Fix Your Sleep! </h1>
          <div className="font-[600] md:text-22px sm:text-[19px] text-black flex flex-col justify-around md:h-full sm:h-[363px]">
            <p>Struggle to fall asleep every night? Or do you struggle to STAY asleep — twisting, turning, and waking up a lot all through the night? </p>
            <p>Do you constantly wake up in the mornings feeling tired and fatigued, instead of fresh and clear headed like everyone else?</p>
            <p>Well, news flash: it's your <span className="font-[800] underline">hormones.</span></p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row md:py-[40px] gap-[30px] font-redhat md:w-[80%] sm:px-[20px] m-auto">
        <div className="md:text-[23px] sm:text-[19px]  md:w-[50%] md:h-[560px] sm:h-[480px] sm:order-2 font-[600] flex justify-around flex-col leading-normal md:my-[30px]  ">
          <p>Recent scientific breakthroughs have identified hormonal imbalances as the chief culprit behind poor sleep—whether it's due to stress, age, lifestyle, or even sleep illnesses like insomnia and sleep apnea.¹</p>
          <p>These factors affect key hormones like serotonin and melatonin, which help us wind down and achieve deep sleep. It gets them out of balance, leaving us restless at night and exhausted by morning.²</p>
          <p>The good news is that getting better quality sleep in general is as simple as balancing these hormones out again. </p>
        </div>
        <div className="md:w-[50%] overflow-hidden sm:order-1 flex justify-center">
          <Image className="rounded-xl md:h-[623px] md:w-[603px] sm:w-[377px] sm:h-[367px]" src='/sleepingwoman.jpeg' alt='woman sleeping' width={603} height={623} />
        </div>

      </div>
    </div>
  )
}

export default Info