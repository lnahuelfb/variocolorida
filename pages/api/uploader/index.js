import { createRouter } from "next-connect";
import multer from "multer";
import path from "path";
import { handler } from "utils/handler";

const router = createRouter();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/public/images');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname
    );
  },
});

let upload = multer({
  storage: storage,
});

let uploadFile = upload.single("file");

router.use(uploadFile);

router.post(async (req, res) => {
  console.log("req.file", req.files);
  console.log("req.body", req.body);

  // let url = "http://" + req.headers.host;
  // let { filename = "no hay xdn't" } = req.file;
  // console.log(file.originalname)
  // res.status(200).send({
  //   result: result,
  //   url: url + "/public/" + req.file.filename,
  // });

  return res.send('Enviado')
});

router.get((req, res) => {
  res.json('Hello world!')
})

export default router.handler(handler);