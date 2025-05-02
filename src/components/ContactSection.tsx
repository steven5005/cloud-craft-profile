
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Contact form */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Your message"
                      className="w-full resize-none"
                    />
                  </div>
                  <Button type="submit" disabled={isSending} className="w-full">
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Right side - Contact info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="mb-6 text-balance">
                    Let's build something scalable, secure, and impactful together.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:contact@stevenlee.dev"
                      className="flex items-center text-sm hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      contact@stevenlee.dev
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="mailto:contact@stevenlee.dev"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
