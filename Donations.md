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
      token\="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"  
      seller\="0xc02CfA39526bC088Ff0513D8169C2824fC7112D5"  
      paymentMethods\={\["crypto", "card"\]}  
      currency\="USD"  
    /\>  
  );  
}  
