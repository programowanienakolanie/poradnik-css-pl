interface PageWrapperProps {
  children: React.ReactNode; // Typing children
}

export const CarouselContainer = ({ children }: PageWrapperProps) => {
  return (
    <div className='flex mb-16 overflow-x-auto whitespace-nowrap'>
      {children}
    </div>
  );
};
