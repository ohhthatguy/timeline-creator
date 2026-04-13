import { Vertical1, Vertical1Code } from "../Vertical/Vertical1";

import { Vertical2, Vertical2Code } from "../Vertical/Vertical2";
import { Vertical3, Vertical3Code } from "../Vertical/Vertical3";
import { Vertical4, Vertical4Code } from "../Vertical/Vertical4";
import { Vertical5, Vertical5Code } from "../Vertical/Vertical5";
import { Horizontal2, Horizontal2Code } from "../Horizontal/Horizontal2";
import { Horizontal1, Horizontal1Code } from "../Horizontal/Horizontal1";
import { Horizontal3, Horizontal3Code } from "../Horizontal/Horizontal3";
import { Horizontal4, Horizontal4Code } from "../Horizontal/Horizontal4";

export const TimelineComponentCode = {
  Vertical1Code,
  Vertical2Code,
  Vertical3Code,
  Vertical4Code,
  Vertical5Code,
  Horizontal1Code,
  Horizontal2Code,
  Horizontal3Code,
  Horizontal4Code,
} as const;

export type TimelineComponentCodetype = keyof typeof TimelineComponentCode;

export const TimelineComponents = {
  Vertical1,
  Vertical2,
  Vertical3,
  Vertical4,
  Vertical5,
  Horizontal2,
  Horizontal3,
  Horizontal4,
  Horizontal1,
} as const;

export type TimelineComponentNameType = keyof typeof TimelineComponents;
export type listDataType = {
  id: number;
  name: string;
  description: string;
  component: TimelineComponentNameType;
  componentCode?: TimelineComponentCodetype;
};

export type timelineListType = {
  alignment: "vertical" | "horizontal";
  data: listDataType[];
};
export const timelineList: timelineListType[] = [
  {
    alignment: "vertical",
    data: [
      {
        id: 100,
        name: "Vertical 1",
        description: "A vertical 1 list",
        component: "Vertical1",
        componentCode: "Vertical1Code",
      },
      {
        id: 101,
        name: "Vertical 2",
        description: "A vertical 2 list",
        component: "Vertical2",
        componentCode: "Vertical2Code",
      },
      {
        id: 102,
        name: "Vertical 3",
        description: "A vertical 3 list",
        component: "Vertical3",
        componentCode: "Vertical3Code",
      },
      {
        id: 103,
        name: "Vertical 4",
        description: "A vertical 4 list",
        component: "Vertical4",
        componentCode: "Vertical4Code",
      },
      {
        id: 104,
        name: "Vertical 5",
        description: "A vertical 5 list",
        component: "Vertical5",
        componentCode: "Vertical5Code",
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
        component: "Horizontal1",
        componentCode: "Horizontal1Code",
      },
      {
        id: 106,
        name: "Horizontal 2",
        description: "horizontal 2 wala",
        component: "Horizontal2",
        componentCode: "Horizontal2Code",
      },
      {
        id: 107,
        name: "Horizontal 3",
        description: "horizontal 3 wala",
        component: "Horizontal3",
        componentCode: "Horizontal3Code",
      },
      {
        id: 108,
        name: "Horizontal 4",
        description: "horizontal 4 wala",
        component: "Horizontal4",
        componentCode: "Horizontal4Code",
      },
    ],
  },
];

export type createDemoDataType = {
  topic: string;
  description: string;
  date: string; //yyyy-mm-dd
  id: number | undefined;
};

export const createDemoData: createDemoDataType[] = [
  {
    id: 1,
    topic: "The Come Up",
    description:
      "Release of his debut mixtape, marking his official entry into the rap game.",
    date: "2007-10-24",
  },
  {
    id: 2,
    topic: "Roc Nation Signing",
    description:
      "J. Cole becomes the first artist signed to Jay-Z's Roc Nation label.",
    date: "2009-02-24",
  },
  {
    id: 3,
    topic: "The Warm Up",
    description:
      "A breakout mixtape that established him as a premier lyricist in hip-hop.",
    date: "2009-06-15",
  },
  {
    id: 4,

    topic: "Friday Night Lights",
    description:
      "Often cited as one of the greatest mixtapes of all time, featuring high-level storytelling.",
    date: "2010-11-12",
  },
  {
    id: 5,

    topic: "Cole World: The Sideline Story",
    description: "His debut studio album debuts at #1 on the Billboard 200.",
    date: "2011-09-27",
  },
  {
    id: 6,

    topic: "Born Sinner",
    description:
      "Successfully competed with Kanye West's Yeezus for the top spot on the charts.",
    date: "2013-06-18",
  },
  {
    id: 7,

    topic: "2014 Forest Hills Drive",
    description:
      "The legendary album that went double platinum with no features.",
    date: "2014-12-09",
  },
  {
    id: 8,

    topic: "KOD",
    description:
      "An album exploring themes of addiction, money, and drug culture in modern society.",
    date: "2018-04-20",
  },
  {
    id: 9,

    topic: "The Off-Season",
    description:
      "A highly technical project showcasing his growth in flow and lyricism.",
    date: "2021-05-14",
  },
  {
    id: 10,

    topic: "Professional Basketball Debut",
    description:
      "Signed with the Patriots BBC in the Basketball Africa League.",
    date: "2021-05-16",
  },
];

export const smallCreateDemoData: createDemoDataType[] = [
  {
    id: 1,
    topic: "The Come Up",
    description:
      "Release of his debut mixtape, marking his official entry into the rap game.",
    date: "2007-10-24",
  },
  {
    id: 2,
    topic: "Roc Nation Signing",
    description:
      "J. Cole becomes the first artist signed to Jay-Z's Roc Nation label.",
    date: "2009-02-24",
  },
  {
    id: 3,
    topic: "The Warm Up",
    description:
      "A breakout mixtape that established him as a premier lyricist in hip-hop.",
    date: "2009-06-15",
  },
];
