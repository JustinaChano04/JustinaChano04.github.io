import IMAGES from '../data/images.js'
const INFO = {
	main: {
		title: "Justin.Chan.04",
		name: "Justin Chan",
		email: "justinchanchan8@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
	},

	homepage: {
		title: "Justin Chan",
		description:
			"I am an aspiring MLOps engineer experienced with writing reliable backend web applications using various frameworks and technologies. I am passionate about the intersection of technology, data, and business firmly believe that embracing an interdisciplinary and global approach is instrumental in creating fair and inclusive AI products.",
	},

	about: {
		title: "Justin Chan",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
		education:
			"Purdue University",
		degree: 
			"BEngr in Computer Engineering & Minor in Data Science"

	},

	work: [
		{
			company: "Transglobe Insurance",
			title: "Machine Learning Engineer Intern",
			date: "May 2023 - July 2023"
		},
		{
			company: "PricewaterhouseCoopers (PwC)",
			title: "Data & Tech Intern",
			date: "June 2022 - Aug 2022"
		},
		{
			company: "Merck&Co",
			title: "Software Engineer Intern",
			date: "Aug 2021 - May 2022",
		},
		{
			company: "LibMultiLabel",
			title: "Machine Learning Researcher",
			date: "July 2023 - current"
		},

	],


	projects: [
		{
			title: "LibMultiLabel",
			description:
				"Discovering methods to optimize the size multi-classification models through exploring pruning techniques",
			tools: "Python, Bash",
			logo: IMAGES.project,
			linkText: "View Project",
			link: "https://github.com/ASUS-AICS/LibMultiLabel",
		},
		{
			title: "AI for Financial Literacy",
			description:
				"Leveraging GenAI creating an application to improve financial literacy through search, summarizing, and identifying financial terms",
			tools: "Python, ReactJS, OpenAI API, Jupyter Notebook",
			logo: IMAGES.moneybag,
			linkText: "View Project",
			link: "https://github.com/JustinaChano04/text-summarization",
		},

		{
			title: "Picki",
			description:
				"Designed product to reduce social anxiety that allows user groups to anonymously choose nearby restaurants, ranking most picked restaurant amongst users, won 2nd place at Boilermake Hackathon",
			tools: "Python, HTML, Dart",
			logo: IMAGES.picki,
			linkText: "View Project",
			link: "https://github.com/AKPsi/Picki",
		},
		{
			title: "Subway Store Locator",
			description:
				"Created an ETL pipeline for subway store data and backend API endpoints to support querying nearest subway store locations.",
			tools: "Python, Jupyter Notebook",
			logo: IMAGES.subway,
			linkText: "View Project",
			link: "https://github.com/JustinaChano04/Subway_Data_Engineering_Locator",
		},
		{
			title: "NYC Bike Traffic Analysis",
			description:
				"Generated insight about bike traffic data through data exploration, conducting regressions analysis across variables, hypothesis testing, and data visualizations ",
			tools: "Python, Jupyter Notebook",
			logo: IMAGES.bike,
			linkText: "View Project",
			link: "https://github.com/JustinaChano04/NYC-Bicycle-Traffic-Analysis",

		}
		


	],
};

export default INFO;
