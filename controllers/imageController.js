require('dotenv').config()
exports.image = async (req, res) => {

    res.json({
        success: 1,
        image_url: `http://45.154.26.220:3000/images/${req.file.filename}`,
    });
};