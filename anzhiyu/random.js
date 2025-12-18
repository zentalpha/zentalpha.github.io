var posts=["2025/12/12/hello-world/","2025/12/13/关于本站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };