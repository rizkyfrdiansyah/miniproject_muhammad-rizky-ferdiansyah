import { Card, Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">ABOUT</h1>
        <br />
        <Row>
          <Col md={4} className="aboutWrapper" id="about"></Col>

          <p className="text-white mb-5">
            THEFILMS adalah sebuah situs website yang menyediakan sebuah sinopsis mengenai dunia perfilman terkait dengan berbagai genre yang sedang trending yang ada di seluruh dunia. Situs ini menyediakan untuk anda yang suka dan senang
            membaca sinopsis terkait film yang di luncurkan secara legal dan aman bagi penikmat pembaca sinopsis.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
