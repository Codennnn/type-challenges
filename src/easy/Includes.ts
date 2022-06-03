import type { Equal, ExpectTrue } from '@type-challenges/utils'

type Includes<Array extends any[], Item> = Array extends [infer First, ...infer Rest]
  ? Equal<First, Item> extends true
    ? true
    : Includes<Rest, Item>
  : false

type TestCase = Includes<['a', 'b', 'c'], 'a'>

type Passed = ExpectTrue<TestCase>
