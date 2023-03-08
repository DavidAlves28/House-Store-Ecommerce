
// função retonr a cor do cards de acordo com o type com o pokemon!
export const PricesPokemon = (type) => {
    switch(type) {
      case "Bug":        
        return "149,90";
      case "Dark":
        return "1229,90";
      case "Dragon":
        return "279,90";
      case "Electric":
        return "519,90";
      case "Fairy":
        return "249,90";
      case "Fighting":
        return "619,90";
      case "Fire":
        return "39,90";
      case "Flying":
        return "829,90";
      case "Ghost":
        return "223,90";
      case "Grass":
        return "293,90";
      case "Ground":
        return "139,90";
      case "Ice":
        return "144,90";
      case "Normal":
        return "99,90";
      case "Poison":
        return "339,90";
      case "Psychic":
        return "1339,90";
      case "Rock":
        return "310,30";
      case "Steel":
        return "39,90";
      case "Water":
        return "139,90";
      default:
        return "999,99";
    }
  };