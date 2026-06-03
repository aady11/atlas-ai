import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Search,
  Sparkles,
  Rocket,
  BookOpen,
  ArrowRight,
} from "lucide-react";

function Home() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const startResearch = () => {
    if (!topic.trim()) return;

    localStorage.setItem("atlas_topic", topic);

    const history =
      JSON.parse(localStorage.getItem("atlas_history")) || [];

    if (!history.includes(topic)) {
      history.unshift(topic);
    }

    localStorage.setItem(
      "atlas_history",
      JSON.stringify(history.slice(0, 5))
    );

    navigate("/research");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-950 to-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Navbar */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="bg-white text-black p-3 rounded-2xl">
              <Brain size={24} />
            </div>

            <div>
              <h1 className="font-bold text-2xl">
                AtlasAI
              </h1>

              <p className="text-zinc-500 text-sm">
                Research Copilot
              </p>
            </div>

          </div>

          <div className="hidden md:block bg-white/5 border border-zinc-800 px-4 py-2 rounded-full">
            Version 1.0
          </div>

        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-24"
        >

          <div className="inline-flex items-center gap-2 bg-white/5 border border-zinc-800 px-4 py-2 rounded-full mb-8">

            <Sparkles size={16} />

            <span className="text-sm">
              AI-Powered Learning Workspace
            </span>

          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">

            Research Faster.
            <br />
            Learn Smarter.

          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-8 text-lg">

            AtlasAI helps students understand complex topics,
            generate learning roadmaps, and organize knowledge
            in one workspace.

          </p>

          {/* Search */}
          <div className="max-w-3xl mx-auto mt-12">

            <div className="bg-white/5 border border-zinc-800 backdrop-blur-xl rounded-3xl p-3 flex flex-col md:flex-row gap-3">

              <div className="flex items-center flex-1 px-4">

                <Search size={20} className="text-zinc-500" />

                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Artificial Intelligence, Finance, Space..."
                  className="bg-transparent w-full p-3 outline-none"
                />

              </div>

              <button
                onClick={startResearch}
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
              >
                Start Research
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl"
          >
            <Brain size={30} />

            <h2 className="text-xl font-semibold mt-5">
              Smart Research
            </h2>

            <p className="text-zinc-400 mt-3">
              Break down difficult concepts into easy-to-understand summaries.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl"
          >
            <BookOpen size={30} />

            <h2 className="text-xl font-semibold mt-5">
              Learning Roadmaps
            </h2>

            <p className="text-zinc-400 mt-3">
              Get structured paths to master any topic step by step.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl"
          >
            <Rocket size={30} />

            <h2 className="text-xl font-semibold mt-5">
              Project Ideas
            </h2>

            <p className="text-zinc-400 mt-3">
              Discover practical projects to apply what you learn.
            </p>

          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default Home;