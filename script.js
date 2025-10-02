
      // Resume examples data
      const resumeExamples = {
        "software-engineer": {
          personal: {
            fullName: "Alex Johnson",
            jobTitle: "Senior Software Engineer",
            email: "alex.johnson@email.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA",
            linkedin: "linkedin.com/in/alexjohnson",
            website: "alexjohnson.dev",
          },
          summary:
            "Experienced Full-Stack Developer with 5+ years of expertise in JavaScript, React, Node.js, and cloud technologies. Successfully led the development of scalable web applications serving over 100,000 users. Passionate about clean code, agile methodologies, and mentoring junior developers.",
          experience: [
            {
              title: "Senior Software Engineer",
              company: "Tech Innovations Inc.",
              duration: "2020 - Present",
              description:
                "Led a team of 5 developers in building a microservices architecture serving 50K+ daily users. Reduced application load time by 40% through performance optimization. Implemented CI/CD pipelines reducing deployment time by 60%.",
            },
            {
              title: "Software Developer",
              company: "Digital Solutions LLC",
              duration: "2018 - 2020",
              description:
                "Developed and maintained React-based frontend applications. Collaborated with UX team to implement responsive designs. Integrated RESTful APIs and implemented state management using Redux.",
            },
          ],
          education: [
            {
              degree: "Bachelor of Science",
              field: "Computer Science",
              institution: "University of California, Berkeley",
              year: "2014 - 2018",
            },
          ],
          certifications: [
            {
              name: "AWS Certified Solutions Architect – Associate",
              organization: "Amazon Web Services (AWS)",
              year: "2023",
              id: "ABC-12345",
            }
          ], // ADDED CERTIFICATION EXAMPLE DATA
          skills: [
            "JavaScript",
            "React",
            "Node.js",
            "Python",
            "AWS",
            "Docker",
            "MongoDB",
            "Git",
            "Agile Methodologies",
            "REST APIs",
          ],
        },
        "marketing-manager": {
          personal: {
            fullName: "Sarah Chen",
            jobTitle: "Marketing Manager",
            email: "sarah.chen@email.com",
            phone: "+1 (555) 987-6543",
            location: "New York, NY",
            linkedin: "linkedin.com/in/sarahchen",
            website: "sarahchen-marketing.com",
          },
          summary:
            "Strategic Marketing Manager with 6 years of experience driving brand growth and digital transformation. Expert in SEO, content strategy, and data-driven campaign optimization. Increased organic traffic by 300% and improved conversion rates by 45% through targeted marketing initiatives.",
          experience: [
            {
              title: "Marketing Manager",
              company: "Global Brands Co.",
              duration: "2019 - Present",
              description:
                "Managed $2M annual marketing budget and led a team of 8 marketing specialists. Developed and executed multi-channel marketing strategies resulting in 25% revenue growth. Launched successful influencer marketing program with 500% ROI.",
            },
          ],
          education: [
            {
              degree: "MBA",
              field: "Marketing",
              institution: "Columbia Business School",
              year: "2017 - 2019",
            },
            {
              degree: "Bachelor of Arts",
              field: "Communications",
              institution: "New York University",
              year: "2013 - 2017",
            },
          ],
          certifications: [
            {
              name: "Google Ads Certification",
              organization: "Google",
              year: "2024",
              id: "",
            }
          ], // ADDED CERTIFICATION EXAMPLE DATA
          skills: [
            "Digital Marketing",
            "SEO/SEM",
            "Content Strategy",
            "Google Analytics",
            "Social Media Marketing",
            "Brand Management",
            "Market Research",
            "Project Management",
          ],
        },
        // Add this to the resumeExamples object
        "project-manager": {
          personal: {
            fullName: "Michael Chen",
            jobTitle: "Project Manager",
            email: "michael.chen@email.com",
            phone: "+1 (555) 345-6789",
            location: "Chicago, IL",
            linkedin: "linkedin.com/in/michaelchen",
            website: "michaelchen-pm.com",
          },
          summary:
            "Results-driven Project Manager with 6+ years of experience leading cross-functional teams and delivering complex projects on time and within budget. Expert in Agile methodologies, risk management, and stakeholder communication. Successfully managed projects with budgets up to $2M and teams of 15+ members.",
          experience: [
            {
              title: "Senior Project Manager",
              company: "Innovate Solutions Inc.",
              duration: "2020 - Present",
              description:
                "Lead a team of 15 professionals in delivering software development projects. Managed $2M annual budget with consistent delivery under budget. Implemented Agile methodologies improving team velocity by 35%. Coordinated with stakeholders across 3 continents.",
            },
            {
              title: "Project Manager",
              company: "Tech Dynamics LLC",
              duration: "2017 - 2020",
              description:
                "Managed multiple concurrent projects with budgets ranging from $500K to $1.5M. Developed comprehensive project plans and risk mitigation strategies. Improved project delivery timelines by 25% through process optimization.",
            },
          ],
          education: [
            {
              degree: "Master of Business Administration",
              field: "Project Management",
              institution: "Northwestern University",
              year: "2015 - 2017",
            },
            {
              degree: "Bachelor of Science",
              field: "Business Administration",
              institution: "University of Illinois",
              year: "2011 - 2015",
            },
          ],
          certifications: [
            {
              name: "Project Management Professional (PMP)",
              organization: "Project Management Institute (PMI)",
              year: "Certified 2018",
              id: "987654",
            },
            {
              name: "Certified ScrumMaster (CSM)",
              organization: "Scrum Alliance",
              year: "2017",
              id: "",
            },
          ], // ADDED CERTIFICATION EXAMPLE DATA
          skills: [
            "Project Management",
            "Agile Methodologies",
            "Risk Management",
            "Stakeholder Communication",
            "Budget Management",
            "JIRA",
            "Scrum",
            "Team Leadership",
            "Strategic Planning",
            "Performance Metrics",
          ],
        },
        "student": {
          personal: {
            fullName: "Jessica Martinez",
            jobTitle: "Recent Graduate",
            email: "jessica.martinez@email.com",
            phone: "+1 (555) 234-5678",
            location: "Austin, TX",
            linkedin: "linkedin.com/in/jessicamartinez",
            website: "jessicamartinez-portfolio.com",
          },
          summary:
            "Motivated Computer Science graduate with strong academic background and hands-on project experience. Seeking to apply programming skills and recent knowledge in software development. Proven ability to learn quickly and work effectively in team environments. Dean's List honoree with 3.8 GPA.",
          experience: [
            {
              title: "Software Development Intern",
              company: "Tech Startup Inc.",
              duration: "Summer 2023",
              description:
                "Assisted in developing web applications using React and Node.js. Participated in agile development processes and code reviews. Collaborated with senior developers to fix bugs and implement new features.",
            },
            {
              title: "Research Assistant",
              company: "University Computer Science Department",
              duration: "2022 - 2023",
              description:
                "Conducted research on machine learning algorithms. Assisted professor in data collection and analysis. Co-authored research paper presented at undergraduate research symposium.",
            },
          ],
          education: [
            {
              degree: "Bachelor of Science",
              field: "Computer Science",
              institution: "University of Texas at Austin",
              year: "2020 - 2024",
              gpa: "3.8/4.0",
            },
          ],
          certifications: [], // ADDED CERTIFICATION EXAMPLE DATA (Empty)
          skills: [
            "Java",
            "Python",
            "JavaScript",
            "React",
            "SQL",
            "Git",
            "Data Structures",
            "Algorithms",
            "Agile Methodology",
            "Team Collaboration",
          ],
        },
      };
      // ATS keywords for different industries
      const atsKeywords = {
        software: [
          "developed",
          "engineered",
          "implemented",
          "optimized",
          "architected",
          "deployed",
          "debugged",
          "automated",
        ],
        management: [
          "managed",
          "led",
          "directed",
          "oversaw",
          "coordinated",
          "supervised",
          "facilitated",
          "orchestrated",
        ],
        marketing: [
          "increased",
          "generated",
          "grew",
          "expanded",
          "launched",
          "optimized",
          "analyzed",
          "strategized",
        ],
        general: [
          "achieved",
          "improved",
          "reduced",
          "saved",
          "created",
          "transformed",
          "innovated",
          "streamlined",
        ],
      };
      // Initialize
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
          document.getElementById("loadingScreen").style.display = "none";
        }, 2000); // Initialize event listeners
        initializeEventListeners();
        updateProgress();
        calculateATSScore();
        loadFullResume(); // Load any previously saved data
      });
      // Enhanced Event Listeners with debouncing
      function initializeEventListeners() {
        const debouncedUpdate = debounce(updatePreview, 300);
        // Personal Information
        document
          .getElementById("fullName")
          .addEventListener("input", debouncedUpdate);
        document
          .getElementById("jobTitle")
          .addEventListener("input", debouncedUpdate);
        document
          .getElementById("email")
          .addEventListener("input", debouncedUpdate);
        document
          .getElementById("phone")
          .addEventListener("input", debouncedUpdate);
        document
          .getElementById("location")
          .addEventListener("input", debouncedUpdate);
        document
          .getElementById("linkedin")
          .addEventListener("input", debouncedUpdate);
        document
          .getElementById("website")
          .addEventListener("input", debouncedUpdate);
        // Summary
        document
          .getElementById("summary")
          .addEventListener("input", debouncedUpdate);
        // Skills
        document
          .getElementById("skillInput")
          .addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
              addSkill();
            }
          });
        // Auto-save to localStorage
        setInterval(autoSave, 30000);
      }
      // Debounce function for performance
      function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      }
      // Load full resume data from localStorage
      function loadFullResume() {
        const savedData = localStorage.getItem("resumeData");
        if (savedData) {
          try {
            const data = JSON.parse(savedData);
            // Load personal information
            if (data.personal) {
              Object.keys(data.personal).forEach((key) => {
                const element = document.getElementById(key);
                if (element) element.value = data.personal[key] || "";
              });
            }
            // Load summary
            if (data.summary) {
              document.getElementById("summary").value = data.summary;
            }
            // Load experience
            if (data.experience && data.experience.length > 0) {
              const container = document.getElementById("experienceContainer");
              container.innerHTML = "";
              data.experience.forEach((exp, index) => {
                if (index > 0) addExperience();
                const item = container.children[index];
                if (item) {
                  item.querySelector(".exp-title").value = exp.title || "";
                  item.querySelector(".exp-company").value = exp.company || "";
                  item.querySelector(".exp-duration").value = exp.duration || "";
                  item.querySelector(".exp-description").value =
                    exp.description || "";
                }
              });
            }
            // Load education
            if (data.education && data.education.length > 0) {
              const container = document.getElementById("educationContainer");
              container.innerHTML = "";
              data.education.forEach((edu, index) => {
                if (index > 0) addEducation();
                const item = container.children[index];
                if (item) {
                  item.querySelector(".edu-degree").value = edu.degree || "";
                  item.querySelector(".edu-field").value = edu.field || "";
                  item.querySelector(".edu-institution").value =
                    edu.institution || "";
                  item.querySelector(".edu-year").value = edu.year || "";
                }
              });
            }

            // Load certifications (NEW BLOCK)
            if (data.certifications && data.certifications.length > 0) {
              const container = document.getElementById("certificationContainer");
              container.innerHTML = ""; // Clear all items, including the default one from HTML
              data.certifications.forEach((cert) => {
                // Add a new item for every certificate
                addCertification();
                
                // Populate fields for the new item (always the last child after calling addCertification)
                const newItem = container.lastElementChild;
                if (newItem) {
                  newItem.querySelector(".cert-name").value = cert.name || "";
                  newItem.querySelector(".cert-organization").value = cert.organization || "";
                  newItem.querySelector(".cert-year").value = cert.year || "";
                  newItem.querySelector(".cert-id").value = cert.id || "";
                }
              });
            }
            // Ensure there is always one input field visible if the loaded data was empty
            const certContainer = document.getElementById("certificationContainer");
            if (certContainer.children.length === 0) {
              addCertification();
            }
            // END NEW BLOCK

            // Load skills
            if (data.skills && data.skills.length > 0) {
              data.skills.forEach((skill) => addSkill(skill, false)); // The addSkill function handles the internal storage
            }
          } catch (e) {
            console.error("Error loading resume data:", e);
            showToast("Error loading saved data. Starting fresh.", "error");
          }
        }
        updatePreview();
        updateProgress();
        showToast("Resume data loaded successfully!", "success");
      }
      // Save full resume data to localStorage
      function saveResume() {
        // Collect Personal Info
        const personal = {
          fullName: document.getElementById("fullName").value.trim(),
          jobTitle: document.getElementById("jobTitle").value.trim(),
          email: document.getElementById("email").value.trim(),
          phone: document.getElementById("phone").value.trim(),
          location: document.getElementById("location").value.trim(),
          linkedin: document.getElementById("linkedin").value.trim(),
          website: document.getElementById("website").value.trim(),
        };
        // Collect Experience
        const experienceData = [];
        document.querySelectorAll(".experience-item").forEach((item) => {
          const title = item.querySelector(".exp-title").value.trim();
          const company = item.querySelector(".exp-company").value.trim();
          const duration = item.querySelector(".exp-duration").value.trim();
          const description = item.querySelector(".exp-description").value.trim();
          if (title || company || duration || description) {
            experienceData.push({ title, company, duration, description });
          }
        });
        // Collect Education
        const educationData = [];
        document.querySelectorAll(".education-item").forEach((item) => {
          const degree = item.querySelector(".edu-degree").value.trim();
          const field = item.querySelector(".edu-field").value.trim();
          const institution = item.querySelector(".edu-institution").value.trim();
          const year = item.querySelector(".edu-year").value.trim();
          if (degree || field || institution || year) {
            educationData.push({ degree, field, institution, year });
          }
        });

        // Collect Certifications (NEW BLOCK)
        const certificationData = [];
        document.querySelectorAll(".certification-item").forEach((item) => {
          const name = item.querySelector(".cert-name")?.value.trim() || "";
          const organization = item.querySelector(".cert-organization")?.value.trim() || "";
          const year = item.querySelector(".cert-year")?.value.trim() || "";
          const id = item.querySelector(".cert-id")?.value.trim() || "";
          if (name || organization || year || id) {
            certificationData.push({ name, organization, year, id });
          }
        });
        // END NEW BLOCK

        // Get Skills (stored globally by addSkill/removeSkill)
        const currentSkills = Array.from(
          document.querySelectorAll(".skill-pill span")
        ).map((el) => el.textContent.trim());
        // Resume Data Object
        const data = {
          personal,
          summary: document.getElementById("summary").value.trim(),
          experience: experienceData,
          education: educationData,
          certifications: certificationData, // ADDED
          skills: currentSkills,
          template: document
            .getElementById("resumePreview")
            .className.replace("preview-section ", ""),
        };
        localStorage.setItem("resumeData", JSON.stringify(data));
        return data;
      }
      // Auto-save function
      function autoSave() {
        const data = saveResume();
        if (data.personal.fullName || data.summary) {
          localStorage.setItem("resumeAutoSave", JSON.stringify(data));
          console.log("Auto-saved resume data.");
        }
      }
      // Export functions
      async function exportPDF() {
        const exportBtn = document.querySelector('button[onclick="exportPDF()"]');
        exportBtn.classList.add("btn-loading");
        const resumeElement = document.getElementById("resumePreview");
        try {
          const canvas = await html2canvas(resumeElement, { scale: 2 });
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF("p", "mm", "a4");
          const width = pdf.internal.pageSize.getWidth();
          const height = pdf.internal.pageSize.getHeight();
          const imgHeight = (canvas.height * width) / canvas.width;
          let position = 0;
          let remaining = imgHeight;
          while (remaining > 0) {
            pdf.addImage(imgData, "JPEG", 0, position, width, imgHeight);
            remaining -= height;
            position -= height;
            if (remaining > 0) {
              pdf.addPage();
            }
          }
          pdf.save(
            `Resume_${
              document.getElementById("fullName").value || "Draft"
            }.pdf`
          );
          showToast("PDF Exported Successfully!", "success");
        } catch (error) {
          console.error("Error exporting PDF:", error);
          showToast("Error exporting PDF. Please try again.", "error");
        } finally {
          exportBtn.classList.remove("btn-loading");
        }
      }
      // Cloud Save Placeholder
      function saveToCloud() {
        const data = saveResume();
        console.log("Simulating cloud save:", data);
        showToast("Saved to Cloud (Local Storage Used for Demo)", "success");
      }
      // Experience Management
      function addExperience() {
        const container = document.getElementById("experienceContainer");
        const newItem = document.createElement("div");
        newItem.className = "experience-item";
        newItem.innerHTML = `
          <div class="form-grid">
            <div class="form-group">
              <label>Job Title</label>
              <input type="text" class="exp-title" placeholder="Software Engineer" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Company</label>
              <input type="text" class="exp-company" placeholder="Tech Corp" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Duration</label>
              <input type="text" class="exp-duration" placeholder="Jan 2020 - Present" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="exp-description" placeholder="Key responsibilities and achievements..." rows="3" oninput="updatePreview()"></textarea>
            </div>
          </div>
          <button class="add-btn" onclick="removeExperience(this)" style="background: var(--error-color); margin-top: 10px;">
            <i class="fas fa-trash"></i> Remove
          </button>
          <hr style="margin-top: 15px; border-color: var(--bg-tertiary);" />
        `;
        container.appendChild(newItem);
        updateProgress();
      }
      function removeExperience(button) {
        const item = button.closest(".experience-item");
        item.remove();
        updatePreview();
        updateProgress();
      }
      // Education Management
      function addEducation() {
        const container = document.getElementById("educationContainer");
        const newItem = document.createElement("div");
        newItem.className = "education-item";
        newItem.innerHTML = `
          <div class="form-grid">
            <div class="form-group">
              <label>Degree</label>
              <input type="text" class="edu-degree" placeholder="Bachelor of Science" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Field of Study</label>
              <input type="text" class="edu-field" placeholder="Computer Science" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Institution</label>
              <input type="text" class="edu-institution" placeholder="University Name" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Year</label>
              <input type="text" class="edu-year" placeholder="2016 - 2020" oninput="updatePreview()" />
            </div>
          </div>
          <button class="add-btn" onclick="removeEducation(this)" style="background: var(--error-color); margin-top: 10px;">
            <i class="fas fa-trash"></i> Remove
          </button>
          <hr style="margin-top: 15px; border-color: var(--bg-tertiary);" />
        `;
        container.appendChild(newItem);
        updateProgress();
      }
      function removeEducation(button) {
        const item = button.closest(".education-item");
        item.remove();
        updatePreview();
        updateProgress();
      }

      // Certifications Management (NEW FUNCTIONS)
      function addCertification() {
        const container = document.getElementById("certificationContainer");
        const newItem = document.createElement("div");
        newItem.className = "certification-item";
        newItem.innerHTML = `
          <div class="form-grid">
            <div class="form-group">
              <label>Certification Name</label>
              <input type="text" class="cert-name" placeholder="PMP, AWS Certified Solutions Architect, etc." oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Issuing Organization</label>
              <input type="text" class="cert-organization" placeholder="Project Management Institute, Amazon Web Services" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>Year / Date</label>
              <input type="text" class="cert-year" placeholder="2023 or Jan 2023 - Jan 2025" oninput="updatePreview()" />
            </div>
            <div class="form-group">
              <label>License/Credential ID (Optional)</label>
              <input type="text" class="cert-id" placeholder="ABC12345" oninput="updatePreview()" />
            </div>
          </div>
          <button class="add-btn" onclick="removeCertification(this)" style="background: var(--error-color); margin-top: 10px;">
            <i class="fas fa-trash"></i> Remove
          </button>
          <hr style="margin-top: 15px; border-color: var(--bg-tertiary);" />
        `;
        container.appendChild(newItem);
        updateProgress();
      }

      function removeCertification(button) {
        const item = button.closest(".certification-item");
        item.remove();
        updatePreview();
        updateProgress();
      }
      // END NEW FUNCTIONS

      // Skills Management
      let currentSkills = [];
      function addSkill(skillText = null, update = true) {
        const input = document.getElementById("skillInput");
        const skill = (skillText || input.value).trim();
        if (skill && !currentSkills.includes(skill)) {
          currentSkills.push(skill);
          if (input) input.value = "";
          renderSkills();
          if (update) updatePreview();
        }
      }
      function removeSkill(skill) {
        currentSkills = currentSkills.filter((s) => s !== skill);
        renderSkills();
        updatePreview();
      }
      function renderSkills() {
        const container = document.getElementById("skillContainer");
        container.innerHTML = "";
        currentSkills.forEach((skill) => {
          const pill = document.createElement("div");
          pill.className = "skill-pill";
          pill.innerHTML = `<span>${skill}</span> <i class="fas fa-times" onclick="removeSkill('${skill}')"></i>`;
          container.appendChild(pill);
        });
        // Update skill suggestions based on count
        document.getElementById("skillSuggestions").style.display =
          currentSkills.length < 5 ? "block" : "none";
      }
      // Preview Update
      function updatePreview() {
        // Collect & Save Data (automatically saves to local storage)
        const data = saveResume();
        // Personal Info
        document.getElementById("previewName").textContent =
          data.personal.fullName || "Your Name";
        document.getElementById("previewTitle").textContent =
          data.personal.jobTitle || "Your Job Title";
        const contactHtml = `
          ${
            data.personal.email
              ? `<span><i class="fas fa-envelope"></i> ${data.personal.email}</span>`
              : ""
          }
          ${
            data.personal.phone
              ? `<span><i class="fas fa-phone"></i> ${data.personal.phone}</span>`
              : ""
          }
          ${
            data.personal.location
              ? `<span><i class="fas fa-map-marker-alt"></i> ${data.personal.location}</span>`
              : ""
          }
          ${
            data.personal.linkedin
              ? `<span><i class="fab fa-linkedin"></i> <a href="${data.personal.linkedin}" target="_blank">LinkedIn</a></span>`
              : ""
          }
          ${
            data.personal.website
              ? `<span><i class="fas fa-globe"></i> <a href="${data.personal.website}" target="_blank">Portfolio</a></span>`
              : ""
          }
        `;
        document.getElementById("previewContact").innerHTML = contactHtml;
        // Summary
        const summaryEl = document.getElementById("previewSummary");
        if (data.summary) {
          summaryEl.style.display = "block";
          document.getElementById("previewSummaryText").textContent =
            data.summary;
          // ATS Suggestion for Summary
          const isStrong = atsKeywords.general.some((k) =>
            data.summary.toLowerCase().includes(k)
          );
          document.getElementById("summarySuggestions").style.display = isStrong
            ? "none"
            : "block";
        } else {
          summaryEl.style.display = "none";
          document.getElementById("summarySuggestions").style.display = "block";
        }
        // Render Experience
        const previewExperienceSection =
          document.getElementById("previewExperience");
        const previewExperienceList = document.getElementById(
          "previewExperienceList"
        );
        previewExperienceList.innerHTML = "";
        if (data.experience.length > 0) {
          previewExperienceSection.style.display = "block";
          data.experience.forEach((exp) => {
            const expEl = document.createElement("div");
            expEl.className = "preview-job-item";
            expEl.innerHTML = `
              <div class="preview-job-header" style="display: flex; justify-content: space-between; font-size: 0.9em; margin-bottom: 0.25rem;">
                <div class="preview-job-title" style="font-weight: 600;">${exp.title}</div>
                <div class="preview-job-duration" style="color: var(--text-secondary);">${exp.duration}</div>
              </div>
              <div class="preview-job-company" style="font-style: italic; font-size: 0.85em; margin-bottom: 0.5rem;">${exp.company}</div>
              <ul style="margin-left: 1.5rem; font-size: 0.85em;">
                ${exp.description
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line) => `<li>${line.trim()}</li>`)
                  .join("")}
              </ul>
              <br>
            `;
            previewExperienceList.appendChild(expEl);
          });
        } else {
          previewExperienceSection.style.display = "none";
        }
        // Render Education
        const previewEducationSection =
          document.getElementById("previewEducation");
        const previewEducationList = document.getElementById(
          "previewEducationList"
        );
        previewEducationList.innerHTML = "";
        if (data.education.length > 0) {
          previewEducationSection.style.display = "block";
          data.education.forEach((edu) => {
            const eduEl = document.createElement("div");
            eduEl.className = "preview-education-item";
            eduEl.innerHTML = `
              <div class="preview-job-title" style="font-weight: 600;">${edu.degree} - ${edu.field}</div>
              <div class="preview-job-company">${edu.institution} | ${edu.year}</div>
              <br>
            `;
            previewEducationList.appendChild(eduEl);
          });
        } else {
          previewEducationSection.style.display = "none";
        }

        // Render Certifications (NEW BLOCK)
        const previewCertificationsSection = document.getElementById("previewCertifications");
        const previewCertificationList = document.getElementById("previewCertificationList");
        previewCertificationList.innerHTML = "";

        if (data.certifications.length > 0) {
          previewCertificationsSection.style.display = "block";
          data.certifications.forEach((cert) => {
            const certEl = document.createElement("div");
            certEl.className = "preview-education-item"; // Reuse education styling for consistent look
            
            let details = `${cert.organization}${cert.organization && cert.year ? ' | ' : ''}${cert.year}`;
            
            certEl.innerHTML = `
              <div class="preview-job-title" style="font-weight: 600;">${cert.name}</div>
              <div class="preview-job-company">${details}</div>
              ${cert.id ? `<div class="preview-job-duration" style="font-size: 0.8em; color: var(--text-secondary);">License/ID: ${cert.id}</div>` : ''}
              <br>
            `;
            previewCertificationList.appendChild(certEl);
          });
        } else {
          previewCertificationsSection.style.display = "none";
        }
        // END NEW BLOCK

        // Render Skills
        const previewSkillsSection = document.getElementById("previewSkills");
        const previewSkillsList = document.getElementById("previewSkillsList");
        previewSkillsList.innerHTML = "";
        if (data.skills.length > 0) {
          previewSkillsSection.style.display = "block";
          previewSkillsList.innerHTML = `<p style="font-size: 0.85em;">${data.skills.join(
            " | "
          )}</p>`;
        } else {
          previewSkillsSection.style.display = "none";
        }
        calculateATSScore();
      }
      // Modals
      function showTemplates() {
        document.getElementById("templateModal").classList.add("active");
      }
      function showExamples() {
        document.getElementById("examplesModal").classList.add("active");
      }
      function closeModal(id) {
        document.getElementById(id).classList.remove("active");
      }
      // Template Selection
      function selectTemplate(templateName) {
        const preview = document.getElementById("resumePreview");
        // Clear all template classes
        preview.className = "preview-section";
        // Add selected template class
        preview.classList.add(`template-${templateName}`);
        // Update card selected status
        document.querySelectorAll(".template-card").forEach((card) => {
          card.classList.remove("selected");
          if (card.onclick.toString().includes(`'${templateName}'`)) {
            card.classList.add("selected");
          }
        });
        closeModal("templateModal");
        // Save template choice
        const data = saveResume();
        data.template = `template-${templateName}`;
        localStorage.setItem("resumeData", JSON.stringify(data));
        showToast(`Template changed to ${templateName}!`, "info");
      }
      // Example Loading
      function loadExample(exampleName) {
        const data = resumeExamples[exampleName];
        if (!data) return;
        // 1. Personal Info
        Object.keys(data.personal).forEach((key) => {
          const element = document.getElementById(key);
          if (element) element.value = data.personal[key] || "";
        });
        // 2. Summary
        document.getElementById("summary").value = data.summary;
        // 3. Experience
        const expContainer = document.getElementById("experienceContainer");
        expContainer.innerHTML = "";
        data.experience.forEach((exp, index) => {
          addExperience(); // Adds the new item
          const item = expContainer.children[index];
          if (item) {
            item.querySelector(".exp-title").value = exp.title || "";
            item.querySelector(".exp-company").value = exp.company || "";
            item.querySelector(".exp-duration").value = exp.duration || "";
            item.querySelector(".exp-description").value = exp.description || "";
          }
        });
        // 4. Education
        const eduContainer = document.getElementById("educationContainer");
        eduContainer.innerHTML = "";
        data.education.forEach((edu, index) => {
          addEducation(); // Adds the new item
          const item = eduContainer.children[index];
          if (item) {
            item.querySelector(".edu-degree").value = edu.degree || "";
            item.querySelector(".edu-field").value = edu.field || "";
            item.querySelector(".edu-institution").value = edu.institution || "";
            item.querySelector(".edu-year").value = edu.year || "";
          }
        });
        // 5. Certifications (NEW BLOCK)
        const certContainer = document.getElementById("certificationContainer");
        certContainer.innerHTML = "";
        if (data.certifications && data.certifications.length > 0) {
            data.certifications.forEach((cert) => {
                addCertification();
                const newItem = certContainer.lastElementChild;
                if (newItem) {
                    newItem.querySelector(".cert-name").value = cert.name || "";
                    newItem.querySelector(".cert-organization").value = cert.organization || "";
                    newItem.querySelector(".cert-year").value = cert.year || "";
                    newItem.querySelector(".cert-id").value = cert.id || "";
                }
            });
        }
        if (certContainer.children.length === 0) {
          addCertification(); // Ensure at least one blank one is there
        }
        // END NEW BLOCK
        // 6. Skills
        currentSkills = []; // Clear existing skills
        data.skills.forEach((skill) => addSkill(skill, false));
        renderSkills();
        closeModal("examplesModal");
        updatePreview();
        updateProgress();
        showToast(`Loaded ${exampleName} example resume.`, "info");
      }
      // ATS Score Logic
      function calculateATSScore() {
        const data = saveResume();
        let score = 0;
        let maxScore = 100;
        // 1. Personal Info Completion (20 points max)
        const personalFields = [
          "fullName",
          "jobTitle",
          "email",
          "phone",
          "location",
        ];
        const completedPersonal = personalFields.filter(
          (key) => data.personal[key]
        ).length;
        score += (completedPersonal / personalFields.length) * 20;
        // 2. Summary (20 points max)
        if (data.summary.length > 50) {
          score += 10;
        }
        const industry = getIndustryFromJobTitle(data.personal.jobTitle);
        const keywords = atsKeywords[industry] || atsKeywords.general;
        const summaryKeywordMatch = keywords.some((k) =>
          data.summary.toLowerCase().includes(k)
        );
        if (summaryKeywordMatch) {
          score += 10;
        }
        // 3. Experience (20 points max)
        if (data.experience.length >= 2) {
          score += 10;
        }
        const experienceHasDescription = data.experience.every(
          (exp) => exp.description.length > 20
        );
        if (experienceHasDescription) {
          score += 10;
        }
        // 4. Education (10 points max)
        if (data.education.length >= 1) {
          score += 10;
        }
        // 5. Skills (20 points max)
        if (data.skills.length >= 8) {
          score += 15;
        } else if (data.skills.length >= 5) {
          score += 10;
        }
        // 6. Certifications (10 points max) (UPDATED SCORING)
        if (data.certifications && data.certifications.length > 0) {
          score += 10;
        }

        // Final score calculation
        const finalScore = Math.min(100, Math.round(score));
        const scoreElement = document.getElementById("atsScore");
        scoreElement.textContent = `${finalScore}%`;
        // Color gradient for score
        if (finalScore < 50) {
          scoreElement.style.background =
            "linear-gradient(135deg, var(--error-color), var(--warning-color))";
        } else if (finalScore < 80) {
          scoreElement.style.background =
            "linear-gradient(135deg, var(--warning-color), var(--primary-color))";
        } else {
          scoreElement.style.background =
            "linear-gradient(135deg, var(--success-color), var(--primary-color))";
        }
        scoreElement.style["-webkit-background-clip"] = "text";
        scoreElement.style["-webkit-text-fill-color"] = "transparent";
      }
      function getIndustryFromJobTitle(title) {
        title = title.toLowerCase();
        if (
          title.includes("software") ||
          title.includes("developer") ||
          title.includes("engineer") ||
          title.includes("tech")
        )
          return "software";
        if (
          title.includes("manager") ||
          title.includes("lead") ||
          title.includes("director") ||
          title.includes("project")
        )
          return "management";
        if (
          title.includes("marketing") ||
          title.includes("sales") ||
          title.includes("pr")
        )
          return "marketing";
        return "general";
      }
      function showATSDetails() {
        showToast("ATS Score details are for demonstration purposes.", "info");
      }
      // Progress Bar
      function updateProgress() {
        const totalFields = 20; // Approx number of key fields
        const personal = document.querySelectorAll(
          "#fullName, #jobTitle, #email, #phone"
        ).length;
        const summary = document.getElementById("summary").value ? 1 : 0;
        const experience =
          document.querySelectorAll(".exp-title").length +
          document.querySelectorAll(".exp-company").length +
          document.querySelectorAll(".exp-description").length;
        const education =
          document.querySelectorAll(".edu-degree").length +
          document.querySelectorAll(".edu-institution").length;
        const certifications = document.querySelectorAll(".cert-name").length; // NEW FIELD
        const skills = currentSkills.length;
        const filledFields = personal + summary + experience + education + certifications + skills / 2;
        const progress = Math.min(100, Math.round((filledFields / totalFields) * 100));
        document.getElementById("progressFill").style.width = `${progress}%`;
      }
      // Toast Notifications
      function showToast(message, type = "info") {
        const container = document.getElementById("toastContainer");
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        let icon = "";
        if (type === "success") icon = '<i class="fas fa-check-circle"></i>';
        else if (type === "error") icon = '<i class="fas fa-exclamation-triangle"></i>';
        else if (type === "warning") icon = '<i class="fas fa-exclamation-circle"></i>';
        else icon = '<i class="fas fa-info-circle"></i>';
        toast.innerHTML = `${icon} <span>${message}</span>`;
        container.appendChild(toast);
        // Auto-remove after 5 seconds
        setTimeout(() => {
          toast.remove();
        }, 5000);
      }
      // Cover Letter Generation
      function generateCoverLetter() {
        document.getElementById("coverLetterModal").classList.add("active");
      }
      function generateCoverLetterContent() {
        const data = saveResume();
        const company =
          document.getElementById("companyName").value || "[Company Name]";
        const manager =
          document.getElementById("hiringManager").value || "[Hiring Manager]";
        const date = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const clContent = `
${date}

${manager}
Hiring Manager
${company}
[Company Address]

Dear ${manager},

I am writing to express my enthusiastic interest in the ${data.personal.jobTitle} position at ${company}, as advertised on [Platform]. With my ${data.experience.length}+ years of experience in ${data.skills[0] || "[Skill]"} and ${data.skills[1] || "[Skill]"}, coupled with a strong track record of success, I am confident I possess the skills and dedication to significantly contribute to your team.

In my most recent role as a ${data.experience[0]?.title || "[Job Title]"} at ${data.experience[0]?.company || "[Company]"}, I ${data.experience[0]?.description.split(".")[0].replace('-', '').trim() || "[Key Achievement]"} . My professional background is built upon a foundation of ${data.education[0]?.degree || "[Degree]"} from ${data.education[0]?.institution || "[Institution]"} and includes a focus on ${data.education[0]?.field || "[Field of Study]"}.

My resume further details my qualifications and achievements, including expertise in: ${data.skills.slice(0, 5).join(", ") + (data.skills.length > 5 ? ", and more." : ".") || "[List of Skills]"}

I am eager to discuss how my proactive approach and commitment to achieving measurable results can benefit ${company}. Thank you for your time and consideration.

Sincerely,

${data.personal.fullName}
${data.personal.phone} | ${data.personal.email}
        `.trim();
        document.getElementById("coverLetterContent").value = clContent;
        showToast("Cover Letter Draft Generated!", "success");
      }
      function exportCoverLetter() {
        const content = document.getElementById("coverLetterContent").value;
        const name =
          document.getElementById("fullName").value || "Draft_Cover_Letter";
        const filename = `${name}_Cover_Letter.txt`;
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Cover Letter Exported Successfully!", "success");
      }
      // Load saved data on page load
      window.addEventListener("load", () => {
        // Auto-save data is loaded in loadFullResume()
      });
      // Prevent accidental page refresh
      window.addEventListener("beforeunload", (e) => {
        const hasData =
          document.getElementById("fullName").value ||
          document.getElementById("summary").value;
        if (hasData) {
          e.preventDefault();
          e.returnValue = "";
        }
      });
      // Accessibility: Add keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "s") {
          e.preventDefault();
          saveToCloud();
        }
        if (e.ctrlKey && e.key === "p") {
          e.preventDefault();
          previewResume();
        }
      });
      // Initialize with a tooltip for first-time users
      setTimeout(() => {
        if (
          !localStorage.getItem("resumeData") &&
          !localStorage.getItem("resumeAutoSave")
        ) {
          showToast(
            "💡 Tip: Start by filling out your personal information, or load an example resume!",
            "info"
          );
        }
      }, 3000);