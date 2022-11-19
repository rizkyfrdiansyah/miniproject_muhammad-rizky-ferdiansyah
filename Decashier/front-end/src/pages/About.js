import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <br />
        <h1>About Us</h1>
        <Row>
          <Col>
            <p className="about">
              Decashier adalah sebuah website yang menjalankan bisnis sebuah makanan dari berbagai jenis makanan yang ada di Indonesia. Website ini dibuat untuk membantu mempermudah customer memesan makanan melalui website ataupun mobile.
            </p>
            <br />
            <br />
            <p>
              <strong>Our Team Members</strong>
            </p>

            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card className="cashier-card">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
