// Canciones y artistas incluídos
isAzaelia = false;
let allMusic = [

    // {
    //     "name": "Welcome to the Black Parade",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": "5:11"
    // },
    // {
    //     "name": "Migraine",
    //     "artist":"Twenty Øne Piløts",
    //     "img": "images/migraine.png",
    //     "audio": "audio/",
    //     "duracion": "3:59"
    // },
    // {
    //     "name": "Inmortales",
    //     "artist":"Funzo & Baby Loud",
    //     "img": "images/inmortales.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:12"
    // },
    // {
    //     "name": "Youngblood",
    //     "artist":"5 Seconds of Summer",
    //     "img": "images/5-seconds-of-summer-youngblood.jpg.opdownload",
    //     "audio": "audio/",
    //     "duracion": "3:23"
    // },
    // {
    //     "name": "Another One Bites the Dust",
    //     "artist":"Queen",
    //     "img": "images/queen_the_game.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:36"
    // },
    // {
    //     "name": "As It Was",
    //     "artist":"Harry Styles",
    //     "img": "images/as_it_was.png",
    //     "audio": "audio/",
    //     "duracion": "2:47"
    // },
    // {
    //     "name": "Quevedo: Bzrp Music Session",
    //     "artist":["Bzrp", "Quevedo"],
    //     "img": "images/quevedo_music_session.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:18"
    // },
    // {
    //     "name": "Tití me preguntó",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": "4:03"
    // },
    // {
    //     "name": "Me Porto Bonito",
    //     "artist":["Bad Bunny","Chencho Corleone"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": "2:57"

    // },
    // {
    //     "name": "Mary on a cross",
    //     "artist":"Ghost",
    //     "img": "images/mary_on_a_cross.jpg",
    //     "audio": "audio/",
    //     "duracion": "4:04"
    // },
    // {
    //     "name": "Ojitos Lindos",
    //     "artist":isAzaelia? ["Bad Bunny","Azaelia"] : ["Bad Bunny","Bomba Estéreo"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": "3:18"
    // },
    // {
    //     "name": "Chicken Teriyaki",
    //     "artist":"Rosalía",
    //     "img": "images/motomami.jpg",
    //     "audio": "audio/",
    //     "duracion": "2:02"
    // },
    // {
    //     "name": "Seven",
    //     "artist": isAzaelia? "Azaelia" : "Natalie Jane",
    //     "img": isAzaelia? "images/things_I_wanted_to_say_but_never_did.jpg":"images/seven.jpeg",
    //     "audio": "audio/",
    //     "duracion": "2:04"
    // },
    // {
    //     "name": "Saoko",
    //     "artist":"Rosalía",
    //     "img": "images/motomami.jpg",
    //     "audio": "audio/",
    //     "duracion": "2:02"
    // },
    // {
    //     "name": "Memories",
    //     "artist":"Conan Gray",
    //     "img": "images/SUPERACHE.jfif",
    //     "audio": "audio/",
    //     "duracion": "4:08"
    // },
    // {
    //     "name": "Perfect",
    //     "artist":"One Direction",
    //     "img": "images/made_in_the_am.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:50"
    // },
    // {
    //     "name": "Romance",
    //     "artist":"My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "1:02"
    // },
    // {
    //     "name": "Honey, this mirror isn't big enough for the two of us",
    //     "artist":"My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:51"
    // },
    // {
    //     "name": "Vampires will never hurt you",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "4:24",
    //     "duracion": ""
    // },
    // {
    //     "name": "Drowning lessons",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:23",
    //     "duracion": ""
    // },
    // {
    //     "name": "Our Lady of Sorrows",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "2:05",
    //     "duracion": ""
    // },
    // {
    //     "name": "Headfirst for halos",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:28",
    //     "duracion": ""
    // },
    // {
    //     "name": "Skylines and turnstiles",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:23",
    //     "duracion": ""
    // },
    // {
    //     "name": "Early sunsets over Monroeville",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "5:05",
    //     "duracion": ""
    // },    
    // {
    //     "name": "This is the best day ever",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:14",
    //     "duracion": ""
    // },
    // {
    //     "name": "Cubicles",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:51",
    //     "duracion": ""
    // },
    // {
    //     "name": "Demolition Lovers",
    //     "artist": "My Chemical Romance",
    //     "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    //     "audio": "audio/",
    //     "duracion": "6:06",
    //     "duracion": ""
    // },
    // {
    //     "name": "Helena",
    //     "artist": "My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:31",
    //     "duracion": ""
    // },
    // {
    //     "name": "Give 'em hell, kid",
    //     "artist": "My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": "2:56",
    //     "duracion": ""
    // },
    // {
    //     "name": "To the end",
    //     "artist": "My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": "3:01",
    //     "duracion": ""
    // },{
    //     "name": "You know what they do to guys like us in prison",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },
    // {
    //     "name": "I'm not okay (I promise)",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The ghost of you",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The jetset life is gonna kill you",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Interlude",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Thank you for the venom",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Hang 'em high",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "It's not a fashion statement, it's a fucking deathwish",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Cemetery drive",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "I never told you what I do for a living",
    //     "artist":"My Chemical Romance",
    //     "img": "images/three_cheers.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The end",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Dead!",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "This is how I disappear",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The sharpest lives",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "I don't love you",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "House of wolves",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Cancer",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Mama",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Sleep",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Teenagers",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Disenchanted",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Famous last words",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Blood",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Heaven help us",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "My way home is through you",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Kill all your friends",
    //     "artist":"My Chemical Romance",
    //     "img": "images/black_parade.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Look alive, sunshine",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Na na na (na na na na na na na na na)",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Bulletproof heart",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "SING",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Planetary (GO!)",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The only hope for me is you",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Jet-Star and the Kobra Kid/traffic report",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Party Poison",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Save yourself, I'll hold them back",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "S/C/A/R/E/C/R/O/W",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Summertime",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "DESTROYA",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The kids from yesterday",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Goodnite, Dr. Death",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Vampire money",
    //     "artist":"My Chemical Romance",
    //     "img": "images/danger_days.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Boy Division",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Tomorrow's Money",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "AMBULANCE",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Gun",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The World Is Ugly",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The Light Behind Your Eyes ",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Kiss the Ring",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Make Room!!!!",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Surrender the Night",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Burn Bright",
    //     "artist":"My Chemical Romance",
    //     "img": "images/Mychemconvweap.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Estamos bien",
    //     "artist":"Bad Bunny",
    //     "img": "images/X100pre.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Mía",
    //     "artist":"Bad Bunny",
    //     "img": "images/X100pre.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Solo de mi",
    //     "artist":"Bad Bunny",
    //     "img": "images/X100pre.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Caro",
    //     "artist":"Bad Bunny",
    //     "img": "images/X100pre.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Si estuviésemos juntos",
    //     "artist":"Bad Bunny",
    //     "img": "images/X100pre.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "La Romana",
    //     "artist":"Bad Bunny",
    //     "img": "images/X100pre.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Si Veo a Tu Mamá",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "La Difícil",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Pero Ya No",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "La Santa",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Yo Perreo Sola",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Bichiyal",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Soliá",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "La Zona",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Que Malo",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Vete",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Ignorantes",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "A Tu Merced",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Una Vez",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Safaera",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "25/8",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Está Cabrón Ser Yo",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Puesto Pa' Guerrial",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "P FKN R",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Hablamos Mañana",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "<3",
    //     "artist":"Bad Bunny",
    //     "img": "images/YHLQMDLG.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Te Mudaste",
    //     "artist":"Bad Bunny",
    //     "img": "images/El_Ultimo_Tour_del_Mundo.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "La Noche de Anoche",
    //     "artist":"Bad Bunny Ft. ROSALÍA",
    //     "img": "images/El_Ultimo_Tour_del_Mundo.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Yo Visto Así",
    //     "artist":"Bad Bunny",
    //     "img": "images/El_Ultimo_Tour_del_Mundo.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Dakiti",
    //     "artist":"Bad Bunny ft. Jhay Cortez",
    //     "img": "images/El_Ultimo_Tour_del_Mundo.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "120",
    //     "artist":"Bad Bunny",
    //     "img": "images/El_Ultimo_Tour_del_Mundo.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Antes que se acabe",
    //     "artist":"Bad Bunny",
    //     "img": "images/El_Ultimo_Tour_del_Mundo.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Canción Con Yandel",
    //     "artist":["Bad Bunny","Yandel"],
    //     "img": "images/las-que-no-iban-a-salir.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Pa’ Romperla",
    //     "artist":["Bad Bunny","Don Omar"],
    //     "img": "images/las-que-no-iban-a-salir.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Moscow Mule",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Después de la playa",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Un ratito",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Yo no soy celoso",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Tarot",
    //     "artist":["Bad Bunny","Jhay Cortez"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Neverita",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "La corriente",
    //     "artist":["Bad Bunny", "Tony Dize"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Efecto ",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Party",
    //     "artist":["Bad Bunny","Rauw Alejandro"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Aguacero",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Enséñame a bailar",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Dos mil 16",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "El apagón",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Otro atardecer",
    //     "artist":["Bad Bunny","the Marías"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Un coco",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Andrea",
    //     "artist":["Bad Bunny","Buscabulla"],
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Me fui de vacaciones",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Un verano sin ti",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Agosto",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Callaíta",
    //     "artist":"Bad Bunny",
    //     "img": "images/un_verano_sin_ti.jfif",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Soltera (Remix)",
    //     "artist":["Bad Bunny","Daddy Yankee","Lunay"],
    //     "img": "images/epico.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Tú no vive así",
    //     "artist":["Arcangel","Bad Bunny","Dj Luian","Mambo Kingz"],
    //     "img": "images/tu_no_vive_asi.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Yonaguni",
    //     "artist":"Bad Bunny",
    //     "img": "images/yonaguni.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Raised by Wolves",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Tragic Magic",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The Drug in Me Is You",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "I'm Not a Vampire",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Good Girls Bad Guys",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Pick Up the Phone",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Don't Mess With Ouija Boards",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Sink or Swim",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Caught Like a Fly ",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Goodbye Graceful",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The Westerner",
    //     "artist":"Falling In Reverse",
    //     "img": "images/The_Drug_in_Me_Is_You.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Champion",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Bad Girls Club",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Rolling Stone",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Fashionably Late",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Alone",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Born to Lead",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "It's Over When It's Over",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Game Over",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Self-Destruct Personality",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Fuck the Rest",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Keep Holding On",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Drifter",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Where Have You Been",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Goddamn",
    //     "artist":"Falling In Reverse",
    //     "img": "images/fashionably_late.png",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Chemical Prisoner",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "God, If You Are Above...",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Sexy Drug",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Just Like You",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Guillotine IV (The Final Chapter)",
    //     "artist":["Falling In Reverse","Massabo","Jacky Vincent"],
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Stay Away",
    //     "artist":["Falling In Reverse", "Baskette", "Thomas Denny"],
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Wait and See",
    //     "artist":["Falling In Reverse", "Massabo"],
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The Bitter End",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "My Heart's To Blame",
    //     "artist":["Falling In Reverse", "Massabo"],
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Get Me Out",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Die For You",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Brother",
    //     "artist":"Falling In Reverse",
    //     "img": "images/just_like_you.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Coming Home",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Broken",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Loser",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Fuck You and All Your Friends",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "I Hate Everyone",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "I'm Bad at Life",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Hanging On",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Superhero",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Straight to Hell",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "I Don't Mind",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "The Departure",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Right Now",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Paparazzi",
    //     "artist":"Falling In Reverse",
    //     "img": "images/coming_home.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },{
    //     "name": "Him & I",
    //     "artist":["G-Eazy", "Halsey"],
    //     "img": "images/beautiful&damned.jpg",
    //     "audio": "audio/",
    //     "duracion": ""
    // },
    {
        "name": "Walls Could Talk",
        "artist":"Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Control",
        "artist":"Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "You Should Be Sad",
        "artist":"Halsey",
        "img": "images/Manic.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Without Me",
        "artist":"Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Gasoline",
        "artist":"Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Colors",
        "artist":"Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Nightmare",
        "artist":"Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "11 Minutes",
        "artist":["Yungblud", "Halsey"],
        "img": "images/11minutes.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "3 am",
        "artist":"Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Hurricane",
        "artist":"Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Sorry",
        "artist":"Halsey",
        "img": "images/Hopeless_Fountain_Kingdom.png",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "We Will Rock You",
        "artist":"Queen",
        "img": "images/news_of_the_world.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Bohemian Rhapsody",
        "artist":"Queen",
        "img": "images/night_at_the_opera.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Don't Stop Me Now",
        "artist":"Queen",
        "img": "images/Queen_Jazz.png",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "I Want to Break Free",
        "artist":"Queen",
        "img": "images/made_in_heaven.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Killer Queen",
        "artist":"Queen",
        "img": "images/sheer_heart_attack.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Love of My Life",
        "artist":"Queen",
        "img": "images/night_at_the_opera.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Radio Ga Ga",
        "artist":"Queen",
        "img": "images/works.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "The Show Must Go On",
        "artist":"Queen",
        "img": "images/innuendo.jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "Somebody to Love",
        "artist":"Queen",
        "img": "images/A_Day_at_the_Races_(Queen).jpg",
        "audio": "audio/",
        "duracion": ""
    },{
        "name": "We Are the Champions",
        "artist":"Queen",
        "img": "images/news_of_the_world.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Here",
        "artist":"Alessia Cara",
        "img": "images/here.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Scars to Your Beautiful",
        "artist":"Alessia Cara",
        "img": "images/scars_to_your_beautiful.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Funhouse",
        "artist":"Azaelia",
        "img": "images/funhouse.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Little Girl Gone",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Hot Gum",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Bigger Person",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Fantasy",
        "artist":["Azaelia", "Shannon", "Zoe Johnson"],
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Aftermath",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Too Hurt To Fall In Love",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Hey",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "That Part",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ily",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Do It All Again",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "If He Want To He Would",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Good Grief",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Dopamine",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },

    {
        "name": "Just Because",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ok with it",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Classified XY",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Grave",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "ESOEMOEHOED",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Can't Break Up",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I Wouldn't Love Me",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I'm Good",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "God Give Me A Car",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Bad Again",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Good Girl Era",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "People Like Me",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Best Friends With Your Girlfriend",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Pretty Distraction",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Underwater",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Show Me Off",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Villain",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Knives Out",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "We're Not Alike",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Houdini",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Tell On You",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "If You're Gonna Break My Heart",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Numb Little Girl",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "You Tell Me To Shush",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Cynical",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "That Girl",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Better People To Left On Read",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "5015",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Break Me!",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "American Horror Show",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Critical Trust Issues",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I'm Her",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Torture",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Do Or Die",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Pieces",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Show Me Off",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Oscar Worthy",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Project Ex",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "10 20 30",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Right?",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Tattoos",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Unfinished Business",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Lego Blocks",
        "artist":"Complicated Broken",
        "img": "images/mirror.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Victoris's Secret",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ex Appeal",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "The Audacity",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },

// 38. Spicy
// 39. Numb little bug
    {
        "name": "Dead Man Don't Rape",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "My Best Friend's Ex",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Strut",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Maybe you're the problem",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Triggered",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Make It Me",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Antagonista",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Labour",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "If I Died Last Night",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "End of an Era",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Over Her Over Here",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Math",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "You Should Be Scared of Me",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "You Just Didn't Like Me That Much",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Don't Talk About It",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Die 4 Me",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Fat Funny Friend",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Angry",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Us and Pigs",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Death of a Predator",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Yes All Men",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "When Will I Be Mine?",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "27 Days",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "28",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "29",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "AVA",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Self Sabotage",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Best Friend Breakup",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Escapism",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Darkside",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Dying on the Inside",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Placeholder",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "G.O.A.T",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Spicy",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Numb Little Bug",
        "artist":"Complicated Broken",
        "img": "images/things_I_wanted_to_say_but_never_did.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Not Like I'm In Love With You",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "God Sent Me As Karma",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Rapunzel",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "B.O.M.B",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Look Who's Cryin' Now",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Found You On The Internet",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
 {
        "name": "abcdefu",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
 {
        "name": "Dirty Thoughts",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "She's All I Wanna Be",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "10 Things I Hate About You",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "YES MOM",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Cinderella's Dead",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "RN",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Swimming In Your Feelings",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Friends Don't Fuck",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "God Is A Freak",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I Hope",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Thank Me Later",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Back To Friends",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "God Must Hate Me",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Plot Line",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ur Just Horny",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Queen",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Fboy Anonymous",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
 {
        "name": "Bad For Me",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Fingers Crossed",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Fuck Up The Friendship",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Backseat Rider",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
 {
        "name": "Flowers",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Counting The Days",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Mad At Disney",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "For Granted",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
 {
        "name": "Why You Gotta Be Like That",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Liar Liar",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Prom Dress",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Dictator",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "About Damn Time",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Deal With It",
        "artist": "Complicated Broken",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "POSTER KID",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Not My Ex",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
 {
        "name": "Whatshisface",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Easy",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "She Is Mine",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Missing You",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "What A Shame",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Make Up Is Expensive",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Violent",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Don't Miss Me",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "What It Means To Be A Girl",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "No One Can Fix Me",
        "artist": "Azaelia",
        "img": "images/the_things_i_wanted_to_scream.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Bad Girlfriend",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "S.L.U.T.",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I'm a Mess",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Don't Leave Me Alone",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Trust Me Lonely",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "IDGAF",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Venom",
        "artist": ["Eminem", "Azaelia"],
        "img": "images/venom.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "My Way",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Friends",
        "artist": ["Marshmello", "Azaelia"],
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "High Hopes",
        "artist": ["Complicated Broken", "Brendon Urie"],
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Older",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Not Your Barbie Girl",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Without Me",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Don't Call Me Up",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Youngblood",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Rise",
        "artist": "Complicated Broken",
        "img": "images/fuck_me_im_famous.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Absolutely Anything",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Grace",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "New Rules",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Blow Your Mind",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Guys My Age",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Walls Could Talk",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Instruction",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Mama",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Back To You",
        "artist": ["Complicated Broken", "Louis Tomlinson"],
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Prom Queen",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Princesses Don't Cry",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "What About Us",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Faking It",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Answer The Call",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "1-800",
        "artist": ["Complicated Broken", "Logic"],
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I Did Something Bad",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Such A Boy",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "F.F.F.",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Sorry",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Stay",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Dirty Dirty",
        "artist": "Complicated Broken",
        "img": "images/complicated_broken.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Moments",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "This Is Not An Apology",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I'm Gonna Show You Crazy",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "We're Taking Over",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "R U Crazy",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Castle",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Hearbeat Song",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Paper Doll",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "New",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Just Like Me",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "LGBT",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Pretty Girl",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Wolf In Sheep's Clothing",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Never Forget You",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ain't My Fault",
        "artist": "Complicated Broken",
        "img": "images/new_therapy.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Born This Way",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Everytime We Touch (Nightcore)",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Cool Kids",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I Love It (I Don't Care)",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "ODD",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "How To Be A Heartbreaker",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Can't Hold Us",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Just Give Me A Reason",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Who's Laughing Now",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Do It Like a Dude",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Sarcasm",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Invisible",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Stronger (What Doesn't Kill You)",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Sit Still, Look Pretty",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Potential Breakup Song",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Pompei",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Fight Song",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Looking Like This",
        "artist": "Complicated Broken",
        "img": "images/born_this_way.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Alarm",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ciao Adios",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Moral Of The Story",
        "artist": ["Complicated Broken", "Niall Horan"],
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "STUPID",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Knees",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Bisexual Anthem",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Instagram",
        "artist": ["Azaelia", "David Guetta", "Dimitri Vegas & Like Mike", "Daddy Yankee", "Afro Bros"],
        "img": "images/Instagram.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Cry For Help",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Me!",
        "artist": ["Complicated Broken", "Brendon Urie"],
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Last Hurrah",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "You & Jeniffer",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Walk Me Home",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Thank God",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "You Need To Calm Down",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Don't Worry Bout Me",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "She's Not Me",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "OKAY OKAY",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Get Stüpid",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Why Do You Love Me",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Genius",
        "artist": ["LSD", "Azaelia", "Diplo", "Labrinth"],
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "This Baby Don't Cry",
        "artist": "Complicated Broken",
        "img": "images/life_happens.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Future Nostalgia",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Don't Start Now",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Cool",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Physical",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Levitating",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Pretty Please",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Hallucinate",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Love Again",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Break My Heart",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Good in Bed",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Boys Will Be Boys",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Dance Dance Dance",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Ur So Fucking Cool",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "A Little Messed Up",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "You Broke Me First",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Psycho",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Problems",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Sweet but Psycho",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "...And To Those I Love, Thanks For Sticking Around",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Kings and Queens",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "So Am I",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "That Bitch",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "I Hate Everybody",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    },
    {
        "name": "Friends Don't Look At Friend That Way",
        "artist": "Complicated Broken",
        "img": "images/future_nostalgia.jpg",
        "audio": "audio/",
        "duracion": ""
    }    
]

let allAlbumes = [
    {
        "name": "Three Cheers for Sweet Revenge",
        "artist":"My Chemical Romance",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/three_cheers.jpg")),
        "img": "images/three_cheers.jpg",
    },{
        "name": "Black Parade",
        "artist":"My Chemical Romance",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/black_parade.jpg")),
        "img": "images/black_parade.jpg",
    },{
        "name": "Danger Days: The True Lives of the Fabulous Killjoys",
        "artist":"My Chemical Romance",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/danger_days.jfif")),
        "img": "images/danger_days.jfif",
    },{
        "name": "I Brought You My Bullets, You Brought Me Your Love",
        "artist":"My Chemical Romance",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg")),
        "img": "images/I_Brought_You_My_Bullets,_You_Brought_Me_Your_Love_cover.jpg",
    },{
        "name": "Conventional Weapons",
        "artist":"My Chemical Romance",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Mychemconvweap.jpg")),
        "img": "images/Mychemconvweap.jpg",
    },{
        "name": "Blurryface",
        "artist":"Twenty Øne Piløts",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/blurryface.jpg")),
        "img": "images/blurryface.jpg",
    },{
        "name": "Scaled and Icy",
        "artist":"Twenty Øne Piløts",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/scaled.jpg")),
        "img": "images/scaled.jpg",
    },{
        "name": "Twenty One Pilots",
        "artist":"Twenty Øne Piløts",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/top.jpg")),
        "img": "images/top.jpg",
    },{
        "name": "Trench",
        "artist":"Twenty Øne Piløts",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/trench.jpg")),
        "img": "images/trench.jpg",
    },{
        "name": "Vessel",
        "artist":"Twenty Øne Piløts",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/migraine.jpg")),
        "img": "images/migraine.png",
    },{
        "name": "Regional at Best",
        "artist":"Twenty Øne Piløts",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/twenty-one-pilots-regional-at-best.jpg")),
        "img": "images/twenty-one-pilots-regional-at-best.jpg",
    },{
        "name": "Un verano sin ti",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/un_verano_sin_ti.jfif")),
        "img": "images/un_verano_sin_ti.jfif",
    },{
        "name": "YHLQMDLG",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/YHLQMDLG.jfif")),
        "img": "images/YHLQMDLG.jfif",
    },{
        "name": "El último tour del mundo",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/El_Ultimo_Tour_del_Mundo.png")),
        "img": "images/El_Ultimo_Tour_del_Mundo.png",
    },{
        "name": "X 100pre",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/X100pre.jpg")),
        "img": "images/X100pre.jpg",
    },{
        "name": "Oasis",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/oasis.jfif")),
        "img": "images/oasis.jfif",
    },{
        "name": "El Conejo Malo",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/elconejomalo.jfif")),
        "img": "images/elconejomalo.jfif",
    },{
        "name": "Las que no iban a salir",
        "artist":"Bad Bunny",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/las-que-no-iban-a-salir.jpg")),
        "img": "images/las-que-no-iban-a-salir.jpg",
    },{
        "name": "5 Seconds of Summer",
        "artist":"5 Seconds of Summer",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/5_Seconds_of_Summer.jpg")),
        "img": "images/5_Seconds_of_Summer.jpg",
    },{
        "name": "Sounds Good Feels Good",
        "artist":"5 Seconds of Summer",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Sounds_Good_Feels_Good.png")),
        "img": "images/Sounds_Good_Feels_Good.png",
    },{
        "name": "Youngblood",
        "artist":"5 Seconds of Summer",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/5-seconds-of-summer-youngblood.jpg.opdownload")),
        "img": "images/5-seconds-of-summer-youngblood.jpg.opdownload",
    },{
        "name": "Calm",
        "artist":"5 Seconds of Summer",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/5_Seconds_of_Summer_Calm.png")),
        "img": "images/5_Seconds_of_Summer_Calm.png",
    },{
        "name": "5SOS5",
        "artist":"5 Seconds of Summer",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/5_Seconds_of_Summer_-_5SOS5.png")),
        "img": "images/5_Seconds_of_Summer_-_5SOS5.png",
    },{
        "name": "5 Seconds of Summer (B-Sides and Rarities)",
        "artist":"5 Seconds of Summer",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/b_side.jfif")),
        "img": "images/b_side.jfif",
    },{
        "name": "Queen",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/LP_Label_Queen.jpg")),
        "img": "images/LP_Label_Queen.jpg",
    },{
        "name": "Queen II",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/QueenII.webp")),
        "img": "images/QueenII.webp",
    },{
        "name": "A Night at the Opera",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/night_at_the_opera.jpg")),
        "img": "images/night_at_the_opera.jpg",
    },{
        "name": "News of the World",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/news_of_the_world.jpg")),
        "img": "images/news_of_the_world.jpg",
    },{
        "name": "The Miracle",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/the_miracle.jpg")),
        "img": "images/the_miracle.jpg",
    },{
        "name": "Jazz",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Queen_Jazz.png")),
        "img": "images/Queen_Jazz.png",
    },{
        "name": "Hot Space",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/hot_space.jpg")),
        "img": "images/hot_space.jpg",
    },{
        "name": "Innuendo",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/innuendo.jpg")),
        "img": "images/innuendo.jpg",
    },{
        "name": "Made in Heaven",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/made_in_heaven.jpg")),
        "img": "images/made_in_heaven.jpg",
    },{
        "name": "A Day at the Races",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/A_Day_at_the_Races_(Queen).jpg")),
        "img": "images/A_Day_at_the_Races_(Queen).jpg",
    },{
        "name": "A Kind of Magic",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/kind_of_magic.jpg")),
        "img": "images/kind_of_magic.jpg",
    },{
        "name": "The Works",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/works.jpg")),
        "img": "images/works.jpg",
    },{
        "name": "Sheer Heart Attack",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/sheer_heart_attack.jpg")),
        "img": "images/sheer_heart_attack.jpg",
    },{
        "name": "The Game",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/The_Game.webp")),
        "img": "images/The_Game.webp",
    },{
        "name": "Live Killers",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/liveKillers.jpg")),
        "img": "images/liveKillers.jpg",
    },{
        "name": "Live Magic",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/live_magic.jpg")),
        "img": "images/live_magic.jpg",
    },{
        "name": "Queen at the Beeb",
        "artist":"Queen",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Queen_At_The_Beeb.png")),
        "img": "images/Queen_At_The_Beeb.png",
    },{
        "name": "Harry's House",
        "artist":"Harry Styles",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/harrys_house.jpg")),
        "img": "images/harrys_house.jpg",
    },{
        "name": "Harry Styles",
        "artist":"Harry Styles",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/HarryStyles.png")),
        "img": "images/HarryStyles.png",
    },{
        "name": "Fine Line",
        "artist":"Harry Styles",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Harry_Styles_Fine_Line.png")),
        "img": "images/Harry_Styles_Fine_Line.png",
    },{
        "name": "The Drug In Me Is You",
        "artist":"Falling In Reverse",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/The_Drug_in_Me_Is_You.jpg")),
        "img": "images/The_Drug_in_Me_Is_You.jpg",
    },{
        "name": "Fashionably Late",
        "artist":"Falling In Reverse",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/fashionably_late.png")),
        "img": "images/fashionably_late.png",
    },{
        "name": "Just Like You",
        "artist":"Falling In Reverse",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/just_like_you.jpg")),
        "img": "images/just_like_you.jpg",
    },{
        "name": "Coming Home",
        "artist":"Falling In Reverse",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/coming_home.jpg")),
        "img": "images/coming_home.jpg",
    },{
        "name": "If I Can't Have Love, I Want Power",
        "artist":"Halsey",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/If_I_Can't_Have_Love,_I_Want_Power_by_Halsey.png")),
        "img": "images/If_I_Can't_Have_Love,_I_Want_Power_by_Halsey.png",
    },{
        "name": "Badlands",
        "artist":"Halsey",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Badlands.jpg")),
        "img": "images/Badlands.jpg",
    },{
        "name": "Hopeless Fountain Kingdom",
        "artist":"Halsey",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Hopeless_Fountain_Kingdom.png")),
        "img": "images/Hopeless_Fountain_Kingdom.png",
    },{
        "name": "Manic",
        "artist":"Halsey",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/Manic.jpg")),
        "img": "images/Manic.jpg",
    },{
        "name": "Without Me",
        "artist":"Complicated Broken",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/without_me.jpg")),
        "img": "images/without_me.jpg",
    },{
        "name": "El mal querer",
        "artist":"Rosalía",
        "canciones": allMusic.filter((cancion) => (cancion.img === "images/mal_querer.jfif")),
        "img": "images/mal_querer.jfif",
    },{
        name: "Los Ángeles",
        artist:"Rosalía",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/los_angeles.jpg")),
        img: "images/los_angeles.jpg",
    },{
        name: "Motomami",
        artist:"Rosalía",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/motomami.jpg")),
        img: "images/motomami.jpg",
    },{
        name: "Sunset Season",
        artist:"Conan Gray",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/sunset_season.jpg")),
        img: "images/sunset_season.jpg",
    },{
        name: "Kid Krow",
        artist:"Conan Gray",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/kid_krow.jpg")),
        img: "images/kid_krow.jpg",
    },{
        name: "Superache",
        artist:"Conan Gray",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/SUPERACHE.jfif")),
        img: "images/SUPERACHE.jfif",
    },{
        name: "Impera",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/imperia.jpg")),
        img: "images/imperia.jpg",
    },{
        name: "Infestissumam",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/infestissumam.jpg")),
        img: "images/infestissumam.jpg",
    },{
        name: "Meliora",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/meliora.jpg")),
        img: "images/meliora.jpg",
    },{
        name: "Prequelle",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/prequelle.jpg")),
        img: "images/prequelle.jpg",
    },{
        name: "Opus Eponymous",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/opus_eponymous.jpg")),
        img: "images/opus_eponymous.jpg",
    },{
        name: "Ceremony and Devotion",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/ceremony_and_devotion.jpg")),
        img: "images/ceremony_and_devotion.jpg",
    },{
        name: "[MESSAGE FROM THE CLERGY]",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/ghost-message-from-the-clergy-Cover-Art.jpg")),
        img: "images/ghost-message-from-the-clergy-Cover-Art.jpg",
    },{
        name: "Seven Inches of Satanic Panic",
        artist: "Ghost B.C.",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/mary_on_a_cross.jpg")),
        img: "images/mary_on_a_cross.jpg",
    },
    {
        name: "Born This Way",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/born_this_way.jpg")),
        img: "images/born_this_way.jpg",
    },
    {
        name: "New Therapy",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/new_therapy.jpg")),
        img: "images/new_therapy.jpg",
    },
    {
        name: "Complicated Broken",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/complicated_broken.jpg")),
        img: "images/complicated_broken.jpg",
    },
    {
        name: "Fuck Me, I'm Famous",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/fuck_me_im_famous.jpg")),
        img: "images/fuck_me_im_famous.jpg",
    },
    {
        name: "Future Nostalgia",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/future_nostalgia.jpg")),
        img: "images/future_nostalgia.jpg",
    },
    {
        name: "Life happens",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/life_happens.jpg")),
        img: "images/life_happens.jpg", 
    },
    {
        name: "Mirror",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/mirror.jpg")),
        img: "images/mirror.jpg",
    },
    {
        name: "The Things I Wanted To Scream",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/the_things_i_wanted_to_scream.jpg")),
        img: "images/the_things_i_wanted_to_scream.jpg",
    },
    {
        name: "Things I Wanted To Say But Never Did",
        artist: "Complicated Broken",
        canciones: allMusic.filter((cancion) => (cancion.img === "images/things_I_wanted_to_say_but_never_did.jpg")),
        img: "images/things_I_wanted_to_say_but_never_did.jpg",
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

