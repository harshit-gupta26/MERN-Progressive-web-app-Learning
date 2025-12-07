import React from "react";
import { FaPython, FaCode, FaHtml5, FaDatabase, FaGlobe } from "react-icons/fa";
import Footer from "./about/components/Footer";
import "./Notes.css";

const Notes = () => {
  const notesList = [
    {
      id: 1,
      title: "Python Notes",
      description: "Download Notes Here",
      icon: <FaPython className="note-icon python" />,
      downloadLink: "/handbooks/Python_Notes.pdf",
    },
    {
      id: 2,
      title: "C Notes",
      description: "Download Notes Here",
      icon: <FaCode className="note-icon c" />,
      downloadLink: "/handbooks/C_Notes.pdf",
    },
    {
      id: 3,
      title: "HTML Notes",
      description: "Download Notes Here",
      icon: <FaHtml5 className="note-icon html" />,
      downloadLink: "/handbooks/HTML_Notes.pdf",
    },
    {
      id: 4,
      title: "SQL Notes",
      description: "Download Notes Here",
      icon: <FaDatabase className="note-icon sql" />,
      downloadLink: "/handbooks/SQL_Notes.pdf",
    },
    {
      id: 5,
      title: "Complete Web Development Notes",
      description: "Download Notes Here",
      icon: <FaGlobe className="note-icon web" />,
      downloadLink: "/handbooks/WebDev_Notes.pdf",
    },
  ];

  return (
    <section className="notes-section">
      <h1>📘 Download Notes</h1>
      <p>Access your learning materials easily and boost your preparation.</p>

      <div className="notes-grid">
        {notesList.map((note) => (
          <div className="note-card" key={note.id}>
            {note.icon}
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <a href={note.downloadLink} download className="download-btn">
              ⬇️ Download
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Notes;
