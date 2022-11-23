import { Component } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import historyBooks from "../data/history.json"

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {historyBooks.map((book) => (
            <Col sm={6} md={4} lg={3} key={book.asin}>
              <Card className="book-card my-3">
                <Card.Img
                  className="book-card-img"
                  variant="top"
                  src={book.img}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default LatestRelease
