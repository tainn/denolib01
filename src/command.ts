export type CommandOpts = {
  silent?: boolean;
};

/**
 * command("rsync ...").spawn();
 * command("rm ...", { silent: true }).spawn();
 * const status = await command("mkdir ...").spawn().status;
 * const { success, code, signal, stdout, stderr } = await command("git ...").output();
 */
export function command(commandString: string, opts: CommandOpts = {}): Deno.Command {
  return new Deno.Command("sh", {
    args: [
      "-c",
      commandString,
    ],
    stdout: opts.silent ? "null" : undefined,
    stderr: opts.silent ? "null" : undefined,
  });
}
