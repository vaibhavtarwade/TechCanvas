/**
 * TechCanvas - Student Technology Blog
 * Vanilla JavaScript for dynamic filtering, article rendering, dark mode, and UI interactions.
 */

// ==========================================
// 1. ARTICLES DATABASE
// ==========================================
const articlesData = [
  {
    id: 1,
    title: "How Technology Is Changing the Way Students Learn",
    category: "Technology",
    date: "September 28, 2026",
    readingTime: "5 min read",
    image: "images/posts/post1-tech-learning.jpg",
    excerpt: "Technology has become part of everyday student life, from online classrooms and AI tools to collaborative platforms and digital libraries.",
    content: `
      <p>Walking into a university lecture hall today looks radically different than it did just a decade ago. Gone are the days when heavy binders and printed textbooks dominated student desks. Instead, we navigate a digital ecosystem composed of cloud notebooks, collaborative IDEs, asynchronous video lectures, and intelligent tutoring systems.</p>
      
      <p>As a computer engineering student, I have witnessed this transition firsthand. Technology has ceased to be merely an extracurricular interest—it is now the primary medium through which modern education is delivered, discussed, and absorbed.</p>

      <h2>The Shift From Passive Consumption to Active Creation</h2>
      <p>Traditional education often relegated students to passive recipients of information. You listened to a professor, took linear notes, and reviewed them for midterms. Today's digital tools foster immediate experimentation:</p>
      
      <ul>
        <li><strong>Interactive Sandboxes:</strong> Tools like CodeSandbox, Jupyter Notebooks, and browser-based simulators allow students to test theories within seconds of learning them.</li>
        <li><strong>Peer Collaboration:</strong> Real-time platforms such as GitHub, Notion, and Discord enable students across different dorms or continents to co-author papers and build software together.</li>
        <li><strong>Open Courseware:</strong> World-class curriculum from MIT OpenCourseWare, Stanford, and Harvard is accessible to anyone with an internet connection.</li>
      </ul>

      <blockquote>
        "The greatest advantage technology gives students is not faster information access—it is the ability to build and test concepts in real time."
      </blockquote>

      <h2>AI as a Student Study Partner, Not a Shortcut</h2>
      <p>The conversation around artificial intelligence in academia often focuses on academic integrity. However, when used thoughtfully, AI acts like a 24/7 teaching assistant. It can explain obscure compiler errors, provide alternative mathematical proofs, or help break down dense research papers into digestible analogies.</p>

      <p>The key for students is learning to prompt for <em>comprehension</em> rather than answers. Asking "Explain how Dijkstra's algorithm works with an example graph" teaches fundamental concepts far better than simply asking for code solutions.</p>

      <h2>Challenges: Distraction and Cognitive Fatigue</h2>
      <p>Despite these monumental advantages, the digital classroom brings genuine hurdles. Notification fatigue, endless browser tabs, and the illusion of competence caused by quick Google searches can degrade deep focus.</p>

      <div class="callout-box">
        <strong>Student Takeaway:</strong> Technology amplifies whatever habit you bring to it. If you bring curiosity and discipline, it accelerates your learning exponentially. If you bring passive distraction, it multiplies procrastination.
      </div>

      <h2>Conclusion</h2>
      <p>Technology will continue to transform education, but human curiosity remains the driving engine. Embracing tools deliberately while preserving intentional focus is the most critical skill any 21st-century student can cultivate.</p>
    `
  },
  {
    id: 2,
    title: "Why Every Student Should Learn Programming",
    category: "Programming",
    date: "September 24, 2026",
    readingTime: "6 min read",
    image: "images/posts/post2-learn-code.jpg",
    excerpt: "Programming is more than just writing code for software engineers. It teaches structured problem solving, logical breakdown, and creative building.",
    content: `
      <p>There is a persistent myth that learning to code is only useful if you intend to become a professional software engineer. In reality, coding is fundamentally a literacy in logical thinking and systematic problem-solving that benefits students across biology, finance, design, and the humanities.</p>

      <h2>What Programming Actually Teaches</h2>
      <p>When you write your first non-trivial program, you quickly realize that the computer does exactly what you told it to do—not what you <em>thought</em> you told it to do. This brutal honesty forces you to develop several crucial cognitive habits:</p>

      <h3>1. Deconstructing Ambiguous Problems</h3>
      <p>A computer cannot understand vague instructions like "analyze this dataset." You have to break the goal into granular, deterministic steps: read the file, validate the rows, clean missing numbers, compute statistics, and plot the result. This skill translates directly to managing real-world projects and research.</p>

      <h3>2. Embracing Debugging as a Learning Method</h3>
      <p>In traditional exams, an error feels like failure. In programming, an error is merely data. Every stack trace is an invitation to inspect your assumptions, test hypotheses, and verify how systems interact.</p>

      <pre><code>// Learning through incremental iteration
function solveProblem(challenge) {
  const steps = decompose(challenge);
  return steps.map(step => executeAndTest(step));
}</code></pre>

      <h2>Automation: Gaining Superpowers in Everyday Tasks</h2>
      <p>Beyond abstract thinking, programming gives you practical leverage. A simple Python script can organize hundreds of messy research PDFs, scrape pricing trends for an economics paper, or clean spreadsheet data in seconds that would take hours manually.</p>

      <h2>How Students Can Start Without Feeling Overwhelmed</h2>
      <ul>
        <li><strong>Start with a real problem:</strong> Don't just follow abstract tutorials. Build a simple budget tracker, a habit reminder, or a personal website.</li>
        <li><strong>Pick a forgiving language:</strong> Python or JavaScript are fantastic starting points with immense community resources.</li>
        <li><strong>Practice consistency over intensity:</strong> 30 minutes of coding daily beats an 8-hour marathon once every two weeks.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Learning to code doesn't mean changing your major or giving up your other interests. It means equipping yourself with a versatile toolkit to express your ideas and solve problems in a digital world.</p>
    `
  },
  {
    id: 3,
    title: "My First Steps Into Web Development",
    category: "Web Development",
    date: "September 18, 2026",
    readingTime: "4 min read",
    image: "images/posts/post3-web-dev.jpg",
    excerpt: "Reflecting on the journey from basic HTML tags and CSS flexbox headaches to building full interactive websites from scratch.",
    content: `
      <p>When I wrote my very first HTML document in my freshman semester, I remember the thrill of seeing <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code> render in a browser. It felt like magic. But as anyone who has tried to center a <code>&lt;div&gt;</code> with CSS knows, the honeymoon phase is quickly followed by real challenges.</p>

      <h2>The Holy Trinity: HTML, CSS, and Vanilla JavaScript</h2>
      <p>In modern web development, there is immense hype around massive frameworks and complex build tools. But taking the time to master the core trifecta made all the difference in my understanding:</p>

      <ul>
        <li><strong>Semantic HTML:</strong> Understanding why <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;section&gt;</code> matter for screen readers and search engines.</li>
        <li><strong>Modern CSS Layouts:</strong> Moving past float hacks into CSS Grid and Flexbox unlocked clean, responsive layouts without external dependencies.</li>
        <li><strong>Vanilla JavaScript:</strong> Learning DOM manipulation, event listeners, and fetch APIs before touching modern frameworks.</li>
      </ul>

      <blockquote>
        "Frameworks come and go every few years, but the browser fundamentals—HTML, CSS, and JavaScript—remain bedrock knowledge."
      </blockquote>

      <h2>Three Hard Lessons Learned Along the Way</h2>
      <p><strong>1. Mobile-First is Not Optional:</strong> Designing on a wide 27-inch monitor will give you a false sense of security. Always test on real phones or narrow viewports early.</p>
      
      <p><strong>2. Restraint in Design:</strong> Early on, I wanted to use every gradient, animation, and drop shadow I discovered. Clean typography, consistent spacing, and readable contrast make a site look genuinely professional.</p>

      <p><strong>3. Version Control is Your Safety Net:</strong> Learning Git early saved my projects multiple times when experiments went wrong.</p>

      <h2>Conclusion</h2>
      <p>Web development is unique because everything you build is immediately publishable to the entire world. If you are just starting out, build projects you care about, keep it simple, and enjoy the process of continuous learning.</p>
    `
  },
  {
    id: 4,
    title: "Understanding Artificial Intelligence Without the Hype",
    category: "Artificial Intelligence",
    date: "September 12, 2026",
    readingTime: "7 min read",
    image: "images/posts/post4-ai-hype.jpg",
    excerpt: "Cutting through the sensational headlines to explore how machine learning models actually work, what they excel at, and where they fall short.",
    content: `
      <p>Headlines about artificial intelligence oscillate wildly between sci-fi utopias and impending doom. For students and practitioners, demystifying AI requires stepping past the sensational marketing and examining the underlying mathematics and statistics.</p>

      <h2>What Large Language Models Actually Are</h2>
      <p>At their core, modern generative AI models are sophisticated pattern-matching and probabilistic systems. When trained on vast corpora of human text, they learn intricate statistical correlations between words and concepts.</p>

      <p>When you ask a model a question, it is calculating the most probable continuation of tokens based on the weights adjusted during its training process. It does not possess consciousness, human intentionality, or true world experience.</p>

      <h2>Where AI Excels</h2>
      <ul>
        <li><strong>Syntax and Boilerplate Generation:</strong> Drafting repetitive configuration files, SQL queries, or standard API routes.</li>
        <li><strong>Summarization and Synthesis:</strong> Condensing long transcripts or extracting specific data points from technical documentation.</li>
        <li><strong>Language Translation & Paraphrasing:</strong> Adapting tone, fixing grammar, and translating between human and programming languages.</li>
      </ul>

      <h2>The Crucial Blindspots</h2>
      <p>Because these systems operate on probabilistic text generation rather than formal logical grounding, they can confidently generate plausible-sounding falsehoods ("hallucinations"). They struggle with multi-step symbolic reasoning without explicit external tools.</p>

      <div class="callout-box">
        <strong>The Mental Model:</strong> Treat AI like a brilliant, fast-reading intern who has read millions of books but occasionally invents references with complete confidence. Always verify critical facts.
      </div>

      <h2>Conclusion</h2>
      <p>By understanding AI's fundamental mechanics, students can harness its strengths for research, coding, and creative brainstorming while maintaining the critical skepticism necessary for rigorous scholarship.</p>
    `
  },
  {
    id: 5,
    title: "How GitHub Helps Students Build Real Projects",
    category: "Projects",
    date: "September 05, 2026",
    readingTime: "5 min read",
    image: "images/posts/post5-github-student.jpg",
    excerpt: "Why Git and GitHub are essential tools for college developers to collaborate, manage project revisions, and showcase real-world work.",
    content: `
      <p>When starting out in computer science classes, students frequently manage code revisions by creating files like <code>final_project_v2_FINAL_really.zip</code>. We have all been there. Discovering Git and GitHub was the turning point where our chaotic team assignments became professional, collaborative endeavors.</p>

      <h2>Why Git is Non-Negotiable for College Projects</h2>
      <p>Version control is not just about backing up code to the cloud. It provides a structured history of your decision-making process:</p>

      <ul>
        <li><strong>Atomic Commits:</strong> Every feature or bugfix has an explicit checkpoint you can inspect or revert.</li>
        <li><strong>Branching and Merging:</strong> Team members can work on different components simultaneously without overwriting each other's code.</li>
        <li><strong>Pull Requests & Code Reviews:</strong> Reviewing teammates' code exposes you to alternative approaches and catches edge cases early.</li>
      </ul>

      <h2>Beyond Code: GitHub Pages & Portfolios</h2>
      <p>One of GitHub's most empowering features for students is <strong>GitHub Pages</strong>. It allows anyone to host static HTML/CSS/JavaScript websites directly from a repository without paying for hosting or configuring complex servers. This very blog is structured to run effortlessly on GitHub Pages!</p>

      <h2>Key Git Practices Every Student Should Adopt</h2>
      <ol>
        <li>Write clear commit messages that explain <em>why</em> a change was made.</li>
        <li>Never commit sensitive API keys or passwords—use <code>.gitignore</code> religiously.</li>
        <li>Keep your main branch clean and deployable at all times.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>A well-maintained GitHub profile with real, functioning projects speaks louder than a list of buzzwords on a resume. Start committing your class projects today!</p>
    `
  },
  {
    id: 6,
    title: "Things I Learned From My First College Project",
    category: "College Life",
    date: "August 28, 2026",
    readingTime: "5 min read",
    image: "images/posts/post6-college-project.jpg",
    excerpt: "The honest story of scope creep, team communication mishaps, and how we pulled together to deliver a working system on deadline.",
    content: `
      <p>Our sophomore year engineering project was supposed to be a straightforward automated campus attendance portal. On paper, the timeline looked generous: six weeks to design, build, and present. What followed was a masterclass in everything that can go wrong when planning meets reality.</p>

      <h2>Lesson 1: Beware of Unchecked Scope Creep</h2>
      <p>In our first brainstorming meeting, our enthusiasm got the best of us. Instead of building a simple QR-code scanner, we added facial recognition, real-time analytics dashboards, SMS notifications, and a mobile companion app.</p>
      <p>By week four, we had ten half-finished features and zero end-to-end working flows. We had to make the painful decision to cut 70% of our scope and focus exclusively on delivering one robust, reliable core feature.</p>

      <h2>Lesson 2: Communication Trumps Code Quality</h2>
      <p>Our team members were individually talented, but we worked in silos for the first two weeks without agreeing on data formats or API interfaces. When we finally attempted integration, nothing matched.</p>

      <blockquote>
        "Thirty minutes spent agreeing on clear interface contracts and data models saves thirty hours of frantic last-minute debugging."
      </blockquote>

      <h2>Lesson 3: The Presentation Matters Just as Much</h2>
      <p>When presenting to professors and classmates, technical sophistication is only half the battle. If you cannot explain the problem, user journey, and architecture clearly, your hard work will not resonate. Preparing live demos, handling fallback scenarios, and speaking clearly made all the difference.</p>

      <h2>Conclusion</h2>
      <p>College projects are designed to be messy learning grounds. The mistakes we made on that project taught me more about software engineering, team dynamics, and project management than any textbook ever could.</p>
    `
  },
  {
    id: 7,
    title: "Will AI Replace Programmers? A Practical Perspective",
    category: "Technology",
    date: "August 20, 2026",
    readingTime: "6 min read",
    image: "images/posts/post7-ai-programmers.jpg",
    excerpt: "Examining why coding assistants change how we build software, but elevate rather than eliminate the need for skilled software architects.",
    content: `
      <p>With the rise of code-generating AI tools, a common anxiety among computer science students is whether entry-level software development will exist by the time we graduate. It is a natural question, but looking closely at what software development truly entails offers a grounded perspective.</p>

      <h2>Typing Code is Only a Fraction of Engineering</h2>
      <p>Writing syntax is the last step in the engineering process. Most of a programmer's time is spent on:</p>

      <ul>
        <li><strong>Understanding Fuzzy Requirements:</strong> Translating ambiguous human needs and business constraints into concrete technical specifications.</li>
        <li><strong>System Architecture:</strong> Designing data flows, fault-tolerant architectures, security boundaries, and scalability models.</li>
        <li><strong>Debugging & Verification:</strong> Diagnosing distributed race conditions, memory leaks, and subtle business logic edge cases.</li>
        <li><strong>Maintenance & Evolution:</strong> Refactoring legacy systems without breaking existing customer workflows.</li>
      </ul>

      <h2>The Evolution of Abstraction</h2>
      <p>In the history of computing, every leap in abstraction—from punch cards to Assembly, from C to Python, and from physical servers to Cloud APIs—was met with predictions that programmers would no longer be needed. In reality, lowering friction expanded the total amount of software the world could build.</p>

      <h2>What Changes for Students Today?</h2>
      <p>What is disappearing is low-effort copy-pasting of boilerplate code. What becomes exponentially more valuable is:</p>

      <ol>
        <li>Deep understanding of systems, networking, and data structures.</li>
        <li>The ability to review, audit, and rigorously test AI-generated code.</li>
        <li>Communication skills to bridge domain experts and technical implementation.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>AI will not replace programmers; programmers who understand how to leverage AI tools to design and ship reliable systems will replace those who refuse to adapt.</p>
    `
  },
  {
    id: 8,
    title: "Essential Cybersecurity Habits for College Students",
    category: "Cybersecurity",
    date: "August 10, 2026",
    readingTime: "5 min read",
    image: "images/posts/post8-cybersecurity.jpg",
    excerpt: "Practical, non-intrusive security practices every student should implement to safeguard their accounts, research data, and digital privacy.",
    content: `
      <p>Between shared campus Wi-Fi networks, communal lab computers, and numerous online student services, college environments are hotbeds for phishing attempts and credential harvesting. Fortunately, establishing strong digital hygiene does not require an advanced cybersecurity degree.</p>

      <h2>1. Ditch Password Reuse with a Password Manager</h2>
      <p>Using the same password across your university portal, email, streaming services, and social accounts is the single highest-risk habit. Once a minor forum suffers a data breach, credential stuffing bots attempt those credentials across all major platforms.</p>
      <p>Using an open-source or trusted password manager (like Bitwarden) allows you to use unique, 20+ character passwords everywhere while only memorizing a single master passphrase.</p>

      <h2>2. Hardware & Authenticator App 2FA</h2>
      <p>Whenever available, enable two-factor authentication using an authenticator app (like Aegis, Google Authenticator, or 1Password) rather than SMS verification, which is susceptible to SIM-swapping.</p>

      <h2>3. Beware of Campus Wi-Fi and Public Terminals</h2>
      <ul>
        <li>Never leave your browser logged in on university library computers. Always use private browsing or log out completely.</li>
        <li>Keep your operating system and browser updated with the latest security patches.</li>
        <li>Be cautious of emails offering urgent student grants or employment opportunities with suspicious attachment links.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Security is not about paranoia; it is about raising the baseline cost of an attack so you are no longer low-hanging fruit. A few minutes of configuration today protects years of academic and personal work.</p>
    `
  }
];

// Category Descriptions for categories.html & filters
const categoryMetadata = {
  "Technology": "Trends, hardware, and digital transformation shaping modern life.",
  "Programming": "Notes, lessons, and experiences from learning to write clean code.",
  "Web Development": "Building modern, accessible, and responsive web applications.",
  "Artificial Intelligence": "Exploring machine learning, LLMs, and real-world AI applications.",
  "College Life": "Stories, honest lessons, and reflections from my engineering journey.",
  "Projects": "Case studies, build logs, and architecture breakdown of student creations.",
  "Cybersecurity": "Practical safety, privacy habits, and secure software concepts."
};

// ==========================================
// 2. THEME / DARK MODE MANAGER
// ==========================================
function initTheme() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("techcanvas_theme") || "light";
  
  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("techcanvas_theme", newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeIcons = document.querySelectorAll(".theme-icon");
  
  themeIcons.forEach(icon => {
    if (theme === "dark") {
      // Show sun icon in dark mode
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
      // Show moon icon in light mode
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  });
}

// ==========================================
// 3. NAVIGATION & MOBILE MENU
// ==========================================
function initNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobile = document.querySelector(".nav-mobile");
  
  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMobile.classList.toggle("open");
    });

    // Close mobile menu on link click
    const mobileLinks = navMobile.querySelectorAll("a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMobile.classList.remove("open");
      });
    });
  }

  // Active state for navigation
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .nav-mobile-link");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html") || (currentPath.includes("post.html") && href === "blog.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Back to top button
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ==========================================
// 4. HOME PAGE RENDERING
// ==========================================
function initHomePage() {
  const featuredContainer = document.getElementById("featured-post-container");
  const latestPostsGrid = document.getElementById("latest-posts-grid");
  
  if (!featuredContainer && !latestPostsGrid) return;

  // Featured Article (Article ID 1)
  const featured = articlesData.find(a => a.id === 1) || articlesData[0];
  if (featuredContainer && featured) {
    featuredContainer.innerHTML = `
      <article class="featured-card">
        <div class="featured-image-holder">
          <img src="${featured.image}" alt="${featured.title}" loading="lazy">
        </div>
        <div class="featured-body">
          <div class="post-meta">
            <span class="tag-badge">${featured.category}</span>
            <span class="meta-dot"></span>
            <span>${featured.date}</span>
            <span class="meta-dot"></span>
            <span>${featured.readingTime}</span>
          </div>
          <h3 class="featured-title">
            <a href="post.html?id=${featured.id}">${featured.title}</a>
          </h3>
          <p class="featured-excerpt">${featured.excerpt}</p>
          <div>
            <a href="post.html?id=${featured.id}" class="btn btn-primary">
              Read Article &rarr;
            </a>
          </div>
        </div>
      </article>
    `;
  }

  // Latest Articles (Next 6 articles)
  if (latestPostsGrid) {
    const latestArticles = articlesData.slice(1, 7);
    latestPostsGrid.innerHTML = latestArticles.map(article => createPostCardHTML(article)).join("");
  }
}

// ==========================================
// 5. BLOG PAGE & SEARCH / FILTERING
// ==========================================
function initBlogPage() {
  const blogPostsGrid = document.getElementById("blog-posts-grid");
  const searchInput = document.getElementById("blog-search-input");
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  if (!blogPostsGrid) return;

  let currentCategory = "all";
  let searchQuery = "";

  // Check URL query parameters for category
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  if (categoryParam) {
    currentCategory = categoryParam;
    filterBtns.forEach(btn => {
      if (btn.dataset.category.toLowerCase() === categoryParam.toLowerCase()) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function renderArticles() {
    const filtered = articlesData.filter(article => {
      const matchesCategory = currentCategory === "all" || article.category.toLowerCase() === currentCategory.toLowerCase();
      const matchesSearch = !searchQuery || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      blogPostsGrid.innerHTML = `
        <div class="empty-state">
          <h3>No articles found</h3>
          <p>We couldn't find anything matching "${searchQuery}". Try another keyword or browse all categories.</p>
          <button class="btn btn-outline" id="clear-search-btn">Reset Filters</button>
        </div>
      `;
      const clearBtn = document.getElementById("clear-search-btn");
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          currentCategory = "all";
          filterBtns.forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
          renderArticles();
        });
      }
    } else {
      blogPostsGrid.innerHTML = filtered.map(article => createPostCardHTML(article)).join("");
    }
  }

  // Filter Buttons Event Listener
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderArticles();
    });
  });

  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderArticles();
    });
  }

  // Initial render
  renderArticles();
}

// Helper: Card HTML Generator
function createPostCardHTML(article) {
  return `
    <article class="article-card">
      <a href="post.html?id=${article.id}" class="article-card-img">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
      </a>
      <div class="article-card-content">
        <div>
          <span class="tag-badge">${article.category}</span>
        </div>
        <h3 class="article-card-title">
          <a href="post.html?id=${article.id}">${article.title}</a>
        </h3>
        <p class="article-card-excerpt">${article.excerpt}</p>
        <div class="article-card-footer">
          <span style="color: var(--text-muted);">${article.date}</span>
          <a href="post.html?id=${article.id}" class="read-more-link">
            ${article.readingTime} &rarr;
          </a>
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// 6. INDIVIDUAL POST PAGE (post.html)
// ==========================================
function initPostPage() {
  const postContainer = document.getElementById("post-detail-container");
  if (!postContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"), 10);
  const article = articlesData.find(a => a.id === postId);

  if (!article) {
    // Error Handling: Article Not Found
    postContainer.innerHTML = `
      <div class="empty-state" style="margin: 4rem 0;">
        <h2>Article Not Found</h2>
        <p>The article you are looking for does not exist or may have been relocated.</p>
        <a href="blog.html" class="btn btn-primary">&larr; Back to Blog</a>
      </div>
    `;
    return;
  }

  // Update Page Title
  document.title = `${article.title} | TechCanvas`;

  // Render Post Content
  postContainer.innerHTML = `
    <article class="single-post-article">
      <div class="post-header-area">
        <a href="blog.html" class="back-link">&larr; Back to Articles</a>
        <div>
          <span class="tag-badge">${article.category}</span>
        </div>
        <h1 class="post-title-main">${article.title}</h1>
        
        <div class="post-author-meta">
          <div class="author-meta-avatar">
            <img src="images/author/vaibhav.jpg" alt="Vaibhav" loading="lazy">
          </div>
          <div class="author-meta-info">
            <div class="author-meta-name">Vaibhav</div>
            <div class="author-meta-details">
              <span>${article.date}</span>
              <span class="meta-dot"></span>
              <span>${article.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="post-hero-image-wrapper">
        <img src="${article.image}" alt="${article.title}">
      </div>

      <div class="post-content-body">
        ${article.content}
      </div>

      <!-- Post Footer / Share -->
      <div class="post-footer-section">
        <div>
          <span style="font-size: 0.9rem; color: var(--text-muted);">Published in <strong>${article.category}</strong></span>
        </div>
        <div class="share-buttons">
          <span style="font-size: 0.85rem; color: var(--text-secondary);">Share:</span>
          <button class="icon-btn" onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!');" title="Copy Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          </button>
        </div>
      </div>

      <!-- Author Bio Box -->
      <div class="author-bio-card">
        <div class="author-bio-avatar">
          <img src="images/author/vaibhav.jpg" alt="Vaibhav">
        </div>
        <div class="author-bio-text">
          <h4>Written by Vaibhav</h4>
          <div class="author-bio-subtitle">Engineering Student &amp; Technology Enthusiast</div>
          <p class="author-bio-desc">I'm a student exploring programming, web development and emerging technologies. Learning by building, experimenting and sharing.</p>
          <div class="author-bio-links">
            <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>

      <!-- Read Next / Related Articles -->
      <div class="related-posts-section">
        <div class="section-header">
          <h3 class="section-title">Read Next</h3>
          <a href="blog.html" class="section-link">View All Articles &rarr;</a>
        </div>
        <div class="articles-grid" id="related-posts-grid">
          <!-- Populated by JS -->
        </div>
      </div>
    </article>
  `;

  // Render 3 Related Articles (exclude current article)
  const relatedGrid = document.getElementById("related-posts-grid");
  if (relatedGrid) {
    const otherArticles = articlesData.filter(a => a.id !== postId);
    // Prioritize same category, then others
    const sameCat = otherArticles.filter(a => a.category === article.category);
    const diffCat = otherArticles.filter(a => a.category !== article.category);
    const relatedList = [...sameCat, ...diffCat].slice(0, 3);

    relatedGrid.innerHTML = relatedList.map(item => createPostCardHTML(item)).join("");
  }

  // Reading Progress Indicator
  const progressBar = document.getElementById("reading-progress-bar");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        progressBar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
      }
    });
  }
}

// ==========================================
// 7. CATEGORIES PAGE (categories.html)
// ==========================================
function initCategoriesPage() {
  const categoriesGrid = document.getElementById("categories-list-grid");
  if (!categoriesGrid) return;

  const categories = Object.keys(categoryMetadata);

  categoriesGrid.innerHTML = categories.map(cat => {
    const count = articlesData.filter(a => a.category.toLowerCase() === cat.toLowerCase()).length;
    const desc = categoryMetadata[cat] || "Articles and notes on this topic.";
    return `
      <a href="blog.html?category=${encodeURIComponent(cat)}" class="category-card">
        <div>
          <div class="category-card-top">
            <div class="category-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <span class="category-count">${count} ${count === 1 ? 'article' : 'articles'}</span>
          </div>
          <h3 class="category-name">${cat}</h3>
          <p class="category-desc">${desc}</p>
        </div>
      </a>
    `;
  }).join("");
}

// ==========================================
// 8. NEWSLETTER INTERACTION
// ==========================================
function initNewsletter() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".newsletter-input");
      const feedback = form.parentElement.querySelector(".newsletter-feedback");
      if (input && input.value.trim()) {
        input.value = "";
        if (feedback) {
          feedback.style.display = "block";
          feedback.textContent = "Thanks! This demo subscription has been received.";
          setTimeout(() => {
            feedback.style.display = "none";
          }, 4000);
        } else {
          alert("Thanks! This demo subscription has been received.");
        }
      }
    });
  });
}

// ==========================================
// 9. GLOBAL INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initHomePage();
  initBlogPage();
  initPostPage();
  initCategoriesPage();
  initNewsletter();
});
