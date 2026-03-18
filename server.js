const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// Data file path
const DATA_FILE = path.join(__dirname, "data.json");

// Load data
const loadData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    }
  } catch(e) {}
  return { sales: [] };
};

// Save data
const saveData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch(e) {
    return false;
  }
};

// GET sales history
app.get("/api/sales", (req, res) => {
  const data = loadData();
  res.json(data.sales || []);
});

// POST save sales entry
app.post("/api/sales", (req, res) => {
  try {
    const entry = req.body;
    if (!entry.date) return res.status(400).json({ error: "Date required" });
    const data = loadData();
    const exists = data.sales.findIndex(e => e.date === entry.date);
    if (exists >= 0) {
      data.sales[exists] = entry;
    } else {
      data.sales.push(entry);
    }
    data.sales.sort((a, b) => new Date(b.date) - new Date(a.date));
    saveData(data);
    res.json({ ok: true, total: data.sales.length });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE sales entry
app.delete("/api/sales/:date", (req, res) => {
  try {
    const data = loadData();
    data.sales = data.sales.filter(e => e.date !== req.params.date);
    saveData(data);
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// AI chat
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

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
