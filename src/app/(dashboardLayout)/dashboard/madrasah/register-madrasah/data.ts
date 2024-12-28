export type TField = {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email" | "number" | "tel";
};

export const contactInfoFields: TField[] = [
  {
    name: "communicatorName",
    label: "যোগাযোগকারীর নাম",
    placeholder: "নাম লিখুন",
    type: "text",
  },
  {
    name: "communicatorContactNo",
    label: "যোগাযোগ-১",
    placeholder: "মোবাইল নম্বর লিখুন",
    type: "tel",
  },
  {
    name: "contact2",
    label: "যোগাযোগ-২",
    placeholder: "মোবাইল নম্বর লিখুন",
    type: "tel",
  },
  {
    name: "email",
    label: "ইমেইল",
    placeholder: "ইমেইল লিখুন",
    type: "email",
  },
];

export const nameFields: TField[] = [
  {
    name: "nameInBangla",
    label: "বাংলা নাম",
    placeholder: "বাংলা নাম লিখুন",
    type: "text",
  },
  {
    name: "nameInArabic",
    label: "আরবি নাম",
    placeholder: "আরবি নাম লিখুন",
    type: "text",
  },
  {
    name: "nameInEnglish",
    label: "ইংরেজি নাম (ঐচ্ছিক)",
    placeholder: "ইংরেজি নাম লিখুন",
    type: "text",
  },
];

export const marhalaOptions: string[] = [
  "ইফতা",
  "তাকমীল/দাওরায়ে হাদীস",
  "ফযীলত (স্নাতক)",
  "সানাবিয়্যাহ উলইয়া",
  "কাফিয়া (১০ শ্রেনী)",
  "মুতাওয়াসসিতাহ (৮ম শ্রেনী)",
  "ইবতেদাইয়্যাহ (৫ম শ্রেনী)",
];

export const divisions: string[] = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

export const districts = {
  Dhaka: [
    "Dhaka",
    "Gazipur",
    "Kishoreganj",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Tangail",
    "Faridpur",
    "Gopalganj",
    "Madaripur",
    "Rajbari",
    "Shariatpur",
  ],
  Chattogram: [
    "Chattogram",
    "Cox's Bazar",
    "Bandarban",
    "Rangamati",
    "Khagrachari",
    "Noakhali",
    "Feni",
    "Laxmipur",
    "Cumilla",
    "Brahmanbaria",
    "Chandpur",
  ],
  Rajshahi: [
    "Rajshahi",
    "Natore",
    "Pabna",
    "Sirajganj",
    "Bogra",
    "Joypurhat",
    "Naogaon",
    "Chapainawabganj",
  ],
  Khulna: [
    "Khulna",
    "Bagerhat",
    "Satkhira",
    "Jessore",
    "Narail",
    "Magura",
    "Jhenaidah",
    "Kushtia",
    "Chuadanga",
    "Meherpur",
  ],
  Barishal: [
    "Barishal",
    "Barguna",
    "Patuakhali",
    "Pirojpur",
    "Bhola",
    "Jhalokati",
  ],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  Rangpur: [
    "Rangpur",
    "Dinajpur",
    "Thakurgaon",
    "Panchagarh",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Gaibandha",
  ],
  Mymensingh: ["Mymensingh", "Netrokona", "Sherpur", "Jamalpur"],
};

export const upazilas = {
  Dhaka: ["Tejgaon", "Mirpur", "Dhanmondi", "Gulshan", "Uttara"],
  Gazipur: ["Sreepur", "Tongi", "Kaliganj", "Kapasia", "Kaliakair"],
  Kishoreganj: ["Bajitpur", "Katiadi", "Kishoreganj Sadar"],
  // Add other districts and their upazilas
};

export const policeStations = {
  Tejgaon: ["Tejgaon", "Shyamoli"],
  Mirpur: ["Mirpur", "Kafrul"],
  Sreepur: ["Sreepur", "Mawna"],
  Tongi: ["Tongi", "Cheragali"],
  Kaliganj: ["Kaliganj"],
  // Add other upazilas and their police stations
};

export const zones: string[] = [
  "জোন-১",
  "জোন-২",
  "জোন-৩",
  "জোন-৪",
  "জোন-৫",
  "জোন-৬",
  "জোন-৭",
  "জোন-৮",
  "জোন-৯",
  "জোন-১০",
];
