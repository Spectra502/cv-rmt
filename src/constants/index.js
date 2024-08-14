import {
    mobile,
    backend,
    creator,
    pytorch,
    matlab,
    rhino,
    raspberry,
    inventor,
    eagle,
    solidworks,
    blender,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    sipro,
    tum,
    tufast,
    easy,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Solidworks",
      icon: solidworks,
    },
    {
      title: "Rhino 7",
      icon: rhino,
    },
    {
      title: "Matlab",
      icon: matlab,
    },
    {
      title: "PyTorch",
      icon: pytorch,
    },
    {
      title: "Eagle",
      icon: eagle,
    },
    {
      title: "Inventor",
      icon: inventor,
    },
    {
      title: "Raspberry Pi",
      icon: raspberry,
    },
    {
      title: "Blender",
      icon: blender,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Research Project: Automatic damage classification of gears",
      company_name: "Technical University of Munich, Chair of Machine Elements",
      icon: tum,
      iconBg: "#E6DEDD",
      date: "October 2023 - Now",
      points: [
        "Investigated to what extent a continuous adaptation of a deep learning model, using continuous learning methods, affects the reliability of the issued predictions. On the basis of scientific literature, individual methods were selected and evaluated on existing data sets in the field of quality control.",
      ],
    },
    {
      title: "Bachelor Thesis: Continuous Adaptation and Calibration of Deep Learning Models for Optical Quality Assurance",
      company_name: "Technical University of Munich, Institute for Machine Tools and Industrial Management",
      icon: tum,
      iconBg: "#E6DEDD",
      date: "October 2023 - May 2024",
      points: [
        "Investigated to what extent a continuous adaptation of a deep learning model, using continuous learning methods, affects the reliability of the issued predictions. On the basis of scientific literature, individual methods were selected and evaluated on existing data sets in the field of quality control.",
      ],
    },
    {
      title: "Working Student",
      company_name: "Easy Energiedienste Sonnenkraft-Freising GmbH",
      icon: easy,
      iconBg: "#383E56",
      date: "November 2022 - September 2023",
      points: [
        "Responsible for project planning, including design of solar modules using Rhino (CAD program).",
        "Development of Occupational Plans and Drawings for the construction of solar projects to support implementation.",
        "Parts List Management and creation of detailed part lists for each project to ensure efficient material sourcing and cost control.",
        "Development of a system for horizontal modules: In collaboration with my supervisor, I developed an innovative system for installing horizontal solar modules to increase the efficiency and performance of our solar projects.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SIPRO SA de CV",
      icon: sipro,
      iconBg: "#E6DEDD",
      date: "February 2017 - August 2018",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Lamination Production",
      company_name: "TU-Fast ECO",
      icon: tufast,
      iconBg: "#E6DEDD",
      date: "May 2021 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };