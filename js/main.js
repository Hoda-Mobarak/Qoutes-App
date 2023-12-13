var qoutes =['"So many books, so little time."','"A room without books is like a body without a soul."','"Be yourself; everyone else is already taken."'
 ,'“You only live once, but if you do it right, once is enough.”',
 '“Be the change that you wish to see in the world.”',
'"If you tell the truth, you do not remmber any thing."',
'"A friend is someone who knows all about you and still loves you."',
'"To live is the rarest thing in the world. Most people exist, that is all."',
'"Always forgive your enemies; nothing annoys them so much."'

]
var author =['--Frank Zappa','--Marcus Tullius Cicero','--Oscar Wilde','--Mae West','--Mahatma Gandhi','--Mark Twain',
'--Elbert Hubbard','--Oscar Wilde','--Oscar Wilde'
]
 function generateQoute(){
    var randomNumber = Math.floor(Math.random()*(qoutes.length));
    document.getElementById('qouteOutput').innerHTML=qoutes[randomNumber];

    var randomNumber = Math.floor(Math.random()*(author.length));
    document.getElementById('autherOutput').innerHTML=author[randomNumber];
 }