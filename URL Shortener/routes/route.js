const express=require('express');
const router= express.Router();
const URL=require('../models/url');
const shortid=require('shortid');

router.post("/",async(req,res)=>{
    const { url }= req.body;
    if (!url) {
        return res.status(400).json({
            error: "URL is required"
        });
    }
    const shortId= shortid();
    await URL.create({
      shortId:shortId,
      redirectURL:url,
      visitHistory:[]
   });
 const urls = await URL.find({});

    return res.render("home", {
        urls: urls,
        shortId: shortId
    });
});

router.get("/analytics/:id", async (req, res) => {
    const id = req.params.id;

    const url = await URL.findOne({
        shortId: id
    });

    if (!url) {
        return res.status(404).send("URL not found");
    }

    return res.render("analyticsid", {
        url: url
    });
});

router.get("/analytics", async (req, res) => {
    const urls = await URL.find({});

    return res.render("analytics", {
        urls: urls
    });
});

router.get("/:id",async(req,res)=>{
      const id=req.params.id;
      const entry=await URL.findOne({shortId:id}); 
      if(!entry){
 	 return res.status(400).json({
            error:"url not found"
      });
     }
    entry.visitHistory.push({
       timestamp:Date.now()
    });
    await entry.save();

    res.redirect(entry.redirectURL);
 });

module.exports=router;
