import spacy

#small English dictionary
#nlp = spacy.load("en_core_web_sm") #good with scikit-learn module and without

#Large English dictionary
nlp = spacy.load("en_core_web_lg") #good

#Getting data from server
output = open('output.txt', "r")
a=(output.readline())


output1 = open('output1.txt', "r")
player1 =nlp(output1.readline())


output2 = open('output2.txt', "r")
player2 =nlp(output2.readline())


#a='3'

if a=='0': ###Feeding the Five Thousand
    doc0 = nlp(' Now when Jesus heard this, he withdrew from there in a boat to a deserted place by himself. '
              'But when the crowds heard it, they followed him on foot from the towns.  When he went ashore, '
              'he saw a great crowd; and he had compassion for them and cured their sick. When it was evening, '
              'the disciples came to him and said, “This is a deserted place, and the hour is now late; '
              'send the crowds away so that they may go into the villages and buy food for themselves.” '
              ' Jesus said to them, “They need not go away; you give them something to eat.” They replied, '
              '“We have nothing here but five loaves and two fish.” And he said, “Bring them here to me.”  '
              'Then he ordered the crowds to sit down on the grass. Taking the five loaves and the two fish, he '
              'looked up to heaven, and blessed and broke the loaves, and gave them to the disciples, and the '
              'disciples gave them to the crowds. And all ate and were filled; and they took up what was left'
              'over of the broken pieces, twelve baskets full. And those who ate were about five thousand men, '
              'besides women and children.')

if a=='1': ###The Wedding at Cana
    doc0 =nlp('On the third day there was a wedding in Cana of Galilee, and the mother of Jesus was there.'
              '  Jesus and his disciples had also been invited to the wedding.  When the wine gave out,'
              ' the mother of Jesus said to him, “They have no wine.”  And Jesus said to her, “Woman, what'
              ' concern is that to you and to me? My hour has not yet come.” His mother said to the servants,'
              ' “Do whatever he tells you.”  Now standing there were six stone water jars for the Jewish rites '
              'of purification, each holding twenty or thirty gallons. Jesus said to them, “Fill the jars with water.”'
              ' And they filled them up to the brim. He said to them, “Now draw some out, and take it to the chief '
              'steward.” So they took it. When the steward tasted the water that had become wine, and did not know where '
              'it came from (though the servants who had drawn the water knew), the steward called the bridegroom and said'
              ' to him, “Everyone serves the good wine first, and then the inferior wine after the guests have become drunk. '
              'But you have kept the good wine until now.” Jesus did this, the first of his signs, in Cana of Galilee, and'
              ' revealed his glory; and his disciples believed in him.After this he went down to Capernaum with his mother, his brothers,'
              ' and his disciples; and they remained there a few days.')

if a=='2': ### Lost Sheep
    doc0 =nlp('Now all the tax collectors and sinners were coming near to listen to him.'
              ' And the Pharisees and the scribes were grumbling and saying, '
              '“This fellow welcomes sinners and eats with them."So he told them this parable: '
              ' “Which one of you, having a hundred sheep and losing one of them,'
              ' does not leave the ninety-nine in the wilderness and go after the one that is '
              'lost until he finds it?  When he has found it, he lays it on his shoulders and rejoices. And when he '
              'comes home, he calls together his friends and neighbors, saying to them, ‘Rejoice with me, for I have found my'
              ' sheep that was lost.’ Just so, I tell you, there will be more joy in heaven over one sinner who repents than '
              'over ninety-nine righteous persons who need no repentance.')
if a=='3': ### Resurection of Jesus
    doc0 =nlp('But on the first day of the week, at early dawn, they came to the tomb, taking the spices that they had prepared.'
              ' They found the stone rolled away from the tomb,  but when they went in, they did not find the body.'
              ' While they were perplexed about this, suddenly two men in dazzling clothes stood beside them.  The women'
              ' were terrified and bowed their faces to the ground, but the men said to them, “Why do you look for the living '
              'among the dead? He is not here, but has risen. Remember how he told you, while he was still in Galilee, '
              'that the Son of Man must be handed over to sinners, and be crucified, and on the third day rise again.” Then they'
              ' remembered his words, and returning from the tomb, they told all this to the eleven and to all the rest.'
              ' Now it was Mary Magdalene, Joanna, Mary the mother of James, and the other women with them who told this to the apostles.'
              ' But these words seemed to them an idle tale, and they did not believe them. But Peter got up and ran to the tomb; '
              'stooping and looking in, he saw the linen cloths by themselves; then he went home, amazed at what had happened.')

percentage=round((doc0.similarity(player1)*100))
percentage2=round((doc0.similarity(player2)*100))

print(percentage,percentage2)
percentage=str(percentage)
percentage2=str(percentage2)


output.close()
output1.close()
output2.close()

#percentage file sending
response1 = open("response1.txt","w")
response1.write(percentage)
response1.close()

response2 = open("response2.txt","w")
response2.write(percentage2)
response2.close()
