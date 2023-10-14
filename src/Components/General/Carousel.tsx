import { Carousel } from 'flowbite-react';
const CarouselCustom = ({ images }: { images: string[] }) => {
  return (
    <Carousel>
      {images.map((item: string, index: number) => (
        <div key={index}>
          <img src={item} alt="anillos" />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
