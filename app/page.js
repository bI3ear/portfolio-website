import Image from 'next/image';
import ResumeButton from './components/ResumeButton';

const projects = [
  {
    id: 1,
    title: "Python Source Code Vulnerability Scanner",
    image: "/projects/pythonvulner.jpg",
    description:
      "Built an automated security scanner to detect code vulnerabilities, implementing DevSecOps best practices for safer development workflows.",
    stack: "Python • Regex • ReportLab • Security",
    link: "https://github.com/bI3ear/Source-Code-Vulnerability-Scanner" 
  },
  {
    id: 2,
    title: "Real Estate Marketplace Website with CI/CD Pipeline",
    image: "/projects/Realestate.jpg",
    description:
      "Full-stack application with automated CI/CD pipeline using GitHub Actions for streamlined deployment.",
    stack: "NextJS • JavaScript • TailwindCSS • CI/CD • GitHub Actions",
    link: "https://github.com/bI3ear/real-estate-app"
  },
  {
    id: 3,
    title: "Monitoring System for Web Applications",
    image: "/projects/monitor4.jpg",
    description:
      "Built a comprehensive monitoring system using Prometheus and Grafana to track application health and performance metrics.",
    stack: "NodeJS • Docker • Prometheus • Grafana • Kubernetes",
    link: "https://github.com/bI3ear/monitor-project-nodejs"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Decorative background orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-10 h-72 w-72 rounded-full bg-[#EC9706]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
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
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
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

          {/* <div className="relative mx-auto h-52 w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-br from-[#EC9706]/20 via-gray-900 to-purple-600/20 p-[1px]">
            <div className="h-full w-full rounded-2xl bg-gray-900/80 p-5 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Profile</p>
                <p className="text-lg font-semibold">DevOps / Cloud Enthusiast</p>
                <p className="text-sm text-gray-300 mt-2">
                  Building pipelines, containers, and systems that rarely wake you up at 3AM.
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 mt-4">
                <span>Docker • CI/CD • Monitoring</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#EC9706]/10 px-3 py-1 text-[11px] text-[#EC9706]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EC9706]" />
                  Available
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900/60 to-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* header area stays the same */}

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
                    <span className="rounded-full bg-[#EC9706]/10 px-2 py-0.5 text-[11px] font-medium text-[#EC9706]">
                      DevOps
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
      <section id="contact" className="py-20 px-4">
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