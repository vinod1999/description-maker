import React, { useState } from "react";
import UrlForm from "./UrlForm";
import ReformImages from "./ReformImages";
import ReformText from "./ReformText";
import HtmlFile from "./templeteFiles/HtmlFile";

function UserForm() {
  const [formData, setFormData] = useState({
    urlData: {
      mainImages: [],
      allImages: [],
      descImages: [],
      specImages: [],
      introImage: [],
    },
    textData: {
      description: "",
      specification: "",
      title: "",
      subtitle: "",
      alt: "",
    },
    theme: {
      fontColor: "",
      backgroundColor: "",
    },
  });
  const [step, setStep] = useState({
    step: 1,
  });
  switch (step.step) {
    case 1:
      return (
        <UrlForm
          formData={formData}
          setFormData={setFormData}
          step={step.step}
          setStep={setStep}
        />
      );
    case 2:
      return (
        <ReformImages
          formData={formData}
          setFormData={setFormData}
          step={step.step}
          setStep={setStep}
        />
      );
    case 3:
    case 4:
      return (
        <div>
          <ReformText
            formData={formData}
            setFormData={setFormData}
            step={step.step}
            setStep={setStep}
          />
        </div>
      );
    case 5:
      return (
        <div>
          <HtmlFile
            formData={formData}
            setFormData={setFormData}
            step={step.step}
            setStep={setStep}
          />
        </div>
      );
    default:
      return null;
  }
}

export default UserForm;
