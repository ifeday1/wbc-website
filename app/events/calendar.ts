// 2026 Calendar of Activities, transcribed from "2026 CALENDAR OF ACTIVITIES.docx".
// Dates are Lagos dates (YYYY-MM-DD). `end` marks a multi-day run; `otherDates` lists
// extra single days for "x & y" entries. `time` keeps the document's wording:
// (M) = morning / Sunday service, (E) = evening.

export type ChurchEvent = {
  title: string;
  start: string;
  end?: string;
  otherDates?: string[];
  time?: string;
  detail?: string;
  image?: { src: string; alt: string }; // flyer shown on the event, 16:9 works best
};

export type CalendarMonth = {
  month: number; // 0 = January
  theme: string;
  scripture: { text: string; reference: string };
  events: ChurchEvent[];
  undated?: ChurchEvent[]; // listed in the document without a date
};

export type CalendarQuarter = { title: string; months: number[] };

export const YEAR_THEME = {
  title: 'Our Season of His Providential Power',
  scripture: {
    text: 'For the Lord has not given us the spirit of fear, but of power, of love and of sound mind.',
    reference: '2 Timothy 1:7',
  },
};

export const quarters: CalendarQuarter[] = [
  { title: 'Blessing', months: [0, 1, 2] },
  { title: 'Favour', months: [3, 4, 5] },
  { title: 'Victory', months: [6, 7, 8] },
  { title: 'Progress', months: [9, 10, 11] },
];

const M = 'Morning';
const E = 'Evening';
const COMBINED = 'Combined service';

export const calendar: CalendarMonth[] = [
  {
    month: 0,
    theme: 'Prophetic Blessings',
    scripture: {
      text: 'God blessed them, and God said to them, "Be fruitful, multiply, fill the earth, and subdue it."',
      reference: 'Genesis 1:28',
    },
    events: [
      { title: '7 Days Fasting & Prayer', start: '2026-01-02', end: '2026-01-08', time: '6:00 PM daily', detail: 'Tagged: In the Beginning (Gen. 1:1-3)' },
      { title: 'New Year Thanksgiving & Fasting', start: '2026-01-04', time: `${COMBINED} · ${M}` },
      { title: "LEBC Workers' Seminar", start: '2026-01-10', otherDates: ['2026-01-17', '2026-01-24'], time: M, detail: 'Zone One at Yaba B.C (10 Jan) · Zone Two (17 Jan) · Zone Three (24 Jan)' },
      { title: 'Sunday School Annual Bible Study', start: '2026-01-11', otherDates: ['2026-01-14'] },
      { title: 'Pastors & Deacons Fellowship Retreat', start: '2026-01-11', time: E },
      { title: 'Gift to Convention President', start: '2026-01-18', time: M },
      { title: 'Miracle Night', start: '2026-01-30', time: '11:50 PM', detail: 'Night prayer. Theme: Secure (Psalms 91:1-2; Heb. 6:19)' },
    ],
  },
  {
    month: 1,
    theme: 'Covenanted Blessings',
    scripture: {
      text: 'All these blessings will come and overtake you, because you obey the LORD your God.',
      reference: 'Deuteronomy 28:1-2',
    },
    events: [
      { title: 'Refresh Your Soul', start: '2026-02-08', time: `${COMBINED} · ${M}` },
      { title: 'Offering for the Needy', start: '2026-02-08', time: M },
      { title: 'Singles Fellowship', start: '2026-02-08', time: E },
      { title: "Association's EC Meeting", start: '2026-02-10', time: '6:00 PM', detail: 'At Gbagada Estate B.C' },
      { title: 'WBC CED Retreat', start: '2026-02-14', time: '10:00 AM' },
      { title: 'BWMU Focus Sunday', start: '2026-02-15', time: M },
      { title: "Gideon 2 Workers' Retreat", start: '2026-02-21', time: '9:00 AM' },
      { title: 'Gideon 2BA Praise and Prayer Night', start: '2026-02-22', time: '5:30 PM', detail: 'At Yaba B.C' },
      { title: 'BMMU Focus Sunday', start: '2026-02-22', time: M },
      { title: 'Super Power Evening (SPE)', start: '2026-02-27', time: '6:00 PM – 7:30 PM' },
      { title: "NBC International General Workers' Conference", start: '2026-02-27', end: '2026-02-28', time: M, detail: 'Lagos zone' },
    ],
  },
  {
    month: 2,
    theme: 'Overflowing Blessing',
    scripture: {
      text: 'And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.',
      reference: '2 Corinthians 9:8',
    },
    events: [
      { title: 'Blessing Encounter', start: '2026-03-01', time: M, detail: 'A moment of prayer & Holy Communion' },
      { title: "Pastors' and Deacons' Family Refreshing Hour", start: '2026-03-01', time: '6:00 PM – 7:30 PM' },
      { title: "Winners Workers' Seminar", start: '2026-03-07', time: '9:00 AM', detail: 'Topic: Power for Service (Acts 1:8)' },
      { title: 'Annual Societal Thanksgiving', start: '2026-03-08', time: `${COMBINED} · ${M}` },
      { title: "Couples' Fellowship", start: '2026-03-08', time: E },
      { title: 'Home Mission Week of Prayer', start: '2026-03-15', otherDates: ['2026-03-18'], time: 'Sunday morning & Wednesday evening' },
      { title: 'DTM Focus Sunday', start: '2026-03-22', time: M },
      { title: 'Super Power Evening (SPE)', start: '2026-03-27', time: '6:00 PM – 7:30 PM' },
      { title: 'Palm Sunday', start: '2026-03-29' },
    ],
  },
  {
    month: 3,
    theme: 'Covenanted Favour',
    scripture: {
      text: 'Greetings, you who are highly favoured! The Lord is with you!',
      reference: 'Luke 1:26-33',
    },
    events: [
      { title: 'In the Boat with Jesus', start: '2026-04-01', time: '6:00 AM – 7:00 AM' },
      { title: 'Good Friday', start: '2026-04-03', time: M },
      { title: 'Easter Sunday & Thanksgiving', start: '2026-04-05' },
      { title: "Association's EC Meeting", start: '2026-04-07', time: '6:00 PM', detail: 'At FBC, Somolu' },
      { title: 'Gideonite Assembly', start: '2026-04-11', time: M, detail: 'At FBC Ilaje, Bariga' },
      { title: 'Church in Conference', start: '2026-04-12', time: M },
      { title: 'Gifts to LEBC President', start: '2026-04-12', time: M },
      { title: 'Refresh Your Soul', start: '2026-04-12', time: `${COMBINED} · ${M}` },
      { title: 'NBC in Session', start: '2026-04-18', end: '2026-04-23', detail: 'At BICC, Abuja' },
      { title: 'Sunbeam Week', start: '2026-04-19', otherDates: ['2026-04-22'], time: M },
      { title: 'Miracle Night', start: '2026-04-24', time: '11:50 PM', detail: 'Theme: Favour' },
    ],
  },
  {
    month: 4,
    theme: 'Desired Favour',
    scripture: {
      text: 'Give your servant success today by granting him favour in the presence of this man.',
      reference: 'Nehemiah 1:11',
    },
    events: [
      { title: 'In the Boat with Jesus', start: '2026-05-01', time: '6:00 AM – 7:00 AM' },
      { title: "Everybody's Birthday", start: '2026-05-03', time: `${COMBINED} · ${M}` },
      { title: '3 Days Fasting & Prayer', start: '2026-05-04', end: '2026-05-06', detail: 'Theme: Favour Me Oh Lord (Nehemiah 1:11)' },
      { title: "Mothers' Day", start: '2026-05-10', time: M },
      { title: "Singles' Fellowship", start: '2026-05-17', time: E },
      { title: "Offering for Children's Day", start: '2026-05-17', time: M },
      { title: "Children's Day", start: '2026-05-27' },
      { title: 'Super Power Evening (SPE)', start: '2026-05-29', time: '6:00 PM – 7:30 PM' },
      { title: "Children's Sunday & Thanksgiving", start: '2026-05-31', time: `${COMBINED} · ${M}` },
    ],
  },
  {
    month: 5,
    theme: 'Divine Favour',
    scripture: {
      text: 'Now the king was attracted to Esther more than to any of the other women, and she won his favour and approval.',
      reference: 'Esther 2:17',
    },
    events: [
      { title: 'Youth Week', start: '2026-06-07', end: '2026-06-10', time: `${COMBINED} · ${M}` },
      { title: 'My Family in the Mirror / Refresh Your Soul', start: '2026-06-14', end: '2026-06-17', time: `${COMBINED} · ${M}` },
      { title: 'Bless Dr. Sola Oladeni with Gifts', start: '2026-06-14', time: M },
      { title: "Pastors' and Deacons' Fellowship", start: '2026-06-14', time: E },
      { title: "Father's Day", start: '2026-06-21', time: M },
      { title: 'Evangelism Programmes', start: '2026-06-24', time: 'Wednesday evening' },
      { title: 'Super Power Evening (SPE)', start: '2026-06-26', time: '6:00 PM – 7:30 PM' },
    ],
    undated: [{ title: 'Association Exco Meeting', start: '', time: '6:00 PM', detail: 'At FBC Somolu' }],
  },
  {
    month: 6,
    theme: 'Divine Victory',
    scripture: {
      text: 'For everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.',
      reference: '1 John 5:4',
    },
    events: [
      { title: 'In the Boat with Jesus', start: '2026-07-01', time: '6:00 AM – 7:00 AM', detail: 'No prayer & Bible study this evening' },
      { title: 'Mid-Year Workers Retreat', start: '2026-07-04', time: '10:00 AM' },
      { title: 'RA/Lydia Week', start: '2026-07-05', time: `${COMBINED} · ${M}` },
      { title: 'Mid-Year Thanksgiving', start: '2026-07-12', time: `${COMBINED} · ${M}` },
      { title: "LEBC Pastors' Ordination", start: '2026-07-18', time: M },
      { title: "Children's Holiday Bible School", start: '2026-07-20', end: '2026-07-23' },
    ],
  },
  {
    month: 7,
    theme: 'Power for Victory',
    scripture: {
      text: 'I can do all things through Him who strengthens me.',
      reference: 'Philippians 4:13',
    },
    events: [
      { title: "6 Hours in God's Presence", start: '2026-08-01', time: '10:00 AM – 4:00 PM', detail: 'Prophetic Prevailing Worship. Theme: Power for Victory' },
      { title: 'Winners Education Foundation', start: '2026-08-02', time: `${COMBINED} · ${M}` },
      { title: "Couples' Fellowship", start: '2026-08-02', time: E },
      { title: 'Association Exco Meeting', start: '2026-08-04', time: '6:00 PM', detail: 'At FBC, Somolu' },
      { title: 'Gideonite Assembly', start: '2026-08-09', time: M, detail: "At God's Mercy Baptist Church, Oworonsoki" },
      { title: 'BSF Week', start: '2026-08-10', otherDates: ['2026-08-14'], time: `8:00 AM · ${COMBINED}` },
      { title: "Pastors' and Deacons' Fellowship", start: '2026-08-10', time: E },
      { title: 'Teenagers Holiday Bible School', start: '2026-08-11', end: '2026-08-15' },
      { title: 'LEBC Mission Sunday', start: '2026-08-17', time: COMBINED },
      { title: '15th Kingdom Life Assembly', start: '2026-08-17', end: '2026-08-22' },
      { title: 'GA Sunday', start: '2026-08-24', time: M },
      { title: 'Super Power Evening (SPE)', start: '2026-08-29', time: '6:00 PM – 7:30 PM' },
    ],
  },
  {
    month: 8,
    theme: 'More Than Conquerors',
    scripture: {
      text: 'No, in all these things we are more than conquerors through Him who loved us.',
      reference: 'Romans 8:37',
    },
    events: [
      { title: 'In the Boat with Jesus', start: '2026-09-01', time: '6:00 AM – 7:00 AM' },
      { title: "Teenagers' Sunday & Thanksgiving", start: '2026-09-06', time: `${COMBINED} · ${M}` },
      { title: "Ministers' Conference", start: '2026-09-07', end: '2026-09-11', detail: 'Ogbomoso' },
      { title: "Choir's 51st Anniversary Service", start: '2026-09-13' },
      { title: "Singles' Fellowship", start: '2026-09-27', time: E },
      { title: 'Super Power Evening (SPE)', start: '2026-09-27', time: '6:00 PM – 7:30 PM' },
    ],
    undated: [{ title: 'Evangelism Fellowship', start: '', time: 'Wednesday evening' }],
  },
  {
    month: 9,
    theme: 'Visible Progress',
    scripture: {
      text: 'Be diligent in these matters; give yourself wholly to them, so that everyone may see your progress.',
      reference: '1 Timothy 4:15',
    },
    events: [
      { title: 'In the Boat with Jesus', start: '2026-10-01' },
      { title: 'Bless Rev. E.A. Oladeni with Gifts', start: '2026-10-04', time: M },
      { title: "Just Ask (JASK) / Social Ministry's Sunday", start: '2026-10-04', time: M },
      {
        title: 'Sunday Service',
        start: '2026-10-04',
        time: M,
        detail: 'Grace & Honour, with guest minister Pastor Babs Ogundeji and Rev. Olusola Oladeni, Ph.D.',
        image: { src: '/events/grace-and-honour.jpg', alt: 'Grace & Honour Sunday Service flyer with Pastor Babs Ogundeji and Rev. Olusola Oladeni' },
      },
      { title: 'Offering for the Needy', start: '2026-10-11', time: M },
      { title: 'Miracle Night', start: '2026-10-30', time: '11:50 PM', detail: 'Night prayer' },
    ],
  },
  {
    month: 10,
    theme: 'Steadfast Progress',
    scripture: {
      text: 'Be steadfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.',
      reference: '1 Corinthians 15:58',
    },
    events: [
      { title: 'Adult Harvest', start: '2026-11-01', time: `${COMBINED} · ${M}`, detail: 'Topic: Progressive Harvest' },
      { title: "Pastors' and Deacons' Fellowship", start: '2026-11-08', time: E },
      { title: 'Foreign Mission Week of Prayer', start: '2026-11-08', otherDates: ['2026-11-11'], time: M },
      { title: '7 Days Prayer and Fasting', start: '2026-11-23', end: '2026-11-29', time: E },
    ],
  },
  {
    month: 11,
    theme: 'Enduring Progress',
    scripture: {
      text: 'And let us not be weary in well doing: for in due season we shall reap, if we faint not.',
      reference: 'Galatians 6:9',
    },
    events: [
      { title: 'In the Boat with Jesus', start: '2026-12-01', time: '6:00 AM – 7:00 AM' },
      { title: 'My Family in the Mirror', start: '2026-12-06' },
      { title: 'Offering for the Needy', start: '2026-12-06', time: M },
      { title: 'Christmas Carol', start: '2026-12-13', time: M },
      { title: 'Gideonite Assembly', start: '2026-12-13', time: M, detail: 'At FBC Somolu' },
      { title: 'Caring Sunday for Widows & Widowers', start: '2026-12-20', time: M },
      { title: 'Celebrating Jesus', start: '2026-12-24', time: '5:30 PM' },
      { title: 'Christmas Service', start: '2026-12-25', time: '9:00 AM' },
      { title: "Singles' Love Feast", start: '2026-12-26', time: E },
      { title: 'Crossover Night Special', start: '2026-12-31', end: '2027-01-01', detail: 'Expectations (Luke 12:40; Romans 8:19; 2 Cor. 8:6-7)' },
      { title: 'New Year Worship & Thanksgiving', start: '2027-01-03', time: `${COMBINED} · ${M}` },
    ],
  },
];
