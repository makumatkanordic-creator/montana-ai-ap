const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.post("/api/chat", async (req, res) => {
  try {
    const { prompt, system } = req.body;
    const KEY = process.env.ANTHROPIC_API_KEY;
    if (!KEY) return res.status(500).json({ error: "API key not configured" });
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: system || "You are Montana AI assistant.",
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await response.json();
    res.json({ text: data.content?.[0]?.text || "Error" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
