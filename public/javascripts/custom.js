var publisherID = 1924613555777752;
var xmlResponse;
var firstResult;
var secondResult;
var thirdResult;
var firstResultJobTitle;
var firstResultCompanyName;
var secondResultCompanyName;
var thirdResultCompanyName;
var firstResultJobLocation;
var secondResultJobLocation;
var thirdResultJobLocation;
/*
  @description:  Gets lists of jobs and then process them to get an array of three jobs.
*/
function getIndeedResponse(query){
  var xhttp = new XMLHttpRequest();
    if ("withCredentials" in xhttp) {
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      processResponse(this);
    }
}
  };
  xhttp.open("GET", "http://api.indeed.com/ads/apisearch?publisher=1924613555777752&q="+String(query)+"&v=2", true);
  xhttp.send();
}
/*
  @description: Get the info we want and put it in an HTML file
*/
function processResponse(xml){
  var xmlDocument = xml.responseXML;
  var result;
  var items = [];
  var results = xml.getElementsByTagName("RESULTS");
  firstResult= results.getElementsByTagName("RESULT")[0];
  secondResult= results.getElementsByTagName("RESULT")[1];
  thirdResult = results.getElementsByTagName("RESULTS")[2];
  
  firstResultJobTitle = firstResult.getElementsByTagName("JOBTITLE");
  secondResultJobTitle = secondResult.getElementsByTagName("JOBTITLE");
  thirdResultJobTitle = thirdResult.getElementsByTagName("JOBTITLE");

  firstResultCompanyName = firstResult.getElementsByTagName("COMPANY");
  secondResultCompanyName = secondResult.getElementsByTagName("COMPANY");
  thirdResultCompanyName = thirdResult.getElementsByTagName("COMPANY");

  firstResultJobLocation = firstResult.getElementsByTagName("FORMATTEDLOCATION");
  secondResultJobLocation = secondResult.getElementsByTagName("FORMATTEDLOCATION");
  thirdResultJobLocation = thirdResult.getElementsByTagName("FORMATTEDLOCATION");

  $("#firstResultJobTitle").text(firstResultJobTitle);
  $("#secondResultJobTitle").text(secondResultJobTitle);
  $("#thirdResultJobTitle").text(thirdResultJobTitle);

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
      throw new Error('CORS not supported');
  }
}
/*
  @description: Gets average salaries based on query
*/  
function getAverageWorkLife(query){
  $.getJSON(query, function(data){
      $.each(data, function(key,val){
        if(key=="workLifeBalanceRating"){
          items.push(Double(val));

        }
      });
  });
  var counter = 0;
  var totalnum = 0;
  var avg = 0;
  for(i in items){
    counter+=items[i];
    totalnum++; 
  }
  avg = counter/items;
}

/**
  @description: Gets id of top three videos from query in YouTube
*/
function getIds(query){
  var results = You
}
/*
  @description: Creates three iframes that display YouTube videos given an ID.
*/
var exampleVideoIDs = ["JkR7xlYjalg"];
function displayVideos(videos){
  for(i in videos){
    document.write("<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/TzOfrY0EFtQ\" frameborder=\"0\" allowfullscreen></iframe>");
  }
}
/*
  @description: Gets list of top three colleges 
*/
function getListOfBestColleges(query){
 
}
getAverageWorkLife("http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=91513&t.k=heqCc4gY3nk&action=employers&q="+ "example");
