import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function createResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 38;
  const contentWidth = pageWidth - margin * 2;

  // Strict ASCII palette and clean contrast
  const headerColor = [18, 38, 75]; // Classic deep navy
  const headingColor = [22, 50, 95]; // Section heading navy
  const bodyColor = [35, 35, 35]; // Charcoal body
  const mutedColor = [85, 85, 85]; // Medium gray
  const linkColor = [25, 85, 165]; // Professional link blue
  const ruleColor = [180, 195, 215]; // Slate divider rule
  const tagColor = [95, 95, 95]; // Technology tags gray

  let y = margin + 4;

  // Helper for bullet circle
  function drawBullet(bx, by) {
    doc.setFillColor(...bodyColor);
    doc.circle(bx, by - 2.8, 1.3, 'F');
  }

  // 1. HEADER (Centered)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...headerColor);
  doc.text('MAHALAKSHMI RAVICHANDRAN', pageWidth / 2, y, { align: 'center' });
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(...bodyColor);
  doc.text('Puducherry, India  |  +91 9150526185  |  mahaeaswar123@gmail.com', pageWidth / 2, y, { align: 'center' });
  y += 12;

  // Contact links
  doc.setTextColor(...linkColor);
  doc.text('linkedin.com/in/mahalakshmi-ravichandran-370a4939b', pageWidth / 2 - 110, y);
  doc.setTextColor(...bodyColor);
  doc.text('|', pageWidth / 2 + 18, y);
  doc.setTextColor(...linkColor);
  doc.text('github.com/Mahaeaswar123', pageWidth / 2 + 26, y);
  y += 15;

  function renderSectionHeader(title) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.8);
    doc.setTextColor(...headingColor);
    doc.text(title.toUpperCase(), margin, y);
    y += 3;
    doc.setDrawColor(...ruleColor);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 11;
  }

  // 2. SUMMARY
  renderSectionHeader('Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.3);
  doc.setTextColor(...bodyColor);
  const summaryText = "Final-year B.Tech Information Science and Engineering student at Women's Engineering College, Puducherry. Software Developer with hands-on experience in full-stack web development, Flutter mobile apps, and AI/ML solutions using React.js, Node.js, REST APIs, and SQL. Seeking a Software Developer / Software Engineer role to contribute to innovative technology solutions.";
  const wrappedSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(wrappedSummary, margin, y);
  y += wrappedSummary.length * 9.8 + 4;

  // 3. EDUCATION
  renderSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(...bodyColor);
  doc.text('B.Tech Information Science and Engineering', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...mutedColor);
  doc.text('2023 - 2027', margin + contentWidth - 48, y);
  y += 10.5;

  doc.setFontSize(8.3);
  doc.setTextColor(...bodyColor);
  doc.text("Women's Engineering College, Lawspet, Puducherry  |  Cumulative CGPA: 6.102 / 10", margin, y);
  y += 14;

  // 4. TECHNICAL SKILLS
  renderSectionHeader('Technical Skills');
  const skillsList = [
    { cat: 'Languages', items: 'C, C++, SQL, Dart' },
    { cat: 'Web Technologies', items: 'HTML5, CSS3, JavaScript (ES6+), PHP, Responsive Design' },
    { cat: 'Frameworks & Libraries', items: 'React.js, Node.js, Flutter, REST APIs' },
    { cat: 'Backend & Databases', items: 'MySQL, Supabase' },
    { cat: 'Design Tools', items: 'Figma, UI/UX Prototyping, Wireframing' },
    { cat: 'Dev Tools', items: 'VS Code, PyCharm, Eclipse IDE, XAMPP, Git, GitHub' },
    { cat: 'Soft Skills & Leadership', items: 'People Management, Technical Communication, Analytical Problem Solving' },
  ];

  skillsList.forEach((s) => {
    drawBullet(margin + 4, y);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(...bodyColor);
    doc.text(`${s.cat}: `, margin + 11, y);
    const catWidth = doc.getTextWidth(`${s.cat}: `);

    doc.setFont('helvetica', 'normal');
    doc.text(s.items, margin + 11 + catWidth, y);
    y += 10.2;
  });
  y += 4;

  // 5. EXPERIENCE
  renderSectionHeader('Experience');

  const experienceList = [
    {
      role: 'Flutter Developer Intern',
      company: 'Bros Developer',
      period: 'Nov 2025 - Present',
      bullets: [
        'Building VeeSafe, a B2B Flutter (Dart) app with a Supabase real-time backend to manage employee medical expense claims, and a real-time company portfolio website using React and Node.js.',
      ],
      tags: 'Flutter | Dart | React | Node.js | Supabase',
    },
    {
      role: 'Research Intern',
      company: 'NIT Puducherry - Karaikal',
      period: 'Jun 2026 - Jul 2026',
      bullets: [
        'Co-authored a research paper (submitted to an academic conference) on forest fire risk classification using NASA FIRMS satellite data, comparing five tabular deep learning models; TabNet achieved the best results at 74.3% accuracy and 0.90 ROC-AUC.',
      ],
      tags: 'Python | TabNet | Deep Learning | Remote Sensing Data | Model Comparison',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Aquila Innovations, Puducherry',
      period: 'Jun 2025 - Jul 2025',
      bullets: [
        'Developed dynamic web apps using HTML, CSS, JavaScript, and PHP; designed MySQL databases and implemented CRUD REST APIs; configured local dev environment with XAMPP.',
      ],
      tags: 'HTML5 / CSS3 | JavaScript | PHP | MySQL | REST APIs | XAMPP',
    },
  ];

  experienceList.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.7);
    doc.setTextColor(...bodyColor);
    doc.text(`${exp.role} | ${exp.company}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...mutedColor);
    const pW = doc.getTextWidth(exp.period);
    doc.text(exp.period, margin + contentWidth - pW, y);
    y += 10.5;

    doc.setFontSize(8.2);
    doc.setTextColor(...bodyColor);
    exp.bullets.forEach((b) => {
      drawBullet(margin + 4, y);
      const bWrapped = doc.splitTextToSize(b, contentWidth - 14);
      doc.text(bWrapped, margin + 11, y);
      y += bWrapped.length * 9.6;
    });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.7);
    doc.setTextColor(...tagColor);
    doc.text(exp.tags, margin + 11, y);
    y += 12;
  });
  y += 1;

  // 6. PROJECTS
  renderSectionHeader('Projects');

  const projectsList = [
    {
      name: 'Forest Fire Risk Assessment using Deep Learning (Research Paper)',
      period: 'Jun 2026 - Jul 2026',
      desc: 'Co-authored a comparative study of five tabular deep learning models to classify NASA FIRMS satellite data into Low/Medium/High forest fire risk; TabNet delivered the strongest results at 74.3% test accuracy and 0.90 ROC-AUC.',
      tags: 'Python | TabNet | Deep Learning | Remote Sensing | Research Paper',
    },
    {
      name: 'Portfolio Website',
      period: 'Nov 2025 - Present',
      desc: 'Built a real-time company portfolio website for Bros Developer using React, Node.js, and Supabase, with live content updates to attract client inquiries.',
      tags: 'React | Node.js | Supabase',
    },
    {
      name: 'VeeSafe - B2B Medical Expense Management App',
      period: 'Nov 2025 - Present',
      desc: 'Engineered VeeSafe for Bros Developer, a B2B Flutter (Dart) app with a Supabase real-time backend, giving businesses a streamlined workflow to track and manage employee medical expense claims.',
      tags: 'Flutter | Dart | Supabase',
    },
    {
      name: 'Maze Solver - Interactive Web Game',
      period: 'Mar 2026',
      desc: 'Built a responsive JavaScript maze game with DFS-based procedural generation, BFS pathfinding hints, and smooth 60fps rendering with a move counter, score tracker, and live timer.',
      tags: 'HTML5 | CSS3 | JavaScript | Graph Algorithms | github.com/Mahaeaswar123/Maze-Game',
    },
    {
      name: 'Smart Document Search Engine',
      period: '2026',
      desc: 'Built a full-stack search engine with a custom TF-IDF and Cosine Similarity algorithm to rank uploaded PDF, DOCX, and TXT files by relevance, using NLP preprocessing and a React + Tailwind CSS interface.',
      tags: 'React | TypeScript | Node.js | Express | TF-IDF | github.com/Mahaeaswar123/smart-document-search-engine',
    },
  ];

  projectsList.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.6);
    doc.setTextColor(...bodyColor);
    doc.text(proj.name, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...mutedColor);
    const pW = doc.getTextWidth(proj.period);
    doc.text(proj.period, margin + contentWidth - pW, y);
    y += 10;

    doc.setFontSize(8.2);
    doc.setTextColor(...bodyColor);
    drawBullet(margin + 4, y);
    const dWrapped = doc.splitTextToSize(proj.desc, contentWidth - 14);
    doc.text(dWrapped, margin + 11, y);
    y += dWrapped.length * 9.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.6);
    doc.setTextColor(...tagColor);
    doc.text(proj.tags, margin + 11, y);
    y += 11.5;
  });
  y += 1;

  // 7. CERTIFICATIONS
  renderSectionHeader('Certifications');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(...bodyColor);

  const certRows = [
    {
      c1: 'AI-Powered Performance Ads Certification | Google | Oct 2025',
      c2: 'Dive Deeper into GA4 Data and Reports | Google | Oct 2025',
    },
    {
      c1: 'Vibe Coding with Replit | Analytics Vidhya | Nov 2025',
      c2: 'Guide to Vibe Coding in Windsurf | Analytics Vidhya | Nov 2025',
    },
    {
      c1: 'AI Fluency: Framework & Foundations | Anthropic | Sep 2025',
      c2: 'Introduction to Model Context Protocol | Anthropic | Sep 2025',
    },
  ];

  certRows.forEach((r) => {
    drawBullet(margin + 4, y);
    doc.text(r.c1, margin + 11, y);
    drawBullet(margin + contentWidth / 2 + 2, y);
    doc.text(r.c2, margin + contentWidth / 2 + 9, y);
    y += 9.5;
  });

  // Save clean binary PDF to public/ and root
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const publicFilePath = path.join(publicDir, 'Mahalakshmi_Ravichandran_Resume.pdf');
  const rootFilePath = path.resolve('Mahalakshmi_Ravichandran_Resume.pdf');

  // Produce binary buffer directly
  const pdfBinary = doc.output();
  fs.writeFileSync(publicFilePath, pdfBinary, 'binary');
  fs.writeFileSync(rootFilePath, pdfBinary, 'binary');

  console.log('Successfully generated clean binary Mahalakshmi_Ravichandran_Resume.pdf');
}

createResumePDF();
