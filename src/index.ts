type ReturnTypeIfFunction<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer U ? U : never;

type ReturnTupleTypes<T> = T extends (param: infer U) => infer V ? [V, U] : never;

type ReturnTypeIfFunction2<T> = T extends (...args: any[]) => infer U ? U : never;

type ReturnTupleTypes2<T extends (param: any) => any> = T extends (param: infer U) => infer V ? [V, U] : never;
