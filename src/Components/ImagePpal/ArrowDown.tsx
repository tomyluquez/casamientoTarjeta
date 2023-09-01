import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArrowDown = () => {
  return (
    <div className="mb-24">
      <FontAwesomeIcon
        className="arrow-icon"
        icon={faChevronDown}
        style={{ color: '#fafafa' }}
      />
    </div>
  );
};

export default ArrowDown;
