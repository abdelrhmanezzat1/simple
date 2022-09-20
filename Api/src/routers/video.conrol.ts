import { RequestHandler } from "express";
import Video from "../modules/Videos";

export const cereteVideos: RequestHandler = async (req, res) => {
try {
    const exitsvideo = await Video.findOne({url:req.body.url})
    if(exitsvideo){
        return res.status(401).json({message:"this Url is Already exits"})
    }
    const video = new Video(req.body);
const SavedVideo= await video.save()
res.status(200).json(SavedVideo)
} catch (error) {
    res.status(301).json(error)
}
};

export const getVideos: RequestHandler =async (req, res) => {
    try {
        const getVideo = await Video.find()
    res.status(200).json(getVideo)
    } catch (error) {
        res.status(400).json(error)
    }
};
export const getVideo: RequestHandler = async (req, res) => {
try {
    const findVideo = await  Video.findById(req.params.id)
    res.status(200).json(findVideo)
} catch (error) {
    res.status(401).json(error)
}

};

export const updataVideos: RequestHandler = async (req, res) => {
  try {
    const updataVideo = await Video.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    res.status(200).json(updataVideo)
  } catch (error) {
    res.status(401).json(error)
  }
};

export const delVideos: RequestHandler = async (req, res) => {
const delvideo = await Video.findByIdAndDelete(req.params.id)
if (!delVideos) return res.status(204).json()
    return res.status(200).json(delVideos)
};
