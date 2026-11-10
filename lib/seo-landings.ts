export type SeoFaq = { q: string; a: string }

export type SeoLink = { href: string; label: string; note: string }

export type SeoPhoto = { src: string; alt: string }

export type SeoLanding = {
  slug: string
  fruit?: string
  title: string
  description: string
  eyebrow: string
  h1: string
  lede: string
  hindi: string
  facts: { label: string; value: string }[]
  sections: { heading: string; body: string }[]
  faqs: SeoFaq[]
  parent?: { href: string; label: string }
  children?: SeoLink[]
  photos?: SeoPhoto[]
  cta?: 'rates' | 'export'
}

export const seoLandings: SeoLanding[] = [
  {
    slug: 'apples',
    fruit: 'Apple',
    title: 'Azadpur Apple Rate & Himachal Wholesale | Super Sales Agro',
    description:
      'Himachal apple wholesale from the Azadpur fruit mandi. Royal Delicious and Red Gold, quoted per kg and per box. Today’s apple rate from the Super Sales Agro desk.',
    eyebrow: 'Apples',
    h1: 'Himachal apple wholesale and today’s Azadpur apple rate',
    lede:
      'Buyers looking up the Azadpur mandi apple rate, Shimla apple price, or a Himachal apple box price are usually trying to do one of two things: lock a wholesale lot, or check whether the morning mandi has moved. Super Sales Agro has bought and sold Himachal apples on that floor since 1982.',
    hindi:
      'आजादपुर मंडी सेब का भाव, दिल्ली में सेब का भाव, और शिमला सेब का रेट — सुबह का भाव व्हाट्सऐप चैनल और मंडी रेट पेज पर। बॉक्स और किलो, दोनों पर बात होती है।',
    facts: [
      { label: 'Varieties on the book', value: 'Royal Delicious, Red Gold' },
      { label: 'Mandis we quote', value: 'Azadpur, Shimla, Solan' },
      { label: 'How lots move', value: 'Per kg and per box' },
      { label: 'Farmer payment', value: 'Same day' },
    ],
    sections: [
      {
        heading: 'What apple buyers actually ask for',
        body: 'Wholesale buyers rarely search “apple”. They search the Azadpur mandi apple rate today, the Delhi apple rate per kg, the Shimla apple price, and the apple box price in Delhi. Hotels and retailers want a grade they can repeat. Exporters want count, colour, and a cold-chain window. Tell the desk the variety, the grade, and whether you buy by the kilogram or by the box.',
      },
      {
        heading: 'Shimla, Solan, and the Kinnaur lots people name',
        body: 'Our rate book follows Azadpur, Shimla, and Solan. Royal Delicious A-grade and Red Gold B-grade are the lines we post. Buyers also ask for Kinnaur by name — price per kg, box rate, and how it compares with a Shimla lot. If that fruit is on the floor, the desk will quote the count and the grade. We do not publish a Kinnaur number unless that morning’s lot is in hand.',
      },
      {
        heading: 'What sellers are searching for',
        body: 'Growers and loaders search the same rate, from the other side: today’s apple mandi bhav, and who in Azadpur will pay it without a long hold. We pay farmers the same day, and we have done that across more than 250 Himachal relationships. Narkanda, Shimla, and Solan fruit is sold on our Azadpur auction floor under licence B-4881.',
      },
    ],
    faqs: [
      {
        q: 'What is the Azadpur mandi apple rate today?',
        a: 'The morning rate is posted on the mandi rates page and the WhatsApp channel once the floor is confirmed. Until that update is in, we do not print a stale number as today’s price. Call or WhatsApp the desk for the lot in front of us.',
      },
      {
        q: 'Do you sell Himachal apples by the box?',
        a: 'Yes. Wholesale lots are quoted per kilogram and per box. Share the box count, the grade, and the market you are comparing — Azadpur, Shimla, or Solan — and the desk will price that lot.',
      },
      {
        q: 'Which apple varieties do you handle?',
        a: 'Royal Delicious and Red Gold are on the published rate book, across A-grade and B-grade. Other Himachal lines, including Kinnaur when it is arriving, are quoted from the morning auction.',
      },
    ],
    children: [
      {
        href: '/apples/shimla',
        label: 'Shimla apple price',
        note: 'The Shimla mandi line, separate from the Azadpur resale rate',
      },
      {
        href: '/apples/royal-delicious',
        label: 'Royal Delicious',
        note: 'A-grade on the Azadpur and Shimla books, per kg and per box',
      },
      {
        href: '/apples/solan',
        label: 'Solan apple price',
        note: 'Solan mandi, Red Gold B-grade',
      },
      {
        href: '/apples/kinnaur',
        label: 'Kinnaur apple',
        note: 'Quoted when that lot is on the floor',
      },
      {
        href: '/apples/narkanda',
        label: 'Narkanda apple mandi',
        note: 'The apple mandi, not the hill station',
      },
    ],
  },
  {
    slug: 'mangoes',
    fruit: 'Mango',
    title: 'Azadpur Mango Rate & Wholesale Supply | Super Sales Agro',
    description:
      'Seasonal mango wholesale from Azadpur mandi, including Dasheri. Today’s mango rate for traders, processors, and exporters. Super Sales Agro, Delhi.',
    eyebrow: 'Mangoes',
    h1: 'Mango wholesale and the Azadpur mandi mango rate',
    lede:
      'Mango searches spike by city and by the day: mango wholesale price per kg, and the Azadpur mandi mango rate today. The fruit is seasonal, the grade changes with the week, and a ripe Dasheri lot is not the same buy as a processing lot.',
    hindi: 'आजादपुर मंडी आम का रेट सीजन के हिसाब से बदलता है। दशहरी और बाकी किस्मों का भाव सुबह पुष्टि के बाद ही जाता है।',
    facts: [
      { label: 'Line on the book', value: 'Dasheri, ripe' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Buyers', value: 'Traders, processors, export' },
      { label: 'Desk', value: 'Since 1982' },
    ],
    sections: [
      {
        heading: 'Wholesale, not a retail crate',
        body: 'People searching “mango wholesale near me” or “mango wholesale market” want a mandi price, not a store price. We sell from the Azadpur floor to traders, pulp and slice processors, and exporters who need a variety, a ripening stage, and a volume they can plan. Domestic supply and export packing both start from that same lot.',
      },
      {
        heading: 'How to read a mango rate',
        body: 'A single “mango rate today” hides the variety and the stage. Our rate book carries Dasheri ripe fruit from Azadpur, and the note on that line is that it is a seasonal peak. If you need a different variety, or fruit for processing rather than the table, say so before you compare the number with another mandi.',
      },
    ],
    faqs: [
      {
        q: 'What is the Azadpur mandi mango rate today?',
        a: 'It is published with the other morning fruit rates once the floor check is in. Out of season, or before that update, ask the desk rather than treating an old card as today’s bhav.',
      },
      {
        q: 'Do you supply mangoes outside Delhi?',
        a: 'Yes. Azadpur is the buying floor. Wholesale buyers, processors, and export programmes take delivery beyond Delhi NCR against a confirmed lot.',
      },
    ],
    children: [
      {
        href: '/mangoes/dasheri',
        label: 'Dasheri mango',
        note: 'Ripe Dasheri from Azadpur, in season',
      },
    ],
  },
  {
    slug: 'kinnow',
    fruit: 'Kinnow',
    title: 'Kinnow Rate Today, Azadpur Mandi | Super Sales Agro',
    description:
      'Azadpur mandi kinnow rate and Delhi kinnow wholesale. Premium 48+ count from Punjab and Rajasthan citrus, for traders, juicers, and hotels.',
    eyebrow: 'Kinnow',
    h1: 'Kinnow rate today at Azadpur, and wholesale citrus lots',
    lede:
      'Kinnow buyers search the rate before they search the seller: kinnow rate today, kinnow rate in Delhi, kinnow rate per kg, and the Azadpur mandi kinnow rate. Abohar and the rest of Punjab set the season. Delhi is where a large share of that fruit is priced for the north.',
    hindi: 'आजादपुर मंडी किन्नू का रेट और दिल्ली में किन्नू का भाव — काउंट और क्वालिटी बताकर सुबह का लॉट पूछें।',
    facts: [
      { label: 'Grade on the book', value: 'Premium, 48+ count' },
      { label: 'Origin we handle', value: 'Punjab and Rajasthan' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Season', value: 'Winter citrus' },
    ],
    sections: [
      {
        heading: 'The rate is a count, not just a fruit',
        body: 'A kinnow rate per kg moves with count, colour, and how far the season has run. We post a premium 48+ count line from Azadpur. If you are comparing an Abohar farm rate with a Delhi mandi rate, those are different points in the chain. Tell us which one you are benchmarking.',
      },
      {
        heading: 'Who buys the lot',
        body: 'Traders reload for other markets. Juice and processing buyers want size that runs. Hotels and caterers want a count that portions cleanly. The same Azadpur desk covers those asks, with grading before the fruit leaves the mandi.',
      },
    ],
    faqs: [
      {
        q: 'What is the kinnow rate in Delhi today?',
        a: 'The Azadpur morning rate goes up with the daily fruit rates. For a specific count or a loose versus packed lot, WhatsApp the desk so you are quoting the fruit you will actually receive.',
      },
      {
        q: 'Is this the Abohar kinnow rate?',
        a: 'No. Abohar is a producing mandi. We quote the Delhi wholesale market, where Punjab and Rajasthan kinnow is sold on to traders, processors, and kitchens.',
      },
    ],
  },
  {
    slug: 'pears',
    fruit: 'Pear',
    title: 'Nashpati Rate Delhi & Pear Wholesale | Super Sales Agro',
    description:
      'Nashpati mandi rate and pear wholesale from Shimla and Azadpur. Baggi Gola and imported Williams. Today’s pear rate from Super Sales Agro.',
    eyebrow: 'Pears',
    h1: 'Nashpati rate in Delhi, and pear wholesale from Shimla',
    lede:
      'In the mandi the search is “nashpati”, not “pear”. Buyers look up the nashpati rate today, the nashpati rate in Delhi, the nashpati mandi rate, and the price per kg. We sell both the Himachal fruit and imported pears off the Azadpur floor.',
    hindi: 'नाशपाती का रेट आज, दिल्ली में नाशपाती का भाव, और नाशपाती मंडी रेट — बग्गी गोला शिमला से, विलियम्स इम्पोर्ट आजादपुर से।',
    facts: [
      { label: 'Himachal line', value: 'Baggi Gola, Shimla' },
      { label: 'Import line', value: 'Williams, Azadpur' },
      { label: 'Quote', value: 'Per kg, morning floor' },
      { label: 'Also called', value: 'Nashpati' },
    ],
    sections: [
      {
        heading: 'Two pears, two rates',
        body: 'Baggi Gola from Shimla and imported Williams on the Azadpur floor do not share a price. A “nashpati rate per kg” that does not name the variety will not match the invoice. Say which fruit, and whether it is for a wholesale reload, a hotel, or an export carton.',
      },
      {
        heading: 'Domestic and outbound',
        body: 'Domestic wholesale buyers take Himachal pears through the season. Export programmes use the same grading and cold-chain path as our other fruit: spec, pack, pre-cool, then the port. Both start with the lot we can actually show you.',
      },
    ],
    faqs: [
      {
        q: 'What is the nashpati rate in Delhi today?',
        a: 'Check the mandi rates page for the morning Shimla and Azadpur lines. If a variety is not on the card yet, the desk will tell you whether it is on the floor.',
      },
      {
        q: 'Do you have Indian pears and imported pears?',
        a: 'Yes. Baggi Gola is the Himachal line we rate from Shimla. Williams is the import line we rate from Azadpur.',
      },
    ],
    children: [
      {
        href: '/pears/baggi-gola',
        label: 'Baggi Gola',
        note: 'Shimla nashpati, per kg',
      },
      {
        href: '/pears/williams',
        label: 'Williams pear',
        note: 'Imported, Azadpur floor',
      },
    ],
  },
  {
    slug: 'pomegranate',
    fruit: 'Pomegranate',
    title: 'Pomegranate Rate Today, Delhi | Super Sales Agro',
    description:
      'Pomegranate rate today per kg in Delhi. Bhagwa wholesale from Azadpur mandi for traders, aril processors, retailers, and export. Super Sales Agro.',
    eyebrow: 'Pomegranate',
    h1: 'Pomegranate rate today, wholesale from Azadpur',
    lede:
      'The search is almost always the day’s number: pomegranate rate today, pomegranate rate per kg, and the Delhi rate. Size and colour decide whether that number is a table fruit, a retail programme, or an aril lot.',
    hindi: 'अनार का रेट आज प्रति किलो — दिल्ली और आजादपुर मंडी में भगवा के बड़े साइज का भाव सुबह के लॉट पर।',
    facts: [
      { label: 'Variety on the book', value: 'Bhagwa, large' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Buyers', value: 'Trade, retail, processors' },
      { label: 'Pack', value: 'Buyer spec, export grade' },
    ],
    sections: [
      {
        heading: 'A Delhi rate, not a national average',
        body: 'Pomegranate rate today in Bangalore or Chennai will not match Azadpur. We publish the Delhi wholesale line: Bhagwa, large, from the Azadpur floor. If you are buying for a retail chain or a hotel programme, the standing-order desk is the same one that supplies our hospitality accounts.',
      },
      {
        heading: 'Processing and export',
        body: 'Aril and juice buyers care about internal colour and a volume that holds for the run. Export buyers care about size, defect, and the carton. Both are graded at Azadpur before dispatch, not at the destination.',
      },
    ],
    faqs: [
      {
        q: 'What is the pomegranate rate per kg in Delhi?',
        a: 'The morning Azadpur range is on the mandi rates page when it has been confirmed. For a size band tighter than “large Bhagwa”, ask the desk for that lot’s number.',
      },
      {
        q: 'Can you supply pomegranate outside the mandi?',
        a: 'Yes. Wholesale, hospitality, retail programmes, and export packing are all supplied from the same Azadpur purchase.',
      },
    ],
    children: [
      {
        href: '/pomegranate/bhagwa',
        label: 'Bhagwa pomegranate',
        note: 'Large Bhagwa from the Azadpur floor',
      },
    ],
  },
  {
    slug: 'guavas',
    fruit: 'Guava',
    title: 'Guava Rate Today, Azadpur Mandi | Super Sales Agro',
    description:
      'Guava rate today per kg in Delhi. Lucknow and Allahabad guava wholesale from Azadpur mandi for traders, juice, and hotel supply. Super Sales Agro.',
    eyebrow: 'Guavas',
    h1: 'Guava rate today at the Azadpur fruit mandi',
    lede:
      'Guava buyers search a city and a unit: guava rate today, guava rate per kg, guava rate in Delhi. The variety matters as much as the city. A green Lucknow lot and a ripe table lot are different fruit.',
    hindi: 'अमरूद का रेट आज दिल्ली में — लखनऊ अमरूद का आजादपुर मंडी भाव, किलो के हिसाब से, सुबह की पुष्टि के बाद।',
    facts: [
      { label: 'Line on the book', value: 'Lucknow, green' },
      { label: 'Also handled', value: 'Allahabad and others' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Use', value: 'Trade, juice, kitchens' },
    ],
    sections: [
      {
        heading: 'Delhi wholesale, not a neighbourhood rate',
        body: 'Guava rates in Mumbai, Pune, or Bangalore are different markets. Our card is the Azadpur wholesale rate for Lucknow green fruit, with Allahabad and other lines quoted when they are arriving. Traders, juice plants, and hotel kitchens pull from that same floor.',
      },
      {
        heading: 'Tell us the stage',
        body: 'Green fruit for a longer haul and ripe fruit for a Delhi kitchen should not be priced as one lot. Share the variety, the stage, and the kilogram or carton count. The desk grades before dispatch.',
      },
    ],
    faqs: [
      {
        q: 'What is the guava rate in Delhi today?',
        a: 'Look at the Azadpur line on the mandi rates page after the morning update. For a variety that is not on the card, ask whether it is on the floor that day.',
      },
      {
        q: 'Which guava varieties do you sell?',
        a: 'Lucknow green is the published line. Allahabad and other guavas are bought and sold as they arrive at Azadpur.',
      },
    ],
    children: [
      {
        href: '/guavas/lucknow',
        label: 'Lucknow guava',
        note: 'Green, the published Azadpur line',
      },
    ],
  },
  {
    slug: 'oranges',
    fruit: 'Orange',
    title: 'Nagpur Orange Rate, Azadpur Mandi | Super Sales Agro',
    description:
      'Nagpur orange rate at Azadpur mandi. Medium Nagpur fruit, quoted per kg from the Delhi floor. Super Sales Agro.',
    eyebrow: 'Oranges',
    h1: 'Nagpur orange rate at Azadpur mandi',
    lede:
      'The orange line on our book is Nagpur, medium, sold at Azadpur. A search for “orange” alone is not this fruit. Buyers who want the Delhi wholesale number want the Nagpur lot on this floor, not a farm rate in Nagpur and not a retail orange.',
    hindi: 'नागपुर संतरे का आजादपुर मंडी रेट मीडियम साइज का है। नागपुर का फार्म रेट और दिल्ली का थोक रेट अलग हैं।',
    facts: [
      { label: 'Variety on the book', value: 'Nagpur, medium' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Quote', value: 'Per kg, morning floor' },
      { label: 'Producing mandi', value: 'Nagpur, not this rate' },
    ],
    sections: [
      {
        heading: 'Delhi resale, not the Nagpur farm gate',
        body: 'Nagpur is where this orange is grown. Azadpur is where we sell it on to traders, kitchens, and programmes. Those two numbers will not match. This page is the Azadpur line. If you are benchmarking a Nagpur farm purchase, say so.',
      },
      {
        heading: 'Medium is the published size',
        body: 'The book line is medium. A tighter size band, or a lot that is not Nagpur, is a different quote. Allahabad-style “when it arrives” fruit does not get published as today’s Nagpur rate.',
      },
    ],
    faqs: [
      {
        q: 'What is the Nagpur orange rate at Azadpur today?',
        a: 'The morning Azadpur range is on the mandi rates page once it is confirmed. Until then, ask the desk. An old card is not today’s price.',
      },
      {
        q: 'Is this the rate in Nagpur city?',
        a: 'No. Nagpur is the producing side. We quote the fruit after it reaches the Azadpur floor in Delhi.',
      },
    ],
    children: [
      {
        href: '/oranges/nagpur',
        label: 'Nagpur orange',
        note: 'Medium, the published line',
      },
    ],
  },
  {
    slug: 'azadpur-mandi',
    title: 'Azadpur Mandi Fruit Wholesaler, Delhi | Super Sales Agro',
    description:
      'Fruit commission agent at Azadpur mandi, New Subzi Mandi, Delhi 110034. Apple, kinnow, mango, pear, orange, pomegranate, and guava. Licence B-4881. Today’s fruit rates.',
    eyebrow: 'Azadpur',
    h1: 'Azadpur mandi fruit wholesaler in Delhi',
    lede:
      'Azadpur mandi, Azadpur subzi mandi, and the Azadpur fruit market are the same search for most people: Delhi’s wholesale yard, pin code 110034. Super Sales Agro is a fruit commission agent on that floor — head office at A-285, New Subzi Mandi, and the auction site under licence B-4881.',
    hindi:
      'आजादपुर मंडी दिल्ली, नई सब्जी मंडी, पिन 110034। सेब, किन्नू, आम, नाशपाती, अनार और अमरूद का थोक। सब्जी का सरकारी भाव एपीएमसी जारी करता है — हम फल का भाव देते हैं।',
    photos: [
      {
        src: '/media/floor/p-shop.jpg',
        alt: 'Super Sales Agro shops at Azadpur, with apple cartons stacked under the shed',
      },
      {
        src: '/media/floor/p-platform.jpg',
        alt: 'Buyers on the Azadpur auction platform at Super Sales Agro',
      },
      {
        src: '/media/floor/p-open-box.jpg',
        alt: 'An open fruit box checked on the Azadpur mandi floor',
      },
    ],
    facts: [
      { label: 'Head office', value: 'A-285, New Subzi Mandi' },
      { label: 'Auction licence', value: 'B-4881' },
      { label: 'Pin code', value: 'Delhi 110034' },
      { label: 'On this floor since', value: '1982' },
    ],
    sections: [
      {
        heading: 'Fruit mandi, not the vegetable rate card',
        body: 'A lot of Azadpur searches are for onion, tomato, ginger, or garlic. Those bhav are published by the APMC. We do not republish them. The searches we answer are the fruit ones: Azadpur fruit mandi, Azadpur fal mandi, Azadpur mandi rates for apple, kinnow, mango, nashpati, pomegranate, and guava, and the Delhi fruit wholesale market.',
      },
      {
        heading: 'Domestic buyers and the farmers who load in',
        body: 'Domestic wholesale — processors, exporters, traders, hotels, and retail programmes — buys here and moves fruit across India. Farmers and transporters search the same mandi for the best rate and for payment that does not wait. We pay farmers the same day. Annual throughput is above 65,000 MT, from this yard and the Himachal mandis tied to it.',
      },
      {
        heading: 'How to reach the desk',
        body: 'Call +91-9899262264 or +91-9711269346, or email supersalesagro@gmail.com. Morning fruit rates go on the mandi rates page and the WhatsApp channel. The auction site is inside Azadpur; the head office is A-285, New Subzi Mandi, Azadpur, Delhi 110034.',
      },
    ],
    faqs: [
      {
        q: 'Where is Azadpur mandi?',
        a: 'New Subzi Mandi, Azadpur, Delhi 110034. Super Sales Agro’s head office is A-285. The auction site trades under licence B-4881.',
      },
      {
        q: 'What is the Azadpur mandi rate today?',
        a: 'For fruit, see today’s mandi rates once the morning floor is confirmed. For onion, potato, and other vegetables, use the APMC Azadpur card — that is not our list.',
      },
      {
        q: 'Are you a fruit commission agent in Azadpur?',
        a: 'Yes. We buy from farmers and sell to wholesale, hospitality, retail, and export buyers from the Azadpur fruit market.',
      },
    ],
  },
]

export const seoVarietyPages: SeoLanding[] = [
  {
    slug: 'apples/shimla',
    parent: { href: '/apples', label: 'Apples' },
    title: 'Shimla Apple Price per kg | Super Sales Agro',
    description:
      'Shimla apple price per kg from the Shimla mandi, quoted separately from the Azadpur resale rate. Royal Delicious A-grade, per kg and per box. Super Sales Agro.',
    eyebrow: 'Shimla',
    h1: 'Shimla apple price per kg',
    lede:
      'A Shimla apple price and an Azadpur apple price are two points on the same fruit. Shimla is where the Himachal lot is first sold. Azadpur is where Delhi and the rest of the north buy it again. Super Sales Agro quotes both, and they are not the same number.',
    hindi: 'शिमला सेब का रेट प्रति किलो शिमला मंडी का है। दिल्ली का आजादपुर रेट उसके बाद का है। दोनों एक भाव नहीं हैं।',
    facts: [
      { label: 'Mandi', value: 'Shimla, HP' },
      { label: 'Line on the book', value: 'Royal Delicious, A-grade' },
      { label: 'Also on this desk', value: 'Azadpur resale, Solan' },
      { label: 'Quote', value: 'Per kg and per box' },
    ],
    sections: [
      {
        heading: 'Why the Shimla rate is not the Delhi rate',
        body: 'Buyers searching “shimla apple price per kg”, “shimla apple price today”, and “shimla apple price in delhi” are often comparing a hill mandi with a city mandi. Freight, the day of arrival, and the grade sit between them. Ask which market the number is from before you hold it against another seller.',
      },
      {
        heading: 'What the Shimla line is',
        body: 'The published Shimla line is Royal Delicious, A-grade. The box is priced by that morning’s count and net weight, not by a fixed carton we invent in advance. Red Gold from Solan, and the Azadpur resale of the same variety, are different lines. Kinnaur is quoted only in the weeks it is on the floor.',
      },
    ],
    faqs: [
      {
        q: 'What is the Shimla apple price per kg today?',
        a: 'It goes on the mandi rates page, on the Shimla row, once that morning’s floor is confirmed. Until then the desk will quote the lot in hand. We do not leave an old Shimla number up as today’s price.',
      },
      {
        q: 'Is the Shimla price the same as Azadpur?',
        a: 'No. Shimla is the producing mandi. Azadpur is the Delhi wholesale market. Both are on our book, and each has its own rate.',
      },
    ],
  },
  {
    slug: 'apples/royal-delicious',
    parent: { href: '/apples', label: 'Apples' },
    title: 'Royal Delicious Apple Price per kg | Super Sales Agro',
    description:
      'Royal Delicious apple price per kg and per box. A-grade from the Shimla and Azadpur books. Grade, count, and net weight confirmed each morning by Super Sales Agro.',
    eyebrow: 'Royal Delicious',
    h1: 'Royal Delicious apple price per kg and per box',
    lede:
      'Royal Delicious is the Himachal apple most wholesale buyers name. The price they want is per kilogram, and the lot they book is usually a box. The grade and the count decide which of those numbers you are actually being offered.',
    hindi:
      'रॉयल डिलीशियस सेब का रेट ए-ग्रेड का है, शिमला और आजादपुर दोनों बुक पर। किलो और बॉक्स, सुबह के काउंट और वजन पर।',
    facts: [
      { label: 'Grade on the book', value: 'A-grade' },
      { label: 'Mandis', value: 'Shimla and Azadpur' },
      { label: 'The other grade', value: 'Red Gold, B-grade, Solan' },
      { label: 'How it is sold', value: 'Per kg and per box' },
    ],
    sections: [
      {
        heading: 'Grade first, then the rate',
        body: 'On our book, Royal Delicious A-grade is the Shimla line and the Azadpur line. Red Gold B-grade is the Solan line. A search for “royal delicious apple price” that does not name the grade will not match the invoice. Tell the desk the market and whether you want the A-grade fruit.',
      },
      {
        heading: 'The box',
        body: 'Wholesale buyers book by the box and still compare a per-kg price. The box we sell is that morning’s lot: count and net weight confirmed before the rate is locked. We do not publish a standing carton weight, because the pack changes with the arrival. Share the box count you need and the desk will price that lot.',
      },
    ],
    faqs: [
      {
        q: 'What is the Royal Delicious apple price per kg?',
        a: 'The morning Shimla and Azadpur lines are posted on the rates page when the floor is confirmed. Both are A-grade Royal Delicious. They are not one national price.',
      },
      {
        q: 'Do you sell Royal Delicious by the box?',
        a: 'Yes. The quote is per kilogram and per box, against the count and net weight of the lot. Say how many boxes and which mandi you are comparing.',
      },
    ],
  },
  {
    slug: 'mangoes/dasheri',
    parent: { href: '/mangoes', label: 'Mangoes' },
    title: 'Dasheri Mango Price | Azadpur Wholesale | Super Sales Agro',
    description:
      'Dasheri mango wholesale from Azadpur mandi. Ripe fruit for the table, and lots for pulp and slice plants, in season. Today’s rate from Super Sales Agro.',
    eyebrow: 'Dasheri',
    h1: 'Dasheri mango wholesale from Azadpur',
    lede:
      'Dasheri is the mango on our Azadpur rate book: ripe fruit, marked as a seasonal peak. Buyers looking up the variety want a mandi price, a stage of ripeness, and a volume a plant or a trader can actually take.',
    hindi: 'दशहरी आम का थोक आजादपुर मंडी से, सीजन में। पके फल का भाव सुबह की पुष्टि के बाद। सीजन के बाहर पुराना रेट आज का रेट नहीं है।',
    facts: [
      { label: 'Variety', value: 'Dasheri' },
      { label: 'Stage on the book', value: 'Ripe' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Season', value: 'Peak, then it closes' },
    ],
    sections: [
      {
        heading: 'Table fruit and processing fruit',
        body: 'A ripe Dasheri for a trader is not the same lot as fruit for pulp or slices. The rate book line is ripe Dasheri from Azadpur. If you need a firmer stage, or another variety such as Alphonso when that export line is open, say so. The desk will tell you what is actually arriving.',
      },
      {
        heading: 'The season is the page',
        body: 'Dasheri has a window. Outside it, a saved price from last summer is not a rate. During the peak, the morning number sits with the other fruit on the mandi rates page. Export packing for the variety uses the same grading and cold chain as the rest of the programme.',
      },
    ],
    faqs: [
      {
        q: 'What is the Dasheri mango price today?',
        a: 'In season, it is the ripe Dasheri line on the Azadpur rates page after the morning check. Out of season, ask the desk rather than using a leftover number.',
      },
      {
        q: 'Do you send Dasheri outside Delhi?',
        a: 'Yes. Traders, processors, and export programmes take it from the Azadpur purchase, against a confirmed lot and a delivery window.',
      },
    ],
  },
  {
    slug: 'pomegranate/bhagwa',
    parent: { href: '/pomegranate', label: 'Pomegranate' },
    title: 'Bhagwa Pomegranate Price per kg | Super Sales Agro',
    description:
      'Bhagwa pomegranate wholesale from Azadpur. Large fruit for trade, retail, aril plants, and export. Price per kg from the Super Sales Agro desk in Delhi.',
    eyebrow: 'Bhagwa',
    h1: 'Bhagwa pomegranate price per kg',
    lede:
      'Bhagwa is the pomegranate on our Azadpur book: large fruit, sold wholesale. The per-kg price moves with size and internal colour, which is why a single “pomegranate rate” rarely matches the lot a buyer receives.',
    hindi: 'भगवा अनार का रेट प्रति किलो, बड़े साइज का, आजादपुर मंडी से। टेबल, रिटेल, एरिल और एक्सपोर्ट — ग्रेड बताकर सुबह का लॉट पूछें।',
    facts: [
      { label: 'Variety', value: 'Bhagwa' },
      { label: 'Size on the book', value: 'Large' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Buyers', value: 'Trade, aril, export' },
    ],
    sections: [
      {
        heading: 'What large Bhagwa is for',
        body: 'Retail programmes and hotel fruit want size that displays. Aril and juice buyers want colour on the inside and a run of volume. Export cartons want the defect rate agreed before the fruit leaves Azadpur. All three can be Bhagwa. They are not the same specification, and they should not be one price.',
      },
      {
        heading: 'Delhi, not a national average',
        body: 'Bhagwa prices in other cities will not match this floor. We publish the Azadpur wholesale line. If you need a standing weekly programme rather than a spot lot, that is the hospitality and retail desk, supplied from the same purchase.',
      },
    ],
    faqs: [
      {
        q: 'What is the Bhagwa pomegranate price per kg?',
        a: 'The large Bhagwa line from Azadpur is on the morning rates page once it is confirmed. For a tighter size band, ask the desk for that lot.',
      },
      {
        q: 'Can Bhagwa be packed for export?',
        a: 'Yes, when the lot meets the size and defect spec. Grading and carton packing happen at Azadpur before dispatch.',
      },
    ],
  },
  {
    slug: 'apples/solan',
    parent: { href: '/apples', label: 'Apples' },
    title: 'Solan Mandi Apple Price Today | Red Gold | Super Sales Agro',
    description:
      'Solan mandi apple price today. Red Gold B-grade from Solan, quoted per kg and per box, separate from Shimla Royal Delicious. Super Sales Agro.',
    eyebrow: 'Solan',
    h1: 'Solan mandi apple price today',
    lede:
      'The Solan line on our book is Red Gold, B-grade. It is not the Shimla Royal Delicious and it is not the Azadpur resale of that A-grade fruit. Buyers looking up the Solan mandi apple price, or a Red Gold apple price from Himachal, need this mandi and this grade named.',
    hindi: 'सोलन मंडी सेब का रेट रेड गोल्ड, बी-ग्रेड का है। शिमला का रॉयल डिलीशियस ए-ग्रेड अलग लाइन है।',
    facts: [
      { label: 'Mandi', value: 'Solan, HP' },
      { label: 'Variety', value: 'Red Gold' },
      { label: 'Grade on the book', value: 'B-grade' },
      { label: 'Quote', value: 'Per kg and per box' },
    ],
    sections: [
      {
        heading: 'Red Gold is the Solan apple',
        body: 'A search for “red gold apple” without Himachal or Solan in it is often a watch band, not fruit. The apple we sell under that name is the B-grade line from Solan mandi. Say Solan, or Red Gold from Himachal, when you ask for the rate. The desk quotes it per kilogram and per box, against that morning’s count and net weight.',
      },
      {
        heading: 'How it sits next to Shimla',
        body: 'Shimla is Royal Delicious, A-grade. Solan is Red Gold, B-grade. Azadpur sells both again after they arrive in Delhi, at a different number. If you are comparing a Solan farm rate with an Azadpur trader rate, those are different points in the chain. Tell us which one you are benchmarking.',
      },
    ],
    faqs: [
      {
        q: 'What is the Solan mandi apple price today?',
        a: 'The Solan row on the mandi rates page is updated when that morning’s floor is confirmed. Until then, ask the desk. An old Solan card is not today’s price.',
      },
      {
        q: 'Is Red Gold the same as Royal Delicious?',
        a: 'No. Red Gold B-grade is the Solan line. Royal Delicious A-grade is the Shimla and Azadpur line.',
      },
    ],
  },
  {
    slug: 'apples/kinnaur',
    parent: { href: '/apples', label: 'Apples' },
    title: 'Kinnaur Apple Price per kg | Super Sales Agro',
    description:
      'Kinnaur apple price per kg and today’s rate when the lot is on the Azadpur floor. Compared with Shimla on request. Super Sales Agro, Delhi.',
    eyebrow: 'Kinnaur',
    h1: 'Kinnaur apple price per kg',
    lede:
      'Buyers ask for the Kinnaur apple price per kg, today’s Kinnaur rate, and how it compares with Shimla. Kinnaur cartons move through our Azadpur shed when that fruit is arriving. The price is the lot in front of the desk, not a standing Kinnaur number.',
    hindi:
      'किन्नौर सेब का रेट प्रति किलो तभी है जब वह लॉट फर्श पर हो। शिमला के रॉयल डिलीशियस से इसकी तुलना काउंट और ग्रेड पर होती है।',
    facts: [
      { label: 'When we quote it', value: 'Days the lot is in' },
      { label: 'Where it is sold', value: 'Azadpur floor' },
      { label: 'Compared with', value: 'Shimla Royal Delicious' },
      { label: 'Quote', value: 'Per kg and per box' },
    ],
    sections: [
      {
        heading: 'A lot, not a catalogue price',
        body: 'Kinnaur is not a line we leave on the rate card every morning the way Royal Delicious is. When the cartons are in the shed, the desk quotes count, grade, and the per-kg and per-box price of that arrival. On days it is not in, we will say so. We do not keep yesterday’s Kinnaur figure up as today’s rate.',
      },
      {
        heading: 'Kinnaur against Shimla',
        body: 'People search the comparison because the two Himachal apples do not trade as one fruit. Shimla Royal Delicious A-grade is the book line from the Shimla mandi. Kinnaur is quoted from the Azadpur arrival. Colour, count, and the day of the truck decide which one a buyer actually wants. Name the grade before you ask which is higher.',
      },
    ],
    faqs: [
      {
        q: 'What is the Kinnaur apple rate today?',
        a: 'If Kinnaur is on the floor this morning, the desk will give the per-kg and per-box rate. If it is not on the floor, there is no Kinnaur rate to publish.',
      },
      {
        q: 'Do you sell Kinnaur apples by the box?',
        a: 'Yes, when the lot is in. The box is that arrival’s count and net weight, priced per box and per kilogram.',
      },
    ],
  },
  {
    slug: 'apples/narkanda',
    parent: { href: '/apples', label: 'Apples' },
    title: 'Narkanda Apple Mandi | Super Sales Agro',
    description:
      'Narkanda apple mandi fruit, bought and sold through Super Sales Agro at Azadpur. Orchard apples from the belt, graded per kg and per box. Not a guide to the hill station.',
    eyebrow: 'Narkanda',
    h1: 'Narkanda apple mandi',
    lede:
      'Narkanda apple searches split in two. One is the hill station. The other is the apple mandi and the orchards: who is buying the fruit, and what it does when it reaches Delhi. Super Sales Agro is the second of those. We have taken Himachal apples, including Narkanda fruit, onto the Azadpur auction floor since 1982.',
    hindi: 'नरकंडा एप्पल मंडी का फल आजादपुर में बिकता है। नरकंडा शहर या घूमने की जगह यह पेज नहीं है।',
    facts: [
      { label: 'What this page is', value: 'The apple mandi' },
      { label: 'Where it is sold', value: 'Azadpur, Delhi' },
      { label: 'Licence', value: 'B-4881' },
      { label: 'Quote', value: 'Per kg and per box' },
    ],
    sections: [
      {
        heading: 'The mandi, not the town',
        body: '“Narkanda” on its own is a search for the town, the views, and the drive. “Narkanda apple mandi” and “Narkanda apple orchards” are searches for the fruit. Growers on that belt want a buyer who will take the lot and pay. Wholesale buyers want the grade after it has been seen. Both of those conversations happen on our Azadpur desk, not in a travel listing.',
      },
      {
        heading: 'How a Narkanda lot is priced',
        body: 'Fruit from the belt is graded with the rest of the Himachal apple book. Royal Delicious A-grade is the Shimla and Azadpur line. Red Gold B-grade is Solan. A Narkanda lot is priced on its own count and grade, per kilogram and per box, once it is on the floor. The morning card carries the confirmed lines. A belt name alone is not a rate.',
      },
    ],
    faqs: [
      {
        q: 'Do you buy apples from Narkanda?',
        a: 'Yes. Narkanda fruit is part of the Himachal apple we auction at Azadpur under licence B-4881. Farmers are paid the same day.',
      },
      {
        q: 'What is the Narkanda apple price today?',
        a: 'It is whatever grade and count is on the floor this morning, quoted by the desk. The published card is the confirmed Shimla, Solan, and Azadpur lines. A Narkanda lot that is in gets its own quote.',
      },
    ],
  },
  {
    slug: 'export/apples',
    cta: 'export',
    parent: { href: '/export', label: 'Export' },
    title: 'Apple Exporters in India | Himachal | Super Sales Agro',
    description:
      'Apple exporters in India. Himachal apples packed for the UK, Europe, Australia, the Middle East, and South East Asia from Azadpur. Super Sales Agro.',
    eyebrow: 'Apple export',
    h1: 'Apple exporters in India, from the Himachal lot',
    lede:
      'Buyers searching for apple exporters in India, or for apple export from India, want a packer who can name the variety, the grade, and the port. Super Sales Agro buys Himachal apples at Azadpur and Shimla and packs them for export from that same lot.',
    hindi:
      'हिमाचल सेब का निर्यात आजादपुर से होता है। ग्रेड, कार्टन और गंतव्य बंदरगाह भेजें। भाव का पेज अलग है।',
    facts: [
      { label: 'Fruit', value: 'Himachal apple' },
      { label: 'Grades on the book', value: 'Royal Delicious, Red Gold' },
      { label: 'Standing lanes', value: 'UK, Europe, Gulf, SE Asia, Australia' },
      { label: 'Licence', value: 'B-4881' },
    ],
    sections: [
      {
        heading: 'What an overseas buyer sends',
        body: 'Variety, grade, carton count, destination port, and the sailing week. We answer with the lot we can actually pack: count, defect, and whether it is Royal Delicious A-grade or Red Gold B-grade. A rate-today search belongs on the apple pages. This page is the export order.',
      },
      {
        heading: 'Where the fruit is packed',
        body: 'The apples are bought on the Azadpur and Himachal floors, graded, packed to the buyer spec, and pre-cooled before they leave Delhi. Phytosanitary papers are coordinated with the forwarder. We do not publish a customs guide for the destination country.',
      },
    ],
    faqs: [
      {
        q: 'Do you export Himachal apples?',
        a: 'Yes. Royal Delicious and Red Gold are the apple lines we pack for buyers outside India, from the Azadpur and Himachal purchase.',
      },
      {
        q: 'Which countries do you ship apples to?',
        a: 'The standing lanes are the United Kingdom, Europe, Australia, the Middle East, and South East Asia. A buyer elsewhere can still send a spec.',
      },
    ],
  },
  {
    slug: 'export/kinnow',
    cta: 'export',
    parent: { href: '/export', label: 'Export' },
    title: 'Kinnow Export from India | Super Sales Agro',
    description:
      'Kinnow export from India. Premium 48+ count from Punjab and Rajasthan, packed at Azadpur for overseas buyers. Super Sales Agro.',
    eyebrow: 'Kinnow export',
    h1: 'Kinnow export from India',
    lede:
      'Kinnow export from India is a winter citrus order, not the Abohar farm rate and not the Delhi resale price. Super Sales Agro buys Punjab and Rajasthan kinnow and packs the export-quality count at Azadpur.',
    hindi:
      'किन्नू का निर्यात पंजाब और राजस्थान के फल से आजादपुर में पैक होता है। यह अबोहर का फार्म रेट नहीं है।',
    facts: [
      { label: 'Count on the book', value: 'Premium, 48+' },
      { label: 'Origin we handle', value: 'Punjab and Rajasthan' },
      { label: 'Packed at', value: 'Azadpur, Delhi' },
      { label: 'Season', value: 'Winter citrus' },
    ],
    sections: [
      {
        heading: 'Export quality, not the mandi average',
        body: 'A kinnow export lot is judged on count, colour, and how far the season has run. The premium 48+ line is the one we offer for a carton programme. Smaller or tired fruit can still sell on the Delhi floor. It should not be booked as export.',
      },
      {
        heading: 'How to ask for it',
        body: 'Send the count, the carton quantity, the destination port, and the week you need it. We confirm from the fruit that is actually arriving. Pakistan kinnow is a different origin. This desk sells Indian fruit only.',
      },
    ],
    faqs: [
      {
        q: 'Is this the Abohar kinnow price?',
        a: 'No. Abohar is a producing mandi. Export packing is done from the Delhi purchase of Punjab and Rajasthan fruit, to the count you specify.',
      },
      {
        q: 'When is kinnow available for export?',
        a: 'Through the winter citrus season. Outside that window the desk will say so, rather than substitute another fruit under the kinnow name.',
      },
    ],
  },
  {
    slug: 'export/pomegranate',
    cta: 'export',
    parent: { href: '/export', label: 'Export' },
    title: 'Pomegranate Exporter in India | Bhagwa | Super Sales Agro',
    description:
      'Pomegranate exporter in India. Large Bhagwa, graded for size and defect at Azadpur, for aril buyers and fresh export. Super Sales Agro.',
    eyebrow: 'Pomegranate export',
    h1: 'Pomegranate exporter in India',
    lede:
      'A pomegranate exporter in India is usually being asked for Bhagwa in an export size, not for the Delhi spot rate. Super Sales Agro grades large Bhagwa at Azadpur for fresh cartons and for buyers who want aril colour and a run of volume.',
    hindi:
      'भारत से अनार का निर्यात भगवा, बड़े आकार का है। साइज और डिफेक्ट आजादपुर में तय होते हैं।',
    facts: [
      { label: 'Variety', value: 'Bhagwa, large' },
      { label: 'Graded at', value: 'Azadpur, Delhi' },
      { label: 'Buyers', value: 'Fresh export and aril' },
      { label: 'Spec', value: 'Size and defect, agreed first' },
    ],
    sections: [
      {
        heading: 'Fresh carton and aril are different orders',
        body: 'Export cartons need size and a defect rate agreed before the fruit leaves Delhi. Aril and juice buyers need internal colour and a volume that holds for the run. Both can be Bhagwa. They are quoted as separate specifications.',
      },
      {
        heading: 'Where this fruit is not from',
        body: 'Maharashtra, Gujarat, and Bangalore have their own pomegranate exporters. We are the Azadpur desk. The fruit is bought and graded in Delhi, then packed for the port you name. We do not pretend to be a farm in those states.',
      },
    ],
    faqs: [
      {
        q: 'Do you export Bhagwa pomegranate?',
        a: 'Yes, when the lot meets the size and defect spec. Grading and carton packing happen at Azadpur.',
      },
      {
        q: 'Can you supply arils as well as whole fruit?',
        a: 'The export offer is whole fruit, graded for the buyer who will aril it or sell it fresh. Say which of those you are, because the spec changes.',
      },
    ],
  },
  {
    slug: 'export/mangoes',
    cta: 'export',
    parent: { href: '/export', label: 'Export' },
    title: 'Mango Exporters in India | Super Sales Agro',
    description:
      'Mango exporters in India. Seasonal Dasheri, and Alphonso when that fruit is shipping, packed at Azadpur for overseas buyers. Super Sales Agro.',
    eyebrow: 'Mango export',
    h1: 'Mango exporters in India',
    lede:
      'Mango exporters in India are a seasonal search. Super Sales Agro packs Dasheri through the Azadpur season, and Alphonso in the weeks that fruit is actually shipping. A mango page that stays up in winter with a standing price is the wrong offer.',
    hindi:
      'आम का निर्यात सीजन का है। दशहरी नियमित लाइन है। अल्फांसो तभी जब वह फल शिप हो रहा हो।',
    facts: [
      { label: 'Standing seasonal line', value: 'Dasheri' },
      { label: 'When it is in', value: 'Alphonso' },
      { label: 'Packed at', value: 'Azadpur, Delhi' },
      { label: 'Outside the season', value: 'The desk says it is closed' },
    ],
    sections: [
      {
        heading: 'Name the variety and the week',
        body: 'Send the variety, the ripening stage, the carton count, the destination port, and the week. Dasheri for pulp or for the table is not the same spec. Alphonso is offered only in the weeks we are shipping it. We will not book Alphonso against a Dasheri lot.',
      },
      {
        heading: 'Delhi packing, not a western-India farm',
        body: 'Most Alphonso export searches point at Maharashtra and Gujarat farms. Our role is the Azadpur pack and the cold chain out of Delhi, for the fruit we have bought. If the week you need is outside the season, the answer is a later window, not a substitute variety under the same name.',
      },
    ],
    faqs: [
      {
        q: 'Do you export Alphonso and Dasheri?',
        a: 'Dasheri is the seasonal line from Azadpur. Alphonso is packed when that fruit is shipping. Both are confirmed by the week, not held as a year-round price.',
      },
      {
        q: 'Can a buyer outside India order mangoes in the off season?',
        a: 'No. The export desk will tell you the next window. We do not ship another fruit labelled as mango to keep a programme full.',
      },
    ],
  },
  {
    slug: 'pears/baggi-gola',
    parent: { href: '/pears', label: 'Pears' },
    title: 'Baggi Gola Nashpati Rate | Shimla | Super Sales Agro',
    description:
      'Baggi Gola nashpati from Shimla. The Himachal pear rate per kg, separate from imported Williams at Azadpur. Super Sales Agro.',
    eyebrow: 'Baggi Gola',
    h1: 'Baggi Gola nashpati rate from Shimla',
    lede:
      'In the mandi this fruit is nashpati. Baggi Gola is the Himachal line we rate from Shimla. It is not the imported Williams pear on the Azadpur floor, and the two should not be quoted as one price.',
    hindi: 'बग्गी गोला नाशपाती का रेट शिमला मंडी का है। आजादपुर का विलियम्स इम्पोर्ट दूसरी लाइन है।',
    facts: [
      { label: 'Variety', value: 'Baggi Gola' },
      { label: 'Mandi', value: 'Shimla, HP' },
      { label: 'Also called', value: 'Nashpati' },
      { label: 'Quote', value: 'Per kg' },
    ],
    sections: [
      {
        heading: 'Shimla fruit only',
        body: 'A nashpati rate in Delhi can mean the Shimla fruit after it arrives, or the imported pear already on the Azadpur floor. This page is Baggi Gola from Shimla. Williams has its own page and its own number.',
      },
      {
        heading: 'How it is sold',
        body: 'Domestic buyers take it through the season for wholesale reload, hotels, and retail. Export cartons use the same grading path as the rest of the book. The morning card carries the confirmed Shimla line. Until that card is updated, the desk quotes the lot in hand.',
      },
    ],
    faqs: [
      {
        q: 'What is the Baggi Gola rate per kg?',
        a: 'The Shimla line is on the mandi rates page once that morning is confirmed. If the card still shows a blank, ask the desk rather than using an old range.',
      },
      {
        q: 'Is Baggi Gola the same as Williams?',
        a: 'No. Baggi Gola is the Himachal pear from Shimla. Williams is the imported pear we rate at Azadpur.',
      },
    ],
  },
  {
    slug: 'pears/williams',
    parent: { href: '/pears', label: 'Pears' },
    title: 'Williams Pear Price | Imported | Azadpur | Super Sales Agro',
    description:
      'Imported Williams pear at Azadpur mandi. Quoted per kg, separate from Shimla Baggi Gola. The import pear on the Super Sales Agro book.',
    eyebrow: 'Williams',
    h1: 'Imported Williams pear at Azadpur',
    lede:
      'Williams is the imported pear on our rate book, sold from the Azadpur floor. It is the import line a buyer means when they ask for an imported pear, not a catalogue of every imported fruit, and not the Shimla nashpati.',
    hindi: 'विलियम्स नाशपाती इम्पोर्ट है और आजादपुर फर्श से बिकती है। शिमला का बग्गी गोला देशी फल है।',
    facts: [
      { label: 'Variety', value: 'Williams' },
      { label: 'Origin on the book', value: 'Imported' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Quote', value: 'Per kg' },
    ],
    sections: [
      {
        heading: 'One import, named',
        body: 'The wholesale page can say “imported” without telling you which fruit. On this desk the imported pear with a published line is Williams. Other imported fruit is quoted only when that arrival is on the floor. It does not ride on the Williams price.',
      },
      {
        heading: 'Next to Baggi Gola',
        body: 'Baggi Gola is the Shimla nashpati. Williams is the Azadpur import. A buyer comparing a Himachal farm rate with an imported carton is looking at two fruits. Say which one, and whether it is for a reload, a hotel, or an export carton.',
      },
    ],
    faqs: [
      {
        q: 'What is the Williams pear price today?',
        a: 'The Azadpur Williams line is on the morning rates page when it is confirmed. The desk quotes the lot if the card is not up yet.',
      },
      {
        q: 'Do you import other fruit besides Williams?',
        a: 'Williams is the import pear on the book. Any other imported arrival is a separate lot, priced when it is in, not as part of this page.',
      },
    ],
  },
  {
    slug: 'guavas/lucknow',
    parent: { href: '/guavas', label: 'Guavas' },
    title: 'Lucknow Guava Rate Delhi | Azadpur | Super Sales Agro',
    description:
      'Lucknow guava, green, at the Azadpur mandi. Guava rate in Delhi per kg for trade, juice, and kitchens. Super Sales Agro.',
    eyebrow: 'Lucknow',
    h1: 'Lucknow guava rate at Azadpur',
    lede:
      'Lucknow green is the guava line we publish. Buyers looking up the guava rate in Delhi, per kg, are usually pricing this fruit. Allahabad and other guavas are quoted when they arrive. They are not this page.',
    hindi: 'लखनऊ अमरूद, हरा, आजादपुर का थोक रेट है। इलाहाबाद तभी जब वह लॉट आ रहा हो।',
    facts: [
      { label: 'Variety', value: 'Lucknow' },
      { label: 'Stage on the book', value: 'Green' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Use', value: 'Trade, juice, kitchens' },
    ],
    sections: [
      {
        heading: 'The published line',
        body: 'Guava rates in other cities will not match this floor. We publish the Azadpur wholesale rate for Lucknow green fruit. A ripe table lot and a green haul lot are different fruit even when both are Lucknow. Say the stage with the kilogram or carton count.',
      },
      {
        heading: 'Allahabad stays off this URL',
        body: 'Allahabad guava is bought and sold as it arrives at Azadpur. It does not have a standing page, and it should not be invoiced as Lucknow. Ask the desk on the day that lot is in.',
      },
    ],
    faqs: [
      {
        q: 'What is the Lucknow guava rate per kg?',
        a: 'The Azadpur line is on the mandi rates page after the morning confirmation. A blank card means the number is not published yet.',
      },
      {
        q: 'Is Allahabad guava included?',
        a: 'No. Allahabad is a separate arrival. Lucknow green is the line on this page.',
      },
    ],
  },
  {
    slug: 'oranges/nagpur',
    parent: { href: '/oranges', label: 'Oranges' },
    title: 'Nagpur Orange Wholesale | Azadpur Mandi | Super Sales Agro',
    description:
      'Nagpur orange wholesale at Azadpur mandi. Medium size, per kg, from the Delhi floor. Not the Nagpur farm-gate rate. Super Sales Agro.',
    eyebrow: 'Nagpur',
    h1: 'Nagpur orange wholesale at Azadpur',
    lede:
      'Nagpur medium is the orange on our book. Wholesale buyers at Azadpur are pricing the fruit after it reaches Delhi. The title says Nagpur and Azadpur because “orange” alone is a different search, and a Nagpur farm rate is a different point in the chain.',
    hindi: 'नागपुर संतरा, मीडियम, आजादपुर से थोक। यह नागपुर शहर का फार्म रेट नहीं है।',
    facts: [
      { label: 'Variety', value: 'Nagpur' },
      { label: 'Size on the book', value: 'Medium' },
      { label: 'Market', value: 'Azadpur, Delhi' },
      { label: 'Quote', value: 'Per kg' },
    ],
    sections: [
      {
        heading: 'Medium is the spec',
        body: 'The published line is medium Nagpur. A buyer who needs a tighter size, or a different orange, should say so. We will not relabel another citrus as Nagpur to fill the order. Kinnow is a separate fruit, with its own page.',
      },
      {
        heading: 'Who it is for',
        body: 'Traders reloading out of Delhi, hotel kitchens, and retail programmes take this from the same Azadpur purchase. Dispatch to other states is the wholesale desk. The rate is still the Azadpur number, plus the dispatch you agree.',
      },
    ],
    faqs: [
      {
        q: 'What is the Nagpur orange wholesale price?',
        a: 'The Azadpur medium line is published on the morning rates page when the floor is confirmed. Until then the desk quotes the lot.',
      },
      {
        q: 'Do you sell Nagpur oranges outside Delhi?',
        a: 'Yes. Buyers in other states take delivery from this Azadpur purchase. Send the city with the size and the carton count.',
      },
    ],
  },
]

const varietyBySlug = new Map(seoVarietyPages.map((page) => [page.slug, page]))

const bySlug = new Map(seoLandings.map((page) => [page.slug, page]))

export function getSeoLanding(slug: string) {
  return bySlug.get(slug)
}

export function getVarietyPage(slug: string, variety: string) {
  return varietyBySlug.get(`${slug}/${variety}`)
}

export function fruitLandingPath(fruit: string) {
  const page = seoLandings.find((item) => item.fruit === fruit)
  return page ? `/${page.slug}` : null
}
