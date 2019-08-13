
// Update the "app.use(cors())" area to enable calls from other domains
// We must add headers to the response, which will enable the request to be successful
// So, add the next statement just above
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, HEAD, OPTIONS");
  next();
});
// Add support for CORS
app.use(cors());
