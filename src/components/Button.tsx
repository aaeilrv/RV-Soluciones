import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const PrimaryButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-white hover:bg-[#f0f0f3] text-black rounded-xl text-center mt-4 lg:mt-10 w-2/5 lg:w-[23rem] p-2 md:p-3 lg:p-5">
      <p className="font-bold lg:text-[24px] text-black">{children}</p>
    </button>
  );
};

export const SecondaryButton: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="py-2 px-4 md:px-8 md:py-4 text-sm md:text-lg lg:text-xl rounded-lg md:rounded-xl lg:rounded-2xl text-white bg-[#718da9] hover:bg-[#6881a8]">
      {children}
    </button>
  );
};
