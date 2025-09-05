import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";

type Category = "Environment" | "VFX" | "Product Visualization" | "Development";

const projects = [
  {
    title: "Misty Highlands – 3D Environment",
    category: "Environment" as const,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F83d6decf804d4ad28638fae92e730109%2F6ce745d7af0a488bba3f000d61abfe54",
    description:
      "An immersive, game-like world built in Blender with custom foliage shaders and atmospheric lighting.",
  },
  {
    title: "Minimal Chair – Product Visualization",
    category: "Product Visualization" as const,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F83d6decf804d4ad28638fae92e730109%2Feed189ce710b4cea8ff770c8989542ac",
    description:
      "Realistic studio renders focusing on material fidelity, soft shadows, and photographic composition.",
  },
  {
    title: "Bagarain – Rain VFX",
    category: "VFX" as const,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F83d6decf804d4ad28638fae92e730109%2F5b7fc1c7c89e47cabb24e6350e6643f6",
    description:
      "A procedural rain simulation system designed for Blender, used to create dynamic storm scenes.",
  },
  {
    title: "RBC – Car Rigging",
    category: "VFX" as const,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F83d6decf804d4ad28638fae92e730109%2F57aeea6d50004db4abc9e6f1931996d1",
    description:
      "Vehicle rigging toolkit enabling rig-based control for smooth animation and camera-ready car shots.",
  },
  {
    title: "Restaurant Management System",
    category: "Development" as const,
    image:
      "https://images.unsplash.com/photo-1452968011977-4d8c23091bac?q=80&w=1200&auto=format&fit=crop",
    description:
      "Python/SQL project managing orders, inventory, and billing with a clean UI and robust data model.",
  },
  {
    title: "Sci‑Fi Canyon – 3D World",
    category: "Environment" as const,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    description:
      "A cinematic terrain study blending megascans and custom assets with volumetric fog and depth cues.",
  },
];

const categories: ("All" | Category)[] = [
  "All",
  "Environment",
  "Product Visualization",
  "VFX",
  "Development",
];

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<typeof projects[number] | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl mb-6"
        >
          Portfolio
        </motion.h2>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((c) => (
            <Button
              key={c}
              onClick={() => setActive(c)}
              variant={active === c ? "default" : "outline"}
              className="rounded-full"
            >
              {c}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge className="rounded-full bg-background/90 text-foreground backdrop-blur">
                        {p.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 hidden items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:opacity-100">
                      <div>
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="mt-3"
                          onClick={() => {
                            setActiveProject(p);
                            setOpen(true);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {activeProject && (
            <div>
              <img src={activeProject.image} alt={activeProject.title} className="h-80 w-full object-cover" />
              <div className="p-6">
                <Badge>{activeProject.category}</Badge>
                <h3 className="mt-3 text-2xl font-semibold">{activeProject.title}</h3>
                <p className="mt-2 text-muted-foreground">{activeProject.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
