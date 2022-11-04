import { Card, Container, Row, Col, Image } from "react-bootstrap";
import thorImage from "../assets/images/superhero/thor.jpeg";
import gatotkacaImage from "../assets/images/superhero/gatotkaca.jpg";
import blackImage from "../assets/images/superhero/black.jpg";
import strangeImage from "../assets/images/superhero/strange.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import adamImage from "../assets/images/superhero/adam.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHEROES MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={thorImage} alt="Thor Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">T H O R</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={gatotkacaImage} alt="Gatotkaca Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">GATOTKACA</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={blackImage} alt="Black Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BLACK PANTHER</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={strangeImage} alt="Strange Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOCTOR STRANGE</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Spiderman Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={adamImage} alt="Adam Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BLACK ADAM</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
