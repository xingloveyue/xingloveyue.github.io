var posts=["2023/09/19/hello-world/","2023/09/22/Windows/DOC命令/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};