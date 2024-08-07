import Image from 'next/image';
import Link from 'next/link';
import homemadeFoodImage from '@/assets/image/homemade_food.webp';
import pizzaImage from '@/assets/image/BigPizza.jpg';
// import burgerImage from '@/assets/image/IQBurger.webp';
import burgerImage from '@/assets/image/burger.jpg';
import sushiImage from '@/assets/image/sea_and_rice.webp';
import deliveryImage from '@/assets/image/delivery-image.webp';

export default function Home() {
   return (
      <div className='container mx-auto p-4'>
         <section className='py-8 text-center'>
            <h1 className='animate-fadeIn mb-4 text-4xl font-bold text-primary'>
               Welcome to Yum Yum Delivery!
            </h1>
            <p className='animate-fadeIn text-xl text-grey-700'>
               Your Favorite Meals Delivered Fast and Fresh
            </p>
         </section>

         <section className='py-8'>
            <h2 className='animate-fadeIn mb-6 text-center text-3xl font-bold text-primary'>
               About Us
            </h2>
            <div className=' mx-auto flex max-w-6xl gap-3 rounded-sm p-2 bg-gradient-to-br from-primary-100/5 to-primary-200/70'>
               <Image src={deliveryImage} alt='delivery-man-image' width={300} height={300} />
               <p className='animate-fadeIn my-auto text-center text-lg leading-relaxed text-grey-800'>
                  Yum Yum Delivery is your go-to service for fast, reliable, and delicious food
                  delivery. Whether you&apos;re craving a hearty pizza, a juicy burger, homemade
                  comfort food, or a taste of the sea, we&apos;ve got you covered. Our mission is to
                  bring your favorite meals from your favorite restaurants straight to your doorstep
                  with just a few clicks.
               </p>
            </div>
         </section>
         <section className='py-8'>
            <h2 className='animate-fadeIn mb-6 text-center text-3xl font-bold text-primary'>
               Our Partner Restaurants
            </h2>
            <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2'>
               <div className='flex flex-col justify-center gap-3 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-accent mb-2 text-center text-2xl font-bold'>BigPizza</h3>
                  <p className='text-center text-grey-700'>
                     Indulge in the best pizzas in town, made with the freshest ingredients and a
                     whole lot of love. From classic Margheritas to gourmet specialties, BigPizza
                     has something for every pizza lover.
                  </p>
               </div>
               <div className='animate-slideInRight relative min-h-80'>
                  <Image
                     src={pizzaImage}
                     alt='big-pizza-image'
                     sizes='100%'
                     fill
                     className='object-cover'
                  />
               </div>
               <div className='animate-slideInLeft relative min-h-80'>
                  <Image
                     src={burgerImage}
                     alt='iq-burger-image'
                     sizes='100%'
                     fill
                     className='object-cover'
                  />
               </div>
               <div className='flex flex-col justify-center gap-3 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-accent mb-2 text-center text-2xl font-bold'>IQ Burger</h3>
                  <p className='text-center text-grey-700'>
                     Satisfy your burger cravings with IQ Burger&apos;s mouth-watering selections.
                     Enjoy juicy, perfectly cooked burgers topped with fresh veggies, delicious
                     sauces, and the finest cheeses.
                  </p>
               </div>
               <div className='flex flex-col justify-center gap-3 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-accent mb-2 text-center text-2xl font-bold'>
                     Homemade Dishes
                  </h3>
                  <p className='text-center text-grey-700'>
                     Craving some comfort food? Homemade Dishes offers a variety of hearty meals
                     that taste just like home. From succulent roasts to creamy pastas, every dish
                     is made with care and passion.
                  </p>
               </div>
               <div className='animate-slideInRight relative min-h-80'>
                  <Image
                     src={homemadeFoodImage}
                     alt='homemade-dishes-image'
                     sizes='100%'
                     fill
                     className='object-cover'
                  />
               </div>
               <div className='animate-slideInLeft relative min-h-80'>
                  <Image
                     src={sushiImage}
                     alt='sea-and-rice-image'
                     sizes='100%'
                     fill
                     className='object-cover'
                  />
               </div>
               <div className='flex flex-col justify-center gap-3 rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-accent mb-2 text-center text-2xl font-bold'>Sea and Rice</h3>
                  <p className='text-center text-grey-700'>
                     For seafood enthusiasts, Sea and Rice delivers a delightful array of dishes
                     inspired by the ocean. Enjoy fresh sushi, flavorful seafood platters, and much
                     more, all prepared with the finest ingredients.
                  </p>
               </div>
            </div>
         </section>

         <section className='py-8'>
            <h2 className='animate-fadeIn mb-6 text-3xl font-bold text-primary'>
               Why Choose Yum Yum Delivery?
            </h2>
            <ul className='animate-fadeIn list-inside list-disc text-lg text-grey-800'>
               <li>
                  <span className='font-bold text-success-500'>Fast and Reliable Service:</span> We
                  pride ourselves on delivering your food quickly and in perfect condition.
               </li>
               <li>
                  <span className='font-bold text-success-500'>Wide Selection:</span> Choose from a
                  diverse range of cuisines and dishes from our partner restaurants.
               </li>
               <li>
                  <span className='font-bold text-success-500'>Easy Ordering:</span> Our
                  user-friendly platform makes it simple to browse menus, place orders, and track
                  your delivery in real time.
               </li>
               <li>
                  <span className='font-bold text-success-500'>Quality Assurance:</span> We work
                  closely with our partner restaurants to ensure that you receive high-quality,
                  delicious meals every time.
               </li>
            </ul>
         </section>

         <section className='py-8'>
            <h2 className='animate-fadeIn mb-6 text-3xl font-bold text-primary'>How It Works</h2>
            <ol className='animate-fadeIn list-inside list-decimal text-lg text-grey-800'>
               <li>
                  <span className='font-bold text-warning'>Browse Menus:</span> Explore the menus of
                  our partner restaurants and find your favorite dishes.
               </li>
               <li>
                  <span className='font-bold text-warning'>Place Your Order:</span> Add your chosen
                  items to your cart and proceed to checkout.
               </li>
               <li>
                  <span className='font-bold text-warning'>Track Your Delivery:</span> Stay updated
                  with real-time tracking as your meal makes its way to you.
               </li>
               <li>
                  <span className='font-bold text-warning'>Enjoy Your Meal:</span> Sit back, relax,
                  and enjoy your delicious food delivered right to your door.
               </li>
            </ol>
         </section>

         <section className='py-8 text-center'>
            <h2 className='animate-fadeIn mb-6 text-3xl font-bold text-primary'>Join Us Today!</h2>
            <p className='animate-fadeIn mx-auto mb-6 max-w-xl text-lg text-grey-800'>
               Ready to experience the best in food delivery? Create an account with Yum Yum
               Delivery and get started on your culinary adventure. Your favorite meals are just a
               few clicks away!
            </p>
            <Link
               href='/products'
               className='animate-fadeIn rounded-lg bg-primary px-4 py-2 text-white shadow-lg transition duration-300 hover:bg-primary-700'
            >
               Get Started
            </Link>
         </section>
      </div>
   );
}
