import DressCode from '../Assistance/DressCode';
import Presents from './Presents';

const SectionTarPre = () => {
  return (
    <div className="flex flex-col gap-24 items-center text-center bg-timer py-12">
      <Presents />
      <DressCode />
    </div>
  );
};

export default SectionTarPre;
