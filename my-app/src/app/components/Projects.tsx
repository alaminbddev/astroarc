/* === FILE: components/Projects.tsx === */
const projects = [
  {
    title: "Project One",
    description: "A cool web app built with Next.js and Tailwind.",
  },
  {
    title: "Project Two",
    description: "An API service with Node.js and Supabase backend.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl hover:shadow-cyan-500/50 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
