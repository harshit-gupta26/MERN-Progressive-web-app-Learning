







import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PHPStart.css";

const PHPStart = () => {
  const topics = [
    "Introduction",
    "Data Types & Operators",
    "Conditionals & Loops",
    "PHP Functions",
    "PHP Arrays",
    "PHP OOPS",
    "PHP Superglobals",
    "PHP MySQL",
    "PHP Advance Topics",
  ];

  const subtopics = {
    Introduction: [
      "Overview",
      "Comments",
      "Variables in PHP",
      "Variable Scope",
    ],
    "Data Types & Operators": ["Data Types", "Type Casting", "Operators"],
    "Conditionals & Loops": ["if-else", "switch", "while", "for", "foreach"],
  };

  const [expandedTopic, setExpandedTopic] = useState("Introduction");
  const [selectedTopic, setSelectedTopic] = useState("Overview"); // default subtopic
  const [sidebarOpen, setSidebarOpen] = useState(true); // ✅ sidebar toggle state

  const toggleTopic = (topic) => {
    setExpandedTopic(expandedTopic === topic ? null : topic);
    setSelectedTopic(topic);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen); // ✅ toggle function

  // Go to next subtopic function
  const goToNextSubtopic = () => {
    const currentList = subtopics["Introduction"];
    const currentIndex = currentList.indexOf(selectedTopic);

    if (currentIndex < currentList.length - 1) {
      const next = currentList[currentIndex + 1];
      setExpandedTopic("Introduction");
      setSelectedTopic(next);
    } else {
      alert("You’ve reached the end of Introduction!");
    }
  };

  // Copy code helper
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="php-container">
      {/* ✅ Sidebar Toggle Icon */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside className={`php-sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">PHP Tutorial</h2>
        <ul className="sidebar-list">
          {topics.map((topic, index) => (
            <li key={index}>
              <button
                className={`sidebar-btn ${
                  selectedTopic === topic ? "active" : ""
                }`}
                onClick={() => toggleTopic(topic)}
              >
                {topic}
                <span
                  className={`arrow ${expandedTopic === topic ? "rotate" : ""}`}
                >
                  {subtopics[topic] ? "▼" : "›"}
                </span>
              </button>

              {expandedTopic === topic && subtopics[topic] && (
                <ul className="subtopic-list">
                  {subtopics[topic].map((sub, i) => (
                    <li
                      key={i}
                      className={`subtopic-item ${
                        selectedTopic === sub ? "active" : ""
                      }`}
                      onClick={() => setSelectedTopic(sub)}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="php-content">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/tutorials">Tutorials</Link> <span>/</span>{" "}
          <span>PHP Tutorial</span> <span>/</span> <span>{selectedTopic}</span>
        </div>

        {/* Hero Section */}
        <section className="php-hero">
          <img src="/php.png" alt="PHP Logo" className="php-logo" />
          <div className="php-hero-text">
            <h1>{selectedTopic}</h1>
            <p>
              Learn all about <strong>{selectedTopic}</strong> in PHP with
              examples and explanations.
            </p>
          </div>
        </section>

        {/* --- Overview Section --- */}
        {selectedTopic === "Overview" && (
          <section className="php-overview">
            <h2>Overview</h2>
            <p>
              PHP is a server-side scripting language, which is used to manage
              dynamic web pages, databases, and build websites with features
              like session tracking and e-commerce. On a day in 1995, Rasmus
              Lerdorf unleashed the first version of “Hypertext Preprocessor”
              also known as the PHP language. It is also integrated with several
              popular databases like MySQL, PostgreSQL, Microsoft SQL Server,
              Oracle, etc.
            </p>

            <h3>Uses of PHP</h3>
            <ul>
              <li>
                <strong>a. Handling Forms:</strong> PHP can handle form
                operations. It can gather data, save data to a file, and send
                data through emails.
              </li>
              <li>
                <strong>b. Database Operations:</strong> PHP can also create,
                read, update, and delete elements in your database.
              </li>
              <li>
                <strong>c. Encryption:</strong> It can perform advanced
                encryption and encrypt data for you.
              </li>
              <li>
                <strong>d. Dynamic Page Content:</strong> It can generate
                dynamic page content.
              </li>
            </ul>

            <h3>Basic Syntax PHP</h3>
            <p>
              A PHP script starts with <code>{`<?php`}</code> and ends with{" "}
              <code>{`?>`}</code>.
            </p>

            <pre className="code-box">
              <button
                className="copy-btn"
                onClick={() =>
                  copyCode(`<?php
// PHP code goes here
?>`)
                }
              >
                📋
              </button>
              <code>
                {`<?php\n`}
                <span className="comment">// PHP code goes here</span>
                {`\n?>`}
              </code>
            </pre>

            <h3>Displaying Output in PHP</h3>
            <p>
              Output is displayed using the <code>echo</code> command:
            </p>

            <pre className="code-box">
              <button
                className="copy-btn"
                onClick={() =>
                  copyCode(`<?php
echo "hello";
?>`)
                }
              >
                📋
              </button>
              <code>
                {`<?php\n`}
                <span className="keyword">echo</span> {` `}
                <span className="string">"hello"</span>;{`\n?>`}
              </code>
            </pre>

            <h2>Hello World</h2>
            <p>
              A simple PHP program using <code>echo</code> to print “Hello
              World!”.
            </p>

            <pre className="code-box">
              <button
                className="copy-btn"
                onClick={() =>
                  copyCode(`<!DOCTYPE html>
<html>
<body>
<h1>My first PHP page</h1>
<?php
echo "Hello World!";
?>
</body>
</html>`)
                }
              >
                📋
              </button>
              <code>
                {`<!DOCTYPE html>
<html>
<body>
<h1>My first PHP page</h1>
<?php
`}
                <span className="keyword">echo</span> {` `}
                <span className="string">"Hello World!"</span>;
                {`
?>
</body>
</html>`}
              </code>
            </pre>

            <div className="next-btn">
              <button onClick={goToNextSubtopic}>Next: Comments →</button>
            </div>
          </section>
        )}

        {selectedTopic === "Comments" && (
          <section className="php-comments">
            <h1>Comments</h1>
            <p>
              A comment is a part of the coding file that the programmer does
              not want to execute. Rather, the programmer uses it to either
              explain a block of code or to avoid the execution of a specific
              part of code while testing.
            </p>

            <h2>PHP supports several ways of commenting:</h2>

            <h3>Single Line Comments</h3>

            <pre className="code-box">
              <button
                className="copy-btn"
                onClick={() =>
                  copyCode(`<?php
// This is a single-line comment
# This is also a single-line comment
?>`)
                }
              >
                📋
              </button>
              <code>
                {`<?php\n`}
                <span className="comment">
                  // This is a single-line comment
                </span>
                {`\n`}
                <span className="comment">
                  # This is also a single-line comment
                </span>
                {`\n?>`}
              </code>
            </pre>

            <h3>Multi-line Comments</h3>
            <p>
              PHP also supports multi-line comments using <code>/* ... */</code>
              . Anything between these symbols will be ignored by the PHP
              interpreter.
            </p>

            <pre className="code-box">
              <button
                className="copy-btn"
                onClick={() =>
                  copyCode(`<?php
/* 
This is a multi-line comment.
It can span multiple lines.
*/
?>`)
                }
              >
                📋
              </button>
              <code>
                {`<?php\n`}
                <span className="comment">/*</span>
                {`\n`}
                <span className="comment">This is a multi-line comment.</span>
                {`\n`}
                <span className="comment">It can span multiple lines.</span>
                {`\n`}
                <span className="comment">*/</span>
                {`\n?>`}
              </code>
            </pre>

            {/* Navigation Buttons at Bottom */}
            <div className="nav-bottom">
              <button
                className="prev-btn"
                onClick={() => setSelectedTopic("Overview")}
              >
                ← Previous: Overview
              </button>
              <button className="next-btn" onClick={goToNextSubtopic}>
                Next: Variables in PHP →
              </button>
            </div>
          </section>
        )}

        {/* --- Variables Section --- */}
        {selectedTopic === "Variables in PHP" && (       
<section className="php-variables">
<h1>Variables in PHP</h1>
<p>
  <strong>Variables</strong> are containers that can store information which can be
  manipulated or referenced later by the programmer within the code.
</p>

<p>
  In PHP, we don’t need to declare the variable type explicitly. The type of
  variable is determined by the value it stores. There are some important
  things to know about variables in PHP:
</p>

<ul>
  <li>All variables should be denoted with a Dollar Sign (<code>$</code>).</li>
  <li>
    Variables are assigned with the <code>=</code> operator, with the
    variable on the left-hand side and the expression to be evaluated on the
    right.
  </li>
  <li>
    Variable names can only contain alpha-numeric characters and underscores
    (<code>A–z</code>, <code>0–9</code>, and <code>_</code>).
  </li>
  <li>
    Variables must start with a letter or the underscore (<code>_</code>)
    character.
  </li>
  <li>Variables are case sensitive.</li>
  <li>Variable names cannot start with a number.</li>
</ul>

<h3>Example:</h3>
<pre className="code-box">
  <button
    className="copy-btn"
    onClick={() =>
      copyCode(`<?php
$name = "Harshit";
$age = 21;
echo "My name is $name and I am $age years old.";
?>`)
    }
  >
    📋
  </button>
  <code>
    {`<?php\n`}
    <span className="variable">$name</span> ={" "}
    <span className="string">"Harshit"</span>;{`\n`}
    <span className="variable">$age</span> = 21;{`\n`}
    {/* <span className="keyword">echo</span> {`"My name is $name and I am $age years old."`;}{`\n`} */}
    <span className="keyword">echo</span> {` "My name is $name and I am $age years old.";`}{`\n`}

    {`?>`}
  </code>
</pre>

<h3>Output:</h3>
<pre className="output-box">
  My name is Harshit and I am 21 years old.
</pre>


<div className="nav-bottom">
  <button
    className="prev-btn"
    onClick={() => setSelectedTopic("Comments")}
  >
    ← Previous: Comments
  </button>
  <button className="next-btn" onClick={goToNextSubtopic}>
    Next: Variable Scope →
  </button>
</div>

</section>
)}

        {/* --- Variable Scope Section --- */}
        {selectedTopic === "Variable Scope" && (
           <section className="php-scope">
           <h1>Variable Scope</h1>
           <p>
             The scope of the variable is the area within which the variable has been created. 
             Based on this, a variable can either have a local scope, a global scope, or a static scope in PHP.
           </p>
       
           <h2>Global Variable:</h2>
           <p>
             A variable that was created in the main body of the code and that can be accessed 
             anywhere in the program is called a <strong>Global Variable</strong>. 
             Global variables can be directly accessed or used in or outside of a function 
             with the <code>global</code> keyword before the variable. 
             However, we can also call them without the global keyword.
           </p>
       
           <h3>Example:</h3>
           <pre className="code-box">
             <button
               className="copy-btn"
               onClick={() =>
                 copyCode(`<?php
       $x = 10;
       $y = 20;
       
       function addition() {
         global $x, $y;
         $sum = $x + $y;
         echo $sum;
       }
       
       addition();
       ?>`)
               }
             >
               📋
             </button>
             <code>
               {`<?php\n`}
               <span className="variable">$x</span> = 10;{`\n`}
               <span className="variable">$y</span> = 20;{`\n\n`}
               <span className="keyword">function</span> addition() {"{"}{`\n`}
               {"  "}<span className="keyword">global</span> <span className="variable">$x</span>, <span className="variable">$y</span>;{`\n`}
               {"  "}<span className="variable">$sum</span> = <span className="variable">$x</span> + <span className="variable">$y</span>;{`\n`}
               {"  "}<span className="keyword">echo</span> <span className="variable">$sum</span>;{`\n`}
               {"}"}{`\n\n`}
               addition();{`\n`}
               {`?>`}
             </code>
           </pre>
       
           <h3>Output:</h3>
           <pre className="output-box">
             30
           </pre>

           
    {/* ---- Local Variable ---- */}
    <h2>Local Variable:</h2>
    <p>
      A <strong>local variable</strong> is created within a function and can only be used inside
      that function. This means that these variables cannot be accessed outside the function,
      as they have local scope.
    </p>

    <h3>For Example:</h3>
    <pre className="code-box">
      <button
        className="copy-btn"
        onClick={() =>
          copyCode(`<?php
function mytest()
{
  $capital = "Delhi";
  echo "Capital of India is: " . $capital;
}

mytest(); // Calling the function
// Using $capital outside the function will generate an error
echo $capital;
?>`)
        }
      >
        📋
      </button>
      <code>
        {`<?php\n`}
        <span className="keyword">function</span> mytest(){" {"}{`\n`}
        {"  "}<span className="variable">$capital</span> = <span className="string">"Delhi"</span>;{`\n`}
        {"  "}<span className="keyword">echo</span> {`"Capital of India is: " . `}<span className="variable">$capital</span>;{`\n`}
        {"}"}{`\n\n`}
        mytest(); <span className="comment">// Calling the function</span>{`\n`}
        <span className="comment">// Using $capital outside the function will generate an error</span>{`\n`}
        <span className="keyword">echo</span> <span className="variable">$capital</span>;{`\n`}
        {`?>`}
      </code>
    </pre>

    <h3>Output:</h3>
    <pre className="output-box">
      Capital of India is: Delhi{"\n"}
      Notice: Undefined variable: capital in D:\xampp\htdocs\program\var.php on line 28
    </pre>

    {/* ---- Static Variable ---- */}
<h2>Static Variable:</h2>
<p>
  PHP has a feature that deletes the variable once it has finished execution and frees the memory. 
  When we need a local variable that can store its value even after the execution, 
  we use the <code>static</code> keyword before it, and the variable is called a static variable.
</p>

<p>
  These variables only exist in a local function and do not get deleted after the execution 
  has been completed.
</p>

<h3>For Example:</h3>

<pre className="code-box">
  <button
    className="copy-btn"
    onClick={() =>
      copyCode(`<?php
function static_var()
{
  static $num1 = 3; // Static variable
  $num2 = 6; // Non-static variable
  
  // Increment in static variable
  $num1++;
  // Increment in non-static variable
  $num2++;

  echo "Static: " . $num1 . "<br>";
  echo "Non-static: " . $num2 . "<br>";
}

// First function call
static_var();

// Second function call
static_var();
?>`)
    }
  >
    📋
  </button>
  <code>
    {`<?php\n`}
    <span className="keyword">function</span> static_var(){" {"}{`\n`}
    {"  "}<span className="keyword">static</span> <span className="variable">$num1</span> = 3;{" "}
    <span className="comment">// Static variable</span>{`\n`}
    {"  "}<span className="variable">$num2</span> = 6;{" "}
    <span className="comment">// Non-static variable</span>{`\n\n`}
    {"  "}<span className="comment">// Increment in static variable</span>{`\n`}
    {"  "}<span className="variable">$num1</span>++;{`\n`}
    {"  "}<span className="comment">// Increment in non-static variable</span>{`\n`}
    {"  "}<span className="variable">$num2</span>++;{`\n\n`}
    {"  "}<span className="keyword">echo</span> {`"Static: " . `}
    <span className="variable">$num1</span> . {`"<br>";`}{`\n`}
    {"  "}<span className="keyword">echo</span> {`"Non-static: " . `}
    <span className="variable">$num2</span> . {`"<br>";`}{`\n`}
    {"}"}{`\n\n`}
    <span className="comment">// First function call</span>{`\n`}
    static_var();{`\n\n`}
    <span className="comment">// Second function call</span>{`\n`}
    static_var();{`\n`}
    {`?>`}
  </code>
</pre>

<h3>Output:</h3>
<pre className="output-box">
  Static: 4
  {"\n"}Non-static: 7
  {"\n"}Static: 5
  {"\n"}Non-static: 7
</pre>

       
           <div className="nav-bottom">
             <button
               className="prev-btn"
               onClick={() => setSelectedTopic("Variables in PHP")}
             >
               ← Previous: Variables in PHP
             </button>
             <button className="next-btn" onClick={() => alert("End of Introduction!")}>
               Finish →
             </button>
           </div>
         </section>
        )}

        {/* --- Default Intro Fallback --- */}
        {selectedTopic === "Introduction" && (
          <section className="php-getstarted">
            <h2>Get Started</h2>
            <p>Welcome to the PHP Tutorial series! To begin learning:</p>
            <ol>
              <li>Select a lesson from the sidebar on the left.</li>
              <li>Work through lessons in order for best understanding.</li>
              <li>Each lesson contains explanations and examples.</li>
            </ol>
          </section>
        )}
      </main>
    </div>
  );
};

export default PHPStart;
