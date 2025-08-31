import { useNavigate } from "react-router-dom";
import demoHeroImg from "/basic.png";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    
    <div className="min-h-[calc(100vh-3.22rem)]  tablet:flex tablet:flex-row-reverse tablet:justify-center tablet:items-center tablet:gap-5 laptop:justify-end laptop:px-16">
    

      <section className="h-[calc(100vh-8rem)] flex justify-center">
        <img className="h-[100%] w-[100%] object-contain " src={demoHeroImg} />
      </section>

      {/* h-fit m:h-[20%] tablet:h-[50%]  */}
      <section className=" tablet:px-5 tablet:w-[60%]">
        <h1 className="text-lg text-center tablet:text-2xl">
          TIMELINE CREATOR
        </h1>
        {/* : A FREE AND EASY TO USE ALTERNATIVE TO CREATE
          CUSTOMIZABLE TIMELINE */}
        <p className="text-[0.8rem] tablet:text-sm text-center hidden tablet:block tablet:my-3 lg:bg-red">
          some thing about timeline creator that I want to say, I should place
          it here!
        </p>

        <div className="flex tablet:flex-col gap-1  justify-center items-center">
          <button className="btn btn-primary" onClick={()=> navigate("/InputPage")}>Get Started</button>
          <button className="btn btn-soft">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
