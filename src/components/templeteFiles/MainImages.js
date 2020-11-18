import React from "react";

function MainImages({ mainImageComponents }) {
  return (
    <div>
      <section className="section-2">
        <div className="item-container">
          <input className="radio" type="radio" name="items" id="rd1" checked />
          <input className="radio" type="radio" name="items" id="rd2" />
          <input className="radio" type="radio" name="items" id="rd3" />
          <input className="radio" type="radio" name="items" id="rd4" />
          <input className="radio" type="radio" name="items" id="rd5" />
          <input className="radio" type="radio" name="items" id="rd6" />

          <div className="big-images">
            <div className="sliders">{mainImageComponents}</div>
          </div>
          <div id="controls">
            <div className="label-wrapper">
              <div className="label-right">
                <label htmlFor="rd6" data-value="1"></label>

                <label htmlFor="rd5" data-value="1"></label>

                <label htmlFor="rd4" data-value="2"></label>

                <label htmlFor="rd3" data-value="3"></label>

                <label htmlFor="rd2" data-value="4"></label>

                <label htmlFor="rd1" data-value="5"></label>
              </div>
              <div className="label-left">
                <label htmlFor="rd1" data-value="1"></label>

                <label htmlFor="rd2" data-value="1"></label>

                <label htmlFor="rd3" data-value="2"></label>

                <label htmlFor="rd4" data-value="3"></label>

                <label htmlFor="rd5" data-value="4"></label>

                <label htmlFor="rd6" data-value="5"></label>
              </div>
            </div>
          </div>

          <div className="radio-label-container">
            {mainImageComponents.map((item, index) => (
              <label key={index} htmlFor={`rd${index + 1}`}>
                {item}
              </label>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default MainImages;
