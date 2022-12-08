import { Carousel } from 'react-bootstrap';

function UncontrolledExample() {


    return (
        <Carousel>
            <Carousel.Item className="carouselCardBg">
                <img
                    className="d-block w-100"
                    src="../images/sketch_1.png"
                />
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 1</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carouselCardBg">
                <img
                    className="d-block w-100"
                    src="../images/sketch_2.png"
                />
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 2</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carouselCardBg">
                <img
                    className="d-block w-100"
                    src="../images/sketch_3.png"
                />
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 3</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carouselCardBg">
                <img
                    className="d-block w-100"
                    src="../images/sketch_4.png"
                />
                <Carousel.Caption className="carouselCardText">
                    <h3>Team Member 4</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );

}
export default UncontrolledExample;