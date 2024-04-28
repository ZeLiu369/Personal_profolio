import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'



const Banner = () =>
{
    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>

                        <span className="tagline">Welcome to Zane's Webites</span>
                        <h1>{`Hello I am Zane`}<span className="wrap">Web Developer</span></h1>
                        <p>{`I am a web developer with a passion for creating beautiful websites. I have a strong foundation in web development and I am always looking to learn more.`}</p>
                        <button onClick={() => console.log('clicked')}>Contact Me! </button>
                    </Col>
                    {/* the moving picture */}
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Banner;