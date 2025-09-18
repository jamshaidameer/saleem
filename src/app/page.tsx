import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl items-center">
        {/* Profile Image with Glow */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-3xl blur-2xl opacity-70"></div>
          <img
            src="/me.jpg"
            alt="Jamshaid Ameer"
            className="relative w-64 h-64 rounded-3xl shadow-2xl object-cover border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Jamshaid
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            A passionate <b>Web Developer</b> crafting sleek, scalable, and
            modern applications using <b>Next.js</b>, <b>TypeScript</b>, and{" "}
            <b>TailwindCSS</b>.
          </p>

          <div className="flex gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
