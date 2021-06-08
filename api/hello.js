const { Router } = require('express')
const router = Router()
const urlMetadata = require('url-metadata')

router.use('/metadata', async (req, res) => {
    url = req.query.url

    // res.json({
    //     data: url
    // })
    urlMetadata(url).then(
        function (metadata) { 
            if(metadata['og:title']) {
                res.json({
                    title: metadata['og:title'],
                    description: metadata['og:description'],
                    image: metadata['og:image']
                }).status(200)
            } else if (metadata.title !== null) {
                res.json({
                    title: metadata.title,
                    description: metadata.description,
                    image: metadata.image,
                }).status(200)
            } else {
                res.json({
                    message: 'No meta data found',
                    meta: metadata
                }).status(404)
            }
        },
        function (error) {
            res.json({
                error: error
            }).status(502)
        })
})

module.exports = router
