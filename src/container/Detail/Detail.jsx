import { useCarDetail } from '../../stores/CarDetailProvider';
import Summary from './component/Summary';
import SubDecription from './component/SubDescription';
import LoadingCar from '../../components/common/LoadingCar';
import Blank from '../../components/layout/Blank';
import { DetailSection } from './component/styles';

const DetailContainer = () => {
  const { isLoading } = useCarDetail();

  return (
    <>
      {isLoading && <LoadingCar />}
      <DetailSection>
        <Summary />
        <SubDecription />
        <Blank />
      </DetailSection>
    </>
  );
};

export default DetailContainer;
