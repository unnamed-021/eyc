import React from "react";

import Modal from "./Modal";
import { Iframe } from "./Modal.styles";

const VideoModal = ({ open, close }) => {
  return (
    <Modal open={open} close={close} width={"80%"} height={"fit-content"} fade>
      <Iframe
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
