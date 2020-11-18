import React, { useState } from "react";
import Navbar from "./Navbar";
import IntroImage from "./IntroImage";
import Introduction from "./Introduction";
import MainImages from "./MainImages";
import Informations from "./Informations";
import { Button } from "@material-ui/core";
import { usePalette } from "react-palette";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import styles from "./styles";

function HtmlFile({ formData, setFormData, step, setStep }) {
  const [isEditable, setIsEditable] = useState(true);
  let {
    mainImages,
    allImages,
    descImages,
    specImages,
    introImage,
  } = formData.urlData;

  let { description, specification, title, subtitle, alt } = formData.textData;

  let titleComponents = title.split("\n").map((item, index) => {
    if (item === "") {
      return <br />;
    } else {
      return (
        <li key={index}>
          <p>{item}</p>
        </li>
      );
    }
  });
  let subtitleComponents = subtitle.split("\n").map((item, index) => {
    if (item === "") {
      return <br />;
    } else {
      return (
        <li key={index}>
          <p>{item}</p>
        </li>
      );
    }
  });
  let altComponents = alt.split("\n").map((item, index) => {
    if (item === "") {
      return <br />;
    } else {
      return (
        <li key={index}>
          <p>{item}</p>
        </li>
      );
    }
  });
  let descTextComponents = description.split("\n").map((item, index) => {
    if (item === "") {
      return <br />;
    } else {
      return (
        <li key={index}>
          <p>{item}</p>
        </li>
      );
    }
  });
  let specTextComponents = specification.split("\n").map((item, index) => {
    if (item === "") {
      return <br />;
    } else {
      return (
        <li key={index}>
          <p>{item}</p>
        </li>
      );
    }
  });
  let mainImageComponents = mainImages.map((item, index) => (
    <img key={index} src={item.url} alt={alt} />
  ));
  let descImageComponents = descImages.map((item, index) => (
    <img key={index} src={item.url} alt={alt} />
  ));
  let specImageComponents = specImages.map((item, index) => (
    <img key={index} src={item.url} alt={alt} />
  ));
  let allImageComponents = allImages.map((item, index) => (
    <img key={index} src={item.url} alt={alt} />
  ));
  let introImageComponent = introImage.map((item, index) => (
    <img key={index} src={item.url} alt={alt} />
  ));

  const { data } = usePalette(introImage[0].url);

  const [state, setState] = useState({
    count: 0,
    theme: {
      backgroundColor: null,
    },
  });
  const ButtonWrapper = styled.div`
    margin: 5px 10px;
    display: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  const HtmlComponents = () => {
    return (
      <div className="container">
        <div className="container-wrapper">
          <Navbar isEditable={isEditable} />
          <IntroImage
            isEditable={isEditable}
            introImageComponent={introImageComponent}
          />
          <Introduction
            isEditable={isEditable}
            introImagePalette={data}
            titleComponents={titleComponents}
            subtitleComponents={subtitleComponents}
            state={state}
            setState={setState}
          />
          <MainImages mainImageComponents={mainImageComponents} />
          <Informations
            descTextComponents={descTextComponents}
            specTextComponents={specTextComponents}
            altComponents={altComponents}
            descImageComponents={descImageComponents}
            specImageComponents={specImageComponents}
            allImageComponents={allImageComponents}
          />
        </div>
      </div>
    );
  };
  const Downloader = () => {
    let filename = title ? title : "template";
    let text = ReactDOMServer.renderToStaticMarkup(<HtmlComponents />);
    let stylesheet = styles;
    let fullWebPage = stylesheet + "<body>" + text + "</body>";

    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/html;charset=utf-8," + encodeURIComponent(fullWebPage)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <div>
      <ButtonWrapper>
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            setStep({ step: step - 1 });
          }}
        >
          BACK
        </Button>
        <Button
          variant="outlined"
          color={!isEditable ? "secondary" : "primary"}
          onClick={() => {
            setIsEditable(!isEditable);
          }}
        >
          {!isEditable ? "EDIT" : "FINISH"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={isEditable}
          onClick={Downloader}
        >
          SAVE
        </Button>
      </ButtonWrapper>
      <HtmlComponents />
    </div>
  );
}

export default HtmlFile;
