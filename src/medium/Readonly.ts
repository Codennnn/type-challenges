type MyReadonly2<T, U extends keyof T = keyof T> = { readonly [Prop in U]: T[Prop] } & Omit<T, U>

interface Test {
  a: string
  b: string
  c: boolean
}

const testCase2: MyReadonly2<Test, 'a' | 'b'> = {
  a: 'x',
  b: 'y',
  c: false,
}

// @ts-expect-error
testCase2.a = 'xx'

// @ts-expect-error
testCase2.b = 'yy'

testCase2.c = true
