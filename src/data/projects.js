const GH = 'https://github.com/Saravanan7781'

export const projects = [
  {
    name: 'Placemate',
    tagline: 'Multi-college placement portal',
    description:
      'A MERN web app that smooths out the placement process for any college. Admins post company drives and auto-email eligible students, students keep a profile that autofills registrations, and seniors share interview experiences. I also built a chatbot that helps students prepare using the experiences of previously placed students. Team lead, team of 3.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: `${GH}/placemate`,
    gradient: 'linear-gradient(135deg, #12263a, #1f6f78)',
  },
  {
    name: 'BizzLink',
    tagline: 'Entrepreneurs meet investors',
    description:
      'A web platform that connects aspiring entrepreneurs with investors so their innovations can reach the world. Founders showcase ideas, investors discover them.',
    tags: ['React', 'Node.js', 'MongoDB'],
    repo: `${GH}/BizzLink`,
    gradient: 'linear-gradient(135deg, #f26b21, #c2410c)',
  },
  {
    name: 'BIT Grievance Management',
    tagline: 'Hostel complaints, anywhere, anytime',
    description:
      'Replaces the paper note kept in the hostel with a web app: students submit complaints at any time with image proof, and supervisors get dashboards to track them. Built in a team of 2.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: `${GH}/bitGrievanceManagement`,
    live: 'https://bitgrievancemanagement.vercel.app',
    gradient: 'linear-gradient(135deg, #1f6f78, #3aa6a0)',
  },
  {
    name: 'Appointment Booking System',
    tagline: 'Doctor slots that never double-book',
    description:
      'Doctors publish their available slots and patients book them. A booked slot vanishes straight away, so nobody wonders whether it is still free. Shortlisted to the BITHACKS’23 finale. Team lead, team of 5.',
    tags: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repo: `${GH}/AppointmentBookingSystem`,
    gradient: 'linear-gradient(135deg, #12263a, #f26b21)',
  },
  {
    name: 'Business Landing Page',
    tagline: 'Built in one day',
    description:
      'A landing page built for an application development round with a one-day time limit.',
    tags: ['JavaScript'],
    repo: `${GH}/business-landing-page`,
    live: 'https://landing-page-delta-woad.vercel.app',
    gradient: 'linear-gradient(135deg, #f26b21, #ff9a5a)',
  },
  {
    name: 'Expense Tracker',
    tagline: 'Two-hour build test',
    description:
      'Built for a timed test: add expenses and filter them by date, with the total updating as you go.',
    tags: ['JavaScript'],
    repo: `${GH}/Expense-Tracker`,
    gradient: 'linear-gradient(135deg, #1f6f78, #12263a)',
  },
]
