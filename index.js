/**
 * Antigravity Minimalist Portfolio - Interaction Engine
 * Profile: Akshit Gandotra
 * Engine: Vanilla JavaScript ES6
 */

// ==========================================================================
// Theme Initialization Engine (Runs immediately to prevent theme flashing)
// ==========================================================================
const savedTheme = localStorage.getItem('theme');
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
  document.body.classList.add('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  
  // Theme Toggle Button Event Binding
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLightMode = document.body.classList.toggle('light-mode');
      localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    });
  }

  // ==========================================================================
  // 1. Accordion Custom State Tracking (Optional Progressive Enhancements)
  // ==========================================================================
  const experienceCards = document.querySelectorAll('.experience-card');
  
  // Track details expansion analytics or enhance animations if required
  experienceCards.forEach(card => {
    card.addEventListener('toggle', () => {
      if (card.open) {
        // Optional smooth centering into view when card opens on smaller screens
        const rect = card.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });

  // ==========================================================================
  // 2. Interactive simulated CLI Terminal Widget Logic
  // ==========================================================================
  const terminalInput = document.getElementById('terminal-input');
  const terminalLog = document.getElementById('terminal-log');
  const terminalWin = document.getElementById('terminal-win');

  // Maintain active focus on command input field on clicking inside terminal panel
  terminalWin.addEventListener('click', () => {
    terminalInput.focus();
  });

  // Command History Registry
  const commandHistory = [];
  let historyIndex = -1;

  // Command Action Registry
  const COMMANDS = {
    help: {
      desc: 'Show list of available security commands',
      action: () => {
        return `Available commands:
  <span class="cmd-highlight">about</span>          - Print brief professional bio summary
  <span class="cmd-highlight">skills</span>         - Retrieve categorized technical expertise
  <span class="cmd-highlight">experience</span>     - Print professional career history details
  <span class="cmd-highlight">projects</span>       - View featured projects & technology stacks
  <span class="cmd-highlight">certs</span>          - List professional training & certifications
  <span class="cmd-highlight">education</span>      - Print academic background history
  <span class="cmd-highlight">contact</span>        - Get email, phone, and GitHub contact links
  <span class="cmd-highlight">resume</span>         - Access direct downloadable resume document
  <span class="cmd-highlight">secret</span>         - Decrypt hidden developer system easter-egg
  <span class="cmd-highlight">clear</span>          - Clear terminal logs screen`;
      }
    },
    about: {
      desc: 'Print brief professional bio summary',
      action: () => {
        return `[PROFILE SUMMARY]
Akshit Gandotra is a Cybersecurity and Digital Risk Analyst. 
Currently operating at KPMG India, he bridges technical programming 
and corporate compliance domains to engineer secure, risk-aware, and scalable systems.
Specialization: ISO 27001 Audits, IAM/PAM reviews, LLM Red-Teaming, AI Governance.`;
      }
    },
    skills: {
      desc: 'Retrieve categorized technical expertise',
      action: () => {
        return `[TECHNICAL EXPERTISE MATRIX]
--------------------------------------------------------------
1. RISK, COMPLIANCE & PRIVACY:
   - ISO 27001, ISO 27701 (PIMS), ISO 42001 (AI Management)
   - Enterprise Risk Assessments, Data Privacy (DPDP, GDPR)
   
2. IDENTITY & ACCESS SECURITY:
   - IAM / PAM Control Governance, Access Reviews
   - Third-Party Risk Management (TPRM), ISMS Development
   
3. AI & DATA SCIENCE:
   - LLM Red-Teaming, Jailbreak Simulations, AI Governance
   - Python, Power BI, PyTorch, Ollama, NLP, CNNs`;
      }
    },
    experience: {
      desc: 'Print professional career history details',
      action: () => {
        return `[PROFESSIONAL CAREER DETAILS]
--------------------------------------------------------------
1. KPMG India | Analyst (Digital Risk & Cyber)
   Aug 2025 - Present | Gurugram, IN
   - Led ISO 27001 compliance audits & client risk reviews.
   - Executed IAM/PAM reviews, minimizing credential exposure.
   - Aided government clients with DPDP/GDPR ISMS frameworks.
   - Conducted TPRM evaluations across key vendors.
   
2. KPMG India | Academic Trainee (Digital Risk & Cloud Security)
   Jan 2025 - Jul 2025 | Gurugram, IN
   - Drafted AI governance and data security policies.
   - Simulated LLM red-teaming security investigations.
   - Engineered visual dashboards summarizing compliance logs.
   
3. Government of India | Machine Learning Intern
   Jun 2024 - Aug 2024 | New Delhi, IN
   - Engineered CNN object detection models (92% accuracy).
   - Increased geospatial data streaming throughput by 80%.`;
      }
    },
    projects: {
      desc: 'View featured projects & technology stacks',
      action: () => {
        return `[FEATURED ENGINEERING PROJECTS]
--------------------------------------------------------------
1. SERENITY SPHERE (Flask, LSTM, CNN, ML)
   - Mental health analysis and tracking platform.
   - 94% accuracy in LSTM text journal sentiment analysis.
   - 82% accuracy in CNN facial micro-expression mapping.
   - Code: https://github.com/akshit-g
   
2. SENSITIVE INFO BLUR APP (ReactJS, Python, NLP, Computer Vision)
   - ML-driven document sanitizer that blurs PII content.
   - Led 6 developers to implement privacy-compliant sharing.
   - Code: https://github.com/akshit-g`;
      }
    },
    certs: {
      desc: 'List professional training & certifications',
      action: () => {
        return `[CREDENTIALS & COMPLIANCE CERTIFICATIONS]
--------------------------------------------------------------
1.  Microsoft Certified: Security Operations Analyst Associate (SC-200)
    Issuer: Microsoft | Issued: May 2026 | Credential ID: 2776D805021A26BE
    
2.  Microsoft Certified: Azure Developer Associate (AZ-204)
    Issuer: Microsoft | Issued: May 2026 | Credential ID: 7FC392A23FCCD055
    
3.  Microsoft Certified: Azure Fundamentals (AZ-900)
    Issuer: Microsoft | Issued: May 2026 | Credential ID: 733DC5ADF13EF70D
    
4.  Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)
    Issuer: Microsoft | Issued: May 2026 | Credential ID: 65F277520EAD98DC
    
5.  ISC² Certified in Cybersecurity (CC)
    Issuer: ISC² | Issued: Feb 2026
    
6.  AI Security & Governance
    Issuer: Securiti AI | Issued: May 2025 | Credential ID: 138F434A9-138F43318-12D651131
    
7.  DSPM Fundamentals
    Issuer: Securiti AI | Issued: May 2025 | Credential ID: 13EF9F35C-13EF9CD15-12D651131
    
8.  PrivacyOps
    Issuer: Securiti AI | Issued: May 2025 | Credential ID: 132FE53A3-132EFAA88-12D651131
    
9.  Google Project Management: Specialization
    Issuer: Google | Issued: Oct 2024 | Credential ID: TT8A9332R7D2
    
10. Google Business Intelligence Specialization
    Issuer: Google | Issued: Oct 2024 | Credential ID: DWIL8L4QMXOV
    
11. Google Advanced Data Analytics Specialization
    Issuer: Google | Issued: Oct 2024 | Credential ID: V9ZPXP1EMJ5H
    
12. Certificate in Corporate Finance
    Issuer: LSBF | Issued: Jul 2024 | Credential ID: 700163
    
13. Microsoft Certified: Azure AI Engineer Associate (AI-102)
    Issuer: Microsoft | Issued: Jun 2024 | Credential ID: FDFD1E89340FCB26
    
14. Google Cybersecurity Specialization
    Issuer: Google | Issued: Jan 2024 | Credential ID: 9LCSQNR66P5A
    
15. Cyber Security, Penetration Testing & Machine Learning Workshop
    Issuer: IIT Roorkee (Cognizance) & ICSS | Issued: Nov 2022
    
16. IBM Applied AI Specialization
    Issuer: IBM | Issued: May 2022

To verify all credentials, visit:
https://www.linkedin.com/in/akshitgandotra/details/certifications/`;
      }
    },
    education: {
      desc: 'Print academic background history',
      action: () => {
        return `[ACADEMIC BACKGROUND]
--------------------------------------------------------------
- M.Sc. in Data Science & Artificial Intelligence
  BITS Pilani | Aug 2025 - Present (CGPA: 9.86)
  
- B.Tech (Hons.) in Computer Science & Engineering (AIML)
  UPES Dehradun | Aug 2021 - Jun 2025 (CGPA: 8.95)`;
      }
    },
    contact: {
      desc: 'Get email, phone, and GitHub contact links',
      action: () => {
        return `[COMMUNICATIONS & SECURE NODES]
--------------------------------------------------------------
- LinkedIn: https://www.linkedin.com/in/akshitgandotra/
- Hashnode: https://akshitg.hashnode.dev/
- Github:   https://github.com/akshit-g
- Email:    gandotra.akshit@gmail.com`;
      }
    },
    resume: {
      desc: 'Access direct downloadable resume document',
      action: () => {
        return `[DOWNLOAD NODE DETECTED]
Direct resume file copied locally.
Click the 'Resume' button in the float dock at the top or open:
File: assets/Akshit_Gandotra_Resume.pdf`;
      }
    },
    secret: {
      desc: 'Decrypt hidden developer system easter-egg',
      action: () => {
        return `<span class="cmd-highlight">*** SECURE PROTOCOL DECRYPTED SUCCESSFULLY ***</span>
Access Status: <span class="pulse-dot" style="display:inline-block;margin-right:4px;"></span>Decryption Successful!
Riddle: "I guard your credentials but hold no keys, I red-team your LLMs with extreme ease. What am I?"
Answer: "Akshit Gandotra - Ready for hire!"`;
      }
    }
  };

  // Process Command Action Execution
  const executeCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim().toLowerCase();
    
    // Add command to log
    const cmdEchoLine = document.createElement('div');
    cmdEchoLine.className = 'terminal-command-echo';
    cmdEchoLine.innerHTML = `visitor@akshit-security:~$ ${cmdText}`;
    terminalLog.appendChild(cmdEchoLine);

    if (trimmedCmd === '') {
      scrollTerminalToBottom();
      return;
    }

    if (trimmedCmd === 'clear') {
      terminalLog.innerHTML = '';
      scrollTerminalToBottom();
      return;
    }

    const commandOutputLine = document.createElement('pre');
    commandOutputLine.className = 'terminal-command-output';

    if (COMMANDS[trimmedCmd]) {
      commandOutputLine.innerHTML = COMMANDS[trimmedCmd].action();
    } else {
      commandOutputLine.innerHTML = `bash: command not found: <span style="color: #ef4444">${cmdText}</span>. Type <span class="cmd-highlight">help</span> for a list of secure commands.`;
    }

    terminalLog.appendChild(commandOutputLine);
    scrollTerminalToBottom();
  };

  // Scroll viewport window
  const scrollTerminalToBottom = () => {
    // Scroll window body container smoothly
    terminalWin.scrollTop = terminalWin.scrollHeight;
  };

  // Input listeners
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value;
      executeCommand(command);
      
      // Store history
      if (command.trim() !== '') {
        commandHistory.push(command);
        historyIndex = commandHistory.length;
      }
      
      terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      // Cycle history up
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      // Cycle history down
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
      e.preventDefault();
    }
  });
});
