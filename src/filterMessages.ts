import { Message, PartialMessage } from "discord.js";
import { Config } from "./config.js";

export function filterMessages(
  message: Message<boolean> | PartialMessage,
  config: Config
): boolean {
  if (
    config.mutedGuildsIds != undefined &&
    config.mutedGuildsIds?.length != 0 &&
    (config.mutedGuildsIds?.includes(message.guildId) ||
      config.mutedGuildsIds?.includes(Number(message.guildId)))
  )
    return false;

  if (
    config.allowedGuildsIds != undefined &&
    config.allowedGuildsIds?.length != 0 &&
    !config.allowedGuildsIds?.includes(message.guildId) &&
    !config.allowedGuildsIds?.includes(Number(message.guildId))
  )
    return false;

  if (
    config.mutedChannelsIds != undefined &&
    config.mutedChannelsIds?.length != 0 &&
    (config.mutedChannelsIds?.includes(message.channel.id) ||
      config.mutedChannelsIds?.includes(Number(message.channel.id)))
  )
    return false;

  if (
    config.allowedChannelsIds != undefined &&
    config.allowedChannelsIds?.length != 0 &&
    !config.allowedChannelsIds?.includes(message.channel.id) &&
    !config.allowedChannelsIds?.includes(Number(message.channel.id))
  )
    return false;

  if (
    config.mutedUsersIds != undefined &&
    config.mutedUsersIds?.length != 0 &&
    (config.mutedUsersIds?.includes(message.author.id) ||
      config.mutedUsersIds?.includes(Number(message.author.id)))
  )
    return false;

  if (
    config.allowedUsersIds != undefined &&
    config.allowedUsersIds?.length != 0 &&
    !config.allowedUsersIds?.includes(message.author.id) &&
    !config.allowedUsersIds?.includes(Number(message.author.id))
  )
    return false;

  if (
    config.channelConfigs != undefined &&
    config.channelConfigs?.[message.channel.id] != undefined &&
    config.channelConfigs?.[message.channel.id]?.allowed != undefined &&
    config.channelConfigs?.[message.channel.id]?.allowed?.length != 0 &&
    !config.channelConfigs?.[message.channel.id]?.allowed?.includes(
      message.author.id
    ) &&
    !config.channelConfigs?.[message.channel.id]?.allowed?.includes(
      Number(message.author.id)
    )
  )
    return false;

  if (
    config.channelConfigs?.[message.channel.id] != undefined &&
    config.channelConfigs?.[message.channel.id]?.muted != undefined &&
    config.channelConfigs?.[message.channel.id]?.muted?.length != 0 &&
    (config.channelConfigs?.[message.channel.id]?.muted?.includes(
      message.author.id
    ) ||
      config.channelConfigs?.[message.channel.id]?.muted?.includes(
        Number(message.author.id)
      ))
  )
    return false;

  return true;
}
