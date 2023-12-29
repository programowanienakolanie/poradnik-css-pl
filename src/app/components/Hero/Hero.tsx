import React from 'react';

export const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between py-12 '>
      <div className='text-container md:w-1/2 mb-4 md:mb-0'>
        <h1 className='text-6xl mb-4'>Stylizuj z Elegancją</h1>
        <p className='ml-8 text-2xl'>Sztuka wizualnej harmonii.</p>
        <p className='w-96 text-right text-2xl'>Od wizji do realizacji.</p>
      </div>

      <div className='image-container md:w-1/2'></div>
    </section>
  );
};
