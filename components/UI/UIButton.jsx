const UIButton = ({ children, ...res }) => {
   return (
      <button {...res} className='mt-3 w-full rounded-md bg-primary px-3 py-2.5 text-center text-white transition-all hover:bg-primary-500 active:bg-primary-400'>
         {children}
      </button>
   );
};

export default UIButton;
