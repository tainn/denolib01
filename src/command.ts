export type CommandOpts = {
  silent?: boolean;
};

/**
 * Raw shell command
 *
 * Example code blocks:
 * - no wait, no save, no print
 * - wait, no save, no print
 * - wait, save, no print (most common)
 *
 * @example
 * ```ts
 * command("ls ...", { silent: true }).spawn();
 * ```
 *
 * @example
 * ```ts
 * const { success, code, signal } = await command("ls ...", { silent: true }).spawn().status;
 * ```
 *
 * @example
 * ```ts
 * const { success, code, signal, stdout, stderr } = await command("ls ...").output();
 * console.log(new TextDecoder().decode(stdout).trim());
 * ```
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
