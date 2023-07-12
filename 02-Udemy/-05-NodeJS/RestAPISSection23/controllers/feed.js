exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: "This is the first post",
    content: "This is my plalala",
  });
};
// to test RestApi without
exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  res.status(201).json({
    message: "Post Successfully",
    post: {
      id: new DataTransfer().toISOString(),
      title: title,
      content: content,
    },
  });
};
