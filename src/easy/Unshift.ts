import type { Equal, Expect } from '@type-challenges/utils'

type Unshift<Arr extends any[], Item> = [Item, ...Arr]

type TestCase = Unshift<[1, 2], 0>

type Passed = Expect<Equal<TestCase, [0, 1, 2]>>
