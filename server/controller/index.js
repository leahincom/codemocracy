const Topic = require('../model/topic')

exports.listAll = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.send(topics);
    res.status(200);
  } catch (e) {
    console.log('controller.listAll: ', e);
    res.status(500);
  }
}

exports.createPost = async (req, res) => {
  try {
    const { title } = req.body;
    const topic = await Topic.create({title});
    res.send(topic);
    res.status(201);
  } catch (e) {
    console.log('controller.createPost: ', e);
    res.status(500);
  }
}

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Topic.findByIdAndDelete(id);
    res.status(204);
  } catch (e) {
    console.log('controller.deletePost: ', e);
    res.status(500);
  }
}

// where to put async
exports.upPost = (req, res) => votePost(req, res, 1);

exports.downPost = (req, res) => votePost(req, res, -1);

// const or function
const votePost = async (req, res, dir) => {
  try {
    const { id } = req.params; // req.params.id
    // syntax
    await Topic.findByIdAndUpdate(id, {score: score+dir});
    // $inc: {score: }

    // 1. findOneById
    // 2. add/decrease one
    // 3. findByIdAndUpdate: save again
    res.status(200);
  } catch (e) {
    console.log('controller.votePost: ', e);
    res.status(500);
  }
}