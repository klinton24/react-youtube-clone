import React from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit("");
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    this.scrollToTop();
  };

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCBx6-CfOtyewfPkaaqMesUS0e9W2DLMJs",
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div className="App">
        <h1 className="header">
          {" "}
          My
          <span className="you"> You</span>
          <span className="u-tube">-tube</span>
        </h1>
        <Grid container spacing={12}>
          <Grid item sx={12}>
            <Grid container spacing={12} justify="space-around">
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={10} xl={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={12} xl={2}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
