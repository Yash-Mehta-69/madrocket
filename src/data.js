import sportsDayImg from './assets/images/sports_day.jpg';
import scienceExhibitionImg from './assets/images/science_exhibition.jpg';
import culturalFestImg from './assets/images/cultural_fest.jpg';
import classroomImg from './assets/images/classroom.jpg';
import libraryImg from './assets/images/library.jpg';
import schoolTourVid from './assets/images/school_tour.mp4';
import annualFunctionVid from './assets/images/annual_function.mp4';

import logo from "./assets/images/logo.png"

// src/data.js
export const data = {
    schoolName: "Springdale Public School",
    logo: logo,
    introduction: "Welcome to Springdale Public School, where we nurture young minds for a brighter future.",
    carouselHighlights: [
      { image: "sports_day.jpg", title: "Annual Sports Day - Celebrating Excellence in Sports" },
      { image: "science_exhibition.jpg", title: "Science Exhibition - Showcasing Student Innovations" },
      { image: "cultural_fest.jpg", title: "Cultural Fest - Embracing Diversity and Creativity" },
    ],
    aboutUs: {
      history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
      vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
      mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
      principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
      infrastructure: [
        "State-of-the-art science and computer labs",
        "Spacious and well-equipped classrooms",
        "Library with a vast collection of books and digital resources",
        "Sports facilities including a playground, gymnasium, and swimming pool",
      ],
    },
    academics: {
      curriculum: {
        primary: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education"],
        secondary: ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art"],
        seniorSecondary: {
          science: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"],
          commerce: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
        },
      },
      methodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
      resources: "Digital classrooms, interactive learning modules, and access to online educational platforms.",
    },
    admissions: {
      process: "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
      criteria: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
      importantDates: {
        formAvailability: "March 1st",
        submissionDeadline: "March 31st",
        entranceTest: "April 15th",
        resultAnnouncement: "April 30th",
      },
    },
    faculty: [
      { name: "John Doe", position: "Principal", qualification: "M.Ed", experience: "20 years of experience in educational administration" },
      { name: "Jane Smith", position: "Vice Principal", qualification: "M.Sc. in Physics", experience: "15 years of teaching experience" },
      { name: "Emily Johnson", position: "English Teacher", qualification: "M.A. in English", experience: "10 years of teaching experience" },
      { name: "Michael Brown", position: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", experience: "8 years of teaching experience" },
      { name: "Sophia Davis", position: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years of teaching experience" },
      { name: "David Wilson", position: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years of teaching experience" },
    ],
    students: {
      life: "Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club",
      clubs: ["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"],
      achievements: [
        "John Smith - National Level Math Olympiad Winner",
        "Sarah Lee - Gold Medalist in State Swimming Championship",
        "Tech Innovators Club - Winners of Inter-School Robotics Competition",
      ],
      council: {
        president: "Amy Parker, Grade 12",
        vicePresident: "Rajiv Mehta, Grade 11",
        secretary: "Lisa Wong, Grade 10",
      },
    },
    gallery: {
      photos: [
        { image: sportsDayImg, description: "Students participating in various sports events." },
        { image: scienceExhibitionImg, description: "Students presenting their science projects." },
        { image: culturalFestImg, description: "Students performing in the cultural fest." },
        { image: classroomImg, description: "A glimpse of our interactive classrooms." },
        { image: libraryImg, description: "Students reading and studying in the school library." },
      ],
      videos: [
        { video: schoolTourVid, description: "Virtual tour of Springdale Public School." },
        { video: annualFunctionVid, description: "Highlights from the Annual Function 2023." },
      ],
    },
    contact: {
      address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code",
      phone: "+1 (123) 456-7890",
      email: "info@springdale.edu",
      googleMapsEmbed: `<iframe src="https://www.google.com/maps/embed?..."></iframe>`,
    },
  };
  