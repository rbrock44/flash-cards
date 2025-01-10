import {FlashcardsData} from "../type/flash-card.type";

const baseUrl = 'https://home-page-api-34607.herokuapp.com/flash-cards';

export async function getFlashCards(): Promise<FlashcardsData> {
  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
    });

    return (await response.json()) as FlashcardsData;
  } catch (error) {
    console.log(error);
    return getLocalCards();
    return {
      categories: [
        {
          id: '',
          name: 'Error Retrieving Flash Card Data',
          subCategories: []
        }
      ]
    };
  }
}

function getLocalCards(): Promise<FlashcardsData> {
  return Promise.resolve({
    categories: [
      {
        id: '1',
        name: 'Medical Coding',
        subCategories: [
          {
            id: '1-1',
            name: '100 Words',
            flashCards:
              [
                {id: "1", question: "gastr-", answer: "Stomach"},
                {id: "2", question: "cardi-", answer: "Heart"},
                {id: "3", question: "megal-", answer: "Enlarged"},
                {id: "4", question: "-itis", answer: "Inflammation"},
                {id: "5", question: "dermat-", answer: "Skin"},
                {id: "6", question: "plast-", answer: "Surgical repair"},
                {id: "7", question: "cerebr-", answer: "Brain"},
                {id: "8", question: "path-", answer: "Disease"},
                {id: "9", question: "-ectomy", answer: "Surgical removal"},
                {id: "10", question: "enter-", answer: "Intestines"},
                {id: "11", question: "-osis", answer: "Any condition"},
                {id: "12", question: "-otomy", answer: "Cut into"},
                {id: "13", question: "aden-", answer: "gland"},
                {id: "14", question: "angi-", answer: "Vessel"},
                {id: "15", question: "-oma", answer: "Tumor"},
                {id: "16", question: "nephr-", answer: "Kidney"},
                {id: "17", question: "hepat-", answer: "Liver"},
                {id: "18", question: "arthr-", answer: "Joint"},
                {id: "19", question: "blephar-", answer: "eyelid"},
                {id: "20", question: "-ologist", answer: "Specialist"},
                {id: "21", question: "rhin-", answer: "Nose"},
                {id: "22", question: "gingiv-", answer: "gum"},
                {id: "23", question: "-malacia", answer: "Soft"},
                {id: "24", question: "-ology", answer: "The study of"},
                {id: "25", question: "Spasm", answer: "Involuntary contractions"},
                {id: "26", question: "-algia", answer: "pain"},
                {id: "27", question: "crani-", answer: "skull"},
                {id: "28", question: "end-", answer: "Inside, within"},
                {id: "29", question: "hemi-", answer: "half"},
                {id: "30", question: "-oid", answer: "like"},
                {id: "31", question: "hyper-", answer: "Above, more than normal"},
                {id: "32", question: "cyst-", answer: "Sac containing fluid"},
                {id: "33", question: "chole-", answer: "bile"},
                {id: "34", question: "hypo-", answer: "under"},
                {id: "35", question: "-scop-", answer: "observe"},
                {id: "36", question: "hyster-", answer: "uterus"},
                {id: "37", question: "-ostomy", answer: "Create an opening"},
                {id: "38", question: "para-", answer: "Beside, beyond"},
                {id: "39", question: "-lysis", answer: "Loosening, destruction"},
                {id: "40", question: "cervic-", answer: "neck"},
                {id: "41", question: "chondr-", answer: "cartilage"},
                {id: "42", question: "cyan-", answer: "blue"},
                {id: "43", question: "hem(at)-", answer: "blood"},
                {id: "44", question: "ost-", answer: "bone"},
                {id: "45", question: "psycho-", answer: "mind"},
                {id: "46", question: "lip-", answer: "fat"},
                {id: "47", question: "my-", answer: "muscle"},
                {id: "48", question: "lith-", answer: "stone"},
                {id: "49", question: "opthalm- opt-", answer: "Eye"},
                {id: "50", question: "proct-", answer: "Anus"},
                {id: "51", question: "cost-", answer: "Rib"},
                {id: "52", question: "-gram", answer: "Record"},
                {id: "53", question: "acro-", answer: "Extremities"},
                {id: "54", question: "rhexis", answer: "Break, burst"},
                {id: "55", question: "carcin-", answer: "Cancer"},
                {id: "56", question: "-penia", answer: "Decrease"},
                {id: "57", question: "gen-", answer: "Original, production"},
                {id: "58", question: "burso-", answer: "Sac"},
                {id: "59", question: "retr(o)-", answer: "Backwards"},
                {id: "60", question: "trip-", answer: "Rub, friction"},
                {id: "61", question: "strept-", answer: "Twist"},
                {id: "62", question: "-desis", answer: "Binding"},
                {id: "63", question: "mani-", answer: "Madness"},
                {id: "64", question: "glosso-", answer: "Tongue"},
                {id: "65", question: "-trophy", answer: "Development"},
                {id: "66", question: "supra-", answer: "Above"},
                {id: "67", question: "-ptosis", answer: "Falling"},
                {id: "68", question: "-dyn-", answer: "Pain"},
                {id: "69", question: "mast-", answer: "Breast"},
                {id: "70", question: "-rrhaphy", answer: "Suture"},
                {id: "71", question: "dent-", answer: "Teeth"},
                {id: "72", question: "cephal-", answer: "Head"},
                {id: "73", question: "auto-", answer: "Self"},
                {id: "74", question: "epi-", answer: "Upon"},
                {id: "75", question: "hydro-", answer: "Water"},
                {id: "76", question: "lobo-", answer: "Section"},
                {id: "77", question: "-emesis", answer: "Vomiting"},
                {id: "78", question: "contra-", answer: "Against, counter"},
                {id: "79", question: "-iasis", answer: "Condition"},
                {id: "80", question: "trans-", answer: "Through, across"},
                {id: "81", question: "brady-", answer: "Slow"},
                {id: "82", question: "-ectasis", answer: "Expansion"},
                {id: "83", question: "cyt-", answer: "Cell"},
                {id: "84", question: "odont-", answer: "Tooth"},
                {id: "85", question: "leuk-", answer: "White"},
                {id: "86", question: "-esthesia", answer: "Sensation"},
                {id: "87", question: "cantho-", answer: "Angle at the end of the eyelid"},
                {id: "88", question: "steno-", answer: "Narrow, contracted"},
                {id: "89", question: "cheil-", answer: "Lip"},
                {id: "90", question: "-cele", answer: "hernia"},
                {id: "91", question: "benign", answer: "Mild, not cancerous"},
                {id: "92", question: "semen", answer: "Seed"},
                {id: "93", question: "celio-", answer: "Abdomen"},
                {id: "94", question: "erythro-", answer: "Red"},
                {id: "95", question: "vaso-", answer: "Vessel"},
                {id: "96", question: "melan-", answer: "Black"},
                {id: "97", question: "cauda-", answer: "Tail"},
                {id: "98", question: "lingua-", answer: "Tongue"},
                {id: "99", question: "myring-", answer: "Eardrum"},
                {id: "100", question: "spondyl-", answer: "Spinal column"}
              ],
          },
          {
            id: '1-2',
            name: '50 Abbreviations',
            flashCards: [
              {id: "1", question: "WBC", answer: "White Blood Cells"},
              {id: "2", question: "ENT", answer: "Ears Nose & Throat"},
              {id: "3", question: "AMA", answer: "American Medical Association"},
              {id: "4", question: "BP", answer: "Blood Pressure"},
              {id: "5", question: "dx", answer: "Diagnosis"},
              {id: "6", question: "RBC", answer: "Red Blood Cell"},
              {id: "7", question: "SOB", answer: "Shortness of Breath"},
              {id: "8", question: "WHO", answer: "World Health Organization"},
              {id: "9", question: "WNL", answer: "Within Normal Limits"},
              {id: "10", question: "OD", answer: "Overdose"},
              {id: "11", question: "CBC", answer: "Complete Blood Count"},
              {id: "12", question: "sx", answer: "Symptoms"},
              {id: "13", question: "bx", answer: "Biopsy"},
              {id: "14", question: "DM", answer: "Diabetes Mellitus"},
              {id: "15", question: "AKI", answer: "Acute Kidney Injury"},
              {id: "16", question: "CAD", answer: "Coronary Artery Disease"},
              {id: "17", question: "ASD", answer: "Atrial Septal Defect"},
              {id: "18", question: "COPD", answer: "Chronic Obstructive Pulmonary Disease"},
              {id: "19", question: "CVA", answer: "Cerebrovascular Accident"},
              {id: "20", question: "MI", answer: "Myocardial Infarction"},
              {id: "21", question: "OSA", answer: "Obstructive Sleep Apnea"},
              {id: "22", question: "TSH", answer: "Thyroid Stimulating Hormone"},
              {id: "23", question: "H&P", answer: "History & Physical"},
              {id: "24", question: "ROS", answer: "Review of Symptoms"},
              {id: "25", question: "ED", answer: "Emergency Department"},
              {id: "26", question: "ICU", answer: "Intensive Care Unit"},
              {id: "27", question: "CPT", answer: "Current Procedural Terminology"},
              {id: "28", question: "ICD", answer: "International Classification of Disease"},
              {id: "29", question: "OTC", answer: "Over the Counter"},
              {id: "30", question: "DJD", answer: "Degenerative Joint Disease"},
              {id: "31", question: "NSAID", answer: "Non-Steroidal Anti-Inflammatory Drugs"},
              {id: "32", question: "CHF", answer: "Congestive Heart Failure"},
              {id: "33", question: "TB", answer: "Tuberculosis"},
              {id: "34", question: "IUD", answer: "Intrauterine Device"},
              {id: "35", question: "LMP", answer: "Last Menstrual Period"},
              {id: "36", question: "TBSA", answer: "Total Body Surface Area"},
              {id: "37", question: "DVT", answer: "Deep Vein Thrombosis"},
              {id: "38", question: "PE", answer: "Pulmonary Embolism"},
              {id: "39", question: "TIA", answer: "Transient Ischemic Attack"},
              {id: "40", question: "CABG", answer: "Coronary Artery Bypass Graft"},
              {id: "41", question: "DDD", answer: "Degenerative Disc Disease"},
              {id: "42", question: "fx", answer: "Fracture"},
              {id: "43", question: "HTN", answer: "Hypertension"},
              {id: "44", question: "I&D", answer: "Incision and Drainage"},
              {id: "45", question: "IBS", answer: "Irritable Bowel Syndrome"},
              {id: "46", question: "IM", answer: "Intramuscular"},
              {id: "47", question: "PUD", answer: "Peptic Ulcer Disease"},
              {id: "48", question: "RA", answer: "Rheumatoid Arthritis"},
              {id: "49", question: "SQ", answer: "Subcutaneous"},
              {id: "50", question: "UTI", answer: "Urinary Tract Infection"}
            ]
          }
        ]
      }
    ]
  });
}
