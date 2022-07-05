import type { Equal, Expect } from '@type-challenges/utils'

type MyPick<Type, Keys extends keyof Type> = { [Prop in Keys]: Type[Prop] }

interface Case {
  a: string
  b: string
  c: string
}

type TestCase = MyPick<Case, 'a' | 'b'>

type Passed = Expect<Equal<TestCase, { a: string; b: string }>>
