import { Modal } from '@mui/material';
import { ModalProps } from '../../Data/types';
import ourPhoto1 from '/our1.jpg';
import ourPhoto2 from '/our2.jpg';
import ourPhoto3 from '/our3.jpg';
import ourPhoto4 from '/our4.jpg';
import ourPhoto5 from '/our5.jpg';
import ourPhoto6 from '/our6.jpg';
import ourPhoto7 from '/our7.jpg';
import ourPhoto8 from '/our8.jpg';
import ourPhoto9 from '/our9.jpg';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalPhotos = ({ open, setOpen }: ModalProps) => {
  const handleClose = () => setOpen(false);
  const modalOpen = Boolean(open);
  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <div className="w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={
            open === 1
              ? ourPhoto1
              : open === 2
              ? ourPhoto2
              : open === 3
              ? ourPhoto3
              : open === 4
              ? ourPhoto4
              : open === 5
              ? ourPhoto5
              : open === 6
              ? ourPhoto6
              : open === 7
              ? ourPhoto7
              : open === 8
              ? ourPhoto8
              : ourPhoto9
          }
          alt="foto nuestra"
          className="object-cover w-full h-full"
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
};

export default ModalPhotos;
