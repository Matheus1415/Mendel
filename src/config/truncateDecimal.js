/**
 * Truncar um número decimal em um número decimal.
 * @param {number} number 
 * @param {int} decimalPlaces 
 * @returns {string}
 */
export function truncateDecimal(number, decimalPlaces) {
    let parts = number.toString().split(".");
    if (parts.length === 1) return parts[0]; // Não há parte decimal
    let decimalPart = parts[1].slice(0, decimalPlaces);
    return parts[0] + "." + decimalPart;
}