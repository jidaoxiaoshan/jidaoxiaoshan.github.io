let nav = document.getElementById("nav-link")
let navData = [
    {name: "首页", href: "index.html"},
    {name: "HTML", href: "html.html"},
    {name: "CSS", href: "css.html"},
    {name: "JavaScript基础", href: "jsbase.html"},
    {name: "DOM操作", href: "dom.html"},
    {name: "BOM操作", href: "bom.html"},
    {name: "jQuery", href: "jquery.html"},
    {name: "HTML5", href: "h5.html"},
    {name: "CSS3", href: "c3.html"},
    {name: "ajax", href: "ajax.html"},
    {name: "MySQL", href: "mysql.html"},
    {name: "MongoDB", href: "mongodb.html"},
    {name: "正则表达式", href: "regexp.html"},
    {name: "响应式布局&Bootstrap", href: "bootstrap.html"},
    {name: "rem布局&LESS", href: "less.html"},
    {name: "nodejs", href: "nodejs.html"},
    {name: "Git", href: "git.html"},
    {name: "js插件", href: "jsplugin.html"},
    {name: "微信小程序", href: "weapp.html"},
    {name: "小案例展示", href: "show.html"}
]
let navHtml = template("nav-link-tpl", navData)
nav.innerHTML = navHtml

let navLinkList = nav.children
let pageNavLinkList = document.getElementById("page-nav-link")

linkListStyle(navLinkList)
linkListStyle(pageNavLinkList.children)

function linkListStyle(ele) {
    for (let i = 0; i < ele.length; i++) {
        ele[i].onclick = function () {
            for (let i = 0; i < ele.length; i++) {
                ele[i].children[0].className = ""
            }
            this.children[0].className = "now"
        }
        ele[i].onmouseover = function () {
            this.children[0].style.color = "red"
            this.children[0].style.backgroundColor = "white"
        }
        ele[i].onmouseleave= function () {
            this.children[0].style.color = ""
            this.children[0].style.backgroundColor = ""
        }
    }
}