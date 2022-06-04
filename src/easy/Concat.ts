import type { Equal, Expect } from '@type-challenges/utils'

type Concat<Arr1 extends any[], Arr2 extends any[]> = [...Arr1, ...Arr2]

type TestCase = Concat<[1], [2]>

type Passed = Expect<Equal<TestCase, [1, 2]>>
