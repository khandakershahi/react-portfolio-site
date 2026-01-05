import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiWordpress, SiPhp, SiMysql, SiExpress, SiMongodb } from 'react-icons/si';
import myPhoto from '../../assets/images/my-photo-gray.jpg';


const Hero = () => {
  const handleDownloadResume = () => {
    // TODO: Implement resume download
    console.log('Download resume clicked');
  };

  const statistics = [
    { label: 'Projects Completed', value: 25 },
    { label: 'Happy Clients', value: 15 },
    { label: 'Years Experience', value: 5 },
    { label: 'Technologies Mastered', value: 8 }
  ];

  const technologies = [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'WordPress', icon: SiWordpress },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb }
  ];

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]"></div>
      
      <div className="z-10 flex flex-col max-w-[1200px] w-full gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="flex flex-col gap-6 lg:max-w-[600px] text-center lg:text-left order-2 lg:order-1">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="px-3 py-1 bg-secondary/20 rounded-full w-fit">
              <span className="text-primary dark:text-secondary font-bold tracking-widest uppercase text-xs animate-fade-in-up">
                Frontend Web Developer
              </span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-primary dark:text-white sm:text-5xl md:text-6xl">
              Hello, I'm <span className="text-secondary">Khandaker Shahi</span>
            </h1>
            <h2 className="text-lg font-normal leading-relaxed text-primary/80 dark:text-gray-300">
              Frontend Web Developer specializing in modern, fast, and SEO-friendly web applications. I work with React, Next.js, Tailwind CSS, and have a strong background in WordPress development.
            </h2>
          </div>
          
          <div className="flex flex-col gap-8 mt-4">
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleDownloadResume}
                className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary text-secondary hover:bg-primary/90 transition-colors text-base font-bold leading-normal tracking-[0.015em] shadow-xl shadow-primary/10"
              >
                <FaDownload size={20} />
                <span className="truncate">Download Resume</span>
              </button>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 border border-primary/20 dark:border-gray-600 bg-transparent text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors text-base font-medium leading-normal">
                <span>View Projects</span>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: FaGithub, href: 'https://github.com/khandakershahi', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/khandakershahi', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com/khandakershahi', label: 'Twitter' },
                { icon: FaFacebook, href: 'https://facebook.com/khandakershahi', label: 'Facebook' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-secondary transition-all shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-primary dark:text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative w-full max-w-[400px] lg:max-w-[480px] aspect-square flex justify-center items-center order-1 lg:order-2 mx-auto">
          <div className="absolute inset-0 bg-primary rounded-full blur-[2px] opacity-10 dark:opacity-20 scale-95"></div>
          <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
            <img
              alt="Portrait of Khandaker Shahi"
              className="w-full h-full object-cover"
              src={myPhoto}
            />
          </div>
          <div className="absolute bottom-10 -left-4 md:left-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-200 dark:border-gray-600">
            <div className="bg-primary/10 p-2 rounded-lg text-primary dark:text-secondary">
              <span className="text-2xl">✓</span>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Experience</p>
              <p className="text-sm font-bold text-primary dark:text-white">5+ Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Marquee */}
      <div className="w-full bg-primary dark:bg-gray-900 border-y border-primary/20 dark:border-gray-700 py-8 overflow-hidden relative mt-16">
        <div className="flex gap-16 animate-marquee whitespace-nowrap justify-center flex-wrap px-4 text-white/80">
          {technologies.map((tech, index) => (
            <span key={index} className="font-semibold text-xl flex items-center gap-2">
              <tech.icon className="text-secondary" />
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <section className="py-16 px-4 w-full">
        <div className="max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="p-4 bg-primary/10 rounded-full text-primary dark:text-secondary mb-2">
                <span className="text-3xl">📁</span>
              </div>
              <h3 className="text-3xl font-bold text-primary dark:text-white">{stat.value}+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;