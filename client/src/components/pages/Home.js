
import React from "react";
import { Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Home() {
  return (
      <Container className="d-flex justify-content-center align-item-center">
              <div className="text-center typewriter">
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter.changeDelay(50)
                          .typeString("Hello I'm Stephen")
                          .pauseFor(1000)
                          .typeString("<br> I'm a Full Stack Developer")
                          .pauseFor(1000)
                          .typeString("<br> Take a Journey with me to see my work")
                          .start();
                  }}
              />
          </div>
      
      </Container >
  );
}

export default Home;