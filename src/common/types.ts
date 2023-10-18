export type KeysSameAsValues<Type> = {
  [Key in keyof Type]: Key;
};