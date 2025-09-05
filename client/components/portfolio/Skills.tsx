import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Brush, Code2, Film, Image as ImageIcon, Layers, Wand2 } from "lucide-react";

const skills = [
  {
    category: "3D & Design",
    icon: Layers,
    items: [
      { name: "Blender", level: 90 },
      { name: "Environment Art", level: 85 },
      { name: "Product Visualization", level: 88 },
      { name: "VFX", level: 80 },
    ],
  },
  {
    category: "Development",
    icon: Code2,
    items: [
      { name: "Python", level: 75 },
      { name: "SQL", level: 65 },
      { name: "Blender Add-ons", level: 70 },
    ],
  },
  {
    category: "Creative Tools",
    icon: Wand2,
    items: [
      { name: "Photoshop", level: 70 },
      { name: "After Effects", level: 60 },
      { name: "Rendering", level: 80 },
    ],
  },
  {
    category: "Content Creation",
    icon: Film,
    items: [
      { name: "YouTube (Blue3D)", level: 80 },
      { name: "Instagram (@blue3d_)", level: 75 },
      { name: "Storytelling", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map(({ category, icon: Icon, items }) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl border p-6 shadow-sm bg-card"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-primary" />
                <h3 className="font-semibold">{category}</h3>
              </div>
              <div className="mt-6 space-y-5">
                {items.map((s) => (
                  <div key={s.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{s.name}</span>
                      <span className="font-medium">{s.level}%</span>
                    </div>
                    <Progress value={s.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
