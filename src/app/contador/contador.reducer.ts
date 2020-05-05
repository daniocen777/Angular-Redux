import * as fromCOntador from "./contador.actions";

export function contadorReducer(
  state: number = 10,
  action: fromCOntador.actions
) {
  switch (action.type) {
    case fromCOntador.INCREMENTAR:
      return (state += 1);
    case fromCOntador.DECREMENTAR:
      return (state -= 1);
    case fromCOntador.MULTIPLICAR:
      return state * action.payload;
    case fromCOntador.DIVIDIR:
      return state / action.payload;
    case fromCOntador.RESET:
      return (state = 0);

    default:
      return state;
  }
}
