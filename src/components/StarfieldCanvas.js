/* eslint-disable */
import { useEffect, useRef } from 'react';

// Canvas-based starfield background with mouse/touch parallax
// Adapted for React from the algorithm shown in the user's screenshots

const STAR_COLOR = '#fff';
const STAR_SIZE = 3; // base size
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const MAX_SPEED = 2.5; // clamp max velocity to avoid eye-straining motion

export default function StarfieldCanvas()
{
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() =>
    {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        let scale = 1; // device pixel ratio
        let width;
        let height;
        let stars = [];
        let pointerX;
        let pointerY;
        let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0009 };
        let touchInput = false;

        function setStarCount()
        {
            // same idea as screenshot: proportional to viewport
            return Math.floor((window.innerWidth + window.innerHeight) / 8);
        }

        function generate()
        {
            stars = [];
            const STAR_COUNT = setStarCount();
            for (let i = 0; i < STAR_COUNT; i++)
            {
                stars.push({
                    x: 0,
                    y: 0,
                    z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
                });
            }
        }

        function placeStar(star)
        {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        }

        function recycleStar(star)
        {
            // default recycle in z direction (depth)
            let direction = 'z';
            const vx = Math.abs(velocity.x);
            const vy = Math.abs(velocity.y);

            if (vx > 1 || vy > 1)
            {
                const axis = vx > vy ? (Math.random() < vy / vx ? 'y' : 'x') : (Math.random() < vx / vy ? 'x' : 'y');
                if (axis === 'x')
                {
                    direction = velocity.x > 0 ? 'l' : 'r';
                } else
                {
                    direction = velocity.y > 0 ? 't' : 'b';
                }
            }

            star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

            if (direction === 'z')
            {
                star.z = 0.1;
                star.x = Math.random() * width;
                star.y = Math.random() * height;
                return;
            }

            if (direction === 'l')
            {
                star.x = -OVERFLOW_THRESHOLD;
                star.y = height * Math.random();
            } else if (direction === 'r')
            {
                star.x = width + OVERFLOW_THRESHOLD;
                star.y = height * Math.random();
            } else if (direction === 't')
            {
                star.x = width * Math.random();
                star.y = -OVERFLOW_THRESHOLD;
            } else if (direction === 'b')
            {
                star.x = width * Math.random();
                star.y = height + OVERFLOW_THRESHOLD;
            }
        }

        function resize()
        {
            scale = window.devicePixelRatio || 1;
            const displayWidth = canvas.clientWidth * scale;
            const displayHeight = canvas.clientHeight * scale;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight)
            {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
            }

            width = canvas.width;
            height = canvas.height;

            stars.forEach(placeStar);
        }

        function clamp(value, min, max)
        {
            return Math.min(max, Math.max(min, value));
        }

        function update()
        {
            // friction
            velocity.tx *= 0.96;
            velocity.ty *= 0.96;
            // ease towards target
            velocity.x += (velocity.tx - velocity.x) * 0.8;
            velocity.y += (velocity.ty - velocity.y) * 0.8;

            // clamp speeds to a comfortable ceiling
            velocity.x = clamp(velocity.x, -MAX_SPEED, MAX_SPEED);
            velocity.y = clamp(velocity.y, -MAX_SPEED, MAX_SPEED);
            velocity.tx = clamp(velocity.tx, -MAX_SPEED, MAX_SPEED);
            velocity.ty = clamp(velocity.ty, -MAX_SPEED, MAX_SPEED);

            stars.forEach((star) =>
            {
                // move by velocity and depth
                star.x += velocity.x * star.z;
                star.y += velocity.y * star.z;

                // zoom/rotate around center
                star.x += (star.x - width / 2) * velocity.z * star.z;
                star.y += (star.y - height / 2) * velocity.z * star.z;
                star.z += velocity.z;

                // recycle if out of bounds
                if (
                    star.x < -OVERFLOW_THRESHOLD ||
                    star.x > width + OVERFLOW_THRESHOLD ||
                    star.y < -OVERFLOW_THRESHOLD ||
                    star.y > height + OVERFLOW_THRESHOLD
                )
                {
                    recycleStar(star);
                }
            });
        }

        function render()
        {
            context.clearRect(0, 0, width, height);
            context.save();
            context.lineCap = 'round';
            context.lineWidth = STAR_SIZE * scale;
            context.strokeStyle = STAR_COLOR;

            stars.forEach((star) =>
            {
                const tailX = velocity.x * 2;
                const tailY = velocity.y * 2;

                context.beginPath();
                context.moveTo(star.x, star.y);
                context.lineTo(star.x + tailX, star.y + tailY);
                context.stroke();
            });
            context.restore();
        }

        function step()
        {
            update();
            render();
            rafRef.current = requestAnimationFrame(step);
        }

        function movePointer(x, y, isTouch)
        {
            touchInput = !!isTouch;
            if (typeof pointerX === 'number' && typeof pointerY === 'number')
            {
                const ox = x - pointerX;
                const oy = y - pointerY;
                velocity.tx += (ox / 8) * scale * (touchInput ? 1 : -1);
                velocity.ty += (oy / 8) * scale * (touchInput ? 1 : -1);
                velocity.tx = clamp(velocity.tx, -MAX_SPEED, MAX_SPEED);
                velocity.ty = clamp(velocity.ty, -MAX_SPEED, MAX_SPEED);
            }
            pointerX = x;
            pointerY = y;
        }

        function handleMouseMove(e)
        {
            movePointer(e.clientX * scale, e.clientY * scale, false);
        }

        function handleTouchMove(e)
        {
            if (e.touches && e.touches[0])
            {
                movePointer(e.touches[0].clientX * scale, e.touches[0].clientY * scale, true);
            }
        }

        function handleMouseLeave()
        {
            pointerX = null;
            pointerY = null;
        }

        // init
        generate();
        resize();
        step();

        // Use window/document listeners so canvas can sit behind content
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleMouseLeave, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        return () =>
        {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseLeave);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
        />
    );
}


