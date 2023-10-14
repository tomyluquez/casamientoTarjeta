import { useState } from 'react';
import ModalPhotos from './ModalPhotos';
import ourPhotosJson from '../../Data/ourPhotos.json';
import CarouselCustom from '../General/Carousel';

const OurPhotos = () => {
  const [open, setOpen] = useState<number | boolean>(false);
  return (
    <div className="flex flex-col gap-12 items-center justify-center py-12">
      <h2 className="text-2xl text-center border-t-2 border-b-2">NOSOTROS</h2>
      <div className="w-full h-[250px]">
        <CarouselCustom images={ourPhotosJson.data} />
      </div>
      <ModalPhotos open={open} setOpen={setOpen} />
    </div>
  );
};

export default OurPhotos;
