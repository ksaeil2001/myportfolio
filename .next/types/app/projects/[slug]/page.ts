// File: /workspace/myportfolio/src/app/projects/[slug]/page.tsx
import * as entry from '../../../../../src/app/projects/[slug]/page.js'
import type { ResolvingMetadata, ResolvingViewport } from 'next/dist/lib/metadata/types/metadata-interface.js'

type TEntry = typeof import('../../../../../src/app/projects/[slug]/page.js')

type SegmentParams<T extends object = unknown> = T extends Record<string, unknown>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T

// Check that the entry is a valid entry
checkFields<Diff<{
  default: (...args: unknown[]) => unknown
  config?: object
  generateStaticParams?: (...args: unknown[]) => unknown
  revalidate?: RevalidateRange<TEntry> | false
  dynamic?: 'auto' | 'force-dynamic' | 'error' | 'force-static'
  dynamicParams?: boolean
  fetchCache?: 'auto' | 'force-no-store' | 'only-no-store' | 'default-no-store' | 'default-cache' | 'only-cache' | 'force-cache'
  preferredRegion?: 'auto' | 'global' | 'home' | string | string[]
  runtime?: 'nodejs' | 'experimental-edge' | 'edge'
  maxDuration?: number
  
  metadata?: unknown
  generateMetadata?: (...args: unknown[]) => unknown
  viewport?: unknown
  generateViewport?: (...args: unknown[]) => unknown
  experimental_ppr?: boolean
  
}, TEntry, ''>>()


// Check the prop type of the entry function
checkFields<Diff<PageProps, FirstArg<TEntry['default']>, 'default'>>()

// Check the arguments and return type of the generateMetadata function
if ('generateMetadata' in entry) {
  checkFields<Diff<PageProps, FirstArg<MaybeField<TEntry, 'generateMetadata'>>, 'generateMetadata'>>()
  checkFields<Diff<ResolvingMetadata, SecondArg<MaybeField<TEntry, 'generateMetadata'>>, 'generateMetadata'>>()
}

// Check the arguments and return type of the generateViewport function
if ('generateViewport' in entry) {
  checkFields<Diff<PageProps, FirstArg<MaybeField<TEntry, 'generateViewport'>>, 'generateViewport'>>()
  checkFields<Diff<ResolvingViewport, SecondArg<MaybeField<TEntry, 'generateViewport'>>, 'generateViewport'>>()
}

// Check the arguments and return type of the generateStaticParams function
if ('generateStaticParams' in entry) {
  checkFields<Diff<{ params: SegmentParams }, FirstArg<MaybeField<TEntry, 'generateStaticParams'>>, 'generateStaticParams'>>()
  checkFields<Diff<{ __tag__: 'generateStaticParams', __return_type__: unknown[] | Promise<unknown[]> }, { __tag__: 'generateStaticParams', __return_type__: ReturnType<MaybeField<TEntry, 'generateStaticParams'>> }>>()
}

export interface PageProps {
  params?: Promise<SegmentParams>
  searchParams?: Promise<unknown>
}
export interface LayoutProps {
  children?: React.ReactNode

  params?: Promise<SegmentParams>
}

// =============
// Utility types
type RevalidateRange<T> = T extends { revalidate: unknown } ? NonNegative<T['revalidate']> : never

// If T is unknown, it will be an empty object type. Otherwise, it will be the same as Omit<T, keyof Base>.
type OmitWithTag<T, K extends PropertyKey> = Omit<T, K>
type Diff<Base, T extends Base, Message extends string = ''> = 0 extends (1 & T) ? object : OmitWithTag<T, keyof Base>

type FirstArg<T extends (...args: unknown[]) => unknown> = T extends (
  ...args: [infer A, unknown]
) => unknown
  ? unknown extends A
    ? unknown
    : A
  : never
type SecondArg<T extends (...args: unknown[]) => unknown> = T extends (
  ...args: [unknown, infer A]
) => unknown
  ? unknown extends A
    ? unknown
    : A
  : never
type MaybeField<T, K extends string> = T extends { [k in K]: infer G }
  ? G extends (...args: unknown[]) => unknown
    ? G
    : never
  : never



function checkFields<T extends { [k in PropertyKey]: never }>(): void {}

// https://github.com/sindresorhus/type-fest
type Numeric = number | bigint
type Zero = 0 | 0n
type Negative<T extends Numeric> = T extends Zero ? never : `${T}` extends `-${string}` ? T : never
type NonNegative<T extends Numeric> = T extends Zero ? T : Negative<T> extends never ? T : '__invalid_negative_number__'
