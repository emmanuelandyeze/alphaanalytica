const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

// Schemas
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: 'admin' },
});

const BlogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  author: String,
  content: String,
  image: String,
  category: String,
  date: String,
  published: { type: Boolean, default: true },
});

const PageContentSchema = new mongoose.Schema({
  page: String,
  section: String,
  content: mongoose.Schema.Types.Mixed,
});
PageContentSchema.index({ page: 1, section: 1 }, { unique: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
const PageContent = mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);

// --- DATA ---

const users = [
  {
    name: 'Admin',
    email: 'alphaanalytica8@gmail.com',
    password: 'admin123', // Will be hashed below
    role: 'admin'
  }
];

const blogs = [
  {
    title: 'Selecting the Right Equipment for Your Laboratory: A Comprehensive Guide',
    slug: 'selecting-the-right-equipment-for-your-laboratory',
    author: 'Bunmi Okunnu',
    category: 'Laboratory Management',
    image: '/images/equipment.jpeg',
    content: `Equipping a laboratory is one of the most significant and resource-intensive decisions...`,
    date: '22 March 2026'
  },
  {
    title: 'Developing the Ideal Analytical Workflows for Your Food and Environmental Laboratories',
    slug: 'developing-the-ideal-analytical-workflows',
    author: 'Bunmi Okunnu',
    category: 'Analytical Chemistry',
    image: '/images/about2.jpg',
    content: `Introduction\nLaboratories today are under increasing pressure...`,
    date: '15 March 2026'
  }
];

const homeContent = [
  {
    section: 'landing',
    content: {
      badge: 'ISO 17025 Compliant Laboratory',
      title: 'Innovative Chemical Solutions for a Smarter, Sustainable Future.',
      highlight: 'Smarter, Sustainable Future.',
      description: 'At Alpha Analytica, we combine advanced analytical techniques with scientific expertise to deliver precise insights for industries, researchers, and manufacturers.',
      ctaPrimary: 'Request Analysis',
      ctaSecondary: 'Explore Services',
      features: [
        { text: 'Accredited Results' },
        { text: 'Fast Turnaround' },
        { text: 'Expert Consultation' }
      ]
    }
  },
  {
    section: 'industries',
    content: {
      title: 'Industries We Serve',
      description: 'Tailored analytical solutions for critical sectors, delivering data you can trust.',
      items: [
        { title: 'Environmental Testing', description: 'Water, soil, and air quality analysis for regulatory compliance.', link: '/services#env' },
        { title: 'Pharma & Life Sciences', description: 'R&D support, sterility testing, and stability studies.', link: '/services#pharma' },
        { title: 'Food & Agriculture', description: 'Nutritional labeling, contaminant testing, and safety.', link: '/services#food' },
        { title: 'Industrial Materials', description: 'Chemical composition and material characterization.', link: '/services#industrial' },
        { title: 'Equipment Solutions', description: 'Sales, rentals, and calibration services.', link: '/services#equipment' },
        { title: 'Consultancy', description: 'Lab setup, training, and regulatory guidance.', link: '/services#consulting' }
      ]
    }
  },
  {
    section: 'heroText',
    content: {
      badge: 'Why Choose Alpha Analytica?',
      title: 'More Than Just a Lab — We Are Your Strategic Partner.',
      description: 'In a world dependent on data, accuracy is currency. We provide the scientific foundation for your critical decisions, from product safety to environmental stewardship.',
      cta: 'About Our Company',
      features: [
        { title: 'Uncompromising Precision', description: 'Our rigorous QA/QC protocols ensure every result is accurate, repeatable, and defensible.' },
        { title: 'Regulatory Expertise', description: 'We navigate complex standards (ISO, NAFDAC, EPA) so you stay compliant and confident.' },
        { title: 'Rapid Turnaround', description: 'Optimized workflows mean you get critical data faster without sacrificing quality.' },
        { title: 'Certified Excellence', description: 'ISO 17025 accredited methods and a team of veteran scientists dedicated to your success.' }
      ]
    }
  },
  {
    section: 'landingImage',
    content: {
      image: '/images/landing.jpg',
      cards: [
        {
          title: 'Analytical Testing Services',
          description: 'Harness the power of our advanced instrumentation and experienced scientists for precise and reliable analytical testing.'
        },
        {
          title: 'Laboratory Equipment Sales and Rentals',
          description: 'Explore our extensive selection of laboratory equipment, including medical and chemical instrumentation.'
        },
        {
          title: 'Professional and Consultancy Services',
          description: 'At Alpha Analytica, we go beyond traditional analytical services to offer innovative methodologies and customized solutions.'
        }
      ]
    }
  }
];

const servicesContent = [
  {
    section: 'hero',
    content: {
      title: 'World-Class Analytical Services',
      description: 'From environmental compliance to pharmaceutical R&D — precision, innovation, and regulatory insight to drive your business forward.'
    }
  },
  {
    section: 'stats',
    content: {
      items: [
        { value: '+1k', label: 'Samples Processed' },
        { value: '+150', label: 'Validated Methods' },
        { value: '+50', label: 'Partner Institutions' }
      ]
    }
  },
  {
    section: 'categories',
    content: {
      items: [
        {
          id: 'env',
          category: 'Environmental Testing',
          tagline: 'Protecting our world with precision data.',
          description: 'Comprehensive environmental analysis for water, soil, and air quality, ensuring compliance with local and international standards.',
          subServices: [
            { title: 'Water Analysis', items: ['Potable water quality (WHO/EPA standards)', 'Wastewater & effluent compliance monitoring', 'Groundwater & surface water testing', 'Heavy metals & trace element detection'] },
            { title: 'Soil & Sediment', items: ['Contaminated land assessment (Hydrocarbons, VOCs, SVOCs)', 'Agricultural soil nutrient profiling (NPK, pH)', 'Leachate analysis'] },
            { title: 'Air Quality & Waste', items: ['Indoor Air Quality (IAQ) monitoring', 'Stack emissions testing', 'Hazardous waste classification (TCLP)'] }
          ]
        },
        {
          id: 'pharma',
          category: 'Pharmaceutical & Life Sciences',
          tagline: 'Ensuring safety and efficacy from R&D to release.',
          description: 'Rigorous testing for raw materials and finished products, supporting R&D and QA with validated methods.',
          subServices: [
            { title: 'Core Testing', items: ['Raw Material Testing (USP/BP/EP monographs)', 'Finished Product Testing (Potency, Purity, Uniformity)', 'Stability Studies (Accelerated & Long-term)'] },
            { title: 'Microbiology', items: ['Sterility testing', 'Endotoxin (LAL) testing', 'Microbial Limit Tests (MLT)'] },
            { title: 'Specialized Support', items: ['Method Development & Validation', 'Custom R&D protocols'] }
          ]
        },
        {
          id: 'food',
          category: 'Food & Agriculture',
          tagline: 'Farm-to-fork safety and quality assurance.',
          description: 'Advanced analysis for nutritional content, contaminants, and pathogens to safeguard the food supply chain.',
          subServices: [
            { title: 'Safety & Quality', items: ['Nutritional Labeling (Proximate analysis)', 'Pesticide residues (GC-MS/LC-MS)', 'Mycotoxins (Aflatoxins, Ochratoxins)'] },
            { title: 'Contaminants', items: ['Heavy metals (Lead, Mercury, Arsenic)', 'Microbiology (Salmonella, E. coli, Listeria)'] }
          ]
        },
        {
          id: 'industrial',
          category: 'Industrial & Materials',
          tagline: 'Solving complex material challenges.',
          description: 'Material characterization and chemical analysis for fuels, polymers, and industrial formulations.',
          subServices: [
            { title: 'Material Analysis', items: ['Chemical Composition & ID', 'Polymer Testing & Degradation', 'Fuel & Oil Analysis (Diesel, Lubricants)'] }
          ]
        },
        {
          id: 'equipment',
          category: 'Lab Equipment Solutions',
          tagline: 'Premium tools for premium results.',
          description: 'End-to-end equipment services including sales, rentals, calibration, and maintenance for top-tier lab instruments.',
          subServices: [
            { title: 'Offerings', items: ['Sales: Spectrophotometers, HPLCs, Balances', 'Rental Services: Short-term & Long-term', 'Calibration (ISO 17025 compliant)', 'Preventative maintenance & IQ/OQ'] }
          ]
        },
        {
          id: 'consulting',
          category: 'Consultancy & Training',
          tagline: 'Empowering your team and optimizing your lab.',
          description: 'Expert guidance on lab setup, regulatory compliance, and hands-on technical training.',
          subServices: [
            { title: 'Services', items: ['Lab Setup & Design (Turnkey solutions)', 'Regulatory Consulting (NAFDAC, SON, ISO 17025)', 'Technical Training (HPLC, GC, GLP Workshops)'] }
          ]
        }
      ]
    }
  },
  {
    section: 'faq',
    content: {
      items: [
        { q: 'Do you handle international shipments for equipment?', a: 'Yes — we ship globally and handle customs paperwork for equipment purchases and long-term rentals.' },
        { q: 'How fast can I get a routine analysis report?', a: 'Typical turnaround for routine tests is 3–7 business days; expedited services are available on request.' },
        { q: 'Can you develop custom analytical methods for novel compounds?', a: 'Absolutely — we specialise in bespoke method development and validation for new molecules and matrices.' }
      ]
    }
  }
];

const aboutContent = [
  {
    section: 'hero',
    content: {
      title: 'About Alpha Analytica',
      description: 'Your trusted partner in analytical chemistry solutions.'
    }
  },
  {
    section: 'whoWeAre',
    content: {
      title: 'Who We Are',
      description: 'Alpha Analytica is a leading analytical chemistry company dedicated to providing cutting-edge solutions for industries ranging from pharmaceuticals to environmental sciences. With a team of highly skilled scientists and state-of-the-art technology, we deliver accurate, reliable, and timely results to our clients.',
      image: '/images/about2.jpg'
    }
  },
  {
    section: 'coreValues',
    content: {
      title: 'Our Core Values',
      items: [
        { title: 'Integrity', description: 'We uphold the highest ethical standards in all our work.', icon: '/images/integrity.png' },
        { title: 'Innovation', description: 'We embrace new technologies and methodologies to drive progress.', icon: '/images/innovation.png' },
        { title: 'Excellence', description: 'We strive for precision and accuracy in every analysis.', icon: '/images/excellence.png' }
      ]
    }
  },
  {
    section: 'vision',
    content: {
      title: 'Our Vision',
      description: 'At Alpha Analytica, we envision a future where analytical chemistry drives innovation and sustainability across industries. We aim to be the global leader in providing reliable and innovative analytical solutions that empower our clients to make informed decisions.'
    }
  }
];

// --- SEED FUNCTION ---

async function runSeed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Users
    for (const u of users) {
      const exists = await User.findOne({ email: u.email });
      if (!exists) {
        const hashedPassword = await bcrypt.hash(u.password, 12);
        await User.create({ ...u, password: hashedPassword });
        console.log(`User created: ${u.email}`);
      }
    }

    // Blogs
    for (const b of blogs) {
      await Blog.findOneAndUpdate({ slug: b.slug }, b, { upsert: true, new: true });
      console.log(`Blog updated/created: ${b.title}`);
    }

    // Home Content
    for (const item of homeContent) {
      await PageContent.findOneAndUpdate(
        { page: 'home', section: item.section },
        { content: item.content },
        { upsert: true, new: true }
      );
      console.log(`Home section seeded: ${item.section}`);
    }

    // Services Content
    for (const item of servicesContent) {
      await PageContent.findOneAndUpdate(
        { page: 'services', section: item.section },
        { content: item.content },
        { upsert: true, new: true }
      );
      console.log(`Services section seeded: ${item.section}`);
    }

    // About Content
    for (const item of aboutContent) {
      await PageContent.findOneAndUpdate(
        { page: 'about', section: item.section },
        { content: item.content },
        { upsert: true, new: true }
      );
      console.log(`About section seeded: ${item.section}`);
    }

    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runSeed();
