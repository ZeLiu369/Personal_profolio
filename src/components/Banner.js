/* eslint-disable */
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import { useEffect, useState, useMemo } from "react";

/* eslint-disable */
/* eslint-disable no-const-assign */
const Banner = () =>
{
    // 实现打字的效果
    let [text, setText] = useState('');
    const textList = useMemo(() => ['Developer', 'Programmer', 'Problem Solver', 'Quick Learner'], []); // useMemo 缓存 这样不会每次re-render都 重新创建一个新的list
    let [index, setIndex] = useState(0);
    let [tying, setTying] = useState(true);
    let [deleting, setDeleting] = useState(false);
    let [timer, setTimer] = useState(() => 300 - Math.random() * 100); // lazy初始化, 只有第一次render的时候 计算一次, 300- Math... 


    // useEffect(() => 
    // {
    //     let timerId = setInterval(() => 
    //     {
    //         tick()
    //     }, timer) // setInterval returns a timer ID

    //     return () =>
    //     {
    //         clearInterval(timerId) // clean up function
    //     }
    // }, [text, timer] // ONLY when text or timer change, call useEffect again but will run clean up first 
    // );

    useEffect(() =>
    {
        let timerId = setTimeout(() =>
        {
            tick();
        }, timer); // timer控制 删除 或者 打字的速度

        return () => clearTimeout(timerId);
    }, [text, timer]);  // 只依赖 text 变化

    // 实现打字效果
    // D → De → Dev → Deve → ... → Developer
    // 等待两秒
    // 开始删除: Developer → Develope → Develop → ... → ""; 而且越删除越快
    const tick = () =>
    {
        // 用来选字母
        let i = index % textList.length;
        // 用来选 单词, "Developer"
        let selectedText = textList[i];
        // 更新文字的逻辑, 如果是 在 删除 就 删除文字, 否则就 添加文字
        let updatedText = deleting ? selectedText.substring(0, text.length - 1) : selectedText.substring(0, text.length + 1);
        // 更新文字到state
        setText(updatedText);


        if (deleting)
        {
            setTimer(prevTimer => Math.max(prevTimer / 1.75, 50)); // 越删除越快; 最小时间 50ms，避免无限加速
        }

        // 打字完成后，进入删除模式
        if (!deleting && updatedText === selectedText)
        { // it is typing
            setDeleting(true);
            setTimer(2000); // reset timer
            // setIndex(prevIndex => prevIndex + 1);

        }

        // 删除完成后，切换到下一个单词
        if (deleting && updatedText === "")
        { // it is typing
            setDeleting(false);
            setIndex(prevIndex => (prevIndex + 1) % textList.length);
            setTimer(200);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>

                        <span className="tagline">Welcome to Ze's Webites</span>
                        {/* <h1>{`Hello I am Ze, I am a `}<span className="wrap">{text}</span></h1> */}
                        <h1>{`Hi! I'm Ze, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
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