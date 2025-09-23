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
        <section className="py-20 pb-16 bg-banner bg-top bg-cover bg-no-repeat sm:py-28 sm:pb-10 md:py-24 md:pb-12 lg:py-28 lg:pb-16 xl:py-32 xl:pb-20" id="home">
            <div className="main-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
                    <div className="w-full order-2 lg:order-1">
                        <span className="font-bold tracking-wider py-2 px-3 bg-gradient-to-r from-primary/50 to-primary-dark/50 border border-white border-opacity-50 text-xl mb-4 inline-block sm:text-base">Welcome to Ze's Websites</span>
                        <h1 className="text-6xl font-bold tracking-wider leading-none mb-5 block sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-tight">
                            Hi! I'm Ze, a <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                                <span className="wrap border-r-2 border-gray-400 border-opacity-80">{text}</span>
                            </span>
                        </h1>
                        <p className="text-light-muted text-lg tracking-wider leading-6 w-full md:text-sm xl:text-base">I am a problem solver with a passion for making things done.</p>
                        <a href="#connect" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white mt-14 tracking-wider overflow-hidden bg-transparent border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                            <span className="relative z-10">Let's Connect</span>
                            <svg className="relative z-10 w-6 h-6 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="w-full order-1 lg:order-2 flex justify-center lg:justify-end">
                        <img src={headerImg} alt="Header Img" className="max-w-full h-auto animate-updown" />
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Banner;

