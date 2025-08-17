import React from 'react';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My awesome portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ 
        fontFamily: 'Arial, sans-serif', 
        lineHeight: '1.6', 
        margin: 0, 
        padding: '20px',
        backgroundColor: '#f4f4f4'
      }}>
        {/* Header Section */}
        <header style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            color: '#333', 
            fontSize: '3rem', 
            marginBottom: '10px' 
          }}>
            Your Name
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '1.2rem' 
          }}>
            Full Stack Developer | React | Next.js | TypeScript
          </p>
        </header>

        {/* About Section */}
        <section style={{ 
          backgroundColor: 'white',
          padding: '40px',
          marginBottom: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>About Me</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            I'm a passionate developer with experience in modern web technologies. 
            I love creating beautiful and functional web applications that solve real-world problems.
          </p>
        </section>

        {/* Skills Section */}
        <section style={{ 
          backgroundColor: 'white',
          padding: '40px',
          marginBottom: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js'].map((skill, index) => (
              <div key={index} style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section style={{ 
          backgroundColor: 'white',
          padding: '40px',
          marginBottom: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[1, 2, 3].map((project, index) => (
              <div key={index} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#f9f9f9'
              }}>
                <h3 style={{ color: '#333' }}>Project {project}</h3>
                <p style={{ color: '#666' }}>
                  Description of your awesome project. Built with React, TypeScript, and other modern technologies.
                </p>
                <div style={{ marginTop: '15px' }}>
                  <button style={{
                    backgroundColor: '#007cba',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}>
                    Live Demo
                  </button>
                  <button style={{
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ 
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Contact Me</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Let's work together! Reach out to me through any of these platforms.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="mailto:your.email@example.com" style={{
              backgroundColor: '#007cba',
              color: 'white',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}>
              Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" style={{
              backgroundColor: '#0077b5',
              color: 'white',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}>
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}>
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
