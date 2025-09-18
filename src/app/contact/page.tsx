export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Contact Me</h1>
      <p className="text-gray-700 mb-10">
        Let’s collaborate and build something amazing. Fill the form below 👇
      </p>

      <form className="grid gap-6 bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-200">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
