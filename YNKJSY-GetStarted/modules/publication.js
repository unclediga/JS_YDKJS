function Publication(title, author, pubDate){
  var pubAPI = {
      print(){
        console.log(`title: ${title} author: ${author} pubDate: ${pubDate}`);
      }
  };
  return pubAPI;
}  


function Book(book){
  var pub = Publication(
        book.title,
        book.author,
        book.pubDate);
                  
  var pubAPI = {

      print(){
        pub.print();
        console.log(`ISBN: ${book.isbn}`);
      }
  };
  return pubAPI;
}


function BlogPost(title, author, pubDate, url){
  var pub = Publication(title,author,pubDate);
                  
  var pubAPI = {

      print(){
        pub.print();
        console.log(`URL: ${url}`);
      }
  };
  return pubAPI;
}

