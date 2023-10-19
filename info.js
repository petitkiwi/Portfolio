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
    "I'm always paying attention to every detail so that everything is as perfect as possible and I navigate the digital universe with curiosity, constantly exploring new technologies for my creations. Finally, I approach challenges with optimism, infusing projects with enthusiasm and innovative solutions.",
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
        "Design with Biomaterials",
        "Low-Tech",
        "Programming",
        "Project Management",
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
        "Cambridge English C2",
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
        "Conception & Fabrication of a Giant Inflatable Robot for artistic and research purposes, Conduction of Quality Surveys Research & Manufacturing of Bioplastics Actuators & Hydrogels.",
      skills: ["Soft Robotics", "Design", "Sewing", "Biomaterials", "Scientific Paper Writing", "Project Management"]
    },
    {
      name: "Project Portfolio Management",
      place: "Nanterre, FRANCE",
      date: "June 2021 - August 2021",
      position: "Project Portfolio Manager Intern",
      description:
        "Redesign of a service website & Optimization of communication tools, Creation & Update of dashboards, Monitoring & Presentation of quality indicators, Market researches.",
      skills: ["ServiceNow", "PowerBI", "Agile methodology", "Waterfall methodology", "Design"]
    },
    {
      name: "Waitress",
      place: "Carantec, FRANCE",
      date: "July 2022",
      position: "Touristic Crêperie",
      description: "",
      skills: ["Customer relations", "Listening", "Work under pressure", "Multitasking", "Thoroughness"]
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
          title: "Card Game"
        },

      ],
      skills: ["Product Development", "Crowdfunding"],
      category: "Team Project",
      github: "",
      date: "2023",
      link: "https://www.kickstarter.com/projects/clairelefez/bee2win",
      description:
        ""
    },
    {
      name: "BIOS Project",
      title: "BIOS Project",
      pictures: [
        {
          img: require("./src/assets/projects/bios/iaseaurchintent.png"),
          title: "IA generated Sea Urchin shell tent"
        },
    
      ],
      skills: ["3D Modelling", "Manufacturing", "Marketing"],
      category: "Team Project",
      github: "",
      date: "2023",
      link: "",
      description:
        ""
    },
    {
      name: "SoftBioMorph: Bioplastic Actuators",
      title: "SoftBioMorph: Bioplastic Actuators",
      pictures: [
        {
          img: require("./src/assets/projects/softbiomorph/bioplastics.png"),
          title: "Bioplastic Actuators"
        },
        {
          img: require("./src/assets/projects/softbiomorph/bluegripper.png"),
          title: "Blue Gripper"
        },
      ],
      skills: ["Biomaterials", "Manufacturing", "Research Paper"],
      category: "Research Project",
      github: "",
      date: "2023",
      link: "",
      description:
        ""
    },
    {
      name: "ChairBot: Disruptive Inflatable Chair",
      title: "ChairBot: Disruptive Inflatable Chair",
      pictures: [
        {
          img: require("./src/assets/projects/chairbot/chairbot.png"),
          title: "Inflation demo"
        },
        
      ],
      skills: ["Design", "Manufacturing", "Sewing", "Electronics"],
      category: "Research Project",
      github: "",
      date: "2023",
      link: "",
      description:
        ""
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
