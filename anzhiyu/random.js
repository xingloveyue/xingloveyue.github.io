var posts=["2022/08/04/Linux/Linux命令/","2022/06/20/Windows/DOC命令/","2022/06/10/Windows/批处理/","2022/07/04/Windows/arp断网攻击/","2022/08/16/Linux/http协议/","2022/06/28/Windows/系统密码破解/","2022/08/11/Linux/源安装/","2022/11/05/漏洞/sql注入/","2022/11/08/漏洞/xss/","2022/11/28/漏洞/业务安全/","2022/11/24/漏洞/失效的访问控制/","2022/11/21/漏洞/反序列化/","2022/11/15/漏洞/文件上传/","2022/11/19/漏洞/文件包含/","2022/11/17/漏洞/文件读取/","2022/11/27/漏洞/服务器请求伪造（SSRF）/","2022/12/16/漏洞复现/Drupal-XSS漏洞/","2022/11/10/漏洞/跨站请求伪造（csrf）/","2022/11/03/漏洞/渗透测试方法论/","2022/12/03/漏洞复现/IIS解析漏洞/","2022/12/20/漏洞复现/fastjson-1-2-24-反序列化导致任意命令执行漏洞/","2022/12/12/漏洞复现/joomlar370/","2022/12/09/漏洞复现/typecho反序列化/","2022/12/06/漏洞复现/metinfo-6-0-0-file-read/","2022/11/03/编程/exp/","2022/10/10/编程/php/","2022/10/16/编程/php函数/","2022/10/13/编程/php数组/","2022/09/02/编程/前端/","2022/10/22/编程/python基础/","2022/10/28/编程/错误异常处理与面向对象/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};