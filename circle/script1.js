   

    var dataset = [30,30,30,30,30,30,30,30] ;
    var w1 = 1000 ;
    var h1 = 100 ;

    var svg1 = d3.select("body").append("svg").attr({width:w1 , height:h1}) 
    svg1.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .transition()
       .delay(function(d , i) {
           return 50 + i * 300
       })
       .duration(1000)
       .ease("bounce")
       .each("start",function(){
        d3.select("this")
        .attr({
          cx:function(d,i){return 50 + (i * 100) ;},
          cy:h1,
          r:0,
          fill:"green"
          });
       })
       .attr({
        cx:function(d,i){return 50 + (i * 100);},
        cy:h1 / 2,
        r: function (d) {return d;} ,
        fill:"blue"
       })
       .each("end",function() {
         d3.select("this")
          .transition()
          .duration(800)
          .attr({
            fill:"pink",
            r:0,
            cy:0
          });
       });

/*    var p1 = d3.select("body");
    p1.append("p")
         .text("うんち")
         .transition()
         .attr("px","100px")*/