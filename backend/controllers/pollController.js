const Poll = require("../models/Poll");

const createPoll = async (req, res) => {
  const { question, options } = req.body;
  try {
    const poll = new Poll({ question, options });
    await poll.save();
    res.status(201).json(poll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPollResults = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPoll, getPollResults };
