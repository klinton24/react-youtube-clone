import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid
      className="videoList"
      container
      spacing={12}
      style={{ padding: "80px 0px", marginTop: "20px" }}
    >
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
