import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

import { CarouselList } from './components/CarouselList/CarouselList';
import MaxWidthWrapper from './components/MaxWidthWrapper/MaxWidthWrapper';
import HowToCSS from './blog/how-to-css.mdx';
import Color from './blog/color.mdx';
import Font from './blog/font.mdx';
import Border from './blog/border.mdx';
import Margin from './blog/margin.mdx';
import Padding from './blog/padding.mdx';
import Flexbox from './blog/flexbox.mdx';
import { Gap } from './components/Gap';
import ScrollToTop from './components/ScrollToTop';
export default function Home() {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <Hero />
        <CarouselList />
        <div className='prose'>
          <HowToCSS />
          <Gap />
          <Color />
          <Gap />
          <Font />
          <Gap />
          <Border />
          <Gap />
          <Margin />
          <Gap />
          <Padding />
          <Gap />
          <Flexbox />
          <Gap />
        </div>
        <ScrollToTop />
      </MaxWidthWrapper>
    </>
  );
}
