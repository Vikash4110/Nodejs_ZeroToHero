const http = require("http");
const fs = require("fs");
const requests = require("requests");

// Read the home.html file asynchronously
fs.readFile("home.html", "utf-8", (err, homeFile) => {
  if (err) {
    console.error("Error reading home.html file:", err);
    return;
  }

  // Create the server
  const server = http.createServer((req, res) => {
    if (req.url == "/") {
      // Send the home.html file
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(homeFile);
    } else if (req.url == "/weather") {
      // Fetch weather data
      requests("http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1a566dc6c2cd6cd96c3d2efaf6cb14dc")
        .on("data", (chunk) => {
          const weatherData = JSON.parse(chunk.toString());
          // Process and format weather data
          const response = {
            location: weatherData.name,
            temp: (weatherData.main.temp - 273.15).toFixed(2), // Convert from Kelvin to Celsius
            min_temp: (weatherData.main.temp_min - 273.15).toFixed(2),
            max_temp: (weatherData.main.temp_max - 273.15).toFixed(2),
            weather: weatherData.weather[0].main,
          };
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(response));
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
        });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on http://127.0.0.1:8000");
  });
});
