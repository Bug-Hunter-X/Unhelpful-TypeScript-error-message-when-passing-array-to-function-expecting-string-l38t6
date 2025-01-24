# Unhelpful TypeScript error message when passing array to function expecting string

This repository demonstrates a scenario where TypeScript produces an unhelpful error message when an array is passed to a function that expects a string.  The error message itself doesn't clearly indicate the type mismatch.  This issue highlights the importance of clear and informative error messages in TypeScript.

## Bug Report

The TypeScript compiler does not provide a clear and concise error message when a function expecting a string argument is called with an array argument.

## Reproduction Steps

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler.
3. Observe the error message.

## Solution

The `bugSolution.ts` file demonstrates a solution where explicit type checking is added and/or a function overload is used to ensure clarity and prevent the error. The improved error message or type checking makes it easier to identify and solve the issue.

## How to improve the error message

- TypeScript could improve error messages by explicitly stating the expected type and the actual type received in cases like this.
- More context around the mismatch could also help.