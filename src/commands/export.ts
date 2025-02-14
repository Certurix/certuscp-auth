import { Params } from "../../@types/bot/index";
import { Command } from "../structures";

export default class ExportCommand extends Command {
  name = "export";
  description = "Exports all the data from memory to a JSON file.";
  aliases = ["exp", "backup"];
  usage = "export";
  requiredPerms = ["administrator"];

  execute(ctx: Params) {
    ctx.bot.backupOrImport(true, ctx.channel);
  }
}
