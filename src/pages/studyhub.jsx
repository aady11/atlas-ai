import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Rocket,
  Flame,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

function StudyHub() {
  const navigate = useNavigate();

  const topic =
    localStorage.getItem("atlas_topic") || "Artificial Intelligence";

  const streak =
    Number(localStorage.getItem("atlas_streak")) || 7;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">

      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto p-8">

        <button
          onClick={() => navigate("/research")}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={18} />
          Back to Research
        </button>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-5xl font-bold">
            Study Hub
          </h1>

          <p className="text-zinc-400 mt-3">
            Personalized learning resources for {topic}
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
              <Flame size={28} />
              <h2 className="mt-4 text-lg font-semibold">
                Study Streak
              </h2>

              <p className="text-5xl font-bold mt-4">
                {streak}
              </p>

              <p className="text-zinc-500 mt-2">
                Days
              </p>
            </div>

            <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
              <BookOpen size={28} />
              <h2 className="mt-4 text-lg font-semibold">
                Books
              </h2>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>Atomic Habits</li>
                <li>Deep Work</li>
                <li>Think Again</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
              <GraduationCap size={28} />
              <h2 className="mt-4 text-lg font-semibold">
                Courses
              </h2>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>Coursera</li>
                <li>freeCodeCamp</li>
                <li>YouTube</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
              <Rocket size={28} />
              <h2 className="mt-4 text-lg font-semibold">
                Projects
              </h2>

              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>Portfolio Website</li>
                <li>Research Dashboard</li>
                <li>AI Notes App</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 bg-white/5 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3 mb-6">
              <Calendar />
              <h2 className="text-2xl font-bold">
                Weekly Learning Plan
              </h2>
            </div>

            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">
                    Understand Fundamentals
                  </h3>
                  <p className="text-zinc-500">
                    Learn the core concepts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">
                    Study Real Examples
                  </h3>
                  <p className="text-zinc-500">
                    Analyze practical use cases.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">
                    Build Mini Projects
                  </h3>
                  <p className="text-zinc-500">
                    Apply your knowledge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">
                    Create Portfolio Work
                  </h3>
                  <p className="text-zinc-500">
                    Showcase your skills publicly.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default StudyHub;