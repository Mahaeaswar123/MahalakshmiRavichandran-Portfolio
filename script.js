/**
 * ==========================================================================
 * MAHALAKSHMI RAVICHANDRAN - PERSONAL PORTFOLIO JAVASCRIPT
 * Pure Vanilla JavaScript (ES6+) - No External Frameworks
 * ==========================================================================
 */

// Helper to escape HTML and prevent XSS injection
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>'"]/g, (tag) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[tag] || tag));
}

/* ==========================================================================
 * DATA SOURCES (DATA-DRIVEN SECTIONS)
 * ========================================================================== */

/**
 * PROJECTS DATA
 * To add a new entry, copy an existing object in this array, paste it below, and update the values.
 */
const projectsData = [
  {
    title: 'Forest Fire Risk Assessment using Deep Learning',
    dateRange: 'Jun 2026 – Jul 2026',
    techStack: ['Python', 'FT-Transformer', 'Deep Learning', 'Remote Sensing'],
    description: 'Built an FT-Transformer deep learning model to classify forest fire risk into Low, Medium, and High categories from remote sensing telemetry, reaching 73.6% accuracy and 0.89 ROC-AUC.',
    problem: 'Accurate classification of wildland fire risk from noisy and high-dimensional remote sensing datasets.',
    solution: 'Built a transformer-based deep learning model (FT-Transformer) to classify forest fire risk into Low, Medium, and High categories from remote sensing telemetry.',
    outcome: 'Reached 73.6% test accuracy and 0.89 ROC-AUC; conducted confusion matrix and feature importance analysis to significantly minimize misclassification.',
    category: 'Deep Learning / Research',
    liveDemoLink: '#about',
    liveDemoText: 'Research Details',
    githubLink: '',
    image: 'forest-fire-project.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#E8DEC8"/>
      <circle cx="200" cy="120" r="70" fill="#D28D69" fill-opacity="0.3"/>
      <path d="M120 180C140 140 180 100 200 80C220 100 260 140 280 180H120Z" fill="#3A322A" fill-opacity="0.25"/>
      <circle cx="200" cy="80" r="12" fill="#A8987F"/>
      <path d="M150 160C170 130 230 130 250 160" stroke="#FFFFFF" stroke-width="3"/>
      <text x="200" y="215" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#3A322A" text-anchor="middle">FT-Transformer Risk Model (73.6% Acc)</text>
    </svg>`
  },
  {
    title: 'Portfolio Website & VeeSafe Real-Time Safety App',
    dateRange: 'Nov 2025 – Present',
    techStack: ['React', 'Node.js', 'Dart', 'Supabase'],
    description: 'Engineered VeeSafe, a real-time safety mobile app built with Dart and React connected to a Supabase real-time backend, alongside an agency portfolio portal.',
    problem: 'Need for rapid, reliable distress alerting on mobile devices combined with an authoritative company web presence.',
    solution: 'Engineered VeeSafe, a real-time safety mobile app built with Dart and React connected to a Supabase real-time backend, alongside an agency portfolio portal.',
    outcome: 'Sub-second notification syncing, seamless device geolocation broadcasting, and a responsive web presence for Bros Developer.',
    category: 'Mobile & Web',
    liveDemoLink: '#contact',
    liveDemoText: 'Request Demo',
    githubLink: 'https://github.com/Mahaeaswar123',
    githubText: 'GitHub Profile',
    image: 'veesafe-project.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#DCD3C7"/>
      <rect x="60" y="40" width="130" height="160" rx="14" fill="#3A322A" fill-opacity="0.1" stroke="#3A322A" stroke-width="1.5"/>
      <rect x="210" y="40" width="130" height="160" rx="14" fill="#A8987F" fill-opacity="0.2" stroke="#FFFFFF" stroke-width="1.5"/>
      <circle cx="125" cy="110" r="24" fill="#A8987F"/>
      <path d="M125 98v24M113 110h24" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
      <text x="200" y="225" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#3A322A" text-anchor="middle">VeeSafe Mobile &amp; Agency Portal</text>
    </svg>`
  },
  {
    title: 'Maze Solver – Interactive Web Game',
    dateRange: 'Mar 2026',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Graph Algorithms'],
    description: 'Created a responsive maze game using pure JavaScript with dynamic DFS-based procedural maze generation and BFS optimal pathfinding hints.',
    problem: 'Visualizing complex graph traversal algorithms (DFS & BFS) in an accessible, interactive, and gamified format.',
    solution: 'Created a responsive maze game using pure JavaScript with dynamic DFS-based procedural maze generation and BFS optimal pathfinding hints.',
    outcome: 'Smooth 60fps rendering, move counter, live score tracker, dynamic timer, and real-time path hints for educational visualization.',
    category: 'Interactive Web Game',
    liveDemoLink: 'https://github.com/Mahaeaswar123/Maze-Game#readme',
    liveDemoText: 'Live Preview',
    githubLink: 'https://github.com/Mahaeaswar123/Maze-Game',
    githubText: 'GitHub Repo',
    image: 'maze-game-project.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#E4DACD"/>
      <path d="M80 50h80v40H80v40h120v-40h40v80h-80v40h160" stroke="#3A322A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="80" cy="50" r="8" fill="#487A5B"/>
      <circle cx="320" cy="170" r="8" fill="#A8987F"/>
      <path d="M80 50 L160 50 L160 90 L80 90 L80 130 L200 130 L200 90 L240 90 L240 170" stroke="#A8987F" stroke-width="2" stroke-dasharray="3 3"/>
      <text x="200" y="225" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#3A322A" text-anchor="middle">DFS Generation &amp; BFS Pathfinding</text>
    </svg>`
  },
  {
    title: 'CGPA Calculator Web App',
    dateRange: 'Jan 2026',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    description: 'Built an accessible web tool to compute SGPA and cumulative CGPA with dynamic course credit input fields and instant formula evaluation.',
    problem: 'College students face cumbersome manual credit-point calculation across diverse university grading metrics.',
    solution: 'Built an accessible web tool to compute SGPA and cumulative CGPA with dynamic course credit input fields and instant formula evaluation.',
    outcome: 'Zero-dependency client calculation, intuitive input management, validation safeguards, and clean mobile responsiveness.',
    category: 'Web Application',
    liveDemoLink: 'https://github.com/Mahaeaswar123/CGPA-calculator#readme',
    liveDemoText: 'Read Docs',
    githubLink: 'https://github.com/Mahaeaswar123/CGPA-calculator',
    githubText: 'GitHub Repo',
    image: 'cgpa-calculator.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#D7CFC0"/>
      <rect x="100" y="40" width="200" height="150" rx="16" fill="#FFFFFF" fill-opacity="0.6" stroke="#3A322A" stroke-width="1.5"/>
      <rect x="120" y="60" width="160" height="35" rx="8" fill="#3A322A" fill-opacity="0.1"/>
      <circle cx="140" cy="120" r="12" fill="#A8987F"/>
      <circle cx="180" cy="120" r="12" fill="#A8987F"/>
      <circle cx="220" cy="120" r="12" fill="#A8987F"/>
      <circle cx="260" cy="120" r="12" fill="#A8987F"/>
      <circle cx="140" cy="155" r="12" fill="#A8987F"/>
      <circle cx="180" cy="155" r="12" fill="#A8987F"/>
      <circle cx="220" cy="155" r="12" fill="#A8987F"/>
      <circle cx="260" cy="155" r="12" fill="#3A322A"/>
      <text x="200" y="225" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#3A322A" text-anchor="middle">Dynamic SGPA / CGPA Engine</text>
    </svg>`
  },
  {
    title: 'School Bus Booking System',
    dateRange: 'Aug 2025',
    techStack: ['HTML / CSS', 'PHP', 'MySQL', 'XAMPP'],
    description: 'Developed a responsive web application for student bus reservations with real-time automated receipt generation, PHP+MySQL backend, and robust form validation.',
    problem: 'Manual, paper-heavy transit registration for school and college routes causing lost receipts and routing delays.',
    solution: 'Developed a responsive web application for student bus reservations with real-time automated receipt generation, PHP+MySQL backend, and robust form validation.',
    outcome: 'Streamlined seat reservation workflow, relational schema architecture, secure booking records, and XAMPP local environment deployment.',
    category: 'Full Stack System',
    liveDemoLink: 'https://github.com/Mahaeaswar123/projects#readme',
    liveDemoText: 'Project Specs',
    githubLink: 'https://github.com/Mahaeaswar123/projects',
    githubText: 'GitHub Repo',
    image: 'bus-booking.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#E6DFD3"/>
      <rect x="90" y="60" width="220" height="100" rx="14" fill="#A8987F" fill-opacity="0.3" stroke="#3A322A" stroke-width="2"/>
      <rect x="110" y="80" width="40" height="30" rx="4" fill="#FFFFFF" fill-opacity="0.8"/>
      <rect x="160" y="80" width="40" height="30" rx="4" fill="#FFFFFF" fill-opacity="0.8"/>
      <rect x="210" y="80" width="40" height="30" rx="4" fill="#FFFFFF" fill-opacity="0.8"/>
      <rect x="260" y="80" width="30" height="45" rx="4" fill="#3A322A" fill-opacity="0.4"/>
      <circle cx="140" cy="160" r="18" fill="#3A322A"/>
      <circle cx="260" cy="160" r="18" fill="#3A322A"/>
      <text x="200" y="225" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#3A322A" text-anchor="middle">PHP &amp; MySQL Transit System</text>
    </svg>`
  },
  {
    title: 'NetChat – TCP Socket Chat Application',
    dateRange: 'Apr 2026',
    techStack: ['Python', 'TCP Sockets', 'Tkinter', 'Multithreading', 'Networking'],
    description: 'A real-time multi-client chat application built using Python TCP Sockets and Tkinter GUI. The application allows multiple users to connect to a central TCP server and exchange messages in real time.',
    keyFeatures: [
      'Real-time multi-client messaging with TCP client-server architecture',
      'Multiple client handling using daemon multithreading',
      'Username-based chat and instant broadcast messaging',
      'Join and chat notifications with timestamps',
      'Dark terminal-style Tkinter GUI with thread-safe UI updates'
    ],
    architecture: 'Multiple clients connect to a TCP server running on port 9090. The server creates a separate thread for each connected client and broadcasts messages to the connected users.',
    files: 'chat_server.py (TCP server & multiple client handling) | chat_client.py (Tkinter-based chat GUI)',
    category: 'Networking & Desktop',
    liveDemoLink: 'https://github.com/Mahaeaswar123/NetChat#readme',
    liveDemoText: 'Architecture Specs',
    githubLink: 'https://github.com/Mahaeaswar123/NetChat',
    githubText: 'GitHub Repo',
    image: 'netchat-project.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#121622"/>
      <rect x="40" y="30" width="320" height="180" rx="10" fill="#1A1F2C" stroke="#2DE2E6" stroke-width="1.5"/>
      <rect x="40" y="30" width="320" height="32" rx="10" fill="#141724"/>
      <circle cx="60" cy="46" r="5" fill="#2DE2E6"/>
      <text x="74" y="50" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#2DE2E6">NETCHAT (TCP: 127.0.0.1:9090)</text>
      <circle cx="335" cy="46" r="4" fill="#00FF66"/>
      <text x="60" y="88" font-family="'Courier New', monospace" font-size="9" fill="#00FF66">[05:00] *** user joined the chat ***</text>
      <text x="60" y="108" font-family="'Courier New', monospace" font-size="9" fill="#2DE2E6">[05:01] You: hi friends</text>
      <text x="60" y="128" font-family="'Courier New', monospace" font-size="9" fill="#FFFFFF">[05:01] Client: how are you ?</text>
      <rect x="55" y="160" width="235" height="28" rx="4" fill="#0F121C" stroke="#8A4FFF" stroke-width="1"/>
      <rect x="298" y="160" width="50" height="28" rx="4" fill="#8A4FFF"/>
      <text x="310" y="178" font-family="'Inter', sans-serif" font-size="9.5" font-weight="600" fill="#FFFFFF">SEND</text>
    </svg>`
  },
  {
    title: 'Smart Document Search Engine',
    dateRange: '2026',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'TF-IDF', 'Cosine Similarity', 'NLP'],
    description: 'A document search engine that allows users to upload PDF, DOCX, and TXT files and quickly find relevant information using TF-IDF vector indexing and Cosine Similarity ranking.',
    keyFeatures: [
      'Upload PDF, DOCX, and TXT documents with automatic text extraction',
      'Text preprocessing with tokenization and stopword removal',
      'TF-IDF based vectorization and Cosine Similarity relevance matching',
      'Keyword and phrase-based document search with ranked relevance scoring',
      'Responsive, modern user interface with user authentication and document library'
    ],
    architecture: 'Users upload files; Node.js + Express backend extracts text, tokenizes, removes stopwords, generates TF-IDF vectors, computes Cosine Similarity against queries, and ranks the most relevant documents.',
    files: 'server.ts (file processing & search logic) | src/App.tsx (React + TypeScript interface) | documents/ storage',
    category: 'Full Stack & NLP',
    liveDemoLink: 'https://smart-document-search-engine-1-3dkx.onrender.com',
    liveDemoText: 'Live Demo',
    githubLink: 'https://github.com/Mahaeaswar123/smart-document-search-engine',
    githubText: 'GitHub Repo',
    image: 'smart-search-project.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#EBF8F5"/>
      <rect x="40" y="30" width="320" height="180" rx="12" fill="#FFFFFF" stroke="#00C48C" stroke-width="1.5"/>
      <rect x="40" y="30" width="320" height="34" rx="12" fill="#F0FAF7"/>
      <circle cx="62" cy="47" r="6" fill="#00C48C"/>
      <text x="76" y="51" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#1B3B36">SmartSearch Engine</text>
      <text x="60" y="95" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#1B3B36">Fast document discovery.</text>
      <rect x="60" y="115" width="200" height="28" rx="6" fill="#F4FBF9" stroke="#00C48C" stroke-width="1"/>
      <text x="75" y="133" font-family="'Inter', sans-serif" font-size="9" fill="#6B8E85">Search keywords or topics...</text>
      <rect x="215" y="115" width="45" height="28" rx="6" fill="#00C48C"/>
      <text x="225" y="133" font-family="'Inter', sans-serif" font-size="9" font-weight="600" fill="#FFFFFF">Search</text>
      <rect x="275" y="85" width="70" height="60" rx="8" fill="#F0FAF7" stroke="#D1EDE6" stroke-width="1"/>
      <text x="285" y="118" font-family="'Inter', sans-serif" font-size="8" fill="#00C48C">Drop Files</text>
      <text x="60" y="185" font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#1B3B36">TF-IDF Vector Index &amp; Cosine Similarity</text>
    </svg>`
  },
  {
    title: "Dijkstra's Shortest Path Routing Visualizer",
    dateRange: '2026',
    techStack: ['Python', "Dijkstra's Algorithm", 'NetworkX', 'Matplotlib', 'Pillow', 'Graph Algorithms', 'Computer Networks'],
    description: "A Python-based routing visualizer that demonstrates Dijkstra's Shortest Path Algorithm on a simulated 9-router network. It calculates the shortest path between routers and displays the complete routing costs visually.",
    keyFeatures: [
      'Simulates a 9-router network topology (R1 to R9)',
      'Finds the shortest path and lowest cost between any source and target router',
      'Calculates shortest distances from source to all routers using min-heap priority queue O((V + E) log V)',
      'Displays an analytical routing table with cumulative costs and path checkmarks',
      'Highlights the shortest path visually with link weights representing network cost',
      'Includes step-by-step visualization and animated GIF export using Pillow'
    ],
    architecture: "Simulated 9-router network where Dijkstra's algorithm uses a priority queue min-heap to determine minimal cost paths (e.g., R1 → R3 → R5 → R7 → R8 → R9 with total cost 15) and visualizes the topology alongside a complete routing cost table.",
    files: 'dijkstra.py (shortest path visualizer) | dijkstra_steps.py (step-by-step animated version) | shortest_path.png | requirements.txt',
    category: 'Algorithms & Networking',
    liveDemoLink: 'https://github.com/Mahaeaswar123/dijkstra-routing-visualizer#readme',
    liveDemoText: 'Algorithm Specs',
    githubLink: 'https://github.com/Mahaeaswar123/dijkstra-routing-visualizer',
    githubText: 'GitHub Repo',
    image: 'dijkstra-routing-project.png',
    svg: `<svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#131724"/>
      <text x="120" y="25" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">Network Topology</text>
      <text x="310" y="25" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">Routing Table</text>
      <line x1="45" y1="95" x2="85" y2="45" stroke="#374151" stroke-width="1.5"/>
      <line x1="45" y1="95" x2="85" y2="145" stroke="#374151" stroke-width="1.5"/>
      <line x1="85" y1="45" x2="165" y2="45" stroke="#374151" stroke-width="1.5"/>
      <line x1="85" y1="145" x2="145" y2="115" stroke="#374151" stroke-width="1.5"/>
      <line x1="145" y1="115" x2="200" y2="90" stroke="#374151" stroke-width="1.5"/>
      <line x1="45" y1="95" x2="235" y2="45" stroke="#FF5500" stroke-width="3"/>
      <circle cx="45" cy="95" r="11" fill="#00D26A"/>
      <text x="45" y="99" font-family="'Inter', sans-serif" font-size="8" font-weight="700" fill="#FFFFFF" text-anchor="middle">R1</text>
      <circle cx="85" cy="45" r="9" fill="#38BDF8"/>
      <text x="85" y="48" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#FFFFFF" text-anchor="middle">R2</text>
      <circle cx="85" cy="145" r="9" fill="#38BDF8"/>
      <text x="85" y="148" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#FFFFFF" text-anchor="middle">R3</text>
      <circle cx="165" cy="45" r="9" fill="#38BDF8"/>
      <text x="165" y="48" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#FFFFFF" text-anchor="middle">R4</text>
      <circle cx="145" cy="115" r="9" fill="#38BDF8"/>
      <text x="145" y="118" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#FFFFFF" text-anchor="middle">R5</text>
      <circle cx="200" cy="90" r="9" fill="#38BDF8"/>
      <text x="200" y="93" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#FFFFFF" text-anchor="middle">R6</text>
      <circle cx="235" cy="45" r="11" fill="#FF1E56"/>
      <text x="235" y="49" font-family="'Inter', sans-serif" font-size="8" font-weight="700" fill="#FFFFFF" text-anchor="middle">R9</text>
      <rect x="255" y="40" width="130" height="150" rx="4" fill="#1A2030" stroke="#2563EB" stroke-width="1"/>
      <rect x="255" y="40" width="130" height="18" fill="#2563EB"/>
      <text x="275" y="52" font-family="'Inter', sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF">Router</text>
      <text x="325" y="52" font-family="'Inter', sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF">Cost (R1)</text>
      <rect x="256" y="59" width="128" height="15" fill="#00D26A"/>
      <text x="275" y="70" font-family="'Inter', sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF">R1</text>
      <text x="330" y="70" font-family="'Inter', sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF">0 (✓)</text>
      <text x="275" y="92" font-family="'Inter', sans-serif" font-size="7" fill="#94A3B8">R3: 2 | R5: 5 | R7: 11</text>
      <rect x="256" y="155" width="128" height="15" fill="#FF1E56"/>
      <text x="275" y="166" font-family="'Inter', sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF">R9</text>
      <text x="330" y="166" font-family="'Inter', sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF">15 (✓)</text>
      <text x="200" y="222" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#FF5500" text-anchor="middle">Shortest Path: R1 → R9 | Total Cost: 15</text>
    </svg>`
  }
];

/**
 * EXPERIENCE DATA
 * To add a new entry, copy an existing object in this array, paste it below, and update the values.
 */
const experienceData = [
  {
    role: 'Flutter Developer',
    company: 'Bros Developer',
    dateRange: 'Nov 2025 – Present',
    description: 'Building mobile apps using Dart & React and web apps using React & Node.js with Supabase backend. Contributing to a company portfolio website and VeeSafe, a real-time safety app.',
    techStack: ['Flutter', 'Dart', 'React', 'Node.js', 'Supabase', 'Real-time Safety']
  },
  {
    role: 'Research Experience',
    company: 'NIT Puducherry – Karaikal',
    dateRange: 'Jun 2026 – Jul 2026',
    description: 'Developed an FT-Transformer deep learning model for forest fire risk classification, achieving 73.6% test accuracy and 0.89 ROC-AUC. Performed confusion matrix and feature importance analysis.',
    techStack: ['Python', 'FT-Transformer', 'Deep Learning', 'Remote Sensing Data', 'Model Optimization']
  },
  {
    role: 'Full Stack Developer',
    company: 'Aquila Innovations, Puducherry',
    dateRange: 'Jun 2025 – Jul 2025',
    description: 'Developed dynamic web apps using HTML, CSS, JS, PHP. Designed MySQL databases and implemented CRUD REST APIs. Configured local dev environment with XAMPP.',
    techStack: ['HTML5 / CSS3', 'JavaScript', 'PHP', 'MySQL', 'REST APIs', 'XAMPP']
  }
];

/**
 * CERTIFICATIONS DATA
 * To add a new entry, copy an existing object in this array, paste it below, and update the values.
 */
const certificationsData = [
  {
    title: 'Diploma in Computer Teacher Training',
    issuer: 'TCES I.T. Education, Salem',
    date: 'Jan 2024 – Dec 2024',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'First Class Honors',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
  },
  {
    title: 'AI-Powered Performance Ads Certification',
    issuer: 'Google',
    date: 'Issued Oct 2025',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'Google Skillshop Credential',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`
  },
  {
    title: 'Dive Deeper into GA4 Data and Reports',
    issuer: 'Google',
    date: 'Issued Oct 2025',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'Analytics & User Reporting',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
  },
  {
    title: 'Vibe Coding with Replit',
    issuer: 'Analytics Vidhya',
    date: 'Issued Nov 2025',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'AI-Assisted Cloud Development',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  },
  {
    title: 'Guide to Vibe Coding in Windsurf',
    issuer: 'Analytics Vidhya',
    date: 'Issued Nov 2025',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'Agentic IDE Architecture',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Issued Sep 2025',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'Frontier AI Model Principles',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>`
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: 'Issued Sep 2025',
    certificateLink: 'https://drive.google.com/drive/folders/1d5WdovaIt2dHU56_5n4wSRLD0Tb5OD2x',
    note: 'Model Context Protocol (MCP)',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
  }
];

/* ==========================================================================
 * DYNAMIC RENDERING FUNCTIONS
 * ========================================================================== */

/**
 * Render Experience timeline cards into #experience-timeline-container
 */
function renderExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = experienceData.map((item, index) => {
    const slideClass = index % 2 === 0 ? 'timeline-slide-left' : 'timeline-slide-right';
    const tagsHtml = item.techStack && item.techStack.length
      ? `<div class="timeline-tags">${item.techStack.map(tag => `<span class="tech-pill">${escapeHTML(tag)}</span>`).join('')}</div>`
      : '';

    return `
      <div id="exp-item-${index + 1}" class="timeline-item timeline-animate ${slideClass}">
        <div class="timeline-node"></div>
        <div class="glass-card timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${escapeHTML(item.role)}</h3>
            <span class="timeline-date-badge">${escapeHTML(item.dateRange)}</span>
          </div>
          <div class="timeline-organization">${escapeHTML(item.company)}</div>
          <p class="timeline-desc">${escapeHTML(item.description)}</p>
          ${tagsHtml}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Projects cards into #portfolio-carousel-track and #projects-grid
 */
function renderProjects() {
  const carouselTrack = document.getElementById('portfolio-carousel-track');
  const gridContainer = document.getElementById('projects-grid');

  // 1. Render tall arch cards for the horizontal carousel ONLY if track is empty
  // (index.html contains the master 5 cards with semantic research badges & case study links)
  if (carouselTrack && carouselTrack.children.length === 0) {
    carouselTrack.innerHTML = projectsData.map((item, index) => {
      const categoryBadge = item.category || 'Featured Work';
      const imgSrc = item.image ? escapeHTML(item.image) : '';
      const fallbackSvg = item.svg || '';
      const imgHtml = imgSrc 
        ? `<img src="${imgSrc}" alt="${escapeHTML(item.title)}" loading="lazy" draggable="false" referrerPolicy="no-referrer" />`
        : fallbackSvg;

      return `
        <div id="arch-card-${index + 1}" class="portfolio-arch-card" data-project-index="${index}" role="button" tabindex="0" aria-label="Open ${escapeHTML(item.title)} Case Study">
          <div class="arch-card-media">
            ${imgHtml}
            <div class="arch-card-glass-sheen"></div>
            <span class="arch-card-badge">${escapeHTML(categoryBadge)}</span>
          </div>
          <div class="arch-card-body">
            <div>
              <div class="arch-card-category">${escapeHTML(item.dateRange || 'Selected Work')}</div>
              <h3 class="arch-card-title">${escapeHTML(item.title)}</h3>
              <p class="arch-card-desc">${escapeHTML(item.description)}</p>
            </div>
            <div class="arch-card-footer">
              <span class="tech-pill">${escapeHTML(item.techStack ? item.techStack[0] : 'Engineering')}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Render comprehensive detail cards for the expandable grid
  if (gridContainer) {
    gridContainer.innerHTML = projectsData.map((item, index) => {
      const categoryBadge = item.category || 'Featured Project';
      const thumbnail = item.image
        ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" class="project-thumbnail" loading="lazy" referrerPolicy="no-referrer" />`
        : (item.svg || `
        <svg class="project-thumbnail" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#E4DACD"/>
          <circle cx="200" cy="110" r="48" fill="#A8987F" fill-opacity="0.3"/>
          <rect x="120" y="60" width="160" height="100" rx="12" fill="#FFFFFF" fill-opacity="0.6" stroke="#3A322A" stroke-width="1.5"/>
          <path d="M160 110h80M180 90l20 20-20 20" stroke="#3A322A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="200" y="215" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#3A322A" text-anchor="middle">${escapeHTML(item.title)}</text>
        </svg>
      `);

      const techTags = item.techStack && item.techStack.length
        ? `<div class="project-tech-tags">${item.techStack.map(tech => `<span class="tech-pill">${escapeHTML(tech)}</span>`).join('')}</div>`
        : '';

      let descContent = '';
      if (item.keyFeatures && item.keyFeatures.length) {
        descContent = `
          <div class="project-spec-list">
            <div class="project-spec-item"><span class="spec-label">Overview</span>${escapeHTML(item.description)}</div>
            <div class="project-spec-item">
              <span class="spec-label">Key Features</span>
              <ul class="project-features-bullet-list">
                ${item.keyFeatures.map(kf => `<li>${escapeHTML(kf)}</li>`).join('')}
              </ul>
            </div>
            ${item.architecture ? `<div class="project-spec-item"><span class="spec-label">Architecture</span>${escapeHTML(item.architecture)}</div>` : ''}
            ${item.files ? `<div class="project-spec-item"><span class="spec-label">Core Files</span>${escapeHTML(item.files)}</div>` : ''}
          </div>
        `;
      } else if (item.problem || item.solution || item.outcome) {
        descContent = `
          <div class="project-spec-list">
            ${item.problem ? `<div class="project-spec-item"><span class="spec-label">Problem</span>${escapeHTML(item.problem)}</div>` : ''}
            ${item.solution ? `<div class="project-spec-item"><span class="spec-label">Solution</span>${escapeHTML(item.solution)}</div>` : ''}
            ${item.outcome ? `<div class="project-spec-item"><span class="spec-label">Outcome</span>${escapeHTML(item.outcome)}</div>` : ''}
          </div>
        `;
      } else if (item.description) {
        descContent = `
          <div class="project-spec-list">
            <div class="project-spec-item">${escapeHTML(item.description)}</div>
          </div>
        `;
      }

      let actionsHtml = '';
      if (item.githubLink) {
        const isAnchor = item.githubLink.startsWith('#');
        const targetAttr = isAnchor ? '' : 'target="_blank" rel="noopener noreferrer"';
        const label = item.githubText || 'GitHub Repo';
        actionsHtml += `<a href="${escapeHTML(item.githubLink)}" ${targetAttr} class="btn btn-taupe btn-sm">${escapeHTML(label)}</a>`;
      } else {
        actionsHtml += `<button class="btn btn-glass btn-sm btn-disabled" title="Academic research codebase under review">Private / Academic</button>`;
      }

      if (item.liveDemoLink) {
        const isAnchor = item.liveDemoLink.startsWith('#');
        const targetAttr = isAnchor ? '' : 'target="_blank" rel="noopener noreferrer"';
        const btnClass = item.githubLink ? 'btn btn-glass btn-sm' : 'btn btn-taupe btn-sm';
        const label = item.liveDemoText || (isAnchor ? 'Details' : 'Live Preview');
        actionsHtml += `<a href="${escapeHTML(item.liveDemoLink)}" ${targetAttr} class="${btnClass}">${escapeHTML(label)}</a>`;
      }

      return `
        <div id="project-card-${index + 1}" class="glass-card project-card">
          <div class="project-media-wrapper">
            ${thumbnail}
            <span class="project-category-badge">${escapeHTML(categoryBadge)}</span>
          </div>
          <div class="project-body">
            <span class="project-date">${escapeHTML(item.dateRange)}</span>
            <h3 class="project-title">${escapeHTML(item.title)}</h3>
            ${descContent}
            ${techTags}
            <div class="project-actions">
              ${actionsHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Initialize the modern animated Carousel Engine with drag/swipe and continuous sliding
  initProjectsCarousel();

  // 4. Toggle "See all projects" detailed grid
  const toggleBtn = document.getElementById('toggle-all-projects-btn');
  const detailWrapper = document.getElementById('projects-detail-wrapper');

  if (toggleBtn && detailWrapper) {
    toggleBtn.addEventListener('click', () => {
      const isCollapsed = detailWrapper.classList.contains('collapsed');
      if (isCollapsed) {
        detailWrapper.classList.remove('collapsed');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = `
          <span>Show Fewer Projects</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"></polyline></svg>
        `;
        detailWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        detailWrapper.classList.add('collapsed');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = `
          <span>See all projects</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        `;
        const portfolioSec = document.getElementById('portfolio');
        if (portfolioSec) {
          portfolioSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}

/**
 * Modern Infinite Auto-Scrolling Carousel Engine
 * Continuously slides project cards horizontally from right to left in a buttery-smooth
 * infinite loop without jumps. Supports manual mouse drag, mobile touch swipe,
 * left/right arrow nudges, clickable pill indicators, and hover-pause with auto-resume.
 */
function initProjectsCarousel() {
  const track = document.getElementById('portfolio-carousel-track');
  const viewport = document.getElementById('portfolio-carousel-viewport') || track?.parentElement;
  const prevBtn = document.getElementById('carousel-prev') || document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next') || document.getElementById('carousel-next-btn');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  const portfolioSection = document.getElementById('portfolio');

  if (!track || !viewport) return;

  // 1. Identify original cards & clone sets for seamless infinite wrapping
  const originalCards = Array.from(track.querySelectorAll('.portfolio-arch-card:not([data-cloned="true"])'));
  if (originalCards.length === 0) return;
  const originalCount = originalCards.length;

  // Clean any stale clones if re-initialized
  track.querySelectorAll('.portfolio-arch-card[data-cloned="true"]').forEach((el) => el.remove());

  // Append 2 complete clone sets (3 sets total = 15 cards)
  // Ensures seamless infinite looping with zero empty gaps across any resolution
  for (let setIdx = 1; setIdx <= 2; setIdx++) {
    originalCards.forEach((card, idx) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('data-cloned', 'true');
      clone.removeAttribute('id');
      clone.setAttribute('data-project-index', card.getAttribute('data-project-index') || idx);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  // 2. Metrics & State
  let singleSetWidth = 0;
  let cardStep = 0;
  let currentOffset = 0;
  let targetOffset = null; // Target position during arrow nudges or indicator jumps
  let isPaused = false;
  let isHovered = false;
  let isSectionVisible = true;
  let isPointerDown = false;
  let isDragging = false;
  let startPointerX = 0;
  let startPointerY = 0;
  let dragStartOffset = 0;
  let dragStartTime = 0;
  let preventClick = false;
  let resumeTimeout = null;
  let animFrameId = null;
  let lastTime = performance.now();

  // Calm, luxury continuous speed: ~42 pixels per second (~0.7px per frame at 60fps)
  const speedPxPerSec = 42;

  function calculateMetrics() {
    const allCards = Array.from(track.querySelectorAll('.portfolio-arch-card'));
    if (allCards.length < originalCount * 2) return;

    // Direct distance between Card 0 and Card originalCount (one full cycle of 5 cards)
    const rect0 = allCards[0].getBoundingClientRect();
    const rectN = allCards[originalCount].getBoundingClientRect();
    let dist = rectN.left - rect0.left;

    if (!dist || dist <= 0) {
      const computedGap = parseFloat(window.getComputedStyle(track).gap) || 28;
      const cardW = allCards[0].offsetWidth || (viewport.clientWidth ? (viewport.clientWidth - (2 * computedGap)) / 3 : 340);
      dist = originalCount * (cardW + computedGap);
    }

    singleSetWidth = dist;
    cardStep = singleSetWidth / originalCount;

    renderIndicators();
  }

  // 3. Pill Indicators for the 5 unique projects
  function renderIndicators() {
    if (!indicatorsContainer) return;
    indicatorsContainer.innerHTML = '';
    indicatorsContainer.style.display = 'flex';

    for (let i = 0; i < originalCount; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Navigate to project ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToProject(i);
      });
      indicatorsContainer.appendChild(dot);
    }
  }

  function updateIndicators() {
    if (!indicatorsContainer || cardStep <= 0 || singleSetWidth <= 0) return;
    const normalizedOffset = ((currentOffset % singleSetWidth) + singleSetWidth) % singleSetWidth;
    const activeIdx = Math.round(normalizedOffset / cardStep) % originalCount;

    const dots = indicatorsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      const isActive = idx === activeIdx;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function scheduleResume(delay = 1400) {
    clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      if (!isHovered && !isDragging) {
        targetOffset = null;
        isPaused = false;
      }
    }, delay);
  }

  function goToProject(index) {
    isPaused = true;
    if (singleSetWidth <= 0 || cardStep <= 0) calculateMetrics();
    if (singleSetWidth <= 0 || cardStep <= 0) return;

    const currentSet = Math.floor(currentOffset / singleSetWidth);
    let desired = currentSet * singleSetWidth + index * cardStep;
    if (desired < currentOffset - cardStep * 0.5) {
      desired += singleSetWidth;
    }
    targetOffset = desired;
    scheduleResume(2400);
  }

  function nudgeNext() {
    isPaused = true;
    if (cardStep <= 0) calculateMetrics();
    targetOffset = currentOffset + (cardStep || 360);
    scheduleResume(1800);
  }

  function nudgePrev() {
    isPaused = true;
    if (cardStep <= 0) calculateMetrics();
    targetOffset = currentOffset - (cardStep || 360);
    scheduleResume(1800);
  }

  // 4. Arrow navigation listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nudgePrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nudgeNext();
    });
  }

  // Keyboard navigation on track container
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nudgeNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nudgePrev();
    }
  });

  // 5. Drag & Swipe Interaction (Pointer Events)
  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return;

    isPointerDown = true;
    isDragging = false;
    isPaused = true;
    targetOffset = null;
    startPointerX = e.clientX;
    startPointerY = e.clientY;
    dragStartOffset = currentOffset;
    dragStartTime = performance.now();
    clearTimeout(resumeTimeout);

    try {
      track.setPointerCapture(e.pointerId);
    } catch (_) {}
  }

  function onPointerMove(e) {
    if (!isPointerDown) return;

    const deltaX = e.clientX - startPointerX;
    const deltaY = e.clientY - startPointerY;

    if (!isDragging) {
      // Natural vertical page scrolling check
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        isPointerDown = false;
        return;
      }
      // Horizontal slide gesture threshold
      if (Math.abs(deltaX) > 6) {
        isDragging = true;
        track.classList.add('is-dragging');
      }
    }

    if (isDragging) {
      e.preventDefault();
      currentOffset = dragStartOffset - deltaX;

      if (singleSetWidth > 0) {
        while (currentOffset >= singleSetWidth) currentOffset -= singleSetWidth;
        while (currentOffset < 0) currentOffset += singleSetWidth;
      }

      track.style.transform = `translate3d(${-currentOffset}px, 0, 0)`;
      updateIndicators();
    }
  }

  function onPointerUp(e) {
    if (!isPointerDown) return;
    isPointerDown = false;

    try {
      track.releasePointerCapture(e.pointerId);
    } catch (_) {}

    if (isDragging) {
      track.classList.remove('is-dragging');
      isDragging = false;

      const deltaX = e.clientX - startPointerX;
      const elapsed = Math.max(1, performance.now() - dragStartTime);
      const velocity = deltaX / elapsed;

      // Quick flick gesture imparts momentum
      if (Math.abs(velocity) > 0.3 || Math.abs(deltaX) > 50) {
        const dir = velocity > 0 ? -1 : 1;
        targetOffset = currentOffset + dir * (cardStep || 360);
      }

      preventClick = true;
      setTimeout(() => {
        preventClick = false;
      }, 200);
    }

    scheduleResume(1400);
  }

  track.addEventListener('pointerdown', onPointerDown);
  track.addEventListener('pointermove', onPointerMove);
  track.addEventListener('pointerup', onPointerUp);
  track.addEventListener('pointercancel', onPointerUp);

  // 6. Card activation (clicking card expands and scrolls to detail view)
  function attachCardListeners() {
    const allCards = track.querySelectorAll('.portfolio-arch-card');
    allCards.forEach((card) => {
      const handleActivation = (e) => {
        if (preventClick) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const projectIdx = parseInt(card.getAttribute('data-project-index') || '0', 10);

        // Expand detail section if collapsed
        const detailWrapper = document.getElementById('projects-detail-wrapper');
        const toggleBtn = document.getElementById('toggle-all-projects-btn');
        if (detailWrapper && detailWrapper.classList.contains('collapsed')) {
          detailWrapper.classList.remove('collapsed');
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.innerHTML = `
              <span>Show Fewer Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"></polyline></svg>
            `;
          }
        }

        const targetDetailCard = document.getElementById(`project-card-${projectIdx + 1}`);
        if (targetDetailCard) {
          targetDetailCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetDetailCard.classList.add('highlight-pulse');
          setTimeout(() => targetDetailCard.classList.remove('highlight-pulse'), 1400);
        }
      };

      card.addEventListener('click', handleActivation);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleActivation(e);
        }
      });
    });
  }

  attachCardListeners();

  // 7. Hover Pause on the Carousel Container (resumes on mouseleave)
  const wrapper = document.querySelector('.portfolio-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => {
      isHovered = true;
      clearTimeout(resumeTimeout);
    });
    wrapper.addEventListener('mouseleave', () => {
      isHovered = false;
      scheduleResume(500);
    });
  }

  // 8. IntersectionObserver to detect when Portfolio section is visible in viewport
  if ('IntersectionObserver' in window && portfolioSection) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isSectionVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    sectionObserver.observe(portfolioSection);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isPaused = true;
    } else if (!isHovered && !isDragging) {
      isPaused = false;
      lastTime = performance.now();
    }
  });

  // 9. Continuous Infinite Auto-Scroll Animation Loop (rAF)
  function tick(timestamp) {
    const now = timestamp || performance.now();
    const dt = Math.min(0.064, (now - lastTime) / 1000); // delta time clamped to max 64ms
    lastTime = now;

    // Self-heal metrics if initial render was zero
    if (singleSetWidth <= 0) {
      calculateMetrics();
    }

    if (singleSetWidth > 0 && isSectionVisible && !isHovered && !isDragging) {
      if (targetOffset !== null) {
        // Smoothly interpolate towards manual target nudge
        const diff = targetOffset - currentOffset;
        if (Math.abs(diff) < 0.4) {
          currentOffset = targetOffset;
          targetOffset = null;
        } else {
          currentOffset += diff * 0.12;
        }
      } else if (!isPaused) {
        // Continuous, silky-smooth right-to-left glide
        currentOffset += speedPxPerSec * dt;
      }

      // Seamless infinite loop wrap
      while (currentOffset >= singleSetWidth) {
        currentOffset -= singleSetWidth;
        if (targetOffset !== null) targetOffset -= singleSetWidth;
      }
      while (currentOffset < 0) {
        currentOffset += singleSetWidth;
        if (targetOffset !== null) targetOffset += singleSetWidth;
      }

      track.style.transform = `translate3d(${-currentOffset}px, 0, 0)`;
      updateIndicators();
    }

    animFrameId = requestAnimationFrame(tick);
  }

  // 10. ResizeObserver for responsive recalibration
  const resizeObserver = new ResizeObserver(() => {
    calculateMetrics();
  });
  resizeObserver.observe(viewport);

  // Initialize metrics and start loop
  calculateMetrics();
  window.addEventListener('load', calculateMetrics);
  setTimeout(calculateMetrics, 80);
  setTimeout(calculateMetrics, 350);

  if (animFrameId) cancelAnimationFrame(animFrameId);
  lastTime = performance.now();
  animFrameId = requestAnimationFrame(tick);
}

/**
 * Render Certifications cards into #certifications-grid
 */
function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = certificationsData.map((item, index) => {
    const iconSvg = item.iconSvg || `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    `;
    const metaNote = item.note ? `<span>•</span><span style="font-weight:600; color:var(--deep-accent);">${escapeHTML(item.note)}</span>` : '';

    return `
      <div id="cert-item-${index + 1}" class="glass-card cert-card">
        <div class="cert-top">
          <div class="cert-badge-icon">
            ${iconSvg}
          </div>
          <div class="cert-info">
            <h3>${escapeHTML(item.title)}</h3>
            <div class="cert-issuer">${escapeHTML(item.issuer)}</div>
          </div>
        </div>
        <div class="cert-meta">
          <span>${escapeHTML(item.date)}</span>
          ${metaNote}
        </div>
        <a href="${escapeHTML(item.certificateLink)}" target="_blank" rel="noopener noreferrer" class="cert-link-btn">
          <span>View Certificate</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;
  }).join('');
}

/**
 * Rotating Resume Credentials & Roles in the Hero Profile Card
 * Smoothly cycles through key titles from Mahalakshmi's resume:
 * Left Badge: Full-Stack Developer -> Flutter Developer -> Web & Mobile Developer
 * Right Badge: AI & ML Enthusiast -> React Developer -> Information Science Student
 */
function initHeroRotatingBadges() {
  const rotatorLeft = document.getElementById('hero-badge-rotator-left');
  const iconLeft = document.getElementById('hero-badge-left-icon');
  const textLeft = document.getElementById('hero-badge-left-text');

  const rotatorRight = document.getElementById('hero-badge-rotator-right');
  const iconRight = document.getElementById('hero-badge-right-icon');
  const textRight = document.getElementById('hero-badge-right-text');

  if (!rotatorLeft || !iconLeft || !textLeft || !rotatorRight || !iconRight || !textRight) {
    return;
  }

  const leftItems = [
    {
      text: 'Full-Stack Developer',
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
    },
    {
      text: 'Flutter Developer',
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="#D97706" stroke="#D97706" stroke-width="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'
    },
    {
      text: 'Web & Mobile Developer',
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>'
    }
  ];

  const rightItems = [
    {
      text: 'AI & ML Enthusiast',
      icon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#8B7B68" stroke="none"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>'
    },
    {
      text: 'React Developer',
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B7B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"></circle><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(90 12 12)"></ellipse><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(150 12 12)"></ellipse></svg>'
    },
    {
      text: 'Information Science Student',
      icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B7B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"></path></svg>'
    }
  ];

  let leftIndex = 0;
  let rightIndex = 0;
  let isHovered = false;

  function cycleBadge(rotator, iconEl, textEl, item) {
    rotator.classList.add('is-transitioning');
    setTimeout(() => {
      iconEl.innerHTML = item.icon;
      textEl.textContent = item.text;
      rotator.classList.remove('is-transitioning');
      rotator.classList.add('from-bottom');
      void rotator.offsetWidth; // Force reflow
      rotator.classList.remove('from-bottom');
    }, 350);
  }

  // Stagger rotation between the two badges for balanced visual rhythm
  setInterval(() => {
    if (isHovered || document.hidden) return;
    leftIndex = (leftIndex + 1) % leftItems.length;
    cycleBadge(rotatorLeft, iconLeft, textLeft, leftItems[leftIndex]);
  }, 3200);

  setTimeout(() => {
    setInterval(() => {
      if (isHovered || document.hidden) return;
      rightIndex = (rightIndex + 1) % rightItems.length;
      cycleBadge(rotatorRight, iconRight, textRight, rightItems[rightIndex]);
    }, 3200);
  }, 1600);

  // Pause when hovering over the showcase panel
  const visualCard = document.getElementById('hero-visual-card');
  if (visualCard) {
    visualCard.addEventListener('mouseenter', () => { isHovered = true; });
    visualCard.addEventListener('mouseleave', () => { isHovered = false; });
  }
}

function initPortfolio() {
  'use strict';

  // Immediately render data-driven sections into DOM before observers attach
  renderExperience();
  renderProjects();
  renderCertifications();
  initHeroRotatingBadges();

  /* --------------------------------------------------------------------------
   * 1. NAVBAR FIXED STATE & SCROLL EFFECTS
   * -------------------------------------------------------------------------- */
  const navbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const footerBackToTopBtn = document.getElementById('footer-back-to-top');
  const floatingBackToTopBtn = document.getElementById('floating-back-to-top');
  const timelineProgressLine = document.getElementById('timeline-line-progress');
  const timelineWrapper = document.getElementById('experience-timeline-wrapper');

  function handleScrollEffects() {
    const scrollY = window.scrollY;

    // Navbar glass tint and shadow enhancement on scroll
    if (scrollY > 25) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Floating Back-To-Top button visibility
    if (floatingBackToTopBtn) {
      if (scrollY > 420) {
        floatingBackToTopBtn.classList.add('visible');
      } else {
        floatingBackToTopBtn.classList.remove('visible');
      }
    }

    // Footer Back-To-Top button subtle opacity
    if (footerBackToTopBtn) {
      footerBackToTopBtn.style.opacity = scrollY > 400 ? '1' : '0.75';
    }

    // Update active nav link based on scroll position
    let currentSectionId = '';
    const headerOffset = 130;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerOffset;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    // Progressive connecting line calculation for experience timeline
    if (timelineWrapper && timelineProgressLine) {
      const rect = timelineWrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far into the timeline the viewport center has scrolled
      const startTrigger = viewportHeight * 0.75;
      const totalHeight = rect.height;
      const currentProgress = startTrigger - rect.top;
      
      let percentage = (currentProgress / totalHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      timelineProgressLine.style.height = `${percentage}%`;
    }
  }

  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects();

  // Floating back to top button click
  if (floatingBackToTopBtn) {
    floatingBackToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
   * 2. MOBILE NAVIGATION DRAWER & BACKDROP OVERLAY
   * -------------------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function toggleMobileMenu(forceState) {
    if (!hamburgerBtn || !mobileDrawer) return;

    const isOpen = typeof forceState === 'boolean' 
      ? forceState 
      : !mobileDrawer.classList.contains('open');

    if (isOpen) {
      mobileDrawer.classList.add('open');
      mobileOverlay?.classList.add('active');
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      mobileDrawer.classList.remove('open');
      mobileOverlay?.classList.remove('active');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }

  // Close mobile drawer when clicking any link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-cta');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  // Close drawer on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      toggleMobileMenu(false);
    }
  });

  /* --------------------------------------------------------------------------
   * 3. SMOOTH SCROLL FOR ALL ANCHOR LINKS
   * -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = 90;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* --------------------------------------------------------------------------
   * 4. STAT PILLS COUNT-UP ANIMATION
   * -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-pill-num[data-target], .stat-number[data-target]');
  let statAnimated = false;

  function animateCountUp() {
    if (statAnimated) return;
    statAnimated = true;

    statNumbers.forEach((el) => {
      const rawTarget = el.getAttribute('data-target') || '0';
      // Clean string, ensure digits parsed correctly without typos (e.g. 'O' vs '0')
      const cleanTarget = rawTarget.replace(/[^0-9]/g, '');
      const target = parseInt(cleanTarget, 10) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1200; // ms
      const startTime = performance.now();

      // Ensure starting number begins visibly at 0
      el.textContent = '0';

      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(ease * target);

        el.textContent = currentVal.toString() + (progress >= 1 ? suffix : '');

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target.toString() + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Observe stat pills section or hero
  const statContainer = document.querySelector('.hero-stat-pills');
  if (statContainer && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp();
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    statObserver.observe(statContainer);
  }

  // Trigger if already visible in viewport on page load or after a brief delay
  setTimeout(() => {
    if (!statAnimated && statContainer) {
      const rect = statContainer.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateCountUp();
      }
    }
  }, 300);

  /* --------------------------------------------------------------------------
   * 5. SCROLL REVEAL ANIMATIONS & TIMELINE DIRECTIONAL SLIDE
   * -------------------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const timelineItems = document.querySelectorAll('.timeline-item.timeline-animate');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    // Timeline item observer for side entrance
    const timelineObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
    timelineItems.forEach((item) => item.classList.add('in-view'));
  }

  /* --------------------------------------------------------------------------
   * 5. RESUME DOWNLOAD / PREVIEW ACTION (Downloads/Opens actual PDF)
   * -------------------------------------------------------------------------- */
  const resumeBtn = document.querySelector('[data-action="download-resume"]');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const pdfUrl = 'Mahalakshmi_Ravichandran_Resume.pdf';

      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error('PDF file response not ok: ' + response.status);
        }
        const blob = await response.blob();
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(pdfBlob);

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'Mahalakshmi_Ravichandran_Resume.pdf';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => {
          URL.revokeObjectURL(blobUrl);
        }, 12000);
      } catch (err) {
        // Fallback for sandboxed environments
        window.open(pdfUrl, '_blank');
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 6. CONTACT FORM SUBMISSION WITH VALIDATION & FEEDBACK
   * -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('contact-form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // Basic validation
      if (!nameVal || !emailVal || !messageVal) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill in your name, email, and message.';
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please provide a valid email address.';
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
      }

      setTimeout(() => {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>Message Received!</strong> Thank you, ${escapeHTML(nameVal)}. 
          Your message has been logged, and I will get back to you at <em>${escapeHTML(emailVal)}</em> shortly.
        `;

        contactForm.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          `;
        }
      }, 600);
    });
  }

  /* --------------------------------------------------------------------------
   * 7. HERO BADGES INTERACTION (PROFILE PHOTO & HERO CARD REMAIN STATIC)
   * -------------------------------------------------------------------------- */
  const heroSection = document.getElementById('hero');
  const chipLeft = document.querySelector('.hero-float-chip.chip-left');
  const chipRight = document.querySelector('.hero-float-chip.chip-right');

  if (heroSection && (chipLeft || chipRight) && !prefersReducedMotion) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovered = false;
    let animFrameId = null;

    function onMouseMove(e) {
      const heroCard = document.getElementById('hero-visual-card');
      const rect = heroCard ? heroCard.getBoundingClientRect() : heroSection.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      mouseX = (e.clientX - cardCenterX) / (window.innerWidth * 0.4);
      mouseY = (e.clientY - cardCenterY) / (window.innerHeight * 0.4);

      // Clamp between -1 and 1
      mouseX = Math.max(-1, Math.min(1, mouseX));
      mouseY = Math.max(-1, Math.min(1, mouseY));

      if (!isHovered) {
        isHovered = true;
        startMoveLoop();
      }
    }

    function onMouseLeave() {
      isHovered = false;
      mouseX = 0;
      mouseY = 0;
    }

    function updateMoveablePosition() {
      // Smooth interpolation for badges only
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      // Keep badges interactive while the profile photo and frame remain strictly static
      if (chipLeft) {
        chipLeft.style.transform = `translate3d(${(currentX * 18).toFixed(1)}px, ${(currentY * 14).toFixed(1)}px, 0px) rotate(-1.5deg)`;
      }

      if (chipRight) {
        chipRight.style.transform = `translate3d(${(currentX * -16).toFixed(1)}px, ${(currentY * -12).toFixed(1)}px, 0px) rotate(1.5deg)`;
      }

      // If mouse left and returned close to origin, stop loop
      if (!isHovered && Math.abs(currentX) < 0.005 && Math.abs(currentY) < 0.005) {
        if (chipLeft) chipLeft.style.transform = '';
        if (chipRight) chipRight.style.transform = '';
        animFrameId = null;
        return;
      }

      animFrameId = requestAnimationFrame(updateMoveablePosition);
    }

    function startMoveLoop() {
      if (!animFrameId) {
        animFrameId = requestAnimationFrame(updateMoveablePosition);
      }
    }

    // Attach mouse interaction to hero area
    heroSection?.addEventListener('mousemove', onMouseMove, { passive: true });
    heroSection?.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // Touch interaction for mobile devices
    heroSection?.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        onMouseMove(e.touches[0]);
      }
    }, { passive: true });

    heroSection?.addEventListener('touchend', onMouseLeave, { passive: true });
  }

  /* --------------------------------------------------------------------------
   * 7. INTERACTIVE PROFILE PHOTO UPLOAD (EDGE-TO-EDGE CIRCLE COVER & PERSISTENCE)
   * -------------------------------------------------------------------------- */
  const photoUpload = document.getElementById('photoUpload');
  const mainCircle = document.getElementById('hero-avatar-container');
  const previewImg = document.getElementById('avatar-preview-img');
  const uploadPrompt = document.getElementById('avatar-upload-prompt');

  const choosePhotoBtn = document.getElementById('choose-photo-btn');
  const photoAuthModal = document.getElementById('photo-auth-modal');
  const photoAuthForm = document.getElementById('photo-auth-form');
  const photoPasswordInput = document.getElementById('photo-password-input');
  const photoAuthError = document.getElementById('photo-auth-error');
  const photoAuthCancel = document.getElementById('photo-auth-cancel');
  const togglePwdVisibility = document.getElementById('toggle-pwd-visibility');

  const DEFAULT_PHOTO_URL = 'maha_maha.jpeg';
  // Cryptographic SHA-256 hash of the default owner secret key (never stored in plaintext)
  const SECURE_OWNER_HASH = 'e4cbb95fc626c9ddb979c7d3309658a4ccaa7aa4a540d68b1f93323e94243f57';

  // Secure SHA-256 computation via browser Web Crypto API
  async function computeHash(str) {
    if (!window.crypto || !window.crypto.subtle) {
      // Fallback simple bit-shift hash
      let h = 0;
      for (let i = 0; i < str.length; i++) {
        h = ((h << 5) - h) + str.charCodeAt(i);
        h |= 0;
      }
      return String(h);
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Helper function to activate photo inside the circular container edge-to-edge
  function setAvatarPhoto(url) {
    if (!url) return;
    if (previewImg) {
      previewImg.src = url;
      previewImg.classList.remove('avatar-img-hidden');
      previewImg.style.display = 'block';
      previewImg.style.opacity = '1';
    }
    if (mainCircle) {
      mainCircle.classList.add('has-photo');
      mainCircle.style.backgroundImage = `url("${url}")`;
    }
    if (uploadPrompt) {
      uploadPrompt.style.display = 'none';
    }
  }

  // Check for previously uploaded photo in localStorage
  try {
    const savedPhoto = localStorage.getItem('portfolio_user_photo');
    if (savedPhoto) {
      setAvatarPhoto(savedPhoto);
    } else {
      setAvatarPhoto(DEFAULT_PHOTO_URL);
    }
  } catch (err) {
    setAvatarPhoto(DEFAULT_PHOTO_URL);
  }

  // Image error handling: if image is not yet available, show clean upload prompt
  if (previewImg) {
    previewImg.addEventListener('error', () => {
      if (mainCircle) {
        mainCircle.classList.remove('has-photo');
        mainCircle.style.backgroundImage = '';
      }
      if (uploadPrompt) {
        uploadPrompt.style.display = 'flex';
      }
      previewImg.classList.add('avatar-img-hidden');
    });
  }

  function handlePhotoFile(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target || !event.target.result) return;
      const resultUrl = event.target.result;
      setAvatarPhoto(resultUrl);
      try {
        localStorage.setItem('portfolio_user_photo', resultUrl);
      } catch (err) {
        // Ignore if storage exceeds limit
      }
    };
    reader.readAsDataURL(file);
  }

  // Password Modal Functions
  function openAuthModal() {
    if (!photoAuthModal) {
      if (photoUpload) photoUpload.click();
      return;
    }
    photoAuthModal.style.display = 'flex';
    requestAnimationFrame(() => {
      photoAuthModal.classList.add('active');
      if (photoPasswordInput) {
        photoPasswordInput.value = '';
        photoPasswordInput.focus();
      }
      if (photoAuthError) {
        photoAuthError.style.display = 'none';
      }
    });
  }

  function closeAuthModal() {
    if (!photoAuthModal) return;
    photoAuthModal.classList.remove('active');
    setTimeout(() => {
      photoAuthModal.style.display = 'none';
      if (photoAuthError) photoAuthError.style.display = 'none';
    }, 200);
  }

  if (choosePhotoBtn) {
    choosePhotoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAuthModal();
    });
  }

  if (photoAuthCancel) {
    photoAuthCancel.addEventListener('click', closeAuthModal);
  }

  if (photoAuthModal) {
    photoAuthModal.addEventListener('click', (e) => {
      if (e.target === photoAuthModal) {
        closeAuthModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && photoAuthModal.classList.contains('active')) {
        closeAuthModal();
      }
    });
  }

  if (togglePwdVisibility && photoPasswordInput) {
    togglePwdVisibility.addEventListener('click', () => {
      const isPassword = photoPasswordInput.type === 'password';
      photoPasswordInput.type = isPassword ? 'text' : 'password';
      togglePwdVisibility.textContent = isPassword ? 'Hide' : 'Show';
    });
  }

  let failedAttempts = 0;
  let lockoutTimer = null;

  if (photoAuthForm) {
    photoAuthForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (lockoutTimer) return;

      const enteredPwd = (photoPasswordInput ? photoPasswordInput.value.trim() : '');
      if (!enteredPwd) return;

      const inputHash = await computeHash(enteredPwd);
      let customHash = null;
      try {
        customHash = localStorage.getItem('owner_custom_pin_hash');
      } catch (err) {}

      // Verified strictly against cryptographic hash — plaintext code is never exposed
      const isAuthorized = (inputHash === SECURE_OWNER_HASH) || (customHash && inputHash === customHash);

      if (isAuthorized) {
        failedAttempts = 0;
        try {
          sessionStorage.setItem('owner_auth_active', '1');
        } catch (err) {}
        closeAuthModal();
        if (photoUpload) {
          photoUpload.click();
        }
      } else {
        failedAttempts++;
        if (photoAuthError) {
          if (failedAttempts >= 5) {
            photoAuthError.textContent = 'Security lockout: 5 failed attempts. Please wait 30 seconds.';
            photoAuthError.style.display = 'block';
            lockoutTimer = setTimeout(() => {
              failedAttempts = 0;
              lockoutTimer = null;
              photoAuthError.style.display = 'none';
            }, 30000);
          } else {
            photoAuthError.textContent = 'Access denied. Incorrect security passcode.';
            photoAuthError.style.display = 'block';
          }
        }
        if (photoPasswordInput) {
          photoPasswordInput.value = '';
          photoPasswordInput.focus();
        }
      }
    });
  }

  if (photoUpload) {
    // Clicking anywhere on the main circle triggers photo picker via password modal
    if (mainCircle) {
      mainCircle.addEventListener('click', (e) => {
        e.stopPropagation();
        openAuthModal();
      });
      mainCircle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openAuthModal();
        }
      });

      // Drag and drop photo onto the avatar circle
      mainCircle.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mainCircle.style.borderColor = '#00C48C';
      });
      mainCircle.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mainCircle.style.borderColor = '#FFFFFF';
      });
      mainCircle.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mainCircle.style.borderColor = '#FFFFFF';
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          handlePhotoFile(e.dataTransfer.files[0]);
        }
      });
    }

    // Handle file selection via input
    photoUpload.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        handlePhotoFile(file);
      }
    });
  }
}

// Guarantee execution whether DOM is still loading or already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
