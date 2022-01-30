import {ADD_COMMENT, CHANGE_COMMENT} from'./types.js'

const initialState = {
    posts : [
        {
            imgUrl:"https://www.inform.kz/radmin/news/2021/07/14/210714122441079e.jpg",
            title:"Lorem Ipsum",
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            id:1,
            fullText: `Top US General Mark Milley has said that a Russian invasion of Ukraine would be "horrific" and would lead to a significant number of casualties.

            Gen Milley described the build-up of 100,000 Russian troops near Ukraine's border as the largest since the Cold War.
            
            But US Defence Secretary Lloyd Austin said conflict could still be avoided through the use of diplomacy.
            
            Russia denies plans to invade and says US support for Ukraine is a threat.
            
            At a news conference at the Pentagon on Friday, Gen Milley - US President Joe Biden's most senior military officer - warned that the scale of Russia's forces near its border with Ukraine meant an attack would have severe consequences.
            
            "If that was unleashed on Ukraine, it would be significant, very significant, and it would result in a significant amount of casualties," said the chairman of the joint chiefs of staff.
            
            
            Fighting in dense urban areas would be "horrific, it would be terrible", Gen Milley added.
            
            'Not inevitable'
            US Defence Secretary Lloyd Austin said the US was committed to helping Ukraine defend itself, including by providing more weaponry.
            
            "Conflict is not inevitable. There is still time and space for diplomacy," Mr Austin said, calling on Russian President Vladimir Putin to de-escalate the situation.
            
            "There is no reason that this situation has to devolve into conflict... He can order his troops away," he added.
            
            Also on Friday, President Biden said he would send a small number of troops to Eastern Europe in the "near term", to strengthen the Nato presence in the region. He did not specify where they would be stationed or when they would arrive.
            
            Earlier this week, the Pentagon said there were 8,500 combat-ready troops on alert, ready to be deployed at short notice.
            
            Why Germany isn't sending weapons to Ukraine
            What is Nato and why doesn't Russia trust it?
            Is Russia preparing to invade Ukraine?
            How big is the Russian military build-up?
            The US has rejected a key Moscow demand that Nato rule out Ukraine joining the defence alliance - but insisted it was offering Russia a "serious diplomatic path".
            
            Russian President Vladimir Putin accused the West of ignoring Russia's security concerns.
            
            But he said he would study the US response before deciding what to do, according to a Kremlin readout of a call between Mr Putin and his French counterpart.
            
            France said the two leaders had agreed on the need to de-escalate and that its President Emmanuel Macron had told Mr Putin that Russia must respect the sovereignty of its neighbouring states.`, 
            comments:[]
        },
        {
            imgUrl:"https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/16CB5/production/_123056339_gettyimages-1367673716.jpg",
            title:"Rafael Nadal beats Daniil Medvedev from two sets down in Melbourne epic",
            text:"Rafael Nadal won a record 21st Grand Slam men's title in the most stunning fashion, fighting back from two sets down to beat Russia's Daniil Medvedev in a classic Australian Open final.            Backed by a loud Melbourne crowd, sixth seed Nadal rallied to win 2-6 6-7 (5-7) 6-4 6-4 7-5 on Rod Laver Arena.",
            id:2,
            fullText: `Rafael Nadal won a record 21st Grand Slam men's title in the most stunning fashion, fighting back from two sets down to beat Russia's Daniil Medvedev in a classic Australian Open final.

            Backed by a loud Melbourne crowd, sixth seed Nadal rallied to win 2-6 6-7 (5-7) 6-4 6-4 7-5 on Rod Laver Arena.
            
            US Open champion Medvedev was going for his second successive major title.
            
            Medvedev, 25, was in command before Nadal showed all of his renowned grit and fight to earn an extraordinary win.
            
            The 35-year-old Spaniard has been at the centre of some of the sport's most incredible triumphs - but this surely goes down as the most amazing Grand Slam victory of his illustrious career.
            
            In the absence of the deported Novak Djokovic and the injured Roger Federer in Melbourne, Nadal has moved one ahead of his great rivals in the race to finish with most major men's singles titles.
            
            Nadal's achievement comes only a few months after he thought he would never be able to return to the tour because of a foot injury.
            
            "Without a doubt it is one of the most emotional wins of my career," he said after the trophy presentation.
            
            The issue restricted him to only one tournament in the final seven months of 2021, while a bout of coronavirus in mid-December also left him "very sick with fever".
            
            Those setbacks meant the Australian Open was just Nadal's second competitive event in five months, having won a warm-up tournament at Melbourne Park earlier in January.
            `, 
            comments:[]
        } ,
        {
            imgUrl:"https://ichef.bbci.co.uk/news/240/cpsprodpb/15B17/production/_123055888_maria3.jpg",
            title:"In the trenches on Ukraine's eastern frontline",
            text:"On Ukraine's eastern frontlines, in the deep winter cold, soldiers and civilians await Russia's next move.",
            id:3,
            fullText: `The frontlines of Eastern Ukraine are snow-laden and the big guns are largely silent. But snipers are bedded into this winter white wasteland. Ukrainian troops who forget to stay low in their World War One-style trenches risk a bullet to the head.

            The conflict here has been frozen in place since 2014, when separatists, backed by Moscow, seized parts of the Donbas region. At least 13,000 people have been killed, both combatants and civilians. Now Western leaders are warning of something much worse - a full-scale Russian invasion of Ukraine. If it comes, the eastern front would be an easy place to start, with the pro-Russian rebels here paving the way.
            
            Maria was trying not to stress about all that. The 26-year-old Ukrainian soldier, talkative and slight, was in her trench, armed with a Kalashnikov and a perfect manicure. She's part of Ukraine's 56th infantry brigade. (The army asked us to stick to her first name, to prevent trolling on social media.)
            
            "I try to avoid politics and not to watch TV, I try not to get too worried," Maria said. "But we are ready. We have had a lot of training. I understand that it won't be like a training exercise, it will be hard for everyone. But our morale is high and we are standing our ground."
            
            Maria has a band of brothers. Two served in Ukraine's national guard. Her youngest brother will soon be heading to the frontline, as a tank gunner. Back home her retired parents are caring for her four-year-old son.
            
            "It was very hard to leave him," she said. "But since I was six years old my dream was to join the army. I didn't think that I would end up on the frontline, but I don't regret that I am here." Nearby, one of her brothers in arms chopped wood with an axe. The cold is a constant threat, like the separatists about a kilometre away.
            `, 
            comments:[]
        },
        {
            imgUrl:"https://ichef.bbci.co.uk/news/240/cpsprodpb/137E5/production/_123054897_072449861.jpg",
            title:"UK troops 'unlikely' to fight in Ukraine - Truss",
            text:"The foreign secretary says the UK is using 'deterrence and diplomacy' to avoid further conflict.",
            id:4,
            fullText: `Russia wants the West to promise Ukraine will never join Nato, in which members promise to come to another's aid in the event of an armed attack.

            Nato's 30 members include the US, UK, and several former Soviet republics, some of which border Russia. Moscow sees Nato troops in Eastern Europe as a direct threat to its security.
            
            Mr Putin has long argued the US broke a guarantee it made in 1990 that Nato would not expand further east, though interpretations differ over exactly what was promised.
            
            Last month, Russia issued a written list of its concerns about Nato expansion and reiterated that Ukraine should never join the alliance.
            
            The US has since rejected that demand, but Secretary of State Antony Blinken said it was offering Moscow "a serious diplomatic path forward, should Russia choose it".
            
            If Russia were to invade Ukraine, it would not be the first time.
            
            Russia annexed Ukraine's southern Crimea peninsula in 2014. It is also backing rebels who seized large swathes of the eastern Donbas region soon afterwards, and some 14,000 people have died in fighting there.
            `, 
            comments:[]
        },
        {
            imgUrl:"https://ichef.bbci.co.uk/news/240/cpsprodpb/ED13/production/_123019606_maesotportrait-1024407.jpg",
            title:"Why Myanmar's peaceful protesters chose violence",
            text:"One year on, resistance to military rule is unrecognisable from its boisterous, colourful start.",
            id:5,
            fullText: `In the first hours after the military grabbed power in a shock coup in Myanmar one year ago, there was little public reaction.

            No-one seemed to know how they should react, and Aung San Suu Kyi, the woman who had led opposition to military rule for the previous three decades was under arrest.
            
            "That morning the internet and phone lines were cut", recalls Moe Sandar Myint, a prominent union leader in Hlaing Tharyar, an industrial district of Yangon.
            
            "We did not believe the news at first, but after we went out to buy radios we knew the coup was true. We were devastated. It was a day of darkness for us. Myanmar was only just starting to grow. Figuring out how to fight back against the dictators was of the utmost importance to us."
            
            But by the end of that day a message from Suu Kyi, written it seems in anticipation of the coup, had been published, urging the people of Myanmar not to accept it.
            
            At the same time one of her most trusted advisors, Win Htein, citing the example of Mahatma Gandhi, appealed for a campaign of civil disobedience, in keeping with Suu Kyi's long-standing strategy of nonviolent resistance.
            
            Thus was born the CDM, the Campaign for Civil Disobedience, initially led by health workers and teachers who refused to go to work, and quickly supported by trades unions, civil servants and a vibrant cross-section of music and movie stars, LGBT+ groups and ethnic minorities.
            
            The doctors and nurses defying Myanmar's military
            Not only did they endorse Aung San Suu Kyi's non-violent beliefs - her face was everywhere on protest posters - they also called for the restoration of the elected government she headed.
            
            Moe Sandar Myint organised the first of many worker protests four days after the coup. They were part of a nationwide movement against military rule which in that first month filled the streets with carnival-like rallies.
            
            "I was worried about my workers getting shot", she says. "But seeing the overwhelming participation of the people when we marched my fears fell away."
            
            Today she lives in exile in Thailand with her husband and three children after a gruelling flight from Yangon that took her first to the war-torn borderlands controlled by ethnic insurgents, and then on a frightening night-time journey across the border.
            `, 
            comments:[]
        },
        {
            imgUrl:"https://ichef.bbci.co.uk/news/240/cpsprodpb/4A74/production/_123006091_gettyimages-541809333-594x594.jpg",
            title:"The US shrine that claims to hold Gandhi's ashes",
            text:"Keeping the ashes without dispersing them goes against Gandhi's own wishes, his family says.",
            id:6,
            fullText: `This day marks 74 years since Indian independence leader Mahatma Gandhi, revered as father of the nation, was assassinated. Savita Patel reports from a spiritual retreat in California that claims to be holding his ashes, perhaps the only ones outside India.

            Inside Lake Shrine, a spiritual retreat on the famous Sunset Boulevard, just minutes away from Hollywood, is the Gandhi World Peace Memorial. Built in 1950 by the retreat's founder, Paramahansa Yogananda, it lies amid lush gardens and waterfalls with a view of the ocean. And it contains an ancient stone sarcophagus from China which reportedly holds a brass and silver coffer containing Gandhi's ashes.
            
            After Gandhi's funeral in 1948, his ashes were divided into more than 20 portions and dispatched across India so people around the country could mourn his death by holding memorials. Some portions even ended up outside the country.
            
            "There was a lot of demand for Bapu's ashes," says his great-grandson Tushar Gandhi. Bapu, as Gandhi was fondly known by those close to him, was assassinated just months after India won independence from Britain in August 1947.
            
            He says he had heard some 20 years ago that some of Gandhi's ashes were being stored at Lake Shrine and had contacted them, but never received a response.
            
            "Holding them goes against Bapu's wishes as he had said that once he was no more, his ashes should not be kept, but disposed of," he adds.
            `, 
            comments:[]
        },
    ]
}   

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state, posts: [{...state.posts[action.data.id-1], comments:[...state.posts[action.data.id-1].comments, {text:action.data.text, id:action.data.commentId}]}]
            } 
            break;
        case CHANGE_COMMENT:
            return {
                ...state, posts: [{...state.posts[action.data.id-1], comments: state.posts[action.data.id-1].comments.map(item => {
                    if (item.id == action.data.commentId){
                        item.text = action.data.text;
                    }
                    return item;
                })}]
            }   
            break;
        default:
            return state;
    }
}