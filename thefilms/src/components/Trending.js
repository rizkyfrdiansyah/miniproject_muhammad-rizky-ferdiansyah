import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import peakyImage from "../assets/images/trending/peaky.jpg";
import jurassicImage from "../assets/images/trending/jurassic.jpg";
import hometeamImage from "../assets/images/trending/hometeam.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import hustleImage from "../assets/images/trending/hustle.jpg";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((result) => {
        console.log("datas => ", result);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDIES MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">D U N E</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={peakyImage} alt="Peaky Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">PEAKY BLINDERS</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jurassicImage} alt="Jurassic Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JURASSIC WORLD</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hometeamImage} alt="Hometeam Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HOME TEAM</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lightyearImage} alt="Lightyear Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hustleImage} alt="Hustle Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">H U S T L E</Card.Title>
                  <Card.Text className="text-left">This is a wider card with natural lead-in to additional content.</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
