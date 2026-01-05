import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss,
  SiWordpress,
  SiPhp,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiGit,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🌐',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
      ]
    },
    {
      category: 'Backend & CMS',
      icon: '⚙️',
      skills: [
        { name: 'WordPress', icon: SiWordpress, color: '#21759B', description: 'CMS Development' },
        { name: 'Express.js', icon: SiExpress, color: '#000000', description: 'Node.js Framework' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'NoSQL Database' }
      ]
    },
    {
      category: 'Tools & Deployment',
      icon: '🚀',
      skills: [
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Git', icon: SiGit, color: '#F05032' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Expertise
          </div>
          <h1 className="text-primary dark:text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            Technical Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A curated list of technologies I use to build scalable, high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col h-full">
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-secondary/50 transition-all duration-300 h-full group">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary shadow-inner">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary dark:text-white">{category.category}</h3>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                    {category.category === 'Frontend' ? 'Client Side' : 
                     category.category === 'Backend & CMS' ? 'Server Side' : 'Deployment'}
                  </span>
                </div>

                {/* Skills */}
                {category.category === 'Frontend' ? (
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group/icon">
                        <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm group-hover/icon:scale-110 transition-transform">
                          <skill.icon className="text-2xl" style={{ color: skill.color }} />
                        </div>
                        <span className="text-xs font-semibold text-primary dark:text-white text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                ) : category.category === 'Backend & CMS' ? (
                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group/item">
                        <div className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm group-hover/item:scale-110 transition-transform">
                          <skill.icon className="text-xl" style={{ color: skill.color }} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-primary dark:text-white">{skill.name}</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{skill.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/item relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-700 p-4 border border-gray-100 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 hover:border-secondary/30 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center relative z-10">
                          <div className="flex items-center gap-3">
                            <skill.icon className="text-xl" style={{ color: skill.color }} />
                            <span className="text-primary dark:text-white font-semibold text-sm">{skill.name}</span>
                          </div>
                          <span className="text-gray-300 dark:text-gray-500 group-hover/item:text-secondary text-sm">→</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div aria-hidden="true" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[80px] opacity-40"></div>
      </div>
    </section>
  );
};

export default Skills;