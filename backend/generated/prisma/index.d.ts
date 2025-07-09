
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model url_directory
 * 
 */
export type url_directory = $Result.DefaultSelection<Prisma.$url_directoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Url_directories
 * const url_directories = await prisma.url_directory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Url_directories
   * const url_directories = await prisma.url_directory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.url_directory`: Exposes CRUD operations for the **url_directory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Url_directories
    * const url_directories = await prisma.url_directory.findMany()
    * ```
    */
  get url_directory(): Prisma.url_directoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    url_directory: 'url_directory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "url_directory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      url_directory: {
        payload: Prisma.$url_directoryPayload<ExtArgs>
        fields: Prisma.url_directoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.url_directoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.url_directoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>
          }
          findFirst: {
            args: Prisma.url_directoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.url_directoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>
          }
          findMany: {
            args: Prisma.url_directoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>[]
          }
          create: {
            args: Prisma.url_directoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>
          }
          createMany: {
            args: Prisma.url_directoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.url_directoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>[]
          }
          delete: {
            args: Prisma.url_directoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>
          }
          update: {
            args: Prisma.url_directoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>
          }
          deleteMany: {
            args: Prisma.url_directoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.url_directoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.url_directoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>[]
          }
          upsert: {
            args: Prisma.url_directoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_directoryPayload>
          }
          aggregate: {
            args: Prisma.Url_directoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl_directory>
          }
          groupBy: {
            args: Prisma.url_directoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Url_directoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.url_directoryCountArgs<ExtArgs>
            result: $Utils.Optional<Url_directoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    url_directory?: url_directoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model url_directory
   */

  export type AggregateUrl_directory = {
    _count: Url_directoryCountAggregateOutputType | null
    _avg: Url_directoryAvgAggregateOutputType | null
    _sum: Url_directorySumAggregateOutputType | null
    _min: Url_directoryMinAggregateOutputType | null
    _max: Url_directoryMaxAggregateOutputType | null
  }

  export type Url_directoryAvgAggregateOutputType = {
    id: number | null
  }

  export type Url_directorySumAggregateOutputType = {
    id: number | null
  }

  export type Url_directoryMinAggregateOutputType = {
    id: number | null
    originalUrl: string | null
    shortUrl: string | null
    createdAt: Date | null
  }

  export type Url_directoryMaxAggregateOutputType = {
    id: number | null
    originalUrl: string | null
    shortUrl: string | null
    createdAt: Date | null
  }

  export type Url_directoryCountAggregateOutputType = {
    id: number
    originalUrl: number
    shortUrl: number
    createdAt: number
    _all: number
  }


  export type Url_directoryAvgAggregateInputType = {
    id?: true
  }

  export type Url_directorySumAggregateInputType = {
    id?: true
  }

  export type Url_directoryMinAggregateInputType = {
    id?: true
    originalUrl?: true
    shortUrl?: true
    createdAt?: true
  }

  export type Url_directoryMaxAggregateInputType = {
    id?: true
    originalUrl?: true
    shortUrl?: true
    createdAt?: true
  }

  export type Url_directoryCountAggregateInputType = {
    id?: true
    originalUrl?: true
    shortUrl?: true
    createdAt?: true
    _all?: true
  }

  export type Url_directoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_directory to aggregate.
     */
    where?: url_directoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_directories to fetch.
     */
    orderBy?: url_directoryOrderByWithRelationInput | url_directoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: url_directoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned url_directories
    **/
    _count?: true | Url_directoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Url_directoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Url_directorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Url_directoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Url_directoryMaxAggregateInputType
  }

  export type GetUrl_directoryAggregateType<T extends Url_directoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl_directory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl_directory[P]>
      : GetScalarType<T[P], AggregateUrl_directory[P]>
  }




  export type url_directoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_directoryWhereInput
    orderBy?: url_directoryOrderByWithAggregationInput | url_directoryOrderByWithAggregationInput[]
    by: Url_directoryScalarFieldEnum[] | Url_directoryScalarFieldEnum
    having?: url_directoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Url_directoryCountAggregateInputType | true
    _avg?: Url_directoryAvgAggregateInputType
    _sum?: Url_directorySumAggregateInputType
    _min?: Url_directoryMinAggregateInputType
    _max?: Url_directoryMaxAggregateInputType
  }

  export type Url_directoryGroupByOutputType = {
    id: number
    originalUrl: string
    shortUrl: string
    createdAt: Date
    _count: Url_directoryCountAggregateOutputType | null
    _avg: Url_directoryAvgAggregateOutputType | null
    _sum: Url_directorySumAggregateOutputType | null
    _min: Url_directoryMinAggregateOutputType | null
    _max: Url_directoryMaxAggregateOutputType | null
  }

  type GetUrl_directoryGroupByPayload<T extends url_directoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Url_directoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Url_directoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Url_directoryGroupByOutputType[P]>
            : GetScalarType<T[P], Url_directoryGroupByOutputType[P]>
        }
      >
    >


  export type url_directorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalUrl?: boolean
    shortUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["url_directory"]>

  export type url_directorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalUrl?: boolean
    shortUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["url_directory"]>

  export type url_directorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalUrl?: boolean
    shortUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["url_directory"]>

  export type url_directorySelectScalar = {
    id?: boolean
    originalUrl?: boolean
    shortUrl?: boolean
    createdAt?: boolean
  }

  export type url_directoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalUrl" | "shortUrl" | "createdAt", ExtArgs["result"]["url_directory"]>

  export type $url_directoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "url_directory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      originalUrl: string
      shortUrl: string
      createdAt: Date
    }, ExtArgs["result"]["url_directory"]>
    composites: {}
  }

  type url_directoryGetPayload<S extends boolean | null | undefined | url_directoryDefaultArgs> = $Result.GetResult<Prisma.$url_directoryPayload, S>

  type url_directoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<url_directoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Url_directoryCountAggregateInputType | true
    }

  export interface url_directoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['url_directory'], meta: { name: 'url_directory' } }
    /**
     * Find zero or one Url_directory that matches the filter.
     * @param {url_directoryFindUniqueArgs} args - Arguments to find a Url_directory
     * @example
     * // Get one Url_directory
     * const url_directory = await prisma.url_directory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends url_directoryFindUniqueArgs>(args: SelectSubset<T, url_directoryFindUniqueArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url_directory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {url_directoryFindUniqueOrThrowArgs} args - Arguments to find a Url_directory
     * @example
     * // Get one Url_directory
     * const url_directory = await prisma.url_directory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends url_directoryFindUniqueOrThrowArgs>(args: SelectSubset<T, url_directoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_directory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_directoryFindFirstArgs} args - Arguments to find a Url_directory
     * @example
     * // Get one Url_directory
     * const url_directory = await prisma.url_directory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends url_directoryFindFirstArgs>(args?: SelectSubset<T, url_directoryFindFirstArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_directory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_directoryFindFirstOrThrowArgs} args - Arguments to find a Url_directory
     * @example
     * // Get one Url_directory
     * const url_directory = await prisma.url_directory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends url_directoryFindFirstOrThrowArgs>(args?: SelectSubset<T, url_directoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Url_directories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_directoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Url_directories
     * const url_directories = await prisma.url_directory.findMany()
     * 
     * // Get first 10 Url_directories
     * const url_directories = await prisma.url_directory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const url_directoryWithIdOnly = await prisma.url_directory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends url_directoryFindManyArgs>(args?: SelectSubset<T, url_directoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url_directory.
     * @param {url_directoryCreateArgs} args - Arguments to create a Url_directory.
     * @example
     * // Create one Url_directory
     * const Url_directory = await prisma.url_directory.create({
     *   data: {
     *     // ... data to create a Url_directory
     *   }
     * })
     * 
     */
    create<T extends url_directoryCreateArgs>(args: SelectSubset<T, url_directoryCreateArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Url_directories.
     * @param {url_directoryCreateManyArgs} args - Arguments to create many Url_directories.
     * @example
     * // Create many Url_directories
     * const url_directory = await prisma.url_directory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends url_directoryCreateManyArgs>(args?: SelectSubset<T, url_directoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Url_directories and returns the data saved in the database.
     * @param {url_directoryCreateManyAndReturnArgs} args - Arguments to create many Url_directories.
     * @example
     * // Create many Url_directories
     * const url_directory = await prisma.url_directory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Url_directories and only return the `id`
     * const url_directoryWithIdOnly = await prisma.url_directory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends url_directoryCreateManyAndReturnArgs>(args?: SelectSubset<T, url_directoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url_directory.
     * @param {url_directoryDeleteArgs} args - Arguments to delete one Url_directory.
     * @example
     * // Delete one Url_directory
     * const Url_directory = await prisma.url_directory.delete({
     *   where: {
     *     // ... filter to delete one Url_directory
     *   }
     * })
     * 
     */
    delete<T extends url_directoryDeleteArgs>(args: SelectSubset<T, url_directoryDeleteArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url_directory.
     * @param {url_directoryUpdateArgs} args - Arguments to update one Url_directory.
     * @example
     * // Update one Url_directory
     * const url_directory = await prisma.url_directory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends url_directoryUpdateArgs>(args: SelectSubset<T, url_directoryUpdateArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Url_directories.
     * @param {url_directoryDeleteManyArgs} args - Arguments to filter Url_directories to delete.
     * @example
     * // Delete a few Url_directories
     * const { count } = await prisma.url_directory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends url_directoryDeleteManyArgs>(args?: SelectSubset<T, url_directoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_directoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Url_directories
     * const url_directory = await prisma.url_directory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends url_directoryUpdateManyArgs>(args: SelectSubset<T, url_directoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_directories and returns the data updated in the database.
     * @param {url_directoryUpdateManyAndReturnArgs} args - Arguments to update many Url_directories.
     * @example
     * // Update many Url_directories
     * const url_directory = await prisma.url_directory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Url_directories and only return the `id`
     * const url_directoryWithIdOnly = await prisma.url_directory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends url_directoryUpdateManyAndReturnArgs>(args: SelectSubset<T, url_directoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url_directory.
     * @param {url_directoryUpsertArgs} args - Arguments to update or create a Url_directory.
     * @example
     * // Update or create a Url_directory
     * const url_directory = await prisma.url_directory.upsert({
     *   create: {
     *     // ... data to create a Url_directory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url_directory we want to update
     *   }
     * })
     */
    upsert<T extends url_directoryUpsertArgs>(args: SelectSubset<T, url_directoryUpsertArgs<ExtArgs>>): Prisma__url_directoryClient<$Result.GetResult<Prisma.$url_directoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Url_directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_directoryCountArgs} args - Arguments to filter Url_directories to count.
     * @example
     * // Count the number of Url_directories
     * const count = await prisma.url_directory.count({
     *   where: {
     *     // ... the filter for the Url_directories we want to count
     *   }
     * })
    **/
    count<T extends url_directoryCountArgs>(
      args?: Subset<T, url_directoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Url_directoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url_directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Url_directoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Url_directoryAggregateArgs>(args: Subset<T, Url_directoryAggregateArgs>): Prisma.PrismaPromise<GetUrl_directoryAggregateType<T>>

    /**
     * Group by Url_directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_directoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends url_directoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: url_directoryGroupByArgs['orderBy'] }
        : { orderBy?: url_directoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, url_directoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrl_directoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the url_directory model
   */
  readonly fields: url_directoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for url_directory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__url_directoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the url_directory model
   */
  interface url_directoryFieldRefs {
    readonly id: FieldRef<"url_directory", 'Int'>
    readonly originalUrl: FieldRef<"url_directory", 'String'>
    readonly shortUrl: FieldRef<"url_directory", 'String'>
    readonly createdAt: FieldRef<"url_directory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * url_directory findUnique
   */
  export type url_directoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * Filter, which url_directory to fetch.
     */
    where: url_directoryWhereUniqueInput
  }

  /**
   * url_directory findUniqueOrThrow
   */
  export type url_directoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * Filter, which url_directory to fetch.
     */
    where: url_directoryWhereUniqueInput
  }

  /**
   * url_directory findFirst
   */
  export type url_directoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * Filter, which url_directory to fetch.
     */
    where?: url_directoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_directories to fetch.
     */
    orderBy?: url_directoryOrderByWithRelationInput | url_directoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_directories.
     */
    cursor?: url_directoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_directories.
     */
    distinct?: Url_directoryScalarFieldEnum | Url_directoryScalarFieldEnum[]
  }

  /**
   * url_directory findFirstOrThrow
   */
  export type url_directoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * Filter, which url_directory to fetch.
     */
    where?: url_directoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_directories to fetch.
     */
    orderBy?: url_directoryOrderByWithRelationInput | url_directoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_directories.
     */
    cursor?: url_directoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_directories.
     */
    distinct?: Url_directoryScalarFieldEnum | Url_directoryScalarFieldEnum[]
  }

  /**
   * url_directory findMany
   */
  export type url_directoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * Filter, which url_directories to fetch.
     */
    where?: url_directoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_directories to fetch.
     */
    orderBy?: url_directoryOrderByWithRelationInput | url_directoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing url_directories.
     */
    cursor?: url_directoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_directories.
     */
    skip?: number
    distinct?: Url_directoryScalarFieldEnum | Url_directoryScalarFieldEnum[]
  }

  /**
   * url_directory create
   */
  export type url_directoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * The data needed to create a url_directory.
     */
    data: XOR<url_directoryCreateInput, url_directoryUncheckedCreateInput>
  }

  /**
   * url_directory createMany
   */
  export type url_directoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many url_directories.
     */
    data: url_directoryCreateManyInput | url_directoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url_directory createManyAndReturn
   */
  export type url_directoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * The data used to create many url_directories.
     */
    data: url_directoryCreateManyInput | url_directoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url_directory update
   */
  export type url_directoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * The data needed to update a url_directory.
     */
    data: XOR<url_directoryUpdateInput, url_directoryUncheckedUpdateInput>
    /**
     * Choose, which url_directory to update.
     */
    where: url_directoryWhereUniqueInput
  }

  /**
   * url_directory updateMany
   */
  export type url_directoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update url_directories.
     */
    data: XOR<url_directoryUpdateManyMutationInput, url_directoryUncheckedUpdateManyInput>
    /**
     * Filter which url_directories to update
     */
    where?: url_directoryWhereInput
    /**
     * Limit how many url_directories to update.
     */
    limit?: number
  }

  /**
   * url_directory updateManyAndReturn
   */
  export type url_directoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * The data used to update url_directories.
     */
    data: XOR<url_directoryUpdateManyMutationInput, url_directoryUncheckedUpdateManyInput>
    /**
     * Filter which url_directories to update
     */
    where?: url_directoryWhereInput
    /**
     * Limit how many url_directories to update.
     */
    limit?: number
  }

  /**
   * url_directory upsert
   */
  export type url_directoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * The filter to search for the url_directory to update in case it exists.
     */
    where: url_directoryWhereUniqueInput
    /**
     * In case the url_directory found by the `where` argument doesn't exist, create a new url_directory with this data.
     */
    create: XOR<url_directoryCreateInput, url_directoryUncheckedCreateInput>
    /**
     * In case the url_directory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<url_directoryUpdateInput, url_directoryUncheckedUpdateInput>
  }

  /**
   * url_directory delete
   */
  export type url_directoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
    /**
     * Filter which url_directory to delete.
     */
    where: url_directoryWhereUniqueInput
  }

  /**
   * url_directory deleteMany
   */
  export type url_directoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_directories to delete
     */
    where?: url_directoryWhereInput
    /**
     * Limit how many url_directories to delete.
     */
    limit?: number
  }

  /**
   * url_directory without action
   */
  export type url_directoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_directory
     */
    select?: url_directorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_directory
     */
    omit?: url_directoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Url_directoryScalarFieldEnum: {
    id: 'id',
    originalUrl: 'originalUrl',
    shortUrl: 'shortUrl',
    createdAt: 'createdAt'
  };

  export type Url_directoryScalarFieldEnum = (typeof Url_directoryScalarFieldEnum)[keyof typeof Url_directoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type url_directoryWhereInput = {
    AND?: url_directoryWhereInput | url_directoryWhereInput[]
    OR?: url_directoryWhereInput[]
    NOT?: url_directoryWhereInput | url_directoryWhereInput[]
    id?: IntFilter<"url_directory"> | number
    originalUrl?: StringFilter<"url_directory"> | string
    shortUrl?: StringFilter<"url_directory"> | string
    createdAt?: DateTimeFilter<"url_directory"> | Date | string
  }

  export type url_directoryOrderByWithRelationInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type url_directoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shortUrl?: string
    AND?: url_directoryWhereInput | url_directoryWhereInput[]
    OR?: url_directoryWhereInput[]
    NOT?: url_directoryWhereInput | url_directoryWhereInput[]
    originalUrl?: StringFilter<"url_directory"> | string
    createdAt?: DateTimeFilter<"url_directory"> | Date | string
  }, "id" | "shortUrl">

  export type url_directoryOrderByWithAggregationInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    _count?: url_directoryCountOrderByAggregateInput
    _avg?: url_directoryAvgOrderByAggregateInput
    _max?: url_directoryMaxOrderByAggregateInput
    _min?: url_directoryMinOrderByAggregateInput
    _sum?: url_directorySumOrderByAggregateInput
  }

  export type url_directoryScalarWhereWithAggregatesInput = {
    AND?: url_directoryScalarWhereWithAggregatesInput | url_directoryScalarWhereWithAggregatesInput[]
    OR?: url_directoryScalarWhereWithAggregatesInput[]
    NOT?: url_directoryScalarWhereWithAggregatesInput | url_directoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"url_directory"> | number
    originalUrl?: StringWithAggregatesFilter<"url_directory"> | string
    shortUrl?: StringWithAggregatesFilter<"url_directory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"url_directory"> | Date | string
  }

  export type url_directoryCreateInput = {
    originalUrl: string
    shortUrl: string
    createdAt?: Date | string
  }

  export type url_directoryUncheckedCreateInput = {
    id?: number
    originalUrl: string
    shortUrl: string
    createdAt?: Date | string
  }

  export type url_directoryUpdateInput = {
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type url_directoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type url_directoryCreateManyInput = {
    id?: number
    originalUrl: string
    shortUrl: string
    createdAt?: Date | string
  }

  export type url_directoryUpdateManyMutationInput = {
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type url_directoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type url_directoryCountOrderByAggregateInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type url_directoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type url_directoryMaxOrderByAggregateInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type url_directoryMinOrderByAggregateInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type url_directorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}