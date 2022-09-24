const { Telegraf } = require("telegraf");

const TOKEN = "5741255379:AAHU47ylN6hY6RDziahp14brFfZkYTexkqM";

const web_link = "https://chimerical-centaur-4f0d19.netlify.app/";

const bot = new Telegraf(TOKEN);
bot.start((ctx) =>
  ctx.reply("Добро пожаловать", {
    reply_markup: {
      keyboard: [
        [{ text: "Посмотреть расписаник", web_app: { url: web_link } }],
      ],
    },
  })
);

bot.launch();
