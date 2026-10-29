// Knowledge base for the portfolio chatbot (the "documents" in RAG).
// One fact-dense chunk per topic. Keep each chunk self-contained so it still makes sense when
// retrieved alone. `keywords` hold synonyms visitors might use that the text itself does not.
// Add new chunks here (blog posts, new projects, certificates) and retrieval picks them up.
// Do not put private details (phone number, home address) in this file: the bot may repeat them.

module.exports = [
  {
    id: 'profile',
    title: 'Who Saravanan is',
    keywords: 'about summary introduction bio who background developer',
    text: `Saravanan S is a full stack web developer from Dharapuram, Tamil Nadu, India. He holds a B.Tech in Computer Science and Business Systems from Bannari Amman Institute of Technology (CGPA 8.42, 2022-2026). He builds with the MERN stack (MongoDB, Express, React, Node.js) and Flask, works with relational databases (MySQL, Microsoft SQL Server), and writes Java and C for problem solving. He is currently an intern at TLX Tech Solutions, an Aptean subsidiary. He is a BITHACKS'23 hackathon finalist, a Reliance Foundation Scholar, has led teams on several end-to-end projects, and has trained 120+ students in HTML, CSS and Java.`,
  },
  {
    id: 'contact',
    title: 'How to contact Saravanan',
    keywords: 'contact reach email hire linkedin github medium leetcode social message talk',
    text: `Email: saravanansomasundharamk@gmail.com. LinkedIn: https://www.linkedin.com/in/saravanan77/. GitHub: https://github.com/Saravanan7781. Medium: https://medium.com/@saravanansomasundharamk. LeetCode: https://leetcode.com/u/saravanansomasundharamk/. The portfolio also has a contact form near the bottom that opens the visitor's mail app with the message ready to send.`,
  },
  {
    id: 'internship',
    title: 'Internship at TLX Tech Solutions',
    keywords: 'internship intern experience work job company tlx aptean langflow mcp rag llm tsql fabric currently employment',
    text: `Since August 2026 Saravanan has been an intern at TLX Tech Solutions (P) Ltd, a subsidiary of Aptean, a global product-based software company that builds industry-specific enterprise software for transportation, logistics, manufacturing, retail, food and beverage, and life sciences. There he builds LLM workflows using Langflow, and develops custom skills and MCP servers that extend the Langflow platform. Tools and technologies: Langflow, MCP, RAG, LLM, T-SQL, Microsoft Fabric, SSMS.`,
  },
  {
    id: 'education',
    title: 'Education',
    keywords: 'education college university degree school cgpa marks percentage studied bit btech graduate',
    text: `B.Tech Computer Science and Business Systems at Bannari Amman Institute of Technology, 2022-2026, CGPA 8.42. Higher Secondary Certificate at Ponnu Matriculation Higher Secondary School, 2021-2022, 94%. Secondary School Certificate at the same school, 2019-2020, 90%.`,
  },
  {
    id: 'skills',
    title: 'Technical skills',
    keywords: 'skills technologies stack tools languages frameworks database programming know good at proficiency',
    text: `Programming languages and core: Java, C, T-SQL, object-oriented programming. Web: HTML, CSS, JavaScript, React, Express, Node.js, Flask, the MERN stack. Databases: MySQL, MongoDB, Microsoft SQL Server. AI and data: Langflow, MCP, RAG, LLMs, Microsoft Fabric, SSMS. Tools: Git, GitHub, Postman, Vercel, JWT. Areas of interest: object-oriented programming, web development, data engineering. On the portfolio he self-rates MongoDB, HTML and CSS highest (around 80% expertise), React and Node.js around 70%, Java around 70%, C around 50%.`,
  },
  {
    id: 'project-placemate',
    title: 'Project: PlaceMate',
    keywords: 'placemate placement portal college project mern chatbot interview team lead recruitment drive',
    text: `PlaceMate is a multi-college placement management web app built with the MERN stack (June-September 2025). College admins create a workspace, post company registration drives with eligibility and deadlines, and the app emails eligible, non-blocklisted students automatically. Students keep a profile that autofills registration forms, get Google Calendar reminders for deadlines, track their placement history, and use a discussion forum for grievances. Seniors who got offers are invited to share interview experiences, which admins approve and publish. Admins can download registered students as Excel and shortlist students for the next rounds. Saravanan also built a chatbot that helps students prepare for placements using the interview experiences of previously placed students. His role: front-end and back-end developer and team lead of a team of 3. Code: https://github.com/Saravanan7781/placemate`,
  },
  {
    id: 'project-bizzlink',
    title: 'Project: BizzLink',
    keywords: 'bizzlink startup entrepreneur investor funding platform project crowdfunding',
    text: `BizzLink is a web platform that connects aspiring young entrepreneurs with investors so their innovations can reach the world. Entrepreneurs showcase their ideas and patents, and investors discover and back them. Built with React and Node.js. Code: https://github.com/Saravanan7781/BizzLink`,
  },
  {
    id: 'project-grievance',
    title: 'Project: Hostel Grievance Management',
    keywords: 'grievance hostel complaint bit project mern dashboard supervisor vercel live demo',
    text: `Hostel Grievance Management (February-May 2024) digitalises complaints at Saravanan's college hostel, replacing a paper note. Students can submit a complaint any time, from anywhere, with image proof, and supervisors get dashboards to track them. Built with the MERN stack by a team of 2, where Saravanan was both front-end and back-end developer. Live demo: https://bitgrievancemanagement.vercel.app. Code: https://github.com/Saravanan7781/bitGrievanceManagement`,
  },
  {
    id: 'project-appointment',
    title: 'Project: Appointment Booking System',
    keywords: 'appointment booking doctor patient flask python mysql bithacks hackathon project slots',
    text: `The Appointment Booking System (September-November 2023) lets patients book appointments with doctors based on the slots doctors make available. A booked slot disappears immediately so other patients never wonder whether it is still free. It was shortlisted to the finale of BITHACKS'23 in the Web Development domain. Saravanan was the front-end developer and team lead of a team of 5. Stack: MySQL, Flask, Python, HTML, CSS, JavaScript. Code: https://github.com/Saravanan7781/AppointmentBookingSystem`,
  },
  {
    id: 'project-small',
    title: 'Smaller projects: landing page, expense tracker, console apps',
    keywords: 'landing page expense tracker bank application leetcode dsa java c problems small projects timed test',
    text: `Business Landing Page: built for an application development round with a one-day time limit. Live: https://landing-page-delta-woad.vercel.app. Expense Tracker: built for a two-hour test, lets you add expenses and filter them by date. BankApplication: a console-based Java app to practise object-oriented programming. He also keeps LeetCode solutions in Java (repo DS) and C (repo problems-C). All on https://github.com/Saravanan7781`,
  },
  {
    id: 'hackathon',
    title: "BITHACKS'23 hackathon",
    keywords: 'hackathon bithacks bit hack finalist achievement award competition 36 hour',
    text: `Saravanan was a finalist at BITHACKS'23, a 36-hour software hackathon held at Bannari Amman Institute of Technology. His team of 5, which he led as front-end developer, built the Appointment Booking System and was shortlisted to the finale in the Web Development domain.`,
  },
  {
    id: 'teaching',
    title: 'Night Skill teaching',
    keywords: 'teaching trainer night skill train students mentor java html css oop juniors taught',
    text: `Saravanan teaches juniors in the Night Skill sessions, evening hands-on classes in the college lab. He trained 60+ students in HTML and CSS over 12 days, and another 60+ students in Java and OOP fundamentals over 12 days.`,
  },
  {
    id: 'scholarship',
    title: 'Reliance Foundation Scholarship',
    keywords: 'scholarship reliance foundation scholar award funding',
    text: `Saravanan is a Reliance Foundation Scholar.`,
  },
  {
    id: 'portfolio',
    title: 'About this portfolio site',
    keywords: 'portfolio website site built react how made source code vercel chatbot rag',
    text: `This portfolio is a React app deployed on Vercel at https://saravanan7781.vercel.app/ with sections for skills, experience, projects, achievements and contact. This chatbot is built with the Claude API and retrieval-augmented generation: for each question it retrieves the most relevant facts about Saravanan and answers only from them. Source: https://github.com/Saravanan7781/portfolio`,
  },
];
