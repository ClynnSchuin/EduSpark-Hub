import { ServiceItem, Benefit, ProcessStep, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: 'EduSpark Hub',
  tagline: 'Bright Minds, Better Grades',
  email: 'clschuin@gmail.com',
  whatsappRaw: '27740161182', // For URL
  whatsappFormatted: '074 016 1182', // For display
  phoneRaw: '074 016 1182',
  location: 'Bloemfontein, South Africa (Available fully online nationwide)',
  workingHours: 'Mon - Sun: 24/7 (Support & Fast Order Intake)',
  specialOfferCode: 'WELCOME10',
  specialOfferDiscount: '10% OFF',
  logoUrl: '/src/assets/images/eduspark_logo_1780095021650.png',
  heroImgUrl: '/src/assets/images/hero_students_1780095042348.png',
  aboutImgUrl: '/src/assets/images/about_student_1780095070991.png'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'orals',
    name: 'Oral Preparation (Afrikaans / English)',
    description: 'Complete scripts with interactive prompts, step-by-step practice guides, pronunciation keys, and model answers.',
    price: 150,
    iconName: 'Speech',
    details: [
      'Afrikaans and English speech scripts tailored to grade criteria',
      'Perfect 2–5 minute presentation structures',
      'Interactive prompts for parents to help practice delivery',
      'Teacher-impressing bonus questions and model answers included'
    ]
  },
  {
    id: 'projects',
    name: 'School Project Assistance',
    description: 'Structure, research outline, visual steps, and presentation formatting tips to turn basic tasks into A+ projects.',
    price: 250, // Displayed as R250 - R350
    iconName: 'Sparkles',
    details: [
      'Comprehensive research and beautifully written structures',
      'Clear, step-by-step assembly guides for posters or files',
      'Guidance on model building, layouts, and typography pairing',
      'Plagiarism-free materials fully customized for your child'
    ]
  },
  {
    id: 'visual-tasks',
    name: 'Visual Task Guides',
    description: 'Diagrams and instructions for visual model crafts, experiments, and creative practical work.',
    price: 200,
    iconName: 'Component',
    details: [
      'Blueprint illustrations and layout guidelines',
      'Lists of easy-to-find materials and crafting instructions',
      'Easy-to-follow diagrams for high-mark science experiments',
      'Presentation hints and examiner-friendly visual tips'
    ]
  },
  {
    id: 'summaries',
    name: 'Test & Exam Summaries',
    description: 'Clear summaries in bullet points packing complex formulas, key definitions, and active recall cues.',
    price: 100,
    iconName: 'NotebookPen',
    details: [
      'Syllabus-specific core concepts and key equations',
      'Highly visual layouts with highlighted critical points',
      'Active recall questions for easy revision sessions',
      'Aide-mémoires and flashcard-style summaries for any grade'
    ]
  },
  {
    id: 'exam-packs',
    name: 'Full Exam Preparation Packs',
    description: 'The ultimate bundle combing summaries, practice sheets, question guides, and time-management tips.',
    price: 500,
    iconName: 'GraduationCap',
    details: [
      'Complete set of summaries across multiple key subjects',
      'Curated test questions with model solution guides',
      'Stamina building tips and exam-hall confidence tricks',
      'Bundled value helping students retain twice the knowledge'
    ]
  },
  {
    id: 'parent-package',
    name: 'Premium "Parent Peace of Mind" Package',
    description: 'Our flagship service: complete support for all school projects, orals, and summaries for an entire month.',
    price: 1200,
    iconName: 'ShieldCheck',
    details: [
      'Unlimited school task assistance outlines for the month',
      'Weekly summaries for major tests and subject reviews',
      'Priority direct pipeline to senior writers and advisors',
      'Stress-free solution keeping parents aligned and children confident'
    ]
  },
  {
    id: 'homework-help',
    name: 'Homework & Exercise Help (Per Question)',
    description: 'Quick answers and step-by-step breakdown explanations for tough, stubborn school problems.',
    price: 30,
    iconName: 'HelpCircle',
    details: [
      'Comprehensive mathematical or scientific steps',
      'Clear conceptual explanation so the student learns the method',
      'Fast turnaround for next-day homework checkups'
    ]
  },
  {
    id: 'assignments',
    name: 'Assignments & Essays',
    description: 'Elegant research papers, essays, and creative writing prompts structured for impact.',
    price: 120,
    iconName: 'BookOpen',
    details: [
      'Strong thesis statements and logical paragraphs',
      'Vocabulary recommendations for high-scoring impact',
      'Impeccable formatting, grammar, and structural integrity'
    ]
  },
  {
    id: 'rush-delivery',
    name: 'Rush / Urgent Requests (Within 24 Hours)',
    description: 'Have an emergency deadline? Put your request on the express track for delivery within 24 hours.',
    price: 1.5, // 50% extra
    iconName: 'Zap',
    details: [
      'Direct order dispatch to top priority writers',
      'In-progress updates and live coordination support',
      'Strict adherence to tight school submission timelines'
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Professional & Easy-To-Understand Support',
    description: 'Every resource is written clearly, tailored directly to curriculums, and enriched with premium study tips that teachers love.',
    iconName: 'Award'
  },
  {
    title: 'Super-Fast Turnaround Options',
    description: 'Standard delivery is within 24 to 48 hours, with rush options available to confidently meet sudden overnight deadlines.',
    iconName: 'Clock'
  },
  {
    title: 'All Grades & Subjects Covered',
    description: 'We generate custom visual guides, speeches, and notes for Grades R through 12 across languages, math, sciences, history, and arts.',
    iconName: 'BookCheck'
  },
  {
    title: 'Highly Affordable & Parent Friendly',
    description: 'Zero hidden fees. We provide transparent pricing packages that save dozens of hours a week for busy family routines.',
    iconName: 'BadgeCent'
  },
  {
    title: 'Fun, Engaging & Interactive Visuals',
    description: 'Our task guides focus on visual storytelling, color cues, and engaging diagrams to spark genuine student interest.',
    iconName: 'Lightbulb'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Place Your Order',
    description: 'Tell us your grade, subject, and prompt requirements. Upload some guidelines or worksheets in our chat.',
    iconName: 'FileEdit'
  },
  {
    step: 2,
    title: 'We Get to Work',
    description: 'Our academic specialists research, draft scripts, compile formulas, and layout easy-to-follow diagrams.',
    iconName: 'UserCheck'
  },
  {
    step: 3,
    title: 'Receive Digital Delivery',
    description: 'We send you polished, modern formats (PDF, Word, or imagery) directly to your mail or WhatsApp in 24–48 hours.',
    iconName: 'Send'
  },
  {
    step: 4,
    title: 'Succeed & Get High Grades',
    description: 'Review with our step-by-step guides. Present to the class with sky-high confidence and bring home great marks!',
    iconName: 'Trophy'
  }
];

export const STATS = [
  { value: '5000+', label: 'Happy Students' },
  { value: '2000+', label: 'Tasks Completed' },
  { value: '150+', label: 'School Subjects' },
  { value: '98%', label: 'Better Grades Success Rate' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Charmaine Bezuidenhout',
    role: 'Parent of Grade 9 Student',
    feedback: 'EduSpark Hub saved my life with my son’s English Oral preparation! The step-by-step Practice Guides made practicing together actually fun. He got an A for the first time!',
    rating: 5,
    grade: 'Bloemfontein'
  },
  {
    id: 't2',
    name: 'Zander Marais',
    role: 'Grade 11 Student',
    feedback: 'The physics formulas visual guide is absolute gold. It explains principles that the school textbooks over-complicate. Delivery was quick, and the layout was beautiful and easy to read.',
    rating: 5,
    grade: 'Pretoria'
  },
  {
    id: 't3',
    name: 'Naledi Selebi',
    role: 'Parent of Grade 5 Student',
    feedback: 'With my long office hours, I struggled to help Naledi with her solar system model visual project. The Visual Task Guide from EduSpark made it incredibly clear. Highly recommended!',
    rating: 5,
    grade: 'Bloemfontein'
  }
];

export const OPTIONAL_ADD_ONS = [
  { name: 'Extra Practice worksheets & revision cards', price: 50 },
  { name: 'Customized creative presentation templates', price: 100 },
  { name: 'Personalized video speech/pronunciation guides', price: 200 }
];
