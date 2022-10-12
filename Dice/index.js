var image=["Dice-1.svg",
            "Dice-2.svg",
            "Dice-3.svg",
            "Dice-4.svg",
            "Dice-5.svg",    
            "Dice-6.svg"
           ];

           let dice =document.querySelectorAll("img");

           function rollndice(){
                  dice.forEach(function(die){
                   die.classList.add("roll");
               });
               setTimeout(function(){
                dice.forEach(function(die){
                    die.classList.remove("roll");
               });

               let dice1=Math.floor(Math.random()*6)
               let dice2=Math.floor(Math.random()*6)
               let dice3=Math.floor(Math.random()*6)
    
               document.querySelector("#member_1").setAttribute("src",image[dice1])
               document.querySelector("#member_2").setAttribute("src",image[dice2])
               document.querySelector("#member_3").setAttribute("src",image[dice3])
                
               
        
              
              var max = -Infinity;
              var min = Infinity;
              var arr = [dice1,dice2,dice3]
              for(i=0;i<arr.length;i++)
              {
                  if(max<arr[i])
                  {
                      max=arr[i]
                      var samrat = i+1
                  }
                  if(min>arr[i])
                  {
                      min=arr[i]
                      var sinha = i+1
                  }

              }
              if(min==max){
              document.querySelector("#draw").innerHTML = "DRAW"
              document.querySelector("#winner").innerHTML = ""
              document.querySelector("#loser").innerHTML = ""
              document.querySelector("#Second").innerHTML = ""
              }
              else if(samrat==1){
                document.querySelector("#draw").innerHTML = ""
                document.querySelector("#winner").innerHTML = "Winner is Member A"
              }
              else if(samrat==2)
                document.querySelector("#winner").innerHTML = "Winner is Member B"
              else if(samrat==3)
                document.querySelector("#winner").innerHTML = "Winner is Member C"
                
                if(min==max){
                document.querySelector("#draw").innerHTML = "DRAW"
                
              }
                  else if(sinha==1){
                    document.querySelector("#draw").innerHTML = ""
                    document.querySelector("#loser").innerHTML = "Least is Member A"
                  }
                
              else if(sinha==2)
                document.querySelector("#loser").innerHTML = "Least is Member B"
              else if(sinha==3)
                document.querySelector("#loser").innerHTML = "Least is Member C"
              
            if(dice1!=max && dice1!=min)
               document.querySelector("#Second").innerHTML = "Second is Member A"
               else if(dice2!=max && dice2!=min)
               document.querySelector("#Second").innerHTML = "Second is Member B"
               else if(dice3!=max && dice3!=min)
               document.querySelector("#Second").innerHTML = "Second is Member C"
               
                      
           },
           100
           );
        }
     
        