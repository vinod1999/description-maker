import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, AppBar, Typography } from "@material-ui/core";
import { Card, CardActions, CardMedia } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const DragDropContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const useStyles = makeStyles({
  root: {
    position: "relative",
    margin: 5,
    maxWidth: 345,
  },
  media: {
    width: 140,
    height: 140,
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 0,
    padding: 0,
  },
  action: {
    padding: 0,
  },
});

const ContainerWrapper = styled.div`
  /* position:relative; */
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 150px;
  overflow-x: scroll;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin: 5px;
  padding: 15px;
`;
const ProtoType = ({ name, state, id, setState }) => {
  let urlList = state.urlData[id];
  let classes = useStyles();
  return (
    <Droppable droppableId={id} direction="horizontal">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Typography variant="h6" align="center">
            {name}
          </Typography>
          <ContainerWrapper
            style={{ width: id === "allImages" ? "auto" : "auto" }}
          >
            {urlList &&
              urlList.map((urlObj, index) => {
                return (
                  <Draggable key={uuid()} draggableId={urlObj.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Card className={classes.root}>
                          <CardMedia
                            className={classes.media}
                            image={urlObj.url}
                            title="images"
                          />
                          <CardActions className={classes.action}>
                            <Button
                              className={classes.button}
                              size="small"
                              color="primary"
                              onClick={() => {
                                let newUrlList = urlList;
                                newUrlList.splice(index, 1);
                                let newState = {
                                  ...state,
                                  [id]: newUrlList,
                                };
                                setState(newState);
                              }}
                            >
                              <DeleteIcon color="primary" />
                            </Button>
                          </CardActions>
                        </Card>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                );
              })}
            {provided.placeholder}
          </ContainerWrapper>
        </div>
      )}
    </Droppable>
  );
};
const reOrder = (source, destination, state, setData) => {
  if (!destination) return;
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  let dataList, removed1, removed2, newState1, newState2;

  if (destination.droppableId === source.droppableId) {
    dataList = state.urlData[destination.droppableId];
    [removed1] = dataList.splice(source.index, 1);
    dataList.splice(destination.index, 0, removed1);

    newState1 = {
      ...state,
      urlData: {
        ...state.urlData,
        [destination.droppableId]: dataList,
      },
    };
    setData(newState1);
  } else if (destination.droppableId !== source.droppableId) {
    let startLocation = state.urlData[source.droppableId];
    let endLocation = state.urlData[destination.droppableId];
    [removed2] = startLocation.splice(source.index, 1);
    endLocation.splice(destination.index, 0, removed2);

    newState2 = {
      ...state,
      urlData: {
        ...state.urlData,
        [source.droppableId]: startLocation,
        [destination.droppableId]: endLocation,
      },
    };
    setData(newState2);
  }
};

let MainImages = ProtoType,
  AllImages = ProtoType,
  DescImages = ProtoType,
  SpecImages = ProtoType,
  IntroImage = ProtoType;

function ReformImages({ formData, setFormData, step, setStep }) {
  const [state, setState] = useState(formData);
  const onDragEnd = (result) => {
    let { source, destination } = result;
    reOrder(source, destination, state, setState);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar position="relative">
          <Typography variant="h6" align="center">
            IMAGE REFORM WINDOW
          </Typography>
        </AppBar>

        <DragDropContext onDragEnd={onDragEnd}>
          <AllImages
            name="ALL IMAGES"
            state={state}
            id="allImages"
            setState={setState}
          />
          <DragDropContainer>
            <MainImages
              name="MAIN IMAGES"
              state={state}
              id="mainImages"
              setState={setState}
            />
            <DescImages
              name="DESCRIPTION IMAGES"
              state={state}
              id="descImages"
              setState={setState}
            />
            <SpecImages
              name="SPACIFICATION IMAGES"
              state={state}
              id="specImages"
              setState={setState}
            />
            <IntroImage
              name="INTRO IMAGES"
              state={state}
              id="introImage"
              setState={setState}
            />
          </DragDropContainer>
        </DragDropContext>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setFormData({
                ...state,
                urlData: {
                  mainImages: [],
                  allImages: [],
                  descImages: [],
                  specImages: [],
                  introImage: [],
                },
              });
              setStep({ step: step - 1 });
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setFormData(state);
              setStep({ step: step + 1 });
            }}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ReformImages;
