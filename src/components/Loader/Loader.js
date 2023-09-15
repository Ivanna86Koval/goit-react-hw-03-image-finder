import { ColorRing } from 'react-loader-spinner';
import { LoaderContainer } from '../Loader';

const Loader = () => {
  return (
    <LoaderContainer>
      <ColorRing
        visible={true}
        height="300"
        width="300"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderContainer>
  );
};
export default Loader;
