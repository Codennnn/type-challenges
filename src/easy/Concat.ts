import type { Equal, Expect } from '@type-challenges/utils'

type Concat<Array1 extends any[], Array2 extends any[]> = [...Array1, ...Array2]

type TestCase = Concat<[1], [2]>

type Passed = Expect<Equal<TestCase, [1, 2]>>
