export type CommandOpts = {
  silent?: boolean;
};

/**
 * Raw shell command
 *
 * No wait, no save, no print
 * @example
 * ```ts
 * command("ls ...", { silent: true }).spawn();
 * ```
 *
 * Wait, no save, no print
 * @example
 * ```ts
 * const { success, code, signal } = await command("ls ...", { silent: true }).spawn().status;
 * ```
 *
 * Wait, save, no print (most common)
 * @example
 * ```ts
 * const { success, code, signal, stdout, stderr } = await command("ls ...").output();
 * textDecode(stdout);
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

/**
 * Decoded stdout or stderr array
 *
 * @example
 * ```ts
 * const { stdout } = await command("ls ...").output();
 * textDecode(stdout);
 * ```
 */
export function textDecode(encoded: Uint8Array): string {
  return new TextDecoder().decode(encoded).trim();
}
