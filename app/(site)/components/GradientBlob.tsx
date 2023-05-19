function GradientBlob() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={200}
      fill="none"
      className="absolute right-0 top-2 -z-10 w-auto md:left-0 md:h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle
        cx={100}
        cy={100}
        r={50}
        fill="#8E80FF"
        filter="url(#a)"
        style={{
          mixBlendMode: 'normal',
        }}
      />
      <defs>
        <filter
          id="a"
          width="150%"
          height="150%"
          x="-25%"
          y="-25%"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur result="fx_foregroundBlur" stdDeviation={24} />
          <feTurbulence
            baseFrequency={5}
            numOctaves={6}
            result="noise"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feDisplacementMap
            in="fx_foregroundBlur"
            in2="noise"
            result="displacement"
            scale={50}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default GradientBlob
