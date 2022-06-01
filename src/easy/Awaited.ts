import type { Equal, Expect } from '@type-challenges/utils'

type MyAwaited<Type> = Type extends Promise<infer T>
  ? T extends Promise<unknown>
    ? MyAwaited<T>
    : T
  : never

type TestCase = MyAwaited<Promise<Promise<string>>>

type Passed = Expect<Equal<TestCase, string>>
