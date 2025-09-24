import React, { useEffect, useState } from 'react';
import './CursorSpotlight.css';

const CursorSpotlight = () =>
{
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>
    {
        // 隐藏系统默认光标
        document.body.style.cursor = 'none';

        const handleMouseMove = (e) =>
        {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () =>
        {
            setIsVisible(false);
        };

        const handleMouseEnter = () =>
        {
            setIsVisible(true);
        };

        // 添加事件监听器到document
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // 清理事件监听器
        return () =>
        {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            // 恢复系统默认光标
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <div
            className={`cursor-spotlight ${isVisible ? 'visible' : ''}`}
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
            }}
        />
    );
};

export default CursorSpotlight;
