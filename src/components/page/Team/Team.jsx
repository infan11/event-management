import imageA from '../../../assets/teamMember/half-length-portrait-arabian-saudi-businessman-dark-blue-studio-background-young-male-model-standing-smiling-concept-business-finance-facial-expression-human-emotions.jpg'
import imageB from '../../..//assets/teamMember/handsome-bearded-guy-posing-against-white-wall.jpg'
import imageC from '../../..//assets/teamMember/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg'

const Team = () => {
    return (
        <div>
            <div data-aos="zoom-in">
                <h2 className="text-center mt-10 text-4xl  font-bold  font-mono animate-bounce duration-150 bg-amber-700 text-white w-96 p-4 mx-auto">Team Member</h2>
            </div>
         <div className='grid md:grid-cols-3 gap-8' data-aos="zoom-in">
         <div>
         <div className=" w-96  shadow-xl">
  <figure className="">
    <img src={imageA} alt="men" className="relative" />
  </figure>

</div>
         
         <div className="   ml-3">
    <h2 className="text-2xl font-bold font-mono text-purple-500">Atawor Rahman</h2>
    <p className='text-2xl font-bold font-mono text-purple-500'>Owner</p>
  </div>
        </div> 
        <div>
         <div className=" w-96  shadow-xl">
  <figure className="">
    <img src={imageB} alt="men" className="relative" />
  </figure>

</div>
         
         <div className="  ml-3">
    <h2 className="text-2xl font-bold font-mono text-purple-500">Pervez Rahman</h2>
    <p className='text-2xl font-bold font-mono text-purple-500'>Employer</p>
  </div>
        </div> 
        <div>
         <div className=" w-96  shadow-xl">
  <figure className="">
    <img src={imageC} alt="men" className="relative" />
  </figure>

</div>
         
         <div className="  ml-3">
    <h2 className="text-2xl font-bold font-mono text-purple-500">Mosharof Kondoker</h2>
    <p className='text-2xl font-bold font-mono text-purple-500'>Employer</p>
  </div>
        </div> 
         </div>
        </div>
    );
};

export default Team;