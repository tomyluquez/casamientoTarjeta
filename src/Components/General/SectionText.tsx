import { useState } from 'react';
import ButtonCustom from './Buttons/ButtonCustom';
import FormDialog from './Modals/Modal';
import { type PropsSectionText } from '../../Data/types';

const SectionText = ({
  description,
  buttonText,
  iconText,
  titleModal,
  textModal,
  form,
}: PropsSectionText) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <section className="flex mt-12 min-h-[100px] flex-col items-center justify-center gap-8">
      <p className="text-xl text-3xl text-center">{description}</p>
      <FormDialog
        open={open}
        setOpen={setOpen}
        text={titleModal}
        intro={textModal}
        form={form}
      />
      <ButtonCustom text={buttonText} icon={iconText} onClick={handleOpen} />
    </section>
  );
};

export default SectionText;
