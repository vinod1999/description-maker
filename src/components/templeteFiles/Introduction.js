import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    margin: "2px 5px",
  },
});

function Introduction({
  isEditable,
  introImagePalette,
  titleComponents,
  subtitleComponents,
  state,
  setState,
}) {
  const [color, setColor] = useState(
    state.theme.backgroundColor || introImagePalette.lightVibrant
  );
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [isDarkFontTheme, setIsDarkFontTheme] = useState(true);
  const count = state.count;
  const style = {
    backgroundColor: color,
  };
  const handleColorChanger = () => {
    let newState;
    if (count < Object.keys(introImagePalette).length) {
      newState = {
        ...state,
        count: state.count + 1,
        theme: {
          ...state.theme,
          backgroundColor: Object.values(introImagePalette)[count],
        },
      };
    } else {
      newState = {
        ...state,
        count: 0,
      };
    }
    setState(newState);
  };

  const popover = {
    position: "absolute",
    margin: 0,
    padding: 0,
    zIndex: "2",
    right: 0,
  };

  const classes = useStyles();
  return (
    <div>
      <section className="section-1">
        <div className="main-description" style={style}>
          <div className="main-title" id="main-title">
            <div
              className="title"
              name="title"
              style={{ color: isDarkFontTheme ? "#333" : "#f8f9fa" }}
            >
              <ul>{titleComponents}</ul>
            </div>
            <div
              className="subtitle"
              name="subtitle"
              style={{ color: isDarkFontTheme ? "#333" : "#f8f9fa" }}
            >
              <ul>{subtitleComponents}</ul>
            </div>
            {isEditable && (
              <div style={{ position: "absolute", top: 0, right: 0 }}>
                <Button
                  className={classes.root}
                  variant="contained"
                  color="primary"
                  onClick={handleColorChanger}
                >
                  {Object.keys(introImagePalette)[count - 1] || "Default"}
                </Button>
                <Button
                  className={classes.root}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setDisplayColorPicker(
                      (displayColorPicker) => !displayColorPicker
                    );
                  }}
                >
                  Pick Color
                </Button>
                {displayColorPicker && (
                  <div style={popover}>
                    <ChromePicker
                      color={color}
                      onChange={(color) => {
                        setColor(color.hex);
                      }}
                    />
                  </div>
                )}
                <FormControlLabel
                  style={{ margin: 10 }}
                  control={
                    <Checkbox
                      checked={isDarkFontTheme}
                      onChange={(event) =>
                        setIsDarkFontTheme(event.target.checked)
                      }
                      color="primary"
                    />
                  }
                  label="Dark Font Theme"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
