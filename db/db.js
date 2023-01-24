export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Deepak Singh. I’m Master's in Data Science student at the University of San Francisco and currently working as a Data Science Intern at Boston Children's Hospital (Harvard Medical School). I'm graduating in June 2023.",
				"I'm a firm believer of the logic that 'data' is a catalyst to a 'better world'. I've been a bridge between technology and business, delivering solutions for interesting problems in a wide spectrum of industry space.",
				"I'm a 3d artist at heart, besides being an OpenSource enthusiast. Look me up at Sketchfab (10k+ views) and Itch.io",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: deepak.id1988@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages & DBs",
			skillName: "Python, SQL, Apache Spark, Airflow, MongoDB",
			color: "1",
			percentage: "100",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Numpy, Pandas, Matplotlib",
			color: "6",
			percentage: "100",
		},
		{
			title: "Skills",
			skillName: "Linear Regression, Machine Learning, A/B Testing, Web Scraping, SVD",
			color: "2",
			percentage: "100",
		},
		{
			title: "Cloud Platform",
			skillName: "GCP, Databricks",
			color: "3",
			percentage: "100",
		},
		{
			title: "Tools & Techs",
			skillName: "Git, Power Apps, 3D modeling",
			color: "7",
			percentage: "100",
		},
	],
	projects: {
		web: [
			{
				projectName: "Programming Diaries",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://programmingdiaries.herokuapp.com/",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Find Your Bank",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://clever-fermi-0d5d76.netlify.app",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/vinaysomawat/Travographer-Portal",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Resume Builder",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://vinaysomawat.github.io/Resume-Builder",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Pizza Ordering ChatBot",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "WhatsApp-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		android: [
			{
				projectName: "NITW-CSE",
				image: "images/nitwcse.jpg",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "https://github.com/vinaysomawat/NITW-CSE",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "CareerHigh-App",
				image: "images/carrerhigh.png",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "https://github.com/vinaysomawat/CareerHigh-Android",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "SnylloAir.com",
				image: "images/snylloair.png",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "https://www.snylloair.com/",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "Delivery+",
				image: "images/AM-Logo-.png",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],
	},
	experience: [
		{
			title: "Boston Children's Hospital",
			duration: "Nov 2022 - Present",
			subtitle: "Data Science Intern",
			details: [
				"Working on deriving and implementing (in Python) a coupled tensor+matrix factorization algorithm (SupCP+M) and then to test this algorithm with a multimodal neurodevelopmental dataset that includes EEG, several clinical measures (e.g., birthweight, sex), sociodemographic indicators, and genetic data.",
			],
			tags: [
				"Python",
				"Tensor-Matrix Factorization",
				"SVD",
				"Time Series",
			],
			icon: "heartbeat",
		},
		{
			title: "Accenture",
			duration: "Apr 2018 - Jun 2022",
			subtitle: "Business Excellence Advisory",
			details: [
				"Deployed a predictive performance model for over 40k partners of a billion dollar client by back-end automation, which enabled B2B partners to spend more time in selling rather than managing compensation",
				"Designed a low-cost online workflow system, which transformed E2E contract management for 5000+ customers, converting unstructured contract data into meaningful insights",
				"As a product owner, spearheaded ML based classification model, which detects erroneous/non-billable claims, which improved Working Capital by 10% (~$ 1.6 M) y-o-y",
			],
			tags: [
				"Predictive Modeling",
				"SQL",
				"Python",
				"RPA",
				"Power Apps",
			],
			icon: "qrcode",
		},
		{
			title: "Hindustan Petroleum Corporation Ltd.",
			duration: "Jun 2011 - Apr 2017",
			subtitle: "SDE Intern",
			details: [
				"Achieved savings of $70k annually by digitizing and implementing an automated invoice validation system to reduce the validation time from 3 days to less than a day",
				"Transformed monitoring & controlling of capital budget projects worth $500 k, across the organization by developing a standard monitoring tool ",
			],
			tags: ["Excel", "Automation", "SQL",],
			icon: "group",
		},
	],
	education: [
		{
			title: "MBA",
			duration: "",
			subtitle: "Indian Institute of Management, Calcutta",
			details: [
				"Led the campus team and won 2nd prize at ISB’s Nimble case challenge by Tech Mahindra among 1200+ teams",
				"Developed Android app for an entrepreneurial bike rides venture across the campus, earned highest revenues among 11 competing ventures",
			],
			tags: [
				"Operations Research",
				"Economics",
				"Marketing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors of Technology",
			duration: "",
			subtitle: "Maharshi Dayanand University",
			details: [
				"Mechanical Engineering",
				"Technical events organizer",
			],
			tags: ["Computer Aided Design", "Automation",],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/deepsAI8",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/dy1988",
				},
				{
					text: "HackerRank",
					link: "https://www.hackerrank.com/deepak_id1988",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/deepsAI8/deepsAI8.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/deepaksingh8819/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/dsy1988",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/deepsai8",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Deepak Singh.",
				"&copy; No Copyrights. Feel free to use this template.",
			],
		},
	],
};
