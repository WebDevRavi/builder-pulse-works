import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/10),transparent_60%)]" />
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-4xl/tight md:text-6xl/tight font-extrabold"
          >
            Ravi Solanki
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Turning Imagination into Life through 3D Art, Environment Design & VFX.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mx-auto aspect-square w-56 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-2 md:w-72"
        >
          <img
            alt="Ravi Solanki avatar"
            className="h-full w-full rounded-xl object-cover shadow-2xl ring-1 ring-border"
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop"
          />
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-foreground/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
