import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Mail,
  BrainCircuit
} from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <BrainCircuit size={20} className="text-white" />
          </div>
          <span className="text-white font-mono font-bold tracking-tighter text-xl">AQR.AI</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Skills', 'Experience'].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1ZxGoDFqMUqnQkZAfakCKtWIcISoJlob9/view?usp=sharing"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Resume
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]">
      {/* Background Neural Grid Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-400">System Online: AI Core Active</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Intelligence.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-10"
          >
            I'm <span className="text-white font-medium">Asghar Qamber Rizvi</span>, an AI Engineer specializing in Deep Learning and LLMs. Architecting scalable neural solutions for complex real-world challenges.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold border border-white/10 hover:bg-zinc-800 transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Dock */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex items-center gap-6"
          >
            {[
              { icon: GithubIcon, href: 'https://github.com/asghar-rizvi', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com/in/asghar-qamber-rizvi-2ba8472b5', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:asgharqamberrozvi@gmail.com', label: 'Email' }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                title={social.label}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
      >
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-800 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const BentoCard = ({ children, className = "", title = "", subtitle = "" }: BentoCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-8 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    {title && <h3 className="text-xl font-bold text-white mb-2 relative z-10">{title}</h3>}
    {subtitle && <p className="text-sm text-zinc-500 mb-4 relative z-10 font-mono tracking-tight uppercase">{subtitle}</p>}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-violet-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            01 // Intelligence Hub
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            The Architect behind <br/> <span className="text-zinc-500">the Algorithms.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio */}
          <BentoCard className="md:col-span-8 min-h-[300px]" title="The Vision" subtitle="Executive Summary">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              I'm an AI Engineer and Python Developer driven by the challenge of bridging the gap between raw data and actionable intelligence. With a focus on <span className="text-white">Neural Architectures</span> and <span className="text-white">LLM Fine-tuning</span>, I build systems that don't just process information—they understand it.
            </p>
          </BentoCard>

          {/* Current Status */}
          <BentoCard className="md:col-span-4" title="Currently Training" subtitle="Active Process">
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-zinc-300 text-sm">Fine Tunning LLMs For Specific Purposes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-zinc-300 text-sm">Advanced RAG Pipelines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span className="text-zinc-300 text-sm">Agentic AI</span>
              </div>
            </div>
          </BentoCard>

          {/* Core Pillars */}
          <BentoCard className="md:col-span-4" title="5+ Years" subtitle="Experience">
            <p className="text-4xl font-bold text-white mb-2">Python</p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Mastery in building robust backend systems and AI models.
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-8" title="Tech Philosophy" subtitle="Logic & Flow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                   <BrainCircuit size={18} className="text-violet-400" /> Scalability
                </h4>
                <p className="text-zinc-500 text-sm">Designing systems that grow seamlessly with data and user demand.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm border border-cyan-400 flex items-center justify-center text-[10px] text-cyan-400 italic">∑</div> Efficiency
                </h4>
                <p className="text-zinc-500 text-sm">Optimizing inference times and resource allocation in production.</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'Py' },
    { name: 'TensorFlow', icon: 'Tf' },
    { name: 'PyTorch', icon: 'Pt' },
    { name: 'Docker', icon: 'Dk' },
    { name: 'PostgreSQL', icon: 'Pg' },
    { name: 'Django', icon: 'Dj' },
    { name: 'FastAPI', icon: 'Fa' },
    { name: 'Flask', icon: 'Fl' },
    { name: 'Git', icon: 'Gt' },
    { name: 'Hugging Face', icon: 'Hf' },
    { name: 'Scikit-learn', icon: 'Sk' },
    { name: 'Numpy', icon: 'Np' },
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6 mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          02 // Technical Arsenal
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Optimized <span className="text-zinc-500">Stack.</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-8 px-4">
          {[...skills, ...skills].map((skill, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-zinc-900 border border-white/5 hover:border-violet-500/30 hover:bg-zinc-800 transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-mono text-xs font-bold text-violet-400 border border-white/5">
                {skill.icon}
              </div>
              <span className="text-xl font-bold text-zinc-300">{skill.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradients for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Script Sense",
      desc: "Custom OCR word recognition based on LSTM and CNN architectures for high-precision text extraction.",
      tech: ["NLP", "CNN", "FastAPI"],
      img: "images/projects/4.png",
      link: "https://github.com/asghar-rizvi/Resume-And-Job"
    },
    {
      title: "Dextera : An AI Powered Criminal Law Assistant",
      desc: "Legal-specific LLM trained + RAG + Past Cases works as a query chatbot, document summarization, and comprehensive legal guidance.",
      tech: ["HuggingFace", "Python", "LLMs", "Fine Tunning", "RAG  "],
      img: "images/projects/2.png",
      link: "https://github.com/asghar-rizvi/AI-Lawyer-with-GUI"
    },
    {
      title: "Cognito Rewrite",
      desc: "Fine-tuned LLM specialized for paraphrasing tasks, providing multi-variant intelligent responses.",
      tech: ["LLMs", "Fine-Tuning", "NLP"],
      img: "images/projects/3.png",
      link: "https://github.com/asghar-rizvi/Movie_Recommendation_System"
    },
    {
      title: "Juvo : Finding Pakistani Service Providers",
      desc: "An agentic service-booking platform featuring a multi-agent backend and a sleek UI to seamlessly connect users with service providers across Pakistan.",
      tech: ["FastAPI", "Python", "Vertex AI", "Google Cloud", "Supabase", "PostgreSQL"],
      img: "images/projects/1.png",
      link: "https://github.com/asghar-rizvi/juvo"
    },
    {
      title: "Custom Face Detector",
      desc: "VGG16-based recognition model with fine-tuned weights for robust object and face detection.",
      tech: ["PyTorch", "VGG16", "Computer Vision"],
      img: "images/projects/6.png",
      link: "https://github.com/asghar-rizvi/Deep_Learning_Projects/tree/main/CNN_Models/Object_Detector"
    },
    {
      title: "Urdu Text-to-Speech with Voice Cloning using SpeechT5",
      desc: "A fine-tuned SpeechT5 model for high-quality Urdu text-to-speech generation with voice cloning capabilities. This model supports both Urdu and Roman Urdu scripts.",
      tech: ["Fine Tunning", "Transformers","Generative AI","Research And Development"],
      img: "images/projects/5.png",
      link: "https://github.com/asghar-rizvi/-Urdu-Text-to-Speech-with-Voice-Cloning"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex justify-between items-end">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-violet-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              03 // Selected Deployments
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Neural <span className="text-zinc-500">Showcase.</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-2 pb-2">
            <p className="text-zinc-500 text-sm font-mono tracking-tighter uppercase">Scroll to explore →</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar flex px-6 md:px-[calc(50vw-600px)] gap-8 py-4 snap-x snap-mandatory">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0 w-[300px] md:w-[450px] snap-center group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 bg-zinc-900">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </a>
            </div>

            <div className="px-2">
              <div className="flex gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded-md border border-white/10 text-zinc-500">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-2">
                {project.desc}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-violet-400 transition-colors"
              >
                Detailed Documentation <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
        {/* Padding for scroll space at the end */}
        <div className="flex-shrink-0 w-1 md:w-[calc(50vw-600px)]" />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-violet-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            04 // Career Trajectory
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Deployment <span className="text-zinc-500">History.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-zinc-800 to-transparent transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {/* Internship */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative flex flex-col md:flex-row items-center justify-between"
            >
              <div className="w-full md:w-[45%] mb-8 md:mb-0">
                <div className="p-8 rounded-3xl border border-violet-500/20 bg-zinc-900/40 backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BrainCircuit size={80} />
                  </div>
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-2 block">Aug 2025 — October 2025</span>
                  <h3 className="text-2xl font-bold text-white mb-1">Python & AI Intern</h3>
                  <p className="text-zinc-500 text-sm mb-4 font-medium uppercase tracking-tighter">AI Research Lab</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Architecting next-generation AI solutions focusing on LLM fine-tuning, RAG pipelines, and deep neural networks. Spearheading the development of intelligent automation systems for real-world scaling.
                  </p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#030303] z-10 transform -translate-x-1/2 hidden md:block shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
              
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">05 // Transmission</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Let's build the <span className="text-zinc-500">Future.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Open for collaborations on high-impact AI projects, research, or scalable backend engineering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Email", value: "asgharqamberrozvi@gmail.com", href: "mailto:asgharqamberrozvi@gmail.com", icon: Mail },
              { label: "Phone", value: "+92 331 2129298", href: "tel:+923312129298", icon: ChevronRight },
              { label: "Location", value: "Karachi, Pakistan", href: "#", icon: BrainCircuit }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-md hover:bg-zinc-800/40 transition-all group"
              >
                <item.icon className="mx-auto mb-4 text-violet-400 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white font-medium text-sm break-all">{item.value}</p>
              </a>
            ))}
          </div>

          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/10 focus:border-violet-500 outline-none transition-all text-sm"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/10 focus:border-violet-500 outline-none transition-all text-sm"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={5}
              className="w-full px-6 py-4 rounded-2xl bg-zinc-900/50 border border-white/10 focus:border-violet-500 outline-none transition-all text-sm resize-none"
            />
            <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
              Send Message <ChevronRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-600 to-cyan-500 rounded flex items-center justify-center">
              <BrainCircuit size={14} className="text-white" />
            </div>
            <span className="text-white font-mono font-bold tracking-tighter text-lg uppercase">AQR.AI</span>
          </div>
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.2em]">
            &copy; 2026 Asghar Qamber Rizvi // Optimized for Neural Networks
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/asghar-rizvi" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">GitHub</a>
            <a href="https://linkedin.com/in/asghar-qamber-rizvi-2ba8472b5" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#030303] min-h-screen text-white selection:bg-violet-500/30 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
