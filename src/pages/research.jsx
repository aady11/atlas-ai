import { useNavigate } from "react-router-dom";
import {
  Brain,
  BookOpen,
  Rocket,
  ArrowRight,
  History,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

function Research() {
  const navigate = useNavigate();

  const topic =
    localStorage.getItem("atlas_topic") || "Artificial Intelligence";

  const history =
    JSON.parse(localStorage.getItem("atlas_history")) || [];

  const getData = () => {
    const lower = topic.toLowerCase();

    if (lower.includes("ai")) {
      return {
        summary:
          "Artificial Intelligence focuses on building systems capable of reasoning, learning, and solving problems.",
        difficulty: "Advanced",
        concepts: [
          "Machine Learning",
          "Neural Networks",
          "Large Language Models",
          "Computer Vision",
        ],
        roadmap: [
          "Learn Python",
          "Understand ML Basics",
          "Build AI Projects",
          "Study Deep Learning",
          "Explore LLMs",
        ],
      };
    }

    if (lower.includes("finance")) {
      return {
        summary:
          "Finance studies money management, investments, markets, and wealth creation.",
        difficulty: "Intermediate",
        concepts: [
          "Investing",
          "Risk Management",
          "Cash Flow",
          "Valuation",
        ],
        roadmap: [
          "Learn Financial Basics",
          "Understand Markets",
          "Study Investing",
          "Portfolio Building",
        ],
      };
    }

    return {
      summary:
        "This topic offers strong learning opportunities and practical applications.",
      difficulty: "Intermediate",
      concepts: [
        "Fundamentals",
        "Applications",
        "Tools",
        "Strategy",
      ],
      roadmap: [
        "Learn Basics",
        "Explore Concepts",
        "Practice",
        "Build Projects",
      ],
    };
  };

  const data = getData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">

      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

      <div className="flex">

        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-72 min-h-screen border-r border-zinc-800 bg-black/30 backdrop-blur-xl p-6">

          <h1 className="text-3xl font-bold mb-10">
            AtlasAI
          </h1>

          <div className="space-y-4">

            <div className="bg-white text-black rounded-2xl p-4 font-semibold">
              Research
            </div>

            <button
              onClick={() => navigate("/studyhub")}
              className="w-full text-left border border-zinc-800 rounded-2xl p-4 hover:border-white transition"
            >
              Study Hub
            </button>

          </div>

          <div className="mt-10">

            <div className="flex items-center gap-2 mb-4">
              <History size={18} />
              <h2 className="font-semibold">
                Recent Searches
              </h2>
            </div>

            <div className="space-y-2">

              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-xl p-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Main */}
        <div className="flex-1 p-8">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >

            <div className="flex items-center justify-between mb-8">

              <div>
                <h1 className="text-5xl font-bold">
                  Research Workspace
                </h1>

                <p className="text-zinc-400 mt-2">
                  Topic: {topic}
                </p>
              </div>

              <div className="bg-white/10 border border-zinc-800 px-4 py-2 rounded-full">
                {data.difficulty}
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <Brain />
                <h2 className="text-xl font-semibold mt-4">
                  Summary
                </h2>
                <p className="text-zinc-300 mt-3">
                  {data.summary}
                </p>
              </div>

              <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <Target />
                <h2 className="text-xl font-semibold mt-4">
                  Difficulty
                </h2>
                <p className="text-4xl font-bold mt-3">
                  {data.difficulty}
                </p>
              </div>

              <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <BookOpen />
                <h2 className="text-xl font-semibold mt-4">
                  Key Concepts
                </h2>

                <div className="flex flex-wrap gap-3 mt-4">
                  {data.concepts.map((item, index) => (
                    <span
                      key={index}
                      className="bg-zinc-800 px-3 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl">
                <Rocket />
                <h2 className="text-xl font-semibold mt-4">
                  Learning Roadmap
                </h2>

                <div className="mt-6 space-y-4">

                  {data.roadmap.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <p>{step}</p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            <button
              onClick={() => navigate("/studyhub")}
              className="mt-8 bg-white text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-[1.02] transition"
            >
              Open Study Hub
              <ArrowRight size={18} />
            </button>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Research;