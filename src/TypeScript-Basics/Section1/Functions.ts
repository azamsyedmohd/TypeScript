function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2020) < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(40_000, 2023);

function calculateTaxYear(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTaxYear(40_000, 2023);
calculateTaxYear(40_000);
