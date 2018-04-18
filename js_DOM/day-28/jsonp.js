// jsonp.request(url,data,callback);
// url:https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su
// data
// {
//     wd :"张三",
//     json :1,
//     p:3,
//     cb:"";
// }

// callback : function


/**
 * request
 * url : String  请求的网址
 * data : Object 请求的参数
 * callback : Function 承购后的回调函数（function(){}）
 * option ： 参数对象
 *        {
 *         serverCallBackName:服务器自定义的全局函数名称,
 *         clientCallBackName:客户端自定义的全局函数名称
 *        }
 */
var jsonp = {
    request: function(url, data, option, callback) {

        console.log(this.analysisData(data));

        this.url = url + "?" + this.analysisData(data) + option.serverCallBackName + "=" + option.clientCallBackName;

        // 我们创建的全局函数有可能和程序当中的其他全局函数相冲突
        // 全局函数名称需要通过参数传入

        window[option.clientCallBackName] = callback;

        this.createScript();
        // console.log(this.url);
    },
    analysisData: function(data) {
        //将data对象变成网址当中的字符串
        var str = "";
        for (var key in data) {
            str += key + "=" + data[key] + "&"
        }
        return str;
    },
    createScript: function() {
        var oScript = document.createElement("script");
        oScript.src = this.url;
        // script表面只要添加到文档当中浏览器就会自动加载script的src链接文件
        document.body.appendChild(oScript);
        oScript.remove();
    }
}