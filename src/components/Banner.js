/* eslint-disable */
import headerImg from '../assets/img/header-img.svg'
import { useEffect, useState, useMemo } from "react";

/* eslint-disable */
/* eslint-disable no-const-assign */
const Banner = () =>
{
    // 实现打字的效果
    let [text, setText] = useState('');
    const textList = useMemo(() => ['Programmer', 'Problem Solver', 'Quick Learner'], []); // useMemo 缓存 这样不会每次re-render都 重新创建一个新的list
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
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
                    <div className="w-full order-2 lg:order-1">
                        <span className="tagline">Welcome to Ze's Websites</span>
                        <h1>
                            Hi! I'm Ze, a <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>I am a problem solver with a passion for making things done.</p>
                        <button className="flex items-center mt-8">
                            Let's Connect
                            <svg className="w-6 h-6 ml-2 transition-all duration-300 ease-in-out" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full order-1 lg:order-2 flex justify-center lg:justify-end">
                        <img src={headerImg} alt="Header Img" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Banner;

