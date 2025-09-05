import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const achievements = [
  { title: "Created Blender add-ons (RBC, Bagarain)", tag: "Tools" },
  { title: "Built immersive environments", tag: "3D" },
  { title: "Content creation on YouTube – Blue3D", tag: "Content" },
  { title: "Storytelling projects – Mahabharata Legends", tag: "Narrative" },
  { title: "Future specialization in CSE AIML", tag: "AI/ML" },
];

const resumeDataUrl =
  "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4KZW5kb2JqCjIgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzIC9LaWRzIFszIDAgUiBdIC9Db3VudCAxID4+CmVuZG9iagozIDAgb2JqCjw8IC9UeXBlIC9QYWdlIC9QYXJlbnQgMiAwIFIgL01lZGlhQm94IFswIDAgMjAwIDIwMCBdIC9Db250ZW50cyA0IDAgUiAvUmVzb3VyY2VzIDw8IC9Gb250IDw8IC9GMSA1IDAgUiA+PiA+PiA+PgplbmRvYmoKNCAwIG9iago8PCAvTGVuZ3RoIDQ0ID4+CnN0cmVhbQpCVCAvRjEgMjQgVGYgNzIgMTIwIFRkIChSYXZpIFNvbGFua2kgUmVzdW1lKSBUaiBFVApzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwgL1R5cGUgL0ZvbnQgL1N1YnR5cGUgL1R5cGUxIC9CYXNlRm9udCAvSGVsdmV0aWNhID4+CmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgIAowMDAwMDAwMDEwIDAwMDAwIG4gIAowMDAwMDAwMDYyIDAwMDAwIG4gIAowMDAwMDAwMTE1IDAwMDAwIG4gIAowMDAwMDAwMjU2IDAwMDAwIG4gIAowMDAwMDAwMzYxIDAwMDAwIG4gIAp0cmFpbGVyCjw8IC9Sb290IDEgMCBSIC9TaXplIDYgPj4Kc3RhcnR4cmVmCjQ1OAo1JSVFT0YK";

export default function Resume() {
  return (
    <section id="resume" className="py-20 scroll-mt-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl mb-8"
        >
          Resume & Achievements
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <Badge className="mt-0.5" variant="secondary">{a.tag}</Badge>
                  <span className="text-muted-foreground">{a.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Resume</h3>
            <p className="mt-2 text-muted-foreground">
              Download my latest resume as a PDF.
            </p>
            <Button asChild className="mt-4">
              <a href={resumeDataUrl} download="Ravi_Solanki_Resume.pdf">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
