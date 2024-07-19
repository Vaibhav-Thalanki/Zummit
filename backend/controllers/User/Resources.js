const { Videos, Articles } = require("../../models/User/resourcesModel");

const getContent = async (req, res) => {
  try {
    const type = req.query.type;

    let recentlyAddedVideos = [];
    let trendingVideos = [];
    let recentlyAddedArticles = [];
    let trendingArticles = [];

    if (type === "all" || type === "videos") {
      recentlyAddedVideos = await Videos.find()
        .sort({ createdAt: -1 })
        .limit(5);
      trendingVideos = await Videos.find({ isTrending: true }).limit(5);
    }

    if (type === "all" || type === "articles") {
      recentlyAddedArticles = await Articles.find()
        .sort({ createdAt: -1 })
        .limit(5);
      trendingArticles = await Articles.find({ isTrending: true }).limit(5);
    }

    res.json({
      status: "success",
      data: {
        recently_added_videos: recentlyAddedVideos,
        trending_videos: trendingVideos,
        recently_added_articles: recentlyAddedArticles,
        trending_articles: trendingArticles,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const addVideo = async (req, res) => {
  try {
    const { title, url, img, duration, isTrending } = req.body;
    if (!title || !url || !img || !duration || !isTrending) {
      return res.status(400).send("please add all the fields");
    }
    const newVideo = new Videos({ title, url, img, duration, isTrending });
    await newVideo.save();
    res.status(201).json({ status: "success", data: newVideo });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const addArticle = async (req, res) => {
  try {
    const { title, url, img, author, isTrending } = req.body;
    const newArticle = new Articles({ title, url, img, author, isTrending });
    await newArticle.save();
    res.status(201).json({ status: "success", data: newArticle });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { getContent, addVideo, addArticle };
