const styles = String.raw`
<head>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");

:root {
  --main-templete-color: #f8f9fa;
  --main-font-color: #333;
}

*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}

.container {
  overflow-x: hidden;
  background: rgb(252, 250, 250);
  width: 100%;
  margin: auto;
  background: var(--main-templete-color);
  color: var(--main-font-color);
  box-shadow: -6px 0px 10px 1px rgba(0, 0, 0, 0.05),
    6px 0px 10px 1px rgba(0, 0, 0, 0.05);
}

@media screen and (min-width: 769px) {
  .container {
    width: 80%;
  }
}

.container-wrapper {
  position: relative;
  margin: auto;
  width: 100%;
}

.navbar-header {
  position: relative;
  z-index: 100;
  width: 100%;
  min-width: 0;
  min-height: 70px;
  max-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--main-templete-color);
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 25px;
  cursor: default;
}
.container img {
  max-width: 100%;
}
.section-0 {
  position: relative;
  width: 100%;
}

.section-0 .intro-image {
  position: relative;
  width: 100%;
  height: 45vw;
  min-height: 400px;
}

.section-0 .intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.section-0 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.55) 100%, white);
}

.section-0 .overlay .text {
  margin-top: 00px;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.section-0 .overlay .text h2 {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: calc(26px + 8vw);
  font-weight: bold;
}

.section-0 .overlay .text p {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: calc(18px + 1vw);
  font-weight: bold;
}

/* main description */

.main-description {
  position: relative;
  width: 100%;
  background: var(--main-font-color);
  color: var(--main-templete-color);
  z-index: 10;
}

.main-description .main-title {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 25px;
}

.main-title ul li {
  list-style: none;
}

.main-title .title ul li {
  margin: auto;
  margin: 20px 50px 20px 50px;
}

.main-title .title ul li p {
  text-transform: uppercase;
}

.main-title .subtitle ul li {
  margin: 20px;
  font-size: 22px;
}

.item-container {
  position: relative;
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
  border: 1px solid white;
  background: #fff;
}

.item-container .radio {
  position: relative;
  visibility: hidden;
  display: none;
}

.item-container .big-images {
  position: relative;
  width: 60%;
  padding-top: 60%;
  max-height: 800px;
  margin: 20px auto;
}

.item-container .big-images img {
  position: absolute;
  top: 0;
  object-position: center;
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.77, 0, 0.175, 1);
}

.item-container .radio-label-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 25px 0px;
}

.radio-label-container label {
  max-width: 100px;
  max-height: 100px;
  object-position: center;
  object-fit: contain;
  border: 1px solid rgb(100, 100, 100);
  margin: 3px;
  overflow: hidden;
  opacity: 0.6;
}

.radio-label-container label img {
  width: calc(30px + (50vw / 15));
  height: calc(30px + (50vw / 15));
}

#controls {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}

#controls .label-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  color: var(--main-font-color);
  font-size: 40pt;
}

#controls .label-right label,
#controls .label-left label {
  position: absolute;
  right: 0;
  width: 10%;
  height: 100%;
}

#controls .label-left label {
  left: 0;
}

#controls .label-right label::before {
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(50%, -40%);
  font-family: "oswald", sans-serif;
  content: "\203a";
  color: inherit;
  font-size: inherit;
}

#controls .label-left label::before {
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(50%, -40%);
  font-family: "oswald", sans-serif;
  content: "\2039";
  color: inherit;
  font-size: inherit;
}

#controls label:active {
  color: #5cdb95;
}

#rd1:checked ~ #controls .label-right label:nth-child(5) {
  z-index: 1;
}

#rd2:checked ~ #controls .label-right label:nth-child(4) {
  z-index: 2;
}

#rd3:checked ~ #controls .label-right label:nth-child(3) {
  z-index: 3;
}

#rd4:checked ~ #controls .label-right label:nth-child(2) {
  z-index: 4;
}

#rd5:checked ~ #controls .label-right label:nth-child(1) {
  z-index: 5;
}

#rd6:checked ~ #controls .label-left label:nth-child(5) {
  z-index: 1;
}

#rd5:checked ~ #controls .label-left label:nth-child(4) {
  z-index: 2;
}

#rd4:checked ~ #controls .label-left label:nth-child(3) {
  z-index: 3;
}

#rd3:checked ~ #controls .label-left label:nth-child(2) {
  z-index: 4;
}

#rd2:checked ~ #controls .label-left label:nth-child(1) {
  z-index: 5;
}

#rd1:checked ~ .big-images img:nth-child(1),
#rd2:checked ~ .big-images img:nth-child(2),
#rd3:checked ~ .big-images img:nth-child(3),
#rd4:checked ~ .big-images img:nth-child(4),
#rd5:checked ~ .big-images img:nth-child(5),
#rd6:checked ~ .big-images img:nth-child(6) {
  opacity: 1;
}

#rd1:checked ~ .radio-label-container label:nth-child(1),
#rd2:checked ~ .radio-label-container label:nth-child(2),
#rd3:checked ~ .radio-label-container label:nth-child(3),
#rd4:checked ~ .radio-label-container label:nth-child(4),
#rd5:checked ~ .radio-label-container label:nth-child(5),
#rd6:checked ~ .radio-label-container label:nth-child(6) {
  opacity: 1;
}

/* information section */

input[type="checkbox"] {
  visibility: hidden;
  display: none;
}

.cards-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 25px 0px;
}

.cards-container > div {
  position: relative;
  margin: 10px;
  height: calc(200px + 4vw);
  width: calc(200px + 4vw);
  min-width: 150px;
  min-height: 80px;
  border-radius: 6px;
  background: white;
  box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.07),
    -4px -4px 10px 1px rgba(255, 255, 255, 0.9);
}

.cards-container .description,
.cards-container .specification,
.cards-container .more_images,
.cards-container .shipping,
.cards-container .return,
.cards-container .feedback {
  width: 100%;
  height: auto;
}

.cards-container .label-container {
  width: 100%;
}

.cards-container label {
  width: 100%;
}

.cards-container .more_images,
.cards-container .shipping,
.cards-container .return,
.cards-container .feedback {
  height: 00px;
  overflow: hidden;
  transition: height 300ms;
}

#ch1:checked ~ .cards-container .more_images {
  height: auto;
}

#ch2:checked ~ .cards-container .shipping {
  height: calc(1050px - (100vw / 3));
}

#ch3:checked ~ .cards-container .return,
#ch4:checked ~ .cards-container .feedback {
  height: calc(600px - (100vw / 5));
}

.cards-container .text ul {
  margin: 30px;
}

.cards-container .text .title {
  margin: 20px;
}

.cards-container .text ul li {
  font-size: 18px;
  font-family: "open sans", sans-serif;
  text-align: left;
  padding: 10px;
}

.cards-container .logo {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 60px;
  margin: 30px 0 0 0;
}

.cards-container .logo-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
}

.cards-container .text {
  width: 100%;
  margin-top: 10px;
  position: relative;
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.cards-container .logo img {
  width: 100%;
  height: 100%;
}

.arrow {
  position: absolute;
  width: 30px;
  background: var(--main-font-color);
  transform: rotateZ(0deg);
  right: 10px;
  top: 45%;
}

.arrow::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 3px;
  left: 7px;
  background: inherit;
  border-radius: 20%;
  transform: rotateZ(45deg);
}

.arrow::after {
  position: absolute;
  content: "";
  width: 10px;
  height: 3px;
  right: 7px;
  border-radius: 20%;
  background: inherit;
  transform: rotateZ(-45deg);
  transition: transform 300ms;
}

#ch1:checked ~ .cards-container .more_images .text .title .arrow::after,
#ch2:checked ~ .cards-container .shipping .text .title .arrow::after,
#ch3:checked ~ .cards-container .return .text .title .arrow::after,
#ch4:checked ~ .cards-container .feedback .text .title .arrow::after {
  transform: translate(-6px, 6px) rotateZ(-45deg);
}

footer {
  display: grid;
  place-items: center;
  width: 100%;
  height: 50px;
  text-align: center;
  background: var(--main-font-color);
  color: white;
}
.spec_images img {
  width: 500px;
  height: 500px;
}
.ytvideo * {
  box-sizing: border-box;
}

.ytvideo {
  margin: 0.5em auto 40px auto;
  max-width: 800px;
  font-family: arial;
  text-align: center;
  position: relative;
  max-height: 800px;
  background-color: #555;
}

.ytvideo p {
  position: absolute;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}

.ytvideo .yt_hd {
  font-size: 16px;
  width: 100%;
  height: 28px;
  line-height: 28px;
  text-align: left;
  top: 0;
  left: 0;
  padding-left: 10px;
  overflow: hidden;
}

.ytvideo .yt_ft {
  font-size: 12px;
  width: 100%;
  bottom: 0;
  left: 0;
}

.ytvideo img {
  display: block;
  max-width: 100%;
  border: 0;
}

.ytvideo a:after {
  content: "\A0\25BA";
  position: absolute;
  width: 60px;
  height: 50px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 0;
  border-radius: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  line-height: 50px;
  cursor: pointer;
}

.ytvideo a:hover:after {
  background: #cc181e;
}

.ytvideo .yt_inp {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 0.5em 0.2em;
  border: 0;
  color: white;
  background: rgba(0, 0, 0, 0.7);
}
</style>
</head>
`;

export default styles;
