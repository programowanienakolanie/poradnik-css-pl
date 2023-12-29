'use client';

import React from 'react';

import { EB_Garamond } from 'next/font/google';
const garamond = EB_Garamond({ subsets: ['latin'] });

export const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
      <div className={garamond.className}>
        <div className='font-bold text-4xl'>CSS</div>
      </div>
    </header>
  );
};
