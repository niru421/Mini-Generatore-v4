const firstNames = [
    "Aaron","Abbott","Abdul","Abdullah","Abe","Abel","Abraham","Ace","Adam","Adrian",
    "Ahmed","Aidan","Aiden","Alan","Albert","Alec","Alex","Alexander","Alfie","Alfred",
    "Ali","Alistair","Allen","Alonzo","Alvin","Amir","Amos","Anderson","Andre","Andrew",
    "Andy","Angel","Angelo","Angus","Anthony","Anton","Antonio","Apollo","Archer","Archie",
    "Arjun","Armand","Arnold","Arthur","Arun","Asa","Asher","Ashwin","Ashton","Austin",
    "Avery","Axel","Ayaan","Aziz","Bailey","Baker","Barrett","Barry","Bart","Basil",
    "Beau","Beckett","Ben","Benjamin","Bennett","Benson","Bentley","Bernard","Bernie","Bert",
    "Bill","Billy","Blake","Blaze","Bob","Bobby","Bodhi","Boris","Brad","Braden",
    "Bradley","Brady","Brandon","Brantley","Braxton","Brayden","Brett","Brian","Bridger","Brody",
    "Bruce","Bruno","Bryan","Bryant","Bryce","Bryson","Buck","Buddy","Cade","Caden",
    "Caleb","Calvin","Camden","Cameron","Campbell","Carl","Carlos","Carson","Carter","Casey",
    "Cash","Casper","Cassius","Cayden","Cecil","Cedric","Chad","Chance","Chandler","Charles",
    "Charlie","Chase","Chester","Chris","Christian","Christopher","Cian","Cillian","Clark","Clay",
    "Clayton","Clement","Cliff","Clifford","Clint","Clive","Clyde","Cody","Cole","Colin",
    "Collin","Colt","Colton","Conner","Connor","Conor","Conrad","Cooper","Corey","Cormac",
    "Cornelius","Cory","Craig","Cruz","Cullen","Curtis","Cyrus","Dakota","Dale","Dallas",
    "Dalton","Damian","Damien","Damon","Dan","Daniel","Danny","Dante","Darren","Darrin",
    "Darryl","Darwin","Dash","Dave","David","Davis","Dawson","Dean","Declan","Deepak",
    "Derek","Derrick","Desmond","Devin","Devon","Dexter","Dhruv","Diego","Dillon","Dimitri",
    "Dion","Dirk","Dominic","Don","Donald","Donovan","Dorian","Douglas","Drake","Drew",
    "Dudley","Duncan","Dustin","Dwayne","Dwight","Dylan","Earl","Easton","Ed","Eddie",
    "Edgar","Edmund","Edward","Edwin","Efrain","Egan","Eitan","El","Eli","Elias",
    "Elijah","Elliot","Elliott","Ellis","Elmer","Elon","Elvis","Emerson","Emery","Emil",
    "Emilio","Emmanuel","Emmett","Enrique","Eric","Erik","Ernest","Ernesto","Errol","Ervin",
    "Ethan","Eugene","Evan","Everett","Ezekiel","Ezra","Fabian","Fabio","Felix","Fergus",
    "Fernando","Finn","Finley","Fletcher","Flynn","Ford","Forrest","Foster","Fox","Francis",
    "Francisco","Frank","Franklin","Fred","Frederick","Freddie","Gabriel","Gael","Gage","Galen",
    "Gareth","Garrett","Garrison","Garth","Gary","Gavin","George","Gerald","Gerard","Gideon",
    "Gilbert","Gilberto","Gino","Giovanni","Glen","Glenn","Gordon","Grady","Graham","Grant",
    "Grayson","Greg","Gregory","Griffin","Guillermo","Gunnar","Gus","Gustavo","Guy","Haden",
    "Hakim","Hamish","Hamza","Hank","Hans","Harlan","Harley","Harold","Harrison","Harry",
    "Harvey","Hassan","Hayden","Heath","Hector","Hendrix","Henry","Herbert","Herman","Hiro",
    "Holden","Homer","Horace","Howard","Hudson","Hugh","Hugo","Hunter","Ian","Ibrahim",
    "Ignacio","Igor","Ike","Ilias","Imran","Indra","Isaac","Isaiah","Ishaan","Ishmael",
    "Ivan","Ivor","Jace","Jack","Jackson","Jacob","Jaden","Jagger","Jake","Jakob",
    "Jalen","Jamal","James","Jameson","Jamie","Jared","Jaron","Jarrett","Jason","Jasper",
    "Javier","Jax","Jaxon","Jay","Jayden","Jean","Jed","Jefferson","Jeffrey","Jensen",
    "Jeremiah","Jeremy","Jerome","Jerry","Jesse","Jessie","Jesus","Jett","Jevon","Jim",
    "Jimmy","Joachim","Joaquin","Joe","Joel","Joey","Johan","John","Johnny","Jon",
    "Jonah","Jonas","Jonathan","Jordan","Jorge","Jose","Joseph","Josh","Joshua","Josiah",
    "Josue","Juan","Judah","Jude","Julian","Julio","Julius","Justice","Justin","Kade",
    "Kaden","Kai","Kaiden","Kail","Kaine","Kaiser","Kale","Kaleb","Kamal","Kane",
    "Karan","Kareem","Karl","Karter","Kasen","Kash","Kasper","Kayden","Keaton","Keegan",
    "Keith","Kellan","Kellen","Kelly","Kelvin","Ken","Kendall","Kendrick","Kenneth","Kenny",
    "Kent","Kerry","Kevin","Khalil","Kian","Kieran","Killian","Kim","King","Kingsley",
    "Kingston","Kip","Kirby","Kirk","Kit","Klaus","Knox","Kobe","Kody","Kolby",
    "Kole","Konnor","Korbin","Korey","Kory","Krish","Kristian","Kristopher","Kurt","Kyle",
    "Kylan","Kyler","Kyson","Lachlan","Lamar","Lamont","Lance","Landon","Lane","Langdon",
    "Larkin","Larry","Lars","Lawrence","Lawson","Lazarus","Leander","Lee","Leif","Leighton",
    "Leland","Lenny","Leo","Leon","Leonard","Leonardo","Leopold","Leroy","Leslie","Lester",
    "Levi","Lewis","Liam","Lincoln","Lindsey","Linus","Lionel","Lloyd","Logan","Loki",
    "London","Lorenzo","Louis","Luca","Lucas","Lucian","Lucius","Lucky","Luis","Luke",
    "Luther","Lyle","Lyndon","Lysander","Mace","Mack","Maddox","Magnus","Mahdi","Malachi",
    "Malcolm","Malik","Manuel","Marc","Marcel","Marco","Marcus","Marek","Mario","Mark",
    "Markus","Marley","Marlon","Marshall","Martin","Marty","Marvin","Mason","Mateo","Mathew",
    "Mathias","Matteo","Matthew","Matthias","Maurice","Maverick","Max","Maxim","Maximilian","Maxwell",
    "Maynard","McCoy","Meir","Melvin","Memphis","Merrick","Micah","Michael","Mick","Miguel",
    "Mikael","Mike","Mikhail","Milan","Miles","Miller","Milo","Milton","Mitch","Mitchell",
    "Modi","Mohamed","Mohammed","Monte","Montgomery","Moore","Morgan","Morris","Morton","Moses",
    "Muhammad","Musa","Mustafa","Myles","Myron","Nabeel","Nabil","Nadir","Nael","Nahum",
    "Naim","Najib","Nakul","Naman","Nate","Nathan","Nathaniel","Navid","Nawaz","Neal",
    "Neil","Nelson","Neo","Nero","Niall","Nicholas","Nick","Nico","Nicolas","Nigel",
    "Nikhil","Nikita","Niko","Nikolai","Niles","Noah","Noel","Nolan","Norbert","Norman",
    "Norris","North","Norton","Nova","Oakley","Obadiah","Ocean","Octavio","Odin","Odysseus",
    "Oisin","Olaf","Ole","Oliver","Ollie","Omar","Omer","Orion","Orlando","Oscar",
    "Osiris","Osman","Otis","Otto","Owen","Ozzy","Pablo","Paco","Padraig","Palmer",
    "Paris","Parker","Pascal","Patrick","Patton","Paul","Paulo","Pavel","Paxton","Payton",
    "Pedro","Percy","Peregrine","Perry","Peter","Peyton","Philip","Phillip","Phoenix","Pierce",
    "Pierre","Piper","Pippin","Porter","Powell","Preston","Prince","Princeton","Quentin","Quincy",
    "Quinn","Quinton","Rafael","Rafe","Rafi","Rahim","Raiden","Ralph","Rami","Ramon",
    "Ramsay","Ramsey","Randal","Randall","Randy","Raoul","Raphael","Rashad","Rashid","Rasmus",
    "Raul","Raven","Ravi","Ray","Raymond","Reagan","Reece","Reed","Reese","Reggie",
    "Reginald","Reid","Reilly","Remington","Remy","Ren","Rene","Reuben","Rex","Rey",
    "Rhett","Rhys","Ricardo","Richard","Richie","Rick","Ricky","Rico","Ridley","Riley",
    "Rio","River","Robert","Roberto","Robin","Robinson","Rocky","Rod","Roderick","Rodney",
    "Rodrigo","Roger","Rohan","Roland","Roman","Romeo","Ron","Ronald","Ronan","Ronnie",
    "Rory","Ross","Rowan","Roy","Royal","Royce","Ruben","Rudy","Rufus","Rupert",
    "Rush","Russell","Ryan","Ryder","Ryker","Rylan","Ryland","Saad","Saber","Sabian",
    "Sacha","Sachin","Sadiq","Saeed","Sage","Sahil","Said","Saif","Salah","Salim",
    "Salvador","Sam","Samar","Samir","Sammy","Samson","Samuel","Sandeep","Sandro","Sandy",
    "Sanjay","Santiago","Santino","Santo","Sasha","Satchel","Saul","Sawyer","Scott","Seamus",
    "Sean","Sebastian","Seb","Selim","Seth","Severus","Shaan","Shad","Shah","Shaheed",
    "Shaheen","Shakir","Shalom","Shamar","Shamir","Shane","Shannon","Shaun","Shawn","Shay",
    "Shea","Sheldon","Sherlock","Sherman","Shiloh","Shiva","Shoaib","Shon","Shrey","Sid",
    "Siddharth","Sidney","Sigmund","Silas","Silvano","Silver","Simon","Simone","Sinan","Singh",
    "Sion","Siraj","Siva","Skylar","Slade","Sloan","Smith","Soren","Spencer","Spike",
    "Stan","Stanley","Stefan","Stefano","Stephen","Sterling","Steve","Steven","Stevie","Stewart",
    "Stirling","Stone","Storm","Stuart","Sufyan","Sullivan","Sumit","Sunny","Suraj","Surya",
    "Sutton","Sven","Syed","Sylas","Sylvester","Tadhg","Taj","Takashi","Tal","Talan",
    "Talon","Tam","Tanner","Tao","Tarik","Tariq","Taron","Tate","Tavish","Tay",
    "Taylor","Teagan","Ted","Teddy","Teo","Terence","Terrance","Terry","Tevin","Tex",
    "Thaddeus","Thane","Theo","Theodore","Theon","Theron","Thiago","Thomas","Thor","Thornton",
    "Tiago","Tiberius","Tibor","Tiernan","Tig","Tigran","Tim","Timothy","Titus","Tobias",
    "Toby","Todd","Tom","Tomas","Tommy","Tony","Torin","Torrance","Trace","Travis",
    "Tray","Tre","Trent","Trenton","Trevor","Trey","Tristan","Troy","Tru","Truman",
    "Tucker","Turner","Ty","Tyler","Tymon","Tyrese","Tyrone","Tyson","Umar","Uriah",
    "Uriel","Usman","Vadim","Val","Valentin","Valentino","Valerio","Vance","Vander","Van",
    "Vaughn","Vernon","Vic","Victor","Vidal","Vikram","Viktor","Vince","Vincent","Vinnie",
    "Virgil","Vishal","Vlad","Vladimir","Wade","Wagner","Waldo","Walker","Wallace","Walter",
    "Warren","Wayne","Wesley","West","Weston","Wilbur","Wiley","Wilfred","Will","William",
    "Willie","Wilson","Winston","Wolf","Wolfe","Woodrow","Wyatt","Xander","Xavier","Yael",
    "Yahir","Yahya","Yakov","Yanis","Yardley","Yasin","Yasser","Yates","Yehuda","Yestin",
    "Yiannis","Yogi","Yonatan","York","Yosef","Yousef","Yusuf","Zach","Zachariah","Zachary",
    "Zack","Zackary","Zaden","Zaid","Zaiden","Zain","Zaine","Zaire","Zak","Zander",
    "Zane","Zarek","Zavier","Zayd","Zayn","Zeb","Zebulon","Zed","Zeke","Zeph",
    "Zephyr","Zero","Zev","Zion","Ziv","Zoran","Zubin","Zuri","Zyan"
];

const lastNames = [
    "Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez",
    "Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin",
    "Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson",
    "Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores",
    "Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts",
    "Gomez","Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes",
    "Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper",
    "Peterson","Bailey","Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Richardson",
    "Watson","Brooks","Chavez","Wood","James","Bennett","Gray","Mendoza","Ruiz","Hughes",
    "Price","Alvarez","Castillo","Sanders","Patel","Myers","Long","Ross","Foster","Jimenez",
    "Powell","Jenkins","Perry","Russell","Sullivan","Bell","Coleman","Butler","Henderson","Barnes",
    "Gonzales","Fisher","Vasquez","Simmons","Romero","Jordan","Patterson","Alexander","Hamilton","Graham",
    "Reynolds","Griffin","Wallace","Moreno","West","Cole","Hayes","Bryant","Herrera","Gibson",
    "Ellis","Tran","Medina","Aguilar","Stevens","Murray","Ford","Castro","Marshall","Owens",
    "McDonald","Harrison","Kennedy","Wells","Alvarez","Washington","Freeman","Webb","Simpson","Tucker",
    "Porter","Hunter","Hicks","Crawford","Henry","Boyd","Mason","Warren","Dixon","Ramos",
    "Burns","Gordon","Shaw","Holmes","Rice","Robertson","Hunt","Black","Daniels","Palmer",
    "Mills","Nichols","Grant","Knight","Ferguson","Rose","Stone","Hawkins","Dunn","Perkins",
    "Hudson","Spencer","Gardner","Stephens","Payne","Pierce","Berry","Matthews","Arnold","Wagner",
    "Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham","Bradley",
    "Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver","Greene",
    "Lawrence","Elliott","Chavez","Singh","Patel","Kumar","Shah","Khan","Ahmed","Hassan",
    "Ali","Mohammed","Abdullah","Chen","Li","Zhang","Wang","Liu","Yang"
];

let usedNames = new Set();
let usedEmails = new Set();

function copy(text) {
    navigator.clipboard.writeText(text);
}

function genName() {
    let name = "";
    let attempts = 0;
    while (attempts < 200) {
        const f = firstNames[Math.floor(Math.random() * firstNames.length)];
        const l = lastNames[Math.floor(Math.random() * lastNames.length)];
        name = f + " " + l;
        if (!usedNames.has(name)) {
            usedNames.add(name);
            break;
        }
        attempts++;
    }
    document.getElementById("name").value = name;
    copy(name);
}

function genEmail() {
    let email = "";
    let attempts = 0;
    while (attempts < 200) {
        const f = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase();
        const l = lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase();
        const num = Math.floor(100 + Math.random() * 9900);
        email = f + "_" + l + num + "@example.com";
        if (!usedEmails.has(email)) {
            usedEmails.add(email);
            break;
        }
        attempts++;
    }
    document.getElementById("email").value = email;
    copy(email);
}

function genPass() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let pass = "";
    const length = 16 + Math.floor(Math.random() * 5);
    for (let i = 0; i < length; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("password").value = pass;
    copy(pass);
}

function resetUsed() {
    usedNames.clear();
    usedEmails.clear();
    alert("All history cleared!");
}