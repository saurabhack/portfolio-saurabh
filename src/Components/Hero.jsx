function  Hero(){
    return(
        <>
         <section className="flex min-h-screen flex-wrap items-center">
            <div className="w-full md:w-1/2">
            <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                Saurabh vikas kamane
            </h2>
            <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                Hello there 👋🏻
            </p>
            <p className="mb-8 p-2 text-xl">
                i am passionate full stack developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into angaging web experiences for over a decade.
            </p>
            </div>
            <div className="w-full md:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto" width={550} height={550} alt="Saurabh kamane"/> 
            </div>           
            </div>
         </section>
        </>
    )
}
export default Hero