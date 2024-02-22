import JobCard from "@/components/cards/JobCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { getCountires, getJobs } from "@/lib/actions/global.action";
import { getUserCountry } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";

// const jobs = [
//   {
//     id: 'myTppc0f6n9Yut2JAAAAAA==',
//     employer: 'PGBPGNGLOBAL',
//     employerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnl0qvHNDlOuF9HwN_XmkOfVKtrUQdt7iYnGy&s=0',
//     title: 'Full-Stack Engineer, Media Platform (NEXT.js)',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://www.pgcareers.com/global/en/job/R000091816/Full-Stack-Engineer-Media-Platform-NEXT-js',
//     city: 'Warszawa',
//     country: 'PL',
//     description: 'Job Location\n' +
//       'Warsaw\n' +
//       '\n' +
//       'Job Description\n' +
//       '\n' +
//       'IT at P&G\n' +
//       '\n' +
//       'IT at Procter & Gamble is where business, innovation and technology integrate to create a competitive advantage for P&G. Our mission is clear -- we deliver IT to help P&G win with consumers. As a P&G IT professional, you are a diverse business leader who applies IT mastery to deliver game-changing, technology-driven business models and capabilities. Whether your role is to create an IT innovation strategy for a business, protect our critical information systems and assets, or manage a strategic supplier in our cutting-edge shared services organization, your technical mastery will be recognized and rewarded. Your passion for the industry will be further cultivated by our culture of continued learning and growth as an IT professional. Your career in IT builds change in leadership and influence skills, breadth of experience across multiple businesses, and depth of expertise in areas like Application & Integration, Infrastructure, Data & Analytics, and Security & Risk.\n' +
//       '\n' +
//       'The Opportunity\n' +
//       '\n' +
//       'We are looking for a driven, naturally curious Full-Stack Engineer to join our Digital Experiences team delivering cloud native solutions support our global Media ecosystem. Our engineering teams work with data on a massive scale and are responsible for the design, development, and continuous innovation of best-in-class solutions supporting P&G as one of the largest digital advertisers in the world.\n' +
//       '\n' +
//       'As a Full-Stack Engineer you will:\n' +
//       '• Work as a key member of a multi-disciplinary product team including engineers, product managers, and designers delivering innovative digital solutions following Agile & DevOps best practices.\n' +
//       '• Design and develop cloud native and high-performance solutions to real business problems using a variety of technologies including Next.js, Python, Google Cloud, and more\n' +
//       '• Actively participate in sprint planning, daily stand-ups, sprint reviews, and retrospective meetings, ensuring deliverables are met within the agreed timelines.\n' +
//       '• Contribute to technical research, prototyping, estimation, options analyses, and proposals related to business, software and technology objectives.\n' +
//       '• Contribute to the translation of business requirements to detailed technical designs.\n' +
//       '• Assist in management of the product backlog.\n' +
//       '• Write and peer review testable, efficient code ensuring all code complies with company and industry standards for quality and security.\n' +
//       '• Collaborate with third party technology providers.\n' +
//       '\n' +
//       'The Ideal Candidate is:\n' +
//       '\n' +
//       'First and foremost a problem solver, driven by curiosity, growth, and a desire to make things better. You are very comfortable writing code, debugging, and working hands-on. You are excited and not discouraged by working in the unknowns, with a passion for continuous learning and developing your own breadth and depth of technical knowledge, applying that knowledge to solve business problems. You have a strong foundation in Computer Science fundamentals, software engineering best practices, and cloud development. You take pride in the quality of solutions that you build and strive to make everything automated, testable, and scalable. You work collaboratively with others on your team and across different teams, are interested learning from others, and have a desire to share your knowledge with the broader internal software engineering community.\n' +
//       '\n' +
//       'Job Qualifications\n' +
//       '• Strong problem-solving skills paired with experience in programming, such as Python, JavaScript, Java, Go, etc. (Experience in a specific language is not required, though will be expected to learn new languages quickly)\n' +
//       '• Experience using source control management (git) to collaboratively build software: branching, merging, code reviews\n' +
//       '• Ability to communicate technical concepts to technical and non-technical colleagues\n' +
//       '\n' +
//       'Preferred:\n' +
//       '• Experience with Google Cloud Platform\n' +
//       '• A Bachelors or Master’s degree in Computer Science, Informatics, Engineering or related field\n' +
//       '• Experience developing and deploying production web applications using Next.js and Python\n' +
//       '• A history of solving hard problems with creative solutions\n' +
//       '• Desire to write testable code, and the test coverage to go along with it\n' +
//       '• Understanding of CI/CD and DevOps philosophies\n' +
//       '\n' +
//       'What we offer:\n' +
//       '• Responsibilities as of Day 1. You will have project ownership and autonomy to deliver change and results from the beginning.\n' +
//       '• Dynamic and encouraging work environment. At P&G our employees are at the core, we value every individual and encourage initiatives, promoting agility and work/life balance.\n' +
//       '• Continuous mentoring, you will work with hardworking people and receive ongoing coaching and mentoring from your line manager and other colleagues. Corporate and functional training will enable you to succeed and develop from day one.\n' +
//       '• Industry Certifications (ITIL, DevOps, MS portfolio etc.), full additional benefit program like private health care, P&G Dynamic Living programs like sport cards, in-office fitness center, PG stock options, saving plans, lunch subsidy, regular salary increases and possible promotions, flexible work arrangements, mentoring programs & trainings.\n' +
//       '• Big picture understanding of P&G IT and Product Supply organization and its Services in global multi-functional teams with several locations across continents.\n' +
//       '\n' +
//       'Who we are:\n' +
//       '\n' +
//       'P&G was founded over 180 years ago as a simple soap and candle company. Today, we are the world’s largest consumer goods company and home to iconic, trusted brands that make life a little bit easier in small but meaningful ways. We’ve spanned three centuries thanks to three simple ideas: leadership, innovation, and citizenship. The insight, innovation and passion of hardworking teams has helped us grow into a global company that is governed responsibly and ethically, that is open and transparent, and that supports good causes and protects the environment! We commit to provide you with equal opportunities in employment! We value diversity, and we do not discriminate based on race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.\n' +
//       '\n' +
//       'At P&G #weseeequal\n' +
//       '\n' +
//       'We are an equal opportunity employer and value diversity at our company. At P&G we strive to build a culture where everyone feels welcome, included, and able to bring their full selves to work.\n' +
//       '\n' +
//       'We ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process. Please click here if you require an accommodation during the application process. Please make sure to wait to hear back from us regarding your accommodation before proceeding with the online assessment, we thank you in advance for your patience\n' +
//       '\n' +
//       'Job Schedule\n' +
//       'Full time\n' +
//       '\n' +
//       'Job Number\n' +
//       'R000091816\n' +
//       '\n' +
//       'Job Segmentation\n' +
//       'Experienced Professionals (Job Segmentation)'
//   },
//   {
//     id: 'QX4w9yNHoQKZlgFOAAAAAA==',
//     employer: 'stermedia.ai',
//     employerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeQoG0nRhzM4kI2mcrsS02WPlAJKN9qoYKd5E&s=0',
//     title: 'Next.js Frontend Developer',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://jobgether.com/offer/6465e25f52a9a28fbcbca011-nextjs-frontend-developer',
//     city: 'Bielsko-Biała',
//     country: 'PL',
//     description: 'This a Full Remote job, the offer is available from: Poland\n' +
//       '\n' +
//       '"\n' +
//       '\n' +
//       'The team and your role\n' +
//       '\n' +
//       'We are looking for a Frontend Developer to join our team. You will be creating and developing user interfaces for our clients, working with the latest technologies:\n' +
//       '• You will be designing and implementing high quality user interfaces using Next.js and React.js.\n' +
//       '• You will be integrating the frontend with the backend using tRPC and collaborating with the development team to understand requirements and transform them into intuitive and functional user interfaces.\n' +
//       '• You will be maintaining and developing existing applications. Maintaining the highest coding standards and ensuring code quality.\n' +
//       '\n' +
//       'Primary qualifications:\n' +
//       '• Minimum 3 years of experience as a Frontend Developer\n' +
//       '• Experience with Next.js, React.js\n' +
//       '• Experience with TypeScript\n' +
//       '• Knowledge of web standards (HTML5, CSS3, JavaScript, Responsive Design)\n' +
//       '• Knowledge of application state management (e.g. Redux, MobX, Zustand)\n' +
//       '• Familiarity with version control systems such as Git\n' +
//       '• Ability to work in a team, communication skills\n' +
//       '• Very good knowledge of Polish and English\n' +
//       '\n' +
//       'It is great if you have:\n' +
//       '• Experience with tRPC\n' +
//       '• Knowledge of relational databases\n' +
//       '• Experience with CI/CD tools\n' +
//       '• Experience with CMS system integration\n' +
//       '• Knowledge of unit and integration testing (e.g. Jest, Cypress)\n' +
//       '\n' +
//       'Salary:\n' +
//       '\n' +
//       '100 - 120 PLN netto/h\n' +
//       '\n' +
//       'We offer you:\n' +
//       '• budget on self-development per year\n' +
//       '• possibility to contribute to a variety of interesting projects\n' +
//       '• internal workshops\n' +
//       '• personal branding (articles, conference speaker, internal workshop leader)\n' +
//       '• flexible work hours\n' +
//       '• remote work possibility\n' +
//       '• chillout room / free beverages / team & company events\n' +
//       '• friendly atmosphere\n' +
//       '• MultiSport\n' +
//       '• LuxMed\n' +
//       '\n' +
//       '"This offer from "stermedia.ai" has been enriched by Jobgether and got a 77% flex score.'
//   },
//   {
//     id: '5EM75OqtN6r4Gdf2AAAAAA==',
//     employer: 'Sigma IT Poland',
//     employerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JmSe52Reo7dnqdVwjtRBfRMPxo5RS_v3OVXi&s=0',
//     title: 'Senior Frontend Developer with Next.js',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://pl.linkedin.com/jobs/view/senior-frontend-developer-with-next-js-at-sigma-it-poland-3832022110',
//     city: null,
//     country: 'PL',
//     description: 'Sigma IT Poland is a division within NEXER GROUP – a custom software development company. In Poland, we started in 2017 and are now 180+ crew with an office in Wrocław, Warsaw, and Cracow. We have the opportunity to work with world-renowned brands from Scandinavia, the UK, and Western Europe. Our goal is to grow stronger, rather in competencies than in pure numbers.\n' +
//       '\n' +
//       'If you like what we do, see our offer, maybe it is you we will have the pleasure to meet! :)\n' +
//       '\n' +
//       'We are looking for a Senior Frontend Developer who will take a part in a smal projects of car auction for a large Swedish mobility company.\n' +
//       '\n' +
//       "The current platform facilitates B2B transactions between car dealers. Dealers place bids in the system, but the transactions are not processed through the system, but are done separately through accounting. The web application exists as a standalone solution outside the current product ecosystem, which is a weakness. We're going to build a new solution from scratch, hosted and managed by us. It will integrate with existing systems and be continually updated. The focus is on rebuilding the existing platform and replicating the functionality with minor adjustments. We need to anticipate the expansion of the platform into multiple countries.\n" +
//       '\n' +
//       'You will earn:\n' +
//       '• B2B: 120 - 140 PLN + VAT/h\n' +
//       '• UoP: 16 800 - 20 000 PLN gross/month\n' +
//       '\n' +
//       'You might be the perfect match if you are/have:\n' +
//       '• 5+ years of professional experience working as Frontend Developer, including 1+ with Next.js;\n' +
//       '• In-depth knowledge of TypeScript environment;\n' +
//       '• Some experience with React.js;\n' +
//       '• Experience working in Agile methodology;\n' +
//       '• Team player, open to discussion and collaboration, but able to work independently when required;\n' +
//       '• Fluent in English to work effectively in an international team;\n' +
//       '• Location in Poland for easy signing of cooperation offers and occasional team meetings.\n' +
//       '\n' +
//       'Moreover, we appreciate skills in these areas:\n' +
//       '• Availability to start work as soon as possible;\n' +
//       '• Experienced in working in start-up or small teams.\n' +
//       '\n' +
//       'By joining us, you gain the following:\n' +
//       '• Exciting projects, a multinational and inspiring environment for talented IT professionals. Various projects in diverse, cutting-edge industries. Biotech, Automotive, Internet of Things, or AR/VR;\n' +
//       '• Code review done by skilled engineers (over 60% of our team are people with over 5 years of experience in the industry);\n' +
//       '• Becoming part of a team of motivated individuals is here to stay. We value loyalty – as you grow, we grow with you;\n' +
//       "• Respect for your private life so you don't have to work overtime or on weekends;\n" +
//       "• Online and offline integration events - including remote X-mass party and annual WOW tour trip abroad - so far we've been in Cape Town and Barcelona.\n" +
//       '\n' +
//       'Perks and benefits:\n' +
//       '• Fully remote work from your convenience or in our office in Wrocław, Warsaw or Cracow;\n' +
//       '• Choice of employment form: we offer B2B or employment contract;\n' +
//       '• Free benefits such as Luxmed, Multisport, and life insurance in Nationale Nederlanden;\n' +
//       '• Attractive referral system (9,5k for senior, 6k for mid, 2,5k for junior);\n' +
//       '• Personal Training Budget and Passion Day - an extra day off for your passion, hobby, and growth to spend as you please;\n' +
//       '• Flexible working hours with no micro-management approach. Our core hours are 9-15, the rest of the working time is your decision;\n' +
//       '• We provide high-quality work equipment + 2 additional monitors and accessories.\n' +
//       '\n' +
//       'If you apply for this position and match our expectations, then:\n' +
//       '\n' +
//       '1) You will be invited to an online meeting with the Recruiter to learn more about the project and ensure that we meet your expectations.\n' +
//       '\n' +
//       '2) You will be given a coding challenge to complete at home;\n' +
//       '\n' +
//       '3) You will have a short online meeting with our client.\n' +
//       '\n' +
//       'Submit your application online in one easy step! Apply now!'
//   },
//   {
//     id: 'a-YHGW-4VdDdIT98AAAAAA==',
//     employer: 'Sigma Software',
//     employerLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Sigma_Software.svg',
//     title: 'Senior Front-End (Next.js) Developer (AdTech)',
//     employerWebsite: 'http://sigma.software',
//     employmentType: 'FULLTIME',
//     jobLink: 'https://pl.linkedin.com/jobs/view/senior-front-end-next-js-developer-adtech-at-sigma-software-3817624933',
//     city: 'Warszawa',
//     country: 'PL',
//     description: 'Company Description\n' +
//       '\n' +
//       "If you are a Senior Front-End Developer proficient in Next.js and fueled by a passion for cutting-edge technology, we have an exciting opportunity for you. We're dedicated to significantly impacting the digital landscape and empowering users to craft and execute thriving advertising campaigns through AI and advanced statistical methods.\n" +
//       '\n' +
//       'Join us in redefining the boundaries of online community building and revolutionizing the effectiveness of advertising campaigns.\n' +
//       '\n' +
//       'CUSTOMER\n' +
//       '\n' +
//       'Our Customer is developing a pioneering social engagement platform that fosters vibrant online communities around digital content. They equip publishers and brands with robust tools for fostering audience interaction and cultivating thriving communities.\n' +
//       '\n' +
//       'PROJECT\n' +
//       '\n' +
//       'In this project, our team leverages artificial intelligence and employs a range of statistical methodologies to create an innovative AdManager platform.\n' +
//       '\n' +
//       'Job Description\n' +
//       '• Designing and implementing front-end parts of applications based on provided UX designs from scratch\n' +
//       '• Delivering a high level of quality\n' +
//       '• Promoting clean code and design patterns/principles\n' +
//       '• Following best engineering practices and company/client guidelines\n' +
//       '• Being a great communicator to be able to actively collaborate and get context for tasks\n' +
//       '• Being an active contributor to all team-related meetings, events, and ceremonies\n' +
//       '• Actively and permanently working on self-development and self-education\n' +
//       '\n' +
//       'Qualifications\n' +
//       '• At least 5 years of practical experience in software development and have strong engineering skills\n' +
//       '• At least 4+ years of experience with Next.js\n' +
//       '• Good experience with JavaScript/TypeScript\n' +
//       '• Familiar with at least one more framework (e.g., ReactJS, Angular, Vue.js, etc.)\n' +
//       '• Good understanding of how to build usable UI\n' +
//       '• Understanding the business and translating business expectations into technical descriptions\n' +
//       '• Understanding of software design principles and software architecture\n' +
//       '• Upper-Intermediate level of English\n' +
//       '\n' +
//       'WOULD BE A PLUS:\n' +
//       '• Knowledge of back-end development\n' +
//       '• Experience in AdTech domain (DSP/SSP/Ad exchange/Bidders)\n' +
//       '\n' +
//       'Additional Information\n' +
//       '\n' +
//       'PERSONAL PROFILE\n' +
//       '• High level of self-organization\n' +
//       '• Ability to work independently\n' +
//       '• A solid sense of ownership and responsibility\n' +
//       '• Ability to get things done\n' +
//       '• Highly personable, with good communication skills'
//   },
//   {
//     id: '5DDdaiIi-ShYfxW0AAAAAA==',
//     employer: 'Sigma Software Group',
//     employerLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Sigma_Software.svg',
//     title: 'Senior Front-End (Next.js) Developer (AdTech)',
//     employerWebsite: 'http://sigma.software',
//     employmentType: 'FULLTIME',
//     jobLink: 'https://jobgether.com/offer/65bae6b53122baffeb5786e3-senior-front-end-next.js-developer-adtech',
//     city: 'Warszawa',
//     country: 'PL',
//     description: 'This a Full Remote job, the offer is available from: Poland\n' +
//       '\n' +
//       '"\n' +
//       '\n' +
//       'Company Description\n' +
//       '\n' +
//       "If you are a Senior Front-End Developer proficient in Next.js and fueled by a passion for cutting-edge technology, we have an exciting opportunity for you. We're dedicated to significantly impacting the digital landscape and empowering users to craft and execute thriving advertising campaigns through AI and advanced statistical methods.\n" +
//       '\n' +
//       'Join us in redefining the boundaries of online community building and revolutionizing the effectiveness of advertising campaigns.\n' +
//       '\n' +
//       'CUSTOMER\n' +
//       '\n' +
//       'Our Customer is developing a pioneering social engagement platform that fosters vibrant online communities around digital content. They equip publishers and brands with robust tools for fostering audience interaction and cultivating thriving communities.\n' +
//       '\n' +
//       'PROJECT\n' +
//       '\n' +
//       'In this project, our team leverages artificial intelligence and employs a range of statistical methodologies to create an innovative AdManager platform.\n' +
//       '\n' +
//       'Job Description\n' +
//       '• Designing and implementing front-end parts of applications based on provided UX designs from scratch\n' +
//       '• Delivering a high level of quality\n' +
//       '• Promoting clean code and design patterns/principles\n' +
//       '• Following best engineering practices and company/client guidelines\n' +
//       '• Being a great communicator to be able to actively collaborate and get context for tasks\n' +
//       '• Being an active contributor to all team-related meetings, events, and ceremonies\n' +
//       '• Actively and permanently working on self-development and self-education\n' +
//       '\n' +
//       'Qualifications\n' +
//       '• At least 5 years of practical experience in software development and have strong engineering skills\n' +
//       '• At least 4+ years of experience with Next.js\n' +
//       '• Good experience with JavaScript/TypeScript\n' +
//       '• Familiar with at least one more framework (e.g., ReactJS, Angular, Vue.js, etc.)\n' +
//       '• Good understanding of how to build usable UI\n' +
//       '• Understanding the business and translating business expectations into technical descriptions\n' +
//       '• Understanding of software design principles and software architecture\n' +
//       '• Upper-Intermediate level of English\n' +
//       '\n' +
//       'WOULD BE A PLUS:\n' +
//       '• Knowledge of back-end development\n' +
//       '• Experience in AdTech domain (DSP/SSP/Ad exchange/Bidders)\n' +
//       '\n' +
//       'Additional Information\n' +
//       '\n' +
//       'PERSONAL PROFILE\n' +
//       '• High level of self-organization\n' +
//       '• Ability to work independently\n' +
//       '• A solid sense of ownership and responsibility\n' +
//       '• Ability to get things done\n' +
//       '• Highly personable, with good communication skills\n' +
//       '\n' +
//       '"This offer from "Sigma Software Group" has been enriched by Jobgether and got a 77% flex score.'
//   },
//   {
//     id: 'NQXfQJP8mkUv_ppEAAAAAA==',
//     employer: 'Prosple',
//     employerLogo: null,
//     title: 'Frontend NextJS Developer @ Prosple',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://www.hitpraca.pl/oferta/frontend-nextjs-developer--prosple-plnv215d61d93ed68c4/',
//     city: null,
//     country: 'PL',
//     description: "ProspleStudents come first. One of the key pillars of our mission and values is the belief that putting students first is beneficial for both students and employers in the long term. This includes being honest with students about career opportunities and ensuring that their education is relevant and valued by employers. The ultimate goal is to create a sustainable business model that benefits all parties involved, including students, employers, and the university.Own the outcome. At Prosple, employees are expected to take responsibility for the outcome of their work and to focus on achieving great results rather than just following a specific process. This involves being proactive and not waiting to be told what to do, as well as taking ownership of one's own career progression and personal development. Prosple supports this by providing opportunities for challenging work and a supportive community of colleagues. It is important for employees to be externally aware and knowledgeable about the business, and to be able to contribute outside of their own area of specialisation. However, it is also important to balance this ownership mentality with the willingness to speak up and share any problems or challenges that may arise.Play the long game. Prosple has a philosophy of playing the long game, which means prioritising long-term sustainability and culture over rapid short-term growth. We have consistently made decisions that prioritise the long-term, even if it means declining investment offers or waiting to hire the right candidate for a role. Prosple has grown consistently at a rate of 10-40% per year, and values win-win situations in which all parties benefit in the present and in the future. We also prioritise building a business with scale and network effects, as these are the only competitive advantages that have the potential to stand the test of time. Additionally, we focus on operating a lean business in order to weather tough times and compete with larger rivals.Speak the truth. Prosple values speaking the truth as a fundamental behaviour that is essential for building trust, transparency, and accountability. This means communicating openly and candidly, and saying what one thinks, even if it is difficult or controversial. It also means putting in the effort to make things easy to understand and not withholding material information or telling half-truths. Speaking the truth also means listening well and assuming good intentions, and being honest without being rude. It is important to create a culture where everyone feels comfortable speaking the truth, and this includes not punishing those who make mistakes, as this can stifle the emergence of new ideas.Work life balance, Culture & Vibe. One of the biggest things Prosple has to offer is the incredible flexibility and amazing work environment and culture. Some of the things that make us special:100% remote and asynchronous work - work where and when you wantWe value outputs over inputs; there are no prizes for how long you sit at your desk, but great results are celebrated wildly.Our asynchronous work culture means you can schedule your work around your life (as opposed to your life around work).We’re a high-performing team that gives everything to help students make better early career decisions.What we’ve built. We are a small Engineering squad, but we are scrappy, and together a handful of incredibly passionate and talented engineers have managed to build a platform that has already changed the lives of millions of students (and we’re just getting started!). We have developed a multi-tenant platform that powers over 300+ student discovery portals, including Prosple brands, universities and employers. We’re looking for a talented NextJS engineer who is hungry to unleash their full potential working in a remote culture, data/tech startup. . As a NextJS developer you will within the Engineering team deliver amazing user experiences for students and graduates around the world. You should be comfortable in React, modern Javascript and of course NextJS.Experience working as part of a development team, building a software product.Excellent collaboration and communication skills.Strong proficiency in modern JavaScript.Thorough understanding of React.js and its core principles.Ideally experience with Apollo Client for GraphQL APIs and Apollo Link for state management.Familiarity with RESTful APIs.Sound knowledge of CSS, in particular using Styled Components.Familiarity with newer specifications of ECMAScript.Knowledge of isomorphic React, specifically using NextJS.Knowledge of modern authorization and authentication workflows (e.g Authorization Code Workflow, PKCE, Implicit Workflow, etc).Familiarity with modern front-end build pipelines and tools.Experience with common front-end development tools such as Babel, Webpack, NPM, etc.Ability to understand business requirements and translate them into technical requirements and specifications.A knack for benchmarking and optimization.Familiarity with Git as a version control system.Complete familiarity with Docker as a local development environment. The ideal candidate will have an exceptional knowledge of the latest in modern front-end development trends but most of all a proactive, problem solving attitude. We are looking for someone with an obsession for no-compromising performance and quality, that can deal with complex challenges and think on their feet. As an Engineer at Prosple your typical day will revolve around working tasks established in 2 week sprints. Typically you will work on a given feature and coordinate directly with the Product team to help scope, implement and release the feature into production. You will mostly be using Slack, JIRA and Docker as your weapons of choice, alongside your favourite IDE. You will also be working on production issues, helping release hotfixes and get incremental exposure to the entire Prosple ecosystem including microservices, AWS infrastructure, caching strategies and our frontend applications. ProspleStudents come first. One of the key pillars of our mission and values is the belief that putting students first is beneficial for both students and employers in the long term. This includes being honest with students about career opportunities and ensuring that their education is relevant and valued by employers. The ultimate goal is to create a sustainable business model that benefits all parties involved, including students, employers, and the university.Own the outcome. At Prosple, employees are expected to take responsibility for the outcome of their work and to focus on achieving great results rather than just following a specific process. This involves being proactive and not waiting to be told what to do, as well as taking ownership of one's own career progression and personal development. Prosple supports this by providing opportunities for challenging work and a supportive community of colleagues. It is important for employees to be externally aware and knowledgeable about the business, and to be able to contribute outside of their own area of specialisation. However, it is also important to balance this ownership mentality with the willingness to speak up and share any problems or challenges that may arise.Play the long game. Prosple has a philosophy of playing the long game, which means prioritising long-term sustainability and culture over rapid short-term growth. We have consistently made decisions that prioritise the long-term, even if it means declining investment offers or waiting to hire the right candidate for a role. Prosple has grown consistently at a rate of 10-40% per year, and values win-win situations in which all parties benefit in the present and in the future. We also prioritise building a business with scale and network effects, as these are the only competitive advantages that have the potential to stand the test of time. Additionally, we focus on operating a lean business in order to weather tough times and compete with larger rivals.Speak the truth. Prosple values speaking the truth as a fundamental behaviour that is essential for building trust, transparency, and accountability. This means communicating openly and candidly, and saying what one thinks, even if it is difficult or controversial. It also means putting in the effort to make things easy to understand and not withholding material information or telling half-truths. Speaking the truth also means listening well and assuming good intentions, and being honest without being rude. It is important to create a culture where everyone feels comfortable speaking the truth, and this includes not punishing those who make mistakes, as this can stifle the emergence of new ideas.Work life balance, Culture & Vibe. One of the biggest things Prosple has to offer is the incredible flexibility and amazing work environment and culture. Some of the things that make us special:100% remote and asynchronous work - work where and when you wantWe value outputs over inputs; there are no prizes for how long you sit at your desk, but great results are celebrated wildly.Our asynchronous work culture means you can schedule your work around your life (as opposed to your life around work).We’re a high-performing team that gives everything to help students make better early career decisions.What we’ve built. We are a small Engineering squad, but we are scrappy, and together a handful of incredibly passionate and talented engineers have managed to build a platform that has already changed the lives of millions of students (and we’re just getting started!). We have developed a multi-tenant platform that powers over 300+ student discovery portals, including Prosple brands, universities and employers. ,[Developing new user-facing features using NextJS from end to end, being involved in both the initial creative process and the implementation. , Building reusable components and front-end libraries for future use., O"
//   },
//   {
//     id: 'Xa6bL9rM1jkc009CAAAAAA==',
//     employer: 'Grupa Kapitałowa VOX',
//     employerLogo: null,
//     title: 'Full Stack Developer - Reactjs + Nextjs MID',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://www.hitpraca.pl/oferta/full-stack-developer-reactjs--nextjs-mid-plnv6ddcffc68518df4/',
//     city: 'Poznań',
//     country: 'PL',
//     description: 'Dzięki, że tu zaglądasz. Być może znasz już nasze produkty?. Grupę Kapitałową VOX tworzą firmy działające w branży wyposażenia wnętrz i wykończenia domu. Jej trzon stanowią trzy spółki tworzące markę VOX - Składy VOX sp. z o.o. sp.k, Meble VOX sp. z o.o. sp.k i Profile VOX sp. z o.o. sp.k. W naszych oddziałach, biurach i fabrykach równie ważne są precyzyjne standardy, co budowane relacje, postawy i codzienne wartości. Tylko tak buduje się organizację, w której chcesz realizować się przez lata. Inicjatywa, demokracja i wspólne szukanie rozwiązań - to wartości, które pozwalają nam budować stabilny i nierotujący zespół IT. Działamy zwinnie, choć nie nazywamy tego w oparciu o konkretną metodologię - wykuwamy własną drogę, którą ciągle udoskonalamy. Wraz z rozwojem narzędzi takich jak VOXBOX oraz dalszego rozwoju naszych aplikacji webowych (skalowalny e-commerce, platforma omnichannel, konfiguratory itd.), rozszerzamy Zespół. Zależy nam na Osobach, które chcą z nami związać się na stałe. FULL STACK DEVELOPER - REACT.JS + NEXT.JS. Miejsce pracy: Poznań lub zdalnie. Czym będziesz się zajmować?. Tworzeniem i wdrażaniem aplikacji webowych oraz pomocą w utrzymaniu i rozwoju istniejących Udziałem w projektowaniu aplikacji oraz nowych funkcjonalności Bieżącym wsparciem użytkownika dla tworzonych i rozwijanych systemów Współpracą w ramach analizy i testowania aplikacji webowych Integracją aplikacji webowych z innymi aplikacjami i usługami wewnętrznymi i zewnętrznymi Przygotowaniem specyfikacji, szacowaniem pracochłonności zadań dla celów ofertowych. Co jest dla nas ważne?. Bardzo dobra znajomośź technologii front-end - HTML, CSS, JavaScript, Bootstrap, React.js, Next.js Dobra znajomość PHP (minimum 2 lata praktycznego doświadczenia) Znajomość bazy danych MySQL/MariaDb Umiejętność posługiwania się systemem kontroli wersji GIT Umiejętność pracy z systemem Linux (nie będziesz musiał administrować serwerami - mamy własnych administratorów) Minimum 4 lata doświadczenia komercyjnego w tworzeniu aplikacji webowych......mile widziane?. Znajomość frameworka PHP Symfony 3+ Wiedza z obszaru tworzenia i automatyzacji testów jednostkowych, akceptacyjnych, integracyjnych Wiedza z obszaru CI/CD Doświadczenie w pracy z Code Review Doświadczenie w projektowaniu API i integracji z API zewnętrznych usług Znajomość nowych technologii frontendowych (np. TypeScript, PWA) Znajomość rozwiązań chmurowych Doświadczenie w obszarze e-commerce. Co od nas?. Marka, doświadczenie – na rynku obecni jesteśmy od około 30 lat. Szukamy rozwiązań, przekuwamy „niemożliwe” we „wdrożone”. Ciągle się uczymy i ugruntowujemy swoją pozycję na rynku Stabilizacja, wiedza, współpraca – w ramach naszych zespołów staż pracy powyżej 5 lat nie jest niczym szczególnym. Dlatego możesz liczyć na codzienne wsparcie, burze mózgów i przyjaźnie, które trwają nie tylko w godzinach pracy Rozwój kompetencji twardych… – finansujemy uczestnictwo w konferencjach i eventach programistycznych, oferujemy dofinansowanie do dalszego kształcenia oraz lektoraty językowe …oraz miękkich – w ramach cyklu szkoleń i warsztatów Wszystkie niezbędne narzędzia pracy – umożliwiające pracę zarówno w biurze jak i zdalnie Technologie – działamy zwinnie, choć nie nazywamy tego w oparciu o konkretną metodologię - wykuwamy własną drogę, którą ciągle udoskonalamy. Miejsce pracy – możesz korzystać z naszego nowoczesnego biura niedaleko centrum Poznania, jak również w pełni korzystać z uroków pracy zdalnej. …a z niespodzianek?. Zniżki na cały asortyment VOX – idealne, jeśli się urządzasz, budujesz lub po prostu chcesz odświeżyć wnętrze Dofinansowanie karty sportowej. Administratorem danych jest Services VOX sp. z o.o. sp. k. z siedzibą w Czerwonaku (62-004) przy ul. Gdyńskiej 143, z którym można skontaktować się listownie pod wskazanym powyżej adresie lub elektronicznie na adres iod@vox.pl. . Państwa dane osobowe będą przetwarzane na potrzeby przeprowadzenia i rozstrzygnięcia procesu rekrutacji oraz uwzględnienia Państwa aplikacji w przyszłych procesach rekrutacji prowadzonych przez administratora, jeżeli wyraziliście na to zgodę. Przysługuje Państwu prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wycofania zgody oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.'
//   },
//   {
//     id: '9mDVNjJUXZnd6EdUAAAAAA==',
//     employer: 'YourCode - Award Winning IT & Digital Consultancy',
//     employerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZCBSW724eiSip7BpaWEle9gQ6Ua3E3BJce3F&s=0',
//     title: 'Senior Frontend Developer - Reactjs, TypeScript, Next.js',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://pl.linkedin.com/jobs/view/senior-frontend-developer-reactjs-typescript-next-js-at-yourcode-award-winning-it-digital-consultancy-3837192344',
//     city: 'Warszawa',
//     country: 'PL',
//     description: 'Hybrid - 1 or 2 times in Warsaw per week\n' +
//       '\n' +
//       'Telco sector\n' +
//       '\n' +
//       'YourCode Group is delighted to be working with a leading telecommunications client that is looking to expand their Frontend Developer team with the goal of developing and maintaining systems on a telecommunications portal and mobile application.\n' +
//       '\n' +
//       'The system is build on SAP Hybris Commerce and is being developed on the K8S Microservices platform.\n' +
//       '\n' +
//       'Duties Of The Job\n' +
//       '• Working as a Senior Front-End Developer in a SCRUM Agile team, developing and maintaining the new telecommunications portal\n' +
//       '• Using React, TypeScript and Next.js technologies\n' +
//       '• Having some involvement in the development of ecosystem architecture\n' +
//       '• Working with the wider IT department within production department\n' +
//       '\n' +
//       'Experience Required\n' +
//       '• Min. 5 years of professional experience in developing frontend solutions with a similar tech stack\n' +
//       '• Good knowledge of React, TypeScript\n' +
//       '• Knowledge of REST APIs\n' +
//       '• Understanding of Unit Tests\n' +
//       '\n' +
//       'This is a full time opportunity and we are starting the interview process immediately. For more information please submit your application.\n' +
//       '\n' +
//       'Senior Frontend Developer - Reactjs, TypeScript, Next.js\n' +
//       '\n' +
//       'Hybrid - 1 or 2 times in Warsaw per week\n' +
//       '\n' +
//       'Telco sector'
//   },
//   {
//     id: 'TOuP_WhcyvdiaCNeAAAAAA==',
//     employer: 'GPC Global Technology Center',
//     employerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXui9d22CYuXttznpdfEjUXggXtwigddvMiNK&s=0',
//     title: 'Senior Software Engineer (React/Next JS)',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://pl.linkedin.com/jobs/view/senior-software-engineer-react-next-js-at-gpc-global-technology-center-3790155805',
//     city: 'Kraków',
//     country: 'PL',
//     description: 'Genuine Parts Company founded in 1928 and based in Atlanta, Georgia, is a leading specialty distributor engaged in the distribution of automotive and industrial replacement parts and value-added services. The Company operates a global portfolio of businesses with more than 10,000 locations across the world, employing 58 000 people.\n' +
//       '\n' +
//       'The GPC Global Technology Center in Krakow, established in 2022 by Genuine Parts Company is an innovative research and development facility supporting GPC’s digital transformation efforts.\n' +
//       '\n' +
//       "The hub is focused on the development of advanced technologies and solutions that support GPC's operations and growth.\n" +
//       '\n' +
//       'The GPC Global Technology Center team works on a wide range of projects assisting in areas such as e-commerce and data platforms, supply chain solutions, selling systems, and cyber security. This is home to a team of highly skilled IT engineers who are dedicated to driving innovation and delivering cutting-edge solutions for GPC.\n' +
//       '\n' +
//       'As a Senior Software Engineer (UI Developer), you will be an integral part of our growing eCommerce team, solving challenging problems quickly and efficiently, focusing on front-end development. The successful candidate will work daily with our UI/UX design team and be responsible for implementing new solutions in React, SASS, and CSS, along with the maintenance of existing software.\n' +
//       '\n' +
//       'Responsibilities\n' +
//       '\n' +
//       'Solid UI development is an integral part of our eCommerce solutions. We build everything utilizing a combination of both static and real-time SSR to maximize our SEO and our users’ experience. We place a heavy emphasis on performance and user experience and incorporate Google Lighthouse performance tests to verify any changes added to not impact our scores adversely. Testing (automated and manual) is a key element of our development process as well.\n' +
//       '\n' +
//       'Requirements\n' +
//       '• Bachelor’s Degree (or equivalent experience)\n' +
//       '• At least 3 years’ experience as a frontend web developer with recent React development.\n' +
//       '• React\n' +
//       '• Next JS\n' +
//       '• SASS\n' +
//       '• CSS\n' +
//       '• Google Lighthouse\n' +
//       '• Jest (unit testing)\n' +
//       '• Cypress (integrated UI testing)\n' +
//       '• Storybook (visual testing and documentation)'
//   },
//   {
//     id: 'KczXtSKt1EvvhQpwAAAAAA==',
//     employer: 'HL Tech',
//     employerLogo: null,
//     title: 'Senior Frontend Engineer (React, Next.js, AWS) @ HL Tech',
//     employerWebsite: null,
//     employmentType: 'FULLTIME',
//     jobLink: 'https://nofluffjobs.com/job/senior-frontend-engineer-react-next-js-aws-hl-tech-katowice',
//     city: 'Warszawa',
//     country: 'PL',
//     description: 'Senior Frontend Engineer (React, Next.js, AWS) @ HL Tech Fully remote job PLN per month: 20.0k-28.5k (B2B), 18.0k-25.0k (UoP)'
//   }
// ]

const Page = async ({ searchParams }: SearchParamsProps) => {
  const countries = await getCountires();

  const userCountry = await getUserCountry();

  const jobs = await getJobs({page: searchParams.page ? +searchParams.page : 1, query: searchParams.q});

  // @ts-ignore
  const isNext = jobs.length < 10;

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags"
          otherClasses="flex-1"
        />
        <Filter
          filters={countries}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          defaultFilter={userCountry.toLowerCase()}
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {jobs.length > 0 ? (
          jobs.map((job: any) => <JobCard key={job.id} job={job} />)
        ) : (
          <NoResult
            title="There's no jobs to show"
            description="Please try again later"
            link="/"
            linkTitle="Go back to home page"
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams.page ? +searchParams.page : 1}
          isNext={!isNext}
        />
      </div>
    </>
  );
};

export default Page;
