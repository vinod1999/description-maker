import React from "react";

function IntroImage({ isEditable, introImageComponent }) {
  const titles = {
    main: "WELCOME",
    subtitle: "The high quality products for low prices!",
  };

  return (
    <div>
      <div className="section-0">
        <div className="intro-image">{introImageComponent}</div>
        <div className="overlay">
          <div className="text">
            <h2 name="main" type="text" className="h2">
              {titles.main}
            </h2>
            <p name="subtitle" type="text" className="p">
              {titles.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroImage;
