$(document).ready(function() {

var start = 0;
var elapsed = 0;
var results = [];

 $("button").click(function(){

   if (start === 0){
      start = new Date();
   } else {
      // 
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60;
      minutes = minutes.toFixed(2); 

      // pushes member and minutes since timer started to array results
      results.push([this.className, minutes]);
      console.log(minutes);
      console.log(results);
   }
 });

// Keyboard shortcuts from 1 to 5 to represent the team members and space to represent silence
 $("button").keypress(function (e) {  
  if (e.which === 49) {
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60
      minutes = minutes.toFixed(2); 
      // pushes member and minutes since timer started to array results
      results.push(["Member A", minutes]);
  } else if(e.which === 50){
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60
      minutes = minutes.toFixed(2); 
      // pushes member and minutes since timer started to array results
      results.push(["Member B", minutes]);
  } else if(e.which === 51){
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60
      minutes = minutes.toFixed(2); 
      // pushes member and minutes since timer started to array results
      results.push(["Member C", minutes]);
  } else if(e.which === 52){
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60
      minutes = minutes.toFixed(2); 
      // pushes member and minutes since timer started to array results
      results.push(["Member D", minutes]);
  } else if(e.which === 53){
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60
      minutes = minutes.toFixed(2); 
      // pushes member and minutes since timer started to array results
      results.push(["Member E", minutes]);
  } else if(e.which === 32){
      elapsed = new Date() - start;
      var minutes = (elapsed / 1000)/ 60
      minutes = minutes.toFixed(2); 
      // pushes member and minutes since timer started to array results
      results.push(["Silence", minutes]);
  }
});

 // $(".button1").click(function(){
 //   // this.member = member;
 //   var elapsed = new Date() - start;
 //   var minutes = (elapsed / 1000)/ 60;
 //   console.log(minutes)
 // });

   // alasql('SELECT * INTO XLSX("myfile.xlsx",{headers:true}) FROM ?',results); NEED TO IMPORT A LIIBRARY http://alasql.org

//  function timeConversation(member){
//    this.member = member;
//    var start = new Date();
//    var elapsed = new Date() - start;
//    var minutes = (elapsed * 1000)/ 60
// }

});


// identify team member or silence or parallel

// create function that begins timer

// create function that stops timer and store result to array or object

// make keyboard shorcuts

// format minutes from number to Date

