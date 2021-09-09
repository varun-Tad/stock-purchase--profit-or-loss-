
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');




submitBtn.addEventListener('click',submitHandler);



function submitHandler()
{
    
     if(initialPrice.value === "" && stocksQuantity.value === "" && currentPrice.value === "")
     {
         outputBox.innerHTML= "Please fill out all Fields";
         outputBox.style.color = "red";
     }
     else
     {
        var ip = Number(initialPrice.value);
        var qty = Number(stocksQuantity.value);
        var curr = Number(currentPrice.value);
      
       
            
        calculateProfitAndLoss(ip,qty,curr);
     }


    

    
}



function calculateProfitAndLoss(initial, quantity, current)   //current-price  > initial price -> profit
{


    if(initial > current)
    {
            var loss = (initial- current)*quantity;
            var lossPercentage = (loss/initial) * 100;
            showOutput(`The loss is ${loss} and the percent is ${lossPercentage}% 👎`,1);
    }
    else if(current > initial)
    {
        var profit = (current-initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        showOutput(`The profit is ${profit} and the percent is ${profitPercentage}% 🎉`,2);
    }
    else
    {
        showOutput(`no pain no gain and no gain  no pain`,3);
    }

}


function showOutput(message,num)
{


  outputBox.innerHTML = message;

  if(num===1)
  {
    outputBox.style.color ="red";
  }
  else if(num === 2 || num===3 )
  {
     outputBox.style.color ="green";
  }
  

}