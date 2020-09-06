const AWS = require("aws-sdk");
const fs = require("fs");

const REGION = "us-west-2";
const ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.S3_BUCKET;

AWS.config.region = REGION;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const uploadHelper = async (filename, path) => {
  const fileContent = fs.readFileSync(path);
  const params = {
    Bucket: BUCKET_NAME,
    Key: filename,
    Body: fileContent,
    ACL: "public-read",
  };
  await s3.upload(params, (err, data) => {
    if (err) {
      console.log(params);
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
  return `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${filename}`
};

module.exports = { uploadHelper };
