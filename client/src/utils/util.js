import {encryptEmo,decryptEmo} from './emoji'

export const cipherRot13 = (str) => {
    return str.replace(/[A-Za-z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      if (charCode>=65 && charCode <=90)
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
    else
    return String.fromCharCode(
        ((charCode + 13) <= 122) ? charCode + 13
                                : (charCode + 13) % 122 + 96
       );
      
    }
  }

  export const reverseString = (str) => {
    return str.split("").reverse().join("");
}

export const encryptEmoji = (str) => {
    return str.toLowerCase().split("").map(s=>{
        let code = s.charCodeAt()
        if( (code>=97 && code <=122))
        return encryptEmo[s]
        else return s
    }).join("")
}
export const decryptEmoji = (str) => {
    //console.log(Array.from(str))
    return Array.from(str).map(s=>{
        //console.log(encryptEmos)
        if(s in decryptEmo)
        return decryptEmo[s]
        else return s
    }).join("")
}