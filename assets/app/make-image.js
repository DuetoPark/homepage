// 사진 출력
let pictureTable = document.querySelector(".picture-table");
document.write("<table>");
var j = 0;
var num = 1;

  while(j<9){
    document.write("<tr>");
    var i = 0;
    while(i<6){
      document.write("<td><img src='../assets/images/"+num+".jpg' width='300px'></td>");
      i=i+1;
      num=num+1;
    }
    j=j+1;
    document.write("</tr>");
  }
document.write("</table>");
