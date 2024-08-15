import {
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
    sipro_website,
    sipro_inverted,
    rain_blender,
    youtube_logo,
    lqr,
    github,
    wine,
    lego
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
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
      date: "May 2024 - Present",
      points: [
        "Conducted research on Condition Monitoring for gears to identify and classify damage based on anomalies in acceleration signals, contributing to the sustainable use and design of gears.",
        "Utilized MATLAB for signal preprocessing and diagnostic analysis, enabling the detection of damage-specific patterns in gear acceleration signals.",
        "Implemented Machine Learning and Deep Learning models using Python, PyTorch, and Scikit-Learn to automate the classification of gear damage and assess its severity without relying on specific knowledge of tooth geometry.",
      ],
    },
    {
      title: "Bachelor Thesis: Continuous Adaptation and Calibration of Deep Learning Models for Optical Quality Assurance",
      company_name: "Technical University of Munich, Institute for Machine Tools and Industrial Management",
      icon: tum,
      iconBg: "#E6DEDD",
      date: "October 2023 - April 2024",
      points: [
        "Investigated the impact of continuous learning methods on the calibration of deep learning models for optical quality monitoring, with a focus on enhancing predictive accuracy.",
        "Implemented and evaluated continuous learning techniques using PyTorch and the Avalanche library, applying them to an existing dataset from the field of friction welding.",
        "Utilized ResNet and EfficientNet architectures to explore and optimize deep learning models, assessing the influence of continuous learning on model calibration.",
        "Applied Scikit-Learn for data preprocessing and analysis, ensuring robust evaluation of the implemented methods.",
        "Analyzed and discussed the results, demonstrating the potential of continuous learning for the continuous adaptation and improvement of model calibration in Computer Vision tasks."
      ],
    },
    {
      title: "Working Student",
      company_name: "Easy Energiedienste Sonnenkraft-Freising GmbH",
      icon: easy,
      iconBg: "#383E56",
      date: "November 2022 - October 2023",
      points: [
        "Led project planning efforts, including the design of solar modules using Rhino (CAD program), to ensure precise and efficient project execution and developed an innovative system for installing solar modules, significantly enhancing the efficiency and performance of solar projects.",
        "Developed Occupational Plans and Drawings for the construction of solar projects.",
        "Managed Parts Lists, creating detailed inventories for each project to optimize material sourcing and maintain cost control."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SIPRO SA de CV",
      icon: sipro,
      iconBg: "#E6DEDD",
      date: "May 2021 - October 2022",
      points: [
        "Collaborated closely with designers to translate wireframes into functional, visually appealing web pages using HTML, CSS and JavaScript.",
        "Developed API integrations, enhancing the website’s dynamic capabilities.",
        "Managed content within a CMS, optimized it for SEO, and conducted testing for cross-browser compatibility to ensure a consistent user experience."
      ],
    },
    {
      title: "Lamination Production",
      company_name: "TU-Fast ECO",
      icon: tufast,
      iconBg: "#E6DEDD",
      date: "October 2021 - September 2022",
      points: [
        "Prepared and cut carbon fiber materials with precision, ensuring alignment with exact design specifications.",
        "Managed the curing process, including vacuum bagging and autoclave operations, to ensure defect-free laminates.",
        "Performed finishing tasks such as trimming and sanding, ensuring components met strict quality standards.",
        "Maintained detailed documentation of the production process, enhancing quality assurance and traceability.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Wine Quality Prediction",
      description:
        "Developed a model to predict wine quality based on chemical properties using PyTorch, Pandas, and Scikit-learn. Achieved high accuracy by leveraging deep learning and traditional ML techniques.",
      tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: wine,
      source_code_link: "https://websiteweinai-flphjzazmhh68p7tmwnkqe.streamlit.app",
      src_img : github
    },
    {
      name: "Lego Replica Solidworks",
      description:
        "Created a detailed 3D replica of a Lego figure using SolidWorks, focusing on accurate dimensions and design. The project demonstrates proficiency in CAD modeling and attention to detail.",
      tags: [
        {
          name: "solidworks",
          color: "blue-text-gradient",
        },
        {
          name: "CAD",
          color: "pink-text-gradient",
        }
      ],
      image: lego,
      source_code_link: "https://youtu.be/JE6czIxrUTc",
      src_img : youtube_logo
    },
    {
      name: "LQR Inverse Pendulum Stabilisation",
      description:
        "Designed a controller using LQR to balance an inverse pendulum on a moving carriage. The system minimizes spring deformation and vibrations solely by adjusting the carriage position.",
      tags: [
        {
          name: "matlab",
          color: "pink-text-gradient",
        },
        {
          name: "controlsystems",
          color: "blue-text-gradient",
        },
      ],
      image: lqr,
      source_code_link: "https://www.youtube.com/shorts/jrCvVQGH-MQ",
      src_img : youtube_logo
    },
    {
      name: "Blender render",
      description:
        "Created a realistic 3D model using Blender, focusing on detailed landscape features and rendering techniques. The project showcases skills in 3D modeling and environmental design",
      tags: [
        {
          name: "blender",
          color: "blue-text-gradient",
        },
        {
          name: "premierpro",
          color: "green-text-gradient",
        },
        {
          name: "3Dmodeling",
          color: "pink-text-gradient",
        },
      ],
      image: rain_blender,
      source_code_link: "https://www.youtube.com/watch?v=PyzJu6Obvmo",
      src_img : youtube_logo
    },
    {
      name: "Website development",
      description:
        "Designed and developed a responsive and user-friendly website for a tech enterprise. Focused on enhancing user experience and ensuring cross-platform compatibility.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sipro_website,
      source_code_link: "https://sipro.com.mx",
      src_img : sipro_inverted
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };