'use client';
import Image from 'next/image';

export const Card = ({
  title,
  description,
  imageUrl,
  anchorId,
}: {
  title: string;
  description?: string;
  imageUrl: string;
  anchorId: string;
}) => {
  const handleScroll = () => {
    const element = document.getElementById(anchorId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className='inline-block w-full lg:w-60 mx-4 my-2 bg-gray-100 rounded-lg xl:overflow-hidden hover:bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out'
      onClick={handleScroll}
    >
      <div className='w-32 xl:w-auto'>
        <Image src={imageUrl} width={200} height={200} alt={title} priority />
      </div>

      <div className='p-4'>
        <div className='font-bold text-lg mb-2'>{title}</div>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};
