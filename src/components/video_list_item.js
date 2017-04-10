import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //{video} is just like this think down, like declaring the varialbe on the argument sections. EM6
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img classsName="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div classsName="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}
export default VideoListItem;
