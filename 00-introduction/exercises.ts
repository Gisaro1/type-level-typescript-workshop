/* eslint-disable */

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
type Expect<T extends true> = T;
namespace zero {
  type Hello = "World";

  type test1 = Expect<Equal<Hello, "World">>;
}
