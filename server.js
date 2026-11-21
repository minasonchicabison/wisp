// server.js   (npm init -y && npm i wisp-server-node, with "type": "module" in package.json)
import http from "node:http";
import wisp from "wisp-server-node";

const server = http.createServer((req, res) => { res.writeHead(200); res.end("ok"); });
server.on("upgrade", (req, socket, head) => wisp.routeRequest(req, socket, head));
server.listen(process.env.PORT || 8080);
