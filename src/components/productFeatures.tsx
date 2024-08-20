'use client'
import Image from "next/image";

const features = [
    {
        heading: 'Fall Asleep Faster',
        description: 'No more tossing and turning.'
    },
    {
        heading: 'Deep, Uninterrupted Sleep',
        description: 'Stay asleep without waking up in the middle of the night.'
    },
    {
        heading: 'Wake Up Energized',
        description: 'Feel well-rested and more energized when you wake up in the mornings.'
    },
    {
        heading: 'Better Mood and Focus',
        description: 'Scientifically proven to reduce anxiety and improve cognition and concentration throughout the day.'
    },
    {
        heading: 'No Usual Side Effects',
        description: 'Safe, legal, non-habit forming, and free from melatonin or additives. Won’t cause diarrhea, nausea, or cramps.'
    }
];

const phoneReviews = [
    {
        rating: '4.4/5',
        reviewCount: '1475'
    }
]

const ProductFeatures = () => {
    return (
        <div className="md:mx-[125px] md:pt-[100px] sm:p-[20px] flex sm:flex-col md:flex-row gap-5">
            <div className="flex flex-col sm:w-full md:w-[60%] lg:pt-[30px] md:pt-0  md:order-1 sm:order-2">
                <div className="flex gap-1 items-center relative">
                    <div className="flex mx-[1px]">
                        {[...Array(5)].map((_, index) => (
                            <Image key={index} src='/reviewStar.png' alt="rating" width={15} height={15} unoptimized className='w-[15px] h-[15px] sm:w-[11px] sm:h-[11px] bottom-[1px]' />
                        ))}
                    </div>
                    <h3 className="font-redhat text-[15px] hidden md:flex gap-1">
                        <span className="font-bold">Hundreds </span> of Better Nights of Sleep
                    </h3>
                    {
                        phoneReviews.map((review, index) => (
                            <h3 className="md:hidden sm:flex text-[13px] font-redhat gap-1" key={index}>
                                Rated <span className="text-accent font-bold">{review.rating}</span> based on <span className="font-bold">+{review.reviewCount} reviews</span>
                            </h3>
                        ))
                    }
                </div>

                <h1 className="text-[50px] text-primary font-milknhoney md:block hidden">Better Sleep Naturally</h1>
                <h1 className="text-[31px] font-[400] text-primary font-milknhoney sm:block md:hidden">Deeper Sleep, A Better Version of You</h1>

                {
                    features.map((feature, index) => (
                        <p className="flex gap-2 md:text-[18px] sm:text-[14px] font-redhat items-center py-2 " key={index}>
                            <Image src='/tick.png' alt='tick' width={20} height={20} unoptimized className="md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px]" />
                            <span className="w-full">
                                <span className="font-[700] ">{feature.heading}:</span>
                                <span className="ml-1 font-[600]">{feature.description}</span>
                            </span>
                        </p>
                    ))
                }
                <div className="flex gap-2 sm:flex-col sm:items-center md:items-start justify-center">
                    <button className="bg-accent text-primary font-[700] hidden md:block font-redhat text-[21px] py-2 px-4 rounded-lg mt-5 hover:bg-accent-dark w-[344px] h-[56px]">Shop Now →</button>
                    <button className="bg-accent text-primary font-[700] md:hidden sm:block font-redhat text-[21px] py-2 px-4 rounded-lg mt-5 hover:bg-accent-dark w-full h-[54px]">Claim Offer Now</button>
                    <p className="sm:flex md:hidden items-center gap-1 text-[14px] font-[600] font-redhat"><Image className="w-[14px] h-[14px]" src='/blackTick.png' alt="black tick" unoptimized width={14} height={14} />
                        30 Day Risk Free Gurantee</p>

                </div>
            </div>
            <div className="sm:w-full md:w-[50%] flex items-center justify-center sm:order-1 md:order-2">
                <Image className="md:w-[550px] md:h-[588px] sm:w-full sm:h-full" src='/features.png' alt="featured image" width={550} height={588} />
            </div>
        </div>
    );
}

export default ProductFeatures;
