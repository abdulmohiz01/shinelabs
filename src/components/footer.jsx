import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="md:h-[540px] w-full sm:h-[900px] bg-accent ">
      <div className="md:w-[90%] md:pt-[57px] w-full md:px-[20px] sm:w-full sm:px-[20px] sm:pt-[50px] m-auto flex justify-between sm:flex-col md:flex-row ">
        <div className="flex flex-col items-start  gap-[15px] w-auto text-primary ">
          <Image
            src="/logo.png"
            width={139}
            height={38}
            alt="logo"
            quality={100}
          />
          <h1 className="md:text-[40px] sm:text-[30px] font-[400] font-milknhoney">
            Set an Alarmn with Us!
          </h1>
          <p className="md:text-[16px] sm:text[14px] font-[400] font-redhat">
            Never stay up unless it's for our latest releases, sales and more!
          </p>
          <form onSubmit='/' className="md:w-[340px] sm:w-full h-[60px]  rounded-lg bg-white flex items-center justify-center">
            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-[90%] p-2 placeholder-gray-400 md:placeholder:text-[20px] placeholder:pl-1  placeholder:font-redhat  label:font-[400] label:font-redhat placeholder:font-[700] sm:placeholder:text-[15px]  label:pl-1 label:pt-1 label:pb-1 label:pr-1 focus:outline-none "
            />
            <button  className="relative right-2 bg-accent text-white w-[44px] h-[44px] rounded-lg flex justify-center items-center">
              <Image
                quality={100}
                src="/right.png"
                className="w-[7px] h-[13px]"
                width={7}
                height={13}
                alt="arrow"
                unoptimized
              />
            </button>
          </form>

          <div className="flex gap-3 mt-[10px]">
            <Image
              className="w-[30px] h-[30px]"
              src="/tiktok.png"
              width={30}
              height={30}
              alt="tiktok logo"
            />
            <Image
              className="w-[30px] h-[30px]"
              src="/instagram.png"
              width={30}
              height={30}
              alt="tiktok logo"
            />
            <Image
              className="w-[30px] h-[30px]"
              src="/twitter.png"
              width={30}
              height={30}
              alt="tiktok logo"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1  md:gap-[50px] sm:gap-[20px] md:pt-0 sm:pt-[22px] md:w-[607px] ">
          <div className="text-primary flex flex-col">
            <h1 className="font-milknhoney font-[400] md:text-[23px]  sm:text-[19px]">
              Products
            </h1>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Lights Out
            </Link>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Soon
            </Link>
          </div>
          <div className="text-primary flex flex-col">
            <h1 className="font-milknhoney font-[400] md:text-[23px]  sm:text-[19px]">
              About Us
            </h1>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Our Story
            </Link>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Our Team
            </Link>
          </div>
          <div className="text-primary flex flex-col">
            <h1 className="font-milknhoney font-[400] md:text-[23px]  sm:text-[19px]">
              Support
            </h1>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Shipping
            </Link>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Returns
            </Link>
            <Link
              href="/"
              className="font-redhat md:text[18px] font-[500] sm:text-[15px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-[88%]  m-auto my-[20px] font-redhat flex md:flex-row sm:flex-col justify-between">
        <div className="md:w-[300px]  text-primary flex flex-col md:items-start sm:items-center sm:text-center md:text-start gap-2">
          <p className=" text-opacity-50 md:text-[11px] sm:text-[9px] sm:order-1 md:order-0 ">
            2024 Shine Labs, Inc.
          </p>
          <p className="font-[500] ">
            Shine Labs LLC <br />
            LLC 9169 W State St #942 <br className="hidden sm:block" /> Garden
            City, ID 83714
          </p>
          <Image
            src="/payments.png"
            className="sm:order-3 md:w-[306] md:h-[28] sm:w-[223px] sm:h-[20px]"
            width={306}
            height={28}
            logo="Payment methods"
          />
        </div>
        <div className="md:w-[500px]">
          <p className="text-white md:text-[15px] sm:text-[11px] sm:w-[90%] w-full m-auto pt-[10px] font-[500] ">
            *These statements have not been evaluated by the FDA. These products
            are not intended to diagnose, cure, prevent, or treat any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
