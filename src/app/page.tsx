export default function Home() {
  const experience = [
    {
      role: "Software Engineer Intern",
      company: "Gesture",
      period: "Dec 2025 - Present",
      points: [
        "Build and maintain AI-integrated marketing tools focused on performance, usability, and scalability.",
        "Develop and deploy front-end applications with Next.js, TypeScript, and Tailwind CSS on Vercel.",
        "Integrate Gemini-powered workflows to generate, qualify, and enrich inbound leads for faster, more personalized sales responses.",
        "Collaborate with product and design to translate business requirements into high-impact user experiences.",
        "Own tasks end-to-end in a hybrid environment with high autonomy and consistent delivery.",
      ],
    },
    {
      role: "Developer (Contract)",
      company: "QueensTechBros",
      period: "Apr 2025 - Jan 2026",
      points: [
        "Built and maintained client-facing websites and internal tools using React, TypeScript, Next.js, and modern UI frameworks.",
        "Partnered with small businesses to turn requirements into clean UI components, responsive layouts, and practical user flows.",
        "Implemented project-specific integrations including forms, scheduling, APIs, and authentication.",
        "Managed deployments, version control, and project documentation through structured GitHub workflows.",
        "Contributed across multiple contracts with front-end architecture decisions, debugging, and iterative feature delivery.",
      ],
    },
    {
      role: "Mobile Facility Technician | Collateral Duty Inspector",
      company: "United States Marine Corps",
      period: "2014 - 2019",
      points: [
        "Maintained and repaired ISO containers and mobile facilities to keep mission-critical systems operational.",
        "Supervised a 20-Marine team as Collateral Duty Inspector with a strict focus on precision, safety, and accountability.",
        "Installed, tested, and documented electrical and communication systems for mission-critical operations.",
        "Recognized for reliability, teamwork, and performance under pressure.",
      ],
    },
  ];

  const techStack = [
    {
      name: "JavaScript",
      emblem: String.raw`
 .--------.
 |  JS    |
 |        |
 |        |
 '--------'
`,
    },
    {
      name: "React",
      emblem: String.raw`
    \ | /
  -- ( ) --
 / -- o -- \
  -- ( ) --
    / | \
`,
    },
    {
      name: "Next.js",
      emblem: String.raw`
   .------.
 /  /   / /
|  /___/ /
|  \   \ \
 \__\___\_\
`,
    },
    {
      name: "Node",
      emblem: String.raw`
   .------.
  /  __   \
 /  /  \   \
 \  \__/   /
  \______./
`,
    },
    {
      name: "Psql",
      emblem: String.raw`
   .---.
  (o o )
 /  V  \
/(  _  )\
  ^^ ^^
`,
    },
    {
      name: "Python",
      emblem: String.raw`
 .-----. 
| o--. |
| .--o |
'-----'
`,
    },
    {
      name: "AWS",
      emblem: String.raw`
   aws
  _____
 /_____\__
 \_____/  )
      (__/
`,
    },
    {
      name: "Tailwind",
      emblem: String.raw`
  ~~~~~~~
 ~~  ~~~~
  ~~~~  ~
 ~~~  ~~~
`,
    },
    {
      name: "Claude Code",
      emblem: String.raw`
  .----.
 / <>  \
|  /\   |
| /  \  |
 \____./
`,
    },
    {
      name: "Codex",
      emblem: String.raw`
  .----.
 / []  \
| <  > |
|  []  |
 \____/
`,
    },
  ];
  const techStackMarquee = [...techStack, ...techStack];

  const projects = [
    {
      title: "House Market Watch",
      description:
        "Real-estate analytics dashboard for tracking median home prices, average rent, and pricing trends by zip code using RentCast API data, with saved-market monitoring.",
      stack: "TypeScript, React, Next.js, Tailwind CSS, Prisma, PostgreSQL, REST APIs, Vercel",
      link: "",
    },
    {
      title: "MatKings",
      description:
        "Full-stack platform for jiu-jitsu private lessons where instructors can advertise, manage bookings, and accept payments while clients discover and schedule sessions.",
      stack: "React, JavaScript, Node.js, MySQL, Stripe, AWS, Firebase, Tailwind CSS",
      link: "https://github.com/datafaust/bjj-app",
    },
    {
      title: "Niche Nest",
      description:
        "Team-built freelancing marketplace for niche services with booking/scheduling workflows, provider profiles, and a full-stack architecture designed for low-friction service discovery.",
      stack: "React, Tailwind CSS, Node.js, PostgreSQL, Prisma",
      link: "https://github.com/Lopez4163/NicheNest",
    },
    {
      title: "NicosHomeLab",
      description:
        "Self-hosted infrastructure hub with NGINX reverse proxy, Let's Encrypt SSL/TLS, centralized service routing, and scripted monitoring/maintenance using Python and Bash.",
      stack: "Ubuntu Server, Docker, NGINX, Python, Bash, Next.js, GitHub",
      link: "",
    },
    {
      title: "UFC Fight Library",
      description:
        "Data-driven UFC fighter app built from scraped official-site data using Puppeteer, with structured JSON pipelines, responsive UI, and interactive fighter browsing.",
      stack: "React, JavaScript, Node.js, Puppeteer, HTML, CSS",
      link: "https://lopez4163.github.io/ufcApp/",
    },
  ];

  const summaryText = [
    "Marine Corps Veteran and software engineer building AI-driven, full-stack web applications with a strong focus on practical, real-world outcomes.",
    "Work across the stack with React, TypeScript, Next.js, Node.js, and Python while deepening core CS and engineering fundamentals at City Tech (CUNY).",
    "Bring disciplined execution, adaptability under pressure, and ownership from military service into engineering: break down complex problems, ship reliable solutions, and continuously improve.",
    "Intentional about growth as both an engineer and teammate, with long-term focus on technical leadership and high-impact collaboration.",
    "Graduating in December 2026 and open to full-time remote software engineering opportunities.",
  ];

  const contact = {
    github: "https://github.com/Lopez4163",
    linkedin: "https://www.linkedin.com/in/nicholas-lopez-83b031299",
    instagram: "https://www.instagram.com/nickk_adre/",
  };

  const nicholasAscii = String.raw`
███╗   ██╗██╗ ██████╗██╗  ██╗ ██████╗ ██╗      █████╗ ███████╗
████╗  ██║██║██╔════╝██║  ██║██╔═══██╗██║     ██╔══██╗██╔════╝
██╔██╗ ██║██║██║     ███████║██║   ██║██║     ███████║███████╗
██║╚██╗██║██║██║     ██╔══██║██║   ██║██║     ██╔══██║╚════██║
██║ ╚████║██║╚██████╗██║  ██║╚██████╔╝███████╗██║  ██║███████║
╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
`;

  const lopezAscii = String.raw`
██╗      ██████╗ ██████╗ ███████╗███████╗
██║     ██╔═══██╗██╔══██╗██╔════╝╚══███╔╝
██║     ██║   ██║██████╔╝█████╗    ███╔╝
██║     ██║   ██║██╔═══╝ ██╔══╝   ███╔╝
███████╗╚██████╔╝██║     ███████╗███████╗
╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚══════╝
`;

  return (
    <div className="min-h-screen bg-[#05070a] px-2 py-3 font-mono text-[#b7ffd9] sm:px-4 sm:py-6">
      <div className="mx-auto w-full max-w-7xl border border-[#23ffb266] bg-[#070a0f] shadow-[0_0_40px_rgba(35,255,178,0.13)]">
        <div className="flex items-center justify-between border-b border-[#23ffb233] px-3 py-2 text-[11px] text-[#6fe0b6]">
          <p>visitor@nicholas:~</p>
          <p>Nicholas terminal</p>
        </div>

        <header className="border-b border-[#23ffb226] px-3 py-4 sm:px-5">
          <p className="text-xs text-[#75ffd0]">Welcome to my web terminal.</p>
          <p className="mt-1 text-xs text-[#4cb792]">
            For available commands, type <span className="text-[#75ffd0]">&apos;help&apos;</span>.
          </p>
          <div className="mt-4 text-[#53eeb9]">
            <div className="flex items-start gap-3 overflow-x-auto">
              <pre className="text-[8px] leading-tight sm:text-[9px] md:text-[11px]">{nicholasAscii}</pre>
              <br />
              <pre className="text-[8px] leading-tight sm:text-[9px] md:text-[11px]">{lopezAscii}</pre>
              <span className="self-end pb-1 text-lg leading-none text-[#75ffd0] animate-pulse sm:text-xl md:text-2xl">_</span>
            </div>
          </div>
        </header>

        <main className="p-3 sm:p-4">
          <section className="space-y-4">
            <article id="summary" className="border border-[#23ffb240] bg-[#05080d] p-3">
              <p className="text-xs text-[#57cba3]">visitor@nicholas:~$ summary</p>
              <h2 className="mt-2 text-base text-[#7affd2]">[SUMMARY]</h2>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-[#9de9cb]">
                {summaryText.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>

            <article id="experience" className="border border-[#23ffb240] bg-[#05080d] p-3">
              <p className="text-xs text-[#57cba3]">visitor@nicholas:~$ experience</p>
              <h2 className="mt-2 text-base text-[#7affd2]">[WORK EXPERIENCE]</h2>
              <div className="mt-3 space-y-3">
                {experience.map((job) => (
                  <div key={job.role} className="border border-[#23ffb229] bg-[#090e14] p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm text-[#d0ffec]">{job.role}</h3>
                      <span className="text-xs text-[#66efbf]">{job.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-[#57cba3]">{job.company}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#9de9cb]">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article id="stack" className="border border-[#23ffb240] bg-[#05080d] p-3">
              <p className="text-xs text-[#57cba3]">visitor@nicholas:~$ stack</p>
              <h2 className="mt-2 text-base text-[#7affd2]">[KNOWN TECH STACK]</h2>
              <div className="stack-carousel-viewport mt-3 overflow-hidden border border-[#23ffb229] bg-[#090e14] py-2">
                <div className="stack-carousel-lane">
                  {techStackMarquee.map((tech, index) => (
                    <div
                      key={`a-${tech.name}-${index}`}
                      title={tech.name}
                      className="stack-card shrink-0 border border-[#23ffb24d] bg-[#0a1318] px-3 py-2 text-[#7affd2]"
                    >
                      <pre className="text-[10px] leading-none">{tech.emblem}</pre>
                    </div>
                  ))}
                </div>
                <div className="stack-carousel-lane stack-carousel-lane-b" aria-hidden="true">
                  {techStackMarquee.map((tech, index) => (
                    <div
                      key={`b-${tech.name}-${index}`}
                      title={tech.name}
                      className="stack-card shrink-0 border border-[#23ffb24d] bg-[#0a1318] px-3 py-2 text-[#7affd2]"
                    >
                      <pre className="text-[10px] leading-none">{tech.emblem}</pre>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article id="projects" className="border border-[#23ffb240] bg-[#05080d] p-3">
              <p className="text-xs text-[#57cba3]">visitor@nicholas:~$ projects</p>
              <h2 className="mt-2 text-base text-[#7affd2]">[PROJECTS]</h2>
              <div className="mt-3 space-y-3">
                {projects.map((project) => (
                  <div key={project.title} className="border border-[#23ffb229] bg-[#090e14] p-3">
                    <h3 className="text-sm text-[#d0ffec]">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#9de9cb]">{project.description}</p>
                    <p className="mt-2 text-xs text-[#66efbf]">{project.stack}</p>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link mt-2 inline-block text-xs"
                      >
                        {project.link}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-[#23ffb240] bg-[#05080d] p-3">
              <p className="text-xs text-[#57cba3]">visitor@nicholas:~$ contact</p>
              <p className="mt-2 text-sm text-[#9de9cb]">
                github:{" "}
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
                  {contact.github}
                </a>
              </p>
              <p className="text-sm text-[#9de9cb]">
                linkedin:{" "}
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
                  {contact.linkedin}
                </a>
              </p>
              <p className="text-sm text-[#9de9cb]">
                instagram:{" "}
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
                  {contact.instagram}
                </a>
              </p>
              <p className="mt-3 text-xs text-[#57cba3]">visitor@nicholas:~$ _</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
