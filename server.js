const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const dataPath = path.join(root, "data", "portfolio.json");
const messagesPath = path.join(root, "data", "messages.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  res.end(body);
}

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function safeStaticPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const filePath = cleanPath === "/" ? "/index.html" : cleanPath;
  const resolved = path.resolve(root, `.${filePath}`);
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/api/portfolio") {
    return send(res, 200, JSON.stringify(readJson(dataPath, {}), null, 2));
  }

  if (req.method === "PUT" && url.pathname === "/api/portfolio") {
    try {
      const payload = JSON.parse(await collectBody(req));
      const portfolio = {
        ...payload,
        name: String(payload.name || "").trim(),
        alias: String(payload.alias || "").trim(),
        email: String(payload.email || "").trim(),
        bio: String(payload.bio || "").trim(),
        projects: Array.isArray(payload.projects) ? payload.projects : [],
        skills: Array.isArray(payload.skills) ? payload.skills : [],
        links: Array.isArray(payload.links) ? payload.links : []
      };

      if (!portfolio.name || !portfolio.bio) {
        return send(res, 400, JSON.stringify({ error: "Name and bio are required." }));
      }

      fs.writeFileSync(dataPath, `${JSON.stringify(portfolio, null, 2)}\n`);
      return send(res, 200, JSON.stringify({ ok: true }));
    } catch {
      return send(res, 400, JSON.stringify({ error: "Invalid portfolio payload." }));
    }
  }

  if (req.method === "POST" && url.pathname === "/api/contact") {
    try {
      const payload = JSON.parse(await collectBody(req));
      const message = {
        name: String(payload.name || "").trim(),
        email: String(payload.email || "").trim(),
        message: String(payload.message || "").trim(),
        createdAt: new Date().toISOString()
      };

      if (!message.name || !message.email || !message.message) {
        return send(res, 400, JSON.stringify({ error: "Name, email, and message are required." }));
      }

      const messages = readJson(messagesPath, []);
      messages.push(message);
      fs.writeFileSync(messagesPath, `${JSON.stringify(messages, null, 2)}\n`);
      return send(res, 201, JSON.stringify({ ok: true }));
    } catch {
      return send(res, 400, JSON.stringify({ error: "Invalid contact payload." }));
    }
  }

  if (req.method !== "GET") {
    return send(res, 405, "Method not allowed", "text/plain; charset=utf-8");
  }

  const filePath = safeStaticPath(url.pathname);
  if (!filePath) return send(res, 403, "Forbidden", "text/plain; charset=utf-8");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      send(res, 404, "Not found", "text/plain; charset=utf-8");
      return;
    }
    const type = mimeTypes[path.extname(filePath)] || "application/octet-stream";
    send(res, 200, file, type);
  });
});

server.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
