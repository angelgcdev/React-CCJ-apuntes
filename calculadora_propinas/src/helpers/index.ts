export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("es-419", {
    style: "currency",
    currency: "BOB",
  }).format(quantity);
}
