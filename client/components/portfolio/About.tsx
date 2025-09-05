import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <div className="container grid gap-10 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          <h2 className="font-heading text-3xl md:text-4xl">About Me</h2>
          <p>
            I’m a creative professional specializing in 3D art, environment design, product visualization, and VFX. I’m passionate about blending creativity with technology, and I also pursue projects in Python and game environment design.
          </p>
          <ul>
            <li>Environment artist</li>
            <li>Product visualization artist</li>
            <li>VFX creator</li>
          </ul>
          <p>
            I love crafting immersive visual experiences that feel grounded and alive. My work balances precision with imagination.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <ol className="relative border-l pl-6">
            <li className="mb-8">
              <div className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-primary" />
              <h3 className="font-semibold">Schooling – Sage International School</h3>
              <p className="text-muted-foreground">Built the foundation for art and tech curiosity.</p>
            </li>
            <li className="mb-8">
              <div className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-primary" />
              <h3 className="font-semibold">Started YouTube – Blue3D</h3>
              <p className="text-muted-foreground">Sharing Blender tutorials and creative experiments.</p>
            </li>
            <li>
              <div className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-primary" />
              <h3 className="font-semibold">Future – CSE AIML</h3>
              <p className="text-muted-foreground">Specializing in AI & ML to push creative boundaries.</p>
            </li>
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
