import type { Equal, Expect } from '@type-challenges/utils'

type MyExclude<UnionType, ExcludedMembers> = UnionType extends ExcludedMembers ? never : UnionType

type TestCase = MyExclude<'a' | 'b' | 'c', 'a'>

type Passed = Expect<Equal<TestCase, 'b' | 'c'>>
