
exports.image = async (req, res) => {

    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.port}/images/${req.file.filename}`,
    });
};