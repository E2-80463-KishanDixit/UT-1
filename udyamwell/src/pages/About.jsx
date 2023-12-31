import React from "react";
import TopSection from "../components/TopSection";
import "./about.css";
const AboutCard = ({ heading, text1, text2, lists }) => {
  return (
    <div className="cardContainer1">
      <span>
        <i></i>
      </span>
      <h4>{heading}</h4>
      <p style={{textAlign:"justify"}}>{text1}</p>
    </div>
  );
};

export const AboutServices = ()=>{
  return(
    <div className="aboutServices" style={{marginTop:"5rem"}}>
        <div className="aboutServices1">
          <h1>UdyamWell Services</h1>
          <p style={{textAlign:"justify"}}>
            UdyamWell is a true partner that guides you on your entrepreneurial
            journey and stays with you in every step of the way to assist you in
            overcoming challenges and also in reaching new heights.
          </p>
        </div>
        <AboutCard
          heading="Learning Platform & Community Support"
          text1="UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners. From video courses to live webinars, you can access a variety of tools to help you grow your business. In addition, you can connect with a community of fellow entrepreneurs to share insights, ask for advice, and network."
        />
        <AboutCard
          heading="Handholding Support"
          text1="UdyamWell provides personalized handholding support to help you through every stage of your business journey. Whether you need help with product development, marketing, or finance, UdyamWell's team of experts is there to guide you. You can get one-on-one coaching and mentoring to help you make the best decisions for your business."
        />
        <AboutCard
          heading="Partner Connect"
          text1="UdyamWell has a vast network of partners to help you with a range of services. If you need help with product delivery or labeling, for example, UdyamWell can connect you with the right partner to get the job done. This means that you can focus on your core business activities, while UdyamWell takes care of the rest."
        />
      </div>
  )
}
const About = () => {
  return (
    <>
      <TopSection MainHeadinig="About Us" subText="" text="About Us" />
      <div className="videoContainer">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DjSj-jC-ktc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <AboutServices/>
    </>
  );
};

export default About;
