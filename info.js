let info = {
  name: "Claire LEFEZ",
  logo_name: "Claire LEFEZ",
  photo: require("./src/assets/photo_CV.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    [
    "Hey y'all! I'm Claire, a curious and enthusiastic spirit about to graduate from engineering school! I love creating, designing, customizing, manufacturing stuff, but most of all, I love adding a lot of colors and sparkles to my projects.",
    "I'm always paying attention to every detail so that everything is as perfect as possible, and I'm constantly exploring new things for my creations. Finally, I approach challenges with optimism, infusing projects with enthusiasm and innovative solutions.",
    "I am never working, I'm having fun!",
    ],
  links: {
    linkedin: "https://www.linkedin.com/in/claire-lefez-0859671ba/",
    github: "https://github.com/petitkiwi",
    DVIC: "https://dvic.devinci.fr/member/claire-lefez",
    resume: "https://www.canva.com/design/DAD__psLhAo/y1ru6-CVVUxtnOI77wLG-w/view?utm_content=DAD__psLhAo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  education: [
    {
      name: "ESILV - Creative Technology",
      place: "FRANCE",
      date: "2019 - 2024",
      degree: "Engineering School Diploma",
      gpa: "4.0/4.0",
      description:
        "",
      skills: [       
        "Programming",
        "Mechanics",
        "Electronics",
        "Project Management",
        "Design with Biomaterials",
        "Low-Tech",
      ]
    },
    {
      name: "University of Louisiana at Lafayette",
      place: "USA",
      date: "September 2021 - December 2021",
      degree: "L3 Computer Science",
      gpa: "4.0/4.0",
      description:
        "",
      skills: [
        "Programming",
        "Finance",
        "Statistics",
        "Computer Science",
      ]
    },
    {
      name: "Lycée Blanche de Castille",
      place: "FRANCE",
      date: "2016 - 2019",
      degree: " High School Diploma",
      gpa: "with honors",
      skills: [
        "Science",
        "Mathematics Specialty",
        "Cambridge English C1",
      ]
    },
  ],
  experience: [
    {
      name: "Design & Manufacturing at Air Giants",
      place: "Bristol, UK",
      date: "April 2023 - July 2023",
      position: "Soft Robotics Research Intern",
      description:
        "Conception & Fabrication of a Giant Inflatable Robot for artistic and research purposes, Conduction of Quality Surveys, Research & Manufacturing of Bioplastics Actuators & Hydrogels.",
      skills: ["Soft Robotics", "Design", "Sewing", "Biomaterials", "Scientific Paper Writing", "Project Management"]
    },
    {
      name: "Project Portfolio Management",
      place: "Nanterre, FR",
      date: "June 2021 - August 2021",
      position: "Project Portfolio Manager Intern",
      description:
        "Redesign of a service website & Optimization of communication tools, Creation & Update of dashboards, Monitoring & Presentation of quality indicators, Market researches.",
      skills: ["ServiceNow", "PowerBI", "Agile methodology", "Waterfall methodology", "Design"]
    },
    {
      name: "English to French Translator",
      place: "FRANCE",
      date: "May 2020 - Present",
      position: "Voluntary Organization",
      description: "Translation of stories, mangas, webtoons for a voluntary organization of passionate readers.",
      skills: ["English", "Writing", "Quality", "Team Work", "Organization", "Thorougness"]
    },
    {
      name: "Course Guidance Advisor",
      place: "FRANCE",
      date: "October 2019 - Present",
      position: "Paid Organization",
      description: "Scholar guidance for students or people in need.",
      skills: ["Listening", "Advising", "Understand Client's Needs"]
    },
  ],
  /* skills: [
    {
      title: "title",
      info: ["info1", "info2"],
      icon: "fa fa-pencil-square-o"
    },
  ], */
  portfolio: [
    {
      name: "Quickstarter: Bee2win",
      title: "Quickstarter: Bee2win",
      pictures: [
        {
          img: require("./src/assets/projects/bee2win/kickstarter.png"),
          title: "My mission was to bridge the gap between classic and modern gaming, making it accessible and fun for everyone. We've eliminated the hassles of paper cuts and missing game pieces. Plus, I've ensured durability by using thin and flexible PVC plastic, making the deck suitable for any gaming occasion."
        },
        {
          img: require("./src/assets/projects/bee2win/whatsinmypack.png"),
          title: "Explore endless possibilities, from family game nights to spontaneous gatherings. The deck's versatility means it's not just a game; it's a platform for your creativity. With a simple scan of the QR code, access game rules online, enhancing your gaming experience."
        },
        {
          img: require("./src/assets/projects/bee2win/gamehub.jpg"),
          title: "Join us in revolutionizing game nights - it's time to play and create without limits!"
        },

      ],
      skills: ["Product Dev", "Crowdfunding", "Com"],
      category: "Team Project",
      github: "",
      date: "2023",
      link: "https://www.kickstarter.com/projects/clairelefez/bee2win",
      description:
        "The Bee2win card game is a fusion of tradition and creativity that my team and I created from scratch within a six-month period. Throughout the process of ideation, design, prototyping, and production, we were able to expand our skill set in multiple fields simultaneously, making this a highly immersive and rewarding experience.. This 54-card deck marries classic patterns with a blank canvas in the center, inviting the players to customize each card with provided markers. This unique feature allows you to play traditional games like Poker or get inventive with your own creations."
    },
    
    {
      name: "ChairBot: Disruptive Inflatable Chair",
      title: "ChairBot: Disruptive Inflatable Chair",
      pictures: [
        {
          img: require("./src/assets/projects/chairbot/chairbot.png"),
          title: "I analyzed the various aspects to be taken into account in order to ensure the smooth progress of the project: (1) Interactive functionality: Ability to interact with users in a playful and engaging way, through movements, sounds, tactile sensors, etc. The robot also needs to be intuitive in its approach, so that it's easy and engaging for users to interact directly with it. (2) Inflatable structure: Use of durable and resistant materials for the inflatable structure, ensuring the robot's safety and longevity, as well as the integration of movement and air inflation/emptying mechanisms to enable robot interaction and movement. (3) Technology: Integration of on-board electronics (sensors, valve motors and programming) to automate interactions. (4) Scalability: Design the robot to be able to add, update or modify interactive functionalities to meet changing needs."
        },
        {
          img: require("./src/assets/projects/chairbot/chairbotprofile.png"),
          title: "All parts are made of TPU-coated polyester.The manufacturing process involved cutting a suitable material, assembling it by sewing, and adding ancillary parts to ensure the robot'\s stability and practicality. I took charge of making each part: a main inner tube, five petals, five bellows (to allow the petals to bend), an elastic band to be placed between the walls to allow a flat surface for the post-inflated pistil to sit on, and practical rings to hold the inflatable chair to the ground when inflated. I\'ve also created holes in strategic places to allow air to pass through, as well as for the future implementation of valves or tubes for manual inflation tests."
        },
        {
          img: require("./src/assets/projects/chairbot/stuckinchairbot.png"),
          title: ""
        },
        
      ],
      skills: ["Design", "Manufacturing", "Sewing", "Electronics"],
      category: "Research Project",
      github: "",
      date: "2023",
      link: "",
      description:
        "The initial aim of the Chairbot project was to build a giant inflatable interactive polyester robot, followed by the writing of a scientific paper based on the study of the robot's interactions with human users. Prior to any research into an academic problem and a research paper, the robot has a purely artistic/entertainment purpose. "
    },
    
    {
      name: "SoftBioMorph: Bioplastic Actuators",
      title: "SoftBioMorph: Bioplastic Actuators",
      pictures: [
        {
          img: require("./src/assets/projects/softbiomorph/bioplastics.png"),
          title: "Soft materials play a vital role in the fabrication of Shape-Changing Interfaces (SCI). However, commonly used soft materials, such as silicone and thermoplastics, are not sustainable. In contrast, biopolymers are naturally derived, biodegradable and versatile materials, making them a suitable alternative for fabricating SCIs. I co-wrote a research paper for a conference or scientific journal that presents how a readily available biopolymer(i.e. Sodium Alginate) can be leveraged to realize diverse shape-changing behaviors. The paper discusses how the material can be synthesized in a DIY setup to yield properties desirable for shape-change. It further brings a set of fabrication and assembling techniques for creating soft interfaces that realize fundamental forms of shape-change. The application examples demonstrate how this material can replicate traditional soft materials in shape-changing interfaces. The paper discusses limitations, open research questions and common fabrication challenges as biopolymer-based interfaces continue to expand."
        },
        {
          img: require("./src/assets/projects/softbiomorph/colorfulgrippers.png"),
          title: "Reproduction of Soft Robotics grippers using biomaterials such as gelatin, glycerin, water and coloring additives."
        },
      ],
      skills: ["Biomaterials", "Manufacturing", "Research Paper"],
      category: "Research Project",
      github: "",
      date: "2023",
      link: "https://dvic.devinci.fr/projects/bioplastic-actuators",
      description:
        "SoftBioMorph: Fabricating Sustainable Shape-changing Interfaces using Soft Biopolymers"
    },
    {
      name: "BIOS Project",
      title: "BIOS Project",
      pictures: [
        {
          img: require("./src/assets/projects/bios/nacreseaurchin.jpeg"),
          title: "Sourcing the right materials was a critical step in the project's development. Extensive research led to the selection of top-quality, durable, and weather-resistant materials that would guarantee the tents' longevity and resilience in various environmental conditions. We sewed the whole structure meticulously to transform these materials into the envisioned sea urchin shell shelter. "
        },    
        {
          img: require("./src/assets/projects/bios/greyseaurchin.jpeg"),
          title: "The ultimate objective of the BIOS project is to participate in the Grand Prix du Design 2024 in France. The project aims to showcase its innovative inflatable tent, highlighting its unique design, biomimicry aspect, and versatility. "
        }, 
      ],
      skills: ["3D Modelling", "Manufacturing", "Marketing"],
      category: "Team Project",
      github: "",
      date: "2023",
      link: "",
      description:
        "The BIOS project, which stands for Bubbly-Inflated Organic Structure, embodies a visionary initiative to create an inflatable tent shaped like a sea urchin shell. This innovative structure offers a temporary housing solution for events or personal use. "
    },
  ],

   
  /* // portfolio on cards (tab 2)
  portfolio_tab2: [
    {
      name: "Name",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/1.png")
        },
        {
          img: require("./src/assets/portfolio/diary/2.png")
        },
        {
          img: require("./src/assets/portfolio/diary/3.png")
        },
      ],
      skills: ["skill1", "skill2"],
      category: "Category",
      date: "2023",
      github:
        "",
      link: "",
      description:
        " Description blablabla "
    },
  ], */
  
};
export default info;
