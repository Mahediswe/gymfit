import React from 'react'
//import Hero from '../components/Hero';
import About from '../components/About';
import OurCourses from '../components/OurCourses'
import OurTrainers from '../components/OurTrainers'
import BlogPage from '../components/BlogPage'
import Timetable from '../components/Timetable';
import VideoSection from '../components/VideoSection ';
import ImageGallery from '../components/ImageGallary';
import ContactSection from '../components/ContactSection';
import HeroWithInfo from '../components/HeroWithInfo';
const Home = () => (
  <div>
    <HeroWithInfo/>
    <About/>
    <OurCourses/>
    <OurTrainers/>
        <VideoSection/>

    <BlogPage/>
    <Timetable/>
    <ImageGallery/>
    <ContactSection/>
  </div>
);

export default Home;
