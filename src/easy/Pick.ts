import type { Equal, Expect } from '@type-challenges/utils'

type MyPick<Type, Keys extends keyof Type> = { [Prop in Keys]: Type[Prop] }

interface Case {
  a: string
  b: string
  c: string
}

type Passed = Expect<Equal<MyPick<Case, 'a' | 'b'>, { a: string; b: string }>>
