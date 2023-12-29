import { Card } from '../Card/Card';
import { CarouselContainer } from './CarouselContainer';

export const CarouselList = () => {
  const cardsData = [
    {
      title: 'Color',
      imageUrl: '/color.png',
      anchorId: 'color',
    },
    {
      title: 'Font',
      imageUrl: '/font.png',
      anchorId: 'font',
    },
    {
      title: 'Border',
      imageUrl: '/border.png',
      anchorId: 'border',
    },
    {
      title: 'Margin',
      imageUrl: '/margin.png',
      anchorId: 'margin',
    },
    {
      title: 'Padding',
      imageUrl: '/padding.png',
      anchorId: 'padding',
    },
    {
      title: 'Flexbox',
      imageUrl: '/flexbox.png',
      anchorId: 'flexbox',
    },
  ];
  return (
    <CarouselContainer>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          anchorId={card.anchorId}
        />
      ))}
    </CarouselContainer>
  );
};
