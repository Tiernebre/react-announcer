import { SampleType } from "./sample.type"

const someFunction = (input: SampleType): void => {
  console.log(input.foo)
}

someFunction({ 
  foo: 'hi'
})
