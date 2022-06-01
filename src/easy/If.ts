import type { Equal, Expect } from '@type-challenges/utils'

type If<Condition extends boolean, T, F> = Condition extends true ? T : F

type Passed = Expect<Equal<If<true, 'a', 'b'>, 'a'>>
type Passed2 = Expect<Equal<If<false, 'a', 'b'>, 'b'>>
