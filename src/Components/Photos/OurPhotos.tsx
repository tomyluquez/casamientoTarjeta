import { useState } from 'react';
import Photos from './Photos';
import ModalPhotos from './ModalPhotos';

const OurPhotos = () => {
  const [open, setOpen] = useState<number | boolean>(false);
  return (
    <div className="flex flex-col gap-12 items-center justify-center py-12">
      <h2 className="text-2xl text-center border-t-2 border-b-2">NOSOTROS</h2>
      <Photos setOpen={setOpen} />
      <ModalPhotos open={open} setOpen={setOpen} />
    </div>
  );
};

export default OurPhotos;
