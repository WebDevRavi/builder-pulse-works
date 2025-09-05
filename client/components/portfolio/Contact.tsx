import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData) as Record<string, string>;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Thanks! I’ll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl mb-8"
        >
          Contact
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border bg-gradient-to-br from-accent/30 to-background p-6">
            <div className="grid gap-4">
              <Input name="name" placeholder="Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Textarea name="message" placeholder="Message" rows={5} required />
              <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
            </div>
          </form>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Reach me</h3>
            <p className="mt-2 text-muted-foreground">Email: <a className="underline" href="mailto:ravi@example.com">ravi@example.com</a></p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent" href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a>
              <a className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent" href="https://www.youtube.com" target="_blank" rel="noreferrer"><Youtube size={16}/> YouTube</a>
              <a className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent" href="https://github.com" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              <a className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-accent" href="mailto:ravi@example.com" target="_blank" rel="noreferrer"><Mail size={16}/> Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
