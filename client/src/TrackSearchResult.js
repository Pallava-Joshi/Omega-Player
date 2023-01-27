import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer", overflow: "hidden" }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px", borderRadius: "10px" }}
      />
      <div className="ml-3" style={{ left: "14px", position: "relative" }}>
        <div className="text-white">{track.title}</div>
        <div className="text-muted text-white">{track.artist}</div>
      </div>
    </div>
  );
}
