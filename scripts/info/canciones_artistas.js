// Canciones y artistas incluídos
let allMusic = [

    {
        name: "Welcome to the Black Parade",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/Welcome_to_the_black_parade.mp3",
        lrc:"lrc/Welcome_to_the_black_parade.lrc",
        fav:false,
    },
    {
        name: "Migraine",
        artist:"Twenty Øne Piløts",
        img: "images/migraine.png",
        audio:"audio/Migraine.mp3",
        fav:false,
    },
    {
        name: "Inmortales",
        artist:"Funzo & Baby Loud",
        img: "images/inmortales.jpg",
        audio:"audio/Inmortales.mp3",
        fav:false,
    },
    {
        name: "Youngblood",
        artist:"5 Seconds of Summer",
        img: "images/5-seconds-of-summer-youngblood.jpg.opdownload",
        audio:"audio/5SOS_Youngblood.mp3",
        fav:false,
    },
    {
        name: "Another One Bites the Dust",
        artist:"Queen",
        img: "images/queen_the_game.jpg",
        audio:"audio/Another_One_Bites_the_Dust.mp3",
        fav:false,
    },
    {
        name: "As It Was",
        artist:"Harry Styles",
        img: "images/as_it_was.png",
        audio:"audio/Harry_Styles_As_It_Was.mp3",
        fav:false,
    },
    {
        name: "Quevedo: Bzrp Music Session",
        artist:["Bzrp", "Quevedo"],
        img: "images/quevedo_music_session.jpg",
        audio:"audio/QUEVEDO_BZRP_Music_Sessions_52.mp3",
        fav:false,
    },
    {
        name: "Tití me preguntó",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/titi_me_pregunto.mp3",
        fav:false,
    },
    {
        name: "Me Porto Bonito",
        artist:["Bad Bunny","Chencho Corleone"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Me_Porto_Bonito_(ft._Chencho_Corleone).mp3",
        fav:false,

    },
    {
        name: "Mary on a cross",
        artist:"Ghost",
        img: "images/mary_on_a_cross.jpg",
        audio:"audio/Ghost_Mary_on_a_cross.mp3",
        fav:false,
    },
    {
        name: "Ojitos Lindos",
        artist:["Bad Bunny","Azaelia"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Ojitos_lindos.mp3",
        fav:false,
    },
    {
        name: "Chicken Teriyaki",
        artist:"Rosalía",
        img: "images/motomami.jpg",
        audio:"audio/ROSALÍA_CHICKEN_TERIYAKI.mp3",
        fav:false,
    },
    {
        name: "Seven",
        artist:"Azaelia",
        img: "images/things_I_wanted_to_say_but_never_did.jpg",
        audio:"audio/natalie-jane-seven.mp3",
        fav:false,
    },
    {
        name: "Saoko",
        artist:"Rosalía",
        img: "images/motomami.jpg",
        audio:"audio/ROSALÍA_SAOKO.mp3",
        fav:false,
    },
    {
        name: "Memories",
        artist:"Conan Gray",
        img: "images/SUPERACHE.jfif",
        audio:"audio/conan-gray-memories.mp3",
        fav:false,
    },
    {
        name: "Perfect",
        artist:"One Direction",
        img: "images/made_in_the_am.jpg",
        audio:"audio/1D-Perfect.mp3",
        fav:false,
    },
    {
        name: "Romance",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {
        name: "Honey, this mirror isn't big enough for the two of us",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {   name: "Vampires will never hurt you",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
     },
    {
        name: "Drowning lessons",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {
        name: "Our Lady of Sorrows",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
     },
    {
        name: "Headfirst for halos",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {   name: "Skylines and turnstiles",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
     },
    {
        name: "Early sunsets over Monroeville",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/Early_Sunsets_Over_Monroeville",
        fav:false,
     },
    {
        name: "This is the best day ever",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {
        name: "Cubicles",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {
        name: "Demolition Lovers",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        audio:"audio/",
        fav:false,
    },
    {
        name: "Helena",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/Helena.mp3",
        fav:false,
    },

    {
        name: "Give 'em hell, kid",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "To the end",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/to_the_end.mp3",
        fav:false,
    },{
        name: "You know what they do to guys like us in prison",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I'm not okay (I promise)",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/not_okay",
        fav:false,
    },{
        name: "The ghost of you",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The jetset life is gonna kill you",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Interlude",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Thank you for the venom",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/thank_you_for_the_venom.mp3",
        fav:false,
    },{
        name: "Hang 'em high",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "It's not a fashion statement, it's a fucking deathwish",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Cemetery drive",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I never told you what I do for a living",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The end",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Dead!",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/Dead!.mp3",
        fav:false,
    },{
        name: "This is how I disappear",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The sharpest lives",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I don't love you",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/i_dont_love_you.mp3",
        fav:false,
    },{
        name: "House of wolves",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Cancer",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/Cancer.mp3",
        fav:false,
    },{
        name: "Mama",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Sleep",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/Mama_MCR.mp3",
        fav:false,
    },{
        name: "Teenagers",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/Teenagers.mp3",
        fav:false,
    },{
        name: "Disenchanted",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/Disenchanted.mp3",
        fav:false,
    },{
        name: "Famous last words",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/famous_last_words.mp3",
        fav:false,
    },{
        name: "Blood",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Heaven help us",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "My way home is through you",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Kill all your friends",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        audio:"audio/kill_all_your_friends.mp3",
        fav:false,
    },{
        name: "Look alive, sunshine",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Na na na (na na na na na na na na na)",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/Na_Na_Na.mp3",
        fav:false,
    },{
        name: "Bulletproof heart",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "SING",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Planetary (GO!)",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/planetary_go.mp3",
        fav:false,
    },{
        name: "The only hope for me is you",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Jet-Star and the Kobra Kid/traffic report",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Party Poison",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Save yourself, I'll hold them back",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "S/C/A/R/E/C/R/O/W",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Summertime",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/Summertime.mp3",
        fav:false,
    },{
        name: "DESTROYA",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "The kids from yesterday",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Goodnite, Dr. Death",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Vampire money",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Boy Division",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Tomorrow's Money",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "AMBULANCE",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Gun",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The World Is Ugly",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The Light Behind Your Eyes ",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Kiss the Ring",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Make Room!!!!",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Surrender the Night",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Burn Bright",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Estamos bien",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Mía",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Solo de mi",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Caro",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Si estuviésemos juntos",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "La Romana",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Si Veo a Tu Mamá",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "La Difícil",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Pero Ya No",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "La Santa",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/La_Santa.mp3",
        fav:false,
    },{
        name: "Yo Perreo Sola",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/Yo_perreo_sola.mp3",
        fav:false,
    },{
        name: "Bichiyal",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Soliá",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/BAD_BUNNY_SOLIA.mp3",
        fav:false,
    },{
        name: "La Zona",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Que Malo",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Vete",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Ignorantes",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/ignorantes.mp3",
        fav:false,
    },{
        name: "A Tu Merced",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Una Vez",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Safaera",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "25/8",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Está Cabrón Ser Yo",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Puesto Pa' Guerrial",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "P FKN R",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Hablamos Mañana",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "<3",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        audio:"audio/",
        fav:false,
    },{
        name: "Te Mudaste",
        artist:"Bad Bunny",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        audio:"audio/BB_TE_MUDASTE.mp3",
        fav:false,
    },{
        name: "La Noche de Anoche",
        artist:"Bad Bunny Ft. ROSALÍA",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        audio:"audio/la_noche_de_anoche.mp3",
        fav:false,
    },{
        name: "Yo Visto Así",
        artist:"Bad Bunny",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        audio:"audio/Yo_visto_asi.mp3",
        fav:false,
    },{
        name: "Dakiti",
        artist:"Bad Bunny ft. Jhay Cortez",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        audio:"audio/Dakiti.mp3",
        fav:false,
    },{
        name: "120",
        artist:"Bad Bunny",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        audio:"audio/120_BB.mp3",
        fav:false,
    },{
        name: "Antes que se acabe",
        artist:"Bad Bunny",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        audio:"audio/ANTES_QUE_SE_ACABE.mp3",
        fav:false,
    },{
        name: "Canción Con Yandel",
        artist:["Bad Bunny","Yandel"],
        img: "images/las-que-no-iban-a-salir.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Pa’ Romperla",
        artist:["Bad Bunny","Don Omar"],
        img: "images/las-que-no-iban-a-salir.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Moscow Mule",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Moscow_Mule_BB.mp3",
        fav:false,
    },{
        name: "Después de la playa",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/despues_de_la_playa_bb.mp3",
        fav:false,
    },{
        name: "Un ratito",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Un_Ratito_BB.mp3",
        fav:false,
    },{
        name: "Yo no soy celoso",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Yo_no_soy_celoso_BB.mp3",
        fav:false,
    },{
        name: "Tarot",
        artist:["Bad Bunny","Jhay Cortez"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Tarot_BB.mp3",
        fav:false,
    },{
        name: "Neverita",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Nevertita_BB.mp3",
        fav:false,
    },{
        name: "La corriente",
        artist:["Bad Bunny", "Tony Dize"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Corriente_BB.mp3",
        fav:false,
    },{
        name: "Efecto ",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Efecto.mp3",
        fav:false,
    },{
        name: "Party",
        artist:["Bad Bunny","Rauw Alejandro"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Party.mp3",
        fav:false,
    },{
        name: "Aguacero",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Aguacero.mp3",
        fav:false,
    },{
        name: "Enséñame a bailar",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Enséñame_a_Bailar.mp3",
        fav:false,
    },{
        name: "Dos mil 16",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/DosMil16_BB.mp3",
        fav:false,
    },{
        name: "El apagón",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/el_apagon.mp3",
        fav:false,
    },{
        name: "Otro atardecer",
        artist:["Bad Bunny","the Marías"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Otro_Atardecer.mp3",
        fav:false,
    },{
        name: "Un coco",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Un_Coco.mp3",
        fav:false,
    },{
        name: "Andrea",
        artist:["Bad Bunny","Buscabulla"],
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Andrea.mp3",
        fav:false,
    },{
        name: "Me fui de vacaciones",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Me_Fui_de_Vacaciones.mp3",
        fav:false,
    },{
        name: "Un verano sin ti",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/un_verano_sin_ti_bb.mp3",
        fav:false,
    },{
        name: "Agosto",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Bad_Bunny_Agosto.mp3",
        fav:false,
    },{
        name: "Callaíta",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        audio:"audio/Calladita_bb.mp3",
        fav:false,
    },{
        name: "Soltera (Remix)",
        artist:["Bad Bunny","Daddy Yankee","Lunay"],
        img: "images/epico.jpg",
        audio:"audio/soltera_remix.mp3",
        fav:false,
    },{
        name: "Tú no vive así",
        artist:["Arcangel","Bad Bunny","Dj Luian","Mambo Kingz"],
        img: "images/tu_no_vive_asi.jpg",
        audio:"audio/tu_no_vive_asi.mp3",
        fav:false,
    },{
        name: "Yonaguni",
        artist:"Bad Bunny",
        img: "images/yonaguni.png",
        audio:"audio/Yonaguni.mp3",
        fav:false,
    },{
        name: "Raised by Wolves",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Tragic Magic",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The Drug in Me Is You",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I'm Not a Vampire",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Good Girls Bad Guys",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Pick Up the Phone",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Don't Mess With Ouija Boards",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Sink or Swim",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Caught Like a Fly ",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Goodbye Graceful",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The Westerner",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Champion",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Bad Girls Club",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/FALLING_IN_REVERSE_Bad_Girls_Club.mp3",
        fav:false,
    },{
        name: "Rolling Stone",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Fashionably Late",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Alone",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Born to Lead",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "It's Over When It's Over",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Game Over",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Self-Destruct Personality",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Fuck the Rest",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Keep Holding On",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Drifter",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Where Have You Been",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Goddamn",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        audio:"audio/",
        fav:false,
    },{
        name: "Chemical Prisoner",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "God, If You Are Above...",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Sexy Drug",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Just Like You",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Guillotine IV (The Final Chapter)",
        artist:["Falling In Reverse","Massabo","Jacky Vincent"],
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Stay Away",
        artist:["Falling In Reverse", "Baskette", "Thomas Denny"],
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Wait and See",
        artist:["Falling In Reverse", "Massabo"],
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The Bitter End",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "My Heart's To Blame",
        artist:["Falling In Reverse", "Massabo"],
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Get Me Out",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Die For You",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Brother",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Coming Home",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Broken",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Loser",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Fuck You and All Your Friends",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I Hate Everyone",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I'm Bad at Life",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Hanging On",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Superhero",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Straight to Hell",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "I Don't Mind",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The Departure",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Right Now",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Paparazzi",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Him & I",
        artist:["G-Eazy", "Halsey"],
        img: "images/beautiful&damned.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Walls Could Talk",
        artist:"Complicated Broken",
        img: "images/complicated_broken.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Control",
        artist:"Complicated Broken",
        img: "images/new_therapy.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "You Should Be Sad",
        artist:"Halsey",
        img: "images/Manic.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Without Me",
        artist:"Complicated Broken",
        img: "images/fuck_me_im_famous.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Gasoline",
        artist:"Complicated Broken",
        img: "images/new_therapy.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Colors",
        artist:"Complicated Broken",
        img: "images/new_therapy.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Nightmare",
        artist:"Complicated Broken",
        img: "images/life_happens.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "11 Minutes",
        artist:["Yungblud", "Azaelia"],
        img: "images/11minutes.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "3 am",
        artist:"Complicated Broken",
        img: "images/future_nostalgia.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Hurricane",
        artist:"Complicated Broken",
        img: "images/new_therapy.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Sorry",
        artist:"Halsey",
        img: "images/Hopeless_Fountain_Kingdom.png",
        audio:"audio/",
        fav:false,
    },{
        name: "We Will Rock You",
        artist:"Queen",
        img: "images/news_of_the_world.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Bohemian Rhapsody",
        artist:"Queen",
        img: "images/night_at_the_opera.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Don't Stop Me Now",
        artist:"Queen",
        img: "images/Queen_Jazz.png",
        audio:"audio/",
        fav:false,
    },{
        name: "I Want to Break Free",
        artist:"Queen",
        img: "images/made_in_heaven.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Killer Queen",
        artist:"Queen",
        img: "images/sheer_heart_attack.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Love of My Life",
        artist:"Queen",
        img: "images/night_at_the_opera.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Radio Ga Ga",
        artist:"Queen",
        img: "images/works.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "The Show Must Go On",
        artist:"Queen",
        img: "images/innuendo.jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "Somebody to Love",
        artist:"Queen",
        img: "images/A_Day_at_the_Races_(Queen).jpg",
        audio:"audio/",
        fav:false,
    },{
        name: "We Are the Champions",
        artist:"Queen",
        img: "images/news_of_the_world.jpg",
        audio:"audio/",
        fav:false,
    }
]

let allAlbumes = [
    {
        name: "Three Cheers for Sweet Revenge",
        artist:"My Chemical Romance",
        img: "images/three_cheers.jpg",
        fav:false
    },{
        name: "Black Parade",
        artist:"My Chemical Romance",
        img: "images/black_parade.jpg",
        fav:false
    },{
        name: "Danger Days: The True Lives of the Fabulous Killjoys",
        artist:"My Chemical Romance",
        img: "images/danger_days.jfif",
        fav:false
    },{
        name: "I Brought You My Bullets, You Brought Me Your Love",
        artist:"My Chemical Romance",
        img: "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
        fav:false
    },{
        name: "Conventional Weapons",
        artist:"My Chemical Romance",
        img: "images/Mychemconvweap.jpg",
        fav:false
    },{
        name: "Blurryface",
        artist:"Twenty Øne Piløts",
        img: "images/blurryface.jpg",
        fav:false
    },{
        name: "Scaled and Icy",
        artist:"Twenty Øne Piløts",
        img: "images/scaled.jpg",
        fav:false
    },{
        name: "Twenty One Pilots",
        artist:"Twenty Øne Piløts",
        img: "images/top.jpg",
        fav:false
    },{
        name: "Trench",
        artist:"Twenty Øne Piløts",
        img: "images/trench.jpg",
        fav:false
    },{
        name: "Vessel",
        artist:"Twenty Øne Piløts",
        img: "images/migraine.png",
        fav:false
    },{
        name: "Regional at Best",
        artist:"Twenty Øne Piløts",
        img: "images/twenty-one-pilots-regional-at-best.jpg",
        fav:false
    },{
        name: "Un verano sin ti",
        artist:"Bad Bunny",
        img: "images/un_verano_sin_ti.jfif",
        fav:false
    },{
        name: "YHLQMDLG",
        artist:"Bad Bunny",
        img: "images/YHLQMDLG.jfif",
        fav:false
    },{
        name: "El último tour del mundo",
        artist:"Bad Bunny",
        img: "images/El_Ultimo_Tour_del_Mundo.png",
        fav:false
    },{
        name: "X 100pre",
        artist:"Bad Bunny",
        img: "images/X100pre.jpg",
        fav:false
    },{
        name: "Oasis",
        artist:"Bad Bunny",
        img: "images/oasis.jfif",
        fav:false
    },{
        name: "El Conejo Malo",
        artist:"Bad Bunny",
        img: "images/elconejomalo.jfif",
        fav:false
    },{
        name: "Las que no iban a salir",
        artist:"Bad Bunny",
        img: "images/las-que-no-iban-a-salir.jpg",
        fav:false
    },{
        name: "5 Seconds of Summer",
        artist:"5 Seconds of Summer",
        img: "images/5_Seconds_of_Summer.jpg",
        fav:false
    },{
        name: "Sounds Good Feels Good",
        artist:"5 Seconds of Summer",
        img: "images/Sounds_Good_Feels_Good.png",
        fav:false
    },{
        name: "Youngblood",
        artist:"5 Seconds of Summer",
        img: "images/5-seconds-of-summer-youngblood.jpg.opdownload",
        fav:false
    },{
        name: "Calm",
        artist:"5 Seconds of Summer",
        img: "images/5_Seconds_of_Summer_Calm.png",
        fav:false
    },{
        name: "5SOS5",
        artist:"5 Seconds of Summer",
        img: "images/5_Seconds_of_Summer_-_5SOS5.png",
        fav:false
    },{
        name: "5 Seconds of Summer (B-Sides and Rarities)",
        artist:"5 Seconds of Summer",
        img: "images/b_side.jfif",
        fav:false
    },{
        name: "Queen",
        artist:"Queen",
        img: "images/LP_Label_Queen.jpg",
        fav:false
    },{
        name: "Queen II",
        artist:"Queen",
        img: "images/QueenII.webp",
        fav:false
    },{
        name: "A Night at the Opera",
        artist:"Queen",
        img: "images/night_at_the_opera.jpg",
        fav:false
    },{
        name: "News of the World",
        artist:"Queen",
        img: "images/news_of_the_world.jpg",
        fav:false
    },{
        name: "The Miracle",
        artist:"Queen",
        img: "images/the_miracle.jpg",
        fav:false
    },{
        name: "Jazz",
        artist:"Queen",
        img: "images/Queen_Jazz.png",
        fav:false
    },{
        name: "Hot Space",
        artist:"Queen",
        img: "images/hot_space.jpg",
        fav:false
    },{
        name: "Innuendo",
        artist:"Queen",
        img: "images/innuendo.jpg",
        fav:false
    },{
        name: "Made in Heaven",
        artist:"Queen",
        img: "images/made_in_heaven.jpg",
        fav:false
    },{
        name: "A Day at the Races",
        artist:"Queen",
        img: "images/A_Day_at_the_Races_(Queen).jpg",
        fav:false
    },{
        name: "A Kind of Magic",
        artist:"Queen",
        img: "images/kind_of_magic.jpg",
        fav:false
    },{
        name: "The Works",
        artist:"Queen",
        img: "images/works.jpg",
        fav:false
    },{
        name: "Sheer Heart Attack",
        artist:"Queen",
        img: "images/sheer_heart_attack.jpg",
        fav:false
    },{
        name: "The Game",
        artist:"Queen",
        img: "images/The_Game.webp",
        fav:false
    },{
        name: "Live Killers",
        artist:"Queen",
        img: "images/liveKillers.jpg",
        fav:false
    },{
        name: "Live Magic",
        artist:"Queen",
        img: "images/live_magic.jpg",
        fav:false
    },{
        name: "Queen at the Beeb",
        artist:"Queen",
        img: "images/Queen_At_The_Beeb.png",
        fav:false
    },{
        name: "Harry's House",
        artist:"Harry Styles",
        img: "images/harrys_house.jpg",
        fav:false
    },{
        name: "Harry Styles",
        artist:"Harry Styles",
        img: "images/artist_profile/harry_styles.jfif",
        fav:false
    },{
        name: "Fine Line",
        artist:"Harry Styles",
        img: "images/Harry_Styles_Fine_Line.png",
        fav:false
    },{
        name: "The Drug In Me Is You",
        artist:"Falling In Reverse",
        img: "images/The_Drug_in_Me_Is_You.jpg",
        fav:false
    },{
        name: "Fashionably Late",
        artist:"Falling In Reverse",
        img: "images/fashionably_late.png",
        fav:false
    },{
        name: "Just Like You",
        artist:"Falling In Reverse",
        img: "images/just_like_you.jpg",
        fav:false
    },{
        name: "Coming Home",
        artist:"Falling In Reverse",
        img: "images/coming_home.jpg",
        fav:false
    },{
        name: "If I Can't Have Love, I Want Power",
        artist:"Halsey",
        img: "images/If_I_Can't_Have_Love,_I_Want_Power_by_Halsey.png",
        fav:false
    },{
        name: "Badlands",
        artist:"Halsey",
        img: "images/Badlands.jpg",
        fav:false
    },{
        name: "Hopeless Fountain Kingdom",
        artist:"Halsey",
        img: "images/Hopeless_Fountain_Kingdom.png",
        fav:false
    },{
        name: "Manic",
        artist:"Halsey",
        img: "images/Manic.jpg",
        fav:false
    },{
        name: "Without Me",
        artist:"Complicated Broken",
        img: "images/without_me.jpg",
        fav:false
    },{
        name: "El mal querer",
        artist:"Rosalía",
        img: "images/mal_querer.jfif",
        fav:false
    },{
        name: "Los Ángeles",
        artist:"Rosalía",
        img: "images/los_angeles.jpg",
        fav:false
    },{
        name: "Motomami",
        artist:"Rosalía",
        img: "images/motomami.jpg",
        fav:false
    },{
        name: "Sunset Season",
        artist:"Conan Gray",
        img: "images/sunset_season.jpg",
        fav:false
    },{
        name: "Kid Krow",
        artist:"Conan Gray",
        img: "images/kid_krow.jpg",
        fav:false
    },{
        name: "Superache",
        artist:"Conan Gray",
        img: "images/SUPERACHE.jfif",
        fav:false
    },{
        name: "Impera",
        artist: "Ghost B.C.",
        img: "images/imperia.jpg",
        fav:false
    },{
        name: "Infestissumam",
        artist: "Ghost B.C.",
        img: "images/infestissumam.jpg",
        fav:false
    },{
        name: "Meliora",
        artist: "Ghost B.C.",
        img: "images/meliora.jpg",
        fav:false
    },{
        name: "Prequelle",
        artist: "Ghost B.C.",
        img: "images/prequelle.jpg",
        fav:false
    },{
        name: "Opus Eponymous",
        artist: "Ghost B.C.",
        img: "images/opus_eponymous.jpg",
        fav:false
    },{
        name: "Ceremony and Devotion",
        artist: "Ghost B.C.",
        img: "images/ceremony_and_devotion.jpg",
        fav:false
    },{
        name: "[MESSAGE FROM THE CLERGY]",
        artist: "Ghost B.C.",
        img: "images/ghost-message-from-the-clergy-Cover-Art.jpg",
        fav:false
    },{
        name: "Seven Inches of Satanic Panic",
        artist: "Ghost B.C.",
        img: "images/mary_on_a_cross.jpg",
        fav:false
    },
    {
        name: "Born This Way",
        artist: "Complicated Broken",
        img: "images/born_this_way.jpg",
        fav:false
    },
    {
        name: "New Therapy",
        artist: "Complicated Broken",
        img: "images/new_therapy.jpg",
        fav:false
    },
    {
        name: "Complicated Broken",
        artist: "Complicated Broken",
        img: "images/complicated_broken.jpg",
        fav:false
    },
    {
        name: "Fuck Me, I'm Famous",
        artist: "Complicated Broken",
        img: "images/fuck_me_im_famous.jpg",
        fav:false
    },
    {
        name: "Future Nostalgia",
        artist: "Complicated Broken",
        img: "images/future_nostalgia.jpg",
        fav:false
    },
    {
        name: "Life happens",
        artist: "Complicated Broken",
        img: "images/life_happens.jpg",
        fav:false 
    },
    {
        name: "Mirror",
        artist: "Complicated Broken",
        img: "images/mirror.jpg",
        fav:false
    },
    {
        name: "The Things I Wanted To Scream",
        artist: "Complicated Broken",
        img: "images/the_things_i_wanted_to_scream.jpg",
        fav:false
    },
    {
        name: "Things I Wanted To Say But Never Did",
        artist: "Complicated Broken",
        img: "images/things_I_wanted_to_say_but_never_did.jpg",
        fav:false
    }
    
]

let allArtistas = [

    {
        perfil: "images/artist_profile/mcr.jpg",
        foto_fondo: "images/banner/mcr.jpg",
        name: "My Chemical Romance",
        albumes: allAlbumes.filter((album) => album.artist === "My Chemical Romance"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "My Chemical Romance" || cancion.artist.includes("My Chemical Romance"))),
    },
    {
        perfil: "images/artist_profile/top.png",
        foto_fondo: "images/banner/twenty-one-pilots.jpg",
        name: "Twenty Øne Piløts",
        albumes: allAlbumes.filter((album) => album.artist === "Twenty Øne Piløts"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Twenty Øne Piløts" || cancion.artist.includes("Twenty Øne Piløts"))),
    },
    {
        perfil: "images/artist_profile/bad_bunny.jpg",
        foto_fondo: "images/banner/bad-bunny.jpeg",
        name: "Bad Bunny",
        albumes: allAlbumes.filter((album) => album.artist === "Bad Bunny"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Bad Bunny" || cancion.artist.includes("Bad Bunny"))),
    },
    {
        perfil: "images/artist_profile/5sos.jpg",
        foto_fondo: "images/banner/5sos.jpg",
        name: "5 Seconds of Summer",
        albumes: allAlbumes.filter((album) => album.artist === "5 Seconds of Summer"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "5 Seconds of Summer" || cancion.artist.includes("5 Seconds of Summer"))),
    },
    {
        perfil: "images/artist_profile/queen.jpg",
        foto_fondo: "images/banner/queen.jpg",
        name: "Queen",
        albumes: allAlbumes.filter((album) => album.artist === "Queen"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Queen" || cancion.artist.includes("Queen"))),
    },
    {
        perfil: "images/artist_profile/harry_styles.jfif",
        foto_fondo: "images/banner/harry_styles.jpeg",
        name: "Harry Styles",
        albumes: allAlbumes.filter((album) => album.artist === "Harry Styles"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Harry Styles" || cancion.artist.includes("Harry Styles"))),
    },
    {
        perfil: "images/artist_profile/falling_in_reverse.jfif",
        foto_fondo: "images/banner/falling-in-reverse.jpg",
        name: "Falling In Reverse",
        albumes: allAlbumes.filter((album) => album.artist === "Falling In Reverse"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Falling In Reverse" || cancion.artist.includes("Falling In Reverse"))),
    },
    {
        perfil: "images/artist_profile/quevedo.jpg",
        foto_fondo: "images/banner/quevedo.jpg",
        name: "Quevedo",
        albumes: allAlbumes.filter((album) => album.artist === "Quevedo"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Quevedo" || cancion.artist.includes("Quevedo"))),
    },
    {
        perfil: "images/artist_profile/bizarrap.jpg",
        foto_fondo: "images/banner/bizarrap.jpg",
        name: "Bizarrap",
        albumes: allAlbumes.filter((album) => album.artist === "Bizarrap"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Bizarrap" || cancion.artist.includes("Bizarrap"))),
    },
    {
        perfil: "images/artist_profile/halsey.jfif",
        foto_fondo: "images/banner/halsey.jpg",
        name: "Halsey",
        albumes: allAlbumes.filter((album) => album.artist === "Halsey"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Halsey" || cancion.artist.includes("Halsey"))),
    },
    {
        perfil: "images/artist_profile/rosalia.jfif",
        foto_fondo: "images/banner/Rosalia.jpg",
        name: "Rosalía",
        albumes: allAlbumes.filter((album) => album.artist === "Rosalía"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Rosalía" || cancion.artist.includes("Rosalía"))),
    },
    {
        perfil: "images/artist_profile/conan_gray.jfif",
        foto_fondo: "images/banner/conan_gray.jpg",
        name: "Conan Gray",
        albumes: allAlbumes.filter((album) => album.artist === "Conan Gray"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Conan Gray" || cancion.artist.includes("Conan Gray"))),
    },
    {
        perfil: "images/artist_profile/natalie_jane.jfif",
        foto_fondo: "images/banner/natalie_jane.jpg",
        name: "Natalie Jane",
        albumes: allAlbumes.filter((album) => album.artist === "Natalie Jane"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Natalie Jane" || cancion.artist.includes("Natalie Jane"))),
    },
    {
        perfil: "images/artist_profile/ghost.jfif",
        foto_fondo: "images/banner/ghost.jpg",
        name: "Ghost B.C,",
        albumes: allAlbumes.filter((album) => album.artist === "Ghost B.C."),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Ghost B.C." || cancion.artist.includes("Ghost B.C."))),
    },
    {
        perfil: "images/artist_profile/complicated_broken.jpg",
        foto_fondo: "images/banner/complicated_broken.jpg",
        name: "Complicated Broken",
        albumes: allAlbumes.filter((album) => album.artist === "Complicated Broken" || album.artist == "Azaelia"),
        canciones: allMusic.filter((cancion) => (cancion.artist === "Complicated Broken" || cancion.artist.includes("Complicated Broken") || cancion.artist.includes("Azaelia") || cancion.artist.includes("Azaelia"))),
    }
]

