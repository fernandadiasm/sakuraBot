const { SlashCommandBuilder } = require ("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ramom")
        .setDescription("Ramom com m ou com n?"),

    async execute(interaction) {
        await interaction.reply("É um cabeça de balão")
    }
}