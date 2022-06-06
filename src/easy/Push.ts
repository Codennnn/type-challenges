import type { Equal, Expect } from '@type-challenges/utils'

type Push<Arr extends any[], Item> = [...Arr, Item]

type TestCase = Push<['a', 'b'], 'c'>

type Passed = Expect<Equal<TestCase, ['a', 'b', 'c']>>
