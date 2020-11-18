import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "fontsource-roboto";
import { getTextClean } from "./text_cleaner";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import {
  Container,
  AppBar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

function SentenceReform({ text, protoData, setProtoData }) {
  const TextContainer = styled.div`
    background-color: white;
    border: 1px solid lightgray;
    padding: 4px 5px;
    margin: 3px;
    border-radius: 3px;
  `;
  const reOrder = (source, destination, droppableId) => {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    let dataObjList = protoData.dataObjList;
    let [removed] = dataObjList.splice(source.index, 1);
    dataObjList.splice(destination.index, 0, removed);
    let reorderedText = dataObjList.map((item) => item.text).join("\n");

    setProtoData({
      ...protoData,
      text: reorderedText,
      dataObjList,
    });
  };

  const onDragEnd = (result) => {
    const { source, destination, droppableId } = result;
    reOrder(source, destination, droppableId);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"text-data"} key={uuid()}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                border: "1px solid lightgray",
                height: 300,
                overflowY: "scroll",
              }}
            >
              {protoData.dataObjList.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={uuid()}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TextContainer>
                        <p>{item.text}</p>
                      </TextContainer>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

function Prototype({ id, formData, setFormData, step, setStep }) {
  const [protoData, setProtoData] = useState({
    text: "",
    prohibitWords: [],
    isDisabled: false,
    cleanedText: "",
    isReform: false,
    title: "",
    subtitle: "",
    alt: "",
  });
  useEffect(() => {
    setProtoData({
      ...protoData,
      text: formData.textData[id],
      title: formData.textData.title,
      subtitle: formData.textData.subtitle,
      alt: formData.textData.alt,
    });
  }, [id, step]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    let { text, isDisabled, prohibitWords, cleanedText } = getTextClean(value);

    setProtoData({
      ...protoData,
      [name]: text,
      prohibitWords,
      isDisabled,
      cleanedText,
    });
  };

  const handleReorder = () => {
    let sentenceList = protoData.text.split("\n");
    let dataObjList = sentenceList.map((text, index) => {
      return {
        id: `id-${index}`,
        text,
      };
    });

    setProtoData({
      ...protoData,
      dataObjList,
      isReform: !protoData.isReform,
    });
  };

  const handleClear = () => {
    setProtoData({
      ...protoData,
      text: protoData.cleanedText,
      isDisabled: false,
    });
  };
  const handleNext = () => {
    setFormData({
      ...formData,
      textData: {
        ...formData.textData,
        [id]: protoData.text,
        title: protoData.title,
        subtitle: protoData.subtitle,
        alt: protoData.alt,
      },
    });
    setStep({ step: step + 1 });

    setProtoData({
      ...protoData,
      text: "",
      isReform: false,
    });
  };
  const handleBack = () => {
    setFormData({
      ...formData,
      textData: {
        ...formData.textData,
        [id]: protoData.text,
        title: protoData.title,
        subtitle: protoData.subtitle,
        alt: protoData.alt,
      },
    });
    setStep({ step: step - 1 });
  };
  return (
    <div>
      {protoData.isDisabled && (
        <div>
          <Alert severity="error">
            Your text contains prohibited words! Please click clean now Button.
          </Alert>
          <Alert severity="error">{protoData.prohibitWords + " "}</Alert>
        </div>
      )}
      <Container maxWidth="lg" style={{ border: "none" }}>
        <AppBar position="relative">
          <Typography variant="h6" align="center">
            {`Text Reformer - ${id.charAt(0).toUpperCase() + id.slice(1)}`}
          </Typography>
        </AppBar>
        <br />
        {!protoData.isReform ? (
          <TextField
            name="text"
            error={protoData.isDisabled}
            helperText={
              protoData.isDisabled && "Your text have prohibited words."
            }
            autoFocus={true}
            label={id.charAt(0).toUpperCase() + id.slice(1)}
            multiline
            rows={15}
            variant="outlined"
            placeholder="Paste your text here..."
            fullWidth={true}
            onChange={handleChange}
            value={protoData.text}
          />
        ) : (
          <SentenceReform
            text={protoData.text}
            protoData={protoData}
            setProtoData={setProtoData}
          />
        )}
        <br />
        <br />
        <TextField
          error={protoData.isDisabled}
          helperText={
            protoData.isDisabled && "Your text have prohibited words."
          }
          multiline
          name="title"
          label="Listing Title"
          variant="outlined"
          placeholder="Enter your Title"
          fullWidth={true}
          onChange={handleChange}
          value={protoData.title}
        ></TextField>
        <br />
        <br />
        <TextField
          error={protoData.isDisabled}
          helperText={
            protoData.isDisabled && "Your text have prohibited words."
          }
          multiline
          name="subtitle"
          label="Listing SubTitle"
          variant="outlined"
          placeholder="Enter your Subtitle"
          fullWidth={true}
          onChange={handleChange}
          value={protoData.subtitle}
        ></TextField>
        <br />
        <br />
        <TextField
          error={protoData.isDisabled}
          helperText={
            protoData.isDisabled && "Your text have prohibited words."
          }
          multiline
          name="alt"
          label="Image alt text"
          variant="outlined"
          placeholder="title, keywords, etc.."
          fullWidth={true}
          onChange={handleChange}
          value={protoData.alt}
        ></TextField>
        <br />
        <br />
        <ButtonContainer style={{ justifyContent: "space-between" }}>
          <Button
            disabled={!protoData.isDisabled}
            color={!protoData.isDisabled ? "secondary" : "default"}
            variant="contained"
            size="small"
            onClick={handleClear}
          >
            CLEAR NOW
          </Button>
          <Button
            disabled={protoData.isDisabled || !protoData.text}
            color={!protoData.isReform ? "primary" : "default"}
            variant="contained"
            size="small"
            onClick={handleReorder}
          >
            REORDER
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button
            disabled={protoData.isDisabled}
            color="secondary"
            variant="contained"
            size="small"
            onClick={handleBack}
          >
            BACK
          </Button>
          <Button
            disabled={protoData.isDisabled || !protoData.text}
            variant="contained"
            color="primary"
            size="small"
            onClick={handleNext}
          >
            Next
          </Button>
        </ButtonContainer>
      </Container>
    </div>
  );
}

let DescReformer = Prototype,
  SpecReformer = Prototype;

function ReformText({ formData, setFormData, step, setStep }) {
  switch (step) {
    case 3:
      return (
        <div>
          <DescReformer
            id="description"
            formData={formData}
            setFormData={setFormData}
            step={step}
            setStep={setStep}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <SpecReformer
            id="specification"
            formData={formData}
            setFormData={setFormData}
            step={step}
            setStep={setStep}
          />
        </div>
      );
    default:
      return;
  }
}
export default ReformText;
