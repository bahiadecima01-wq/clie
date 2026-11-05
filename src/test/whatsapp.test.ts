import { describe, it, expect } from "vitest";
import { waLink, treatmentMsg } from "@/lib/whatsapp";

describe("whatsapp links", () => {
  it("uses the clinic number", () => {
    expect(waLink("oi")).toBe("https://wa.me/5573998109935?text=oi");
  });
  it("mentions the selected treatment", () => {
    expect(treatmentMsg("Limpeza de Pele")).toBe(
      "Olá! Gostaria de saber mais sobre o tratamento de limpeza de pele e consultar os horários disponíveis.",
    );
  });
});
