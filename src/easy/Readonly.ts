type MyReadonly<Type> = { readonly [Prop in keyof Type]: Type[Prop] }

interface Case {
  a: string
  b: string
}

const testCase: MyReadonly<Case> = {
  a: 'x',
  b: 'x',
}

// @ts-expect-error
testCase.a = 'y'

// @ts-expect-error
testCase.b = 'y'
