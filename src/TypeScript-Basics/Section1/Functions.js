function calculateTax(income, taxYear) {
    if ((taxYear || 2020) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(40000, 2023);
function calculateTaxYear(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTaxYear(40000, 2023);
calculateTaxYear(40000);
