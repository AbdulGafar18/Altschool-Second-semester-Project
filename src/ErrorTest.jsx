import { useState } from "react";

function Errortest (){ 
    const [ hasError,setHasError ]= useState(false); 

    if(hasError){
        throw new Error ( Oh......now, An error occurred somewhere in react tree)
        return (
            <div>
              <h2>Test Error Boundary here</h2>
              <button onClick={() => setHasError(true)}>Error Boundary Test</button>
            </div>
              );
    };
    }
    
    export default ErrorPage;
    

}
 