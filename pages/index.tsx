import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Github, Linkedin, Code2, Twitter, Mail, MapPin, Phone, ExternalLink, ChevronRight, BarChart3, Database, Brain, TrendingUp, FileSpreadsheet, GitBranch, Users, FileText, Target } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = (heroRef.current as HTMLElement).getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: 'Power BI', icon: <BarChart3 className="w-5 h-5" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'Tableau', icon: <TrendingUp className="w-5 h-5" />, color: 'from-blue-400 to-indigo-500' },
    { name: 'Data Visualization', icon: <Brain className="w-5 h-5" />, color: 'from-purple-400 to-pink-500' },
    { name: 'SQL', icon: <Database className="w-5 h-5" />, color: 'from-green-400 to-teal-500' },
    { name: 'Python Analysis', icon: <Code2 className="w-5 h-5" />, color: 'from-blue-500 to-purple-600' },
    { name: 'Excel & Advanced Modelling', icon: <FileSpreadsheet className="w-5 h-5" />, color: 'from-emerald-400 to-green-600' },
    { name: 'Jira', icon: <Target className="w-5 h-5" />, color: 'from-blue-400 to-blue-600' },
    { name: 'Agile Workflow', icon: <Users className="w-5 h-5" />, color: 'from-indigo-400 to-purple-600' },
    { name: 'Confluence', icon: <FileText className="w-5 h-5" />, color: 'from-teal-400 to-cyan-600' },
    { name: 'Documentation', icon: <FileText className="w-5 h-5" />, color: 'from-orange-400 to-red-500' },
    { name: 'Process Mapping', icon: <GitBranch className="w-5 h-5" />, color: 'from-pink-400 to-rose-600' },
    { name: 'KPI Frameworks', icon: <Target className="w-5 h-5" />, color: 'from-yellow-400 to-amber-600' },
    { name: 'Dashboards & Executive Reports', icon: <BarChart3 className="w-5 h-5" />, color: 'from-cyan-400 to-blue-600' },
    { name: 'Git & Version Control', icon: <GitBranch className="w-5 h-5" />, color: 'from-gray-600 to-gray-800' },
    { name: 'Storytelling with Data', icon: <Brain className="w-5 h-5" />, color: 'from-violet-400 to-purple-600' }
  ];

  const projects = [
    {
      title: 'Executive Dashboard Suite',
      description: 'Comprehensive Power BI dashboard providing real-time KPI tracking and predictive analytics for C-suite executives',
      tech: ['Power BI', 'DAX', 'SQL Server'],
      link: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Automated Reporting Pipeline',
      description: 'End-to-end automation system reducing report generation time by 75% using Python and SQL integration',
      tech: ['Python', 'SQL', 'Airflow'],
      link: '#',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'SQL Analytics Toolkit',
      description: 'Custom SQL framework for complex business queries, optimizing data retrieval speed by 60%',
      tech: ['SQL', 'PostgreSQL', 'Git'],
      link: '#',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Customer Segmentation Model',
      description: 'Advanced analytics project using clustering algorithms to identify high-value customer segments',
      tech: ['Python', 'Tableau', 'ML'],
      link: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Financial Planning Dashboard',
      description: 'Interactive Tableau dashboard for budget tracking and financial forecasting with drill-down capabilities',
      tech: ['Tableau', 'Excel', 'VBA'],
      link: '#',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Process Optimization Framework',
      description: 'Business process mapping and optimization reducing operational costs by 30%',
      tech: ['Visio', 'Jira', 'Confluence'],
      link: '#',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/prabhattiwari' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/prabhattiwari' },
    { name: 'LeetCode', icon: <Code2 className="w-5 h-5" />, url: 'https://leetcode.com/prabhattiwari' },
    { name: 'X', icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/prabhattiwari' }
  ];

  return (
    <>
      <Head>
        <title>Prabhat Tiwari - Business Analyst Portfolio</title>
        <meta name="description" content="Business Analyst | Finance Graduate | SQL | Tableau | Data Analytics Expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-x-hidden">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center px-4 py-16">
          <div 
            className="text-center z-10 max-w-5xl mx-auto"
            style={{
              transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-purple-700 to-blue-600 bg-clip-text text-transparent">
              Prabhat Tiwari
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
              Business Analyst | Finance Graduate | SQL | Tableau
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-gray-700 group-hover:text-white transition-colors duration-300">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                View My Work 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-gray-800">
              Skills & Tools
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Expertise in modern business intelligence and analytics
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-3`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              Driving business value through data-driven solutions
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors">
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to transform your data into actionable insights
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:prabhat.x1@yahoo.com" className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">prabhat.x1@yahoo.com</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-lg">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600">
              © 2025 Prabhat Tiwari. All rights reserved.
            </p>
          </div>
        </footer>

        <style jsx>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default Portfolio;
