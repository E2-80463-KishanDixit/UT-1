import {  Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { breadcrumb } from '../assets';
import './styles/courseCard.css';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';
import { Link } from 'react-router-dom';


const CourseCard = ({ courses }) => {
  // console.log("Course Value ==>", courses);
let urlImage = `http://localhost:9000/uploads/course/thumbnails/`;
// let urlVideo = `http://localhost:9000/uploads/course/videos/`;

// Access the courses array inside the courses object
// const coursesArray = courses?.courses || [];

// const [showVideo, setShowVideo] = useState(false);

// const handleCardClick = () => {
//   setShowVideo(true);
// };


  const handleShare = async (title, url) => {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };



  return (
    <>
      {courses?.map((course) => (
        <Card key={course._id} sx={{ maxWidth: 275, borderRadius: "10px",m:3 }}>

{/* <Box className='cardImageBox' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {!showVideo ? (
        <>
          <CardMedia
            component="img"
            height="194"
            image={urlImage + course.image}
            sx={{ opacity: 0.8,overflow:"hidden" }}
            alt="Paella dish"
          />
          <Box className='playIcon'>
            <PlayCircleFilledTwoToneIcon sx={{ height: "100%", width: "40%" }} />
          </Box>
          <Box className='timing'>
            <p>0.23</p>
          </Box>
        </>
      ) : (
        // Show the embedded video player when the card is clicked
        <iframe
          width="100%"
          height="194"
          src={urlVideo+ course.video}
          title="Embedded Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </Box> */}
   
          <Box className='cardImageBox'>
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <CardMedia
                component="img"
                height="194"
                // image={breadcrumb}
                // image= "http://localhost:9000/uploads/course/thumbnails/1690093516906_cloud3.jpg"
                image= {urlImage + course.image}
                sx={{ opacity: 0.8 }}
                alt="Paella dish"
              />
              <Box className='playIcon'>
                <PlayCircleFilledTwoToneIcon sx={{ height: "100%", width: "40%" }} />
              </Box>

              <Box className='timing'>
                <p>0.23</p>
              </Box>

            </a>
          </Box>

          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            // subheader="September 14, 2016"
            subheader= {course.createdAt}
          />

          <CardContent sx={{ padding: "0 16px"}}>
            <Typography variant="h5" color={'green'} sx={{color:"green",cursor:"pointer" }}>
              <Link to={`/course/${course?._id}`}>{course.name}</Link>
            </Typography>
            <Typography variant="body2">
              {course.description} {/* Use course.description to display the description */}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={() => handleShare(course.name, course.link)}>
              <ShareIcon />
            </IconButton>
          </CardActions>

        </Card>
      ))}
    </>
  );
}


export default CourseCard;