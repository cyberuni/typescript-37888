import { FixedType, typeSym } from './types'

export type Null = FixedType<'null'>

export const nil = { [typeSym]: 'null' as const }
