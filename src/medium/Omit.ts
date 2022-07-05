import type { Equal, Expect } from '@type-challenges/utils'

type MyOmit<T, Keys extends keyof T> = {
  [Prop in keyof T as Prop extends Keys ? never : Prop]: T[Prop]
}

interface Test {
  a: boolean
  b: string
  c: string
}

type TestCase = MyOmit<Test, 'a'>

type Passed = Expect<Equal<TestCase, { b: string; c: string }>>
