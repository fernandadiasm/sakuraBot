const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist indiezinha do BRASIL"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/4oI407t75h4GQPPB7OHtMa?si=2600349759c147d6")
    }
}