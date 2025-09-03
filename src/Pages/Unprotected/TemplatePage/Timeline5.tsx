import { useRef, useState } from "react";

const Timeline5 = ({ userData }: { userData: any }) => {
  const [dist, setDist] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = containerRef.current;
    if (!container) return;

    // Get bounding box of container
    const { left, width } = container.getBoundingClientRect();

    // Mouse position relative to container
    const mouseX = e.clientX - left;

    // Calculate scroll position
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrollPos = (mouseX / width) * scrollWidth;
    console.log(scrollPos);
    console.log(scrollWidth);
    console.log(container.scrollWidth);
    console.log(container.clientWidth);

    // container.scrollLeft = scrollPos;
    // return scrollPos
    setDist(scrollPos * -1);
  };

  return (
    <>
      <div
        className="h-1/2 w-full overflow-auto border border-red-500  px-5 ml-3 mr-3 my-2  "
        onMouseMove={handleMouseMove}
      >
        <div
          ref={containerRef}
          className="flex gap-2  h-full w-fit "
        >
          {userData.map((e: any, index: number) => (
            <div
              key={index}
              className="border w-60  px-2 p hover:cursor-pointer"
              style={{ transform: `translateX(${dist}px)` }}
            >
              <section className="text-3xl text-white">{e.date}</section>
              <section className="text-sm text-white mt-2 overflow-y-auto  break-words whitespace-normal  ">
                {e.event}
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline5;
