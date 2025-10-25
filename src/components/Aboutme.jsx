import React from 'react';
import './Aboutme.css';
import profileImage from '../assets/About me logos/Avatar.png';
import sf2Image from '../assets/About me logos/sf2.jpeg';
import ggbImage from '../assets/About me logos/ggb.png';
import yc1Image from '../assets/About me logos/yc1.jpeg';
import linkedinIcon from '../assets/Social Media/linkedin.png';
import twitterIcon from '../assets/Social Media/twitter.png';
import githubIcon from '../assets/Social Media/github.png';
import redditIcon from '../assets/Social Media/reddit.png';
import aumLogo from '../assets/About me logos/AUM college.png';
import vaagLogo from '../assets/About me logos/Vaag.png';

// Glob imports for all skill images
const skillImages = import.meta.glob('../assets/About me logos/**/*.{png,svg}', { eager: true, as: 'url' });

// Helper function to get image path
const getImage = (path) => {
  const key = path.replace('/src/assets/', '../assets/');
  return skillImages[key] || '';
};

const AboutMe = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-text">
            <h1>Connect With <span className="highlight">Me!</span></h1>
            
            {/* Social Media Section in Hero */}
            <div className="social-media-section">
              <div className="social-media-grid">
                <a href="https://www.linkedin.com/in/bairisanjay70754/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-media-icon" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/SANJAY_BAIRI_" target="_blank" rel="noopener noreferrer" className="social-media-link">
                  <img src={twitterIcon} alt="X (Twitter)" className="social-media-icon" />
                  <span>X</span>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                  <img src={githubIcon} alt="GitHub" className="social-media-icon" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.reddit.com/user/AnalystOk539/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                  <img src={redditIcon} alt="Reddit" className="social-media-icon" />
                  <span>Reddit</span>
                </a>
              </div>
            </div>
          </div>
          <div className="about-avatar">
            <img 
              src={profileImage} 
              alt="Sanjay Kumar Bairi" 
              className="profile-image"
              onLoad={() => console.log('Image loaded successfully')}
              onError={(e) => {
                console.log('Image failed to load:', e.target.src);
                console.log('Trying fallback...');
                e.target.src = '/src/assets/About me logos/Avatar.png';
              }}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-layout">
          <div className="education-content">
            <div className="education-item">
              <div className="education-header">
                <h3>Computer Science & Engineering</h3>
                <span className="education-date">2024 - 2026</span>
              </div>
              <h4>Auburn University at Montgomery</h4>
              <p>Master's degree with focus on Information Technology, Data analytics, data structures, algorithms, and database management.</p>
            </div>
            <div className="education-item">
              <div className="education-header">
                <h3>Computer Science and Engineering</h3>
                <span className="education-date">2019 - 2023</span>
              </div>
              <h4>Vaagdevi Engineering College</h4>
              <p>Bachelor's degree with foundations in computer science, software engineering, data structures, algorithms, database management, and system design. Specialized coursework in web development, mobile applications, and emerging technologies.</p>
            </div>
          </div>
          
          {/* College Images */}
          <div className="college-images">
            <div className="college-image-card">
              <a href="https://www.aum.edu/" target="_blank" rel="noopener noreferrer" className="college-link">
                <img src={aumLogo} alt="Auburn University at Montgomery" className="college-logo" />
              </a>
            </div>
            <div className="college-image-card">
              <a href="https://www.vaagdevi.edu.in/" target="_blank" rel="noopener noreferrer" className="college-link">
                <img src={vaagLogo} alt="Vaagdevi Engineering College" className="college-logo" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="professional-experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-header">
              <h3>Data Engineer</h3>
              <h4>IBM</h4>
              <p className="experience-date">2023 January - 2023 October</p>
            </div>
            <div className="experience-image">
              <img src="/src/assets/Experience /IBM.png" alt="IBM Experience" className="company-logo" />
            </div>
            <div className="experience-details">
              <div className="detail-section">
                <h5> Data Engineering</h5>
                <p>Worked on building and optimizing data pipelines using Python and SQL. Handled ETL workflows for extracting, cleaning, and transforming large datasets. Automated data processing tasks to improve efficiency and ensure data consistency across systems.</p>
              </div>
              
              <div className="detail-section">
                <h5> Data Visualization</h5>
                <p>Created interactive dashboards and reports to present insights clearly and effectively. Focused on turning raw data into understandable visuals that helped teams make better decisions.</p>
              </div>
              
              <div className="detail-section">
                <h5>Cloud</h5>
                <p>Worked with IBM Cloud and AWS S3 for data storage, integration, and transfer. Helped manage cloud-based data workflows, ensuring scalability and reliability of data solutions.</p>
                <p><h5>Key Skills</h5>Python, SQL, Spark, Pandas, IBM Cloud, AWS S3, ETL, Data Cleaning, Data Integration</p>
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
              <img src="/src/assets/Experience /smart Internz.png" alt="Smart Internz Experience" className="company-logo" />
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
                <h5> Key Skills</h5>
                <p>Data Analysis, Data Visualization, Dashboard Development, Business Intelligence, SQL, Python, Power BI, Tableau, Data Cleaning, Reporting, Problem Solving, Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Full Stack Skills */}
          <div className="skill-category">
            <h3>Full Stack Development</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/Angular.png" alt="Angular" />
                <span>Angular</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/Bootstrap.png" alt="Bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/css.png" alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/html.png" alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/Javascript.png" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/NextJS.png" alt="Next.js" />
                <span>Next.js</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/react.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Full stack/Typescript.png" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          {/* Data Tech Stack */}
          <div className="skill-category">
            <h3>Data & Analytics</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/python.png" alt="Python" />
                <span>Python</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/R.png" alt="R" />
                <span>R</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Pandas.png" alt="Pandas" />
                <span>Pandas</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Numpy.png" alt="NumPy" />
                <span>NumPy</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Matplotlib.png" alt="Matplotlib" />
                <span>Matplotlib</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Pyspark.png" alt="PySpark" />
                <span>PySpark</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Tableau.png" alt="Tableau" />
                <span>Tableau</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/PowerBi.png" alt="Power BI" />
                <span>Power BI</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Excel.png" alt="Excel" />
                <span>Excel</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/mysql.svg" alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/postsql.svg" alt="PostgreSQL" />
                <span>PostgreSQL</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/mongoDb.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Cloud & AWS */}
          <div className="skill-category">
            <h3>Cloud & AWS</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/AWS.png" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/aws a.svg" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Azure main logo.png" alt="Azure" />
                <span>Azure</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/S3.png" alt="S3" />
                <span>S3</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/EC2.png" alt="EC2" />
                <span>EC2</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Lambda.png" alt="Lambda" />
                <span>Lambda</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/RDS.png" alt="RDS" />
                <span>RDS</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/DynamoDB.png" alt="DynamoDB" />
                <span>DynamoDB</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Redshift.png" alt="Redshift" />
                <span>Redshift</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Blob.png" alt="Blob Storage" />
                <span>Blob Storage</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Databricks.svg" alt="Databricks" />
                <span>Databricks</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Elastic Kubernetes Service.png" alt="EKS" />
                <span>EKS</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Data Tech stack/Hadoop.png" alt="Hadoop" />
                <span>Hadoop</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <h3>Development Tools</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src="/src/assets/about me logos/Tools/Git.png" alt="Git" />
                <span>Git</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Tools/Git hub.png" alt="GitHub" />
                <span>GitHub</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Tools/Vs.png" alt="VS Code" />
                <span>VS Code</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Tools/jira.png" alt="Jira" />
                <span>Jira</span>
              </div>
            </div>
          </div>

          {/* UI/UX */}
          <div className="skill-category">
            <h3>UI/UX Design</h3>
            <div className="skill-cards">
              <div className="skill-card">
                <img src="/src/assets/about me logos/UI : UX/Figma.png" alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/UI : UX/Canava.png" alt="Canva" />
                <span>Canva</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/UI : UX/Sketch.png" alt="Sketch" />
                <span>Sketch</span>
              </div>
              <div className="skill-card">
                <img src="/src/assets/about me logos/Additional Tools/Photoshop.png" alt="Photoshop" />
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <h2>My Journey</h2>
        <div className="story-content">
          <p>
            Ever since I was a kid, I've been fascinated by technology. I loved exploring computers, understanding how things worked, and spending hours figuring out little details that most people ignored. By the time I reached high school, I already knew I wanted to build my career around tech — so I chose to pursue Computer Science and Engineering.
          </p>
          <p>
            During my undergrad, I discovered how wide the world of technology really is. I learned programming languages like Python, C, C++, Java, and SQL, and explored topics such as software engineering, computer architecture, networking, and cloud computing. The more I learned, the more curious I became — and that curiosity kept pushing me forward.
          </p>
          <p>
            I always dreamed of coming to the United States, the global hub for innovation and technology. That dream turned into reality when I joined Auburn University at Montgomery for my Master's in Information Systems.
          </p>
          <p>
            Here, I worked on several projects and dove deeper into advanced topics like data analytics, data engineering, AI, machine learning, and deep learning. Beyond academics, I learned a lot about life — managing time, staying consistent, and living independently while chasing my goals.
          </p>
          <p>
            Looking back, every step in my journey has taught me something valuable. Each experience shaped who I am today — someone who's constantly learning, growing, and ready to take on new challenges in the tech world.
          </p>
          <p>
            Now, I'm aiming to join a good tech company where I can continue to learn, grow, and contribute my intelligence and creativity to building innovative solutions that make a real impact.
          </p>
        </div>
      </section>

      {/* My San Francisco Experience Section */}
      <section className="story-section">
        <h2>My San Francisco Experience</h2>
        <div className="story-content">
          <p>
            During my time in the United States, one of my most memorable experiences was my trip to San Francisco — the only place I visited outside Birmingham, where I currently live.
          </p>
          <p>
            I've always been fascinated by Silicon Valley, the heart of global innovation and technology. My love for the tech world made me want to experience it firsthand — to see where so many groundbreaking ideas and companies began. So, I planned a short trip to San Francisco with the goal of learning, exploring, and connecting.
          </p>
          <p>
            While there, I attended a YC Startup event and several tech and entrepreneurship sessions I discovered through the Luma app. Each event gave me new insights into startup culture — from early-stage idea validation to scaling successful products. It was inspiring to hear stories from founders, investors, and builders shaping the future of technology.
          </p>
          <p>
            Beyond the events, I spent time exploring the city — walking across the Golden Gate Bridge, visiting iconic tech spots, and meeting passionate people who share the same enthusiasm for innovation.
          </p>
          <p>
            That trip reminded me why I chose this path: the drive to build, learn, and grow in the ever-evolving world of technology.
          </p>
        </div>
        <div className="sf-images-row">
          <img src={sf2Image} alt="San Francisco" className="sf-image" />
          <img src={ggbImage} alt="Golden Gate Bridge" className="sf-image" />
          <img src={yc1Image} alt="YC Event" className="sf-image" />
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>What Drives Me</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>I love exploring new technologies and finding creative ways to solve complex problems.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>I'm committed to writing clean, maintainable code and delivering high-quality solutions.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>I believe in the power of teamwork and enjoy working with diverse teams to achieve common goals.</p>
          </div>
          <div className="value-card">
            <h3>Learning</h3>
            <p>Continuous learning is at the core of my professional growth and personal development.</p>
          </div>
        </div>
      </section>

      {/* Professional Experience Highlights */}
      <section className="experience-highlights-section">
        <h2>Professional Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">🚀</div>
            <h3>Projects Delivered</h3>
            <p>Successfully delivered 20+ full-stack applications and data analysis projects</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">📊</div>
            <h3>Data Insights</h3>
            <p>Analyzed complex datasets with 1M+ records to drive business decisions</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🏆</div>
            <h3>Achievements</h3>
            <p>Recognized for excellence in AI/ML implementations and cloud architecture</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">👥</div>
            <h3>Team Collaboration</h3>
            <p>Led cross-functional teams and mentored junior developers</p>
          </div>
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="philosophy-section">
        <h2>My Technical Philosophy</h2>
        <div className="philosophy-content">
          <div className="philosophy-item">
            <h3>User-Centric Design</h3>
            <p>Every line of code I write serves a purpose - to create exceptional user experiences that solve real problems.</p>
          </div>
          <div className="philosophy-item">
            <h3>Data-Driven Decisions</h3>
            <p>I believe in letting data guide development choices, ensuring scalable and maintainable solutions.</p>
          </div>
          <div className="philosophy-item">
            <h3>Continuous Innovation</h3>
            <p>Technology evolves rapidly, and I stay ahead by constantly learning and experimenting with new tools.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutMe;
