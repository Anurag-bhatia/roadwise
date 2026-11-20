// All editorial content lives here. Guides give general safety information only:
// no section numbers, fines or state-specific rules.

export type IconName =
  | "shield" | "alert" | "play" | "clipboard" | "building" | "news" | "moon"
  | "rain" | "coffee" | "truck" | "road" | "fog" | "plus" | "siren" | "doc"
  | "check" | "download" | "arrow" | "external" | "menu" | "close" | "image";

export type Step = { title: string; body: string };

export type Situation = {
  slug: string;
  title: string;
  question: string;
  tag: string;
  icon: IconName;
  minRead: number;
  summary: string;
  inShort: string[];
  steps: Step[];
  goodToKnow: string;
  checklist: string;
};

export const situations: Situation[] = [
  {
    slug: "breakdown-on-highway",
    title: "Your vehicle breaks down on a highway",
    question: "Your vehicle breaks down on a highway. What next?",
    tag: "Highway",
    icon: "alert",
    minRead: 4,
    summary:
      "A breakdown at speed is stressful. These steps help you get off the road, stay visible and wait for help without putting anyone at risk.",
    inShort: [
      "Get the vehicle as far left as you safely can.",
      "Make yourself visible: hazard lights first, warning triangle next.",
      "Everyone waits away from traffic, never between vehicles.",
    ],
    steps: [
      {
        title: "Move to safety",
        body: "Signal left, slow down gradually and pull onto the shoulder or the nearest lay-by. Turn the wheels away from the carriageway and apply the parking brake.",
      },
      {
        title: "Make your vehicle visible",
        body: "Switch on hazard lights straight away. At night or in fog, keep parking lights on. Place a reflective warning triangle well behind the vehicle if it is safe to walk there.",
      },
      {
        title: "Keep everyone away from traffic",
        body: "Get passengers out from the side away from traffic and move them behind the safety barrier or well off the road. Do not stand behind or in front of the vehicle.",
      },
      {
        title: "Call for help",
        body: "Call the national highway helpline (1033) or your roadside assistance provider. Share the nearest kilometre stone, toll plaza or landmark so they can find you.",
      },
      {
        title: "Wait safely for assistance",
        body: "Avoid trying repairs on the traffic side. If the vehicle must stay on the carriageway, keep everyone well clear of it. Lock the vehicle and keep valuables with you.",
      },
    ],
    goodToKnow:
      "Keep a reflective triangle, a torch, a basic tool kit and a charged phone in the vehicle. Note emergency numbers before a long trip. Two-wheeler riders should push the vehicle fully off the road before checking it.",
    checklist: "long-distance-trip",
  },
  {
    slug: "road-accident",
    title: "You are involved in a road accident",
    question: "You are involved in a road accident. What should you do?",
    tag: "Emergency",
    icon: "plus",
    minRead: 5,
    summary:
      "The first minutes after a crash matter most. Stay calm, protect the scene, get help for anyone injured and keep a clear record of what happened.",
    inShort: [
      "Stop, secure the scene and check for injuries.",
      "Call 112 if anyone is hurt or the road is blocked.",
      "Record details calmly. Do not argue at the scene.",
    ],
    steps: [
      {
        title: "Stop and secure the scene",
        body: "Stop the vehicle, switch off the engine and turn on hazard lights. If it is safe, warn oncoming traffic with a warning triangle.",
      },
      {
        title: "Check for injuries",
        body: "Check yourself, your passengers and others involved. Do not move a seriously injured person unless there is immediate danger such as fire.",
      },
      {
        title: "Call for emergency help",
        body: "Dial 112 for police, ambulance and fire services. Describe the location, the number of people hurt and any hazards such as leaking fuel.",
      },
      {
        title: "Record what happened",
        body: "Take photos of the vehicles, number plates, road conditions and any damage. Note the names and contact details of others involved and any witnesses.",
      },
      {
        title: "Inform your insurer",
        body: "Contact your insurance provider as soon as possible and share the details you recorded. Keep copies of any reports and medical documents.",
      },
    ],
    goodToKnow:
      "Anyone who helps an injured person in good faith is protected under India's Good Samaritan guidelines. Hospitals should not delay emergency care for paperwork. The first hour after a serious injury is often called the golden hour, so quick help saves lives.",
    checklist: "daily-vehicle-safety",
  },
  {
    slug: "emergency-vehicle-behind",
    title: "An emergency vehicle is behind you",
    question: "An emergency vehicle is behind you. How do you make way?",
    tag: "On the road",
    icon: "siren",
    minRead: 3,
    summary:
      "Ambulances, fire engines and police vehicles need a clear path. A calm, predictable move to the side helps them reach people faster.",
    inShort: [
      "Stay calm and check your mirrors.",
      "Signal and move left when it is safe.",
      "Never brake suddenly or follow the emergency vehicle.",
    ],
    steps: [
      {
        title: "Notice early",
        body: "Keep your music at a level where you can hear sirens. Check mirrors often, especially in heavy traffic and near hospitals.",
      },
      {
        title: "Signal your intention",
        body: "Turn on your left indicator so the driver behind knows what you are doing.",
      },
      {
        title: "Move left and slow down",
        body: "Move to the left of your lane or onto the shoulder when it is safe. Do not mount footpaths or move into pedestrians.",
      },
      {
        title: "Stay clear at junctions",
        body: "If you are at a red light, move only if you can do so safely. Do not cross a junction or block a box to make space.",
      },
      {
        title: "Rejoin carefully",
        body: "Once it has passed, check for a second emergency vehicle before signalling and rejoining traffic. Never follow it to get through traffic.",
      },
    ],
    goodToKnow:
      "On multi-lane roads, the safest option is often for every vehicle to move left so a clear lane opens on the right. Two-wheeler riders should avoid weaving between vehicles while making way.",
    checklist: "daily-vehicle-safety",
  },
  {
    slug: "document-check",
    title: "Your vehicle is stopped for a document check",
    question: "Your vehicle is stopped for a document check. What should you know?",
    tag: "Documents",
    icon: "doc",
    minRead: 3,
    summary:
      "Routine checks are part of road safety. Knowing what to carry and how to respond keeps the stop short and stress-free.",
    inShort: [
      "Pull over safely and stay in the vehicle unless asked.",
      "Keep your licence, RC, insurance and PUC ready.",
      "Be polite and ask for a receipt for anything issued.",
    ],
    steps: [
      {
        title: "Stop safely",
        body: "Signal, pull over to the left where indicated and switch off the engine. Keep your hands visible and stay calm.",
      },
      {
        title: "Show your documents",
        body: "Carry your driving licence, registration certificate (RC), insurance certificate and pollution under control (PUC) certificate, either as originals or in an official digital app.",
      },
      {
        title: "Ask questions politely",
        body: "If you are unsure why you were stopped, ask calmly. Note the officer's name or badge number if you need it later.",
      },
      {
        title: "Get a record",
        body: "If a challan is issued, make sure you receive it or a reference number. You can check and pay challans on the official e-Challan portal.",
      },
      {
        title: "Follow up through official channels",
        body: "If you disagree with anything, do not argue on the roadside. Use the official grievance or court process listed on the source websites.",
      },
    ],
    goodToKnow:
      "Digital documents stored in DigiLocker or mParivahan are widely accepted. Keep your phone charged and the app signed in before you set out. Rules can change and differ by state, so check the official sources for the latest position.",
    checklist: "pre-trip-fleet",
  },
];

export type GuideCategory = "Driver Safety" | "Vehicle & Fleet" | "Highway";

export type Guide = {
  slug: string;
  title: string;
  category: GuideCategory;
  icon: IconName;
  minRead: number;
  summary: string;
  sections: { heading: string; points: string[] }[];
};

export const guideCategories: GuideCategory[] = ["Driver Safety", "Vehicle & Fleet", "Highway"];

export const guides: Guide[] = [
  {
    slug: "defensive-driving-basics",
    title: "Defensive driving basics",
    category: "Driver Safety",
    icon: "shield",
    minRead: 5,
    summary: "Expect the unexpected. Simple habits that give you time and space to react.",
    sections: [
      {
        heading: "Keep your distance",
        points: [
          "Leave at least a three-second gap to the vehicle ahead, and more in rain or at night.",
          "If someone cuts into your gap, ease off and rebuild it.",
        ],
      },
      {
        heading: "Look further ahead",
        points: [
          "Scan 10 to 15 seconds ahead for brake lights, pedestrians and animals.",
          "Check mirrors every few seconds and before every change in speed or direction.",
        ],
      },
      {
        heading: "Be predictable",
        points: [
          "Signal early and hold your lane.",
          "Avoid sudden braking unless it is an emergency.",
          "Make eye contact with pedestrians and riders when you can.",
        ],
      },
    ],
  },
  {
    slug: "driving-safely-at-night",
    title: "Driving safely at night",
    category: "Driver Safety",
    icon: "moon",
    minRead: 4,
    summary: "Less light means less time to react. How to see and be seen after dark.",
    sections: [
      {
        heading: "Before you go",
        points: [
          "Clean the windscreen, mirrors and all lights.",
          "Check that headlights are aimed correctly and both beams work.",
        ],
      },
      {
        heading: "On the road",
        points: [
          "Dip your headlights for oncoming traffic and when following another vehicle.",
          "Slow down so you can stop within the distance you can see.",
          "Look towards the left edge of the road to avoid glare.",
        ],
      },
      {
        heading: "Watch for",
        points: [
          "Unlit vehicles, cyclists and pedestrians.",
          "Parked trucks on highway shoulders.",
          "Signs of drowsiness. Stop and rest if you feel them.",
        ],
      },
    ],
  },
  {
    slug: "monsoon-and-rain-driving",
    title: "Monsoon and rain driving",
    category: "Driver Safety",
    icon: "rain",
    minRead: 5,
    summary: "Wet roads, poor visibility and waterlogging. How to stay in control in the rains.",
    sections: [
      {
        heading: "Prepare your vehicle",
        points: [
          "Replace worn wiper blades and check tyre tread depth.",
          "Make sure the brakes, lights and demister work properly.",
        ],
      },
      {
        heading: "Driving in rain",
        points: [
          "Reduce speed and double your following distance.",
          "Brake gently and early, and avoid sharp steering.",
          "Turn on headlights (dipped) so others can see you.",
        ],
      },
      {
        heading: "Waterlogged roads",
        points: [
          "Avoid driving through water if you cannot see the road surface.",
          "If you must cross, go slowly in a low gear and do not stop midway.",
          "Test your brakes gently after you come out of water.",
        ],
      },
    ],
  },
  {
    slug: "beating-fatigue-on-long-drives",
    title: "Beating fatigue on long drives",
    category: "Driver Safety",
    icon: "coffee",
    minRead: 4,
    summary: "Tiredness slows reactions as much as alcohol. Spot the signs and plan your breaks.",
    sections: [
      {
        heading: "Plan ahead",
        points: [
          "Get a full night's sleep before a long trip.",
          "Plan a break every two hours or about 150 km.",
          "Avoid driving between midnight and 6 am where you can.",
        ],
      },
      {
        heading: "Warning signs",
        points: [
          "Yawning, heavy eyelids or drifting out of your lane.",
          "Missing signs or exits, or not remembering the last few kilometres.",
        ],
      },
      {
        heading: "What helps",
        points: [
          "Stop somewhere safe and take a 15 to 20 minute nap.",
          "Share the driving if you have another licensed driver.",
          "Open windows and loud music do not fix tiredness.",
        ],
      },
    ],
  },
  {
    slug: "daily-vehicle-safety-checks",
    title: "Daily vehicle safety checks",
    category: "Vehicle & Fleet",
    icon: "clipboard",
    minRead: 3,
    summary: "A five-minute walk-around that catches most problems before they become breakdowns.",
    sections: [
      {
        heading: "Outside the vehicle",
        points: [
          "Tyres: look for cuts, bulges and low pressure.",
          "Lights and indicators: all working and clean.",
          "Look underneath for leaks.",
        ],
      },
      {
        heading: "Inside the vehicle",
        points: [
          "Brakes feel firm and the horn works.",
          "Mirrors adjusted and seat belts in good condition.",
          "No warning lights on the dashboard after starting.",
        ],
      },
    ],
  },
  {
    slug: "loading-a-truck-safely",
    title: "Loading a truck safely",
    category: "Vehicle & Fleet",
    icon: "truck",
    minRead: 5,
    summary: "Overloading and loose cargo are major causes of commercial vehicle crashes.",
    sections: [
      {
        heading: "Weight and balance",
        points: [
          "Never exceed the permitted gross vehicle weight.",
          "Spread the load evenly and keep heavy items low and central.",
        ],
      },
      {
        heading: "Securing the load",
        points: [
          "Use rated straps, chains or nets in good condition.",
          "Cover loose loads such as sand or gravel.",
          "Make sure nothing sticks out beyond the body without proper marking.",
        ],
      },
      {
        heading: "After loading",
        points: [
          "Re-check restraints after the first few kilometres.",
          "Remember a loaded truck needs a much longer stopping distance.",
        ],
      },
    ],
  },
  {
    slug: "preparing-for-a-long-distance-trip",
    title: "Preparing for a long-distance trip",
    category: "Highway",
    icon: "road",
    minRead: 4,
    summary: "Plan the route, check the vehicle and pack the essentials before you hit the highway.",
    sections: [
      {
        heading: "Plan the route",
        points: [
          "Check the weather and any road closures before you leave.",
          "Mark fuel stops, rest areas and hospitals along the way.",
          "Share your route and expected arrival time with someone.",
        ],
      },
      {
        heading: "Check the vehicle",
        points: [
          "Tyres including the spare, brakes, lights, fluids and wipers.",
          "Make sure your FASTag is active and topped up.",
        ],
      },
      {
        heading: "Pack the essentials",
        points: [
          "Documents, a first-aid kit, a warning triangle and a torch.",
          "Drinking water, a phone charger and some cash.",
        ],
      },
    ],
  },
  {
    slug: "driving-safely-in-fog",
    title: "Driving safely in fog",
    category: "Highway",
    icon: "fog",
    minRead: 4,
    summary: "Winter fog can drop visibility to a few metres. Slow down and stay visible.",
    sections: [
      {
        heading: "See and be seen",
        points: [
          "Use dipped headlights and fog lamps. High beam reflects off fog and makes it worse.",
          "Keep the windscreen clear with the demister.",
        ],
      },
      {
        heading: "Control your speed",
        points: [
          "Drive at a speed that lets you stop within the distance you can see.",
          "Follow the left edge of the road or lane markings, not the tail lights ahead.",
        ],
      },
      {
        heading: "If it gets too thick",
        points: [
          "Pull fully off the road at a safe place, such as a dhaba or fuel station.",
          "Switch on hazard lights and wait for visibility to improve.",
        ],
      },
    ],
  },
];

export type Checklist = {
  slug: string;
  title: string;
  audience: string;
  groups: { heading: string; items: string[] }[];
};

export const checklists: Checklist[] = [
  {
    slug: "daily-vehicle-safety",
    title: "Daily vehicle safety checklist",
    audience: "Car owners and two-wheeler riders",
    groups: [
      { heading: "Walk-around", items: ["Tyre pressure and condition", "No leaks under the vehicle", "Number plates clean and readable", "Mirrors clean and adjusted"] },
      { heading: "Lights", items: ["Headlights (low and high beam)", "Brake lights", "Indicators and hazard lights", "Tail lights"] },
      { heading: "Inside", items: ["Brakes feel firm", "Horn works", "Seat belts or helmet in good condition", "No dashboard warning lights"] },
    ],
  },
  {
    slug: "pre-trip-fleet",
    title: "Pre-trip fleet checklist",
    audience: "Fleet managers and commercial drivers",
    groups: [
      { heading: "Documents", items: ["Driving licence", "Registration certificate (RC)", "Insurance certificate", "PUC certificate", "Permit and fitness certificate"] },
      { heading: "Vehicle", items: ["Tyres, including spare", "Brakes and air pressure", "Lights, reflectors and reflective tape", "Fluids: engine oil, coolant, brake fluid"] },
      { heading: "Load and driver", items: ["Load within permitted weight", "Load secured and covered", "Driver rested and fit to drive", "Route and rest stops planned"] },
    ],
  },
  {
    slug: "long-distance-trip",
    title: "Long-distance trip checklist",
    audience: "Anyone heading out on the highway",
    groups: [
      { heading: "Plan", items: ["Weather and road conditions checked", "Fuel and rest stops marked", "Route shared with family or friends", "FASTag active and topped up"] },
      { heading: "Vehicle", items: ["Tyres, including spare", "Brakes, lights and wipers", "Engine oil and coolant", "Tool kit and jack"] },
      { heading: "Carry", items: ["Documents (original or digital)", "First-aid kit", "Warning triangle and torch", "Water, snacks and phone charger"] },
    ],
  },
  {
    slug: "monsoon-and-night",
    title: "Monsoon and night driving checklist",
    audience: "Drivers and riders in low-visibility conditions",
    groups: [
      { heading: "Visibility", items: ["Wiper blades in good condition", "Windscreen and mirrors clean", "Demister works", "Headlights aimed correctly"] },
      { heading: "Grip and control", items: ["Tyre tread depth adequate", "Brakes checked", "Rain gear for two-wheeler riders"] },
      { heading: "Be seen", items: ["All lights working", "Reflective tape or jacket", "Hazard lights work"] },
    ],
  },
];

export type Video = {
  title: string;
  topic: string;
  duration: string;
  takeaway: string;
  thumbnail: string;
  // TODO: add YouTube IDs from the RSLA playlist.
  youtubeId?: string;
  guide?: string;
};

export const videos: Video[] = [
  { title: "What to do after a road accident", thumbnail: "/images/video-accident.jpg", topic: "Accidents", duration: "3:20", takeaway: "Secure the scene, get help and keep a record.", guide: "/what-to-do/road-accident" },
  { title: "Highway breakdown: staying safe", thumbnail: "/images/video-breakdown.jpg", topic: "Breakdowns", duration: "2:45", takeaway: "Get off the road and stay visible.", guide: "/what-to-do/breakdown-on-highway" },
  { title: "Documents to carry while driving", thumbnail: "/images/video-documents.jpg", topic: "Documents", duration: "2:10", takeaway: "Originals or an official digital app.", guide: "/what-to-do/document-check" },
  { title: "Making way for emergency vehicles", thumbnail: "/images/video-emergency.jpg", topic: "On the road", duration: "1:55", takeaway: "Signal, move left and never follow.", guide: "/what-to-do/emergency-vehicle-behind" },
  { title: "Understanding your challan", thumbnail: "/images/video-challan.jpg", topic: "Challans", duration: "3:05", takeaway: "How to check and pay it on the official portal." },
  { title: "Helping an accident victim", thumbnail: "/images/video-samaritan.jpg", topic: "Good Samaritan", duration: "2:30", takeaway: "You are protected when you help in good faith." },
];

export type NewsItem = { tag: string; tone: "orange" | "green" | "navy" | "red"; headline: string; date: string; image: string };

// TODO: replace these sample items with the live Challan Times feed.
export const news: NewsItem[] = [
  { tag: "New Rules", tone: "orange", headline: "Explainer: helmet rules for pillion riders", date: "18 Nov 2026", image: "/images/news-helmet.jpg" },
  { tag: "Challan Updates", tone: "green", headline: "How to check a pending e-challan online", date: "16 Nov 2026", image: "/images/news-echallan.jpg" },
  { tag: "City Alerts", tone: "navy", headline: "Fog season: tips for early-morning commutes", date: "14 Nov 2026", image: "/images/news-fog.jpg" },
  { tag: "Enforcement", tone: "red", headline: "How speed cameras and e-challans work", date: "11 Nov 2026", image: "/images/news-camera.jpg" },
];

// Card photos: Unsplash (free to use under the Unsplash License).
// Delhi traffic: Marvin Castelino · night highway & speed cameras: viktor rejent · Delhi rain: Ashwini Chaudhary ·
// coffee: Gerald Pingol · brake disc: ün LIU · Tamil Nadu truck: Gowtham AGM · mountain road: Zoshua Colah ·
// fog: Alexandre Dinaut, Liana S · scooters: Bernd Dittrich · phone: Alicia Christin Gerald ·
// partner banner: Isaac · video thumbnails: Lalithmalhaar Gudi, Adam Bignell, Silver Ringvee, Ivan Kazlouskij, Dylan Frank, Rhii Photography.
const guideImages: Record<string, string> = {
  "defensive-driving-basics": "guide-defensive",
  "driving-safely-at-night": "guide-night",
  "monsoon-and-rain-driving": "guide-monsoon",
  "beating-fatigue-on-long-drives": "guide-fatigue",
  "daily-vehicle-safety-checks": "guide-checks",
  "loading-a-truck-safely": "guide-truck",
  "preparing-for-a-long-distance-trip": "guide-trip",
  "driving-safely-in-fog": "guide-fog",
};
export const guideImage = (slug: string) => `/images/${guideImages[slug]}.jpg`;

export const getSituation = (slug: string) => situations.find((s) => s.slug === slug);
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const getChecklist = (slug: string) => checklists.find((c) => c.slug === slug);
