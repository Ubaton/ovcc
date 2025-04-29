import React from 'react';
import BackButton from '../components/BackButton/BackButton';

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-black relative py-20 px-6 md:px-20 overflow-hidden">
      <BackButton/>
      <h1 className="text-2xl font-light italic">Coming soon...</h1>
    </div>
  );
};

export default page;
