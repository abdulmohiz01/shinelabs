import Image from "next/image";

const phoneReviews = [
    {
        rating: '4.4/5',
        reviewCount: '1475'
    }
];

const cardData = [
    {
        name: 'Justin Pham',
        title: 'Fell Asleep Super Fast',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque placeat dolor, debitis voluptas maiores iste voluptate possimus at ex odio mollitia ipsa dolores veritatis dignissimos, minus animi assumenda natus ducimus!',
        imageUrl: '/person-1.png',
    },
    {
        name: 'Jessica Lee',
        title: 'Best Sleep Ever!',
        description: 'Aliquam nec dui at nulla posuere suscipit. Fusce eget risus vestibulum, porttitor mi ut, facilisis elit. Curabitur condimentum.',
        imageUrl: '/person-2.png',
    },
    {
        name: 'Michael Smith',
        title: 'Very Comfortable',
        description: 'Praesent interdum erat nec felis aliquam, ac convallis lectus aliquet. Donec ut ante vitae augue pulvinar malesuada.',
        imageUrl: '/person-3.png',
    },
    {
        name: 'Emily Davis',
        title: 'Highly Recommend',
        description: 'Nunc dignissim turpis nec urna auctor, et malesuada metus gravida. Vestibulum eu dolor tincidunt, vulputate sapien eu, condimentum turpis.',
        imageUrl: '/person-4.png',
    },
    {
        name: 'John Doe',
        title: 'Incredible Experience',
        description: 'Sed sed nibh vel felis consectetur tincidunt vel ut risus. Quisque finibus, quam sit amet congue tincidunt, libero arcu vehicula sem.',
        imageUrl: '/person-5.png',
    },
];

// Duplicate card data for seamless animation
const duplicatedCardData = [...cardData, ...cardData, ...cardData, ...cardData, ...cardData];

const ReviewSlider = () => {
    return (
        <div className="bg-[#F8F8F8] sm:h-[750px] md:h-[800px] flex flex-col items-center gap-3 md:pt-[50px] sm:pt-[30px] overflow-hidden">
            <div className="flex gap-1 sm:flex-col md:flex-row sm:items-center">
                <img src="/persons.png" alt="" className="h-[31px] w-[67px]" />
                <div className="flex gap-1 items-center relative">
                    <div className="flex mx-[1px]">
                        {[...Array(5)].map((_, index) => (
                            <Image key={index} src='/pinkStar.png' alt="rating" width={15} height={15} unoptimized className='w-[15px] h-[15px] sm:w-[11px] sm:h-[11px] bottom-[1px]' />
                        ))}
                    </div>
                    {phoneReviews.map((review, index) => (
                        <h3 className="flex text-[13px] font-redhat gap-1" key={index}>
                            Rated <span className="text-accent font-bold">{review.rating}</span> based on <span className="font-bold">+{review.reviewCount} reviews</span>
                        </h3>
                    ))}
                </div>
            </div>
            <div className="font-milknhoney">
                <h1 className="sm:hidden md:block md:text-[64px] sm:text-[34px] font-[400] text-primary">Reviews from Real People</h1>
                <h1 className="md:hidden sm:block sm:text-[34px] font-[400] text-primary text-center sm:w-[321px] w-full">Real Reviews from Real People</h1>
            </div>

            {/* Card */}
            <div className="flex gap-3 md:animate-cardSlide sm:animate-cardSlide-sm">
                {duplicatedCardData.map((card, index) => (
                    <div key={index} className="md:w-[310px] md:h-[484px] sm:w-[295px] sm:h-[433px] bg-white rounded-3xl md:mt-[50px] px-5 pt-4">
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center w-full">
                                <Image unoptimized src={card.imageUrl} className="rounded-lg w-full md:h-[253px] sm:h-[226px]" width={294} height={253} alt={`${card.name} image`} />
                            </div>
                            <div className="flex md:my-1 sm:my-1">
                                <div className="font-redhat flex items-start flex-col">
                                    <h3 className="font-[500] text-[17px] sm:text-[15px]">{card.name}</h3>
                                    <div className="flex items-center w-[200px]">
                                        <Image src='/greenTick.png' className="mx-1 w-[12px] h-[12px]" alt="green tick" width={12} height={12} />
                                        <h3 className="text-[#60D6B1] md:text-[12px] sm:text-[10px] font-[700]">Verified Customer</h3>
                                    </div>
                                </div>
                                <div className="flex mt-[20px]">
                                    {[...Array(5)].map((_, index) => (
                                        <Image key={index} src='/reviewStar.png' alt="rating" width={15} height={15} unoptimized className='w-[15px] h-[15px] sm:w-[11px] sm:h-[11px] bottom-[1px]' />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="font-redhat md:text-[18px] sm:text-[16px] font-[700]">"{card.title}"</h2>
                            </div>
                            <div className="font-redhat font-[700] md:text-[14px] sm:text-[12px]">
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSlider;
