import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function usePinkMode(key, initialValue) {
  
    const [pinkMode, setPinkMode] = useLocalStorage(key, initialValue);
     
   

    const turnPinkMode = e => {
      e.preventDefault();
     return pinkMode ? setPinkMode(false) : setPinkMode(true);
    };
    
    var body = document.body;

    useEffect(() => {
        if (pinkMode) {
            body.classList.add("pink-mode");
        } else {
              body.classList.remove("pink-mode");
        }
    }, [ pinkMode ]);
    
    return [ pinkMode, setPinkMode, turnPinkMode ];
};

  
  
  