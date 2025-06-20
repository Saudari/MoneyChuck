import Placeholder1 from "@/assets/placeholders/ae_moneychuck_01.jpg";
import Placeholder2 from "@/assets/placeholders/ae_moneychuck_02.jpg";
import Placeholder3 from "@/assets/placeholders/ae_moneychuck_03.jpg";
import Placeholder4 from "@/assets/placeholders/ae_moneychuck_04.jpg";
import Placeholder5 from "@/assets/placeholders/ae_moneychuck_05.jpg";
import Placeholder6 from "@/assets/placeholders/ae_moneychuck_06.jpg";
import Placeholder7 from "@/assets/placeholders/ae_moneychuck_07.jpg";
import Placeholder8 from "@/assets/placeholders/ae_moneychuck_08.jpg";
import Placeholder9 from "@/assets/placeholders/ae_moneychuck_09.jpg";
import Placeholder10 from "@/assets/placeholders/ae_moneychuck_10.jpg";
import Placeholder11 from "@/assets/placeholders/ae_moneychuck_11.jpg";

import { COLLECTION_ADDRESS } from "./constants";

export const config: Config = {
  collection_id: COLLECTION_ADDRESS,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "MoneyChuck",
    description: "",
    image: Placeholder1,
  },

  ourStory: {
    title: "MoneyChuck",
    subTitle: "Proin lorem",
    description: "",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11],
  },

  ourTeam: {
    title: "MINT KEY",
    members: [
      {
        name: "KEY_1",
        role: "Aliquip Esse",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com",
        },
      },
      {
        name: "KEY_2",
        role: "Sunt Duis",
        img: Placeholder2,
      },
      {
        name: "KEY_3",
        role: "Sunt Duis",
        img: Placeholder3,
      },
      {
        name: "KEY_4",
        role: "Sunt Duis",
        img: Placeholder4,
      },
      {
        name: "KEY_5",
        role: "Sunt Duis",
        img: Placeholder5,
      },
      {
        name: "KEY_6",
        role: "Sunt Duis",
        img: Placeholder6,
      },
      {
        name: "KEY_7",
        role: "Sunt Duis",
        img: Placeholder7,
      },
      {
        name: "KEY_8",
        role: "Sunt Duis",
        img: Placeholder8,
      },
      {
        name: "KEY_9",
        role: "Sunt Duis",
        img: Placeholder9,
      },
      {
        name: "KEY_10",
        role: "Sunt Duis",
        img: Placeholder10,
      },
      {
        name: "KEY_11",
        role: "Ullamco Tempor",
        img: Placeholder11,
        socials: {
          twitter: "https://twitter.com",
        },
      },
    ],
  },

 faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "MoneyChuck",
        description:
          "AE.LTD GEME GO MINT KEY",
      },
     
    
    ],
  },

  nftBanner: [Placeholder1, Placeholder2, Placeholder3, Placeholder4, Placeholder5, Placeholder6, Placeholder7, Placeholder8, Placeholder9, Placeholder10, Placeholder11],
};

export interface Config {
  collection_id: string;

  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}
