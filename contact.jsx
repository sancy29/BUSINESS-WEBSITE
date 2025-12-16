function Contact() {
  return (
    <div style={{ padding: "40px" }}>

      <h1>Contact Us</h1>

      <p style={{ maxWidth: "700px", marginTop: "10px" }}>
        We would love to hear from you. If you have any questions, project
        requirements, or business inquiries, feel free to reach out.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Business Enquiries</h2>

      <p style={{ maxWidth: "700px" }}>
        Please contact us using the details below. Our team will review
        your inquiry and respond as soon as possible.
      </p>

      <div style={{ marginTop: "20px", lineHeight: "1.8" }}>
        <p><strong>Email:</strong> contact@responsor.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Office Location:</strong> Chennai, India</p>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <p style={{ maxWidth: "700px" }}>
        Business hours: Monday to Friday, 9:00 AM – 6:00 PM.
      </p>

    </div>
  );
}

export default Contact;