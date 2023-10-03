
const Hero = () => {

  return (
    <section
      className='text-gray-600 body-font bg-indigo-100'
      style={{ minHeight: 'calc(85vh - 60px)' }}
    >
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div className='lg:w-2/3 w-full'>
          <div className='flex flex-col items-center justify-center lg:flex-row'>
            <div className='lg:w-1/2 lg:pr-12 lg:py-6 mb-6 lg:mb-0'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center lg:text-left'>
                TIENDA DE LUBRICANTES
              </h1>
              <p className='mb-8 leading-relaxed text-center lg:text-left'>
                Confía en nosotros para mantener tu motor funcionando sin problemas: Lubricantes
                de calidad y cambios de aceite expertos en un solo lugar

              </p>
              <div className='flex justify-center lg:justify-start'>
                <a href='/sign-in'>
                  <button className='text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4'>
                    Get Started
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:w-1/2 lg:pl-12 lg:py-6'>
              {/* Replace the image source below with your Authentication logo */}
              <img
                className='object-cover object-center rounded'
                alt='Authentication'
                src='/auth.png'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
