import Fragment from "./Fragment";

const Timeline1 = ({ userData }: { userData: any }) => {
  return (
    <div className="h-1/2 w-full overflow-x-auto  flex  ml-3 mr-3  my-10  shadow-2xl  px-5 scale-90 hover:scale-95 hover:cursor-pointer transition-all delay-150">
      {userData?.map((e: any, index: any) => (
        <Fragment index={index} data={e} />
      ))}
    </div>
  );
};

export default Timeline1;
