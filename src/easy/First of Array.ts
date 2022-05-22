import type { Equal, Expect, ExpectFalse } from '@type-challenges/utils'

type Example = ['a', 'b', 'c']
type TestResult = 'a'

// 解法 1
type First<T extends any[]> = T[0] extends undefined ? never : T[0]

type TestCase = First<Example>

type Passed = Expect<Equal<TestCase, TestResult>>
type Passed_ = ExpectFalse<Equal<First<[]>, undefined>>

// 解法 2
type First2<T extends any[]> = T extends [infer FirstElement, ...any[]] ? FirstElement : never

type TestCase2 = First2<Example>

type Passed2 = Expect<Equal<TestCase2, TestResult>>
type Passed2_ = ExpectFalse<Equal<First2<[]>, undefined>>
