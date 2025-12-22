var posts=["2025/12/22/C语言分享/","2025/12/22/你是如何访问到这个网站的/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };