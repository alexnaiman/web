import {
  IHookReturn,
  IUseStorageValueOptions,
  useStorageValue,
} from '../useStorageValue/useStorageValue';
import { isBrowser } from '../util/const';

export function useSessionStorageValue<T = unknown>(
  key: string,
  defaultValue?: null,
  options?: IUseStorageValueOptions
): IHookReturn<T, typeof defaultValue, IUseStorageValueOptions<true | undefined>>;
export function useSessionStorageValue<T = unknown>(
  key: string,
  defaultValue: null,
  options: IUseStorageValueOptions<false>
): IHookReturn<T, typeof defaultValue, typeof options>;

export function useSessionStorageValue<T>(
  key: string,
  defaultValue: T,
  options?: IUseStorageValueOptions
): IHookReturn<T, typeof defaultValue, IUseStorageValueOptions<true | undefined>>;
export function useSessionStorageValue<T>(
  key: string,
  defaultValue: T,
  options: IUseStorageValueOptions<false>
): IHookReturn<T, typeof defaultValue, typeof options>;

export function useSessionStorageValue<T>(
  key: string,
  defaultValue?: T | null,
  options?: IUseStorageValueOptions
): IHookReturn<T, typeof defaultValue, typeof options>;

/**
 * Manages a single sessionStorage key.
 *
 * @param key Storage key to manage
 * @param defaultValue Default value to yield in case the key is not in storage
 * @param options
 */
export function useSessionStorageValue<T>(
  key: string,
  defaultValue: T | null = null,
  options: IUseStorageValueOptions = {}
): IHookReturn<T, typeof defaultValue, typeof options> {
  return useStorageValue(isBrowser ? sessionStorage : ({} as Storage), key, defaultValue, options);
}