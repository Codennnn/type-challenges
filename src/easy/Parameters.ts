import type { Equal, Expect } from '@type-challenges/utils'

type MyParameters<Func extends (...args: any) => any> = Func extends (...args: infer P) => any
  ? P
  : never

type TestCase = MyParameters<(a: string) => void>
type TestCase2 = Parameters<(a: string) => void>

type Passed = Expect<Equal<TestCase, TestCase2>>
