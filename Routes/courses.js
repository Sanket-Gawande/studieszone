import express from "express";
import { coursesCollection } from "../Models/courses.js";

export const coursesRouter = express.Router();

coursesRouter.get("/all/:limit", async (req, res) => {
  const { limit } = req.params;
  try {
     const newlimit = limit == "All" ? null : limit;
     const courses = await coursesCollection.find({}).limit(newlimit);

     res.status(200).json({ courses });
  } catch (error) {
    res.status(400).json("bad request")
  }
 
});


/* 
const a = await coursesCollection.insertMany([
    {
      category: "frontend",
      name: "React developer",
      title: "Developing modern interactive websites with ReactJS ",
      price: 55,
      icon: "https://cdn-icons-png.flaticon.com/512/1125/1125761.png",
      slug: "react-developer",
      views: "32k",
      content: "21 videos",
      features: [
        "ReactJS is much easier to learn and use",
        "Virtual DOM, A virtual DOM object is a representation of the original DOM object",
        "ReactJS is known to be a great performer. This feature makes it much better than other frameworks out there today",

        "ReactJS uses JSX file which makes the application simple and to code as well as understand. ",
        "Creating Dynamic Web Applications Becomes Easier",
        "A ReactJS web application is made up of multiple components, and each component has its own logic and controls.",
      ],
    },
    {
      category: "frontend",
      name: "Web developer",
      title: "Learn building modern websites with html5 , css3 and js",
      price: 42,
      icon: "https://cdn-icons-png.flaticon.com/512/1125/1125761.png",
      slug: "html-css-js",
      views: "32k",
      content: "21 videos",
      features: ["Features 1", "Features 2", "Features 3", "Features 4"],
    },
  ]);
*/
