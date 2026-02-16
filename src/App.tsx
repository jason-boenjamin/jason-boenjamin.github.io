import { useState } from "react";
import "./App.css";

type ItemId = "cp" | "tt" | "ml" | "nas";
type MoreId = "ai" | "me";

type Section = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type Item = {
  id: ItemId;
  title: string;
  subtitle: string;
  sections: Section[];
  links: { label: string; href?: string }[];
};

function App() {
  const [open, setOpen] = useState<ItemId | null>("cp");
  const [openMore, setOpenMore] = useState<MoreId | null>(null);

  const items: Item[] = [
    {
      id: "cp",
      title: "CostPlusGaming",
      subtitle: "Custom PC Builder & Ops Automation",
      sections: [
        {
          heading: "Role",
          body:
            "Builder, Customer Service Rep, IT, Automation Engineer, and contracted UI developer. Worked directly with the CEO on workflow design and pricing logic.",
        },
        {
          heading: "Overview",
          body:
            "I shipped a live custom PC builder that allows customers to configure systems with clear part choices and real-time price differences, eliminating the need for manual quotes. In parallel, I automated the entire Windows and driver installation workflow so PCs ship fully configured and plug-and-play.",
        },
        {
          heading: "Impact",
          bullets: [
            "Reduced driver installation time from ~40 minutes to ~11 minutes",
            "Significantly reduced post-sale support calls related to drivers",
            "Improved build consistency across all PC configurations",
          ],
        },
        {
          heading: "Technical highlights",
          bullets: [
            "Custom frontend UI with configuration validation and pricing deltas",
            "PowerShell automation using hardware detection (Get-CimInstance)",
            "Offline-capable, silent driver installation with logging and checkpoints",
          ],
        },
        {
          heading: "Reliability & debugging",
          body:
            "After identifying a pattern of failures on Intel boards below BIOS version 10.03, I isolated the root cause and automated BIOS version detection and updates. The system now surfaces BIOS state clearly for ops, preventing the issue entirely.",
        },
        {
          heading: "Why it matters",
          body:
            "This work reflects how I approach production systems: remove manual error, surface problems early, and build tools that ops teams can trust under real-world conditions.",
        },
      ],
      links: [{ label: "Company site", href: "https://costplusgaming.com/" }],
    },
    {
      id: "tt",
      title: "TritonTube",
      subtitle: "Distributed Video Ingest & Playback System",
      sections: [
        {
          heading: "What it is",
          body:
            "A distributed backend system for ingesting, storing, and serving video streams reliably while the system changes underneath it.",
        },
        {
          heading: "Role & Impact",
          bullets: [
            "Designed and implemented the full ingest, storage, and playback pipeline",
            "Built and operated the system across multiple nodes to validate behavior under real failure scenarios",
          ],
        },
        {
          heading: "Technical Details",
          bullets: [
            "End-to-end pipeline: upload → FFmpeg DASH segmentation → distributed storage → browser playback",
            "MPEG-DASH output (manifest, init segments, and media chunks) generated via FFmpeg",
            "gRPC-based storage cluster using consistent hashing to distribute video segments across nodes",
            "Admin control plane to add, remove, and rebalance storage nodes without interrupting playback",
          ],
        },
        {
          heading: "Reliability / Ops",
          bullets: [
            "Playback continues when storage nodes fail through replication and request rerouting",
            "Clear points for health checks, ingest monitoring, and operator visibility",
            "Built a repeatable test.sh to spin up nodes, upload content, and verify playback with curl",
            "Experimented with RAFT-based coordination on AWS EC2 to understand leader election, replication, and distributed failure modes",
          ],
        },
        {
          heading: "Why this matters",
          body:
            "TritonTube taught me how live video systems behave when conditions change mid-stream. The real challenge wasn’t encoding video, it was making sure playback survives node failures, scaling events, and operational mistakes. This mirrors live production environments, where software must adapt in real time and give operators confidence that the system will hold up when things aren’t perfect.",
        },
      ],
      links: [{ label: "Repo", href: "https://github.com/jason-boenjamin/tritontube" }],
    },
    {
      id: "ml",
      title: "MedLynk",
      subtitle: "Full-Stack Healthcare Platform",
      sections: [
        {
          heading: "What it is",
          body:
            "A full-stack platform that gives users secure access to their medical records, AI-assisted explanations, and real appointment booking in one unified flow. MedLynk began as a shipped hackathon product and is now being rebuilt with a cleaner backend architecture and long-term reliability in mind.",
        },
        {
          heading: "Role & Impact",
          bullets: [
            "Owned the system end-to-end: frontend, backend, AI integration, authentication flows, and deployment",
            "Shipped a real, working v1 with HTTPS, custom domain, mobile access, AI chat, and live scheduling",
            "Identified architectural limitations post-launch and initiated a v2 re-architecture focused on correctness, data modeling, and maintainability",
          ],
        },
        {
          heading: "Technical Details",
          body:
            "v1 (Shipped):\n• Frontend: React Native (Expo)\n• Backend: Flask + Gunicorn on Linux\n• AI: Gemini API grounded in user-uploaded medical records\n• Integrations: Calendly OAuth2 for real appointment booking\n• Security: HTTPS via Let’s Encrypt, token-based authentication, HIPAA-conscious design\n\nv2 (Current):\n• Backend: Node.js API + FastAPI AI service\n• Database: MongoDB with vector storage for semantic queries\n• Architecture: Clear service boundaries and intentional API design\n• Deployment: Dockerized multi-service setup",
        },
        {
          heading: "Reliability / Ops",
          bullets: [
            "Emphasis on authentication correctness, validation, and safe failure handling",
            "Logging and structured errors to debug user-facing issues",
            "Re-architecture driven by lessons learned from shipping v1 under real usage",
          ],
        },
        {
          heading: "Why this matters",
          body:
            "MedLynk reflects how I approach complex user-facing systems: ship something real, learn where it breaks, then rebuild it properly. That mindset directly applies to building production tools and dashboards where reliability, clarity, and trust are critical.",
        },
      ],
      links: [
        { label: "GitHub (v2)", href: "https://github.com/jason-boenjamin/MedLynk" },
        { label: "Devpost (v1 demo)", href: "https://devpost.com/software/medlynk-tfgzeu" },
      ],
    },
    {
      id: "nas",
      title: "Private Cloud Server / Home Lab",
      subtitle: "ops ownership",
      sections: [
        {
          heading: "What it is",
          body:
            "A self-managed private cloud used to host APIs, media services, and internal tools.",
        },
        {
          heading: "Role & Impact",
          bullets: [
            "Built and operated infrastructure end to end",
            "Managed users, networking, backups, and uptime",
          ],
        },
        {
          heading: "Technical Details",
          bullets: [
            "Docker-based service orchestration",
            "Networking, access control, and port forwarding",
          ],
        },
        {
          heading: "Reliability / Ops",
          bullets: [
            "Hands-on experience debugging hardware, OS, network, and service failures",
            "Real-world operational ownership and maintenance",
          ],
        },
      ],
      links: [{ label: "Details available on request" }],
    },
  ];

  return (
    <main className="page">
      <section className="card hero">
        <div>
          <p className="kicker">Full-Stack Engineer | systems + automation</p>
          <h1>Jason Boenjamin</h1>
          <p className="summary">
            I build practical systems that ship: workflow automation, distributed services, and secure AI-backed apps.
            Strong communicator, strong operator, and focused on impact.
          </p>

          <div className="row">
            <a className="btn" href="https://github.com/jason-boenjamin" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/in/jason-boenjamin/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href="mailto:jasonboe525@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img className="headshot" src="/headshot.jpg" alt="Jason Boenjamin" />
        </div>
      </section>

      <section className="section">
        <h2>Projects and work</h2>

        <div className="card accordion">
          {items.map((it) => {
            const isOpen = open === it.id;

            return (
              <div key={it.id}>
                <button className="item" onClick={() => setOpen(isOpen ? null : it.id)}>
                  <span>{it.title}</span>
                  <span className="muted">{it.subtitle}</span>
                </button>

                {isOpen && (
                  <div className="panel">
                    <div>
                      {it.sections.map((s) => (
                        <div key={s.heading} style={{ marginBottom: "12px" }}>
                          <div style={{ fontWeight: 600, marginBottom: "6px" }}>{s.heading}</div>

                          {s.body && (
                            <p style={{ margin: 0, whiteSpace: "pre-line" }}>
                              {s.body}
                            </p>
                          )}

                          {s.bullets && (
                            <ul style={{ margin: 0, paddingLeft: "18px" }}>
                              {s.bullets.map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="links">
                      {it.links.map((l) =>
                        l.href ? (
                          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                            {l.label}
                          </a>
                        ) : (
                          <span key={l.label} className="muted">
                            {l.label}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2>More</h2>

        <div className="card accordion">
          {/* AI */}
          <div>
            <button className="item" onClick={() => setOpenMore(openMore === "ai" ? null : "ai")}>
              <span>My stance on AI development</span>
              <span className="muted">how I use AI responsibly</span>
            </button>

            {openMore === "ai" && (
              <div className="panel">
                <p style={{ marginTop: 0, whiteSpace: "pre-line", color: "#cdd6e6" }}>
                  The idea that AI will replace software engineers isn’t realistic. Every system still needs an owner. In a full-stack role, that means understanding how the frontend, backend, and infrastructure work together well enough to know what should and should not be handed to AI.
                  {"\n\n"}
                  I treat AI as a powerful development tool, not a replacement for engineering judgment. I use it to speed up implementation and explore solutions, but I rely on my own understanding for system design, data handling, security, and reliability. Using AI well still requires a strong engineer who knows the system end-to-end and is responsible for what ships.
                  {"\n\n"}
                  AI helps me work faster, but accountability stays with me.
                </p>
              </div>
            )}
          </div>

          {/* WHO I AM */}
          <div>
            <button className="item" onClick={() => setOpenMore(openMore === "me" ? null : "me")}>
              <span>Who I am</span>
              <span className="muted">how I think and work</span>
            </button>

            {openMore === "me" && (
              <div className="panel">
                <p style={{ marginTop: 0, whiteSpace: "pre-line", color: "#cdd6e6" }}>
                  I’m Jason. I’m a Computer Science graduate from UCSD, but honestly, I’m not “just” a CS person. I’m an engineer at heart. I’m the kind of person who sees a problem and feels annoyed until it’s solved. Not in a negative way, more like I can’t stop thinking about it until I make it better.
                  {"\n\n"}
                  A big part of my “origin story” is Iron Man. It wasn’t about the suit. It was the idea that you can take knowledge, tools, and discipline and turn them into something real that protects people and helps people. That idea stuck with me permanently. I want to build things that matter.
                  {"\n\n"}
                  I also genuinely like people. I get energy from talking to others, hearing what they’re dealing with, and figuring out how to make their life easier. I’m a good listener, and I’m not the kind of person who tries to “sound smart.” I just try to be clear, direct, and useful.
                </p>

                <div style={{ height: 12 }} />

                <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                  What I do for fun (and why it matters)
                </div>
                <p style={{ marginTop: 0, whiteSpace: "pre-line", color: "#cdd6e6" }}>
                  In my free time I build things because I enjoy creating and learning by doing. Right now I’m maintaining a NAS, which is essentially a personal cloud server I run at home. It stores files, manages user access, and lets me share folders securely across devices. I also monitor performance, storage health, and permissions so it stays reliable.
                </p>

                <ul style={{ margin: 0, paddingLeft: "18px", color: "#cdd6e6" }}>
                  <li>Built parts of my standing desk setup because I wanted it exactly how I wanted it</li>
                  <li>Motorized my own skateboard to learn the system end-to-end</li>
                  <li>Built a personal server so I could run infrastructure I fully control</li>
                  <li>Built a custom keyboard and learned the physical side too (soldering, CNC, assembly)</li>
                </ul>

                <p style={{ marginTop: 12, whiteSpace: "pre-line", color: "#cdd6e6" }}>
                  The point isn’t the hobbies. It’s that I’m not passive. I’m always learning, building, and improving.
                  {"\n\n"}
                  At my job I build PCs, but I also write automation and improve processes. I’ve taken workflows that were messy and manual and standardized them so they’re faster, consistent, and repeatable.
                  {"\n\n"}
                  One example: a process that took roughly 40 minutes manually was reduced to around 11 minutes with a single-click workflow. I did it by diving into the real process, documenting it, finding the bottlenecks, and then building a better path. That’s basically how I operate in everything.
                  {"\n\n"}
                  I care a lot about quality. Not in a perfectionist-for-no-reason way, but in a “if you’re going to do it, do it right” way. I value repeatability, clean documentation, and knowing the outcome is reliable—not luck.
                </p>

                <p className="muted" style={{ margin: "12px 0 0" }}>
                  Outside of work: archery, basketball, the gym, and tinkering with hardware projects (including motorizing my skateboard).
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="footer">© {new Date().getFullYear()} Jason Boenjamin</div>
    </main>
  );
}

export default App;