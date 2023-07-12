const { Client, Interaction, ApplicationCommandOptionType } = require('discord.js');
const User = require('../../models/User');

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  callback: async (client, interaction) => {
    if (!interaction.inGuild()) {
      interaction.reply({
        content: 'You can only run this command inside a server.',
        ephemeral: true,
      });
      return;
    }

    const targetUserId = interaction.options.get('user')?.value || interaction.member.id;

    await interaction.deferReply();

    const user = await User.findOne({ userId: targetUserId, guildId: interaction.guild.id });

    if (!user) {
      interaction.editReply(`<@${targetUserId}> doesn't have a profile yet.`);
      return;
    }

    interaction.editReply(
      targetUserId === interaction.member.id
        ? `Your balance is **${user.balance}**`
        : `<@${targetUserId}>'s balance is **${user.balance} <:DolphCoin:1127314299665264760><:DolphToken:1127314332317929503><:DolphinBucks:1127314182648373291>  **`
    );
  },

  name: 'balance',
  description: "See yours/someone else's balance",
  options: [
    {
      name: 'user',
      description: 'The user whose balance you want to get.',
      type: ApplicationCommandOptionType.User,
    },
  ],
};