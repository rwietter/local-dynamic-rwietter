```diff
- import { promisify } from "util";
- const exec = promisify(child_process.exec);


- const { stdout: uptime } = await exec("uptime -p");
- const { stdout: os } = await exec("hostnamectl | grep System");
- const { stdout: lastCommit } = await exec(
-   `cd ${path_repository} && git show -s --format=%ci HEAD`
- );
- const { stdout: shell } = await exec("basename $SHELL");
- const { stdout: kernelVersion } = await exec("uname -r | cut -d '-' -f1");
- const { stdout: usedMem } = await exec("free -mh | awk '/^Mem/ {print $3}'");

+ const { stdout: uptime } = await $`uptime -p`
+ const { stdout: os } = await $`hostnamectl | grep System`
+ const { stdout: lastCommit } = await $`cd ${path_repository} && git show -s --format=%ci HEAD`
+ const { stdout: shell } = await $`basename $SHELL`
+ const { stdout: kernelVersion } = await $`uname -r | cut -d '-' -f1`
+ const { stdout: usedMem } = await $`free -mh | awk '/^Mem/ {print $3}'`
```