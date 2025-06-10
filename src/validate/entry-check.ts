// src/validate/entry-check.ts

import type { PageProps } from '../types/dynamicurl';

type FirstArg<T extends (...args: any) => any> = T extends (arg1: infer A, ...args: any) => any ? A : never;

function checkFields<_ extends { [k in keyof any]: never }>() {}

function dummyComponent(props: PageProps) {
  return null;
}

// This will throw a type error if the props don’t match your type
checkFields<Diff<PageProps, FirstArg<typeof dummyComponent>>>();

type Diff<Base, T extends Base, Message extends string = ''> = 0 extends (1 & T)
  ? {}
  : Omit<T, keyof Base>;
