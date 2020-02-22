const calculate = require("./calculate");

describe("Testes de Cálculos", () => {
  test("Somar 2 números", () => {
    const sum = calculate(1, 2);

    expect(sum).toBe(3);
  });

  test("Se não tiver o segundo parâmetro, somar com 0", () => {
    const sum = calculate(4);

    expect(sum).toBe(4);
  });

  test("Somar 3 números", () => {
    const sum = calculate(1, 2, 3);

    expect(sum).toBe(6);
  });

  test("Somar diversos números", () => {
    const sum = calculate(1, 2, 3, 4, 5, 6);

    expect(sum).toBe(21);
  });
});
