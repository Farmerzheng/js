/**
 * 后台通信函数(jsonp)
 * @param data {object} 上传参数集合
 * @param ajaxBtn {string|Element} 上传按钮
 * @param fnSuccess  {function}  成功后的回调函数, 参数为返回的json对象
 * @param fnError {function}  失败后的回调函数
 */
window.wordsBookAjax = function(url, data, fnSuccess, fnError, method) {

  var msg = "ok";

  // 默认是get方法
  method = method || "get";

  // 5s后数据没有返回回来就执行error
  var timeout = 10000; // 5秒超时

  //config url + request url .
  // url = Nemo.config.apiServer+url ;


  var dataType = "jsonp";

  /*
  $.ajax() 是jQuery库当中封装的有关网络请求的方法

   对$.ajax网络請求函函数进行再封装？

  所有的第三方网络请求函数都需要你再包装一层

   我们单词本这个项目高度依赖  jQuery库 当中的 $.ajax方法  
   一旦  jQuery库 当中的 $.ajax方法 出现问题，我们需要更改大量的
   网络请求代码，不利于项目维护，因而，我们需要对jQuery当中的网络请求函数进行再封装

   再封装好处？ 便于网络请求的维护，降低项目的依赖度
 
  */
  $.ajax({
    dataType: dataType,
    url: url,
    data: data,
    timeout: timeout,
    type: method,
    success: function(data, textStatus, jqXHR) {
      if (data.ret == 0) { fnSuccess(data) }
    },
    error: function(jqXHR, textStatus) {
      fnError();
    }
  });

}

const url = "http://app.sencha.com.cn/soya/apps/testdb/server/";
// 查询单词的请求参数
let showParam = {
  action: "wordList.list",
  perPage: 5,
  page: 1
};
// 增加单词的请求参数
let insertParam = {
  action: "wordList.insert",
  word: "",
  wordtype: "",
  pronounce: "",
  description: ""
};