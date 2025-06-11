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
  collection_id: 0xe2b7e942eb42b6bbdf3be16897ac72db764adde4b7ef11b364d5c340fca676ec,

  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
    homepage: "#",
  },

  defaultCollection: {
    name: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue convallis augue in pharetra.",
    image: Placeholder1,
  },

  ourStory: {
    title: "Our Story",
    subTitle: "Proin lorem",
    description:
      "Phasellus pellentesque malesuada pretium. Vestibulum sed justo at velit rhoncus finibus nec quis urna. Aenean rutrum congue tincidunt. Praesent id urna quis risus sodales feugiat vitae quis orci. Proin tincidunt eu nisi quis sollicitudin. Nulla facilisis eget tellus quis fermentum. Nunc vel neque at erat dictum tempus. Aliquam in mollis lacus, non fringilla lacus. Nunc blandit iaculis ante vitae pulvinar.",
    discordLink: "https://discord.com",
    images: [Placeholder1, Placeholder2, Placeholder3],
  },

  ourTeam: {
    title: "Our Team",
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



  nftBanner: [Placeholder1, Placeholder2, Placeholder3],
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
