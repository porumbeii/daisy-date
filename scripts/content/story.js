class Story {
  constructor(file) {
    Content.Story = this;
    this.Data = __content;
    Content.StoryIsLoaded = true;
  }
}

const __content = `#============title screen
play-music mainmusic
showsnow
font DJB 20
background tree
title "DAISY DATE"
title "a short visual novel"
title "by RetroPigeon"  

#============Introduce inceput de vacanta la copac
says Narrator "It is a cold, winter day."
says Narrator "Just a few more minutes and school is over. The winter holidays are here!"'
says Narrator "Oh, the holidays!"'

#============Cadru clopotel
hidesnow
background bell
play-sound bell
says Narrator "The bell is ringing!"

#============cadru curtea scolii si poarta copii care pleaca
play-sound kidshappy
background schoolfront
showsnow
says Narrator "You have been waiting for this moment for the last 365 days."
show linus at center
says Narrator "You rush out of the gates to join your friends, Bill, John and Tim."
remove-character linus

#============Bill, John si Tim merg spre bar pe strada
background street
show tim at left
says Tim "Please, can we go to the cafe, please? Please!?"
show bill at right
says Bill "Sounds great!"
show john at center
says John "Mhmm!"
says John "Mmm... I'd love some hot cocoa on this wheather!"
says Tim "Totally agree."
remove-character bill
remove-character john
remove-character tim
says Narrator "You walk to the cafe as the fluffy snow crunches under your soft warm boots."
says Narrator "The holidays have started!"
says Narrator "It's good to be with your friends."

#============La bar Bill le spune ca Daisy a castigat un concurs si vrea sa ii ceara din bani.
hidesnow
stop-music mainmusic
play-music cafemusic
background cafe
says Narrator "You enter the cafe. It is nice and cozy in there."
says Waiter "Hey, guys! What would you like to order?"
show tim at left
says Tim "Please, a veggie pizza, please."
show john at center
says John "I will have a hot cocoa with whipped cream and strawberry-flavoured marshmallows."
show bill at right
says Bill "Tap water, if possible."
question "What do you want?"
    answer "Bacon pizza" go to pizza
    answer "Cocoa" go to cocoa
label pizza
says Waiter "OK, so, vegan pizza, bacon pizza, hot cocoa and some tap water?"
says Tim "Yes, please!"
end-label pizza
label cocoa
says Waiter "OK, so vegan pizza, 2 hot cocoa and some tap water?"
says Tim "Yes, please!"
end-label cocoa

says Bill "Did you know Daisy won the Just Shapes & Beats contest?"
says Bill "She won one million bucks!"
says John "Dude. Daisy is such a cool girl. The best in our school!"
says Bill "She won one million. Can't I just ask her for some? She's our friend."
says Tim "What!? Tell me you are not mad? Please, tell me!"
says John "Man! Daisy is our friend. How can you think to take advantage of this friendship?"
says Bill "Just a thought..."
says John "Dude. Not good, not good at all!"
says John "Finally, food's here! Let's close this subject. It makes me sick!"
says John "How can you even think about this? Daisy is our friend."
says Narrator "You eat the food quietly. Outside the snow is falling gently on the ground."
says Narrator "This quietness was weird and awkward."
says Narrator "Embarrassed by the previous discussion you decided to leave."
says Linus "Oh, I gotta go to the library, I have some reading to catch up with! TTFN!"
says Narrator "You get your stuff and go outside."
remove-character tim
remove-character john
remove-character bill

#================Tu pleci la biblioteca sa citesti
stop-music cafemusic
play-music mainmusic
background street
showsnow
says Narrator "Boy, Daisy is the most popular girl in class. All boys go crazy after her."
says Narrator "But unfortunately..."
says Narrator "Daisy is a bit picky when it comes to friends."
says Narrator "Why? 'Couse there are too many boys who like her. Way too many."
says Narrator "I would really like to be her boyfriend... But... How?"
hidesnow

#========== ajungi la biblioteca
stop-music mainmusic
play-music librarymusic
background library
show book at center
says Narrator "Oh, yes. The library!"
says Narrator "The only place were I can get some peace and quiet."
says Narrator "What's that book on the floor?"
#Gasesti jurnalul lui Daisy 
remove-character book
background diary
says Narrator "Oh, look! It is Daisy's diary!"
says Narrator "I shoudn't read it. Or should I?"
says Narrator "But Daisy will be cross!"
#Intrebare daca sa citeasca sau nu din jurnal
question "What do you do?"
    answer "Be nosy and read it" go to readit
    answer "Mind you own business and give it to Daisy" go to givediary

#=========Daca citesti din jurnal:
label readit
says Narrator "Dear Diary, I feel so lonely, I would really like to have a boyfriend for the winter holidays."
#Vine Tim si o suna pe Daisy sa ii spuna ca citeai din jurnalul ei
says ??? "What do you think you're doin'?"

background library
show tim_angry at center
says Narrator "You look up and see Tim. What a nosy punk!"

says Tim "What are you doing?"
says Linus "Em... reading a book!"
says Tim "Oh, and why the book is called Daisy's Diary?"
says Linus "Emm..."
says Tim "You took Daisy's diary! Oh, should I call Daisy?"
says Linus "Noo! Please, no!"
play-sound phone
says Tim "Oops, my finger slipped on 'call'!"
stop-music phone
says Tim "Hello? Tim here! Daisy, Linus took your diary!"
says Tim "Coming? Oh, cool! Ta ta!"
says Linus "Why did'ya do that?"
says Tim "Why did you take her diary?"
says Linus "I..."

#==========Vine Daisy si te face muci
remove-character tim_angry
show daisy_angry at center
says Daisy "Hm, where was I..."
says Daisy "Oh, yes. Why did you read my diary!?"
says Daisy "I wrote in there my secrets, my thoughts, my passwords, my everything!"
says Daisy "And you..."
says Daisy "You read everything!"
says Linus "But I only read one page.."
says Daisy "Linus, you are not my friend from now on!"
says Daisy "Adios to you!"
remove-character daisy_angry
remove-background library
stop-music librarymusic
title "game over"
gameover
end-label readit

#=========Daca nu citesti din jurnal
label givediary
#O suni pe Daisy si ii spui ca ai gasit jurnalul
play-sound phone
says Narrator "You dial Daisy's phone number and hit call."
stop-music phone
says Daisy "Hello, Linus!"
says Linus "Hey! Did you lose your diary? I'm asking because I just found a diary with your name on it."
says Daisy "Oh, gosh! You found it? I have been looking for it everywhere!"
says Daisy "I searched for it in my bedroom,in my gaming room, in the living, I even searched in the attic!"
says Daisy "Thanks for giving me this great news! Thanks!"

#Daisy spune sa va vedeti la copacul iubirii
says Linus "Don't mention it! Where can we meet?"
says Daisy "Oh, at the Oaky Oak Tree."
says Linus "Ok! See ya in ten minutes."
stop-music librarymusic

#=========tree scene
play-music mainmusic
background tree
showsnow
show linus at left
says Narrator "Oh, the Oaky Oak Tree."
says Narrator "It is said that it's older than 400 years."
says Narrator "Oh, look, there is Daisy!"
show daisy at center
says Daisy "Here you are!"

#==================Iti multumeste si iti spune ca isi caua un prieten  pentru vacanta
says Daisy "Thank you very much for the diary!"
says Linus "Hey, that's what friends are for."
says Daisy "This diary is very important to me."
says Daisy "It has all of my thoughts, my secrets, my memories, so it is very precious to me!"
says Daisy "Did you read anything from it? Oh, knowing you, probably not."
says Daisy "Y'know? I would really like a boyfriend for the winter holidays..."

#==========Vine si Tim care il paraste pe Bill, dar apoi incepe sa se roage de Daisy  sa il invete cum sa castige Just Shapes and Beats
says Narrator "Just then, Tim came to the Oaky Oak Tree."
remove-character daisy
show tim at center
show daisy at right
says Tim "Can I bother you, please? Whatchya doin'??"
says Daisy "Oh, we were chatting."
says Tim "Hey, Bill wants your..."
says Daisy "My Nintendo Switch again!? Not gonna lend it to him anymore! Last time, he put bubblegum in it's joystick!"
says Tim "Mmm, no. Not your Switch ..."
says Daisy "Then what?"
says Tim "Your money."
says Daisy "What!? My money? You're jokin', right?"
says Tim "No, I'm very serious."
says Linus "That's true."
says Daisy "THAT CROOK! AND HE INVITED ME TO A DATE!"
says Daisy "I'll kill him the next time I see him!"
says Linus "Now, no need to kill someone for a sentence said by him."
says Daisy "You're right. Anyway I'm not his friend anymore. No way."
says Linus "Hmm... Anyone wants to drink something warm? It's getting late, shall we go to the cafe?"
says Tim "Sure, let's go, please!"
says Daisy "Yeah, I think I need something sweet too."
remove-character daisy
remove-character linus
remove-character tim
stop-music librarymusic

#======= drumul catre bar
background street
play-music mainmusic
show daisy at center
show linus at left
show tim at right
says Tim "Hey, Daiz, can I ask you something, please?"
says Daisy "Sure, Tim, go ahead!"
says Tim "How did you beat that monster from Just Shapes & Beats from level four?"
says Daisy "Oh, with dash, use the Y button."
says Tim "But in the third level how did you avoid the comets?"
says Daisy "Dodged them."
says Tim "Good, good. How did you escape from that mine from level 1?"
says Daisy "Went in the corner."
says Tim "But the start of level 2?"
says Daisy "I went in the center."
says Tim "And the..."
Daisy se supara si te roaga sa plecati ca Tim e la fel ca Bill
says Daisy "Oh, leave me alone and go away!"
says Daisy "You just want to know all my secrets so next year you can win the contest."
says Daisy "You wanna use me just like Bill!"
says Daisy "You are off my friends list."
says Daisy "Let's go, Linus!"
remove-character tim
says Daisy "What's happening with my friends?"
says Daisy "After I have won the contest everybody wants something from me."
remove-character daisy
remove-character linus
hidesnow

#=========Mergeti din nou la cafenea si il gasiti pe John
stop-music mainmusic
play-music cafemusic
background cafe
show john at center
says John "Oh, hi folks! Nice to see you again"
says Daisy "Oh, hello, John!"
says John "Would like me to call the waiter?"
says Daisy "Yeah, sure!"
says John "Hey, waiter!"
says Waiter "What shall I get you?"
show daisy at left
says Daisy "I need something sweet. I will have a gingerbread house. It has been a long day. I've just lost two of my friends!"
show linus at right
says Linus "A warm tea for me."

#========John face un pariu cu Daisy si pierde

says John "Hey, Daisy, I have a new leak."
says John "I know that Nintendo is gonna launch a new console tomorrow!"
says Daisy "I don't believe you"
says John "Wanna bet?"
says Daisy "Hm, you're on!"
says John "I will shave my eyebrows if we don't have a new console launched tommorow! But if I win you will be my date for Christmas."
says Linus "Wait, what?"
says Daisy "You are betting on your eyebrows?"
says John "Yup! On my eyebrows!"
says Daisy "Man, you're gonna loose."
says Daisy "I hope you will not loose, because I really like your face with that beautiful eyebrows."
says Linus "Shall we meet tomorrow, same hour, same place?"
says John "You bet!"

remove-character john
remove-character daisy
remove-character linus

remove-background
title "24 hours later"

#daisy isi pierde increderea in el
background cafe
show john_sad at center
says Daisy "Ha ha!"
says Daisy "You look hilarious!"
says Daisy "Man, never bet on your eyebrows, when you are not sure of what you are talking about!"
says Daisy "I have to go."
says Daisy "I've just realised that I have to go somewhere."
remove-character john

#==============Daisy realizeaza ca tu esti singura alegere
stop-music cafemusic
play-music mainmusic
background tree
show daisy at center
says Daisy "So if Bill is too selfish"
says Daisy "Tim too pushy"
says Daisy "John is funny but too self conceited"
says Daisy "then Linus is the one!"
says Daisy "Y'know, Linus? You'd be my perfect boyfriend!"
says Daisy "Finally, I can have a boyfriend."
remove-character daisy
title "FINIS OPERIS"
gameover
`;
