import { typeSym, valueSym, ValueType } from './types'

export type Boolean<Value> = ValueType<'boolean', Value>

function create<Value>(value: Value): Boolean<Value> {
  return { [typeSym]: 'boolean', [valueSym]: value }
}

export const bool1 = create(undefined)

export const bool2 = { ...create(undefined), a: 1 }

export const bool3 = Object.assign(create(undefined), { a: 1 })
