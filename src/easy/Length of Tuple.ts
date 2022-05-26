import type { Equal, Expect } from '@type-challenges/utils'

type Example = ['a', 'b', 'c', 'd']

type ArrayLength<Array extends ReadonlyArray<any>> = Array['length']

type Length = ArrayLength<Example>

type Passed = Expect<Equal<Length, 4>>
