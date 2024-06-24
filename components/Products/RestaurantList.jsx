import { useState } from 'react';

const RestaurantList = ({ restaurants, onChange }) => {
   const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0].name);
   const changeRestaurant = (name) => {
      onChange(name);
      setCurrentRestaurant(name);
   };
   return (
      <div className='fixed left-9 top-32 z-10 flex flex-col items-start gap-2'>
         {restaurants &&
            restaurants?.map((rest) => {
               return (
                  <button
                     onClick={() => changeRestaurant(rest.name)}
                     key={rest.id}
                     className={`relative text-lg font-semibold ${currentRestaurant === rest.name ? 'pointer-events-none text-primary-500 after:scale-x-100' : ' text-primary-400 after:scale-x-0 hover:text-primary-500 hover:after:scale-x-100 active:text-primary-600'}  after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-center after:bg-primary-500 after:transition-transform after:duration-300 `}
                  >
                     {rest.name}
                  </button>
               );
            })}
      </div>
   );
};

export default RestaurantList;
