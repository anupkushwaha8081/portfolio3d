export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Anup was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Anup’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Anup. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Anup was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'JOb Portal',
      desc: 'Developed a full-stack job portal that connects students and recruiters, enabling seamless job posting, application tracking, and hiring processes. The platform allows recruiters to register multiple companies, create job listings, and manage applications, while students can update profiles, upload resumes, browse jobs, apply with filters, and track application status. The website features secure authentication, real-time updates, and a user-friendly dashboard, ensuring an efficient and interactive job search experience.',
      subdesc:
        'Built as a unique Software-as-a-Service app with ReactJS, JavaScript, NodeJS, MongoDB, RESTful APIs, Podcastr is designed for optimal performance and scalability.',
      href: 'https://deploywebsitebyanupfina.onrender.com/',
      texture: '/textures/project/job.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'pic Prism',
      desc: 'Pic Prism is a full-stack photo-sharing platform built with ReactJS, JavaScript, and RESTful APIs, enabling real-time data integration. It features Google login with Firebase, JWT-secured routes, dynamic dashboards for buyers and sellers, and real-time search filters. Chart.js is integrated for user activity tracking and upload statistics. The platform ensures a responsive UI for seamless navigation and optimized performance with efficient state management.',
      subdesc:
        'ReactJS, Firebase, MongoDB, NodeJS, Chartjs, Full-stack Development, Real-time Data',
      href: 'https://pic-prism-my.vercel.app/',
      texture: '/textures/project/pic.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Personal Portfolio in 3d',
      desc: 'My 3D Portfolio is an interactive, visually engaging website that showcases your skills, projects, and experience using Three.js for 3D elements. It features smooth animations, a dynamic environment, and an immersive user experience. Visitors can explore your work through interactive models, responsive design, and seamless navigation. 🚀🎨',
      subdesc:
        'React.js, Three.js, Tailwind CSS, Framer Motion, EmailJS, React Three Fiber, React Spring, GSAP, Vite. these are used in this project ',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/folio.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
   
    
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    // return {
    //   deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    //   deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
    //   cubePosition: isSmall ? [4.5, -7, 0] : isMobile ? [5, -5, 0] : isTablet ? [6, -7, 0] : [9, -5.5, 0],
    //   reactLogoPosition: isSmall ? [3, 3.5, 0] : isMobile ? [5, 2, 0] : isTablet ? [7, 1, 0] : [12, 3, 0],
    //   // ringPosition: isSmall ? [-18, 16, 0] : isMobile ? [-22, 13, 0] : isTablet ? [-31, 15, 0] : [-34, 18, 0],
    //   ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    //   targetPosition: isSmall ? [-6, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-16, -13, -10],
    // };
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };

  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2025 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2022 - 2024',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2020-22',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];