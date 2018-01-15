# scdlib/node

> Some node.js utilites to ease learning for Stone Campus

## fs

What is the different between stat fstat and lstat functions in node js?

  * https://stackoverflow.com/questions/32478698/what-is-the-different-between-stat-fstat-and-lstat-functions-in-node-js

  1. stat follows symlinks. When given a path that is a symlink, it returns the
  stat of the target of the symlink.

  2. lstat doesn't follow symlinks. When given a path that is a symlink it
  returns the stat of the symlink and not its target.

  3. fstat takes a file descriptor rather than a path.
