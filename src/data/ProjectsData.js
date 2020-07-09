// import video0 from '../videos/video-0.webm'
import video1 from '../videos/video-1.webm';
import video2 from '../videos/video-2.webm';
import video3 from '../videos/video-3.webm';
import video4 from '../videos/video-4.webm';

export const projects = [
  // {
  //   title: 'Tic-Tac-Toe',
  //   focus: 'Mobile/Responsive Design',
  //   deployed: 'https://davidholyko.github.io/dko-tic-tac-toe-client',
  //   repo: 'https://github.com/davidholyko/dko-tic-tac-toe-client',
  //   video: video0,
  //   tags: 'Responsive-Design, Algorithms, Ruby on Rails',
  //   description: [
  //     'Mobile Friendly, Responsive',
  //     'Recursive Algorithm for Tic Tac Toe of any size',
  //     'Completed project within 4 business days',
  //     'Bonus Features: Undo move, Retrieve a previous game, Render previous games'
  //   ]
  // },
  {
    title: 'CSS Heavy Portfolio',
    focus: 'CSS Animations, Bootstrap Components, and Styling',
    deployed: 'https://davidholyko.github.io/davidholyko.github.io-deprecated',
    repo: 'https://github.com/davidholyko/davidholyko.github.io-deprecated',
    video: video1,
    tags: 'Animations, Handlebars.js, Moment.js, Prism.js',
    description: [
      'Front End Application made from scratch',
      'Utilizes Bootstrap Carousel, Tooltip, Card, Collapse, Modal',
      'Includes custom-made slideshow, scrollspy, up-down buttons',
      'Bonus features: Modal nested in a Carousel, pulsing animations on hover',
    ],
  },
  {
    title: 'LetterBox: A text-only social media platform for cat lovers',
    focus: 'Teamwork and Collaboration',
    deployed: 'https://m-d-h-s.github.io/mdhs-blog-frontend',
    repo: 'https://github.com/m-d-h-s/mdhs-blog-frontend',
    video: video4,
    tags: 'Express.js, Handlebars.js, Agile, MongoDB, Responsive-Design',
    description: [
      'Full Stack Application inspired by Reddit',
      'Project sprint duration: 3 business days',
      'Many One to Many Relationships, MongoDB Virtuals with populate',
      'Collaborated with team to review code and do standups',
      'Bonus features: Search, Resources: Users, Questions, Comments',
    ],
  },
  {
    title: 'Brain Age: Train Your Brain in Minutes a Day!',
    focus: 'Front End Features',
    deployed: 'https://davidholyko.github.io/dko-brain-age-front-end',
    repo: 'https://github.com/davidholyko/dko-brain-age-front-end',
    video: video2,
    tags:
      'Algorithms, Ruby on Rails, PostgreSQL, Graph.js, Handlebars.js, Animations',
    description: [
      'Full Stack Application inspired by Brain Age for the Nintendo DS',
      'Project sprint duration: 4 business days',
      'Implemented a Procedural Generation Algorithm that produces multiple choice logic',
      'Used jQuery hide/show to gain the effect of having multiple routes',
      'Bonus features: Chart of global stats, table of user created scores',
    ],
  },
  {
    title: 'StackOverKo',
    focus: 'Back End Features',
    deployed: 'https://davidholyko.github.io/dko-stackoverko-client',
    repo: 'https://github.com/davidholyko/dko-stackoverko-client',
    video: video3,
    tags: 'React.js, Ruby on Rails',
    description: [
      'Full Stack Web Application inspired by Stackoverflow',
      'Project sprint duration: 4 business days',
      'Users can post questions, add comments to any questions, like questions',
      'Bonus features: Filter by tags on key event, autocomplete on tags, pop-up custom alerts on action success/failure',
    ],
  },
];
