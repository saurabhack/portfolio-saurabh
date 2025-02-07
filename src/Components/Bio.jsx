import { BIO } from ".."

function Bio(){
    return(
        <>
        <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
            <h2 className="text-center text-3xl lg:text-4xl ">Bio</h2>
            <div>
                {BIO.map((Bio,index)=>{
                    return <p key={index} className="mb-4 text-lg lg:text-xl">{
                        Bio
                    }</p>
                })}
            </div>
        </section>
        </>
    )
}
export default Bio