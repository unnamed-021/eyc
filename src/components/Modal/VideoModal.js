import React from "react";

import Modal from "./Modal";

const VideoModal = ({ open, close }) => {
  return (
    <Modal
      open={open}
      close={close}
      width={"fit-content"}
      height={"fit-content"}
      fade
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IvMN9PdLxG4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
};

export default VideoModal;
