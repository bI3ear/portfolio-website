import Image from 'next/image';
import ResumeButton from './components/ResumeButton';

const projects = [
  {
    id: 1,
    title: "Python Source Code Vulnerability Scanner",
    image: "/projects/pythonvulner.jpg",
    description:
      "Built an automated security scanner to detect code vulnerabilities, implementing DevSecOps best practices for safer development workflows.",
    label: "DevOps",
    stack: "Python • Regex • ReportLab • Security",
    link: "https://github.com/bI3ear/Source-Code-Vulnerability-Scanner" 
  },
  {
    id: 2,
    title: "Real Estate Marketplace Website with CI/CD Pipeline",
    image: "/projects/Realestate.jpg",
    description:
      "Full-stack application with automated CI/CD pipeline using GitHub Actions for streamlined deployment.",
    label: "Full-Stack",
    stack: "NextJS • JavaScript • TailwindCSS • CI/CD • GitHub Actions",
    link: "https://github.com/bI3ear/real-estate-app"
  },
  {
    id: 3,
    title: "Monitoring System for Web Applications",
    image: "/projects/monitor4.jpg",
    description:
      "Built a comprehensive monitoring system using Prometheus and Grafana to track application health and performance metrics.",
    label: "DevOps",
    stack: "NodeJS • Docker • Prometheus • Grafana • Kubernetes",
    link: "https://github.com/bI3ear/monitor-project-nodejs"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Animated gradient orbs */}
          <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-[#EC9706]/20 blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{animationDuration: '5s'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-[20%] h-2 w-2 rounded-full bg-[#EC9706]/40 blur-sm" />
          <div className="absolute top-40 right-[30%] h-1 w-1 rounded-full bg-purple-400/40 blur-sm" />
          <div className="absolute bottom-32 left-[15%] h-1.5 w-1.5 rounded-full bg-blue-400/40 blur-sm" />
          <div className="absolute top-60 right-[20%] h-2 w-2 rounded-full bg-pink-400/30 blur-sm" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Portrait */}
          <div className="relative mx-auto flex items-center justify-center w-fit">
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#EC9706] via-purple-500 to-blue-500 opacity-75 blur-lg animate-pulse" style={{animationDuration: '3s'}} />
              
              {/* Portrait container */}
              <div className="relative h-40 w-40 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src="/projects/portrait.jpg"
                  alt="Bear's Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-[#EC9706] border-2 border-gray-900" />
              <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-purple-500 border-2 border-gray-900" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight 
                         bg-[linear-gradient(135deg,#EC9706_10%,#FFA500_40%,#FF7EDB_70%)] 
                         bg-clip-text text-transparent">
            Hi, I'm Bear!
          </h1>
          <p className="text-lg md:text-3xl text-gray-300 max-w-2xl mx-auto">
            DevOps & Cloud engineer in the making – automating infrastructure, ensuring reliability with modern cloud-native tools.
          </p>

          <div className="flex flex-wrap gap-3 justify-center text-sm text-gray-300">
            {['Docker','Kubernetes','CI/CD','Cloud','Linux','Networking'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="bg-[#EC9706] hover:bg-[#D88506] px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-[#EC9706]/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl font-semibold border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
            <ResumeButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#EC9706]/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,151,6,0.05),transparent_50%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I am a Computer Science student at Rangsit University with a strong passion for DevOps, Cloud Engineering, and Site Reliability Engineering. My interest lies in building scalable, reliable systems and automating infrastructure to improve deployment efficiency and system monitoring.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Through hands-on projects, I have developed a Source Code Vulnerability Scanner, built a Real Estate Application, and created a comprehensive monitoring system using Node.js. These experiences have strengthened my skills in security, full-stack development, and system observability.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
               I am eager to apply my technical skills and learn industry best practices in a dynamic internship environment, where I can contribute to infrastructure automation, cloud solutions, and ensuring system reliability at scale.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-gray-400">Focus</p>
                <p className="font-semibold">DevOps & Cloud</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-gray-400">Location</p>
                <p className="font-semibold">Thailand</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-gray-400">Currently</p>
                <p className="font-semibold">Student @ RSU</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-gray-400">Looking for</p>
                <p className="font-semibold">Internships & Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 bg-gradient-to-b from-gray-900/60 to-gray-950 overflow-hidden">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}} />
          
          {/* Gradient orbs */}
          <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#EC9706]/10 blur-3xl" />
          <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,151,6,0.1),transparent_60%)]" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A selection of projects showcasing my work in DevOps, security, and full-stack development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-[#EC9706]/60 hover:shadow-[#EC9706]/30"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="rounded-full bg-[#EC9706]/10 px-2 py-0.5 text-[10px] font-medium text-[#EC9706] whitespace-nowrap">
                      {project.label}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{project.stack}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[#EC9706] hover:text-[#FFA500]"
                      >
                        View project
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-[#EC9706]/15 blur-3xl animate-pulse" style={{animationDuration: '5s'}} />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,151,6,0.08),transparent_70%)]" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6 text-lg">
            I'm always open to new opportunities and collaborations
          </p>
          <p className="text-gray-400 mb-8 text-sm">
            Preferably related to DevOps, Cloud Infrastructure, Automation, Systems Engineer and Full-stack Engineer.
          </p>
          <a
            href="mailto:thanapol.un@gmail.com"
            className="bg-[#EC9706] hover:bg-[#D88506] px-10 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition shadow-lg shadow-[#EC9706]/30"
          >
            <span>Say hello</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-white/5 text-sm">
        <p>© {new Date().getFullYear()} Bear. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-600">
          Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}