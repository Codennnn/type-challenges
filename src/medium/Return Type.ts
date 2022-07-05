import type { Equal, Expect } from '@type-challenges/utils'

type MyReturnType<Func extends (...args: any) => any> = Func extends (...args: any) => infer T
  ? T
  : any

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type TestCase = MyReturnType<typeof fn>

type Passed = Expect<Equal<TestCase, 1 | 2>>
