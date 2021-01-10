import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading . . .</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper className="mainVideo" elevation={6} />
      <Typography className="mainVideoDescription" variant="subtitle1">
        {video.snippet.title} - {video.snippet.channelTitle}
      </Typography>
      <Typography className="mainVideoDescription" variant="subtitle1">
        {video.snippet.channeltitle}
      </Typography>
      <Typography className="mainVideoDescription" variant="subtitle2">
        {video.snippet.description}
      </Typography>
    </React.Fragment>
  );
};

export default VideoDetail;
