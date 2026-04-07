import { useNavigate } from "@tanstack/react-router";

import { createDemoData } from "./CreateDemoData";
import Vertical1 from "../Vertical/Vertical1";
import Vertical2 from "../Vertical/Vertical2";
import Vertical3 from "../Vertical/Vertical3";
import Vertical4 from "../Vertical/Vertical4";
import Vertical5 from "../Vertical/Vertical5";
import Horizontal2 from "../Horizontal/Horizontal2";
import Horizontal1 from "../Horizontal/Horizontal1";
import Horizontal3 from "../Horizontal/Horizontal3";
import Horizontal4 from "../Horizontal/Horizontal4";

const Create = ({ alignment }: { alignment: "vertical" | "horizontal" }) => {
  const navigate = useNavigate();

  type listDataType = {
    id: number;
    name: string;
    description: string;
    component: any;
  };

  type timelineListType = {
    alignment: "vertical" | "horizontal";
    data: listDataType[];
  };

  const timelineList: timelineListType[] = [
    {
      alignment: "vertical",
      data: [
        {
          id: 100,
          name: "Vertical 1",
          description: "A vertical 1 list",
          component: <Vertical1 data={createDemoData} />,
        },
        {
          id: 101,
          name: "Vertical 2",
          description: "A vertical 2 list",
          component: <Vertical2 data={createDemoData} />,
        },
        {
          id: 102,
          name: "Vertical 3",
          description: "A vertical 3 list",
          component: <Vertical3 data={createDemoData} />,
        },
        {
          id: 103,
          name: "Vertical 4",
          description: "A vertical 4 list",
          component: <Vertical4 data={createDemoData} />,
        },
        {
          id: 104,
          name: "Vertical 5",
          description: "A vertical 5 list",
          component: <Vertical5 data={createDemoData} />,
        },
      ],
    },
    {
      alignment: "horizontal",
      data: [
        {
          id: 105,
          name: "Horizontal 1",
          description: "horizontal 1 wala",
          component: <Horizontal1 data={createDemoData} />,
        },
        {
          id: 106,
          name: "Horizontal 2",
          description: "horizontal 2 wala",
          component: <Horizontal2 data={createDemoData} />,
        },
        {
          id: 107,
          name: "Horizontal 3",
          description: "horizontal 3 wala",
          component: <Horizontal3 data={createDemoData} />,
        },
        {
          id: 108,
          name: "Horizontal 4",
          description: "horizontal 4 wala",
          component: <Horizontal4 data={createDemoData} />,
        },
      ],
    },
  ];

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
            group.data.map((item, itemIndex) => (
              <div
                key={`${groupIndex}-${itemIndex}`}
                className=" flex flex-col  overflow-auto"
              >
                {/* 1. Component Preview Box */}
                <div
                  className={` grid place-items-center h-[320px] scrollbar-custom overflow-auto border border-tertiary_color p-4 rounded-t-xl bg-secondary_color`}
                >
                  {item.component}
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
            )),
          )}
      </div>
    </div>
  );
};

export default Create;
