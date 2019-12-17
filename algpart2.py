
output = open('output.txt', "r")
a=(output.readline())


output1 = open('output1.txt', "r")
player1 =output1.readline()


output2 = open('output2.txt', "r")
player2 =output2.readline()

keywords = [""]

if a=='0': ###Feeding the Five Thousand
    summary = '''   Now when Jesus heard this, he withdrew from there in a boat to a deserted place by himself. 
              But when the crowds heard it, they followed him on foot from the towns.  When he went ashore, 
              he saw a great crowd; and he had compassion for them and cured their sick. When it was evening, 
              the disciples came to him and said, “This is a deserted place, and the hour is now late; 
              send the crowds away so that they may go into the villages and buy food for themselves.” 
               Jesus said to them, “They need not go away; you give them something to eat.” They replied,
              “We have nothing here but five loaves and two fish.” And he said, “Bring them here to me.”
              Then he ordered the crowds to sit down on the grass. Taking the five loaves and the two fish, he 
              looked up to heaven, and blessed and broke the loaves, and gave them to the disciples, and the 
              disciples gave them to the crowds. And all ate and were filled; and they took up what was left
              over of the broken pieces, twelve baskets full. And those who ate were about five thousand men,
              besides women and children.Taking the five loaves and the two fishes and looking up to Heaven, he gave thanks and broke them. Then he gave them to the disciples, and the disciples gave them to the people. They all ate and were satisfied, and the disciples picked up twelve baskets full of broken pieces that were left over.'''
    keywords = list(map(str, summary.split()))#["feed", "food", "jesus", "twevle", "baskets", "crowd", "fish", "loaves", "filled", "disciple"]

if a=='1': ###The Wedding at Cana
    summary = '''The transformation of water into wine at the Marriage at Cana
    or Wedding at Cana is the first miracle attributed to Jesus in the Gospel
    of John.[1] In the Gospel, Jesus, his mother and his disciples are
    invited to a wedding, and when the wine runs out, Jesus delivers a sign of
    his glory by turning water into wine.The location of Cana has been subject
    to the debate of Christ among biblical scholars and archeologists; multiple
    villages in Galilee are possible candidates. On the third day there was a wedding in Cana of Galilee, and the mother of Jesus was there.
                Jesus and his disciples had also been invited to the wedding.  When the wine gave out,
               the mother of Jesus said to him, “They have no wine.”  And Jesus said to her, “Woman, what
               concern is that to you and to me? My hour has not yet come.” His mother said to the servants,
               “Do whatever he tells you.”  Now standing there were six stone water jars for the Jewish rites 
              of purification, each holding twenty or thirty gallons. Jesus said to them, “Fill the jars with water.”
               And they filled them up to the brim. He said to them, “Now draw some out, and take it to the chief 
              steward.” So they took it. When the steward tasted the water that had become wine, and did not know where 
              it came from (though the servants who had drawn the water knew), the steward called the bridegroom and said
               to him, “Everyone serves the good wine first, and then the inferior wine after the guests have become drunk. 
              But you have kept the good wine until now.” Jesus did this, the first of his signs, in Cana of Galilee, and
               revealed his glory; and his disciples believed in him.After this he went down to Capernaum with his mother, his brothers,
              and his disciples; and they remained there a few days.'''
    keywords = list(map(str, summary.split()))#["3", "wedding", "cana", "Galilee", "there", "jesus", "wine", "water", "mircale", "fill"]

if a=='2': ### Lost Sheep
    summary = '''
        Now all the tax collectors and sinners were coming near to listen to him.
               And the Pharisees and the scribes were grumbling and saying, 
              “This fellow welcomes sinners and eats with them."So he told them this parable: 
               “Which one of you, having a hundred sheep and losing one of them,
               does not leave the ninety-nine in the wilderness and go after the one that is 
              lost until he finds it?  When he has found it, he lays it on his shoulders and rejoices. And when he 
              comes home, he calls together his friends and neighbors, saying to them, ‘Rejoice with me, for I have found my
               sheep that was lost.’ Just so, I tell you, there will be more joy in heaven over one sinner who repents than 
               over ninety-nine righteous persons who need no repentance.'''
    keywords = list(map(str, summary.split()))#["parable", "lost", "sheep", "sribes", "sinners", "99", "found"]
if a=='3': ### Resurection of Jesus
    summary = '''But on the first day of the week, at early dawn, they came to the tomb, taking the spices that they had prepared.
               They found the stone rolled away from the tomb,  but when they went in, they did not find the body.
               While they were perplexed about this, suddenly two men in dazzling clothes stood beside them.  The women
               were terrified and bowed their faces to the ground, but the men said to them, “Why do you look for the living 
              among the dead? He is not here, but has risen. Remember how he told you, while he was still in Galilee, 
              that the Son of Man must be handed over to sinners, and be crucified, and on the third day rise again.” Then they
              remembered his words, and returning from the tomb, they told all this to the eleven and to all the rest.
               Now it was Mary Magdalene, Joanna, Mary the mother of James, and the other women with them who told this to the apostles.
               But these words seemed to them an idle tale, and they did not believe them. But Peter got up and ran to the tomb; 
              stooping and looking in, he saw the linen cloths by themselves; then he went home, amazed at what had happened.'''

if a=='4': ### Noah's Arc
    summary = '''Noah was a righteous man and walked with God. Seeing that the earth was corrupt and filled with violence,
            God instructed Noah to build an ark in which he, his sons, and their wives,
            together with male and female of all living creatures, would be saved from the
            waters.Then the Lord said to Noah, “Go into the ark, you and all your household, for
            I have seen that you alone are righteous before me in this generation. Take with you
            seven pairs of all clean animals, the male and its mate; and a pair of the animals that
            are not clean, the male and its mate;  and seven pairs of the birds of the air also, male
            and female, to keep their kind alive on the face of all the earth.  For in seven days I will
            send rain on the earth for forty days and forty nights; and every living thing that I have made
            I will blot out from the face of the ground.” And Noah did all that the Lord had commanded him. Noah
            was six hundred years old when the flood of waters came on the earth.  And Noah with his sons and
            his wife and his sons’ wives went into the ark to escape the waters of the flood. Of clean animals,
            and of animals that are not clean, and of birds, and of everything that creeps on the ground, two and
            two, male and female, went into the ark with Noah, as God had commanded Noah. And after seven days the
            waters of the flood came on the earth. In the six hundredth year of Noah’s life, in the second month
            on the seventeenth day of the month, on that day all the fountains of the great deep burst forth, and
            the windows of the heavens were opened. The rain fell on the earth forty days and forty nights.  On the
            very same day Noah with his sons, Shem and Ham and Japheth, and Noah’s wife and the three wives of his sons
            entered the ark, they and every wild animal of every kind, and all domestic animals of every kind, and every
            creeping thing that creeps on the earth, and every bird of every kind—every bird, every winged creature. They
            went into the ark with Noah, two and two of all flesh in which there was the breath of life. And those that
            entered, male and female of all flesh, went in as God had commanded him; and the Lord shut him in. The flood
            continued forty days on the earth; and the waters increased, and bore up the ark, and it rose high above the
            earth. The waters swelled and increased greatly on the earth; and the ark floated on the face of the waters. 
           The waters swelled so mightily on the earth that all the high mountains under the whole heaven were covered; 
           the waters swelled above the mountains, covering them fifteen cubits deep.  And all flesh died that moved on the 
           earth, birds, domestic animals, wild animals, all swarming creatures that swarm on the earth, and all human beings;
            everything on dry land in whose nostrils was the breath of life died.  He blotted out every living thing that was on 
           the face of the ground, human beings and animals and creeping things and birds of the air; they were blotted out from 
           the earth. Only Noah was left, and those that were with him in the ark.  And the waters swelled on the earth for one hundred
           fifty days.'''
    keywords = list(map(str, summary.split()))

if a=='5': ### Crucifixion and death of Jesus
    summary = ''' "As they went out, they came upon a man from Cyrene named Simon; they compelled this man to carry his cross.
            And when they came to a place called Golgotha (which means Place of a Skull),
            they offered him wine to drink, mixed with gall; but when he tasted it, he 
           would not drink it. And when they had crucified him, they divided his clothes
            among themselves by casting lots; then they sat down there and kept watch over him.
            Over his head they put the charge against him, which read, “This is Jesus, the King of the Jews. 
           Then two bandits were crucified with him, one on his right and one on his left. 
            Those who passed by derided him, shaking their heads and saying, “You who would destroy the temple
            and build it in three days, save yourself! If you are the Son of God, come down from the cross.
            In the same way the chief priests also, along with the scribes and elders, were mocking him, saying,
            “He saved others; he cannot save himself. He is the King of Israel; let him come down from the cross
            now, and we will believe in him. He trusts in God; let God deliver him now, if he wants to; for he said, 
           ‘I am God’s Son.’” The bandits who were crucified with him also taunted him in the same way.From noon on,
            darkness came over the whole land until three in the afternoon. 46 And about three o’clock Jesus cried 
           with a loud voice, “Eli, Eli, lema sabachthani?” that is, “My God, my God, why have you forsaken me?” 47 When
            some of the bystanders heard it, they said, “This man is calling for Elijah.”  At once one of them ran and 
           got a sponge, filled it with sour wine, put it on a stick, and gave it to him to drink. 49 But the others said,
           “Wait, let us see whether Elijah will come to save him.” Then Jesus cried again with a loud voice and breathed 
           his last. At that moment the curtain of the temple was torn in two, from top to bottom. The earth shook, and the
            rocks were split.  The tombs also were opened, and many bodies of the saints who had fallen asleep were raised.
            After his resurrection they came out of the tombs and entered the holy city and appeared to many. Now when the centurion
            and those with him, who were keeping watch over Jesus, saw the earthquake and what took place, they were terrifie
           and said, “Truly this man was God’s Son!” Many women were also there, looking on from a distance; they had
            followed Jesus from Galilee and had provided for him. Among them were Mary Magdalene, and Mary the mother of
            James and Joseph, and the mother of the sons of Zebedee'''
    keywords = list(map(str, summary.split()))
if a=='6': ### Jonah Tries to Run Away from God
    summary =''' Now the word of the Lord came to Jonah son of Amittai, saying, “Go at once to Nineveh, that great city,
           and cry out against it; for their wickedness has come up before me.” But Jonah set out to flee to Tarshish
            from the presence of the Lord. He went down to Joppa and found a ship going to Tarshish; so he paid his fare
            and went on board, to go with them to Tarshish, away from the presence of the Lord. But the Lord hurled a great
            wind upon the sea, and such a mighty storm came upon the sea that the ship threatened to break up.
            Then the mariners were afraid, and each cried to his god. They threw the cargo that was in the ship into the
            sea, to lighten it for them. Jonah, meanwhile, had gone down into the hold of the ship and had lain down, and was fast
            asleep. The captain came and said to him, “What are you doing sound asleep? Get up, call on your god! Perhaps the god will
            spare us a thought so that we do not perish. The sailors said to one another, “Come, let us cast lots, so that we may know 
           on whose account this calamity has come upon us. they cast lots, and the lot fell on Jonah. Then they said to him
           , “Tell us why this calamity has come upon us. What is your occupation? Where do you come from? What is your country?
            And of what people are you?” “I am a Hebrew,” he replied. “I worship the Lord, the God of heaven, who
            made the sea and the dry land.” Then the men were even more afraid, and said to him, “What is this that
            you have done!” For the men knew that he was fleeing from the presence of the Lord, because he had told them so.
           Then they said to him, “What shall we do to you, that the sea may quiet down for us?” For the sea was growing more and
            more tempestuous. He said to them, “Pick me up and throw me into the sea; then the sea will quiet down for you;
            for I know it is because of me that this great storm has come upon you.” Nevertheless the men rowed hard
            to bring the ship back to land, but they could not, for the sea grew more and more stormy against them.  Then
            they cried out to the Lord, “Please, Lord, we pray, do not let us perish on account of this man’s life. Do not
            make us guilty of innocent blood; for you, O Lord, have done as it pleased you.” 15 So they picked Jonah up and
           threw him into the sea; and the sea ceased from its raging. 16 Then the men feared the Lord even more, and they offered
           a sacrifice to the Lord and made vows. But the Lord provided a large fish to swallow up Jonah; and Jonah was in 
           the belly of the fish three days and three nights.'''
    keywords = list(map(str, summary.split()))
if a=='6': ### Adam and Eve
    summary = '''After creating the world, God made a beautiful garden, called Garden of Eden. It was a paradise
            full of animals, fruits and trees. At the centre of the garden, there was a tree with a special
            power to give the knowledge of good and evil to the person who ate its fruit. Adam was the first man
            created by God. God told Adam to look after the trees in the garden and warned him, “You may eat fruits
            from any tree you like, but not from the Tree of Knowledge. If you do not obey, you shall die:
           To give company to Adam, God created a female from his ribs, and named her Eve. Both Adam and Eve lived 
           naked in the Garden of Eden, as they had no sense. In the same garden, there lived a snake. It advised Eve 
           to eat the fruit from the Tree of Knowledge, and told her that if she ate the fruit, she would become wise like
            God. Tempted by this, Eve ate the fruit and made Adam also eat it. Next day, when God came to the Garden,
            Adam and Eve hid themselves from Him, as now they had gained knowledge. God asked them, “Did you eat the
            fruit from the Tree of Knowledge?” The two admitted. God became angry and punished them, saying, 
           You did not obey me. So now, you will have to leave this Garden. You will have to live on Earth.
            Adam will have to work hard to grow crops and create food, and Eve will have to suffer the pain of giving birth.
           Now the serpent was more crafty than any other wild animal that the Lord God had made. He said to the woman,
               Did God say, ‘You shall not eat from any tree in the garden’?” The woman said to the serpent,
              We may eat of the fruit of the trees in the garden; but God said, ‘You shall not eat of the fruit of
               the tree that is in the middle of the garden, nor shall you touch it, or you shall die.’” 4 But the serpent 
              said to the woman, “You will not die; for God knows that when you eat of it your eyes will be opened, and 
              you will be like God, knowing good and evil.” So when the woman saw that the tree was good for food, and that
              it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate;
               and she also gave some to her husband, who was with her, and he ate. Then the eyes of both were opened, and they"
               knew that they were naked; and they sewed fig leaves together and made loincloths for themselves.
              They heard the sound of the Lord God walking in the garden at the time of the evening breeze, and the man
               and his wife hid themselves from the presence of the Lord God among the trees of the garden. But the Lord 
              God called to the man, and said to him, “Where are you?” He said, “I heard the sound of you in the garden,
              and I was afraid, because I was naked; and I hid myself.” He said, “Who told you that you were naked? Have
              you eaten from the tree of which I commanded you not to eat?” The man said, “The woman whom you gave to be
               with me, she gave me fruit from the tree, and I ate.” Then the Lord God said to the woman, “What is 
              this that you have done?” The woman said, “The serpent tricked me, and I ate.” The Lord God said to the 
              serpent,“Because you have done this, cursed are you among all animals and among all wild creatures; upon your 
              belly you shall go,and dust you shall eatall the days of your life. I will put enmity between you and the woman
              , and between your offspring and hers;he will strike your head,and you will strike his heel.”To the woman he said,
               “I will greatly increase your pangs in childbearing; in pain you shall bring forth children,yet your desire 
              shall be for your husband,and he shall rule over you.”And to the man he said,Because you have listened to the 
              voice of your wife, and have eaten of the treeabout which I commanded you,‘You shall not eat of it,’cursed is
              the ground because of you;in toil you shall eat of it all the days of your life; thorns and thistles it
               shall bring forth for you and you shall eat the plants of the field.By the sweat of your face you shall eat bread 
              until you return to the ground, for out of it you were taken; you are dust, and to dust you shall return. The man 
              named his wife Eve, because she was the mother of all living. And the Lord God made garments of skins for the man
               and for his wife, and clothed them.Then the Lord God said, “See, the man has become like one of us, knowing 
              good and evil; and now, he might reach out his hand and take also from the tree of life, and eat, and live forever”— 
               therefore the Lord God sent him forth from the garden of Eden, to till the ground from which he was taken. He
               drove out the man; and at the east of the garden of Eden he placed the cherubim, and a sword flaming and turning to 
              guard the way to the tree of life.'''
    keywords = list(map(str, summary.split()))

if a=='7':### Six Days of Creation and the Sabbath
    summary= '''In the beginning when God created the heavens and the earth, the earth was a formless void and
              darkness covered the face of the deep, while a wind from God swept over the face of the waters.
             Then God said, “Let there be light”; and there was light. And God saw that the light was good; and 
             God separated the light from the darkness. God called the light Day, and the darkness he called Night. 
             And there was evening and there was morning, the first day. And God said, “Let there be a dome in the
              midst of the waters, and let it separate the waters from the waters.” So God made the dome and separated
              the waters that were under the dome from the waters that were above the dome. And it was so.
              God called the dome Sky. And there was evening and there was morning, the second day.And God said,
             “Let the waters under the sky be gathered together into one place, and let the dry land appear.” And it was so.
              God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good.
              Then God said, “Let the earth put forth vegetation: plants yielding seed, and fruit trees of every kind on earth that bear 
             fruit with the seed in it.” And it was so. The earth brought forth vegetation: plants yielding seed of every kind,
              and trees of every kind bearing fruit with the seed in it. And God saw that it was good. And there was evening and
              there was morning, the third day. And God said, “Let there be lights in the dome of the sky to separate the day from
              the night; and let them be for signs and for seasons and for days and years, and let them be lights in the dome of the sky
              to give light upon the earth.” And it was so. God made the two great lights—the greater light to rule the day and the lesser
              light to rule the night—and the stars. God set them in the dome of the sky to give light upon the earth, to rule over the
              day and over the night, and to separate the light from the darkness. And God saw that it was good. And there was evening and 
             there was morning, the fourth day.And God said, “Let the waters bring forth swarms of living creatures, and let birds fly above
              the earth across the dome of the sky.” So God created the great sea monsters and every living creature that moves, of every
              kind, with which the waters swarm, and every winged bird of every kind. And God saw that it was good. God blessed them, saying,
              “Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth.” And there was evening and there 
             was morning, the fifth day. And God said, “Let the earth bring forth living creatures of every kind: cattle and 
             creeping things and wild animals of the earth of every kind.” And it was so. God made the wild animals of the earth
              of every kind, and the cattle of every kind, and everything that creeps upon the ground of every kind. And God saw that
              it was good.Then God said, “Let us make humankind in our image, according to our likeness; and let them have dominion
              over the fish of the sea, and over the birds of the air, and over the cattle, and over all the wild animals of the earth,
              and over every creeping thing that creeps upon the earth. So God created humankind[e] in his image, in the image of God
              he created them; male and female he created them. God blessed them, and God said to them, “Be fruitful and multiply,
             and fill the earth and subdue it; and have dominion over the fish of the sea and over the birds of the air and over
             every living thing that moves upon the earth.”God said, “See, I have given you every plant yielding seed that
              is upon the face of all the earth, and every tree with seed in its fruit; you shall have them for food. And to every 
             beast of the earth, and to every bird of the air, and to everything that creeps on the earth, everything that has the 
             breath of life, I have given every green plant for food.” And it was so. God saw everything that he had made, and 
             indeed, it was very good. And there was evening and there was morning, the sixth day.'''
    keywords = list(map(str, summary.split()))

if a=='8':### Jesus Walks on the Water
    summary= '''Immediately he made the disciples get into the boat and go on ahead to the other side
             , while he dismissed the crowds. And after he had dismissed the crowds, he went you
              the mountain by himself to pray. When evening came, he was there alone, but by this time the boat, battered 
             by the waves, was far from the land, for the wind was against them. And early in the morning he came walking 
             toward them on the sea. But when the disciples saw him walking on the sea, they were terrified, saying, “It is a ghost!” 
             And they cried out in fear. But immediately Jesus spoke to them and said, “Take heart, it is I; do not be afraid. 
             Peter answered him, “Lord, if it is you, command me to come to you on the water.”  He said, “Come.” So Peter got
              out of the boat, started walking on the water, and came toward Jesus.  But when he noticed the strong wind,
              he became frightened, and beginning to sink, he cried out, “Lord, save me!” Jesus immediately reached out his
              hand and caught him, saying to him, “You of little faith, why did you doubt?” When they got into the boat, the 
             wind ceased. And those in the boat worshiped him, saying, “Truly you are the Son of God.  '''
    keywords = list(map(str, summary.split()))

if a=='9':### Jesus healing the Blind
    summary= '''As he walked along, he saw a man blind from birth. His disciples asked him, “Rabbi, who sinned, this man or his
             parents, that he was born blind?” Jesus answered, “Neither this man nor his parents sinned; he was born blind so
             that God’s works might be revealed in him. We must work the works of him who sent me while it is day; night
              is coming when no one can work. As long as I am in the world, I am the light of the world.” When he had said this,
             he spat on the ground and made mud with the saliva and spread the mud on the man’s eyes, saying to him, “Go, wash in the 
             pool of Siloam” (which means Sent). Then he went and washed and came back able to see. The neighbors and those who had seen
              him before as a beggar began to ask, “Is this not the man who used to sit and beg?” Some were saying, “It is he.” Others
              were saying, “No, but it is someone like him.” He kept saying, “I am the man.” But they kept asking him, “Then how were
              your eyes opened?” He answered, “The man called Jesus made mud, spread it on my eyes, and said to me, ‘Go to Siloam and 
             wash.’ Then I went and washed and received my sight.” They said to him, “Where is he?” He said, “I do not know. '''
    keywords = list(map(str, summary.split()))
    
def scores(keywords, answer):
    scoreFunc = 0
    already = []
    inPas = list(map(str, answer.split()))
    #print(keywords)
    #print(inPas)
    for i in inPas:
        for y in keywords:
            if i == y and y!=already:
                scoreFunc+=1
    percent = (scoreFunc/len(keywords))*100
    #print(percent)
    percent *= 2.75
    #print(percent)
    #percent = round(percent*100)
    #print(percent)

    if percent >= 100:
        percent = 99
    return str(round(percent))
    

percentPlayer1 = scores(keywords, player1)
percentPlayer2 = scores(keywords, player2)

#print(percentPlayer1)
#print(percentPlayer2)


response1 = open("response1.txt","w")
response1.write(percentPlayer1)
response1.close()

response2 = open("response2.txt","w")
response2.write(percentPlayer2)
response2.close()


# percentage=scores(doc0, player1)
# percentage2=scores(doc0, player1)

# print(percentage,percentage2)



# print(percentage)
# print(percentage2)

# # output.close()
# # output1.close()
# # output2.close()

# #percentage file sending
