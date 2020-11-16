// ==UserScript==
// @icon          
// @name                简单链接重定向修复
// @name:en             Simple link redirection fix
// @namespace           RC1844.LinkRedirectFix
// @author              RC1844
// @homepageURL         https://github.com/RC1844/LinkRedirectFix
// @supportURL          https://github.com/RC1844/LinkRedirectFix/issues
// @license             MIT License
// @description         简单链接重定向修复,用来跳过一些地址已有目标网站的重定向链接
// @description:en      Simple link redirection repair, used to skip some redirect links that have already targeted websites
// @include             *
// @version             1.0
// @run-at              document-start
// ==/UserScript==

function makeLink(url) {
    var num = url.indexOf("http");
    if (num != -1) {
        var link = url.substr(num);
        location.href = decodeURIComponent(link);
    }
}
makeLink(window.location.search);
makeLink(window.location.pathname);