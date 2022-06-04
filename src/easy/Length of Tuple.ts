import type { Equal, Expect } from '@type-challenges/utils'

type Example = ['a', 'b', 'c', 'd']

type ArrayLength<Arr extends ReadonlyArray<any>> = Arr['length']

type Length = ArrayLength<Example>

type Passed = Expect<Equal<Length, 4>>
