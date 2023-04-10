const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const router = express.Router();

router.use(express.json());

const data = [];

/*  post method */
router.post("/post", async (req, res) => {
    axios(req.body["URL"])
        .then((res) => {
            const htmlParser = res.data;
            const $ = cheerio.load(htmlParser);
            $(".searchresultitem", htmlParser).each(function () {
                const html = $("span").text();
                /*
                const title = $(this).find(".title").text();
                const price = $(this).find(".important").text();
                */
                data.push(html);
                console.log(data);
            });
        })
        .catch((error) => console.log(error));
})
router.get("/get", async (req, res) => {
    try{
        await res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;