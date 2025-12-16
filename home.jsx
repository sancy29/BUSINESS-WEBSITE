
function Home() {

  return (
    <div style={{ padding: "40px" }}>

      {/* Hero Section */}
      <h1>Welcome to the Responsive Business website </h1>

      <p style={{ maxWidth: "700px", marginTop: "10px" }}>
        Responsive Business website is a modern business website solution designed to help
        companies establish a strong digital presence with clean design,
        responsive layouts, and scalable frontend architecture.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Explore Our Services
      </button>

      <hr style={{ margin: "40px 0" }} />

      {/* Why Choose Us */}
      <h2>Why Choose Responsive Business Website?</h2>

      <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
        <li>Modern and responsive web design</li>
        <li>Clean and maintainable React components</li>
        <li>Performance-focused frontend development</li>
        <li>Business-oriented solutions</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* Call to Action */}
      <h2>Get in Touch</h2>

      <p style={{ maxWidth: "700px", marginTop: "10px" }}>
        Interested in working with us? Contact our team to discuss your
        requirements and get started today.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Contact Us
      </button>

    </div>
  );
}

export default Home;