var AipFaceClient = require("baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "10639450";
var API_KEY = "UzrsoKDFnRdGRSPxZpSAHrKr";
var SECRET_KEY = "93UQEgIWHbK4XzT7SC7xjuWM9aoZL2lI";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);
var fs = require('fs');
var image = fs.readFileSync("assets/12.jpg").toString("base64");
// client.detect(image).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });
// 调用人脸检测
// 如果有可选参数
var options = {};
options["max_face_num"] = "2";
options["face_fields"] = "age,beauty";

// 带参数调用人脸检测
client.detect(image, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;

// var fs = require('fs');
// var uid = "1";
// var groupId = "123";
// var image = fs.readFileSync("assets/22.jpg").toString("base64");

// // 调用人脸认证
// client.verifyUser(uid, groupId, image).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });







