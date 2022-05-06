import React, { Fragment } from "react";
import YoutubeEmbed from "../../YoutubeEmbed/YoutubeEmbed";

export default function YoutubeModal(props) {
  let { showModal, setShowModal } = props;

  const handleCloseModal = (e) => {
    if (e.target) {
      setShowModal(false);
    }
  };

  return (
    <Fragment>
      {showModal ? (
        <>
          <div
            className="fixed w-full h-full top-0 bg-black opacity-50 "
            onClick={handleCloseModal}
          ></div>
          <div
            style={{
              width: "50%",
              top: "25%",
              height: "50%",
              left: "25%",
              position: "absolute",
            }}
          >
            <YoutubeEmbed embedId="LRf7kV1Ygdc" />
          </div>
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
}
