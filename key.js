export default function handler(req, res) {
  const hasKey = !!process.env.OPENAI_API_KEY;
  res.status(200).json({ hasKey });
}
