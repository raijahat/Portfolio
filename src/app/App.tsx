import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl text-gray-900">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 transition">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 transition">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-700">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900">
            Hi, I'm <span className="text-blue-600">Aditya Rai Setiadi</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            I build beautiful, functional web experiences that make a difference.
            Passionate about clean code and elegant design.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl"></div>
            <div>
              <p className="text-gray-700 mb-4">
                I'm a passionate developer with a love for creating impactful digital experiences.
                With expertise in modern web technologies, I specialize in building responsive,
                user-friendly applications.
              </p>
              <p className="text-gray-700 mb-4">
                My journey in tech started with curiosity and has evolved into a career where I
                continuously learn and adapt to new challenges. I believe in writing clean,
                maintainable code and creating solutions that truly serve users.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open source, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
              { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'] },
              { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] },
              { category: 'Soft Skills', skills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Communication'] },
              { category: 'Currently Learning', skills: ['GraphQL', 'Rust', 'Machine Learning', 'Web3'] },
              { category: 'Interests', skills: ['UI/UX Design', 'Performance Optimization', 'Accessibility', 'Open Source'] }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl mb-4 text-gray-900">{item.category}</h3>
                <ul className="space-y-2">
                  {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with cart, checkout, and admin dashboard.',
                tech: ['React', 'Node.js', 'MongoDB'],
                color: 'from-pink-400 to-red-500'
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task manager with real-time updates and team features.',
                tech: ['Next.js', 'PostgreSQL', 'WebSocket'],
                color: 'from-blue-400 to-cyan-500'
              },
              {
                title: 'Portfolio CMS',
                description: 'Content management system for creatives to showcase their work.',
                tech: ['React', 'Express', 'AWS S3'],
                color: 'from-purple-400 to-indigo-500'
              },
              {
                title: 'Weather Dashboard',
                description: 'Real-time weather data visualization with location-based forecasts.',
                tech: ['React', 'API Integration', 'Charts'],
                color: 'from-green-400 to-teal-500'
              },
              {
                title: 'Social Media Clone',
                description: 'Feature-rich social platform with posts, comments, and messaging.',
                tech: ['Next.js', 'GraphQL', 'Redis'],
                color: 'from-orange-400 to-yellow-500'
              },
              {
                title: 'AI Chat Assistant',
                description: 'Intelligent chatbot with natural language processing capabilities.',
                tech: ['Python', 'React', 'OpenAI API'],
                color: 'from-violet-400 to-purple-500'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition">
                <div className={`h-48 bg-gradient-to-br ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Aditya Rai Setiadi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2026 Aditya Rai Setiadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}