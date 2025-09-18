const services = [
  {
    title: "Web Development",
    desc: "Responsive, fast, and scalable websites using Next.js & React.",
    icon: "💻",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "UI/UX Design",
    desc: "Modern and user-friendly interfaces for better engagement.",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "App Optimization",
    desc: "Boosting performance with SSR, SSG, and API integration.",
    icon: "⚡",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Service() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-indigo-600 text-center mb-12">
        My Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className={`p-8 rounded-xl shadow-lg bg-gradient-to-r ${s.color} text-white hover:scale-105 transition`}
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <p className="mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
