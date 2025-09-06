
import { useRef } from "react";


const Test = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const container = containerRef.current;
      if (!container) return;
    
      const { left, width } = container.getBoundingClientRect();
    
      // mouse position inside container (0 → width)
      const mouseX = e.clientX - left;
    
      // progress (0 → 1)
      const progress = mouseX / width;
    
      // how much we can scroll
      const maxScroll = container.scrollWidth - container.clientWidth;
    
      // final scroll position
      const scrollPos = progress * maxScroll;
    
      // Apply scroll
      container.scrollLeft = scrollPos;
    };

  const userData = [{date: "09/03/2025", event: "asd"},{date: "09/08/2025", event: "asdasd"},{date: "09/10/2025", event: "asdasdasdasd"},{date: "09/10/2025", event: "asdasd"},{date: "09/10/2025", event: "asdasd"},{date: "09/10/2025", event: "asdasd"},{date: "09/10/2025", event: "asdas"},{date: "09/10/2025", event: "asdasd"},{date: "09/10/2025", event: "asdasd"},{date: "09/10/2025", event: "asdasd"}];

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      
 <>
      
        <div
  className="h-1/2 w-full overflow-auto  px-10 py-3 ml-3 mr-3 my-10 shadow-2xl scale-90 hover:cursor-pointer transition-all delay-150"
  onMouseMove={handleMouseMove}
  ref={containerRef} // attach ref to scrollable parent
>
      

  <div className="flex gap-2 h-full">
    {userData.map((e: any, index: number) => (
      <div
        key={index}
        className="border w-72 px-2 hover:cursor-pointer rounded-sm shadow-md shadow-ring "
      >
        <section className="text-3xl text-white">{e.date}</section>
        <section className="text-sm text-white mt-2 overflow-y-auto break-words whitespace-normal">
          {e.event}
        </section>
      </div>
    ))}
  </div>

</div>

    </>

    </div>
  );
};

export default Test;
