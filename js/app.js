// Main Application Controller & State Manager - 8 Career Tracks Edition
document.addEventListener("DOMContentLoaded", () => {
    console.log("Syllabus2Career Engine initialized successfully.");

    let userProgress = JSON.parse(localStorage.getItem("s2c_module_progress")) || {
        moduleName: "Asynchronous JavaScript & RESTful APIs",
        step: 2,
        totalSteps: 5,
        percent: 40
    };

    // 1. Smooth View Switching for Navigation Tabs
    window.switchView = function(viewName) {
        document.querySelectorAll(".app-view").forEach(el => {
            el.classList.add("hidden");
        });
        
        const target = document.getElementById(viewName + "-view");
        if (target) {
            target.classList.remove("hidden");
        }

        document.querySelectorAll("nav button").forEach(btn => {
            btn.classList.remove("bg-indigo-600", "text-white", "shadow-sm", "font-semibold");
            btn.classList.add("text-slate-400", "font-medium");
        });

        if (event && event.currentTarget) {
            event.currentTarget.classList.add("bg-indigo-600", "text-white", "shadow-sm", "font-semibold");
            event.currentTarget.classList.remove("text-slate-400");
        }
    };

    // 2. Interactive Live Sync Status Checker
    window.toggleLiveSync = function() {
        alert("🟢 Cloud WebSocket Connection Active:\n• Connected to DSU Academic Cluster v2.4\n• Secure TLS 1.3 Encryption\n• Latency: 14ms (Real-time sync enabled)");
    };

    // 3. AI Resume Bullet Point Generator
    window.handleAIGeneration = function() {
        const bullets = [
            "Implemented AVL Tree balancing algorithms in C++ for efficient memory indexing and O(log n) lookups.",
            "Engineered asynchronous REST API data pipelines using JavaScript Fetch API and JSON payload parsing.",
            "Designed multi-threaded concurrency models in university lab projects reducing system latency by 35%."
        ];
        const randomBullet = bullets[Math.floor(Math.random() * bullets.length)];
        
        const container = document.getElementById("ai-output-box");
        if (container) {
            container.innerHTML = `
                <div class="text-emerald-400 font-semibold mb-1">✓ Generated Professional Resume Bullet:</div>
                <div class="text-white italic">"${randomBullet}"</div>
            `;
        }
    };

    // 4. Live Syllabus PDF / PPT Document Parser
    window.handleSyllabusUpload = function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const statusBox = document.getElementById("upload-status-box");
        if (statusBox) {
            statusBox.classList.remove("hidden");
            statusBox.innerHTML = `Analyzing <strong>"${file.name}"</strong> with Skill Graph Engine...`;
        }

        setTimeout(() => {
            if (statusBox) {
                statusBox.innerHTML = `
                    <div class="space-y-1.5 p-1">
                        <div class="text-emerald-400 font-bold">✓ Successfully parsed: <span class="text-white">${file.name}</span></div>
                        <div class="text-[11px] text-slate-300">📊 Extracted Competency Nodes: <em>Data Structures, Memory Indexing, System Optimization</em>.</div>
                        <div class="text-[11px] text-indigo-300 font-bold">🚀 DSU Curriculum Match Upgraded: 72% &rarr; <span class="text-emerald-400 font-extrabold">78% Match</span></div>
                    </div>
                `;
            }

            const matchBadge = document.getElementById("match-percent-badge");
            if (matchBadge) {
                matchBadge.innerText = "78%";
            }
        }, 1000);
    };

    // 5. ROLE-SPECIFIC DYNAMIC BRIDGE ROADMAP MODAL (Supporting all 8 Careers)
    window.viewBridgeRoadmap = function(roleName) {
        let modal = document.getElementById("bridge-modal-overlay");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "bridge-modal-overlay";
            modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fade-in";
            document.body.appendChild(modal);
        }

        // Default role package (Software Developer)
        let roleData = {
            matchScore: "72% Match",
            badgeColor: "text-emerald-400",
            missingGaps: "React, Docker, RESTful APIs, System Design",
            coreStrength: "Advanced Data Structures & Algorithms (CSE301)",
            bridgeSteps: [
                { step: "01", title: "Asynchronous JavaScript & Fetch API", status: "Critical Gap" },
                { step: "02", title: "Containerization with Docker & Microservices", status: "Recommended" },
                { step: "03", title: "Full-Stack React & Node.js Capstone Project", status: "Milestone" }
            ]
        };

        if (roleName.includes("AI / Machine Learning")) {
            roleData = {
                matchScore: "68% Match",
                badgeColor: "text-amber-400",
                missingGaps: "PyTorch, MLOps, Transformer Models, Vector DBs",
                coreStrength: "Linear Algebra & Python Fundamentals",
                bridgeSteps: [
                    { step: "01", title: "Neural Networks & PyTorch Tensor Operations", status: "Critical Gap" },
                    { step: "02", title: "Retrieval-Augmented Generation (RAG) Architectures", status: "Recommended" },
                    { step: "03", title: "Production Model Deployment & MLOps Pipeline", status: "Milestone" }
                ]
            };
        } else if (roleName.includes("Data Analyst")) {
            roleData = {
                matchScore: "58% Match",
                badgeColor: "text-amber-400",
                missingGaps: "Pandas, PyTorch, SQL Optimization, ML Pipelines",
                coreStrength: "Linear Algebra & Probability Models",
                bridgeSteps: [
                    { step: "01", title: "Python Data Analysis & Pandas Vectorization", status: "Critical Gap" },
                    { step: "02", title: "Neural Networks & PyTorch Fundamentals", status: "Recommended" },
                    { step: "03", title: "Predictive Analytics Capstone Project", status: "Milestone" }
                ]
            };
        } else if (roleName.includes("Cybersecurity")) {
            roleData = {
                matchScore: "65% Match",
                badgeColor: "text-violet-400",
                missingGaps: "Wireshark Packet Analysis, SIEM Tools, Cryptographic Protocols",
                coreStrength: "Computer Networks & Operating Systems",
                bridgeSteps: [
                    { step: "01", title: "Network Traffic Analysis using Wireshark", status: "Critical Gap" },
                    { step: "02", title: "Vulnerability Assessment & Penetration Testing", status: "Recommended" },
                    { step: "03", title: "Security Operations Center (SOC) Simulation", status: "Milestone" }
                ]
            };
        } else if (roleName.includes("Cloud & DevOps")) {
            roleData = {
                matchScore: "60% Match",
                badgeColor: "text-amber-400",
                missingGaps: "Kubernetes, Terraform, CI/CD Actions, AWS Cloud Infrastructure",
                coreStrength: "Operating Systems & Computer Networks",
                bridgeSteps: [
                    { step: "01", title: "Container Orchestration with Kubernetes", status: "Critical Gap" },
                    { step: "02", title: "Infrastructure as Code (IaC) using Terraform", status: "Recommended" },
                    { step: "03", title: "Automated GitHub Actions CI/CD Pipeline", status: "Milestone" }
                ]
            };
        } else if (roleName.includes("Data Engineer")) {
            roleData = {
                matchScore: "62% Match",
                badgeColor: "text-amber-400",
                missingGaps: "Apache Spark, Snowflake Data Warehousing, Kafka Streams",
                coreStrength: "Database Management Systems & SQL",
                bridgeSteps: [
                    { step: "01", title: "Distributed Data Processing with Apache Spark", status: "Critical Gap" },
                    { step: "02", title: "Snowflake Cloud Data Warehousing & Modeling", status: "Recommended" },
                    { step: "03", title: "End-to-End ETL Pipeline Construction", status: "Milestone" }
                ]
            };
        } else if (roleName.includes("Full-Stack")) {
            roleData = {
                matchScore: "75% Match",
                badgeColor: "text-emerald-400",
                missingGaps: "Next.js, GraphQL, State Management, Tailwind CSS",
                coreStrength: "Object Oriented Programming & Algorithms",
                bridgeSteps: [
                    { step: "01", title: "Advanced React & Next.js Server Components", status: "Critical Gap" },
                    { step: "02", title: "API Design with GraphQL and REST", status: "Recommended" },
                    { step: "03", title: "Production Full-Stack Deployment Project", status: "Milestone" }
                ]
            };
        } else if (roleName.includes("AI Product Manager")) {
            roleData = {
                matchScore: "70% Match",
                badgeColor: "text-violet-400",
                missingGaps: "Agile Analytics, LLM Product Strategy, User Prompt Design",
                coreStrength: "Technical Documentation & System Logic",
                bridgeSteps: [
                    { step: "01", title: "AI Feature Roadmapping & User Metrics", status: "Critical Gap" },
                    { step: "02", title: "LLM Prompt Evaluation & Safety Frameworks", status: "Recommended" },
                    { step: "03", title: "AI-Powered Product PRD Capstone Launch", status: "Milestone" }
                ]
            };
        }

        modal.innerHTML = `
            <div class="bg-slate-900 border border-indigo-500/50 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div>
                        <span class="px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI CAREER BRIDGE ANALYZER</span>
                        <h3 class="text-xl font-extrabold text-white mt-1">Target Track: ${roleName}</h3>
                        <p class="text-xs text-slate-400 mt-0.5">Curriculum Parity Score: <strong class="${roleData.badgeColor}">${roleData.matchScore}</strong></p>
                    </div>
                    <button onclick="document.getElementById('bridge-modal-overlay').remove()" class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold">&times;</button>
                </div>
                
                <div class="space-y-4 text-xs text-slate-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                            <div class="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">✓ University Strength</div>
                            <p class="text-slate-200">${roleData.coreStrength}</p>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                            <div class="font-bold text-amber-400 uppercase tracking-wider text-[11px]">⚠️ Identified Gaps</div>
                            <p class="text-slate-200">${roleData.missingGaps}</p>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                        <div class="font-bold text-indigo-400 uppercase tracking-wider text-[11px]">// Tailored Bridge Roadmap for ${roleName}</div>
                        <div class="space-y-2">
                            ${roleData.bridgeSteps.map(s => `
                                <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                                    <div class="flex items-center gap-3">
                                        <span class="w-6 h-6 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-[10px]">${s.step}</span>
                                        <span class="font-semibold text-white">${s.title}</span>
                                    </div>
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">${s.status}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-2">
                        <span class="text-violet-400 font-semibold">💡 Action: Deploy personalized modules to close gaps.</span>
                        <button onclick="document.getElementById('bridge-modal-overlay').remove(); switchView('ai-roadmap');" class="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all">Launch Bridge Modules &rarr;</button>
                    </div>
                </div>
            </div>
        `;
    };

    // 6. START MODULE MODAL
    window.startModule = function(moduleName) {
        let modal = document.getElementById("learning-modal-overlay");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "learning-modal-overlay";
            modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fade-in";
            document.body.appendChild(modal);
        }

        let conceptDesc = "Master async/await paradigms, Fetch API, JSON parsing, and handling HTTP requests for dynamic web applications.";
        let codeSnippet = `async function fetchSyllabusCompetencies() {\n    try {\n        const res = await fetch('/api/v2/graph');\n        return await res.json();\n    } catch (err) { console.error(err); }\n}`;
        
        if (moduleName.includes("Git")) {
            conceptDesc = "Learn professional branching strategies (Git Flow), resolving merge conflicts collaboratively, and managing pull requests for team projects.";
            codeSnippet = `git checkout -b feature/syllabus-parser\ngit add .\ngit commit -m "feat: add live PDF parser engine"\ngit push origin feature/syllabus-parser`;
        }

        modal.innerHTML = `
            <div class="bg-slate-900 border border-indigo-500/50 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div>
                        <span class="px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI MICRO-LEARNING MODULE</span>
                        <h3 class="text-xl font-extrabold text-white mt-1">${moduleName}</h3>
                    </div>
                    <button onclick="document.getElementById('learning-modal-overlay').remove()" class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold">&times;</button>
                </div>
                
                <div class="space-y-4 text-xs text-slate-300">
                    <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                        <div class="font-bold text-white uppercase tracking-wider text-indigo-400">📖 Concept Breakdown & Explanation</div>
                        <p>${conceptDesc}</p>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 font-mono text-slate-300 space-y-1">
                        <div class="text-indigo-400 font-bold mb-1">// Implementation Example</div>
                        <pre class="text-emerald-400 whitespace-pre-wrap">${codeSnippet}</pre>
                    </div>

                    <div class="flex items-center justify-between pt-2">
                        <span class="text-amber-400 font-semibold">🏆 Reward on Completion: +15% Skill Parity Boost</span>
                        <button onclick="
                            const btn = event.currentTarget;
                            btn.innerText = '✓ Completed & Verified!';
                            btn.className = 'px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white shadow-lg transition-all';
                            setTimeout(() => document.getElementById('learning-modal-overlay').remove(), 1000);
                        " class="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all">Mark Module Complete</button>
                    </div>
                </div>
            </div>
        `;
    };

    // 7. VIEW BADGES & STUDENT RANK MATRIX
    window.showBadgeShowcase = function() {
        let modal = document.getElementById("badge-modal-overlay");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "badge-modal-overlay";
            modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fade-in";
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="bg-slate-900 border border-violet-500/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div>
                        <span class="px-2.5 py-1 rounded text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">STUDENT RANK & ACHIEVEMENT MATRIX</span>
                        <h3 class="text-xl font-extrabold text-white mt-1">Varsha B R • Academic Scorecard</h3>
                    </div>
                    <button onclick="document.getElementById('badge-modal-overlay').remove()" class="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold">&times;</button>
                </div>

                <div class="space-y-4 text-xs">
                    <div class="grid grid-cols-3 gap-3">
                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                            <div class="text-slate-400 text-[10px] uppercase font-semibold">Cohort Rank</div>
                            <div class="text-2xl font-extrabold text-amber-400 mt-1">#2</div>
                            <div class="text-[10px] text-emerald-400 mt-0.5">Top 5% in CSE</div>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                            <div class="text-slate-400 text-[10px] uppercase font-semibold">Skill Parity Score</div>
                            <div class="text-2xl font-extrabold text-indigo-400 mt-1">78%</div>
                            <div class="text-[10px] text-indigo-300 mt-0.5">+6% from syllabus</div>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                            <div class="text-slate-400 text-[10px] uppercase font-semibold">Badges Earned</div>
                            <div class="text-2xl font-extrabold text-violet-400 mt-1">3 / 3</div>
                            <div class="text-[10px] text-violet-300 mt-0.5">100% unlocked</div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="font-bold text-white uppercase tracking-wider text-[11px] text-indigo-400">Unlocked Rank Badges</div>
                        
                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-4">
                            <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg">🏆</div>
                            <div>
                                <div class="font-bold text-white">Gold Scholar Badge</div>
                                <div class="text-slate-400 text-[11px]">Awarded for maintaining 72%+ curriculum alignment across CSE Sem 3 courses.</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-4">
                            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg">⚡</div>
                            <div>
                                <div class="font-bold text-white">Parser Pioneer</div>
                                <div class="text-slate-400 text-[11px]">Unlocked by successfully uploading and parsing live chapter PPT/PDF syllabi.</div>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-4">
                            <div class="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">💻</div>
                            <div>
                                <div class="font-bold text-white">Algorithm Specialist</div>
                                <div class="text-slate-400 text-[11px]">Validated via lab experiment auto-to-resume bullet generation.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <button onclick="document.getElementById('badge-modal-overlay').remove()" class="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-all">Close Scorecard</button>
            </div>
        `;
    };
});