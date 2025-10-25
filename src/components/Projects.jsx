import React, { useMemo, useState, useCallback } from 'react';
import './Projects.css';

// Import static assets
import dshGif from '../assets/Gifs/Dsh gif.gif';
import aumImage from '../assets/AUm/Aum.png';
import awsReactGif from '../assets/Cloud/aws react.gif';
import awsServerlessGif from '../assets/Cloud/aws serverless student data.gif';
import app1 from '../assets/app/1.png';
import app2 from '../assets/app/2.png';
import app3 from '../assets/app/3.png';
import bannerImage from '../assets/app/banner.png';
import chatbotImage from '../assets/Ai Agents/Chatbot.png';
import agentOllamaImage from '../assets/Ai Agents/agentollama.png';
import restaurantImage from '../assets/Ai Agents/restuarant.png';
import discordImage from '../assets/Ai Agents/Agent Discord.png';

// Import data analysis images
import booksAnalysisImage from '../assets/Data analysis /Books.svg';
import cricketAnalysisImage from '../assets/Data analysis /cricket.svg';
import airQualityImage from '../assets/Data analysis /air-quality-index.png';
import netflixImage from '../assets/Data analysis /Netflix-Subscribers.png';
import walmartImage from '../assets/Data analysis /walmart.png';
import weatherImage from '../assets/Data analysis /Weather.png';

// Import pipeline images
import airflowImage from '../assets/Pipeline/Airflow.svg';
import snowflakeImage from '../assets/Pipeline/snowflake.svg';
import awsApiImage from '../assets/Pipeline/awsapi.svg';

const Projects = () => {
	// Load dashboard PNG images using valid literal glob patterns (match capitalized 'Dashboards')
	const dashboardImages = useMemo(() => {
		const gA = import.meta.glob('/src/assets/Dashboards/*.png', { eager: true, as: 'url' });
		const gB = import.meta.glob('/src/assets/Dashboards/**/*.png', { eager: true, as: 'url' });

		const urls = [
			...Object.values(gA),
			...Object.values(gB),
		];
		const unique = Array.from(new Set(urls));
		unique.sort();
		return unique.slice(0, 9);
	}, []);

  // Load Full Stack images with custom ordering
  const fullstackImages = useMemo(() => {
    const gA = import.meta.glob('/src/assets/Fullstack/*.png', { eager: true, as: 'url' });
    const gB = import.meta.glob('/src/assets/Fullstack/**/*.png', { eager: true, as: 'url' });
    const urls = [
      ...Object.values(gA),
      ...Object.values(gB),
    ];
    const unique = Array.from(new Set(urls));
    
    // Custom sorting: Netflix, Amazon, Nature, Weather, then rest
    unique.sort((a, b) => {
      const getFilename = (url) => (url.split('/').pop() || '').toLowerCase();
      const filenameA = getFilename(a);
      const filenameB = getFilename(b);
      
      // Priority order
      const getPriority = (filename) => {
        if (filename.includes('netflix')) return 1;
        if (filename.includes('amazon')) return 2;
        if (filename.includes('nature')) return 3;
        if (filename.includes('weather')) return 4;
        return 5; // rest
      };
      
      const priorityA = getPriority(filenameA);
      const priorityB = getPriority(filenameB);
      
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      
      // If same priority, sort alphabetically
      return filenameA.localeCompare(filenameB);
    });
    
    return unique;
  }, []);

	const longText = "dashboard to add in the websit jskad jkals;fd jaksld jaklf;d ajf jklsa;f sjakl;fdsa     jdkls;a fjdksla; fjdskal;f djal; fjasl; fjdklas;f djksa;l fjkdslajfklsa;jf ajfklsajkfdafafafdafdsafdsafda fd sa f d af d a f d af ad f d af da f d sa f a f ads f fasasdf.  adsf. dfs. ads dfsa fdsa dfs adfs afds dfas dfs dsf ads d asf fds dfs sfad dfs";

	const chunkIntoRows = (arr, size) => {
		const rows = [];
		for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size));
		return rows;
	};

	// Lightbox modal state for dashboards
	const [lightboxSrc, setLightboxSrc] = useState('');
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const openLightbox = useCallback((src) => {
		if (!src) return;
		setLightboxSrc(src);
		setIsLightboxOpen(true);
	}, []);
	const closeLightbox = useCallback(() => {
		setIsLightboxOpen(false);
		setLightboxSrc('');
	}, []);

	// State for expandable content
	const [isWeatherExpanded, setIsWeatherExpanded] = useState(false);
	const [isAirQualityExpanded, setIsAirQualityExpanded] = useState(false);
	const [isNetflixExpanded, setIsNetflixExpanded] = useState(false);
	const [isWalmartExpanded, setIsWalmartExpanded] = useState(false);

  const getExternalLinkForFullstack = (src) => {
    try {
      const filename = (src.split('/').pop() || '');
      const nameLower = filename.toLowerCase();
      
      // Debug logging
      console.log('Checking filename:', filename, 'lowercase:', nameLower);
      
      // Specific mappings per user request
      if (filename === 'Netflix.png' || nameLower === 'netflix.png') {
        console.log('Matched Netflix');
        return 'https://velvety-sunflower-83a500.netlify.app/';
      }
      if (filename === 'Aitools.png' || nameLower === 'aitools.png') {
        console.log('Matched Aitools');
        return 'https://willowy-dusk-9b8224.netlify.app/';
      }
      if (filename === 'Apple.png' || nameLower === 'apple.png') {
        console.log('Matched Apple');
        return 'https://apple-clone-hazel-tau.vercel.app/';
      }
      if (filename === 'Nature.png' || nameLower === 'nature.png') {
        console.log('Matched Nature');
        return 'https://v0-nature-webapp-integration.vercel.app/sunny';
      }
      if (filename === 'amazon.png' || nameLower === 'amazon.png') {
        console.log('Matched Amazon');
        return 'https://ui-reversal-art.lovable.app/';
      }
      if (filename === 'weather.png' || nameLower === 'weather.png') {
        console.log('Matched Weather');
        return 'https://global-forecast-nexus.lovable.app/';
      }
      if (nameLower.includes('screenshot 2025-10-16')) {
        console.log('Matched Screenshot');
        return 'https://calmweave-guide-82157.lovable.app/';
      }
      if (nameLower.includes('mentalhealth')) {
        console.log('Matched Mental Health');
        return 'https://calmweave-guide-82157.lovable.app/';
      }
      if (nameLower.includes('career') || nameLower.includes('advisor')) {
        console.log('Matched Career');
        return 'https://recruiter-bot-plus.lovable.app/';
      }
      console.log('No match found for:', filename);
      return '';
    } catch (error) {
      console.log('Error in getExternalLinkForFullstack:', error);
      return '';
    }
  };

	return (
		<div className="projects-page">
			{/* Hero Section with three column lines */}
			<section className="projects-hero-section">
				<div className="projects-hero-lines" aria-hidden="true">
					<div />
					<div />
					<div />
				</div>
				<div className="projects-hero-content">
					<div className="projects-hero-text">
						<h1 className="projects-hero-title">Chaos to Clarity: Engineering the Data Pipeline</h1>
						<p className="projects-hero-subtitle">My journey began with the unstructured wilderness—raw data scattered across AWS and Azure environments. As a Data Engineer, I get in there first to architect the solution: designing and executing rigorous Python ETL pipelines to transform all that chaos into structured, reliable wisdom. I then take that clean data and apply Machine Learning models to generate powerful predictive insights and strategic forecasts. As a Full Stack Developer, I don't just stop at the analysis; I seamlessly integrate and deliver that final intelligence, building the visualization layer and presenting results using dynamic tools like Power BI and Tableau. Every single project is built as an end-to-end solution, making sure that every data point drives a clear, actionable outcome.</p>
					</div>
					<div className="projects-hero-gif">
						<img 
							src={dshGif} 
							alt="Data Science & Analytics Demo" 
							className="projects-demo-gif"
						/>
					</div>
				</div>
			</section>

			{/* Project Navigation Buttons */}
			<section className="project-navigation-section">
				<h2 className="project-nav-title">Explore My Projects</h2>
				<div className="project-nav-buttons">
					<button 
						className="project-nav-btn" 
						onClick={() => document.getElementById('data-analysis-projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						Data Analysis Projects
					</button>
					<button 
						className="project-nav-btn" 
						onClick={() => document.getElementById('full-stack-projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						Full Stack Projects
					</button>
					<button 
						className="project-nav-btn" 
						onClick={() => document.getElementById('cloud-projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						Cloud Projects
					</button>
					<button 
						className="project-nav-btn" 
						onClick={() => document.getElementById('ai-agent-projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						AI Agent Projects
					</button>
					<button 
						className="project-nav-btn" 
						onClick={() => document.getElementById('data-pipeline-projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						Data Pipeline Projects
					</button>
					<button 
						className="project-nav-btn" 
						onClick={() => document.getElementById('mobile-app-projects')?.scrollIntoView({ behavior: 'smooth' })}
					>
						Mobile App Projects
					</button>
				</div>
			</section>

			{/* Data Analysis Projects */}
			<section id="data-analysis-projects" className="project-showcase-section">
				<h2>Data Analysis Projects</h2>
				<div className="data-analysis-grid">
					{/* Books Analysis Card */}
					<div className="data-analysis-card">
						<img src={booksAnalysisImage} alt="Books Analysis" className="data-analysis-image" />
						<div className="data-analysis-content">
							<h3>Books Scrape Data Processing (Azure-Focused)</h3>
							<div className="weather-analysis-content">
								<p>This pipeline focuses on processing scraped book data and is explicitly built on the Microsoft Azure cloud platform.</p>
								<p><strong>Source Data:</strong> Data scraped from a source identified as "Books to Scrape."</p>
								<p><strong>Storage (Source/Staging):</strong> Azure Blob Storage (Azure's equivalent of S3). The scraped data is first moved into this Azure storage service.</p>
								<p><strong>Processing Engine:</strong> Azure Databricks, utilizing PySpark. The data is loaded from Azure Blob Storage into the Azure Databricks platform for processing.</p>
								<p><strong>Output Destination:</strong> An Azure RDS (Relational Database Service) and a Dashboard/Visualization layer.</p>
								<p><strong>Key Flow:</strong> Scraped Books Data → Azure Blob Storage → Azure Databricks/PySpark → Azure RDS / Dashboard.</p>
							</div>
						</div>
					</div>

					{/* Cricket Analysis Card */}
					<div className="data-analysis-card">
						<img src={cricketAnalysisImage} alt="Cricket Analysis" className="data-analysis-image" />
						<div className="data-analysis-content">
							<h3>IPL Data Processing (AWS-Focused)</h3>
							<div className="weather-analysis-content">
								<p>This pipeline focuses on processing Indian Premier League (IPL) data using a cloud environment that seems to reference Amazon Web Services (AWS) infrastructure.</p>
								<p><strong>Source Data:</strong> Indian Premier League (IPL) data.</p>
								<p><strong>Storage (Source/Staging):</strong> Amazon S3 Bucket (a common cloud object storage). The dashed line from the IPL logo to S3 suggests the data is first placed in S3.</p>
								<p><strong>Processing Engine:</strong> Databricks, utilizing PySpark. This is where the ETL/data transformation logic is executed.</p>
								<p><strong>Output Destination:</strong> An SQL Database (represented by the generic SQL icon) and a Visualization/Dashboard layer.</p>
								<p><strong>Key Flow:</strong> IPL Data → S3 → Databricks/PySpark → SQL Database / Dashboard.</p>
							</div>
						</div>
					</div>

					<div className="data-analysis-card">
						<img src={airQualityImage} alt="Air Quality Index Analysis" className="data-analysis-image" />
						<div className="data-analysis-content">
							<h3>Air Quality Index (AQI) Analysis</h3>
							<div className="weather-analysis-content">
								<p><strong>Time-Series Analysis on 561 hourly air quality readings from Delhi (Jan 2023). 🌬️</strong></p>
								<p>• Calculated Air Quality Index (AQI) frequently peaked in the 'Hazardous' and 'Very Unhealthy' categories.</p>
								<p>• Identified PM10 and PM2.5 as the dominant pollutants driving the severe AQI scores.</p>
								<p>• Executed full stack analysis using Pandas and Plotly for correlation and hourly trend mapping.</p>
								
								<button 
									className="read-more-btn" 
									onClick={() => setIsAirQualityExpanded(!isAirQualityExpanded)}
								>
									{isAirQualityExpanded ? 'Read Less' : 'Read More'}
								</button>
								
								{isAirQualityExpanded && (
									<div className="expanded-content">
										<h4>Detailed Air Quality Analysis Results</h4>
										<div dangerouslySetInnerHTML={{ __html: `
											<p>This project involved a comprehensive time-series analysis of air quality in Delhi, utilizing 561 hourly records from January 2023. The analysis focused on eight major air pollutants and calculated the overall Air Quality Index (AQI) to assess health risk over the period.</p>
											
											<p><strong>1. Data Processing and Pollutant Overview</strong></p>
											<p>The raw data was processed to convert the date column to a datetime object, and a custom function was implemented to calculate the single-day overall AQI based on the maximum AQI value across all eight pollutants (CO, NO, NO₂, O₃, SO₂, PM₂.₅, PM₁₀, NH₃).</p>
											
											<p><strong>Key Descriptive Statistics:</strong></p>
											<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
												<tr style="background: #f8f9fa;">
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;"><strong>Pollutant</strong></td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;"><strong>Mean Concentration (μg/m³)</strong></td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;"><strong>Max Concentration (μg/m³)</strong></td>
												</tr>
												<tr>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">PM₁₀</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">420.99</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">1499.27</td>
												</tr>
												<tr>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">PM₂.₅</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">358.26</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">1310.20</td>
												</tr>
												<tr>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">CO</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">3814.94</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">16876.22</td>
												</tr>
												<tr>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">NO₂</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">75.29</td>
													<td style="padding: 0.5rem; border: 1px solid #dee2e6;">263.21</td>
												</tr>
											</table>
											
											<p>The mean values for PM₂.₅ (358.26 μg/m³) and PM₁₀ (420.99 μg/m³) are significantly high, well exceeding safe limits, and are the primary drivers of the severe AQI.</p>
											
											<p><strong>2. Overall AQI and Risk Categorization</strong></p>
											<p>The calculated AQI values were categorized into standard health risk levels: Good, Moderate, Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, and Hazardous.</p>
											<p>The analysis demonstrated that the overall AQI was frequently dominated by the most severe categories: Hazardous (301-500) and Very Unhealthy (201-300).</p>
											<p>The highest recorded AQI value of 500 confirms the prevalence of critical air pollution levels throughout the period.</p>
											
											<p><strong>3. Time and Correlation Analysis</strong></p>
											<p><strong>Hourly Trends:</strong> An hourly average AQI trend was calculated. Typically, AQI peaks were observed during the night and early morning hours (11 PM to 7 AM), correlating with decreased wind speeds and temperature inversions trapping pollutants close to the ground.</p>
											<p><strong>Pollutant Contribution:</strong> A pie chart of total pollutant concentrations showed that the majority of the absolute concentration mass was contributed by Particulate Matter (PM₂.₅ and PM₁₀).</p>
											<p><strong>Correlation:</strong> A correlation matrix (heatmap) was generated to investigate relationships between pollutants. This analysis confirmed expected strong positive correlations between pollutants from similar sources (e.g., PM₂.₅ and PM₁₀).</p>
											
											<p><strong>Technical Skills Demonstrated:</strong> This project highlights expertise in advanced data handling, custom function development (for AQI calculation), time-series visualization, and multivariate statistical analysis using Pandas and Plotly.</p>
										` }}></div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="data-analysis-card">
						<img src={netflixImage} alt="Netflix Subscribers Analysis" className="data-analysis-image" />
						<div className="data-analysis-content">
							<h3>Netflix Subscribers Analysis</h3>
							<div className="weather-analysis-content">
								<p><strong>10-Year Time Series Analysis on Netflix's quarterly subscriber data (2013-2023). 📈</strong></p>
								<p>• Mapped explosive, stable yearly growth trends using advanced rate calculations.</p>
								<p>• Employed the ARIMA(1, 1, 1) model to stabilize data and generate predictions.</p>
								<p>• Forecasted continued, significant subscriber expansion over the next five quarters.</p>
								
								<button 
									className="read-more-btn" 
									onClick={() => setIsNetflixExpanded(!isNetflixExpanded)}
								>
									{isNetflixExpanded ? 'Read Less' : 'Read More'}
								</button>
								
								{isNetflixExpanded && (
									<div className="expanded-content">
										<h4>Detailed Netflix Forecasting Analysis</h4>
										<div dangerouslySetInnerHTML={{ __html: `
											<p>This project involved a comprehensive time-series analysis of Netflix's quarterly subscriber count from Q2 2013 to Q3 2023. The objective was to analyze historical growth patterns and forecast future subscription numbers.</p>
											
											<p><strong>1. Historical Growth Analysis</strong></p>
											<p><strong>Overall Trend:</strong> The raw data shows a clear, monotonic upward trend in subscribers, indicating powerful long-term business expansion over the decade.</p>
											<p><strong>Quarterly Growth Rate:</strong> The analysis of the quarterly percentage change consistently shows positive growth across nearly all periods, confirming the stable momentum of subscriber acquisition.</p>
											<p><strong>Yearly Growth Rate:</strong> The yearly growth rate, calculated from corresponding quarters, also highlights continuous positive acceleration in the subscriber base.</p>
											
											<p><strong>2. Time Series Forecasting (ARIMA Model)</strong></p>
											<p>To predict future subscriber counts, a time-series model was developed:</p>
											<p><strong>Stationarity:</strong> The raw subscriber data was non-stationary (exhibiting the strong upward trend). The data was made stationary using first-order differencing (d=1).</p>
											<p><strong>Model Selection:</strong> Based on the Autocorrelation Function (ACF) and Partial Autocorrelation Function (PACF) plots of the differenced data, an ARIMA(1, 1, 1) model was selected (1 Autoregressive term, 1 Differencing term, 1 Moving Average term).</p>
											<p><strong>Model Fit:</strong> The final ARIMA model was fit to the historical data, with both the AR(1) and MA(1) terms showing statistical significance (P>|z| = 0.000).</p>
											
											<p><strong>3. Future Predictions</strong></p>
											<p>The fitted ARIMA(1, 1, 1) model was used to forecast the subscriber numbers for the next five quarters beyond the dataset's end date (Q3 2023).</p>
											<p><strong>Forecast Outcome:</strong> The predictions demonstrate a continuation of the established growth trajectory, projecting higher subscriber numbers in each subsequent quarter. This strong forecast indicates that, based on historical patterns, Netflix is expected to maintain its upward growth momentum into the immediate future.</p>
											
											<p><strong>Technical Skills Demonstrated:</strong> This project showcases skills in time-series data manipulation, advanced growth rate calculation, statistical modeling (ARIMA), and forward-looking business forecasting using Python, Pandas, and statsmodels.</p>
										` }}></div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="data-analysis-card">
						<img src={walmartImage} alt="Walmart Sales Analysis" className="data-analysis-image" />
						<div className="data-analysis-content">
							<h3>Walmart Sales Analysis</h3>
							<div className="weather-analysis-content">
								<p>This project, based on my analysis of the historical Walmart sales dataset, successfully identified the primary drivers of store performance and sales seasonality. The core goal was to transform raw transactional data into actionable strategies for inventory and operational planning.</p>
								
								<button 
									className="read-more-btn" 
									onClick={() => setIsWalmartExpanded(!isWalmartExpanded)}
								>
									{isWalmartExpanded ? 'Read Less' : 'Read More'}
								</button>
								
								{isWalmartExpanded && (
									<div className="expanded-content">
										<h4>Key Business Insights</h4>
										<div dangerouslySetInnerHTML={{ __html: `
											<p>My findings confirm that sales performance is overwhelmingly dictated by seasonality and internal store factors, rather than external macroeconomic shifts.</p>
											
											<p><strong>Holiday Impact is Critical, and Early:</strong> The most significant finding is the revenue surge during the holiday season, with an average increase of 25-40% during peak weeks. Crucially, the data shows that customer shopping behavior begins earlier than the official holiday date. This means our peak inventory and promotional readiness must be advanced by up to two weeks to capture this early demand and minimize costly stock-outs.</p>
											
											<p><strong>Store Type A is the Benchmark:</strong> Stores categorized as Type A consistently generate the highest weekly sales and overall revenue. My recommendation is to use the operational and merchandising strategies of these top-tier stores as a standardized blueprint for underperforming locations.</p>
											
											<p><strong>External Factors are Not Primary Drivers:</strong> Analysis of the Consumer Price Index (CPI), Unemployment Rate, and regional weather/fuel prices showed only a weak, often negligible, correlation with overall weekly sales performance. This validates a focus on internal operational controls—such as staffing, promotions, and inventory management—as the most effective levers for revenue growth.</p>
										` }}></div>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="data-analysis-card">
						<img src={weatherImage} alt="Weather Data Analysis" className="data-analysis-image" />
						<div className="data-analysis-content">
							<h3>Weather Dataset Analysis</h3>
							<div className="weather-analysis-content">
								<p><strong>Big Data Analytics on 8,784 hours of complete, hourly weather data. 📈</strong></p>
								<p>• Discovered patterns across 50 unique weather conditions (e.g., Fog, Snow, Clear).</p>
								<p>• Mapped temperature extremes, from -23.3 °C to a high of 33.0 °C.</p>
								<p>• Mastered data cleaning, filtering, and advanced Groupby techniques in Pandas.</p>
								<p>• A full-year atmospheric study revealing key trends and extremes.</p>
								
								<button 
									className="read-more-btn" 
									onClick={() => setIsWeatherExpanded(!isWeatherExpanded)}
								>
									{isWeatherExpanded ? 'Read Less' : 'Read More'}
								</button>
								
								{isWeatherExpanded && (
									<div className="expanded-content">
										<h4>Detailed Analysis Results</h4>
										<div dangerouslySetInnerHTML={{ __html: `
											<p><strong>Data Structure and Quality</strong></p>
											<p><strong>Dataset Size:</strong> 8784 rows and 8 columns.</p>
											<p><strong>Columns Analyzed:</strong> 'Date/Time', 'Temp_C', 'Dew Point Temp_C', 'Rel Hum_%', 'Wind Speed_km/h', 'Visibility_km', 'Press_kPa', and the renamed column 'Weather Condition'.</p>
											<p><strong>Data Integrity:</strong> The dataset is complete with no null (missing) values across all 8784 records.</p>
											<p><strong>Preparation:</strong> The original 'Weather' column was renamed to 'Weather Condition' for clarity.</p>
											<p><strong>Diversity:</strong> There are 50 unique weather conditions recorded.</p>
											
											<p><strong>Key Value Counts and Frequencies</strong></p>
											<p><strong>Most Common Weather:</strong> The most frequent conditions are Mainly Clear, Mostly Cloudy, and Cloudy, collectively accounting for the majority of the observations.</p>
											<p><strong>Snow:</strong> The condition 'Snow' explicitly occurs 390 times. A more comprehensive search for any condition containing the word 'Snow' yields a total of 475 records (which includes 'Snow Showers', 'Freezing Drizzle,Snow', etc.).</p>
											<p><strong>Fog:</strong> The exact 'Fog' condition occurred 150 times.</p>
											
											<p><strong>Statistical Metrics and Extreme Values</strong></p>
											<p><strong>Average Conditions:</strong> The analysis calculated mean values for all numeric columns (Temperature, Humidity, Wind Speed, Visibility, Pressure) for each of the 50 unique weather conditions. For example, the average visibility during Clear weather is 30.15 km, and during Fog it drops to only 6.25 km.</p>
											<p><strong>Temperature Extremes (Max/Min):</strong></p>
											<p>• The maximum recorded temperature was 33.0 °C (under 'Mainly Clear').</p>
											<p>• The minimum recorded temperature was -23.3 °C (under 'Clear').</p>
											<p><strong>Wind Speed:</strong> 'Wind Speed_km/h' has 34 unique values. The records show a maximum wind speed of 83 km/h.</p>
											
											<p><strong>Specific Filtered Observations</strong></p>
											<p><strong>High Wind & Visibility:</strong> There were 308 instances where the Wind Speed was greater than 24 km/h AND the Visibility was exactly 25 km.</p>
											<p><strong>Very High Visibility (Clear Days):</strong> There were 313 instances of 'Clear' weather where the Visibility was greater than 40 km, suggesting very good air quality and unobstructed views.</p>
										` }}></div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Data Pipeline Projects */}
			<section id="data-pipeline-projects" className="project-showcase-section">
				<h2>Data Pipeline Projects</h2>
				<div className="pipeline-projects-grid">
					<div className="pipeline-project-card">
						<img src={airflowImage} alt="Apache Airflow Pipeline" className="pipeline-project-image" />
						<div className="pipeline-project-content">
							<h3>Automated Weather Notification System</h3>
							<div className="weather-analysis-content">
								<p>This system is designed to fetch weather data, store it, and automatically send an email alert to a user based on a specific trigger.</p>
								
								<p><strong>1. Data Ingestion and Orchestration</strong></p>
								<p><strong>Source:</strong> The pipeline starts by fetching weather data from the OpenWeather API. The diagram shows it can handle Current Weather, 5 Day Forecast, and 16 Day Forecast.</p>
								<p><strong>Extraction:</strong> A Python script is used to call the OpenWeather API and extract the data.</p>
								<p><strong>Orchestration:</strong> Apache Airflow is used to schedule and manage this entire workflow, ensuring the Python script runs at designated times to collect the data.</p>
								<p><strong>Storage:</strong> The Python script, likely running as part of an Airflow job, uses the S3:PutItem operation to place the fetched weather data into an S3 Bucket (Amazon Simple Storage Service).</p>
								
								<p><strong>2. Event-Driven Notification</strong></p>
								<p>This is the event-driven core of the pipeline that triggers the user alert.</p>
								<p><strong>Trigger:</strong> The act of writing the new data to the S3 bucket generates an Event Notification.</p>
								<p><strong>Processing:</strong> This event notification automatically Triggers a Lambda function. AWS Lambda is a serverless compute service that executes code in response to events.</p>
								<p><strong>Security:</strong> The Lambda function is granted secure access to AWS resources (like S3 or SES) by using an IAM Role (Identity and Access Management), following the principle of least privilege.</p>
								<p><strong>Communication:</strong> The Lambda function is connected to SES (Simple Email Service). The Lambda code determines the content of the email and instructs SES to send it.</p>
								
								<p><strong>3. Final Outcome</strong></p>
								<p><strong>Action:</strong> SES sends the prepared email to the user.</p>
								<p><strong>End Goal:</strong> The User receives an email notification, presumably containing the latest weather data or an alert based on the weather data (e.g., a high-temperature warning).</p>
								
								<p><strong>Key Flow:</strong> OpenWeather → Python (scheduled by Airflow) → S3 (stores data) → Event Notification → Lambda (processes data/sends command using IAM Role) → SES (sends email) → User.</p>
							</div>
						</div>
					</div>
					<div className="pipeline-project-card">
						<img src={snowflakeImage} alt="Snowflake Data Warehouse" className="pipeline-project-image" />
						<div className="pipeline-project-content">
							<h3>Data Warehouse with Automation (Snowflake/dbt)</h3>
							<div className="weather-analysis-content">
								<p>This pipeline illustrates a sophisticated, modern data architecture focused on building a centralized Snowflake Data Warehouse using automation and best practices for transformation.</p>
								<p><strong>Data Ingestion (Source):</strong> A Data Producer (API) provides the initial data.</p>
								<p><strong>Orchestration:</strong> The data is pulled by a Python script, and the overall process is managed by Apache Airflow, an open-source platform for defining, scheduling, and monitoring workflows.</p>
								<p><strong>Staging (Cloud Storage):</strong> Data is securely moved to an S3 bucket (Amazon Simple Storage Service). Access to S3 is governed by an IAM Role (AWS Identity and Access Management), ensuring a secure, authorized transfer.</p>
								<p><strong>Data Warehousing:</strong> The data moves from S3 into Snowflake Staging and then into the Snowflake Warehouse. Snowflake acts as the central cloud-native data platform.</p>
								<p><strong>Transformation:</strong> dbt (data build tool) is used to define and execute transformation logic (T in ETL/ELT) directly within the Snowflake warehouse, creating clean, standardized tables for consumption.</p>
								<p><strong>Consumption (Visualization):</strong> The processed data in Snowflake is visualized using Power BI, a popular business intelligence tool.</p>
								<p><strong>End-User:</strong> The Consumer uses the Power BI reports and dashboards to derive insights.</p>
								<p><strong>Key Flow:</strong> Data Producer (API) → Python/Airflow → S3 (using IAM) → Snowflake Staging → dbt (Transform) → Snowflake Warehouse → Power BI → Consumer.</p>
							</div>
						</div>
					</div>
					<div className="pipeline-project-card">
						<img src={awsApiImage} alt="AWS API Pipeline" className="pipeline-project-image" />
						<div className="pipeline-project-content">
							<h3>Web Scraping to Operational Database</h3>
							<div className="weather-analysis-content">
								<p>This pipeline describes a straightforward flow for collecting data via web scraping and loading it into a traditional relational database for storage or operational use.</p>
								<p><strong>Data Ingestion (Source):</strong> The process begins with AWS Web Scraping, indicating that data is collected from a website using tools or services running on Amazon Web Services (AWS).</p>
								<p><strong>Initial Processing Environment:</strong> The scraped data is passed to Google Colab, a hosted Jupyter notebook environment. This step likely involves cleaning, initial exploration, or refining the scraped output.</p>
								<p><strong>Staging Format:</strong> The processed data is output as a CSV file.</p>
								<p><strong>Transformation/Loading:</strong> The Python layer reads the CSV file. This step is likely responsible for final data cleaning, transformation, and establishing the database connection.</p>
								<p><strong>Destination (Database):</strong> The cleaned data is loaded into a PostgreSQL database.</p>
								<p><strong>Final Destination:</strong> The data is then presented on a Dashboard (represented by the chart icon), suggesting it's ready for visualization and analysis.</p>
								<p><strong>Key Flow:</strong> AWS Web Scraping → Google Colab → CSV → Python → PostgreSQL → Dashboard.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Dashboards */}
			<section className="project-showcase-section">
				<h2>Dashboards</h2>
				<div className="dashboard-rows">
					{chunkIntoRows(dashboardImages.length > 0 ? dashboardImages : Array.from({ length: 9 }).map(() => ''), 2).map((row, rIdx) => (
						<div className="dashboard-row" key={rIdx}>
							{row.map((src, idx) => {
								const itemNumber = (rIdx * 2) + idx + 1;
								let text;
								if (itemNumber === 1) {
									text = `<b>Workforce Diagnostics and Retention Risk Modeling</b>

This dashboard is engineered for in-depth Human Resources analysis, providing an interactive platform to dissect and understand employee attrition. Its structure is designed to filter the total Attrition Rate against four key workforce dimensions: Department, Age Group, Education Field, and Job Satisfaction Rating. The primary business value is enabling HR and executive leadership to dynamically isolate high-risk employee segments, prioritize retention spending, and connect internal employee sentiment (Job Satisfaction) directly to turnover trends across various employee classifications.`;
								} else if (itemNumber === 2) {
									text = `<b>Executive Workforce Status and Strategic Talent Management</b>

This dashboard offers a comprehensive, filterable executive overview of the organization's talent landscape. It is built to track and compare core operational KPIs, including Hiring and Termination trends over time, providing immediate insight into workforce flow. The analytical sections support crucial talent strategy by allowing users to explore Demographic distributions, evaluate Education and Performance correlation, and perform essential Compensation Equity Analysis through the Age & Salary scatter plot. This flexibility ensures stakeholders can monitor workforce health and make data-backed decisions on compensation, recruitment targets, and development programs across any selected location or time period.`;
								} else if (itemNumber === 3) {
									text = `<b>Global Content Library Growth and Distribution Analysis</b>

Designed for strategic media analysis, this dashboard provides a comprehensive, interactive view of a global streaming content library. It empowers users to explore the current content mix by Type (Movie/TV Show), Top Genre, and Ratings Distribution. Crucially, the Geospatial Heat Map allows for the dynamic assessment of content volume and distribution by country, directly informing global licensing and market penetration strategies. The included Time-Series Analysis is essential for tracking the evolution and scale of library growth over time based on user-selected criteria.`;
								} else if (itemNumber === 4) {
									text = `<b>Content Strategy Review and Audience Preference Assessment</b>

This dashboard specializes in content strategy, built around filterable data to analyze and optimize a media library. It provides dynamic views on content composition, specifically by Type (Movie/TV Show) and Genre dominance, allowing for quick adjustments to acquisition focus. The Geospatial Map enables regional analysis of content distribution, and the Ratings visualization helps quality assessment across the catalog. The interactive design ensures that users can drill down from high-level volume trends to the descriptive details of a specific title, supporting efficient content commissioning and catalog management.`;
								} else if (itemNumber === 5) {
									text = `<b>Multi-dimensional Sales Segmentation and Performance Drill-down</b>

This robust dashboard is architected to allow detailed, segmented exploration of sales data across multiple dimensions. The most valuable capability is its powerful vertical filtering stack, enabling users to instantly segment all metrics by Year (2011-2014), Customer Segment (Consumer, Corporate, Home Office), and Geographic Region (Central, East, South, West). This segmentation reveals how different market strategies, product categories (Technology, Furniture, Office Supplies), and customer groups perform over time. The charts—such as the monthly sales bar chart, quantity sold trend line, and category breakdown—all update simultaneously, making it an effective tool for Sales Managers to diagnose performance variations and focus on high-opportunity areas.`;
								} else if (itemNumber === 6) {
									text = `<b>Comparative Performance Tracking and Inventory Optimization</b>

This dashboard is designed to provide analysts and sales leadership with a high-impact, year-over-year (Y-o-Y) comparison of key financial performance indicators (KPIs). The visualization is built to dynamically track Total Sales, Total Profit, and Total Quantity against a previous period (PY) and show monthly trends. Its critical feature is the Sales & Profit by Subcategory bar chart, which allows users to filter and identify products that are high-selling but low-profit (or even loss-making) versus those that are high-profit drivers. The Sales & Profit Trends over Time section supports root-cause analysis by visually correlating sales peaks and dips with corresponding profit figures across the year. The focus is on enabling rapid, data-driven decisions related to pricing, inventory, and supply chain efficiency.`;
								} else if (itemNumber === 7) {
									text = `<b>Workforce Demographics and Retention/Retrenchment Planning</b>

This HR dashboard is designed for operational and strategic workforce planning, offering full insights into the composition and risk profile of the employee base. The primary focus is on key workforce planning metrics: Total Employees, Active Workers, and the proportion of employees Due for Promotion versus those who are Next for Retrenchment. The breakdown of Service Years and Job Levels provides a clear view of the organizational hierarchy and talent maturity. Furthermore, the Distance from Office visualization adds a layer of analysis for understanding commuting factors that might impact retention or feasibility for return-to-office initiatives. The entire dashboard acts as a navigation point to deeper HR analysis pages (Action, Detail).`;
								} else if (itemNumber === 8) {
									text = `<b>External Factor Correlation and Seasonal Sales Forecasting</b>

This highly sophisticated dashboard goes beyond simple internal metrics by integrating sales data with external macroeconomic and environmental variables—namely CPI (Consumer Price Index), Fuel Price, and Temperature. This capability is invaluable for building predictive models and understanding external pressures on sales. Users can dynamically filter data by Holiday Flag and Store. The Total Sales and Temperature scatter plot is a powerful tool for discovering non-linear relationships, while the time-series line charts illustrate the correlation between sales volumes, inflation (CPI), and operational costs (Fuel Price) over time. This is an advanced dashboard for demand planning, logistics optimization, and macro-economic strategy.`;
								} else if (itemNumber === 9) {
									text = `<b>Segment-specific Sales Performance and Geographic Insight</b>

This executive-level dashboard provides a clean, high-level overview of total financial health (Total Sales, Total Profit, Quantity Sold, Orders, Customers) while allowing deep segmentation via the Segment filter buttons (Consumer, Corporate, Home Office). The design emphasizes rapid comprehension of the overall health of the business. A key analytical feature is the ability to view monthly sales and instantly see the corresponding breakdown by main product category, which shifts based on the selected segment. The included Geospatial Map enables the Sales Director to instantly view sales concentration and performance by state/region, facilitating territory management and resource allocation based on current sales activity.`;
								} else {
									text = longText;
								}
								return (
									<div className="dashboard-item" key={`${rIdx}-${idx}`}>
										<div className="dashboard-card">
											{src ? (
												<img
													src={src}
													alt={`Dashboard ${itemNumber}`}
													className="dashboard-clickable"
													onClick={() => openLightbox(src)}
												/>
											) : (
												<div className="dashboard-placeholder">Add dashboard image {itemNumber}</div>
											)}
										</div>
										<div className="dashboard-content" dangerouslySetInnerHTML={{ __html: text }}>
										</div>
									</div>
								);
							})}
						</div>
					))}
				</div>
			</section>

			{/* Full Stack Projects */}
			<section id="full-stack-projects" className="project-showcase-section">
				<h2>Full Stack Projects</h2>
				{/* Fullstack gallery: two items per row, each with image card + text block */}
				<div className="fullstack-rows">
					{chunkIntoRows(fullstackImages.length > 0 ? fullstackImages : [], 2).map((row, rIdx) => (
						<div className="fullstack-row" key={`fs-row-${rIdx}`}>
							{row.map((src, idx) => {
								const link = src ? getExternalLinkForFullstack(src) : '';
								const getFullstackDescription = (src) => {
									if (!src) return 'Add your description here...';
									const filename = (src.split('/').pop() || '').toLowerCase();
									
									if (filename.includes('netflix')) {
										return `<b>Netflix Clone (UI/UX)</b><br><br>I built a high-fidelity clone of the Netflix user interface, showcasing my mastery of modern Front-End Development and component-based architecture. This project emphasizes my ability to implement complex, responsive grid layouts and intuitive user experiences characteristic of large-scale streaming platforms.`;
									} else if (filename.includes('weather')) {
										return `<b>Real-Time Weather Application</b><br><br>I developed a live weather application with a clean, functional interface that demonstrates my core competency in API integration. The app fetches and displays real-time weather data from an external service (e.g., MET Norway) via its REST API, proving my skill in handling asynchronous data requests and ensuring application reliability.`;
									} else if (filename.includes('aitools')) {
										return `<b>AI Tools Hub & Career Advisor Platforms</b><br><br>I designed and prototyped two utility platforms that demonstrate my ability to handle sophisticated application logic. The AI Tools Hub is structured to categorize and search various AI services (Text, Image, Code), proving my skill in creating organized, scalable navigation menus. The Career Advisor interface is built to handle complex inputs (resume text, job descriptions) and represents a foundation for integrating Natural Language Processing (NLP) or Machine Learning (ML) backends for precision analysis.`;
									} else if (filename.includes('amazon')) {
										return `<b>Amazon E-commerce Platform Clone</b><br><br>I successfully replicated the complex, modular layout of the Amazon home page. This project showcases my proficiency in creating high-traffic, e-commerce-ready front-end interfaces, focusing on clear product organization, responsive design, and scalable component architecture.`;
									} else if (filename.includes('nature')) {
										return `<b>Nature Ambient Media Player</b><br><br>I developed a specialized application focused on user comfort and media handling. This project demonstrates my ability to design an aesthetically pleasing interface for selecting and controlling ambient audio elements (Sunny, Rainy, Forest), including volume controls and dynamic visual changes.`;
									} else if (filename.includes('apple')) {
										return `<b>Apple Product Launch Page Clone</b><br><br>I built a detailed clone of a modern Apple product page (iPhone 17 Pro). This work underscores my dedication to pixel-perfect design, sophisticated visual hierarchy, and creating premium, high-impact user experiences that align with world-class marketing standards.`;
									} else if (filename.includes('mental')) {
										return `<b>Mental Wellness Focus Selector UI</b><br><br>I designed an intuitive and accessible user interface for a wellness application. The clean, modern layout allows users to easily select focus areas like "Emotional well-being" and "Stress management," showcasing my skill in building user-friendly interactive forms for health and personal development services.`;
									} else if (filename.includes('career') || filename.includes('advisor')) {
										return `<b>Career Advisor Platform</b><br><br>I engineered the interface for this analytical platform, focusing on robust data input fields (for resume text and job descriptions) and structured role selection buttons (e.g., Data Scientist, Cloud Architect). This project demonstrates my experience in designing the front-end for a tool intended for precision analysis and back-end integration with Machine Learning.`;
									}
									return 'Add your description here...';
								};
								
								return (
									<div className="fullstack-item" key={`fs-${rIdx}-${idx}`}>
										<div className="fullstack-card">
											{src ? (
												link ? (
													<a href={link} target="_blank" rel="noreferrer">
														<img src={src} alt={`Fullstack ${(rIdx * 2) + idx + 1}`} />
													</a>
												) : (
													<img src={src} alt={`Fullstack ${(rIdx * 2) + idx + 1}`} />
												)
											) : (
												<div className="fullstack-placeholder">Add fullstack image {(rIdx * 2) + idx + 1}</div>
											)}
										</div>
										<div className="fullstack-content" dangerouslySetInnerHTML={{ __html: getFullstackDescription(src) }}></div>
									</div>
								);
							})}
						</div>
					))}
				</div>
			</section>

			{/* AUM RAG Chatbot */}
			<section className="aum-banner-section">
				<h2>College RAG Chat-bot</h2>
				<div className="aum-banner-container">
					<img 
						src={aumImage} 
						alt="AUM RAG Chatbot" 
						className="aum-banner-image clickable" 
						onClick={() => window.open('https://github.com/SANJAYBAIRI8686/Aum-Rag-Project', '_blank', 'noopener,noreferrer')}
					/>
				</div>
				<div className="aum-content">
					<p><strong>AUM RAG Chatbot: AI Knowledge Retrieval System</strong></p>
					<p>Engineered a scalable, full-stack RAG (Retrieval-Augmented Generation) chatbot designed to provide grounded, source-attributed answers from 767 internal AUM documents.</p>
					<p><strong>Technology Stack:</strong></p>
					<ul>
						<li><strong>AI/Backend:</strong> FastAPI, LangChain, ChromaDB (Vector Store), Google Gemini 2.5 Flash.</li>
						<li><strong>Frontend:</strong> React 19, Tailwind CSS, and Framer Motion for a responsive, animated user experience, secured with Google sign-in authentication.</li>
					</ul>
					<p><strong>Impact:</strong> Successfully implemented the end-to-end data pipeline, from document scraping and embedding (Sentence Transformers) to similarity search and final generation, demonstrating expertise in production-ready AI integration.</p>
				</div>
			</section>

			{/* Cloud Projects */}
			<section id="cloud-projects" className="project-showcase-section">
				<h2>Cloud Projects</h2>
				<div className="cloud-projects-grid">
					<div className="cloud-project-card">
						<img src={awsReactGif} alt="AWS React Application" className="cloud-project-image" />
						<div className="cloud-project-content">
							<h3>Full-Stack Application Deployment with AWS React/Amplify</h3>
							<div dangerouslySetInnerHTML={{ __html: `I successfully deployed a modern, interactive React.js front-end application using AWS Amplify. This highlights my proficiency in using continuous deployment services to quickly host and manage the static assets of a web application. This architecture is designed to integrate seamlessly with the serverless backend, typically using API Gateway to connect the front-end interface with the computational logic in AWS Lambda, proving my skill in creating and connecting the entire full-stack solution in a cloud environment.` }}></div>
						</div>
					</div>
					<div className="cloud-project-card">
						<img src={awsServerlessGif} alt="AWS Serverless Student Data" className="cloud-project-image" />
						<div className="cloud-project-content">
							<h3>AWS Serverless Student Data Management System</h3>
							<div dangerouslySetInnerHTML={{ __html: `I architected and implemented a complete serverless web application that manages student data (a CRUD application). The backend utilizes the high-availability, low-latency combination of AWS API Gateway, AWS Lambda (for the application logic), and Amazon DynamoDB (a managed NoSQL database). This project demonstrates my ability to build highly scalable, cost-efficient, and fully managed backend infrastructure without relying on traditional servers. The deployment emphasizes a "pay-per-use" model and automatic scaling to meet variable traffic demands.` }}></div>
						</div>
					</div>
				</div>
			</section>

      {/* Mobile App */}
      <section id="mobile-app-projects" className="project-showcase-section">
        <h2>Mobile App</h2>
        <div className="project-showcase-grid reverse">
          <div className="project-showcase-text">
            <p>

               <b>PantryPal: Smart Kitchen Inventory Management (iOS)</b><br></br><br></br>

               Developed a sophisticated iOS application using SwiftUI 4.0 and SwiftData to combat food waste. It allows users to track all pantry, fridge, and freezer items with real-time expiration monitoring and proactive local notifications. Key features include quick item entry via VisionKit barcode scanning and intelligent recipe discovery powered by the Spoonacular API, utilizing only available ingredients. The app is built on an MVVM architecture with a modern, responsive user interface.</p>
          </div>
          <div className="mobile-iphone-showcase">
            <div className="iphone-display clickable" onClick={() => window.open('https://ios-app-web-version.vercel.app/', '_blank', 'noopener,noreferrer')}>
              <img src={app1} alt="iPhone App 1" className="iphone-image" />
            </div>
            <div className="iphone-display clickable" onClick={() => window.open('https://ios-app-web-version.vercel.app/', '_blank', 'noopener,noreferrer')}>
              <img src={app2} alt="iPhone App 2" className="iphone-image" />
            </div>
            <div className="iphone-display clickable" onClick={() => window.open('https://ios-app-web-version.vercel.app/', '_blank', 'noopener,noreferrer')}>
              <img src={app3} alt="iPhone App 3" className="iphone-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Web App Banner */}
      <section className="web-app-banner-section">
        <h2>Also Built a Web App for More Information</h2>
        <div className="banner-container">
          <img 
            src={bannerImage} 
            alt="Web App Banner" 
            className="banner-image clickable" 
            onClick={() => window.open('https://ios-app-web-version.vercel.app/', '_blank', 'noopener,noreferrer')}
          />
        </div>
      </section>

			{/* AI Agent Projects */}
			<section id="ai-agent-projects" className="ai-agent-projects-section">
				<h2>AI Agent Projects</h2>
				<div className="ai-agent-cards-container">
					<div className="ai-agent-row">
						<div className="ai-agent-card">
							<img src={chatbotImage} alt="Chatbot AI Agent" className="ai-agent-image" />
						</div>
						<div className="ai-agent-text">
							<h3><b>Web-Grounded Conversational AI Agent</b></h3>
							<div dangerouslySetInnerHTML={{ __html: `
								<p>This project focused on creating a sophisticated, general-purpose chatbot that provides up-to-date and factually accurate responses.<br><br>
								Core Technology: Integrated the Google Gemini Chat Model for natural language understanding and generation.<br><br>
								Key Functionality: Implemented Simple Memory to maintain conversational context and continuity across user interactions.<br><br>
								Real-Time Grounding: Leveraged the SerpAPI tool to provide the AI agent with real-time web access, ensuring that answers are grounded in current information rather than just training data.<br><br>
								Platform: Deployed via n8n's Chat Message Received trigger for seamless communication.</p>
							`}}></div>
						</div>
					</div>
					<div className="ai-agent-row">
						<div className="ai-agent-card">
							<img src={agentOllamaImage} alt="Agent Ollama" className="ai-agent-image" />
						</div>
						<div className="ai-agent-text">
							<h3><b>Local LLM Agent for Private Chat</b></h3>
							<div dangerouslySetInnerHTML={{ __html: `
								<p>This agent demonstrated the ability to deploy and utilize self-hosted Large Language Models for private or high-volume processing environments.<br><br>
								Core Technology: Utilized the Ollama Chat Model to integrate the locally-run Llama3 language model.<br><br>
								Purpose: Enabled cost-efficient and private AI processing by keeping the model and conversational data entirely within the local infrastructure.<br><br>
								Key Functionality: Implemented conversational memory using the Simple Memory component to provide a coherent chat experience without relying on external cloud LLM providers.<br><br>
								Architecture: Showcases expertise in integrating self-hosted AI services into complex automation workflows.</p>
							`}}></div>
						</div>
					</div>
					<div className="ai-agent-row">
						<div className="ai-agent-card">
							<img src={restaurantImage} alt="Restaurant AI Agent" className="ai-agent-image" />
						</div>
						<div className="ai-agent-text">
							<h3><b>Google Sheets-Integrated Restaurant Order Agent</b></h3>
							<div dangerouslySetInnerHTML={{ __html: `
								<p>A complex, data-driven agent designed to automate the sales and ordering process for a restaurant business entirely through a chat interface.<br><br>
								Core Technology: Built on the Google Gemini Chat Model to intelligently parse natural language customer orders.<br><br>
								Data Integration: Utilized Google Sheets as a central database for three core functions:<br><br>
								• Reading menu items/pricing (Items sheet)<br><br>
								• Reading frequently asked questions (FAQ sheet) for RAG-like answers<br><br>
								• Logging new customer data (Customer Order sheet), including name, phone number, and order details<br><br>
								Process Flow: The agent serves as a transactional tool, extracting structured data from unstructured chat input and appending it directly to the operational Google Sheet for fulfillment.</p>
							`}}></div>
						</div>
					</div>
					<div className="ai-agent-row">
						<div className="ai-agent-card">
							<img src={discordImage} alt="Discord Agent" className="ai-agent-image" />
						</div>
						<div className="ai-agent-text">
							<h3><b>Real-Time RSS News Feed to Discord Automation</b></h3>
							<div dangerouslySetInnerHTML={{ __html: `
								<p>A purely automated workflow focused on real-time data ingestion, transformation, and external publishing.<br><br>
								Trigger Mechanism: Uses a Schedule Trigger set to run every 1 minute for continuous, low-latency monitoring.<br><br>
								Data Ingestion: Reads the latest content from an external RSS feed source.<br><br>
								Conditional Logic: Implemented an If node to filter incoming articles, ensuring only relevant or new items are processed and published.<br><br>
								Publishing: Utilizes the HTTP Request node to post formatted news content to a designated Discord channel webhook instantly, enabling real-time community updates.</p>
							`}}></div>
						</div>
					</div>
				</div>
			</section>

			{/* Lightbox Modal for dashboards */}
			{isLightboxOpen && (
				<div className="modal-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close" onClick={closeLightbox} aria-label="Close">×</button>
						<img className="modal-image" src={lightboxSrc} alt="Dashboard preview" />
					</div>
				</div>
			)}
		</div>
	);
};

export default Projects;
