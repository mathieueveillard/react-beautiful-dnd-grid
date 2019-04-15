export type Omit<P, O> = Pick<P, Exclude<keyof P, keyof O>>;
