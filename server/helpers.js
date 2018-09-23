module.exports = {
  log: (req, res) => {
    const statusCode = {
      '200': '✅  (200)',
      '400': '❌  (400)',
      '404': '❓  (404)',
    };
    console.log(`${statusCode[res.statusCode]} •`, "\x1b[32m", req.method, "\x1b[0m", `• ${req.path}`);
  }
};
