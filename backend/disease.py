import pandas as pd


def get_disease_info(name):
    disease_dict = {
        "Drug Reaction": {
            "description": "An adverse drug reaction (ADR) is an injury caused by taking medication. ADRs may occur following a single dose or prolonged administration of a drug or result from the combination of two or more drugs.",
            "precautions": [
                "stop irritation",
                "consult nearest hospital",
                "stop taking drug",
                "follow up",
            ],
        },
        "Malaria": {
            "description": "An infectious disease caused by protozoan parasites from the Plasmodium family that can be transmitted by the bite of the Anopheles mosquito or by a contaminated needle or transfusion. Falciparum malaria is the most deadly type.",
            "precautions": [
                "Consult nearest hospital",
                "avoid oily food",
                "avoid non veg food",
                "keep mosquitos out",
            ],
        },
        "Allergy": {
            "description": "An allergy is an immune system response to a foreign substance that's not typically harmful to your body.They can include certain foods, pollen, or pet dander. Your immune system's job is to keep you healthy by fighting harmful pathogens.",
            "precautions": [
                "apply calamine",
                "cover area with bandage",
                "use ice to compress itching",
            ],
        },
        "Hypothyroidism": {
            "description": "Hypothyroidism, also called underactive thyroid or low thyroid, is a disorder of the endocrine system in which the thyroid gland does not produce enough thyroid hormone.",
            "precautions": [
                "reduce stress",
                "exercise",
                "eat healthy",
                "get proper sleep",
            ],
        },
        "Psoriasis": {
            "description": "Psoriasis is a common skin disorder that forms thick, red, bumpy patches covered with silvery scales. They can pop up anywhere, but most appear on the scalp, elbows, knees, and lower back. Psoriasis can't be passed from person to person. It does sometimes happen in members of the same family.",
            "precautions": [
                "wash hands with warm soapy water",
                "stop bleeding using pressure",
                "consult doctor",
                "salt baths",
            ],
        },
        "GERD": {
            "description": "Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the lower esophageal sphincter (LES), the ring of muscle between the esophagus and stomach. Many people, including pregnant women, suffer from heartburn or acid indigestion caused by GERD.",
            "precautions": [
                "avoid fatty spicy food",
                "avoid lying down after eating",
                "maintain healthy weight",
                "exercise",
            ],
        },
        "Chronic cholestasis": {
            "description": "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases",
            "precautions": [
                "cold baths",
                "anti itch medicine",
                "consult doctor",
                "eat healthy",
            ],
        },
        "hepatitis A": {
            "description": "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. The virus is one of several types of hepatitis viruses that cause inflammation and affect your liver's ability to function.",
            "precautions": [
                "Consult nearest hospital",
                "wash hands through",
                "avoid fatty spicy food",
                "medication",
            ],
        },
        "Osteoarthristis": {
            "description": "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.",
            "precautions": [
                "acetaminophen",
                "consult nearest hospital",
                "follow up",
                "salt baths",
            ],
        },
        "(vertigo) Paroymsal  Positional Vertigo": {
            "description": "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning. Benign paroxysmal positional vertigo causes brief episodes of mild to intense dizziness.",
            "precautions": [
                "lie down",
                "avoid sudden change in body",
                "avoid abrupt head movment",
                "relax",
            ],
        },
        "Hypoglycemia": {
            "description": " Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source. Hypoglycemia is often related to diabetes treatment. But other drugs and a variety of conditions — many rare — can cause low blood sugar in people who don't have diabetes.",
            "precautions": [
                "lie down on side",
                "check in pulse",
                "drink sugary drinks",
                "consult doctor",
            ],
        },
        "Acne": {
            "description": "Acne vulgaris is the formation of comedones, papules, pustules, nodules, and/or cysts as a result of obstruction and inflammation of pilosebaceous units (hair follicles and their accompanying sebaceous gland). Acne develops on the face and upper trunk. It most often affects adolescents.",
            "precautions": [
                "bath twice",
                "avoid fatty spicy food",
                "drink plenty of water",
                "avoid too many products",
            ],
        },
        "Impetigo": {
            "description": "Impetigo (im-puh-TIE-go) is a common and highly contagious skin infection that mainly affects infants and children. Impetigo usually appears as red sores on the face, especially around a child's nose and mouth, and on hands and feet. The sores burst and develop honey-colored crusts.",
            "precautions": [
                "soak affected area in warm water",
                "use antibiotics",
                "remove scabs with wet compressed cloth",
                "consult doctor",
            ],
        },
        "Peptic ulcer diseae": {
            "description": "Peptic ulcer disease (PUD) is a break in the inner lining of the stomach, the first part of the small intestine, or sometimes the lower esophagus. An ulcer in the stomach is called a gastric ulcer, while one in the first part of the intestines is a duodenal ulcer.",
            "precautions": [
                "avoid fatty spicy food",
                "consume probiotic food",
                "eliminate milk",
                "limit alcohol",
            ],
        },
        "Common Cold": {
            "description": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
            "precautions": [
                "drink vitamin c rich drinks",
                "take vapour",
                "avoid cold food",
                "keep fever in check",
            ],
        },
        "Chicken pox": {
            "description": "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It can cause an itchy, blister-like rash. The rash first appears on the chest, back, and face, and then spreads over the entire body, causing between 250 and 500 itchy blisters.",
            "precautions": [
                "use neem in bathing ",
                "consume neem leaves",
                "take vaccine",
                "avoid public places",
            ],
        },
        "Cervical spondylosis": {
            "description": "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).",
            "precautions": [
                "use heating pad or cold pack",
                "exercise",
                "take otc pain reliver",
                "consult doctor",
            ],
        },
        "Hyperthyroidism": {
            "description": "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat.",
            "precautions": [
                "eat healthy",
                "massage",
                "use lemon balm",
                "take radioactive iodine treatment",
            ],
        },
        "Urinary tract infection": {
            "description": "Urinary tract infection: An infection of the kidney, ureter, bladder, or urethra. Abbreviated UTI. Not everyone with a UTI has symptoms, but common symptoms include a frequent urge to urinate and pain or burning when urinating.",
            "precautions": [
                "drink plenty of water",
                "increase vitamin c intake",
                "drink cranberry juice",
                "take probiotics",
            ],
        },
        "Varicose veins": {
            "description": "A vein that has enlarged and twisted, often appearing as a bulging, blue blood vessel that is clearly visible through the skin. Varicose veins are most common in older adults, particularly women, and occur especially on the legs.",
            "precautions": [
                "lie down flat and raise the leg high",
                "use oinments",
                "use vein compression",
                "dont stand still for long",
            ],
        },
        "AIDS": {
            "description": "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease.",
            "precautions": [
                "avoid open cuts",
                "wear ppe if possible",
                "consult doctor",
                "follow up",
            ],
        },
        "Paralysis (brain hemorrhage)": {
            "description": "Intracerebral hemorrhage (ICH) is when blood suddenly bursts into brain tissue, causing damage to your brain. Symptoms usually appear suddenly during ICH. They include headache, weakness, confusion, and paralysis, particularly on one side of your body.",
            "precautions": ["massage", "eat healthy", "exercise", "consult doctor"],
        },
        "Typhoid": {
            "description": "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain. Diarrhea is uncommon, and vomiting is not usually severe.",
            "precautions": [
                "eat high calorie vegitables",
                "antiboitic therapy",
                "consult doctor",
                "medication",
            ],
        },
        "Hepatitis B": {
            "description": "Hepatitis B is an infection of your liver. It can cause scarring of the organ, liver failure, and cancer. It can be fatal if it isn't treated. It's spread when people come in contact with the blood, open sores, or body fluids of someone who has the hepatitis B virus.",
            "precautions": [
                "consult nearest hospital",
                "vaccination",
                "eat healthy",
                "medication",
            ],
        },
        "Fungal infection": {
            "description": "In humans, fungal infections occur when an invading fungus takes over an area of the body and is too much for the immune system to handle. Fungi can live in the air, soil, water, and plants. There are also some fungi that live naturally in the human body. Like many microbes, there are helpful fungi and harmful fungi.",
            "precautions": [
                "bath twice",
                "use detol or neem in bathing water",
                "keep infected area dry",
                "use clean cloths",
            ],
        },
        "Hepatitis C": {
            "description": "Inflammation of the liver due to the hepatitis C virus (HCV), which is usually spread via blood transfusion (rare), hemodialysis, and needle sticks. The damage hepatitis C does to the liver can lead to cirrhosis and its complications as well as cancer.",
            "precautions": [
                "Consult nearest hospital",
                "vaccination",
                "eat healthy",
                "medication",
            ],
        },
        "Migraine": {
            "description": "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with your daily activities.",
            "precautions": [
                "meditation",
                "reduce stress",
                "use poloroid glasses in sun",
                "consult doctor",
            ],
        },
        "Bronchial Asthma": {
            "description": "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing. The disease is chronic and interferes with daily working.",
            "precautions": [
                "switch to loose cloothing",
                "take deep breaths",
                "get away from trigger",
                "seek help",
            ],
        },
        "Alcoholic hepatitis": {
            "description": "Alcoholic hepatitis is a diseased, inflammatory condition of the liver caused by heavy alcohol consumption over an extended period of time. It's also aggravated by binge drinking and ongoing alcohol use. If you develop this condition, you must stop drinking alcohol",
            "precautions": [
                "stop alcohol consumption",
                "consult doctor",
                "medication",
                "follow up",
            ],
        },
        "Jaundice": {
            "description": 'Yellow staining of the skin and sclerae (the whites of the eyes) by abnormally high blood levels of the bile pigment bilirubin. The yellowing extends to other tissues and body fluids. Jaundice was once called the "morbus regius" (the regal disease) in the belief that only the touch of a king could cure it',
            "precautions": [
                "drink plenty of water",
                "consume milk thistle",
                "eat fruits and high fiberous food",
                "medication",
            ],
        },
        "Hepatitis E": {
            "description": "A rare form of liver inflammation caused by infection with the hepatitis E virus (HEV). It is transmitted via food or drink handled by an infected person or through infected water supplies in areas where fecal matter may get into the water. Hepatitis E does not cause chronic liver disease.",
            "precautions": [
                "stop alcohol consumption",
                "rest",
                "consult doctor",
                "medication",
            ],
        },
        "Dengue": {
            "description": "an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. — called also breakbone fever, dengue fever.",
            "precautions": [
                "drink papaya leaf juice",
                "avoid fatty spicy food",
                "keep mosquitos away",
                "keep hydrated",
            ],
        },
        "Hepatitis D": {
            "description": "Hepatitis D, also known as the hepatitis delta virus, is an infection that causes the liver to become inflamed. This swelling can impair liver function and cause long-term liver problems, including liver scarring and cancer. The condition is caused by the hepatitis D virus (HDV).",
            "precautions": ["consult doctor", "medication", "eat healthy", "follow up"],
        },
        "Heart attack": {
            "description": "The death of heart muscle due to the loss of blood supply. The loss of blood supply is usually caused by a complete blockage of a coronary artery, one of the arteries that supplies blood to the heart muscle.",
            "precautions": [
                "call ambulance",
                "chew or swallow asprin",
                "keep calm",
            ],
        },
        "Pneumonia": {
            "description": "Pneumonia is an infection in one or both lungs. Bacteria, viruses, and fungi cause it. The infection causes inflammation in the air sacs in your lungs, which are called alveoli. The alveoli fill with fluid or pus, making it difficult to breathe.",
            "precautions": ["consult doctor", "medication", "rest", "follow up"],
        },
        "Arthritis": {
            "description": "Arthritis is the swelling and tenderness of one or more of your joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.",
            "precautions": [
                "exercise",
                "use hot and cold therapy",
                "try acupuncture",
                "massage",
            ],
        },
        "Gastroenteritis": {
            "description": "Gastroenteritis is an inflammation of the digestive tract, particularly the stomach, and large and small intestines. Viral and bacterial gastroenteritis are intestinal infections associated with symptoms of diarrhea , abdominal cramps, nausea , and vomiting .",
            "precautions": [
                "stop eating solid food for while",
                "try taking small sips of water",
                "rest",
                "ease back into eating",
            ],
        },
        "Tuberculosis": {
            "description": "Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body. Most infections show no symptoms, in which case it is known as latent tuberculosis.",
            "precautions": ["cover mouth", "consult doctor", "medication", "rest"],
        },
    }

    return disease_dict[name]


def generate_df(symptoms):
    symptoms_list = [
        "acidity",
        "back_pain",
        "bladder_discomfort",
        "breathlessness",
        "burning_micturition",
        "chest_pain",
        "chills",
        "constipation",
        "continuous_sneezing",
        "cough",
        "cramps",
        "fatigue",
        "headache",
        "high_fever",
        "indigestion",
        "joint_pain",
        "mood_swings",
        "muscle_wasting",
        "muscle_weakness",
        "neck_pain",
        "pain_during_bowel_movements",
        "patches_in_throat",
        "pus_filled_pimples",
        "shivering",
        "skin_rash",
        "stiff_neck",
        "stomach_pain",
        "sunken_eyes",
        "vomiting",
        "weakness_in_limbs",
        "weight_gain",
        "weight_loss",
        "yellowish_skin",
        "itching",
        "abdominal_pain",
        "anxiety",
        "blackheads",
        "blister",
        "bruising",
        "cold_hands_and_feets",
        "dehydration",
        "dizziness",
        "foul_smell_of urine",
        "knee_pain",
        "lethargy",
        "loss_of_appetite",
        "nausea",
        "nodal_skin_eruptions",
        "pain_in_anal_region",
        "restlessness",
        "skin_peeling",
        "sweating",
        "swelling_joints",
        "ulcers_on_tongue",
        "weakness_of_one_body_side",
        "altered_sensorium",
        "bloody_stool",
        "blurred_and_distorted_vision",
        "continuous_feel_of_urine",
        "dark_urine",
        "diarrhoea",
        "dischromic _patches",
        "extra_marital_contacts",
        "hip_joint_pain",
        "loss_of_balance",
        "movement_stiffness",
        "obesity",
        "red_sore_around_nose",
        "scurring",
        "silver_like_dusting",
        "spinning_movements",
        "swelling_of_stomach",
        "watering_from_eyes",
        "distention_of_abdomen",
        "excessive_hunger",
        "family_history",
        "irregular_sugar_level",
        "irritation_in_anus",
        "lack_of_concentration",
        "painful_walking",
        "passage_of_gases",
        "small_dents_in_nails",
        "spotting_ urination",
        "swollen_legs",
        "yellow_crust_ooze",
        "yellowing_of_eyes",
        "history_of_alcohol_consumption",
        "inflammatory_nails",
        "internal_itching",
        "mucoid_sputum",
        "swollen_blood_vessels",
        "unsteadiness",
        "depression",
        "fast_heart_rate",
        "fluid_overload",
        "malaise",
        "prominent_veins_on_calf",
        "puffy_face_and_eyes",
        "swelled_lymph_nodes",
        "enlarged_thyroid",
        "irritability",
        "mild_fever",
        "muscle_pain",
        "phlegm",
        "yellow_urine",
        "brittle_nails",
        "drying_and_tingling_lips",
        "increased_appetite",
        "visual_disturbances",
        "pain_behind_the_eyes",
        "polyuria",
        "slurred_speech",
        "swollen_extremeties",
        "throat_irritation",
        "toxic_look_(typhos)",
        "abnormal_menstruation",
        "acute_liver_failure",
        "belly_pain",
        "receiving_blood_transfusion",
        "red_spots_over_body",
        "redness_of_eyes",
        "rusty_sputum",
        "coma",
        "palpitations",
        "receiving_unsterile_injections",
        "sinus_pressure",
        "runny_nose",
        "stomach_bleeding",
        "congestion",
        "blood_in_sputum",
        "loss_of_smell",
    ]
    pred_data = {}
    for symptom_candidate in symptoms_list:
        pred_data[symptom_candidate] = 1 if symptom_candidate in symptoms else 0

    df = pd.DataFrame(pred_data, index=[""])
    return df
