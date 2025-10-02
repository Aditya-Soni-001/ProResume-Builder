# 📄 ProResume Builder - ATS Optimized

## 🚀 Project Overview

**ProResume Builder** is a modern, single-page application designed to help users create visually appealing and **Applicant Tracking System (ATS)-friendly** resumes directly in their browser. Built entirely with plain HTML, CSS, and vanilla JavaScript, it provides a dynamic interface, real-time preview, and key optimization features without any backend requirements.

The builder emphasizes clarity, performance, and ensuring your resume content passes initial ATS screening by providing a live **ATS Score** feedback.

---

## ✨ Features

This tool includes a comprehensive set of features for efficient resume creation:

* **Live ATS Score Calculation:** Get real-time feedback on your resume's strength, keyword usage, and format for maximum ATS compatibility.
* **Multiple Templates:** Choose from a variety of professional designs (Classic, Modern, Creative, Minimal) to instantly change your resume's look.
* **PDF Export:** Easily export your finalized resume as a high-quality PDF document using `jspdf` and `html2canvas`.
* **Data Persistence:** Automatic saving of all form data to local storage, ensuring your progress is never lost between sessions.
* **Example Loading:** Quick-load pre-filled example resumes for various professions (e.g., Software Engineer, Project Manager) to kickstart your content creation.
* **Cover Letter Generator:** A dedicated modal to generate and export a simple cover letter template based on your resume data.
* **Certifications Section:** Dedicated area to list professional certifications and licenses for enhanced credibility.
* **Fully Responsive Design:** Optimized for desktop, tablet, and mobile viewing, as well as printing.

---

## 🛠️ Installation and Setup

Since **ProResume Builder** is a self-contained single-page HTML file, no complex installation or web server is required.

1.  **Download the File:** Save the `deepseek.html` file (or the updated file you are using) to your local machine.
2.  **Open in Browser:** Double-click the file to open it directly in any modern web browser (Chrome, Firefox, Edge, Safari).
3.  **Start Building:** The application will load immediately, ready for you to input your professional data.

---

## 🖥️ Technologies Used

The project relies on external Content Delivery Networks (CDNs) for libraries and icons, keeping the core file simple and portable.

* **HTML5 / CSS3 / JavaScript (Vanilla):** Core structure and logic.
* **Font Awesome:** Provides all icons used in the form, navigation, and preview.
* **Inter, Playfair Display, Space Mono, Roboto:** A selection of professional fonts imported via Google Fonts.
* **`jspdf` & `html2canvas`:** Used in tandem to reliably render the HTML resume preview as a downloadable PDF file.
* **SVG Data URI Favicon:** Used for a high-performance, vectorized favicon.

---

## 📝 Usage

### 1. Data Entry
Fill out the sections: Personal Information, Professional Summary, Work Experience, Education, Certifications, and Skills.

### 2. Skills and Experience
* Use the input field to add skills one by one (press **Enter** to add).
* Use the **`+ Add`** buttons to create new entries for experience, education, and certifications.

### 3. Real-Time Feedback
Monitor the **ATS Score** bubble (bottom left) and the **progress bar** (top) to guide you on content completeness and optimization.

### 4. Customization and Export
* Click the **Template** (palette icon) FAB to switch between different resume layouts.
* Click the **Export** button in the navigation bar to download your final resume as a PDF.

---

## 🌟 Future Enhancements

* **Advanced ATS Keyword Matching:** Allow users to paste a job description for highly targeted keyword comparison.
* **Custom Color Schemes:** Ability to select and save custom theme colors.
* **Drag-and-Drop Section Ordering:** Give users control over the sequence of sections (e.g., Skills before Experience).