import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  AppBar,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { getImageLinks } from "./text_cleaner";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function UrlForm({ formData, setFormData, step, setStep }) {
  const [data, setData] = useState({});
  const handleChange = (event) => {
    const { value } = event.target;
    setData({ value });
  };
  const handleClick = () => {
    let urlList = getImageLinks(data.value);
    let newFormData = {
      ...formData,
      urlData: {
        ...formData.urlData,

        mainImages: urlList.slice(0, 6).map((url, index) => {
          return {
            id: `id-m${index}`,
            url: url,
          };
        }),
        allImages: urlList.map((url, index) => {
          return {
            id: `id-a${index}`,
            url: url,
          };
        }),
      },
    };
    setFormData(newFormData);
    setStep({ step: step + 1 });
  };
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
      }}
    >
      <Container maxWidth="lg" style={{ border: "none" }}>
        <AppBar position="relative">
          <Typography variant="h6" align="center">
            IMAGE LINK FINDER
          </Typography>
        </AppBar>
        <br />
        <TextField
          error={data.value !== undefined && !data.value}
          helperText={
            data.value !== undefined &&
            !data.value &&
            "Please paste url text here!"
          }
          autoFocus={true}
          label="Text Box"
          multiline
          rows={15}
          variant="outlined"
          placeholder="Paste your text here..."
          fullWidth={true}
          onChange={handleChange}
        />
        <br />
        <br />
        <ButtonContainer>
          <Button variant="contained" size="small">
            CANCEL
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleClick}
            disabled={!data.value}
          >
            Next
          </Button>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default UrlForm;
