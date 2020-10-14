import React, { useEffect, useRef } from "react";
import WebTorrent from "webtorrent";

const VideoPlayer: React.FC<{ magnetLink: string }> = ({ magnetLink }) => {
  const playerRef = useRef();

  useEffect(() => {
    const client = new WebTorrent();

    client.add(magnetLink, function (torrent) {
      const file = torrent.files.find(function (file) {
        return file.name.endsWith(".mp4");
      });

      file.appendTo(playerRef.current);
    });
  }, [magnetLink]);

  return <div ref={playerRef} />;
};

export default VideoPlayer;
