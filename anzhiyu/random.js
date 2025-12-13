var posts=["2025/12/12/hello-world/","2025/12/13/关于搭建这个网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };