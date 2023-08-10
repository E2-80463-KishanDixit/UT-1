import React, { useEffect, useState } from "react";
import VideoLectureCard from './VideoLectureCard';
import './styles/courseCard.css';
import { Box } from "@mui/material";
import { useParams } from "react-router";
import { fetchSingleCource } from "../slices/videos";
import { useDispatch, useSelector } from "react-redux";

const SingleCoursePage = () => {
    const {id} = useParams();
    const {courseName,lectures,error,image} = useSelector(state=>state.lectures);
    const dispatch = useDispatch();

    console.log("id",id)

    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

    useEffect(()=>{
        dispatch(fetchSingleCource(id));
    },[])
    // let urlImage = `http://localhost:9000/uploads/course/videoThumbnails/${image}`;
    // let urlVideo = `http://localhost:9000/uploads/course/videos/`;

    const handleCardClick = (videoUrl) => {
        setSelectedVideoUrl(videoUrl);
    };

    console.log("selectdURL =====> ",selectedVideoUrl);

    console.log("lectures ==>",lectures);

    return (
        <>
        <div className="mainVidContainer">
            <div className="mainVid">
                <h1>{courseName}</h1>
                {/* <video src={lectures?.[0]?.urlVideo} controls /> */}
              <iframe
              width="100%"
              height="194"
            //   src={urlVideo+ lectures[0].video}
              src={selectedVideoUrl}
              title="Embedded Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
                <div className="content">
                    <h3 style={{color:"grey"}}>rgstrfhgbtd</h3>
                </div>
            </div>

            <div className="recommendations">
                <h1>Playlist</h1>
                <Box display={'flex'} flexWrap={'wrap'}>
                    {/* Render the CourseCard component passing the lectures data */}
                    <VideoLectureCard lectures={lectures} type={'video'} onCardClick={handleCardClick}/>
                </Box>
            </div>
        </div>
        </>
    );
}

export default SingleCoursePage;