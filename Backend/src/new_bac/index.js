import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import os from 'os'


async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT} and accessible on local network`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
    const networkInterfaces = os.networkInterfaces();
    for (const name of Object.keys(networkInterfaces)) {
      for (const net of networkInterfaces[name]) {
        // Skip over non-IPv4 and internal
        if (net.family === 'IPv4' && !net.internal) {
          console.log(`Server accessible at: http://${net.address}:${PORT}`);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}

main();

