import Image from 'next/image';

interface SlidingFeaturesProps {
    icon: string;
    title: string;
    alt: string;
}

let data: SlidingFeaturesProps[] = [
    {
        icon: '/block.png',
        title: 'Melatonin Free',
        alt: 'Melatonin Free'
    },
    {
        icon: '/heart-2.png',
        title: 'Better Cardiac Health',
        alt: 'Better Cardiac Health'
    },
    {
        icon: '/star.png',
        title: 'No Grogginess',
        alt: 'No Grogginess'
    },
    {
        icon: '/time.png',
        title: 'Sleep Faster',
        alt: 'Sleep Faster'
    },
    {
        icon: '/stress.png',
        title: 'Reduce Stress',
        alt: 'Reduce Stress'
    },
    {
        icon: '/arm.png',
        title: 'Faster Recovery',
        alt: 'Faster Recovery'
    }
];

const SlidingFeatures = () => {
    return (
        <div className='relative h-[65px] sm:h-[52px] w-full bg-accent overflow-hidden font-redhat text-[20px] font-[700]'>
            <div className="flex justify-around whitespace-nowrap md:animate-slide sm:animate-slide-sm items-center h-full hold-on-hover gap-10">
                {data.concat(data, data).map((feature, index) => (
                    <div key={index} className="flex gap-2 items-center px-4">
                        <Image
                            src={feature.icon}
                            alt={feature.alt}
                            width={23}
                            height={23}
                            className="sm:w-[17px] sm:h-[17px]" // Adjust size for small screens
                        />
                        <h5 className="leading-none">{feature.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidingFeatures;
