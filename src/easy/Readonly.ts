type MyReadonly<Type> = { readonly [Prop in keyof Type]: Type[Prop] }

interface Case {
  a: string
  b: string
}

const todo: MyReadonly<Case> = {
  a: 'x',
  b: 'x',
}

// @ts-expect-error
todo.a = 'y'

// @ts-expect-error
todo.b = 'y'
