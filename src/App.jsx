import React, { useState, useEffect } from 'react';
import './App.css';
import Projects from './components/Projects';
import AboutMe from './components/Aboutme';
import Footer from './components/Footer';

// Import Resume
import resumePdf from './assets/2026 Resume.pdf';
// Import hero gif
import hiGif from './assets/Gifs/hi.gif';

// Import experience logos
import ibmLogo from './assets/Experience /IBM.png';
import smartInternzLogo from './assets/Experience /smart Internz.png';

// Import Certi images
import certi1 from './assets/Certi/A G1.png';
import certi2 from './assets/Certi/A Microsoft.png';
import certi3 from './assets/Certi/Databricks.png';
import certi4 from './assets/Certi/G2.png';
import certi5 from './assets/Certi/IBM.png';
import certi6 from './assets/Certi/M2.png';
import certi7 from './assets/Certi/y Cloud Practinoir.png';
import certi8 from './assets/Certi/yws cloud computing.png';
import certi9 from './assets/Certi/z researchpaper.png';

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
                  <h1>Hello, I'm <span className="highlight">SANJAY KUMAR BAIRI</span></h1>
                  <h2>Data Professional | Building End-to-End Analytics Solutions</h2>
                  <p>
                    I architect scalable data pipelines, uncover hidden patterns through advanced analysis, and deploy machine learning models that drive measurable business impact. Whether it's engineering robust ETL workflows, developing predictive models with 84%+ accuracy, or building executive dashboards that inform strategy—I deliver complete data solutions.
                  </p>
                  <p>
                    From raw data to actionable intelligence—$172K+ in documented ROI.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => setCurrentPage('Projects')}>
                      View My Work
                    </button>
                    <a
                      href={resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Resume
                    </a>
                    <a
                      href={resumePdf}
                      download="Sanjay_Kumar_Bairi_Resume_2026.pdf"
                      className="btn-secondary"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
                <div className="hero-avatar">
                  <img src={hiGif} alt="Animated greeting" className="avatar-gif" />
                </div>
              </div>
            </section>

            {/* Cards Grid Section */}
            <section className="section-block">
              <h2>Featured Projects & Achievements</h2>
              <div className="home-cards-grid">
                <a href="https://www.coursera.org/account/accomplishments/specialization/CWS2IC9BJIVZ" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi1} alt="Certification 1" />
                    </div>
                    <div className="home-card-content">
                      <h3>Google Advanced Data Analytics Professional Certificate</h3>
                    <p><strong>Overview:</strong> Completed a comprehensive program covering foundational to advanced data analytics concepts, with hands-on, practice-based assessments preparing for advanced data analytics roles.</p>
                    <p><strong>Key Skills & Learnings:</strong></p>
                    <ul>
                      <li>Data wrangling, cleaning, and preprocessing</li>
                      <li>Statistical analysis & regression modeling</li>
                      <li>Python programming for data analysis</li>
                      <li>Predictive modeling and machine learning techniques</li>
                      <li>Data visualization and business insights generation</li>
                      <li>Translating complex data into actionable business recommendations</li>
                      <li>Capstone project demonstrating real-world analytical problem-solving</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/O0Y27MVWU3Z9" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi2} alt="Certification 2" />
                    </div>
                  <div className="home-card-content">
                    <h3>AI & ML Engineering Program</h3>
                    <p><strong>Overview:</strong> Equipped with practical and theoretical knowledge in AI & ML, this program focused on building, deploying, and troubleshooting machine learning models on Microsoft Azure, preparing for real-world AI & ML engineering challenges.</p>
                    <p><strong>Key Skills & Learnings:</strong></p>
                    <ul>
                      <li>AI & ML algorithms and techniques (supervised & unsupervised learning)</li>
                      <li>Machine learning model deployment using Azure AI</li>
                      <li>Development of intelligent agents and automation solutions</li>
                      <li>Advanced machine learning techniques and capstone project experience</li>
                      <li>Hands-on problem-solving for AI & ML real-world applications</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <a href="https://credentials.databricks.com/e4b6efdb-cb01-4d70-8ed7-3636c46b6fde#acc.8z5VI1JW" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi3} alt="Certification 3" />
                    </div>
                  <div className="home-card-content">
                    <h3>Databricks Academy Certification</h3>
                    
                    <p><strong>Overview:</strong> Accredited for proficiency in the Databricks platform, focusing on big data analytics and collaborative data engineering using Apache Spark.</p>
                    <p><strong>Key Skills & Learnings:</strong></p>
                    <ul>
                      <li>Data processing, transformation, and analysis using Apache Spark</li>
                      <li>Building scalable data pipelines and workflows</li>
                      <li>Databricks platform navigation and collaborative analytics</li>
                      <li>Data visualization and integration of big data solutions</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/verify/P5MF0I4GQCWJ" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi4} alt="Certification 4" />
                    </div>
                  <div className="home-card-content">
                    <h3>Data Science Foundations — Google</h3>
                    <p>Strong foundation in data analysis, statistical thinking, and data-driven decision making.</p>
                    <p><strong>Key Skills:</strong></p>
                    <ul>
                      <li>Skilled in data cleaning, exploration, and interpretation to extract actionable insights</li>
                      <li>Ability to translate business problems into analytical solutions</li>
                      <li>Experienced in applying exploratory data analysis (EDA) techniques to identify patterns, trends, and data quality issues</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/verify/SZZFMV5V8H11" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi5} alt="Certification 5" />
                    </div>
                  <div className="home-card-content">
                    <h3>Machine Learning with Python — IBM</h3>
                    <p>Proficient in Python-based machine learning workflows and model development.</p>
                    <p><strong>Key Skills:</strong></p>
                    <ul>
                      <li>Experienced in supervised and unsupervised learning algorithms</li>
                      <li>Knowledge of feature engineering, model evaluation, and performance optimization</li>
                      <li>Familiar with ML libraries and end-to-end model building processes</li>
                      <li>Capable of building, tuning, and validating machine learning models using real-world datasets</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/verify/I3SS6B7OTAZ9" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi6} alt="Certification 6" />
                    </div>
                  <div className="home-card-content">
                    <h3>Cloud AI & Machine Learning — Microsoft Azure</h3>
                    <p>Hands-on understanding of cloud-based AI and machine learning solutions using Azure.</p>
                    <p><strong>Key Skills:</strong></p>
                    <ul>
                      <li>Knowledge of ML model deployment, pipeline automation, and scalable AI architectures</li>
                      <li>Experience with Azure AI services and enterprise-grade machine learning environments</li>
                      <li>Skilled in designing cloud-ready ML solutions with attention to scalability, security, and performance</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <div className="home-card">
                  <div className="home-card-image">
                    <img src={certi7} alt="Certification 7" />
                  </div>
                  <div className="home-card-content">
                    <h3>AWS Cloud Practitioner Essentials — AWS</h3>
                    <p>Strong understanding of AWS core services, global infrastructure, and cloud architecture principles.</p>
                    <p><strong>Key Skills:</strong></p>
                    <ul>
                      <li>Knowledge of cloud security, compliance, pricing models, and cost optimization strategies</li>
                      <li>Familiar with compute, storage, networking, and database services in AWS ecosystem</li>
                      <li>Able to explain cloud concepts clearly for both technical and business use cases</li>
                    </ul>
                  </div>
                </div>
                <a href="https://www.credly.com/badges/df8751d1-ba72-48d7-aacd-39531c6f0aba/linked_in_profile" target="_blank" rel="noopener noreferrer" className="home-card-link">
                  <div className="home-card">
                    <div className="home-card-image">
                      <img src={certi8} alt="Certification 8" />
                    </div>
                  <div className="home-card-content">
                    <h3>Cloud Computing 101 — AWS Educate</h3>
                    <p>Solid foundation in cloud computing concepts, deployment models, and service models (IaaS, PaaS, SaaS).</p>
                    <p><strong>Key Skills:</strong></p>
                    <ul>
                      <li>Understanding of virtualization, scalability, elasticity, and high availability principles</li>
                      <li>Knowledge of real-world cloud use cases and enterprise cloud adoption strategies</li>
                      <li>Developed cloud literacy aligned with industry standards</li>
                    </ul>
                  </div>
                  </div>
                </a>
                <div className="home-card">
                  <div className="home-card-image">
                    <img src={certi9} alt="Certification 9" />
                  </div>
                  <div className="home-card-content">
                    <h3>International Conference Paper Presentation — ICDTCCS 2023</h3>
                    <p>Presented a research paper on AWS-based supervisory approaches at an international conference.</p>
                    <p><strong>Key Achievements:</strong></p>
                    <ul>
                      <li>Demonstrated strong technical communication and academic presentation skills</li>
                      <li>Gained experience in research documentation, analysis, and professional reporting</li>
                      <li>Exposure to emerging technologies in computing and communication systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="section-block">
              <h2>Experience</h2>
              <div className="experience-cards">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3>Data Scientist</h3>
                    <h4>IBM</h4>
                    <p className="experience-date">2023 January - 2023 December</p>
                  </div>
                  <div className="experience-image">
                    <img src={ibmLogo} alt="IBM Experience" className="company-logo" />
                  </div>
                  <div className="experience-details">
                    <div className="detail-section">
                      <h5>Data Engineering</h5>
                      <p>Worked on building and optimizing data pipelines using Python and SQL. Handled ETL workflows for extracting, cleaning, and transforming large datasets. Automated data processing tasks to improve efficiency and ensure data consistency across systems.</p>
                    </div>
                    
                    <div className="detail-section">
                      <h5>Data Visualization</h5>
                      <p>Created interactive dashboards and reports to present insights clearly and effectively. Focused on turning raw data into understandable visuals that helped teams make better decisions.</p>
                    </div>
                    
                    <div className="detail-section">
                      <h5>Cloud</h5>
                      <p>Worked with IBM Cloud and AWS S3 for data storage, integration, and transfer. Helped manage cloud-based data workflows, ensuring scalability and reliability of data solutions.</p>
                      <p><strong>Key Skills:</strong> Python, SQL, Spark, Pandas, IBM Cloud, AWS S3, ETL, Data Cleaning, Data Integration</p>
                    </div>
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <h3>Data Analyst</h3>
                    <h4>SmartInternz</h4>
                    <p className="experience-date">January 2022 – December 2022</p>
                  </div>
                  <div className="experience-image">
                    <img src={smartInternzLogo} alt="Smart Internz Experience" className="company-logo" />
                  </div>
                  
                  <div className="experience-details">
                    <div className="detail-section">
                      <h5>Data Analysis</h5>
                      <p>Worked on analyzing different types of datasets to find trends, patterns, and insights that supported decision-making. Performed data cleaning, transformation, and statistical analysis using a variety of analytical tools and methods.</p>
                    </div>
                    
                    <div className="detail-section">
                      <h5>Data Visualization</h5>
                      <p>Built and maintained interactive dashboards and reports using Power BI and Tableau. Focused on delivering clear and visually effective insights that improved business understanding and performance tracking.</p>
                    </div>
                    
                    <div className="detail-section">
                      <h5>Tools & Technologies</h5>
                      <p>Power BI, Tableau, Excel, Python (Pandas, NumPy), SQL, Google Data Studio, Data Cleaning, Statistical Analysis, Reporting</p>
                    </div>
                    
                    <div className="detail-section">
                      <h5>Key Skills</h5>
                      <p>Data Analysis, Data Visualization, Dashboard Development, Business Intelligence, SQL, Python, Power BI, Tableau, Data Cleaning, Reporting, Problem Solving, Communication</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
        );
      case 'Projects':
        return <Projects />;
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