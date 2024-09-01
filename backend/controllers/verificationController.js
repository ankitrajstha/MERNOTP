const verifyCode = (req, res) => {
  const { code } = req.body;

  if (code.length !== 6 || isNaN(code)) {
    return res.status(400).json({ error: "Code must be of 6 digits." });
  }

  if (code[5] === "7") {
    return res.status(400).json({ error: "Code end with 7 is invalid" });
  }

  return res.status(200).json({ success: true });
};

module.exports = { verifyCode };
