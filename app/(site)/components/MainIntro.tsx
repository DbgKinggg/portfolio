"use client";
import Image from 'next/image'
import { MouseEvent, useRef } from 'react';

function MainIntro() {
  let bounds;
  const inputRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rotateToMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (inputRef.current === null || glowRef.current === null) {
      return;
    }

    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 3}deg
      )
    `;

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };
  const removeListener = (e: MouseEvent<HTMLDivElement>) => {
    if (inputRef.current === null) {
      return;
    }

    inputRef.current.style.transform = '';
    inputRef.current.style.background = '';
  };

  return (
    <section className="relative flex max-h-screen flex-col items-center justify-center">
      <div className="z-10 flex flex-col items-center justify-center lg:fixed lg:top-1/2 lg:-translate-y-1/2">
        <div ref={inputRef}
          className="card rounded-3xl group"
          onMouseLeave={removeListener}
          onMouseMove={rotateToMouse}
        >
          <Image
            src="/images/avatar.webp"
            className="rounded-3xl shadow-lg transition-all group-hover:shadow-2xl group-hover:shadow-[#7c79bf]/50"
            width="200"
            height="200"
            alt="avatar"
          />
          <div ref={glowRef} className="glow rounded-3xl" />
        </div>
        <h1 className="mt-3 text-center text-3xl font-bold md:mt-5 md:text-5xl">
          Samuel Chen
        </h1>
        <p className="md:text-md mt-3 px-4 text-center text-gray-300 md:mt-1">
          Full-Stack Developer Based In Melbourne, Australia
        </p>
      </div>
      <div className="absolute left-0 z-0 h-72 max-h-96 w-screen -translate-x-[65%] scale-150 rounded-full bg-[#7c79bf] md:h-screen md:-translate-x-[99%] lg:fixed lg:top-1/2 lg:max-h-none lg:-translate-y-1/2"></div>
    </section>
  )
}

export default MainIntro
