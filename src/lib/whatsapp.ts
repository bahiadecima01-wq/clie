export const WHATSAPP_NUMBER = "5573998109935";

export const GENERAL_MSG =
  "Olá! Conheci a CLIE Academy pelo site e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.";

export function treatmentMsg(name: string) {
  return `Olá! Gostaria de saber mais sobre o tratamento de ${name.toLowerCase()} e consultar os horários disponíveis.`;
}

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
