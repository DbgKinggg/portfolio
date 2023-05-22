import InfiniteLooper from '../InfiniteLooper'

function SkillsCard() {
  const skillList: {
    key: number
    speed: number
    direction: 'left' | 'right'
    skills: string[]
  }[] = [
    {
      key: 1,
      speed: 30,
      direction: 'left',
      skills: [
        'MySQL',
        'PostgreSQL',
        'AWS',
        'Docker',
        'Javascript',
        'TypeScript',
        'PHP',
        'Node.js',
      ],
    },
    {
      key: 2,
      speed: 25,
      direction: 'right',
      skills: [
        'React',
        'Next.js',
        'Vue',
        'Chakra ui',
        'Styled-components',
        'Tailwind',
        'Solidity',
        'Web3.js',
      ],
    },
  ]

  return (
    <div className="relative z-10 w-full overflow-hidden rounded-3xl bg-gradient-to-tr from-slate-800 to-slate-950 py-10 lg:col-span-4 lg:py-10">
      <h3 className="px-10 text-3xl font-bold text-gray-50">
        Techs that I use
      </h3>
      <div className="masked-fade-out mt-6">
        {skillList.map((skills) => (
          <InfiniteLooper
            direction={skills.direction}
            speed={skills.speed}
            key={skills.key}
          >
            <div className="mr-4 mt-5 flex items-center justify-center space-x-4 text-center lg:mt-6">
              {skills.skills.map((skill) => (
                <div
                  key={skill}
                  className="cursor-default self-stretch whitespace-nowrap rounded-full border border-slate-600 bg-slate-800/80 px-6 py-2 text-slate-300 transition-all hover:border-slate-400"
                >
                  {skill}
                </div>
              ))}
            </div>
          </InfiniteLooper>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard
