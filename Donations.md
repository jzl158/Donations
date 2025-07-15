import { createThirdwebClient } from "thirdweb";  
import { PayEmbed, CheckoutWidget } from "thirdweb/react";

const client \= createThirdwebClient({  
  clientId: "....",  
});

function Example() {  
  return (  
    \<CheckoutWidget  
      client\={client}  
      chain\={defineChain(8453)}  
      amount\="50"  
      token\="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"  
      seller\="0x50d18D9F09f61B85B88BCE55d6fd50E245090746"  
      paymentMethods\={\["crypto", "card"\]}  
      currency\="USD"  
    /\>  
  );  
}  
