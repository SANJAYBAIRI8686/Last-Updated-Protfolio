import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './components/Projects';
import AboutMe from './components/Aboutme';
import Experience from './components/Experience';
import Footer from './components/Footer';

// Import GIFs
import daGif from './assets/Gifs/DA gif.gif';
import fsGif from './assets/Gifs/FS gif.gif';
import cloudGif from './assets/Gifs/Cloud Gif.gif';
import hiGif from './assets/Gifs/hi.gif';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  // Dynamic page titles
  const titles = [
    "SANJAY  👋",
    "Welcome to My Portfolio 🚀",
    "Data Engineer 💻",
    "Turning Data Into Insights ✨"
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    const updateTitle = () => {
      document.title = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
    };
    
    // Set initial title
    updateTitle();
    
    // Update title every 3 seconds
    const interval = setInterval(updateTitle, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>Hello I am <span className="highlight">SANJAY</span></h1>
                  <h2>Full Stack Developer & Data Analyst</h2>
                  <p>I am a passionate Data Engineer who is excited about working with data — turning unprocessed data into actionable reporting or insights, and designing solutions that democratize data and bring clarity to it.</p>
                  <p>I leverage tools like Python, SQL, Power BI, Tableau, Excel, and Pandas for analytics, and AWS, Azure, Snowflake, Spark, and Airflow to design and manage scalable data pipelines.</p>
                  <p>During my Master's studies at Auburn University at Montgomery, I expanded my skill set in data and programming while gaining an understanding of how technology can be a means to resolve challenges in the real world.</p>
                  <p>I am always learning something new, building on my prior skills, and seeking new opportunities to develop sustainable, automated solutions in the field of technology and data.</p>
                </div>
                <div className="hero-avatar">
                  <div className="avatar-container">
                    <img src={hiGif} alt="Hi animation" className="avatar-gif" />
                  </div>
                </div>
              </div>
            </section>

            {/* Data Journey Section */}
            <section className="section-block">
              <h2>Data Journey</h2>
              <div className="split-row">
                <img 
                  src={daGif} 
                  alt="Data Analytics Demo" 
                  className="project-gif"
                />
                <div className="panel-text right-text">
                  <p className="section-intro">
                    My data journey represents the complete process of transforming raw information into valuable insights and scalable data solutions. I've learned to collect, clean, and structure data using Python and SQL, and to build efficient data pipelines with tools like Apache Airflow and Apache Spark for large-scale processing. On the analytics side, I use Power BI, Tableau, and Excel to visualize trends, uncover insights, and drive data-informed decisions. These experiences taught me how to manage data from multiple sources, ensure accuracy and consistency, and deliver both engineering efficiency and analytical clarity — bridging the gap between raw data and impactful storytelling.
                  </p>
                  <button className="btn-outline" onClick={() => setCurrentPage('Projects')}>Explore my Data Projects</button>
                </div>
              </div>
            </section>

            {/* Full Stack Projects Section */}
            <section className="section-block">
              <h2>Full Stack Projects</h2>
              <div className="split-row reverse">
                <div className="panel-text left-text">
                  <p className="section-intro">
                    In my full stack projects, I've learned to bring ideas to life by developing complete web applications — from designing intuitive user interfaces to building powerful back-end systems. I've worked with technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB to create dynamic and responsive applications. These experiences taught me how front-end and back-end layers communicate, how to structure APIs, and how to deploy and maintain applications efficiently. Each project helped me grow in software design, debugging, and delivering user-focused solutions.
                  </p>
                  <button className="btn-outline" onClick={() => setCurrentPage('Projects')}>Explore my Full Stack Projects</button>
                </div>
                <img 
                  src={fsGif} 
                  alt="Full Stack Projects Demo" 
                  className="project-gif"
                />
              </div>
            </section>

            {/* Cloud Projects Section */}
            <section className="section-block">
              <h2>Cloud Projects</h2>
              <div className="split-row">
                <img 
                  src={cloudGif} 
                  alt="Cloud Projects Demo" 
                  className="project-gif"
                />
                <div className="panel-text right-text">
                  <p className="section-intro">
                    My cloud projects deepened my understanding of deploying and managing data systems in scalable environments. Using AWS and Azure, I've set up storage solutions like S3 and Blob Storage, automated workflows with Lambda and Azure Functions, and worked on serverless data pipelines. These experiences helped me understand how cloud services support data reliability, security, and cost-efficiency. I also explored monitoring, versioning, and deployment automation to build systems that are both powerful and easy to maintain.
                  </p>
                  <button className="btn-outline" onClick={() => setCurrentPage('Projects')}>Explore my Cloud Projects</button>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="section-block">
              <h2>Experience</h2>
              <div className="experience-timeline">
                <div className="experience-item" onClick={() => {
                  setCurrentPage('Experience');
                  setTimeout(() => {
                    const element = document.getElementById('professional-experience');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }} style={{ cursor: 'pointer' }}>
                  <div className="experience-content">
                    <h3>Data Engineer</h3>
                    <h4>IBM</h4>
                    <p className="experience-timeline">2023 January - 2023 October</p>
                  </div>
                </div>
                <div className="experience-item" onClick={() => {
                  setCurrentPage('Experience');
                  setTimeout(() => {
                    const element = document.getElementById('professional-experience');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }} style={{ cursor: 'pointer' }}>
                  <div className="experience-content">
                    <h3>Data Analyst</h3>
                    <h4>SmartInternz</h4>
                    <p className="experience-timeline">January 2022 – December 2022</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        );
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'About Me':
        return <AboutMe />;
      default:
        return (
          <div className="page-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Sanjay Kumar - Full Stack Developer & Data Analyst</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'Home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('Home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'Projects' ? 'active' : ''}`}
            onClick={() => setCurrentPage('Projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-link ${currentPage === 'Experience' ? 'active' : ''}`}
            onClick={() => setCurrentPage('Experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-link ${currentPage === 'About Me' ? 'active' : ''}`}
            onClick={() => setCurrentPage('About Me')}
          >
            About Me
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;