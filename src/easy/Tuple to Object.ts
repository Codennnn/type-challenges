import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['x', 'y', 'z'] as const
const result = { x: 'x' as const, y: 'y' as const, z: 'z' as const }

type TupleToObject<Type extends ReadonlyArray<string | number>> = {
  [Value in Type[number]]: Value
}

type TestCase = TupleToObject<typeof tuple>
type TestResult = typeof result

type Passed = Expect<Equal<TestCase, TestResult>>
