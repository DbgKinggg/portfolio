import InfiniteLooper from "../InfiniteLooper";

function SkillsCard() {
  const skillList: {
    key: number;
    speed: number;
    direction: 'left' | 'right';
    skills: string[];
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
        ]
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
          'Web3.js'
        ]
      },
    ];


  return (
    <div className="relative z-10 w-full rounded-3xl py-10 lg:col-span-4 lg:py-10 bg-gradient-to-tr from-slate-800 to-slate-950 overflow-hidden">
      <h3 className="text-3xl font-bold text-gray-50 px-10">Techs that I use</h3>
      <div className="mt-6 masked-fade-out">
        {
          skillList.map(skills => (
            <InfiniteLooper direction={skills.direction} speed={skills.speed} key={skills.key}>
              <div className="flex space-x-4 mt-5 lg:mt-6 mr-4 items-center justify-center text-center">

                {
                  skills.skills.map(skill => (
                    <div
                      key={skill}
                      className="rounded-full cursor-default self-stretch whitespace-nowrap transition-all px-6 py-2 bg-slate-800/80 text-slate-300 border border-slate-600 hover:border-slate-400"
                    >
                      {skill}
                    </div>
                  ))
                }
              </div>
            </InfiniteLooper>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsCard
