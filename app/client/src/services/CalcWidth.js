
export default function calcWidth(width){
  switch(width){
    case "20%": return "40%"
    case "40%": return "60%"
    case "60%": return "80%"
    case "80%": return "100%"
    case "100%": return "20%"
  }
}
