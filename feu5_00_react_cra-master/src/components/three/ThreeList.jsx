import PartAbout from './PartAbout';
import PartCompany from './PartCompany';
import PartServices from './PartServices';

function ThreeList() {
  return (
    <div className="gridThree">
      <PartAbout />
      <PartCompany />
      <PartServices />
    </div>
  );
}

export default ThreeList;
