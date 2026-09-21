const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  themeToggle.textContent = isLight ? "☾" : "☼";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});


// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☾";
}


// Active navigation while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach(section => observer.observe(section));


// ===============================
// Skill Card Details
// ===============================

const skillData = {

  frontend: {
    title: "Frontend",
    icon: "</>",
    description:
      "Frontend technologies used to structure, style, and add interaction to web pages and applications.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular"
    ]
  },

  programming: {
    title: "Programming",
    icon: "Py",
    description:
      "Programming and API-related skills used across application development and problem solving.",
    tags: [
      "Python",
      "SQL",
      "REST API",
      "C",
      "C++",
      "Java"
    ]
  },

  database: {
    title: "Database",
    icon: "DB",
    description:
      "Database skills focused on working with structured data using SQL and MySQL.",
    tags: [
      "MySQL",
      "SQL"
    ]
  },

  cloud: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    description:
      "Cloud and DevOps technologies included in the current portfolio skill set.",
    tags: [
      "AWS",
      "Docker",
      "Kubernetes",
      "DevOps"
    ]
  },

  tools: {
    title: "Tools",
    icon: "Git",
    description:
      "Development tools used for coding, source control, and project workflow.",
    tags: [
      "Git",
      "GitHub",
      "VS Code"
    ]
  },

  iot: {
    title: "IoT",
    icon: "IoT",
    description:
      "IoT skills used for sensor-based automation and microcontroller projects.",
    tags: [
      "NodeMCU",
      "Blynk",
      "Sensors"
    ]
  },

  backend: {
    title: "Backend",
    icon: "API",
    description:
      "Backend skills focused on API design and connecting application logic with databases.",
    tags: [
      "API Design",
      "Database Integration"
    ]
  }
};


// ===============================
// Skill Modal Elements
// ===============================

const skillModal = document.getElementById("skillModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalIcon =
  document.getElementById("modalIcon");

const modalDescription =
  document.getElementById("modalDescription");

const modalTags =
  document.getElementById("modalTags");

const modalGithub =
  document.getElementById("modalGithub");

const modalClose =
  document.getElementById("modalClose");

const skillCards =
  document.querySelectorAll(".skill-interactive");


// ===============================
// Open Skill Popup
// ===============================

function openSkillModal(key) {

  const skill = skillData[key];

  if (!skill) return;

  modalTitle.textContent = skill.title;

  modalIcon.textContent = skill.icon;

  modalDescription.textContent =
    skill.description;

  modalTags.innerHTML =
    skill.tags
      .map(tag => `<span>${tag}</span>`)
      .join("");

  // GitHub profile link
  modalGithub.href =
    "https://github.com/Nowfiya-jeshmi";

  skillModal.classList.add("open");

  skillModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");

  modalClose.focus();
}


// ===============================
// Close Skill Popup
// ===============================

function closeSkillModal() {

  skillModal.classList.remove("open");

  skillModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}


// ===============================
// Skill Card Click
// ===============================

skillCards.forEach(card => {

  card.addEventListener("click", () => {

    openSkillModal(
      card.dataset.skill
    );

  });


  // Keyboard support
  card.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openSkillModal(
          card.dataset.skill
        );

      }

    }
  );

});


// ===============================
// Close Button
// ===============================

modalClose.addEventListener(
  "click",
  closeSkillModal
);


// ===============================
// Click Outside Popup
// ===============================

skillModal
  .querySelectorAll("[data-close-modal]")
  .forEach(element => {

    element.addEventListener(
      "click",
      closeSkillModal
    );

  });


// ===============================
// Escape Key
// ===============================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      skillModal.classList.contains("open")
    ) {

      closeSkillModal();

    }

  }
);

/* =========================================
   PROJECT DETAILS
========================================= */

const projectData = {

    irrigation: {

        icon: "🌱",

        type: "IoT · NodeMCU · Blynk",

        title: "Automatic Irrigation System",

        description:
            "Automated plant irrigation using rain and soil-moisture sensors. The system controls a water pump based on soil condition and rainfall.",

        technologies: [
            "NodeMCU",
            "Blynk",
            "Rain Sensor",
            "Soil Moisture Sensor"
        ],

        details: [
            "Monitors soil moisture conditions.",
            "Detects rainfall using a rain sensor.",
            "Controls a water pump based on soil condition and rainfall.",
            "Designed to reduce unnecessary water usage."
        ],

        github:
            "https://github.com/Nowfiya-jeshmi"
    },


    laser: {

        icon: "🔐",

        type: "IoT · Security · Sensors",

        title: "Laser Beam Security System",

        description:
            "Designed an intrusion detection system using a laser transmitter, LDR sensor, NodeMCU, and buzzer for real-time security alerts.",

        technologies: [
            "NodeMCU",
            "LDR",
            "Laser",
            "Buzzer"
        ],

        details: [
            "Uses a laser transmitter for beam-based detection.",
            "Uses an LDR sensor to detect beam interruption.",
            "NodeMCU processes the sensor input.",
            "Triggers a buzzer for security alerts."
        ],

        github:
            "https://github.com/Nowfiya-jeshmi"
    },


    guardian: {

        icon: "🛡️",

        type: "IoT · NodeMCU · PIR · HC-SR04",

        title: "Guardian Care Autonomous Safety Network",

        description:
            "An IoT-based security system designed to monitor restricted areas using motion and distance detection for automated, real-time safety monitoring.",

        technologies: [
            "NodeMCU (ESP8266)",
            "PIR Sensor",
            "HC-SR04",
            "Buzzer",
            "LED",
            "IoT"
        ],

        details: [
            "Monitors restricted areas.",
            "Uses PIR for motion detection.",
            "Uses HC-SR04 for distance detection.",
            "Provides automated safety monitoring."
        ],

        github:
            "https://github.com/Nowfiya-jeshmi"
    },


    ecommerce: {

        icon: "🛒",

        type: "Python · REST API · MySQL",

        title: "E-Commerce API Development",

        description:
            "Built and tested backend REST API modules for product listing, cart management, and order processing with MySQL database integration.",

        technologies: [
            "Python",
            "REST API",
            "MySQL",
            "Git/GitHub"
        ],

        details: [
            "Developed product listing API modules.",
            "Implemented cart management functionality.",
            "Implemented order processing modules.",
            "Integrated MySQL for database handling.",
            "Used Git/GitHub for version control."
        ],

        github:
            "https://github.com/Nowfiya-jeshmi"
    }

};

const projectDetails = {
  irrigation: {
    title: "Automatic Irrigation System",
    category: "IoT · NodeMCU · Blynk",
    description:
      "An IoT-based automatic irrigation system that monitors soil moisture and rainfall to control water supply automatically.",
    details: [
      "Used NodeMCU ESP8266 as the main controller.",
      "Integrated soil moisture sensor and rain sensor.",
      "Used a relay module to control the water pump.",
      "Blynk App used for real-time monitoring.",
      "Helps reduce water wastage and manual effort."
    ],
    github: "https://github.com/Nowfiya-jeshmi/automatic-irrigation-system.git"
  },

  laser: {
    title: "Laser Beam Security System",
    category: "IoT · Security · Sensors",
    description:
      "An IoT-based security system designed to detect unauthorized access by monitoring interruptions in a laser beam.",
    details: [
      "Used NodeMCU ESP8266 as the controller.",
      "Integrated laser transmitter and LDR sensor.",
      "Detected beam interruption for intrusion detection.",
      "Triggered a buzzer when unauthorized access was detected.",
      "Designed for real-time security monitoring."
    ],
    github: "https://github.com/Nowfiya-jeshmi"
  },

  guardian: {
    title: "Guardian Care Autonomous Safety Network",
    category: "NodeMCU · PIR · HC-SR04",
    description:
      "An IoT-based security system developed for monitoring restricted areas using motion and distance detection.",
    details: [
      "Used NodeMCU as the main controller.",
      "Integrated PIR sensor for motion detection.",
      "Used HC-SR04 ultrasonic sensor for distance monitoring.",
      "Designed for restricted-area security monitoring.",
      "Supports automated safety alerts."
    ],
    github: "https://github.com/Nowfiya-jeshmi"
  },

  elite: {
    title: "Elite Exhaust Care – LPG Leakage and Smoke Detection Safety System",
    category: "IoT • ESP8266 • Embedded Systems",
    description:
      "An IoT-based kitchen safety monitoring system designed to detect LPG gas leakage, smoke, fire, and abnormal temperature levels in real time.",
    details: [
      "Developed an IoT-based kitchen safety monitoring system for real-time hazard detection.",
      "Integrated MQ-2 gas, flame, and temperature sensors with ESP8266.",
      "Implemented buzzer alerts and Wi-Fi-based notifications for emergency warnings.",
      "Enabled remote monitoring through Blynk and Firebase.",
      "Designed the system to support faster response and improved household safety."
    ],
    github: "https://github.com/Nowfiya-jeshmi"
  },

  ecommerce: {
    title: "E-Commerce API Development",
    category: "Python · REST API · MySQL",
    description:
      "A backend API project developed using Python for managing core e-commerce operations.",
    details: [
      "Developed REST API modules using Python.",
      "Implemented product listing and cart management.",
      "Worked with order processing functionality.",
      "Used MySQL for database integration.",
      "Used Git and GitHub for version control."
    ],
    github: "https://github.com/Nowfiya-jeshmi"
  }
};


function openProject(projectId) {
  const project = projectDetails[projectId];

  if (!project) return;

  document.getElementById("projectModalTitle").textContent = project.title;
  document.getElementById("projectModalCategory").textContent = project.category;
  document.getElementById("projectModalDescription").textContent = project.description;

  const detailsList = document.getElementById("projectModalDetails");

  detailsList.innerHTML = project.details
    .map(detail => `<li>${detail}</li>`)
    .join("");

  document.getElementById("projectGithub").href = project.github;

  document.getElementById("projectModal").classList.add("show");
}


function closeProject() {
  document.getElementById("projectModal").classList.remove("show");
}


window.addEventListener("click", function (event) {
  const modal = document.getElementById("projectModal");

  if (event.target === modal) {
    closeProject();
  }
});

// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
  ".section-heading, .profile-card, .about-copy, .skill-card, .project-card, .achievement-card, .contact-card"
);

revealElements.forEach((element, index) => {
  element.classList.add("scroll-reveal");

  // Small stagger effect
  element.style.setProperty(
    "--reveal-delay",
    `${(index % 3) * 0.12}s`
  );
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("reveal-show");

        // Animate only once
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// =========================
// MESSAGE POPUP
// =========================

function openMessageBox() {
    const overlay = document.getElementById("messageOverlay");

    if (overlay) {
        overlay.classList.add("show");
    }
}

function closeMessageBox() {
    const overlay = document.getElementById("messageOverlay");

    if (overlay) {
        overlay.classList.remove("show");
    }
}


// Close when clicking outside the box
document.addEventListener("click", function (event) {

    const overlay = document.getElementById("messageOverlay");

    if (
        overlay &&
        event.target === overlay
    ) {
        closeMessageBox();
    }

});


// Close with Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMessageBox();
    }

});

// Draggable Message Button
const floatingMessage = document.querySelector(".floating-message-btn");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

floatingMessage.addEventListener("pointerdown", (e) => {
  isDragging = true;

  const rect = floatingMessage.getBoundingClientRect();

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  floatingMessage.setPointerCapture(e.pointerId);
});

floatingMessage.addEventListener("pointermove", (e) => {
  if (!isDragging) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // Keep button inside the screen
  const maxX = window.innerWidth - floatingMessage.offsetWidth;
  const maxY = window.innerHeight - floatingMessage.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  floatingMessage.style.left = `${x}px`;
  floatingMessage.style.top = `${y}px`;
  floatingMessage.style.right = "auto";
  floatingMessage.style.bottom = "auto";
});

floatingMessage.addEventListener("pointerup", () => {
  isDragging = false;
});
