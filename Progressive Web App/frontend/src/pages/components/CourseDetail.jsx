import React from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick"; // npm install react-slick slick-carousel
import { FaFilePdf, FaVideo, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CourseDetail.css";

// ✅ Example course content data
const courseContents = {
  1: {
    concepts: [
      <ul>
        <li>
          <a href="#module1">🧩 Module 1: Introduction to Web Development</a>
        </li>
        <li>
          <a href="#mini-project1">💻 Mini Project: “Hello World” Web Page</a>
        </li>
        <li>
          <a href="#module2">🧱 Module 2: HTML5 – The Structure of the Web</a>
        </li>
        <li>
          <a href="#project1">🧠 Project: Personal Portfolio Page</a>
        </li>
        <li>
          <a href="#module3">🎨 Module 3: CSS3 – Styling and Layouts</a>
        </li>
        <li>
          <a href="#project2">🌈 Project: Responsive Landing Page</a>
        </li>
        <li>
          <a href="#module4">
            ⚙️ Module 4: JavaScript (ES6+) – Programming for the Web
          </a>
        </li>
        <li>
          <a href="#project3">
            ⚡ Project: Interactive To-Do List / Weather App
          </a>
        </li>
        <li>
          <a href="#module5">🧭 Module 5: Git, GitHub & Version Control</a>
        </li>
        <li>
          <a href="#project4">🌍 Project: Host your Portfolio on GitHub</a>
        </li>
        <li>
          <a href="#module6">
            ⚛️ Module 6: React.js – Modern Frontend Development
          </a>
        </li>
        <li>
          <a href="#project5">🧠 Project: Course Listing App / Blog UI</a>
        </li>
        <li>
          <a href="#module7">
            🧰 Module 7: Backend Development with Node.js & Express
          </a>
        </li>
        <li>
          <a href="#project6">🗂️ Project: REST API for Course Management</a>
        </li>
        <li>
          <a href="#module8">🗄️ Module 8: Databases with MongoDB</a>
        </li>
        <li>
          <a href="#project7">📊 Project: Course Enrollment Database</a>
        </li>
        <li>
          <a href="#module9">🔐 Module 9: Authentication & Security</a>
        </li>
        <li>
          <a href="#project8">🔒 Project: Secure User Authentication System</a>
        </li>
        <li>
          <a href="#module10">🚀 Module 10: Deployment & DevOps Basics</a>
        </li>
        <li>
          <a href="#project9">🌐 Project: Deploy Full Stack MERN App</a>
        </li>
        <li>
          <a href="#module11">💡 Module 11: Advanced Topics (Optional)</a>
        </li>
        <li>
          <a href="#module12">
            🎓 Module 12: Final Project & Career Preparation
          </a>
        </li>
        <li>
          <a href="#final-project">
            🏁 Final Project: Full Stack MERN Application
          </a>
        </li>
      </ul>,
    ],

    pdfs: [
      { title: "HTML & CSS Notes", url: "/pdfs/html-css-notes.pdf" },
      { title: "React Cheatsheet", url: "/pdfs/react-cheatsheet.pdf" },
    ],
    videos: [
      {
        title: "Intro to Web Development",
        url: "https://www.youtube.com/embed/Q33KBiDriJY",
      },
      {
        title: "Learn React Basics",
        url: "https://www.youtube.com/embed/bMknfKXIFA8",
      },
    ],
  },
  // ✅ You can add content for other courses here (id: 2, 3, etc.)
};

const CourseDetail = () => {
  const { id } = useParams();
  const content = courseContents[id];

  if (!content) {
    return <h2 className="no-course">Course content not available.</h2>;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // tablet/mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="course-detail">
      <Link to="/" className="back-btn">
        <FaArrowLeft /> Back to Courses
      </Link>

      <h1 className="course-title">Course Content</h1>

      <div className="course-section">
        {/* <h2>📘 Key Concepts</h2> */}
        <h2>🎯 Complete Web Development Bootcamp – Course Content</h2>
        <ul>
          {content.concepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="module" id="module1">
          🧩 Module 1: Introduction to Web Development
        </h1>
        <h2 className="concept">
          <ol>
            <li>What is Web Development?</li>
          </ol>
        </h2>
        <p className="web">
          Web Development is the process of building and maintaining websites or
          web applications.
        </p>
        <h3>1. Types of Web Development :-</h3>
        <h4>a. Frontend Development (Client-Side)</h4>
        <ul>
          <li>Deals with what users see and interact with on their browser.</li>
          <li>Technologies: HTML, CSS, JavaScript, React, Angular, Vue</li>
          <li>Example: Buttons, forms, sliders, animations on a website</li>
        </ul>
        <h4>b. Backend Development (Server-Side)</h4>
        <ul>
          <li>Manages the data, server, and application logic.</li>
          <li>
            Technologies: Node.js, Express, Python (Django/Flask), PHP, Ruby on
            Rails
          </li>
          <li>
            Example: Handling user login, storing data in a database, processing
            orders
          </li>
        </ul>
        <h4>c. Full Stack Development</h4>
        <ul>
          <li>Combines frontend + backend skills.</li>
          <li>
            A full-stack developer can build an entire application from start to
            finish.
          </li>
        </ul>
        <h3>2. Key Components of Web Development</h3>
        <ul>
          <li>
            HTML (HyperText Markup Language): Structures the content of web
            pages
          </li>
          <li>
            CSS (Cascading Style Sheets): Styles the content (colors, layout,
            fonts)
          </li>
          <li>
            JavaScript: Makes the website interactive (animations, buttons, API
            calls){" "}
          </li>
          <li>Databases: Store and manage data (MongoDB, MySQL, PostgreSQL)</li>
          <li>
            Servers: Handle requests and serve web pages (Node.js, Apache)
          </li>
        </ul>
        <h3>3. Web Development Workflow</h3>
        <ul>
          <li>Planning: Define purpose, target audience, features</li>
          <li>Design: Create UI/UX layouts, wireframes, prototypes</li>
          <li>Development: Write frontend and backend code</li>
          <li>Testing: Check functionality, compatibility, performance</li>
          <li>Deployment: Host the website or application online</li>
          <li>Maintenance: Update content, fix bugs, add new features</li>
        </ul>
        <h3>4. Why Web Development is Important</h3>
        <ul>
          <li>Almost every business needs a web presence today.</li>
          <li>
            Enables interactive applications like social media, e-commerce, and
            online learning.
          </li>
          <li>High demand for skilled developers worldwide.</li>
        </ul>
        <h2 className="concept">
          2. Internet, Browsers, and Servers Explained
        </h2>
        <h3>1. Internet</h3>
        <ul>
          <li>
            The global network that connects millions of computers and devices
            worldwide.
          </li>
          <li>Allows computers to communicate and share data.</li>
          <li>Think of it as a huge highway system for data.</li>
        </ul>
        <h3>2. Browser</h3>
        <ul>
          <li>
            A software application that lets you access websites on the
            internet.
          </li>
          <li>Examples: Chrome, Firefox, Edge, Safari</li>
          <li>
            The browser requests data from servers and displays it in a
            user-friendly way.
          </li>
          <li>
            Example: When you type www.google.com, the browser fetches Google’s
            website from a server and shows it to you.
          </li>
        </ul>
        <h3>3. Server</h3>
        <ul>
          <li>A powerful computer that stores websites, files, and data.</li>
          <li>
            Responds to requests from browsers (client-side) by sending back the
            requested information.
          </li>
          <li>
            Example: When you click a link, your browser asks the server for the
            page, and the server sends it back.
          </li>
        </ul>
        <h2 className="concept">3. Client–Server Architecture</h2>
        <p>
          <strong>Client–Server Architecture</strong> is a model where:
        </p>
        <ul>
          <li>Client: Requests data or services (e.g., your browser).</li>
          <li>
            Responds to requests from browsers (client-side) by sending back the
            requested information.
          </li>
          <li>
            Example: When you click a link, your browser asks the server for the
            page, and the server sends it back.
          </li>
        </ul>
        <h2 className="concept">4. Frontend vs Backend vs Full Stack</h2>
        <h3>Frontend (Client-side)</h3>
        <ul>
          <li>What users see and interact with on a website.</li>
          <li>Tools/Technologies: HTML, CSS, JavaScript, React</li>
          <li>Example: Buttons, forms, sliders, menus</li>
        </ul>
        <h3>Backend (Server-side)</h3>
        <ul>
          <li>Manages the data, server, and application logic.</li>
          <li>Tools/Technologies: Node.js, Python, PHP, Databases</li>
          <li>Example: User login, storing data, processing payments</li>
        </ul>
        <h3>Full Stack</h3>
        <ul>
          <li>Combines Frontend + Backend skills.</li>
          <li>Can build a complete web application from start to finish.</li>
        </ul>
        <h2 className="concept">
          5. Tools Setup: VS Code, Git, Node.js, Chrome DevTools
        </h2>
        <h3>1. VS Code</h3>
        <ul>
          <li>A popular code editor for writing and managing code.</li>
          <li>
            Features: Syntax highlighting, extensions, debugging, Git
            integration.
          </li>
        </ul>
        <h3>2. Git</h3>
        <ul>
          <li>A version control system to track changes in your code.</li>
          <li>Helps collaborate with others and manage project history.</li>
        </ul>
        <h3>3. Node.js</h3>
        <ul>
          <li>A JavaScript runtime that lets you run JS on the server.</li>
          <li>Used for backend development and running development tools.</li>
        </ul>
        <h3>4. Chrome DevTools</h3>
        <ul>
          <li>
            Built-in browser tools in Chrome for debugging and inspecting
            websites.
          </li>
          <li>
            Features: Check HTML/CSS, debug JS, analyze performance, test
            responsive design.
          </li>
        </ul>
        <h2 className="concept">
          6. How Websites Work (HTTP, HTTPS, DNS, Hosting)
        </h2>
        <h3>1. HTTP / HTTPS</h3>
        <ul>
          <li>
            HTTP (HyperText Transfer Protocol): How browsers request and receive
            web pages from servers.
          </li>
          <li>
            HTTPS: Secure version of HTTP with encryption to protect data.
          </li>
        </ul>
        <h3>2. DNS (Domain Name System)</h3>
        <ul>
          <li>
            Translates a website name (like www.google.com) into the server’s IP
            address.
          </li>
          <li>Think of it as the internet’s phonebook.</li>
        </ul>
        <h3>3. Hosting</h3>
        <ul>
          <li>
            Storing your website files on a server so they can be accessed
            online.
          </li>
          <li>Example: Netlify, Vercel, AWS, or shared hosting services.</li>
        </ul>
        <br />
        <h2 id="mini-project1">💻 Mini Project: “Hello World” Web Page</h2>
        <pre>
          <code>
            &lt;!DOCTYPE html&gt;
            <br />
            <br />
            &lt;html&gt;
            <br />
            <br />
            &lt;head&gt;
            <br />
            <br />
            &lt;title&lt;Hello World&lt;/title&gt;
            <br />
            <br />
            &lt;/head&gt;
            <br />
            <br />
            &lt;body&gt;
            <br />
            <br />
            &lt;h1&lt;Hello, World!&lt;/h1&gt;
            <br />
            <br />
            &lt;/body&gt;
            <br />
            <br />
            &lt;/html&gt;
            <br />
            <br />
          </code>
        </pre>
        <h1 className="module" id="module2">
          🧱 Module 2: HTML5 – The Structure of the Web{" "}
        </h1>
        <h2 className="concept">
          1. HTML Basics: Tags, Elements, and Attributes
        </h2>
        <h3>🌐 What is HTML?</h3>
        <p>
          HTML (HyperText Markup Language) — यह वेब पेज बनाने की बेसिक भाषा है।{" "}
          <br />
          HTML web browser को बताता है कि पेज पर क्या दिखाना है और कैसे दिखाना
          है।
        </p>
        <h3>🏷️ 1️⃣ Tags</h3>
        <p>
          Tags वो keywords होते हैं जो ब्राउज़र को बताते हैं कि content क्या है।
        </p>
        <h3>हर HTML tag आम तौर पर इस तरह होता है:</h3>
        <code class="box">
          {" "}
          <pre> &lt;opening_tag&gt; Content &lt;/closing_tag&gt;</pre>
        </code>
        <h3>🔹 Example:</h3>
        <code class="box">
          {" "}
          <pre> &lt;p&gt; Hello World! &lt;/p&gt; </pre>
        </code>
        <pre>
          यहाँ &lt;p&gt; है opening tag, &lt;/p&gt; है closing tag और "Hello
          World!" है content।
        </pre>
        <h4>📋 Common HTML Tags:</h4>
        <table>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>

          <tr>
            <td>
              <code>&lt;h1&gt; to &lt;h6&gt;</code>
            </td>
            <td>Headings (बड़ा से छोटा heading)</td>
          </tr>

          <tr>
            <td>
              <code>&lt;p&gt;</code>
            </td>
            <td>Paragraph</td>
          </tr>

          <tr>
            <td>
              <code>&lt;a&gt;</code>
            </td>
            <td>Hyperlink (anchor tag)</td>
          </tr>

          <tr>
            <td>
              <code>&lt;img&gt;</code>
            </td>
            <td>Image</td>
          </tr>

          <tr>
            <td>
              <code>&lt;div&gt;</code>
            </td>
            <td>Division (layout बनाने के लिए)</td>
          </tr>

          <tr>
            <td>
              <code>&lt;span&gt;</code>
            </td>
            <td>Inline text container</td>
          </tr>

          <tr>
            <td>
              <code>&lt;br&gt;</code>
            </td>
            <td>Line break</td>
          </tr>

          <tr>
            <td>
              <code>&lt;hr&gt;</code>
            </td>
            <td>Horizontal line</td>
          </tr>

          <tr>
            <td>
              <code>&lt;ul&gt; / &lt;ol&gt; / &lt;li&gt;</code>
            </td>
            <td>Lists (unordered, ordered, list item)</td>
          </tr>
        </table>
        <h3>🧩 2️⃣ Elements</h3>
        <p>👉 Element = Opening tag + Content + Closing tag</p>
        <h3>🔹 Example:</h3>
        <code> &lt;p&gt;This is a paragraph.&lt;/p&gt;</code>
        <p>
          यह पूरा एक HTML <strong>element</strong> है।
        </p>
        <p>
          कुछ elements <strong>self-closing</strong> होते हैं (उनमें closing tag
          नहीं होता) —
        </p>
        <p>जैसे:</p>
        <code>
          {" "}
          &lt;img src="image.jpg" alt="Photo" /&gt; <br />
          &lt;br /&gt; <br />
          &lt;hr/ &gt; <br />
        </code>
        <h3>⚙️ 3️⃣ Attributes (एट्रिब्यूट)</h3>
        <p>
          Attributes HTML tags में <strong>extra information</strong> देने के
          लिए use होते हैं।
        </p>
        <h4>👉 Syntax:</h4>
        <div class="box">
          <code>&lt;tagname attribute="value"&gt;Content&lt;/tagname&gt;</code>
        </div>
        <h4>🔹 Example:</h4>
        <code>
          &lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;
        </code>{" "}
        <br /> <br />
        <div class="box">
          <p>
            <code>&lt;a&gt;</code> → Tag
          </p>
          <p>
            <code>href</code> → Attribute (कहाँ जाना है)
          </p>
          <p>
            <code>"https://www.google.com"</code> → Value
          </p>

          <h1>Common HTML Attributes</h1>

          <table>
            <tr>
              <th>Attribute</th>
              <th>Used In</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>
                <code>href</code>
              </td>
              <td>
                <code>&lt;a&gt;</code>
              </td>
              <td>URL of the link</td>
            </tr>

            <tr>
              <td>
                <code>src</code>
              </td>
              <td>
                <code>&lt;img&gt;</code>
              </td>
              <td>Image path</td>
            </tr>

            <tr>
              <td>
                <code>alt</code>
              </td>
              <td>
                <code>&lt;img&gt;</code>
              </td>
              <td>Alternate text</td>
            </tr>

            <tr>
              <td>
                <code>id</code>
              </td>
              <td>Any tag</td>
              <td>Unique identifier</td>
            </tr>

            <tr>
              <td>
                <code>class</code>
              </td>
              <td>Any tag</td>
              <td>CSS styling के लिए</td>
            </tr>

            <tr>
              <td>
                <code>style</code>
              </td>
              <td>Any tag</td>
              <td>Inline CSS</td>
            </tr>

            <tr>
              <td>
                <code>title</code>
              </td>
              <td>Any tag</td>
              <td>Tooltip text</td>
            </tr>
          </table>
        </div>
        <h2 className="concept">2. Links, Images, Lists, and Tables</h2>
        <h3>
          1️⃣ Links <code>(&lt;a&gt;)</code>tag
        </h3>
        <p>Purpose: Web pages को एक-दूसरे से जोड़ने के लिए।</p>
        <h4>Syntax:</h4>
        <code> &lt;a href="URL"&gt;Link Text&lt;/a&gt;</code>
        <h4>Example:</h4>
        <code>
          &lt;a href="https://www.google.com" target="_blank"&gt;Go to
          Google&lt;/a&gt;
        </code>
        <br />
        <br />
        <ul>
          <li>
            <code>href</code> → URL <br />
          </li>
        </ul>
        <ul>
          <li>
            <code>target="_blank"</code> → Link नए tab में खुले
          </li>
        </ul>
        <br />
        <h3>
          2️⃣ Images <code>(&lt;img&gt;)</code> tag
        </h3>
        <p>
          <strong>Purpose:</strong> Web page पर images दिखाने के लिए।
        </p>
        <h4>Syntax:</h4>
        <code>&lt;img src="image_url" alt="Description" width="300"&gt;</code>
        <h4>Example:</h4>
        <code>
          &lt;img src="https://via.placeholder.com/150" alt="Placeholder
          Image"&gt;
        </code>
        <ul>
          <li>
            <code>src</code> → Image path or URL
          </li>
          <li>
            <code>alt</code> → Alternate text जब image load न हो
          </li>
          <li>
            <code>width/height</code> → Image size
          </li>
        </ul>
        <br />
        <h3>
          3️⃣ Lists <code>(&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;)</code>
        </h3>
        <p>
          <strong>Purpose:</strong> Data को rows और columns में दिखाने के लिए।
        </p>
        <h4>Syntax:</h4>
        <code>
          &lt;table border="1"&gt;
          <br />
          &lt;tr&gt;
          <br />
          &lt;th&gt;Heading 1&lt;/th&gt;
          <br />
          &lt;th&gt;Heading 2&lt;/th&gt;
          <br />
          &lt;/tr&gt;
          <br />
          &lt;tr&gt;
          <br />
          &lt;td&gt;Row 1 Col 1&lt;/td&gt;
          <br />
          &lt;td&gt;Row 1 Col 2&lt;/td&gt;
          <br />
          &lt;tr&gt;
          <br />
          &lt;td&gt;Row 2 Col 1&lt;/td&gt;
          <br />
          &lt;td&gt;Row 2 Col 2&lt;/td&gt;
          <br />
          &lt;/tr&gt;
          <br />
          &lt;/table&gt;
          <br />
        </code>
        <br />
        <ul>
          <li>
            <code>&lt;table&gt;</code> → Table container
          </li>
          <li>
            <code>&lt;tr&gt;</code> → Table row
          </li>
          <li>
            <code>&lt;th&gt;</code> → Table heading (bold, centered)
          </li>

          <li>
            <code>&lt;td&gt;</code> → Table data (cell content)
          </li>
        </ul>
        <h2 className="concept">3. Forms and Input Validation</h2>
        <h3>💻 Forms and Input Validation in HTML</h3>
        <p>
          HTML में <strong>forms</strong> का इस्तेमाल किया जाता है ताकि{" "}
          <strong> user से data लिया जा सके,</strong> जैसे — login form, <br />{" "}
          registration form, feedback form आदि।
        </p>
        <hr />
        <h4>🧩 1️⃣ What is a Form?</h4>
        <p>
          {" "}
          <strong>Form</strong> = User input लेने के लिए HTML structure <br />
          HTML form <code>&lt;form&gt;</code> टैग से शुरू होता है।
        </p>
        <h5>📘 Basic Syntax</h5>
        <code>
          &lt;form action="submit_page.html" method="post"&gt;
          <br />
          &lt;!-- Form Inputs Here --&gt;
          <br />
          &lt;/form&gt;
          <br />
        </code>
        <table>
          <tr>
            <th>Attribute</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <code>action</code>
            </td>
            <td>बताता है data कहाँ भेजना है (server page का URL)</td>
          </tr>
          <tr>
            <td>
              <code>method</code>
            </td>
            <td>
              <b>GET</b> या <b>POST</b> — data भेजने का तरीका
            </td>
          </tr>
        </table>
        <h3>✍️ 2️⃣ Common Input Types</h3>
        <code>
          &lt;form&gt; <br />
          &lt;label for="name"&gt;&lt;/div&gt;Name:&lt;label/&gt;
          <br />
          &lt;input type="text" id="name" name="username" required&gt;
          <br />
          &lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="email"&gt;Email:&lt;/label&gt;
          <br />
          &lt;input type="email" id="email" name="email" required&gt;
          <br />
          &lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="password"&gt;Password:&lt;/&gt;
          <br />
          &lt;input type="password" id="password" name="password" minlength="6"
          required&gt;
          <br />
          &lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="age"&gt;Age:&lt;/&gt;
          <br />
          &lt;input type="number" id="age" name="age" min="1" max="100"&gt;
          <br />
          &lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="gender"&gt;Gender:&lt;/label&gt; &lt;select id="gender"
          name="gender"&gt; &lt;option value="male"&gt;Male&lt;/option&gt;
          &lt;option value="female"&gt;Female&lt;/option&gt; &lt;/select&gt;
          &lt;br&gt;&lt;br&gt;
          <br />
          &lt;label&gt; &lt;input type="checkbox" name="agree" required&gt; I
          agree to the terms
          <br />
          &lt;/label&gt;
          <br />
          &lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;&lt;input type="submit" value="Submit"&gt;
          <br />
          &lt;/form&gt;
          <br />
        </code>
        <h3>✅ 3️⃣ Form Input Validation (HTML5 Built-in)</h3>
        <p>
          HTML5 में कई attributes हैं जो <strong>input validation</strong> आसानी
          से कर देते हैं <br />
          (without JavaScript के)👇
        </p>
        <table>
          <tr>
            <th>Attribute</th>
            <th>Purpose</th>
          </tr>
          <tr>
            <td>
              <code>required</code>
            </td>
            <td>Field खाली नहीं छोड़ा जा सकता</td>
          </tr>
          <tr>
            <td>
              <code>min</code> / <code>max</code>
            </td>
            <td>Numeric values के limits</td>
          </tr>
          <tr>
            <td>
              <code>minlength</code> / <code>maxlength</code>
            </td>
            <td>Text length limits</td>
          </tr>
          <tr>
            <td>
              <code>pattern</code>
            </td>
            <td>Custom regex validation</td>
          </tr>
          <tr>
            <td>
              <code>type="email"</code>, <code>type="number"</code>, आदि
            </td>
            <td>Automatic format validation</td>
          </tr>
        </table>
        <h3>🎯 Example: With Validation</h3>
        <code>
          &lt;form&gt;
          <br />
          &lt;h2&gt;Registration Form&lt;/h2&gt;
          <br />
          <br />
          &lt;label for="username"&gt;Username:&lt;/label&gt;&lt;br&gt;
          <br />
          &lt;input type="text" id="username" name="username" required
          minlength="3"&gt;&lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;
          <br />
          &lt;input type="email" id="email" name="email"
          required&gt;&lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="password"&gt;Password:&lt;/label&gt;&lt;br&gt;
          <br />
          &lt;input type="password" id="password" name="password" required
          minlength="6"&gt;&lt;br&gt;&lt;br&gt;
          <br />
          <br />
          &lt;label for="phone"&gt;Phone:&lt;/label&gt;&lt;br&gt;
          <br />
          &lt;input type="tel" id="phone" name="phone" pattern="[0-9]{10}"
          placeholder="10-digit number" required&gt;&lt;br&gt;&lt;br&gt;
          <br />
          <br />
          <br />
          &lt;input type="submit" value="Register"&gt;
          <br />
          &lt;/form&gt;
          <br />
          <br />
        </code>
        <h4>🧠 How Validation Works</h4>
        <ul>
          <li>
            अगर user कोई required field खाली छोड़ देता है
            <br />
            👉 Browser खुद ही error message दिखाता है।
          </li>

          <li>
            अगर email गलत format में है <br />
            👉 Browser बताएगा "Please enter a valid email address".
          </li>

          <li>
            अगर password छोटा है <br />
            👉 Browser बोलेगा "Please lengthen this text to 6 characters or
            more".
          </li>
        </ul>
        <h4>🧠 Bonus: Custom Styling and Feedback</h4>
        <p>
          तुम CSS और JavaScript से validation को और सुंदर बना सकते हो <br />
          (उदाहरण — लाल border या custom error message)।
        </p>
        <pre>
          <code>
            &lt;!DOCTYPE html&gt;
            <br />
            <br />
            &lt;html lang="en"&gt;
            <br />
            <br />
            &lt;head&gt;
            <br />
            <br />
            &lt;meta charset="UTF-8"&gt;
            <br />
            <br />
            &lt;meta name="viewport" content="width=device-width,
            initial-scale=1.0"&gt;
            <br />
            <br />
            &lt;title&gt;HTML Form Validation&lt;/title&gt;
            <br />
            <br />
            &lt;style&gt;
            <br />
            <br />
            . <br />
            . <br />
            . <br />
            &lt;/style&gt;
            <br />
            <br />
            &lt;/head&gt;
            <br />
            <br />
            &lt;body&gt;
            <br />
            <br />
            &lt;form&gt;
            <br />
            <br />
            &lt;h2&gt;Sign Up&lt;/h2&gt;
            <br />
            <br />
            &lt;label&gt;Name:&lt;/label&gt;
            <br />
            <br />
            &lt;input type="text" name="name" required minlength="3"&gt;
            <br />
            <br />
            <br />
            &lt;label&gt;Email:&lt;/label&gt;
            <br />
            <br />
            &lt;input type="email" name="email" required&gt;
            <br />
            <br />
            <br />
            &lt;label&gt;Password:&lt;/label&gt;
            <br />
            <br />
            &lt;input type="password" name="password" required minlength="6"&gt;
            <br />
            <br />
            <br />
            &lt;label&gt;Age:&lt;/label&gt;
            <br />
            <br />
            &lt;input type="number" name="age" min="10" max="99"&gt;
            <br />
            <br />
            &lt;input type="submit" value="Register"&gt;
            <br />
            <br />
            &lt;/form&gt;
            <br />
            <br />
            &lt;/body&gt;
            <br />
            <br />
            &lt;/html&gt;
            <br />
            <br />
          </code>
        </pre>
        <h3>💡 Summary</h3>
        <table>
          <tr>
            <th>Concept</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <code>&lt;form&gt;</code>
            </td>
            <td>Form container</td>
          </tr>
          <tr>
            <td>
              <code>&lt;input&gt;</code>
            </td>
            <td>User input field</td>
          </tr>
          <tr>
            <td>
              <code>&lt;label&gt;</code>
            </td>
            <td>Input label</td>
          </tr>
          <tr>
            <td>
              <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code>
            </td>
            <td>Dropdown menu</td>
          </tr>
          <tr>
            <td>
              <b>Validation Attributes</b>
            </td>
            <td>
              <code>required</code>, <code>min</code>, <code>max</code>,{" "}
              <code>pattern</code>, etc.
            </td>
          </tr>
        </table>
        <h2 className="concept">
          4. Semantic HTML &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, etc.
        </h2>
        <h3>🌐 1️⃣ What is Semantic HTML?</h3>
        <p>
          <strong>Semantic HTML</strong> का मतलब है ऐसे HTML tags जो{" "}
          <strong>अपने meaning को खुद बताएं।</strong>
          <br />
          इनका इस्तेमाल करने से browser, developer और search engine — तीनों को
          content को समझना आसान होता है।
          <br />
          <br />
          🗣️ मतलब — HTML tag से ही समझ आ जाए कि अंदर क्या है!
        </p>{" "}
        <br />
        <h3>🏷️ 2️⃣ Common Semantic Tags</h3>
        <table>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>&lt;header&gt;</td>
            <td>Page या section का शीर्ष भाग (logo, nav bar आदि)</td>
          </tr>
          <tr>
            <td>&lt;nav&gt;</td>
            <td>Navigation links के लिए</td>
          </tr>
          <tr>
            <td>&lt;main&gt;</td>
            <td>Page का main content</td>
          </tr>
          <tr>
            <td>&lt;section&gt;</td>
            <td>Content का logical section</td>
          </tr>
          <tr>
            <td>&lt;article&gt;</td>
            <td>Independent content (जैसे blog post, news article)</td>
          </tr>
          <tr>
            <td>&lt;aside&gt;</td>
            <td>Sidebar content (ads, links, extra info)</td>
          </tr>
          <tr>
            <td>&lt;footer&gt;</td>
            <td>Page या section का नीचे का भाग</td>
          </tr>
          <tr>
            <td>&lt;figure&gt;</td>
            <td>Image या diagram container</td>
          </tr>
          <tr>
            <td>&lt;figcaption&gt;</td>
            <td>Image का caption</td>
          </tr>
          <tr>
            <td>&lt;time&gt;</td>
            <td>Date या time बताने के लिए</td>
          </tr>
        </table>
        <h3>🧱 3️⃣ Example: Semantic HTML Layout</h3>
        <h3>🧠 4️⃣ Why Semantic HTML is Important</h3>
        <p>✅ SEO Friendly — Search engines easily understand page structure</p>
        <p>
          ✅ Accessibility — Screen readers (for blind users) can interpret
          content meaningfully
        </p>
        <p>✅ Better Structure — Makes code cleaner and easier to maintain</p>
        <p>
          ✅ Professional Practice — Modern websites always use semantic tags
        </p>
        <h4>⚡ Summary Table</h4>
        <table>
          <tr>
            <th>Concept</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>&lt;header&gt;</td>
            <td>Top area of website</td>
          </tr>
          <tr>
            <td>&lt;footer&gt;</td>
            <td>Bottom area</td>
          </tr>
          <tr>
            <td>&lt;article&gt;</td>
            <td>Independent content block</td>
          </tr>
          <tr>
            <td>&lt;section&gt;</td>
            <td>Logical content grouping</td>
          </tr>
          <tr>
            <td>&lt;nav&gt;</td>
            <td>Navigation links</td>
          </tr>
          <tr>
            <td>&lt;aside&gt;</td>
            <td>Sidebar info</td>
          </tr>
          <tr>
            <td>&lt;main&gt;</td>
            <td>Main content area</td>
          </tr>

          <tr>
            <td>&lt;figcaption&gt;</td>
            <td>Image का caption</td>
          </tr>

          <tr>
            <td>&lt;time&gt;</td>
            <td>Date या time बताने के लिए</td>
          </tr>
          <tr>
            <td>&lt;figure&gt;</td>
            <td>Image या diagram container</td>
          </tr>
        </table>
        <h2 className="concept">5. Embedding Media (Audio, Video, Iframes)</h2>
        <p>
          अब हम सीखेंगे<strong> HTML में Media Embed करना</strong> — यानी Audio,
          Video और Iframe कैसे use होते हैं।
        </p>
        <h3>🎵 1️⃣ Audio Embed</h3>
        <p>
          HTML5 में <code>&lt;audio&gt;</code> tag का इस्तेमाल करके audio files
          को webpage में play किया जा सकता है।
        </p>
        <h4>📘 Syntax</h4>
        <pre>
          <code>
            &lt;audio controls&gt;
            <br />
            <br />
            &lt;source src="audio-file.mp3" type="audio/mpeg"&gt;
            <br />
            <br />
            Your browser does not support the audio element.
            <br />
            <br />
            &lt;/audio&gt;
            <br />
          </code>
        </pre>
        <ul>
          <li>controls → Play, Pause, Volume buttons दिखाता है</li>
          <li>src → Audio file का path</li>
          <li>type → File type</li>
        </ul>
        <h3>🎬 2️⃣ Video Embed</h3>
        <p>
          HTML5 में <code>&lt;video&gt;</code> tag का इस्तेमाल video files के
          लिए किया जाता है।
        </p>
        <h5>📘 Syntax</h5>
        <code>
          &lt;video width="640" height="360" controls&gt;
          <br />
          &lt;source src="video-file.mp4" type="video/mp4"&gt;
          <br />
          Your browser does not support the video tag.
          <br />
          &lt;/video&gt;
          <br />
        </code>
        <ul>
          <li>
            <strong>width / height →</strong> Video का size
          </li>
          <li>
            <strong>width / height →</strong> Video का size
          </li>
          <li>
            <strong>controls →</strong> Play/Pause, Volume buttons
          </li>
          <li>
            <strong>autoplay →</strong> Page load पर auto play
          </li>
          <li>
            <strong>loop →</strong> Video repeat होने के लिए
          </li>
          <li>
            <strong>muted →</strong> Video silent start
          </li>
        </ul>
        <h3>🌐 3️⃣ Iframe Embed (Other Web Pages)</h3>
        <p>
          {" "}
          <code>&lt;iframe&gt;</code> का इस्तेमाल करके किसी अन्य webpage या
          content को embed किया जा सकता है।
        </p>
        <code>
          &lt;iframe src="https://www.example.com" width="600" height="400"
          title="Example Site" frameborder="0"
          allowfullscreen&gt;&lt;/iframe&gt;
        </code>
        <ul>
          <li>
            <strong>src →</strong> Embed page का URL
          </li>
          <li>
            <strong>width / height →</strong> Size
          </li>
          <li>
            <strong>title →</strong> Accessibility के लिए
          </li>
          <li>
            <strong>frameborder="0" →</strong> Border हटाने के लिए
          </li>
          <li>
            <strong>allowfullscreen →</strong> Fullscreen enable
          </li>
        </ul>
        <h3>🧱 4️⃣ Example: Audio, Video, Iframe Together</h3>
        <code>
          &lt;!DOCTYPE html&gt;
          <br />
          &lt;html lang="en"&gt;
          <br />
          &lt;head&gt;
          <br />
          &lt;meta charset="UTF-8"&gt;
          <br />
          &lt;meta name="viewport" content="width=device-width,
          initial-scale=1.0"&gt;
          <br />
          &lt;title&gt;Embedding Media in HTML&lt;/title&gt;
          <br />
          &lt;/head&gt;
          <br />
          &lt;body&gt;
          <br />
          &lt;h2&gt;🎵 Audio Example&lt;/h2&gt;
          <br />
          &lt;audio controls&gt;
          <br />
          &lt;source src="sample-audio.mp3" type="audio/mpeg"&gt;
          <br />
          Your browser does not support the audio element.
          <br />
          &lt;/audio&gt;
          <br />
          &lt;h2&gt;🎬 Video Example&lt;/h2&gt;
          <br />
          &lt;video width="640" height="360" controls&gt;
          <br />
          &lt;source src="sample-video.mp4" type="video/mp4"&gt;
          <br />
          Your browser does not support the video tag.
          <br />
          &lt;/video&gt;
          <br />
          &lt;h2&gt;🌐 Iframe Example&lt;/h2&gt;
          <br />
          &lt;iframe src="https://www.example.com" width="600" height="400"
          title="Example Site" frameborder="0"
          allowfullscreen&gt;&lt;/iframe&gt;
          <br />
          &lt;/body&gt; &lt;/html&gt;
        </code>
        <h2>🧠 Key Points: Media Embed in HTML</h2>
        <ol>
          <li>
            <code>&lt;audio&gt;</code> और <strong>&lt;video&gt;</strong> HTML5
            elements हैं → पुराने <strong>&lt;embed&gt;</strong> या{" "}
            <strong>lt;object&gt;</strong>& की जगह।
          </li>
          <br />
          <li>
            Multiple <code>lt;source&gt;</code>& tags add करने से browser
            compatibility बढ़ती है।
          </li>
          <br />
          <li>
            <code>&lt;iframe&gt;</code> में <code>&lt;title&gt;</code> attribute
            accessibility के लिए जरूरी है।
          </li>
          <br />

          <li>
            Media embed करते समय file paths सही होना चाहिए या online URL use
            करें।
          </li>
        </ol>
        <h2 className="concept">6. Accessibility and SEO-Friendly Markup</h2>
        <p>
          अब हम बात करेंगे <strong>Accessibility और SEO-Friendly Markup</strong>{" "}
          के बारे में, यानी HTML pages को ऐसा बनाना कि:{" "}
        </p>
        <p>
          1️⃣ Screen readers और assistive devices आसानी से समझें → Accessibility{" "}
          <br />
          2️⃣ Search engines आसानी से समझें और rank करें → SEO
        </p>
        <h2>🧩 1️⃣ Accessibility (पहुँच योग्य वेबसाइट)</h2>
        <h3>🌟 Key Points</h3>
        <ul>
          <li>
            <strong>Semantic HTML Tags use</strong> करें:{" "}
            <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
            <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,{" "}
            <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> <br />→
            Screen readers को content structure समझने में मदद
          </li>
          <li>
            <strong>Alt text for images:</strong>
          </li>
        </ul>
        <code>&lt;img src="logo.png" alt="Company Logo"&gt;</code>
        <p>→ Visual impairment users के लिए description</p>
        <ul>
          <li>
            <strong>Labels for forms:</strong>
          </li>
        </ul>
        <code>
          &lt;label for="email"&gt;Email:&lt;/label&gt; <br /> &lt;input
          type="email" id="email" name="email"&gt;
        </code>
        <p>→ Input fields को identify करने में मदद</p>
        <ul>
          <li>
            <strong>Keyboard navigation:</strong>
          </li>
        </ul>
        <p>
          सभी interactive elements <code>(buttons, links)</code> keyboard से
          accessible होने चाहिए
        </p>
        <p>
          <strong>ARIA attributes</strong> (optional advanced):
        </p>
        <code> &lt;button aria-label="Close Menu"&gt;X&lt;/button&gt;</code>
        <h2>🧩 2️⃣ SEO-Friendly Markup (Search Engine Optimized)</h2>
        <h3>🌟 Key Points</h3>
        <ul>
          <li>
            <strong>Title and meta description</strong> सही set करें:
          </li>
          <code>
            &lt;title&gt;My Web Page &lt;/title&gt; <br />
            &lt;meta name="description" content="This is a demo web page for SEO
            learning"&gt;
          </code>

          <li>
            Heading hierarchy maintain करें: <code>&lt;h1&gt;</code> →{" "}
            <code>&lt;h2&gt;</code> → <code>&lt;h3&gt;</code>
          </li>
          <p>→ Search engines को content structure समझ में आता है</p>
          <li>
            <strong>Semantic HTML tags</strong> use करना →{" "}
            <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
            <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>
          </li>
          <li>
            <strong>Alt attributes for images →</strong> Image search ranking
            में मदद
          </li>
          <li>
            <strong>Clean URLs & Internal links →</strong> Crawlable site
            structure
          </li>
        </ul>
        <h2>🧱 3️⃣ Example: Accessible + SEO-Friendly HTML</h2>
        <pre>
          &lt;!DOCTYPE html&gt;
          <br />
          &lt;html lang="en"&gt;
          <br />
          &lt;head&gt;
          <br />
          &lt;meta charset="UTF-8"&gt;
          <br />
          &lt;meta name="viewport" content="width=device-width,
          initial-scale=1.0"&gt;
          <br />
          &lt;title&gt;Accessible &amp; SEO-Friendly Page&lt;/title&gt;
          <br />
          &lt;meta name="description" content="Example page showing
          accessibility and SEO best practices"&gt;
          <br />
          &lt;/head&gt;
          <br />
          &lt;body&gt;
          <br />
          <br />
          &lt;header&gt;
          <br />
          &lt;h1&gt;My Website&lt;/h1&gt;
          <br />
          &lt;nav&gt;
          <br />
          &lt;a href="#home"&gt;Home&lt;/a&gt;
          <br />
          &lt;a href="#about"&gt;About&lt;/a&gt;
          <br />
          &lt;/nav&gt;
          <br />
          &lt;/header&gt;
          <br />
          <br />
          &lt;main&gt;
          <br />
          &lt;section id="home"&gt;
          <br />
          &lt;h2&gt;Welcome&lt;/h2&gt;
          <br />
          &lt;p&gt;This is a demo page showing accessibility and SEO best
          practices.&lt;/p&gt;
          <br />
          &lt;img src="logo.png" alt="Company Logo"&gt;
          <br />
          &lt;/section&gt;
          <br />
          <br />
          &lt;section id="about"&gt;
          <br />
          &lt;h2&gt;About Us&lt;/h2&gt;
          <br />
          &lt;article&gt;
          <br />
          &lt;h3&gt;Our Mission&lt;/h3&gt;
          <br />
          &lt;p&gt;We aim to create accessible and SEO-friendly
          websites.&lt;/p&gt;
          <br />
          &lt;/article&gt;
          <br />
          &lt;/section&gt;
          <br />
          &lt;/main&gt;
          <br />
          <br />
          &lt;footer&gt;
          <br />
          &lt;p&gt;© 2025 MyWebsite&lt;/p&gt;
          <br />
          &lt;/footer&gt;
          <br />
          <br />
          &lt;/body&gt;
          <br />
          &lt;/html&gt;
          <br />
        </pre>
        <ul>
          <h3> 🧠 Key Takeaways</h3>
          <li>Semantic HTML → Accessibility + SEO</li>
          <li>Alt text → Images + SEO</li>
          <li>Proper headings → Structure + SEO</li>
          <li>Labels & ARIA → Form and interaction accessibility</li>
          <li>Meta tags → SEO ranking</li>
        </ul>
        <h2 id="project1">🧠 Project: Personal Portfolio Page</h2>
        <a href="https://github.com/harshit-gupta26/My-Personal-Portfolio.git">
          Personal Portfolio Page
        </a>
        <h1 className="module">🎨 Module 3: CSS3 – Styling and Layouts</h1>
        <ul>
          <li>
            <h2 className="concept">CSS Syntax, Selectors, and Units</h2>
          </li>
        </ul>
        <p>
          Sure! Let's go <strong>step by step</strong> and cover{" "}
          <strong>CSS syntax, selectors, and units</strong> clearly with
          examples.
        </p>
              <h3>1. CSS Syntax</h3>

<p>CSS (Cascading Style Sheets) is used to style HTML elements. The basic syntax is:</p>







      </div>

      <div className="course-section">
        <h2>📄 Notes (PDF)</h2>
        {content.pdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.url}
            target="_blank"
            rel="noreferrer"
            className="pdf-link"
          >
            <FaFilePdf /> {pdf.title}
          </a>
        ))}
      </div>

      <div className="course-section">
        <h2>🎥 Video Lectures</h2>
        <Slider {...settings}>
          {content.videos.map((video, index) => (
            <div key={index} className="video-slide">
              <div className="iframe-container">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{video.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseDetail;
