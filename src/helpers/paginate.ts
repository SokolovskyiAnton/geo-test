export function paginate<T>(items: T[], page: number, perPage: number) {
  const offset = perPage * (page - 1);
  return items.slice(offset, perPage * page);
}
