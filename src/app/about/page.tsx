export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-indigo-600 mb-12">About Me</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
          src="/about.jpg"
          alt="About Jamshaid"
          className="rounded-xl shadow-lg object-cover"
        />

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m <b>Jamshaid</b>, a passionate web developer who loves
            building modern and scalable web applications. I focus on clean
            code, smooth user experiences, and creative UI designs.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Full-stack Development (Next.js, Node.js, MongoDB)</li>
            <li>🎨 UI/UX with TailwindCSS</li>
            <li>🚀 Deployment with Vercel & Cloud Platforms</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
