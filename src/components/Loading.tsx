import React from 'react';
import { BarLoader } from 'react-spinners';
interface LoadingOverlayProps {
  loading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loading }) => {
  return loading ? (
    <div className='absolute w-screen h-screen bg-white'>
      <BarLoader
        color='#FF0000'
        height={4}
       />
    </div>
  ) : null;
};

export default LoadingOverlay;