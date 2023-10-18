/**
 * @deprecated 
 */
export const isRequired = (value: unknown): boolean => Boolean(value);
export const isRequiredLength = (length: number, value?: string): boolean =>
  value?.trim().length === length;