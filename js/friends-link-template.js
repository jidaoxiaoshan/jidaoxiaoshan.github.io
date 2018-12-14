let friend = document.getElementById("friend")
let data = [
    {name: "GitHub", href: "https://github.com/"},
    {name: "w3school", href: "http://www.w3school.com.cn/"},
    {name: "博客园", href: "https://www.cnblogs.com/"},
    {name: "MongoDB", href: "https://www.mongodb.com/"},
    {name: "Bootstrap", href: "http://www.bootcss.com/"},
    {name: "鸠摩搜书", href: "https://www.jiumodiary.com/"},
    {name: "站长之家", href: "http://www.chinaz.com/"},
    {name: "掘金", href: "https://juejin.im/"},
    {name: "MDN", href: "https://developer.mozilla.org/zh-CN/"},
    {name: "W3CSchool", href: "https://www.w3cschool.cn/"},
    {name: "awesomes", href: "https://www.awesomes.cn/"},
    {name: "CNode", href: "https://cnodejs.org/"},
    {name: "nodeJS", href: "https://nodejs.org/en/"},
    {name: "新浪云", href: "http://www.sinacloud.com/"},
    {name: "在线工具", href: "http://tool.oschina.net/"},
    {name: "图灵机器人", href: "http://www.tuling123.com/"},
    {name: "UEditor", href: "https://ueditor.baidu.com/"},
    {name: "iconFont", href: "https://www.iconfont.cn/"},
    {name: "icoMoon", href: "https://icomoon.io/"},
    {name: "比特虫", href: "http://bitbug.net/"},
    {name: "wangEditor", href: "http://www.wangeditor.com/"},
    {name: "Less", href: "http://lesscss.cn/"},
    {name: "BootCDN", href: "https://www.bootcdn.cn/"},
    {name: "ECharts", href: "http://echarts.baidu.com/"}
]
let html = template("friend-link-tpl", data)
friend.innerHTML = html
