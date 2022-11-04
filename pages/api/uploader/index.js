import { createRouter } from "next-connect";
import multer from "multer";
import path from "path";

const router = createRouter();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname
    );
  },
});

let upload = multer({
  storage,
});

let uploadFile = upload.single("file");

router.use(uploadFile);

router.post(async (req, res) => {
  console.log("req.file", req.file);
  console.log("req.body", req.body);
  let url = "http://" + req.headers.host;
  let filename = req.file.filename;
  console.log(filename)
  res.status(200).send({
    result: result,
    url: url + "/public/" + req.file.filename,
  });
});

router.get((req, res) => {
  res.json('Hello world!')
})

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});