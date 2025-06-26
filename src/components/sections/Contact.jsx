import { RevealOnScroll } from "../shared/revealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
import { EmailSvg, LinkedInSvg, PhoneSvg } from "../icons";
import { toast } from "react-toastify";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          style: {
            textAlign: "center",
            color: "#3b82f6",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        toast.error("Oops! Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
        })
      );
  };

  return (
    <section id="contact" className="min-h-full py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 px-4 py-4">
            <div className="px-4 py-2">
              <div className="flex items-center gap-4 py-2">
                <a href="mailto:hegdeanu12@gmail.com">
                  <EmailSvg />
                </a>
                <div className="flex flex-col items-start">
                  <p>Email</p>
                  <p>hegdeanu12@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2">
                <a href="tel:+4917676625594">
                  <PhoneSvg />
                </a>
                <div className="flex flex-col items-start">
                  <p>Phone</p>
                  <p>+49 17676625594</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2">
                <a href="http://www.linkedin.com/in/anusha-h" target="_blank">
                  <LinkedInSvg />
                </a>
                <div className="flex flex-col items-start">
                  <p>LinkedIn</p>
                  <p>Anusha Hegde</p>
                </div>
              </div>
            </div>
            <form
              className="px-4 py-2 bg-gray-500/10 rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="py-2">
                <label className="text-gray-300/90">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Your Name"
                  required
                  className="px-2 py-1 rounded-md w-full border border-gray-300/50 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/10"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="py-2">
                <label className="text-gray-300/90">Email</label> <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="example@gmail.com"
                  required
                  className="px-2 py-1 rounded-md w-full border border-gray-300/50 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/10"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="py-2">
                <label className="text-gray-300/90">Message</label> <br />
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Your Message..."
                  rows={5}
                  required
                  className="px-2 py-1 w-full rounded-md border custom-scrollbar max-h-40 border-gray-300/50 focus:outline-none focus:border-blue-500/40 focus:bg-blue-500/10"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="px-1 py-1 flex items-center justify-center rounded-md overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
