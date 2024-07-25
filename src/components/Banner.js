/* eslint-disable */
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import { useEffect, useState } from "react";

/* eslint-disable */
/* eslint-disable no-const-assign */
const Banner = () =>
{
    // 实现打字的效果
    let [text, setText] = useState('');
    let textList = ['Developer', 'Programmer', 'Problem Solver', 'Quick Learner']
    let [index, setIndex] = useState(0);
    let [tying, setTying] = useState(true);
    let [deleting, setDeleting] = useState(false);
    let [timer, setTimer] = useState(300 - Math.random() * 100);

    useEffect(() => 
    {
        let timerId = setInterval(() =>
        {
            tick()
        }, timer)

        return () =>
        {
            clearInterval(timerId)
        }
    }, [text, timer]
    );

    // 实现打字效果
    const tick = () =>
    {
        // choose which text to be displayed, need to be rotate cycle
        let i = index % textList.length;
        let selectedText = textList[i];


        let updatedText = deleting ? selectedText.substring(0, text.length - 1) : selectedText.substring(0, text.length + 1);




        setText(updatedText);


        if (deleting)
        {
            setTimer(prevTimer => prevTimer / 2);
        }

        if (!deleting && updatedText === selectedText)
        { // it is typing
            setDeleting(true);
            setTimer(2000);
            // setIndex(prevIndex => prevIndex + 1);

        }
        if (deleting && updatedText === "")
        { // it is typing
            setDeleting(false);
            setIndex(prevIndex => prevIndex + 1);
            setTimer(200);
        }




    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>

                        <span className="tagline">Welcome to Ze's Webites</span>
                        <h1>{`Hello I am Ze, I am a `}<span className="wrap">{text}</span></h1>
                        {/* <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1> */}
                        <p>{`I am a problem solver with a passion for making things done.`}</p>
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