import React from 'react'
const Hero = () => {
  
    const TherapyOption = ({ title, imageUrl, altText }) => (
        <div className="max-md:ml-0 max-md:w-full">
          <div className="flex flex-col  items-center p-10  w-full text-black whitespace-nowrap bg-white rounded-lg hover:bg-lightyellow max-md:mt-6 ">
            <div className="justify-center text-2xl max-md:px-5">{title}</div>
            <img 
              loading="lazy" 
              src={require(`${imageUrl}`)}
              alt={altText} 
              className="hero-img transition ease-in-out duration-700 hover:scale-125   w-52" />
              
            
          </div>
        </div>
      );
      
      const therapyOptions = [
        {
          title: "Individual Therapy",
          imageUrl: "./images/Individual-Therapy-img.png",
          altText: "An icon representing individual therapy"
        },
        {
          title: "Group Therapy",
          imageUrl: "./images/Group-Therapy-img.png",
          altText: "An icon representing group therapy"
        },
        {
          title: "Support Group",
          imageUrl: "./images/Support_Group-img.png",
          altText: "An icon representing support group"
        }
      ];

  return (
    <div>
         <main className="flex justify-center items-center px-16 py-12 bg-skyblue max-md:px-5">
      <div className="flex flex-col items-center mt-8 w-full max-w-[1128px] max-md:max-w-full">
        <header className="text-5xl font-extralight  text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Find Your Path to Mental Wellness with AroundWithin
        </header>
        <section className="mt-8 text-3xl font-extralight leading-10 text-center text-zinc-800 max-md-w-full">
          Join a community of individuals committed to mental well-being and gain access to valuable resources and support
        </section>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center gap-10 max-md:flex-col max-md:gap-0 max-md:">
            {therapyOptions.map(option => (
              <TherapyOption 
                key={option.title} 
                title={option.title} 
                imageUrl={option.imageUrl} 
                altText={option.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Hero