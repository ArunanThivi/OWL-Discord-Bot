const Discord = require("discord.js");
const client = new Discord.Client();
//const guildMember = new Discord.GuildMember();
const TOKEN = "MzgyMjg3MDA4OTg4NTI4NjQw.D226NQ.MTJsxalo9chh1qfMzYDMH1gbyVQ";
var emoji = new Array();
client.on("ready", () => {
    console.log("I am ready!");
    emoji = client.emojis.array();
});


client.on("message", (message) => {
    console.log(message.content);
    var msg = message.content.toLowerCase();
	if (msg.startsWith("!addEvent")){
		
	}
    if (msg.startsWith("!teaminfo")) {
        if (message.content.substring(10) == (emoji[0].toString()) || msg.substring(10) == ("outlaws")) {
            message.channel.send("**Houston Outlaws:**" +
                "\n#11 DPS - Matt \"Clockwork\" Dias :flag_us:" +
                "\n#49 DPS - Jiri \"LiNkzr\" Masalin :flag_fi:" +
                "\n#66 DPS - Jake \"JAKE\" Lyon :flag_us:" +
                "\n#12 DPS - Lucas \"Mendokusaii\" Hakansson :flag_se:" +				
                "\n#57 DPS - Won-hyeop \"ArHaN\" Jeong :flag_kr:" +
                "\n#69 Flex - Matt \"Coolmatt\" Iorio :flag_us:" +
                "\n#7  Flex - Alexandre \"SPREE\" Vanhomegen :flag_be:" +
                "\n#17 Tank - Austin \"Muma\" Wilmot :flag_us:" +
                "\n#2 Tank - Russell \"FCTFCTN\" Campbell :flag_us:" +
                "\n#13 Support - Daniel \"Boink\" Pence :flag_us:" +
                "\n#3  Support - Christopher \"Bani\" Benell :flag_ca:" +
                "\n#1  Support - Shane \"Rawkus\" Flaherty :flag_us:" +
                "\nHead Coach - Tae-yeoung \"TaiRong\" Kim :flag_kr:" +
                "\nCoach - Adam \"MESR\" De La Torre :flag_us:" +
                "\nCoach - Hyeon-Woo \"HyeonWoo\" Kim :flag_kr:" +
                "\nGM - Matt \"flame\" Rodriguez :flag_us:" +				
				"\n\nTeam Page: <https://outlaws.overwatchleague.com>" +
                "\nTeam Twitter: <https://twitter.com/OutlawsOW>" +
                "\nTeam Discord: <https://discord.gg/invite/outlaws>");
        }
        if (message.content.substring(10) == (emoji[1].toString()) || msg.substring(10) == ("fuel")) {
            message.channel.send("**Dallas Fuel:**" +
                "\n#13 DPS/Flex - Timo \"Taimou\" Kettunen :flag_fi:" +
                "\n#39 DPS - Hwang \"EFFECT\" Hyeon :flag_kr:" +
                "\n#39 DPS - Dylan \"aKm\" Bignet :flag_fr:" +
                "\n#23 Flex - Brandon \"Seagull\" Larned :flag_us:" +
                "\n#7  Flex - Pongphop \"Mickie\" Rattanasangchod :flag_th:" +
                "\n#55 Tank - Christian \"cocco\" Jonsson :flag_se:" +
                "\n#12 Tank - Min-seok \"OGE\" Son :flag_kr:" +
                "\n#4  Support - Sebastian \"chipshajen\" Widlund :flag_se:" +
                "\n#9  Support - Jonathan \"HarryHook\" Tejedor Rua :flag_es:" +
                "\n#10 Support - Benjamin \"uNKOE\" Chevasson :flag_fr:" +		
				"\n\nTeam Page: <https://fuel.overwatchleague.com>" +
                "\nTeam Subreddit: <https://reddit.com/r/DallasFuel>" +
                "\nTeam Twitter: <https://twitter.com/DallasFuel>" +
                "\nTeam Discord: <https://discord.gg/invite/dallasfuel>");
        }
        if (message.content.substring(10) == (emoji[2].toString()) || message.content.substring(10) == (emoji[3].toString()) || msg.substring(10) == ("gladiators")) {
            message.channel.send("**Los Angeles Gladiators:**" +
                "\n#4  DPS - Lane \"Surefour\" Roberts :flag_ca:" +
                "\n#1  DPS - Joon-seong \"Asher\" Choi :flag_kr:" +
                "\n#99 DPS - Joao Pedro \"Hydration\" Goes Telles :flag_br:" +
				"\n#99 DPS - Ted \"silkthread\" Wang :flag_us:" +
                "\n#31 Flex - Aaron \"Bischu\" Kim :flag_kr:" +				
                "\n#31 Flex - Jun-woo \"Void\" Kang :flag_kr:" +
                "\n#1  Tank - Chan-hyung \"Fissure\" Baek :flag_kr:" +
                "\n#24 Tank - Luis \"iRemiix\" Galarza Figueroa :flag_pr:" +
                "\n#10 Support - Jonas \"Shaz\" Suovaara :flag_fi:" +
                "\n#18 Support - Benjamin \"BigGoose\" Isohanni :flag_fi:" +
                "\nHead Coach - David \"Dpei\" Pei :flag_us:" +
                "\nCoach - Timothy \"Tim\" Albanese :flag_us:" +
                "\n\nTeam Page: <https://gladiators.overwatchleague.com>" +
                "\nTeam Subreddit: <https://reddit.com/LAGladiators>" +
                "\nTeam Twitter: <https://twitter.com/LAGladiators>" +
                "\nTeam Discord: <https://discord.gg/invite/gladiators>");
        }
        if (message.content.substring(10) == (emoji[3].toString()) || message.content.substring(10) == (emoji[2].toString()) || msg.substring(10) == ("valiant")) {
            message.channel.send("**Los Angeles Valiant:**" +
                "\n#0  DPS - Christopher \"GrimReality\" Schaefer :flag_us:" +
                "\n#3  DPS - Brady \"Agilities\" Girardi :flag_ca:" +
                "\n#99 DPS - Terrence \"SoOn\" Tarlier :flag_fr:" +
                "\n#10 Flex - Kang-jae \"envy\" Lee :flag_kr:" +
                "\n#16 Flex - Indy \"SPACE\" Halpern :flag_us: *inactive*" +
                "\n#1  Tank - Pan-seung \"Fate\" Koo :flag_kr:" +
                "\n#6  Tank - Seb \"numlocked\" Barton :flag_gb:" +
                "\n#24 Support - Benjamin \"uNKOE\" Chevasson :flag_fr:" +
                "\n#13 Support - Stefano \"Verbo\" Disalvo :flag_ca:" +
                "\n#7  Support - Young-seo \"KariV\" Park :flag_kr:" +
                "\nCoach - Dong Wook \"Ookz\" Kim :flag_kr:" +
                "\nCoach - Henry \"Cuddles\" Coxall :flag_gb:" +
                "\n\nTeam Page: <https://valiant.overwatchleague.com>" +
                "\nTeam Twitter: <https://twitter.com/LAValiant>" +
                "\nTeam Discord: <https://discord.gg/invite/RsJMuBZ>");
        }
        if (message.content.substring(10) == (emoji[4].toString()) || msg.substring(10) == ("dragons")) {
            message.channel.send("**Shanghai Dragons:**" +
                "\n#87 DPS - Weida \"Diya\" Lu :flag_cn:" +
                "\n#21 DPS - Chao \"Undead\" Fang :flag_cn:" +
                "\n#66 Flex - Junjie \"Xushu\" Liu :flag_cn:" +
                "\n#26 Tank - Wenhao \"Roshan\" Jing :flag_cn:" +
                "\n#72 Tank - Dongjian \"MG\" Wu :flag_cn:" +
                "\n#13 Support - Yage \"Altering\" Cheng :flag_cn:" +
                "\n#9  Support - Zhaoyu \"Fiveking\" Chen :flag_cn:" +
                "\n#7  Support - Peixuan \"Freefeel\" Xu :flag_cn:" +
                "\nHead Coach - Chen \"U4\" Congshan :flag_cn:" +
                "\nCoach - Jun Young \"Kong\" Son :flag_kr:" +
                "\n\nTeam Twitter: <https://twitter.com/ShanghaiDragons>");
        }
        if (message.content.substring(10) == (emoji[5].toString()) || msg.substring(10) == ("excelsior")) {
            message.channel.send("**New York Excelsior**" +
                "\n#9 DPS - Jong-yeol \"Saebyeolbe\" Park :flag_kr:" +
                "\n#21 DPS - Do-hyun \"Pine\" Kim :flag_kr:" +
                "\n#9 DPS - Hwang \"Fl0w3r\" Yeon-oh :flag_kr: *inactive*" +
                "\n#10 DPS\\Flex - Hye-sung \"Libero\" Kim :flag_kr:" +
                "\n#11 Flex - Tae-hong \"Mek0\" Kim :flag_kr:" +
                "\n#1 Tank - Jun-hwa \"Janus\" Song :flag_kr:" +
                "\n#7 Tank - Dong-gyu \"Mano\" Kim :flag_kr:" +
                "\n#44 Support - Sung-hyeon \"JJoNak\" Bang :flag_kr:" +
                "\n#2 Support - Yeon-joon \"ArK\" Hong :flag_kr:" +
                "\nCoach - Hyeong-seok \"WizardHyeong\" Kim :flag_kr:" +
                "\nCoach - Hyeon-sang \"Pavane\" Yu :flag_kr:" +
                "\nAssistant Coach - Andrew \"Andrew\" Kim :flag_us:" +
                "\n\nTeam Page: <https://www.nyxl.gg>" +
				"\nTeam Page (2) : <http://excelsior.overwatchleague.com>" +
				"\nTeam Subreddit: <https://reddit.com/r/NYXL>" +
                "\nTeam Twitter: <https://twitter.com/nyxl>"+
				"\nTeam Discord: <https://discordapp.com/invite/NYXL>");
        }
        if (message.content.substring(10) == (emoji[6].toString()) || message.content.substring(10) == (emoji[1].toString()) || msg.substring(10) == ("spitfire")) {
            message.channel.send("**London Spitfire:**" +
                "\n#20 DPS - Ji-hyuk \"Birdring\" Kim :flag_kr:" +
                "\n#13 DPS - Joon-yeong \"Profit\" Park :flag_kr:" +
                "\n#18 DPS - Dong-eun \"Hooreg\" Lee :flag_kr:" +
                "\n#19 Flex - Jun-ho \"Fury\" Kim :flag_kr:" +
                "\n#10 Flex - Seung-hyun \"WOOHYAL\" Sung :flag_kr:" +
                "\n#7  Tank - Jae-hee \"Gesture\" Hong :flag_kr:" +
                "\n#15 Support - Hyeon-woo Jo \"HaGoPeun\" Jo :flag_kr:" +
                "\n#4  Support - Won-sik \"Closer\" Jung :flag_kr:" +
                "\n#22 Support - Choi-tae \"Bdosin\" Seung :flag_kr:" +
                "\n#8  Support - Jong-seok \"NUS\" Kim :flag_kr:" +
                "\nHead Coach - Beoum-jun \"Bishop\" Lee :flag_kr:" +
                "\nCoach - Chang-geun \"changgoon\" Park :flag_kr:" +
                "\nCoach - Jeong-min \"Jfeel\" Kim :flag_kr:" +
				"\n\nTeam Page : <http://spitfire.overwatchleague.com>" +
                "\nTeam Subreddit: <https://reddit.com/r/LondonSpitfire>" +
                "\nTeam Twitter: <https://twitter.com/Spitfire>" +
                "\nTeam Discord: <https://discord.gg/invite/Spitfire>");
        }
        if (message.content.substring(10) == (emoji[7].toString()) || msg.substring(10) == ("dynasty")) {
            message.channel.send("**Seoul Dynasty:**" +
                "\n#1  DPS - Syung-sun \"Fleta\" Kim :flag_kr:" +
                "\n#27 DPS - Sang-beom \"Munchkin\" Byeon :flag_kr:" +
                "\n#0  DPS - Seok-woo \"Wekeed\" Choi :flag_kr:" +
                "\n#8  DPS - Joon-hyuk \"Bunny\" C :flag_kr:" +
                "\n#13 DPS\\Flex - Gi-do \"Gido\" Moon :flag_kr: *inactive*" +
                "\n#5  Flex - Joon-hyuk \"zunba\" Kim :flag_kr:" +
                "\n#39 Tank - Jae-mo \"xepheR\" Koo :flag_kr:" +
                "\n#3  Tank - Jin-hyuk \"Miro\" Gong :flag_kr:" +
                "\n#11 Tank - Dae-kuk \"KuKi\" Kim :flag_kr:" +
                "\n#14 Support\\Flex - Je-hong \"Ryujehong\" Ryu :flag_kr:" +
                "\n#7  Support - Jin-mo \"tobi\" Yang :flag_kr:" +
                "\nHead Coach - Kwang-jin Baek :flag_kr:" +
                "\nCoach - Ho-jeong \"alwaysoov\" Chae :flag_kr:" +
                "\nCoach - Yo-han \"nuGget\" Kim :flag_kr:" +
                "\nCoach - Ho-cheol \"Hocury\" Lee :flag_kr:" +
                "\n\nTeam Page: <https://dynasty.overwatchleague.com/en-us>" +
                "\nTeam Twitter: <https://twitter.com/SeoulDynasty>" +
				"\nTeam Discord: <https://discordapp.com/invite/cSMSDkb>");
        }
        if (message.content.substring(10) == (emoji[8].toString()) || msg.substring(10) == ("uprising")) {
            message.channel.send("**Boston Uprising:**" +
                "\n#7 DPS - Namju \"STRIKER\" Gwon :flag_kr:" +
                "\n#2  DPS - Stanislav \"Mistakes\" Danilov :flag_ru:" +
                "\n#28 DPS - Jonathan \"DreamKazper\" Sanchez :flag_us:" +
                "\n#3  Flex - Lucas \"NotE\" Meissner :flag_ca:" +
                "\n#18 Flex - WooYul \"Kalios\" Shin :flag_kr:" +
                "\n#1  Tank - YoungJin\" Gamsu\" Noh :flag_kr:" +
                "\n#10 Support - Mikias \"Snow\" Yohannes :flag_et:" +
                "\n#9  Support - Kristian \"Kellex\" Keller :flag_de:" +
                "\n#8  Support - SeHyun \"Neko\" Park :flag_kr:" +
                "\n#13 Support - Connor \"Avast\" Prince :flag_us:" +
                "\nPresident of Gaming - Chris \"HuK\" Loranger :flag_ca:" +
                "\nHead Coach - Da-hee \"Crusty\" Park :flag_kr:" +
                "\nAssistant Coach - Jackson \"Shake\" Kaplan :flag_us:" +
                "\nAssistant Coach - Rollon \"Mini\" Hamelin :flag_pf:" +
                "\n\nTeam Page: <https://www.bostonuprising.com>" +
				"\nTeam Page: <https://uprising.overwatchleague.com/en-us>" +
                "\nTeam Subreddit: <https://reddit.com/r/BostonUprising>" +
                "\nTeam Twitter: <https://twitter.com/BostonUprising>" +
                "\nTeam Discord: <https://discord.gg/invite/NjDsYw4>");
        }
        if (message.content.substring(10) == (emoji[9].toString()) || msg.substring(10) == ("fusion")) {
            message.channel.send("**Philadelphia Fusion:**" +
                "\n#18 DPS - Jae-hyeok \"Carpe\" Lee :flag_kr:" +
                "\n#1  DPS - Josh \"Eqo\" Corona :flag_il:" +
                "\n#13 DPS - George \"ShaDowBurn\" Gushcha :flag_ru:" +
                "\n#1  DPS - Simon \"snillo\" Ekstrom :flag_se: *inactive*" +
                "\n#7  Flex - Hong-joon \"HOTBA\" Choi :flag_kr:" +
                "\n#21 Flex - Gael \"Poko\" Gouzerch :flag_fr:" +
                "\n#54 Tank - Joona \"Fragi\" Laine :flag_fi:" +
                "\n#9  Tank - Su-min \"SADO\" Kim :flag_kr: *Suspended*" +
                "\n#44 Support - Isaac \"Boombox\" Charles :flag_gb:" +
                "\n#10 Support - Gouzerch \"Dayfly\" Park :flag_kr:" +
                "\n#23 Support - Joe \"Joemeister\" Gramano :flag_ca:" +
                "\n#8  Support - Alberto \"NeptuNo\" Gonzalez :flag_es:" +
                "\nHead Coach - Yann \"Kirby\" Luu :flag_fr:" +
                "\nCoach - Se-Hwi \"NamedHwi\" Go :flag_kr:" +
                "\nCoach - Elliot \"Hayes\" Hayes :flag_gb:" +
                "\n\nTeam Page: <https://fusion.overwatchleague.com>" +
                "\nTeam Subreddit: <https://reddit.com/r/PHL_Fusion>" +
                "\nTeam Twitter: <https://twitter.com/PHL_Fusion>" +
                "\nTeam Discord: <https://discordapp.com/invite/5Tk3EYX>");
        }
        if (message.content.substring(10) == (emoji[10].toString()) || msg.substring(10) == ("mayhem")) {
            message.channel.send("**Florida Mayhem:**" +
                "\n#2  DPS - Kevyn \"TviQ\" Lindstrom :flag_se:" +
                "\n#22 DPS - Andreas \"Logix\" Berghmans :flag_be:" +
                "\n#9  Flex - Tim \"Manneten\" Bylund :flag_se:" +
                "\n#3  Tank - Johan \"CWoosH\" Klingestedt :flag_se:" +
                "\n#7  Support - Aleksi \"Zuppeh\" Kuntsi :flag_fi:" +
                "\n#56 Support - Sebastian \"Zebbosai\" Olsson :flag_se:" +
                "\nHead Coach - Vytis \"Mineral\" Lasaitis :flag_se:" +
                "\n\nTeam Page: <https://www.mayhem.overwatchleague.com>" +
				"\nTeam Subreddit: <http://www.reddit.com/r/FloridaMayhem>" +
                "\nTeam Twitter: <https://twitter.com/FloridaMayhem>" +
                "\nTeam Discord: <https://discord.gg/invite/QV6XRX6>");
        }
        if (message.content.substring(10) == (emoji[11].toString()) || msg.substring(10) == ("shock")) {
            message.channel.send("**San Fransisco Shock**" /*\n**Roster:**"*/ +
                "\n#66 DPS - André \"IDDQD\" Dahlstrom :flag_se:" +
                "\n#9  DPS - Andreas \"Nevix\" Karlsson :flag_se:" +
                "\n#2  DPS - Jay \"sinatraa\" Won :flag_us *inactive*:" +
                "\n#13 DPS\\Flex - Andrej \"babybay\" Francisty :flag_us:" +
                "\n#6  DPS\\Flex - Dante \"Danteh\" Cruz :flag_us:" +
                "\n#27 Flex - Matthew \"super\" DeLisi :flag_us: *inactive*" +
                "\n#7  Tank - David \"nomy\" Ramirez :flag_mx:" +
                "\n#10 Support - Daniel \"dhaK\" Martinez Paz :flag_es:" +
                "\n#27 Support - Nikola \"sleepy\" Andrews :flag_us:" +
                "\nHead Coach - Brad \"Brad\" Rajani :flag_us:" +
                "\nCoach - Dillain \"LegitRc\" Odeneal :flag_us:" +
                "\n\nTeam Page: <https://www.shock.overwatchleague.com>" +
                "\nTeam Twitter: <https://twitter.com/SFShock>" +
                "\nTeam Discord: <https://discordapp.com/invite/3A7kXd7>");
        };
    }
    if (msg.startsWith("!info")) {
        message.channel.send("This bot was made by Arunan Thiviyanathan\n\nSpecial Thanks to Liquidpedia | Discord.js");
    }
    if (msg.startsWith("!help")) {
        message.author.send("Commands\n !addrole *team* - Add a team Flair!" +
            "\n!removerole *team* - Remove a team Flair!" +
            "\n!info *team* - Roster and Social Media information for all 12 OWL teams");
        message.author.send("Supported teams: \nOutlaws | Fuel | Gladiators | Valiant | Dragons | Excelsior\nSpitfire | Dynasty | Mayhem | Shock | Uprising | Fusion" +
            "\nEmotes work too! Try it out!");
    }
    if (msg.startsWith("!addrole")) {
       msg.channel.send(msg.channel.toString());
	   /* if (message.channel == TextChannel) {
            //if (msg.substring(9)==("outlaws")) {
            if (message.content.substring(9) == (emoji[0].toString()) || msg.substring(9) == ("outlaws")) {
                message.member.addRole(message.guild.roles.find("name", "Houston Outlaws"));
                message.author.send("Your role has been set to **Houston Outlaws**");
                message.delete(1000);
            }
            if (message.content.substring(9) == (emoji[1].toString()) || msg.substring(9) == ("fuel")) {
                message.member.addRole(message.guild.roles.find("name", "Dallas Fuel"));
                message.author.send("Your role has been set to **Dallas Fuel**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[2].toString()) || msg.substring(9) == ("gladiators")) {
                message.member.addRole(message.guild.roles.find("name", "Los Angeles Gladiators"));
                message.author.send("Your role has been set to **Los Angeles Gladiators**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[3].toString()) || msg.substring(9) == ("valiant")) {
                message.member.addRole(message.guild.roles.find("name", "Los Angeles Valiant"));
                message.author.send("Your role has been set to **Los Angeles Valiant**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[4].toString()) || msg.substring(9) == ("dragons")) {
                message.member.addRole(message.guild.roles.find("name", "Shanghai Dragons"));
                message.author.send("Your role has been set to **Shanghai Dragons**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[5].toString()) || msg.substring(9) == ("excelsior")) {
                message.member.addRole(message.guild.roles.find("name", "NYXL"));
                message.author.send("Your role has been set to **New York Excelsior**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[6].toString()) || message.content.substring(9) == (emoji[1].toString()) || msg.substring(9) == ("spitfire")) {
                message.member.addRole(message.guild.roles.find("name", "London Spitfire"));
                message.author.send("Your role has been set to **London Spitfire**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[7].toString()) || msg.substring(9) == ("dynasty")) {
                message.member.addRole(message.guild.roles.find("name", "Seoul Dynasty"));
                message.author.send("Your role has been set to **Seoul Dynasty**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[8].toString()) || msg.substring(9) == ("uprising")) {
                message.member.addRole(message.guild.roles.find("name", "Boston Uprising"));
                message.author.send("Your role has been set to **Boston Uprising**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[9].toString()) || msg.substring(9) == ("fusion")) {
                message.member.addRole(message.guild.roles.find("name", "Philadelphia Fusion"));
                message.author.send("Your role has been set to **Philadelphia Fusion**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[10].toString()) || msg.substring(9) == ("mayhem")) {
                message.member.addRole(message.guild.roles.find("name", "Florida Mayhem"));
                message.author.send("Your role has been set to **Florida Mayhem**");
                message.delete(1000)
            }
            if (message.content.substring(9) == (emoji[11].toString()) || msg.substring(9) == ("shock")) {
                message.member.addRole(message.guild.roles.find("name", "San Fransisco shock"));
                message.author.send("Your role has been set to **San Fransisco Shock**");
                message.delete(1000)
            }
        } else {
            message.channel.send("This command must be used in a Server Text Channel");
        }
    */}
    
	if (msg.startsWith("!removerole")) {
        if (message.content.substring(12) == (emoji[0].toString()) || msg.substring(12) == ("outlaws")) {
            message.member.removeRole(message.guild.roles.find("name", "Houston Outlaws"));
            message.author.send("The role **Houston Outlaws** has been removed");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[1].toString()) || msg.substring(12) == ("fuel")) {
            message.member.removeRole(message.guild.roles.find("name", "Dallas Fuel"));
            message.author.send("The role **Dallas Fuel has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[2].toString()) || msg.substring(12) == ("gladiators")) {
            message.member.removeRole(message.guild.roles.find("name", "Los Angeles Gladiators"));
            message.author.send("The role **Los Angeles Gladiators has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[3].toString()) || msg.substring(12) == ("valiant")) {
            message.member.removeRole(message.guild.roles.find("name", "Los Angeles Valiant"));
            message.author.send("The role **Los Angeles Valiant has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[4].toString()) || msg.substring(12) == ("dragons")) {
            message.member.removeRole(message.guild.roles.find("name", "Shanghai Dragons"));
            message.author.send("The role **Shanghai Dragons has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[5].toString()) || msg.substring(12) == ("excelsior")) {
            message.member.removeRole(message.guild.roles.find("name", "NYXL"));
            message.author.send("The role **New York Excelsior has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[6].toString()) || msg.substring(12) == ("spitfire")) {
            message.member.removeRole(message.guild.roles.find("name", "London Spitfire"));
            message.author.send("The role **London Spitfire has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[7].toString()) || msg.substring(12) == ("dynasty")) {
            message.member.removeRole(message.guild.roles.find("name", "Seoul Dynasty"));
            message.author.send("The role **Seoul Dynasty has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[8].toString()) || msg.substring(12) == ("uprising")) {
            message.member.removeRole(message.guild.roles.find("name", "Boston Uprising"));
            message.author.send("The role **Boston Uprising has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[9].toString()) || msg.substring(12) == ("fusion")) {
            message.member.removeRole(message.guild.roles.find("name", "Philadelphia Fusion"));
            message.author.send("The role **Philadelphia Fusion has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[10].toString()) || msg.substring(12) == ("mayhem")) {
            message.member.removeRole(message.guild.roles.find("name", "Florida Mayhem"));
            message.author.send("The role **Florida Mayhem has been removed**");
            message.delete(1000)
        }
        if (message.content.substring(12) == (emoji[11].toString()) || msg.substring(12) == ("shock")) {
            message.member.removeRole(message.guild.roles.find("name", "San Fransisco Shock"));
            message.author.send("The role **San Fransisco Shock has been removed**");
            message.delete(1000)
        }
    }

});

client.login(TOKEN);