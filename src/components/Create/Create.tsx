import type { TimelineComponentNameType } from "./CreateDemoData";
import { timelineList, TimelineComponents } from "./CreateDemoData";

import { useNavigate } from "@tanstack/react-router";
import { useAlignment } from "#/context/theme/theme";
import { createDemoData } from "./CreateDemoData";

const Create = () => {
  const navigate = useNavigate();
  const { alignment } = useAlignment();

  const handleSelection = (listId: number) => {
    navigate({ to: "/input", search: { alignment, listId } });
  };

  return (
    <div className="bg-primary_color px-4 pt-4 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
        <div className="grid gap-2">
          <div className="text-[clamp(2.5rem,3vw+0.6rem,4rem)] font-extrabold">
            Style Gallery
          </div>
          <div className="text-text_muted_color leading-tight text-sm">
            Before Giving the input, please select the type of timeline you
            require. Each template is fully responsive, production ready,
            typesafe TSX component.
          </div>
        </div>
      </div>

      <div className=" grid sm:grid-cols-2 sm:grid-rows-2 py-4 gap-4 ">
        {timelineList
          .filter((ele) => ele.alignment === alignment)
          .map((group, groupIndex) =>
            group.data.map((item, itemIndex) => {
              const componentKey = item.component as TimelineComponentNameType;
              const SelectedComponent = TimelineComponents[componentKey];
              return (
                <div
                  key={`${groupIndex}-${itemIndex}`}
                  className=" flex flex-col  overflow-auto"
                >
                  {/* 1. Component Preview Box */}
                  <div
                    className={` grid place-items-center h-[320px] scrollbar-custom overflow-auto border border-tertiary_color p-4 rounded-t-xl bg-secondary_color`}
                  >
                    {/* {item.component} */}
                    <SelectedComponent data={createDemoData} />
                  </div>

                  {/* 2. Info Footer */}
                  <div className="border-x border-b flex justify-between border-tertiary_color/20 bg-comp_bg p-4 rounded-b-xl">
                    <div>
                      <div className="text-xl font-bold text-neutral_color">
                        {item.name}
                      </div>
                      <div className="text-sm text-neutral_color/60">
                        {item.description}
                      </div>
                    </div>
                    <div>
                      <button
                        className="primary_btn"
                        onClick={() => handleSelection(item.id)}
                      >
                        SELECT
                      </button>
                    </div>
                  </div>
                </div>
              );
            }),
          )}
      </div>
    </div>
  );
};

export default Create;
