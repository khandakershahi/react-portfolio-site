import myPhoto from '../../assets/images/my-photo-gray.jpg';

const About = () => {
  const experiences = [
    {
      title: 'Frontend Web Developer',
      company: 'Freelance',
      period: '2020 - Present',
      description: [
        'Developed modern, responsive websites using React, Next.js, and Tailwind CSS for various clients.',
        'Built custom WordPress themes and plugins with focus on performance and SEO optimization.',
        'Collaborated with designers and clients to deliver pixel-perfect, user-friendly web applications.'
      ]
    },
    {
      title: 'WordPress Developer',
      company: 'Web Development Agency',
      period: '2019 - 2020',
      description: [
        'Created custom WordPress themes and maintained client websites with focus on performance.',
        'Implemented responsive designs and ensured cross-browser compatibility.',
        'Optimized websites for search engines and improved loading speeds by 40%.'
      ]
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Local Tech Company',
      period: '2018 - 2019',
      description: [
        'Assisted in developing user interfaces using HTML, CSS, and JavaScript.',
        'Collaborated with senior developers to implement responsive web designs.',
        'Learned modern frontend frameworks and best practices in web development.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Self-Taught Frontend Developer',
      institution: 'Online Learning Platforms',
      period: '2017 - Present',
      description: 'Continuously learning through online courses, tutorials, and hands-on projects. Focused on modern web technologies including React, Next.js, and responsive design principles.'
    },
    {
      degree: 'Web Development Certification',
      institution: 'Programming Hero',
      period: '2018',
      description: 'Completed comprehensive web development course covering HTML, CSS, JavaScript, React, and modern development practices.'
    }
  ];

  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'WordPress', 'Express.js', 'MongoDB'];

  return (
    <section id="about" className="py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12 text-center">
          <p className="text-secondary text-sm font-bold uppercase tracking-widest">Profile</p>
          <h1 className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-[700px] mt-2 mx-auto">
            A passionate Frontend Web Developer crafting modern, fast, and SEO-friendly web applications with React, Next.js, and WordPress.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Profile Image and Skills */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl bg-primary group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img
                alt="Profile Picture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={myPhoto}
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-bold text-lg">Khandaker Shahi</p>
                <p className="text-secondary text-sm">Frontend Web Developer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary dark:text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Journey and Interests */}
          <div className="md:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center gap-3">
                <span className="text-secondary">🚀</span>
                My Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                My programming journey began with a curiosity for creating beautiful and functional web experiences. Starting with HTML and CSS, I quickly evolved into modern JavaScript frameworks and fell in love with React's component-based architecture.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                Over the years, I've specialized in frontend development, focusing on building modern, fast, and SEO-friendly web applications. I enjoy turning designs into clean, scalable code and continuously improving my skills through real-world projects.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-primary dark:text-white flex items-center gap-3">
                <span className="text-secondary">❤️</span>
                Interests
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                When I'm not coding, I explore new web technologies and contribute to open-source projects. I'm passionate about staying up-to-date with the latest frontend trends and best practices. I also enjoy collaborating with other developers and sharing knowledge through the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="w-full bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700 mt-16 -mx-4 px-4">
          <div className="w-full max-w-[1200px] py-20 mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-8 w-1 bg-secondary rounded-full"></div>
              <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">
                Professional Experience
              </h2>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-secondary/30 rounded-xl p-8 transition-all duration-300 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="text-primary dark:text-white text-xl font-bold">{exp.title}</h3>
                    <span className="text-secondary text-sm font-bold bg-secondary/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary/80 dark:text-white/80 font-medium mb-4">{exp.company}</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-sm md:text-base">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="w-full max-w-[1200px] py-20 mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-8 w-1 bg-secondary rounded-full"></div>
            <h2 className="text-primary dark:text-white text-3xl font-bold leading-tight tracking-tight">
              Education & Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-secondary/50 transition-colors group shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-primary dark:text-white text-lg font-bold mb-1">{edu.degree}</h3>
                <p className="text-secondary text-sm font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12 mt-10 -mx-4 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-primary dark:text-white text-2xl font-bold">Ready to collaborate?</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Check out my projects or get in touch.</p>
            </div>
            <div className="flex gap-4">
              <button className="border border-secondary text-secondary px-6 py-2 rounded-lg text-sm font-bold hover:bg-secondary hover:text-primary transition-colors">
                View Projects
              </button>
              <button className="bg-secondary text-primary px-6 py-2 rounded-lg text-sm font-bold hover:bg-secondary/80 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;