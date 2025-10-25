import React, { useState, useCallback } from 'react';
import './Experience.css';

// Import experience logos
import ibmLogo from '../assets/Experience /IBM.png';
import smartInternzLogo from '../assets/Experience /smart Internz.png';

// Import certification images
import awsCloudComputing from '../assets/Certifications/aws cloud computing.png';
import awsS3 from '../assets/Certifications/aws s3.png';
import britishAirways from '../assets/Certifications/BritishAirways.png';
import coursera1 from '../assets/Certifications/Coursera1.png';
import coursera2 from '../assets/Certifications/Coursera2.png';
import deloitte from '../assets/Certifications/Deliottie.png';
import googleGai from '../assets/Certifications/google gai.png';
import googleLlm from '../assets/Certifications/google llm.png';
import jpmorgan from '../assets/Certifications/Jpmorgan.png';
import kaggle from '../assets/Certifications/kaggle.png';
import researchPaper from '../assets/Certifications/researchpaper.png';
import tata from '../assets/Certifications/TATA.png';

const Experience = () => {
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = useCallback((src) => {
    setLightboxSrc(src);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setLightboxSrc('');
  }, []);

  return (
    <div className="page-content">
      {/* Professional Experience Section */}
      <section id="professional-experience" className="professional-experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-header">
              <h3>Data Engineer</h3>
              <h4>IBM</h4>
              <p className="experience-date">2023 January - 2023 October</p>
            </div>
            <div className="experience-image">
              <img src={ibmLogo} alt="IBM Experience" className="company-logo" />
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
                <h5> Key Skills</h5>
                <p>Data Analysis, Data Visualization, Dashboard Development, Business Intelligence, SQL, Python, Power BI, Tableau, Data Cleaning, Reporting, Problem Solving, Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="certifications-section">
        <h2>Achievements</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <img 
              src={researchPaper} 
              alt="Research Paper" 
              className="certification-image clickable" 
              onClick={() => openLightbox(researchPaper)}
            />
            <div className="certification-content">
              <h3>Research Publication</h3>
              <p>Published research paper in peer-reviewed journal showcasing academic contributions.
              Research Paper Presentation (Supervisory Approach applying AWS Services): My most significant gain was demonstrating research and thought leadership 
              by presenting a paper on leveraging AWS services at an international conference. This experience showcases my ability to not just use tools, but to conceptualize, research, and articulate 
              how advanced cloud services can be applied to build innovative, real-world systems like a student monitoring or microservices architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <img 
              src={awsCloudComputing} 
              alt="AWS Cloud Computing" 
              className="certification-image clickable" 
              onClick={() => openLightbox(awsCloudComputing)}
            />
            <div className="certification-content">
              <h3>AWS Cloud Computing</h3>
              <p>Foundational training in core cloud computing concepts, services, and architecture provided by AWS.     
                <b>Skills Demonstrated</b>: Understanding of cloud models, deployment methods, and key AWS services.</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={awsS3} 
              alt="AWS S3" 
              className="certification-image clickable" 
              onClick={() => openLightbox(awsS3)}
            />
            <div className="certification-content">
              <h3>AWS S3 Storage</h3>
              <p><b>AWS S3 Storage</b><br></br> I established a crucial understanding of cloud-native storage, specifically Amazon Simple Storage Service (S3). 
                This project taught me the fundamental principles of highly scalable, secure, and durable object storage for various use cases like data 
                lakes, backup, and archival..</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={britishAirways} 
              alt="British Airways" 
              className="certification-image clickable" 
              onClick={() => openLightbox(britishAirways)}
            />
            <div className="certification-content">
              <h3>British Airways</h3>
              <p>Applied data science principles to business challenges by completing tasks in Modeling lounge eligibility at Heathrow Terminal 3 and Predicting customer buying behavior.<br></br> 
                 <b>skills Demonstrated</b>: Predictive modeling, data analysis, feature engineering, and applying ML to complex operational decisions..</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={coursera1} 
              alt="Coursera Certification 1" 
              className="certification-image clickable" 
              onClick={() => openLightbox(coursera1)}
            />
            <div className="certification-content">
              <h3>Data Analysis using Excel</h3>
              <p>I built a strong foundational mastery of data manipulation and reporting within a critical business tool. I am proficient in creating powerful 
                reports using Pivot Tables and Charts, applying VLOOKUP and conditional logic, and utilizing diverse charting techniques (scatter plots, histograms)
                 to quickly filter and present complex information.</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={coursera2} 
              alt="Coursera Certification 2" 
              className="certification-image clickable" 
              onClick={() => openLightbox(coursera2)}
            />
            <div className="certification-content">
              <h3>Coursera AWS S3</h3>
              <p>Practical, hands-on project completion covering the essential functions and operations of Amazon Simple Storage Service (S3).     <br></br>
                 <b>Skills Demonstrated</b>: Direct experience with AWS services, object storage management, and cloud infrastructure operations.</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={deloitte} 
              alt="Deloitte" 
              className="certification-image clickable" 
              onClick={() => openLightbox(deloitte)}
            />
            <div className="certification-content">
              <h3>Deloitte Certification</h3>
              <p>I gained invaluable, hands-on experience by working through a simulation that mirrored real-world forensic and data analysis tasks at a top consulting firm.
                 This experience solidified my ability to move beyond theory and apply technical skills to solve a business problem.<br></br>
                 <b>Applied Skills</b>: I specifically leveraged Tableau to build professional dashboards and visualizations, and used advanced Microsoft Excel functions to classify
                 and organize data, proving my versatility across essential data analysis tools.</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={googleGai} 
              alt="Google Generative AI" 
              className="certification-image clickable" 
              onClick={() => openLightbox(googleGai)}
            />
            <div className="certification-content">
              <h3>Google Generative AI</h3>
              <p>Fundamental understanding of Generative AI concepts, models, and real-world applications.<br></br>    
                <b>Skills Demonstrated</b>: Grasp of modern AI trends, terminology, and capabilities.

                   </p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={googleLlm} 
              alt="Google LLM" 
              className="certification-image clickable" 
              onClick={() => openLightbox(googleLlm)}
            />
            <div className="certification-content">
              <h3>Google Large Language Models</h3>
              <p>Comprehensive introduction to the architecture, training, ethical considerations, and practical uses of Large Language Models.<br></br>    
                <b>Skills Demonstrated</b>: LLM mechanics, prompt engineering foundations, and responsible AI practices.</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={jpmorgan} 
              alt="JPMorgan Chase" 
              className="certification-image clickable" 
              onClick={() => openLightbox(jpmorgan)}
            />
            <div className="certification-content">
              <h3>JPMorgan Chase Software Engineering </h3>
              <p>Completed practical tasks covering essential enterprise development workflows, including Project Setup, Kafka Integration, H2 Integration, 
                REST API Integration, and REST API Controller development.<br></br>     
                <b>Skills Demonstrated</b>: Backend development, microservices communication (Kafka), database handling, and RESTful service design..</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={kaggle} 
              alt="Kaggle" 
              className="certification-image clickable" 
              onClick={() => openLightbox(kaggle)}
            />
            <div className="certification-content">
              <h3>Kaggle Competitions</h3>
              <p>Badge earned for demonstrating proficiency and skill in the Python programming language through competition and course work on the Kaggle platform.<br></br>    
                <b>Skills Demonstrated</b>: Core Python programming, data manipulation, and coding efficiency.</p>
            </div>
          </div>
          <div className="certification-card">
            <img 
              src={tata} 
              alt="TATA Consultancy Services" 
              className="certification-image clickable" 
              onClick={() => openLightbox(tata)}
            />
            <div className="certification-content">
              <h3>TATA Consultancy Services</h3>
              <p>Practical training in transforming data into actionable business intelligence, covering Framing the Business Scenario, Choosing the 
                Right Visuals, Creating Effective Visuals, and Communicating Insights and Analysis.     
                <b>Skills Demonstrated</b>: Data storytelling, chart selection, visualization best practices, and converting data output into strategic recommendations..</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Certifications */}
      {isLightboxOpen && (
        <div className="modal-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeLightbox} aria-label="Close modal">
              ×
            </button>
            <img src={lightboxSrc} alt="Certification" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
