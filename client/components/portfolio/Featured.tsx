import { Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section id="featured" className="py-20 scroll-mt-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl mb-10"
        >
          Featured Content
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <Youtube className="text-red-500" />
              <h3 className="font-semibold">YouTube – Blue3D</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              Blender tutorials, add-on showcases, and behind-the-scenes breakdowns.
            </p>
            <div className="mt-4 aspect-video overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=PLNs2tG_iRkQ"
                title="Blue3D YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Button asChild className="mt-4">
              <a target="_blank" href="https://www.youtube.com" rel="noreferrer">
                Visit Channel
              </a>
            </Button>
          </div>
          <div className="rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <Instagram className="text-pink-500" />
              <h3 className="font-semibold">Instagram – @blue3d_</h3>
            </div>
            <p className="mt-2 text-muted-foreground">Design posts, quick tips, and artwork.</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1506089645678-3e82f36db5a4?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=400&auto=format&fit=crop",
              ].map((src) => (
                <img key={src} src={src} alt="instagram preview" className="aspect-square w-full rounded-lg object-cover" />
              ))}
            </div>
            <Button asChild className="mt-4" variant="outline">
              <a target="_blank" href="https://www.instagram.com" rel="noreferrer">
                Visit Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
