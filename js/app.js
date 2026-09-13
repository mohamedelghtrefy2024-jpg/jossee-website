        // ============================================================
        // I18N ENGINE — dictionary-based live translation (AR <-> EN)
        // Translates existing DOM text/attributes in place instead of
        // requiring every template to be hand-dualized. Handles content
        // added later (via innerHTML/textContent) through a MutationObserver.
        // ============================================================
        let currentLang = localStorage.getItem('jossee_lang') || 'ar';

        // Shorthand: returns the Arabic or English string depending on currentLang.
        function L(ar, en) { return currentLang === 'en' ? en : ar; }

        // Looks up a value in the dictionary (for use inside compound/template strings).
        function T(s) {
            if (currentLang !== 'en') return s;
            const norm = normalizeText(s);
            return AR_TO_EN[norm] || s;
        }

        const AR_TO_EN = {
"ج": "EGP",
"جم": "g",
"عرض": "View",
"سعر متغير بالكيلو": "Price varies by the kilo",
"ثبّت تطبيق Jossee Coffee": "Install the Jossee Coffee app",
"وصول أسرع، وتجربة بملء الشاشة من غير المتصفح": "Faster access, full-screen — no browser needed",
"تثبيت": "Install",
"تثبيت التطبيق": "Install app",
"كيف؟": "How?",
"اضغط زر المشاركة ⬆️ في الأسفل، ثم \"إضافة إلى الشاشة الرئيسية\"": "Tap the Share ⬆️ button below, then \"Add to Home Screen\"",
"اضغط زر المشاركة ⬆️ ثم \"إضافة إلى الشاشة الرئيسية\"": "Tap the Share ⬆️ button, then \"Add to Home Screen\"",
"بدأت رحلة خوسيه بشغف بسيط: تقديم فنجان قهوة لا يشبه غيره. اخترنا اسم \"خوسيه\" ليحمل معه روح المغامرة والاكتشاف، ومن يومها ونحن نبحث عن أفضل حبوب الأرابيكا حول العالم — من مرتفعات إثيوبيا وكينيا، إلى وديان أمريكا الجنوبية، وسهول اليمن — لنقدّم لعملائنا تجربة قهوة حقيقية، بعيدة عن الاستسهال والتسويق الفارغ.": "Jossee's journey began with a simple passion: to serve a cup of coffee unlike any other. We chose the name \"Jossee\" to carry a spirit of adventure and discovery, and ever since, we've been searching for the finest Arabica beans around the world — from the highlands of Ethiopia and Kenya, to the valleys of South America, to the plains of Yemen — to give our customers a genuine coffee experience, far from shortcuts and empty marketing.",
"الجرعة": "Dose",
"الماء": "Water",
"النسبة": "Ratio",
"الوقت": "Time",
"الطحن": "Grind",
"المعدات": "Equipment",
"نصيحة": "Tip",
"💡 نصيحة": "💡 Tip",
"درجة الحرارة": "Temperature",
"خطوات التحضير": "Brewing Steps",
"مر": "Bitter",
"مل": "ml",
"توت": "Berry",
"تين": "Fig",
"جوز": "Walnut",
"حار": "Spicy",
"خشب": "Wood",
"خشن": "Coarse",
"سجل": "Log",
"شخص": "Diagnose",
"عسل": "Honey",
"عشب": "Herb",
"قوي": "Strong",
"لوز": "Almond",
"هيل": "Cardamom",
"ورد": "Rose",
"وسط": "Medium",
"احسب": "Calculate",
"الكل": "All",
"بريف": "Breve",
"بندق": "Hazelnut",
"تربة": "Soil",
"تركي": "Turkish",
"جرام": "grams",
"جوزي": "Nutty",
"حامض": "Acidic",
"حلوة": "Sweet",
"حليب": "Milk",
"خشبي": "Woody",
"دخان": "Smoky",
"زهري": "Floral",
"زهور": "Flowers",
"سكري": "Sugary",
"ضعيف": "Weak",
"عشبي": "Herbal",
"غامق": "Dark",
"فاتح": "Light",
"فلتر": "Filter",
"قارن": "Compare",
"قرفة": "Cinnamon",
"قوام": "Body",
"محمص": "Roasted",
"مزيج": "Blend",
"ناعم": "Fine",
"75 مل": "75 ml",
"إبريق": "Kettle",
"السعر": "Price",
"النوع": "Type",
"الوزن": "Weight",
"ترابي": "Earthy",
"تركية": "Turkish",
"توابل": "Spices",
"حلاوة": "Sweetness",
"حمضية": "Acidity",
"غلاية": "Kettle",
"غليان": "Boiling",
"فاكهة": "Fruit",
"فاكهي": "Fruity",
"فواحة": "Aromatic",
"فواكه": "Fruits",
"قصتنا": "Our Story",
"قهاوي": "Kanaka (Turkish pot)",
"كاكاو": "Cacao",
"لونجو": "Lungo",
"مانجو": "Mango",
"مبتدئ": "Beginner",
"متقدم": "Advanced",
"متوسط": "Medium",
"مختصة": "Specialty",
"مرارة": "Bitterness",
"مرتفع": "High",
"مزيجك": "Your blend",
"مطحنة": "Grinder",
"معتدل": "Moderate",
"ملعقة": "Spoon",
"مميزة": "Distinctive",
"ميزان": "Scale",
"نكهات": "Flavors",
"💾 حفظ": "💾 Save",
"320 مل": "320 ml",
"360 مل": "360 ml",
"374 مل": "374 ml",
"أمريكا": "America",
"إيطالي": "Italian",
"استكشف": "Explore",
"الطعم:": "Taste:",
"القهوة": "Coffee",
"القوام": "Body",
"المنشأ": "Origin",
"الناتج": "Yield",
"بنكهات": "Flavored",
"تشيمكس": "Chemex",
"حمضيات": "Citrus",
"زر ورد": "Rose bud",
"سايفون": "Siphon",
"كراميل": "Caramel",
"ياسمين": "Jasmine",
"🌶️ حار": "🌶️ Spicy",
"🌸 زهور": "🌸 Floral",
"🥜 جوزي": "🥜 Nutty",
"10 جرام": "10 g",
"1000 مل": "1000 ml",
"18 جرام": "18 g",
"20 جرام": "20 g",
"22 جرام": "22 g",
"30 جرام": "30 g",
"36 جرام": "36 g",
"4 دقائق": "4 minutes",
"أفوجاتو": "Affogato",
"إسبانيا": "Spain",
"إسبريسو": "Espresso",
"إيطاليا": "Italy",
"التحضير": "Brewing",
"التحميص": "Roast",
"التشخيص": "Diagnosis",
"الحلاوة": "Sweetness",
"الحمضية": "Acidity",
"الخاصية": "Property",
"المرارة": "Bitterness",
"بلوبيري": "Blueberry",
"توت بري": "Cranberry",
"سكر بني": "Brown sugar",
"طحن خشن": "Coarse grind",
"فرنساوي": "French",
"كورتادو": "Cortado",
"ماكياتو": "Macchiato",
"معلومات": "Information",
"🍓 فواكه": "🍓 Fruity",
"\" بنجاح!": "\" successfully!",
"100 جرام": "100 g",
"أستراليا": "Australia",
"أمريكانو": "Americano",
"إيروبريس": "AeroPress",
"اتصل بنا": "Contact Us",
"الأساسية": "Essential",
"الرئيسية": "Home",
"الكافيين": "Caffeine",
"المجموع:": "Total:",
"المعالجة": "Process",
"المفضلة:": "Preferred:",
"بندق قطع": "Chopped hazelnut",
"جوز محمص": "Roasted walnut",
"خبز محمص": "Toasted bread",
"خشن جداً": "Very coarse",
"ريستريتو": "Ristretto",
"شاي أسود": "Black tea",
"شوكولاتة": "Chocolate",
"طحن ناعم": "Fine grind",
"عن خوسيه": "About Jossee",
"فاتح-وسط": "Light-medium",
"فلتر V60": "V60 filter",
"قوي جداً": "Very strong",
"كابتشينو": "Cappuccino",
"كولد برو": "Cold Brew",
"من الحبة": "From the bean",
"موكا بوت": "Moka Pot",
"وسط-غامق": "Medium-dark",
"🍯 كراميل": "🍯 Caramel",
"2-3 دقائق": "2-3 minutes",
"3-4 دقائق": "3-4 minutes",
"آيرو بريس": "AeroPress",
"ابدأ الآن": "Start Now",
"احسب الآن": "Calculate Now",
"المشروبات": "Drinks",
"بعد الطعم": "Aftertaste",
"تحميص وسط": "Medium roast",
"جريب فروت": "Grapefruit",
"جواتيمالا": "Guatemala",
"دون خوسيه": "Don Jossee",
"عطري جداً": "Very aromatic",
"غير معروف": "Unknown",
"فلات وايت": "Flat White",
"فلفل أسود": "Black pepper",
"قارن الآن": "Compare Now",
"قصة خوسيه": "The Jossee Story",
"قهوة قوية": "Strong coffee",
"كوستاريكا": "Costa Rica",
"لونج بلاك": "Long Black",
"متوسط خشن": "Medium-coarse",
"ناعم جداً": "Very fine",
"📂 محفوظات": "📂 Saved",
"12-18 ساعة": "12-18 hours",
"اختر النوع": "Choose type",
"اختر حبوبك": "Choose your beans",
"اسم المزيج": "Blend name",
"اصنع Blend": "Make a Blend",
"اصنع مزيجك": "Build your blend",
"تحميص غامق": "Dark roast",
"تحميص فاتح": "Light roast",
"جوزة الطيب": "Nutmeg",
"حلوة الطعم": "Sweet-tasting",
"خوسيه سادة": "Jossee Plain",
"دليل الطحن": "Grind Guide",
"سكري / حلو": "Sugary / Sweet",
"شغف القهوة": "Coffee Passion",
"فرينش بريس": "French Press",
"فواكه جافة": "Dried fruit",
"قهوة بجودة": "Quality coffee",
"قهوة تركية": "Turkish coffee",
"ماكا سوداء": "Black Maca",
"متوسط ناعم": "Medium-fine",
"محمص / قوي": "Roasted / Strong",
"مرتفع جداً": "Very high",
"مطحنة قهوة": "Coffee grinder",
"نوع القهوة": "Coffee type",
"✅ تم حفظ \"": "✅ Saved \"",
"🍫 شوكولاتة": "🍫 Chocolate",
"27-30 ثانية": "27-30 seconds",
"g • نسبة 1:": "g • ratio 1:",
"آلة إسبريسو": "Espresso machine",
"إلى الفنجان": "To the cup",
"الملف الحسي": "Sensory profile",
"تجفيف طبيعي": "Natural drying",
"تجفيف مباشر": "Direct drying",
"حار / توابل": "Spicy / Spices",
"خفيف ← ثقيل": "Light → Heavy",
"خوسيه بابلو": "Jossee Pablo",
"خوسيه جوتشو": "Jossee Gotcho",
"خوسيه دييجو": "Jossee Diego",
"خوسيه كالدي": "Jossee Caldi",
"دريبر (V60)": "Dripper (V60)",
"زهري / عطري": "Floral / Aromatic",
"سجل التحضير": "Brew Log",
"طرق التحضير": "Brewing Methods",
"فواكه حمضية": "Citrus fruits",
"قارن القهوة": "Compare Coffee",
"كافيه لاتيه": "Caffè Latte",
"📊 عرض السجل": "📊 View Log",
"🟡 مطابق جيد": "🟡 Good match",
"أرابيكا 100%": "100% Arabica",
"اختر الطريقة": "Choose method",
"بندق لوز قطع": "Chopped hazelnut & almond",
"بيكولو لاتيه": "Piccolo Latte",
"ترابي / عشبي": "Earthy / Herbal",
"جراندي خوسيه": "Grandi Jossee",
"خوسيه أشانتي": "Jossee Ashanti",
"خوسيه بوجوتا": "Jossee Bogota",
"خوسيه سافانا": "Jossee Savana",
"خوسيه نيروبي": "Jossee Nairobi",
"دقة 0.1 جرام": "0.1 g precision",
"دليل المعدات": "Equipment Guide",
"سانتا لوتشيا": "Santa Lucia",
"طحن خشن جداً": "Very coarse grind",
"عجلة النكهات": "Flavor Wheel",
"فاكهي / حمضي": "Fruity / Citrus",
"متوسط الجرعة": "Average dose",
"متوسط الناتج": "Average yield",
"مختبر القهوة": "Coffee Lab",
"مستكة يوناني": "Greek mastic",
"نتيجة المزيج": "Blend result",
"نكهات التذوق": "Tasting notes",
"✅ تم تحميل \"": "✅ Loaded \"",
"1:15 (كلاسيك)": "1:15 (Classic)",
"1:17 (تشيمكس)": "1:17 (Chemex)",
"1:2 (إسبريسو)": "1:2 (Espresso)",
"1:2.5 (لونجو)": "1:2.5 (Lungo)",
"ابحث عن قهوتك": "Find Your Coffee",
"ابحث عن قهوتي": "Find My Coffee",
"اختر نوع البن": "Choose a coffee",
"استكشف القهوة": "Explore Coffee",
"الجرعة (Dose)": "Dose",
"الجرعة (جرام)": "Dose (grams)",
"القوام (Body)": "Body",
"الوقت (ثانية)": "Time (seconds)",
"جوزي / مكسرات": "Nutty / Nuts",
"حاسبة التحضير": "Brew Calculator",
"خوسيه إسبريسو": "Jossee Espresso",
"خوسيه جونزالو": "Jossee Gonzalo",
"خوسيه فانتازم": "Jossee Fantasma",
"خولان - اليمن": "Khawlan - Yemen",
"رويري - كينيا": "Ruiru - Kenya",
"زهرة شاي أسود": "Black tea flower",
"سريعة التحضير": "Instant",
"ضبط الإسبريسو": "Espresso Dial-In",
"طحن متوسط خشن": "Medium-coarse grind",
"طحن ناعم جداً": "Very fine grind",
"طريقة التحضير": "Brewing method",
"فاتح-وسط-غامق": "Light-medium-dark",
"قهاوي (تركية)": "Kanaka (Turkish pot)",
"موسوعة القهوة": "Coffee Encyclopedia",
"💾 حفظ التجربة": "💾 Save Experiment",
"🟢 مطابق ممتاز": "🟢 Excellent match",
"1:1 (ريستريتو)": "1:1 (Ristretto)",
"1:18 (كيميائي)": "1:18 (Chemical)",
"إبريق كولد برو": "Cold brew pitcher",
"إجمالي التجارب": "Total experiments",
"إسبريسو رومانو": "Espresso Romano",
"استكشف النكهات": "Explore Flavors",
"الجرعة بالجرام": "Dose in grams",
"الملف التقديري": "Estimated profile",
"الناتج (Yield)": "Yield",
"الناتج بالجرام": "Yield in grams",
"النكهة المفضلة": "Preferred flavor",
"الوقت المستهدف": "Target time",
"تحميص فاتح-وسط": "Light-medium roast",
"تحميص وسط-غامق": "Medium-dark roast",
"خوسيه فيرناندو": "Jossee Fernando",
"دون خوسيه سادة": "Don Jossee Plain",
"شوكولاتة داكنة": "Dark chocolate",
"شوكولاتة ساخنة": "Hot chocolate",
"طحن متوسط ناعم": "Medium-fine grind",
"طريقة المعالجة": "Processing method",
"قهوة قوية جداً": "Very strong coffee",
"كيلو (1000 جم)": "Kilo (1000 g)",
"ملاحظات التذوق": "Tasting notes",
"نتائج المقارنة": "Comparison results",
"نسبة الاستخلاص": "Extraction ratio",
"نظيف، هش، معقد": "Clean, crisp, complex",
"أمازوناس - بيرو": "Amazonas - Peru",
"إبريق أو مرطبان": "Pitcher or jar",
"استكشف التشكيلة": "Explore the Collection",
"التحميص المثالي": "The perfect roast",
"السعر (ج/250جم)": "Price (EGP/250g)",
"حاسبة الإسبريسو": "Espresso Calculator",
"خوسيه بارباروسا": "Jossee Barbarossa",
"خوسيه بونبونيرا": "Jossee Bonbonera",
"خوسيه سادة/محوج": "Jossee Plain / Spiced",
"صب فوراً وقدمها": "Pour immediately and serve",
"ماء بارد / غرفة": "Cold / room temp water",
"مشروبات بالحليب": "Milk-based drinks",
"منخفضة ← مرتفعة": "Low → High",
"نسبة القهوة:ماء": "Coffee:water ratio",
"🔵 يستحق التجربة": "🔵 Worth trying",
"+ أضف نوع بن آخر": "+ Add another coffee",
"1:3 (لونجو طويل)": "1:3 (Long Lungo)",
"أرابيكا 100% AAA": "100% Arabica AAA",
"اختر النوع الأول": "Choose first type",
"اصنع مزيجك الخاص": "Build your own blend",
"اضغط المكبس ببطء": "Press the plunger slowly",
"النتائج المطابقة": "Matching results",
"خوسيه بابلو سادة": "Jossee Pablo Plain",
"خوسيه جوتشو سادة": "Jossee Gotcho Plain",
"خوسيه دييجو سادة": "Jossee Diego Plain",
"خوسيه فرينش بريس": "Jossee French Press",
"خوسيه كالدي سادة": "Jossee Caldi Plain",
"خوسيه محوج (هيل)": "Jossee Spiced (Cardamom)",
"شوكولاتة / كاكاو": "Chocolate / Cacao",
"شوكولاتة بالحليب": "Milk chocolate",
"لو لسه مش مظبوطة": "If it's still not quite right",
"ما هو الأرابيكا؟": "What is Arabica?",
"ما هو الروبوستا؟": "What is Robusta?",
"مركز، غني، كريمي": "Concentrated, rich, creamy",
"موسوعة المشروبات": "Drinks Encyclopedia",
"نص كيلو (500 جم)": "Half kilo (500 g)",
"1:12 (فرينش بريس)": "1:12 (French Press)",
"اختر النوع الثاني": "Choose second type",
"الحمضية (Acidity)": "Acidity",
"تفاصيل نوع القهوة": "Coffee details",
"تقليل جرعة القهوة": "Reduce coffee dose",
"تقليل وقت التخمير": "Reduce brew time",
"جبال حراز - اليمن": "Haraz Mountains - Yemen",
"جراندي خوسيه سادة": "Grandi Jossee Plain",
"جواتيمالا + الهند": "Guatemala + India",
"جينسينج أحمر كوري": "Korean red ginseng",
"حجم الدفعة (جرام)": "Batch size (grams)",
"خوسيه أشانتي سادة": "Jossee Ashanti Plain",
"خوسيه بوجوتا سادة": "Jossee Bogota Plain",
"خوسيه سافانا سادة": "Jossee Savana Plain",
"خوسيه نيروبي سادة": "Jossee Nairobi Plain",
"درجة الحرارة (°C)": "Temperature (°C)",
"ربع كيلو (250 جم)": "Quarter kilo (250 g)",
"زيادة وقت التخمير": "Increase brew time",
"صفحتنا على فيسبوك": "Our Facebook page",
"صفِّ المزيج جيداً": "Strain the blend well",
"غني، كثيف، تقليدي": "Rich, dense, traditional",
"كلاسيك خوسيه سادة": "Classic Jossee Plain",
"الإضافات (Add-ons)": "Add-ons",
"الناتج (جرام / مل)": "Yield (g / ml)",
"جرعة القهوة (جرام)": "Coffee dose (grams)",
"حجم الدفعة بالجرام": "Batch size in grams",
"خوسيه أمريكان كوفي": "Jossee American Coffee",
"فلتر أو مصفاة قماش": "Filter or cloth strainer",
"قهوة ضعيفة التركيز": "Weak-strength coffee",
"كولومبيا - كوينديو": "Colombia - Quindio",
"نظيف، متوازن، معقد": "Clean, balanced, complex",
"— نسبتك الحالية 1:": " — your current ratio is 1:",
"📊 مقارنة هذا النوع": "📊 Compare this type",
"1oz إسبريسو + ليمون": "1oz espresso + lemon",
"أحدث إضافات القائمة": "Latest menu additions",
"اختر نكهة من العجلة": "Choose a flavor from the wheel",
"استهدف ناتج 36 جرام": "Target a 36g yield",
"الحلاوة (Sweetness)": "Sweetness",
"جبال إيفرست - نيبال": "Mount Everest - Nepal",
"جرعة القهوة بالجرام": "Coffee dose in grams",
"خوسيه سريعة التحضير": "Jossee Instant",
"سجل التجارب السابقة": "Previous experiment log",
"سخن الآلة والمجموعة": "Heat the machine and group head",
"صفحتنا على انستجرام": "Our Instagram page",
"غسيل وتجفيف أسبوعين": "Washed and dried for two weeks",
"مشكلة في الاستخلاص؟": "Extraction problem?",
"أرابيكا 100% نيبالية": "100% Nepalese Arabica",
"أستراليا / نيوزيلندا": "Australia / New Zealand",
"إصدارات جديدة ومميزة": "New and distinctive releases",
"خفض درجة حرارة الماء": "Lower the water temperature",
"خوسيه بونبونيرا سادة": "Jossee Bonbonera Plain",
"دون خوسيه محوج (هيل)": "Don Jossee Spiced (Cardamom)",
"سانتا لوتشيا إسبريسو": "Santa Lucia Espresso",
"ما هو القوام (Body)؟": "What is Body?",
"نتائج البحث عن قهوتك": "Your coffee search results",
"1oz (30ml) | نسبة 1:2": "1oz (30ml) | ratio 1:2",
"اضغط القهوة بضغط ثابت": "Tamp the coffee with even pressure",
"تواصل معنا على واتساب": "Contact us on WhatsApp",
"توليفة اقتصادية يومية": "An everyday economical blend",
"خوسيه جونزالو إسبريسو": "Jossee Gonzalo Espresso",
"خولان - اليمن + نيبال": "Khawlan - Yemen + Nepal",
"قارن بين أنواع القهوة": "Compare coffee types",
"ابحث عن قهوتك المثالية": "Find your perfect coffee",
"حبوب من منشأ واحد محدد": "Beans from a single defined origin",
"خوسيه بابلو محوج (هيل)": "Jossee Pablo Spiced (Cardamom)",
"خوسيه جوتشو محوج (هيل)": "Jossee Gotcho Spiced (Cardamom)",
"خوسيه دييجو محوج (هيل)": "Jossee Diego Spiced (Cardamom)",
"خوسيه كالدي محوج (هيل)": "Jossee Caldi Spiced (Cardamom)",
"سان ماركوس - كوستاريكا": "San Marcos - Costa Rica",
"غني، ممتلئ الجسم، زيتي": "Rich, full-bodied, oily",
"وقت الاستخلاص بالثانية": "Extraction time in seconds",
"⚠️ الحد الأقصى 5 أنواع": "⚠️ Maximum of 5 types",
"📱 01281300002 (واتساب)": "📱 01281300002 (WhatsApp)",
"1oz إسبريسو + لمسة حليب": "1oz espresso + a touch of milk",
"1oz ريستريتو + 2oz حليب": "1oz ristretto + 2oz milk",
"V60 / بور أوفر / سايفون": "V60 / Pour-over / Siphon",
"جراندي خوسيه محوج (هيل)": "Grandi Jossee Spiced (Cardamom)",
"خوسيه أشانتي محوج (هيل)": "Jossee Ashanti Spiced (Cardamom)",
"خوسيه بوجوتا محوج (هيل)": "Jossee Bogota Spiced (Cardamom)",
"خوسيه سافانا محوج (هيل)": "Jossee Savana Spiced (Cardamom)",
"خوسيه نيروبي محوج (هيل)": "Jossee Nairobi Spiced (Cardamom)",
"سانتا لوتشيا فرينش بريس": "Santa Lucia French Press",
"ضبط الإسبريسو (Dial-In)": "Espresso Dial-In",
"كلاسيك خوسيه محوج (هيل)": "Classic Jossee Spiced (Cardamom)",
"ناعم، حلو، حموضة منخفضة": "Smooth, sweet, low acidity",
"✅ تم حفظ التجربة بنجاح!": "✅ Experiment saved successfully!",
"1-2oz إسبريسو + آيس كريم": "1-2oz espresso + ice cream",
"أعد الكرّة مرتين أو ثلاث": "Repeat two or three times",
"استمر حتى تصل إلى 320 مل": "Continue until you reach 320 ml",
"استمر حتى تصل إلى 374 مل": "Continue until you reach 374 ml",
"توليفات أعلى كثافة ونكهة": "Higher-intensity, more flavorful blends",
"حرك القهوة لمدة 30 ثانية": "Stir the coffee for 30 seconds",
"خوسيه جولد سريعة التحضير": "Jossee Gold Instant",
"خوسيه جونزالو فرينش بريس": "Jossee Gonzalo French Press",
"ضع القهاوي على نار هادئة": "Place the kanaka over low heat",
"كينيا + نيبال + كولومبيا": "Kenya + Nepal + Colombia",
"ما هي الحموضة (Acidity)؟": "What is Acidity?",
"مخطط الملف الحسي الشعاعي": "Radar sensory profile chart",
"من الحبة... إلى الفنجان.": "From the bean... to the cup.",
"2oz (60ml) | نسبة 1:3-1:4": "2oz (60ml) | ratio 1:3-1:4",
"أرابيكا 70% + روبوستا 30%": "70% Arabica + 30% Robusta",
"اترك القهوة تتصفى بالكامل": "Let the coffee fully drain",
"استكشف. امزج. حضّر. افهم.": "Explore. Blend. Brew. Understand.",
"اشطف الفلتر بالماء الساخن": "Rinse the filter with hot water",
"القوام المفضل من 1 إلى 10": "Preferred body, 1 to 10",
"تابعنا على السوشيال ميديا": "Follow us on social media",
"سانتا لوتشيا أمريكان كوفي": "Santa Lucia American Coffee",
"1oz إسبريسو + 3oz ماء ساخن": "1oz espresso + 3oz hot water",
"JOSSEE COFFEE — قهوة مختصة": "JOSSEE COFFEE — Specialty Coffee",
"اختر نسبة القهوة إلى الماء": "Choose the coffee-to-water ratio",
"جاهز لاستكشاف عالم القهوة؟": "Ready to explore the world of coffee?",
"حرك حتى تذوب القهوة تماماً": "Stir until the coffee fully dissolves",
"خوسيه بارباروسا محوج (هيل)": "Jossee Barbarossa Spiced (Cardamom)",
"خوسيه بونبونيرا محوج (هيل)": "Jossee Bonbonera Spiced (Cardamom)",
"خوسيه جونزالو أمريكان كوفي": "Jossee Gonzalo American Coffee",
"كل الدرجات (فاتح/وسط/غامق)": "All roast levels (light/medium/dark)",
"📍 شبرا مصر - 27 ش شيكولاني": "📍 Shubra Misr - 27 Chicolani St.",
"اختر النوع الثالث (اختياري)": "Choose third type (optional)",
"اكتشف أفضل طرق تحضير القهوة": "Discover the best coffee brewing methods",
"الحلاوة المفضلة من 1 إلى 10": "Preferred sweetness, 1 to 10",
"الحمضية المفضلة من 1 إلى 10": "Preferred acidity, 1 to 10",
"ضع الماء والقهوة في القهاوي": "Put the water and coffee in the kanaka",
"⚠️ يجب أن يكون المجموع 100%": "⚠️ The total must be 100%",
"+30 ج في حالة التحميص الغامق": "+30 EGP for dark roast",
"1oz إسبريسو + 1oz حليب (1:1)": "1oz espresso + 1oz milk (1:1)",
"2oz إسبريسو فوق 3oz ماء ساخن": "2oz espresso over 3oz hot water",
"اختر أنواع البن لإنشاء مزيجك": "Choose coffee types to build your blend",
"اطحن القهوة طحناً خشناً جداً": "Grind the coffee very coarsely",
"شخص وحل مشاكل استخلاص القهوة": "Diagnose and fix coffee extraction issues",
"صب الماء على مرحلتين أو ثلاث": "Pour the water in two or three stages",
"صب في الفناجين واتركها تترسب": "Pour into cups and let it settle",
"طحن: خشن | 92-96°C | 4 دقائق": "Grind: Coarse | 92-96°C | 4 minutes",
"قهوة بنكهة فريدة وروح أصيلة.": "Coffee with a unique flavor and authentic spirit.",
"وزع القهوة بالتساوي في السلة": "Distribute the coffee evenly in the basket",
"يجب أن يكون مجموع النسب 100%": "The percentages must total 100%",
"أحادية المنشأ (Single Origin)": "Single Origin",
"خولان - اليمن + رويري - كينيا": "Khawlan - Yemen + Ruiru - Kenya",
"طحن: ناعم | 80-96°C | دقيقتين": "Grind: Fine | 80-96°C | 2 minutes",
"غطِ واتركها تنقع لمدة 4 دقائق": "Cover and let it steep for 4 minutes",
"قهوة تركية بكوب Jossee الأصلي": "Turkish coffee in the original Jossee cup",
"كيف تضبط (Dial In) الإسبريسو؟": "How do you dial in espresso?",
"0.5oz (15ml) | نسبة 1:1 أو أقل": "0.5oz (15ml) | ratio 1:1 or less",
"أضف 20 جرام من القهوة المطحونة": "Add 20g of ground coffee",
"أضف 22 جرام من القهوة المطحونة": "Add 22g of ground coffee",
"استخلاص زائد (Over-extraction)": "Over-extraction",
"استكشف النكهات المختلفة للقهوة": "Explore coffee's different flavors",
"شغل الاستخلاص لمدة 27-30 ثانية": "Run the extraction for 27-30 seconds",
"صب 360 مل من الماء الساخن 94°C": "Pour 360 ml of hot water at 94°C",
"ما هو الأفترتيست (Aftertaste)؟": "What is Aftertaste?",
"اخلطها مع الماء البارد في إبريق": "Mix it with cold water in a pitcher",
"استخلاص ناقص (Under-extraction)": "Under-extraction",
"الرجاء ملء جميع الحقول المطلوبة": "Please fill in all required fields",
"صب الماء تدريجياً بحركات دائرية": "Pour the water gradually in circular motions",
"طحن: ناعم | 90-94°C | 6-7 دقائق": "Grind: Fine | 90-94°C | 6-7 minutes",
"غطِ واترك في الثلاجة 12-18 ساعة": "Cover and refrigerate for 12-18 hours",
"هل أنت متأكد من حذف هذا المزيج؟": "Are you sure you want to delete this blend?",
"1oz إسبريسو + 3oz كريمة نصف ونصف": "1oz espresso + 3oz half-and-half cream",
"اترك القهوة تتصفى لمدة 2-3 دقائق": "Let the coffee drain for 2-3 minutes",
"تعرف على أساسيات القهوة في دقيقة": "Learn coffee basics in a minute",
"جرّب هذا أولاً (متغير واحد فقط):": "Try this first (one variable only):",
"زيادة درجة حرارة الماء (92-94°C)": "Increase water temperature (92-94°C)",
"طحن: متوسط | 92-96°C | 4-5 دقائق": "Grind: Medium | 92-96°C | 4-5 minutes",
"طحن: متوسط ناعم | 99°C | 7 دقائق": "Grind: Medium-fine | 99°C | 7 minutes",
"إثيوبيا + أمريكا الجنوبية + الهند": "Ethiopia + South America + India",
"ما هي المعالجة المغسولة (Washed)؟": "What is the Washed process?",
"أرابيكا + روبوستا شرق آسيوي (قليل)": "Arabica + a little East Asian Robusta",
"أنواع البن التي تتميز بهذه النكهة:": "Coffee types known for this flavor:",
"انضم إلينا واكتشف تجربة قهوة فريدة": "Join us and discover a unique coffee experience",
"طحن أخشن قليلاً لتقليل زمن التلامس": "Grind slightly coarser to reduce contact time",
"طحن أنعم قليلاً لزيادة زمن التلامس": "Grind slightly finer to increase contact time",
"طحن: ناعم جداً | غليان | 3-4 دقائق": "Grind: Very fine | Boiling | 3-4 minutes",
"قهوة مختصة بنكهة فريدة وروح أصيلة.": "Specialty coffee with a unique flavor and authentic spirit.",
"كيف تؤثر درجة الطحن على الاستخلاص؟": "How does grind size affect extraction?",
"ما هي المعالجة الطبيعية (Natural)؟": "What is the Natural process?",
"1-2oz إسبريسو + 2oz حليب + 2oz رغوة": "1-2oz espresso + 2oz milk + 2oz foam",
"اضغط المكبس ببطء لتجنب الخلط الزائد": "Press the plunger slowly to avoid over-agitation",
"اطحن 18 جرام من القهوة طحناً ناعماً": "Grind 18g of coffee finely",
"توزيع القهوة بشكل متساوٍ داخل السلة": "Distribute the coffee evenly inside the basket",
"عندما ترتفع الرغوة، ارفعها عن النار": "When the foam rises, take it off the heat",
"أضف 30 جرام من القهوة المطحونة خشناً": "Add 30g of coarsely ground coffee",
"اكتشف تشكيلة مشروبات القهوة المتنوعة": "Discover our varied coffee drinks selection",
"🚚 التوصيل متاح لجميع أنحاء الجمهورية": "🚚 Delivery available nationwide",
"1oz إسبريسو + 2oz حليب ميكروفوم (2:1)": "1oz espresso + 2oz microfoam milk (2:1)",
"طحن: خشن جداً | ماء بارد | 12-18 ساعة": "Grind: Very coarse | Cold water | 12-18 hours",
"طحن: متوسط ناعم | 92-96°C | 3-4 دقائق": "Grind: Medium-fine | 92-96°C | 3-4 minutes",
"1oz إسبريسو + 8-10oz حليب + رغوة خفيفة": "1oz espresso + 8-10oz milk + light foam",
"الرجاء اختيار نوعين على الأقل للمقارنة": "Please choose at least two types to compare",
"المعدات الأساسية لتحضير القهوة المختصة": "Essential equipment for brewing specialty coffee",
"سجل تجاربك وتتبع تقدمك في تحضير القهوة": "Log your experiments and track your brewing progress",
"تقليل جرعة القهوة (Dose) مع ثبات النسبة": "Reduce coffee dose while keeping the ratio",
"زيادة جرعة القهوة (Dose) مع ثبات النسبة": "Increase coffee dose while keeping the ratio",
"أجب عن الأسئلة لنجد لك البن الأنسب لذوقك": "Answer the questions and we'll find the best coffee for your taste",
"اختر أنواع البن وعدّل النسب لإنشاء مزيجك": "Choose coffee types and adjust ratios to create your blend",
"اختر حتى 3 أنواع لمقارنتها جنباً إلى جنب": "Choose up to 3 types to compare side by side",
"تقليل وقت الاستخلاص (استهدف 25-30 ثانية)": "Reduce extraction time (target 25-30 seconds)",
"زيادة وقت الاستخلاص (استهدف 25-30 ثانية)": "Increase extraction time (target 25-30 seconds)",
"قم بالتخمير الأولي بـ 40 مل لمدة 30 ثانية": "Bloom with 40 ml for 30 seconds",
"قم بالتخمير الأولي بـ 44 مل لمدة 30 ثانية": "Bloom with 44 ml for 30 seconds",
"أرابيكا (توليفة) + نسبة قليلة روبوستا هندي": "Arabica (blend) + a small share of Indian Robusta",
"احسب الجرعة والنسبة المثالية لإسبريسو رائع": "Calculate the ideal dose and ratio for great espresso",
"الرجاء اختيار نوعين على الأقل وتحديد النسب": "Please choose at least two types and set the ratios",
"خفف بالماء أو الحليب حسب الرغبة قبل التقديم": "Dilute with water or milk to taste before serving",
"استخدم ماء بدرجة حرارة 93°C للنتائج المثالية": "Use water at 93°C for the best results",
"تعرف على درجة الطحن المناسبة لكل طريقة تحضير": "Learn the right grind size for each brewing method",
"شرق آسيا + أفريقيا + أمريكا الجنوبية + الهند": "East Asia + Africa + South America + India",
"قارن بين أنواع القهوة المختلفة جنباً إلى جنب": "Compare different coffee types side by side",
"لو لسه مش مظبوطة، بعد كده فقط جرّب بالترتيب:": "If it's still not quite right, only then try in order:",
"استخدم قهوة طازجة مطحونة قبل الاستخلاص مباشرة": "Use freshly ground coffee right before extraction",
"امزج أنواع البن المفضلة لديك واصنع Blend فريد": "Mix your favorite coffee types and create a unique blend",
"طحن أخشن قليلاً — أسرع طريقة لتقليل الاستخلاص": "Grind slightly coarser — the fastest way to reduce extraction",
"طحن أنعم قليلاً — أسرع طريقة لزيادة الاستخلاص": "Grind slightly finer — the fastest way to increase extraction",
"أجب عن أسئلة بسيطة وابحث عن البن المثالي لذوقك": "Answer a few simple questions and find the perfect coffee for your taste",
"استخدام نسبة قهوة:ماء أقل (1:15 بدلاً من 1:17)": "Use a lower coffee:water ratio (1:15 instead of 1:17)",
"نكهات جوزية دافئة تذكرنا باللوز والبندق والجوز": "Warm nutty flavors reminiscent of almond, hazelnut, and walnut",
"استخدام نسبة قهوة:ماء أعلى (1:17 بدلاً من 1:15)": "Use a higher coffee:water ratio (1:17 instead of 1:15)",
"اختر من تشكيلتنا المتنوعة من أجود حبوب الأرابيكا": "Choose from our varied selection of the finest Arabica beans",
"لا تحرك القهاوي أثناء الغليان لتجنب تكسير الرغوة": "Don't stir the kanaka while it's boiling, to avoid breaking the foam",
"احسب نسبة القهوة إلى الماء لطريقة التحضير المفضلة": "Calculate the coffee-to-water ratio for your preferred brewing method",
"انقر على أي جزء من عجلة النكهات لاستكشاف تفاصيلها": "Click any part of the flavor wheel to explore its details",
"نكهات دافئة مع لمسات من التوابل والبهارات المميزة": "Warm flavors with touches of distinctive spices",
"(تقديري Estimated — مبني على وصف المذاق في المصدر)": "(Estimated — based on the taste description in the source)",
"استخدم فلتر التشيمكس المخصص للحصول على أفضل النتائج": "Use the dedicated Chemex filter for the best results",
"ما هي النكهات التي لاحظتها؟ هل كان الاستخلاص جيداً؟": "What flavors did you notice? Was the extraction good?",
"السعر ثابت بغض النظر عن درجة التحميص (فاتح/وسط/غامق)": "The price is fixed regardless of roast level (light/medium/dark)",
"كلما زادت مدة النقع زادت الكثافة — جرّب واضبط حسب ذوقك": "The longer it steeps, the stronger it gets — experiment and adjust to taste",
"نكهات ترابية وعشبية تذكرنا بالغابات والأراضي البركانية": "Earthy, herbal flavors reminiscent of forests and volcanic soil",
"نكهات حلوة طبيعية تذكرنا بالسكر البني والكراميل والعسل": "Naturally sweet flavors reminiscent of brown sugar, caramel, and honey",
"نكهات محمصة عميقة مع لمسات من الخبز المحمص والجوز المحمص": "Deep roasted flavors with touches of toasted bread and roasted walnut",
"نكهات غنية بالشوكولاتة مع لمسات من الكاكاو الداكن والحليب": "Rich chocolate flavors with touches of dark cacao and milk",
"نكهات زهرية عطرية مع لمسات من الياسمين والورد والشاي الأسود": "Aromatic floral flavors with touches of jasmine, rose, and black tea",
"NEEDS_REVIEW: قصة هذا الصنف لم تُستخرج بعد من المصدر الأصلي.": "NEEDS_REVIEW: This item's story hasn't been extracted from the source yet.",
"امزج أنواع البن المفضلة لديك واصنع Blend فريد بنكهاتك المفضلة": "Mix your favorite coffee types and create a unique blend with your favorite flavors",
"نكهات فاكهية منعشة مع حموضة مميزة تذكرنا بالفواكه الحمضية والتوت": "Refreshing fruity flavors with distinctive acidity, reminiscent of citrus and berries",
"Jossee Coffee - Premium specialty coffee roastery. قهوة مختصة عالية الجودة": "Jossee Coffee - Premium specialty coffee roastery.",
"يُباع بالكيلو لا بالـ 250 جم مثل باقي الأصناف، والسعر يختلف حسب درجة التحميص": "Sold by the kilo, not by 250g like the other items, and the price varies by roast level",
"أدخل جرعتك ونتيجتك ووقتك، واختر الطعم — نعطيك تشخيصًا ومتغيرًا واحدًا لتغييره": "Enter your dose, yield, and time, then pick the taste — we'll give you a diagnosis and one variable to change",
"تُجفَّف حبة القهوة كاملة (مع القشرة الخارجية) تحت الشمس. تعطي حلاوة ونكهات فاكهية واضحة وقوام أثقل.": "The whole coffee cherry (with its outer skin) is dried in the sun. It gives pronounced sweetness, fruity flavors, and a heavier body.",
"إسبريسو خوسيه هو مزيج مثالي من الحموضة العالية والقوام الكريمي، مستوحى من التقاليد الإيطالية العريقة.": "Jossee Espresso is an ideal blend of high acidity and creamy body, inspired by rich Italian tradition.",
"الإحساس بثقل أو خفة القهوة في الفم — من خفيف كالشاي إلى ثقيل وكثيف كالقشدة. يتأثر بطريقة التحضير ونوع البن.": "The sense of heaviness or lightness of coffee in the mouth — from as light as tea to as thick and heavy as cream. It's affected by the brewing method and coffee type.",
"الطعم المتبقي في الفم بعد البلع — قد يكون قصيرًا أو ممتدًا، حلوًا أو مرًا، وهو مؤشر مهم على جودة الاستخلاص.": "The taste left in the mouth after swallowing — it can be short or lingering, sweet or bitter, and is an important indicator of extraction quality.",
"تُزال قشرة الثمرة قبل التجفيف عبر الغسيل بالماء. تنتج قهوة أنظف طعمًا وحموضة أوضح مع شفافية أكبر في النكهات.": "The fruit's skin is removed before drying by washing with water. This produces a cleaner-tasting coffee with clearer acidity and greater flavor clarity.",
"الإحساس المنعش واللامع في القهوة — ليست حموضة معدة، بل صفة نكهة مرغوبة تشبه حموضة الفواكه، وتكون أوضح في البن فاتح التحميص.": "The bright, lively sensation in coffee — not a stomach-acid quality, but a desirable flavor trait similar to fruit acidity, most pronounced in light-roasted beans.",
"نوع بن أقوى وأكثر مرارة، بكافيين أعلى بمرتين تقريبًا من الأرابيكا. غالبًا يُستخدم في مزيجات الإسبريسو لإضافة القوام والـCrema.": "A stronger, more bitter coffee variety, with roughly double the caffeine of Arabica. Often used in espresso blends to add body and crema.",
"نوع البن الأكثر انتشارًا عالميًا (حوالي 60-70% من الإنتاج). يتميز بحموضة أوضح ونكهات أكثر تعقيدًا، ونسبة كافيين أقل من الروبوستا.": "The world's most widely grown coffee variety (about 60-70% of production). It's characterized by clearer acidity, more complex flavors, and lower caffeine than Robusta.",
"اضبط متغيرًا واحدًا فقط في كل مرة (الطحن أو الجرعة أو الوقت) وقارن النتيجة بالطعم. استخدم أداة \"ضبط الإسبريسو\" أدناه للحصول على تشخيص فوري.": "Adjust only one variable at a time (grind, dose, or time) and compare the result to the taste. Use the \"Espresso Dial-In\" tool below for an instant diagnosis.",
"نقدم قهوة أرابيكا مختصة لا تُقارن بالقهوة التجارية ذات القوام الكثيف جداً حيث أنها غالباً مضاف إليها مواد كيميائية ضارة.": "We offer specialty Arabica coffee that's incomparable to commercial coffee with its overly thick body, which often has harmful chemical additives.",
"نؤمن بأن القهوة الجيدة تبدأ من المزرعة. نختار حبوبنا بعناية فائقة، ونتعامل مع كل حبة باحترام، لنقدم لك تجربة قهوة لا تُنسى.": "We believe great coffee starts at the farm. We select our beans with the utmost care and treat every bean with respect, to give you an unforgettable coffee experience.",
"الطحن الأنعم يزيد سطح التلامس مع الماء فيسرّع الاستخلاص (مناسب للإسبريسو)، والطحن الأخشن يبطئه (مناسب للفرينش بريس وCold Brew). طحن خاطئ = استخلاص ناقص أو زائد.": "A finer grind increases the contact surface with water, speeding up extraction (good for espresso), while a coarser grind slows it down (good for French Press and Cold Brew). Wrong grind = under- or over-extraction.",
"السعر ثابت للتحميص الفاتح أو أول الوسط فقط (مفيش تحميص غامق). الإضافات المتاحة محدودة: مستكة يوناني / جينسينج أحمر كوري فقط — لأنه بيُطحن مباشرة بعد التحميص بسبب طريقة المعالجة بالغسيل": "The price is fixed for light roast or early-medium roast only (no dark roast). Available add-ons are limited to: Greek mastic / Korean red ginseng only — because it's ground right after roasting due to the washed processing method",
"السعر ثابت للتحميص الفاتح أو أول الوسط فقط (مفيش تحميص غامق). الإضافات المتاحة محدودة: هيل / مستكة يوناني / جينسينج أحمر كوري فقط — لأنه بيُطحن مباشرة بعد التحميص بسبب طريقة المعالجة بالغسيل": "The price is fixed for light roast or early-medium roast only (no dark roast). Available add-ons are limited to: cardamom / Greek mastic / Korean red ginseng only — because it's ground right after roasting due to the washed processing method",
"كل ما نطلبه من سيادتكم هو إعطاء الفرصة والوقت لمنتجنا فائق الجودة في الحكم عليه، وكأنها بداية جديدة لكم في عالم القهوة، وعدم الحكم من خلفيات وأذواق منتجات أخرى. ولكم منّا فائق الاحترام والتقدير.": "All we ask of you is to give our superior-quality product a fair chance and the time to judge it, as if it were a fresh start for you in the world of coffee, without judging it based on the background and taste of other products. With our utmost respect and appreciation.",
"ورغم ذلك هناك احتمالية بسيطة بعدم الاتفاق مع ذوق العميل، وذلك نظراً لتعوّد العميل لسنين طويلة على منتجات أخرى، وهذا لا يعني أنه يوجد أي عيب في منتجنا فائق الجودة، أو يوجد تقليل من ذوق العميل تماماً، لكنه مجرد عدم توافق في الذوق، لأن القهوة ذوق شخصي جداً.": "Even so, there's a slight chance it may not suit a customer's taste, since customers may be used to other products for many years. This doesn't mean there's any flaw in our superior-quality product, nor does it diminish the customer's taste at all — it's simply a mismatch in preference, because coffee is a very personal taste.",
"نحن في Jossee coffee نتبع كل خطوات العناية الفائقة بحبوب قهوتنا الأرابيكا 100%. بداية من التعامل مع المزارع وظروف زراعة الحبوب من معدل الارتفاع فوق سطح البحر، والمناخ، وما يزرع حول حبوب القهوة من منتجات أخرى، وما هو متوقع من إيحاء هذه الحبوب أثناء التذوق وبعد التذوق، جرعة الكافيين، المرارة، الحمضية — وهذا ما يُسمى العناية الفائقة بحبوب القهوة.": "At Jossee Coffee, we follow every step of meticulous care for our 100% Arabica coffee beans. Starting with how we work with farms and growing conditions — altitude above sea level, climate, and what other crops are grown around the coffee — through to what's expected from these beans during and after tasting: caffeine level, bitterness, acidity. This is what's known as meticulous coffee bean care.",
"لحبوب الأرابيكا عالية الجودة هو الوسط المتدرج للحصول على أفضل خصائصها وزيتها العطرية وفوائدها.": "for high-quality Arabica beans is the graduated medium roast, to get the best of their properties, aromatic oils, and benefits."
};

        function normalizeText(s) {
            return s.replace(/\s+/g, ' ').trim();
        }

        // Stores each text node's/attribute's ORIGINAL (Arabic) value the first time
        // it's translated, so switching back to Arabic is a perfect, lossless restore
        // — no reverse-dictionary ambiguity even when two Arabic phrases share an
        // English translation.
        const ORIGINAL_TEXT = new WeakMap();
        const TRANSLATABLE_ATTRS = ['aria-label', 'alt', 'title', 'placeholder'];

        function translateTextNode(node) {
            if (!node.nodeValue) return;
            if (currentLang === 'en') {
                const norm = normalizeText(node.nodeValue);
                const en = AR_TO_EN[norm];
                if (en) {
                    if (!ORIGINAL_TEXT.has(node)) ORIGINAL_TEXT.set(node, node.nodeValue);
                    node.nodeValue = en;
                }
            } else {
                if (ORIGINAL_TEXT.has(node)) {
                    node.nodeValue = ORIGINAL_TEXT.get(node);
                }
            }
        }

        function translateAttr(el, attr) {
            const val = el.getAttribute(attr);
            if (!val) return;
            const origAttr = 'data-i18n-orig-' + attr;
            if (currentLang === 'en') {
                const norm = normalizeText(val);
                const en = AR_TO_EN[norm];
                if (en) {
                    if (!el.hasAttribute(origAttr)) el.setAttribute(origAttr, val);
                    el.setAttribute(attr, en);
                }
            } else {
                if (el.hasAttribute(origAttr)) {
                    el.setAttribute(attr, el.getAttribute(origAttr));
                    el.removeAttribute(origAttr);
                }
            }
        }

        function translateSubtree(root) {
            if (!root) return;
            // text nodes
            const walker = document.createTreeWalker(root.nodeType === 3 ? root.parentNode || root : root, NodeFilter.SHOW_TEXT, {
                acceptNode(node) {
                    const p = node.parentElement;
                    if (!p) return NodeFilter.FILTER_SKIP;
                    const tag = p.tagName;
                    if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                }
            });
            const nodes = [];
            let n;
            while (n = walker.nextNode()) nodes.push(n);
            nodes.forEach(translateTextNode);

            // attributes
            const els = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')] : (root.querySelectorAll ? [...root.querySelectorAll('*')] : []);
            els.forEach(el => {
                TRANSLATABLE_ATTRS.forEach(attr => {
                    if (el.hasAttribute && el.hasAttribute(attr)) translateAttr(el, attr);
                });
            });
        }

        function applyLanguage() {
            const html = document.documentElement;
            html.lang = currentLang;
            html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            document.body.style.fontFamily = currentLang === 'ar' ? 'var(--font-arabic)' : 'var(--font-ui)';

            const btn = document.querySelector('.lang-toggle');
            if (btn) btn.textContent = currentLang === 'ar' ? 'EN' : 'ع';

            translateSubtree(document.body);

            // Re-render sections whose markup mixes static Arabic labels with dynamic
            // values in the same text node (so dictionary matching alone can't catch them).
            if (typeof renderCoffeeCards === 'function') renderCoffeeCards(typeof currentCoffeeFilter !== 'undefined' ? currentCoffeeFilter : 'all');
            if (typeof renderBrewMethods === 'function') renderBrewMethods();
            if (typeof renderDrinks === 'function') renderDrinks();
            if (typeof renderEquipment === 'function') renderEquipment();
            if (typeof renderEducation === 'function') renderEducation();
            if (typeof populateBlendSelects === 'function') populateBlendSelects();
            if (typeof populateCompareSelects === 'function') populateCompareSelects();
            if (typeof populateBrewLogSelect === 'function') populateBrewLogSelect();

            // Refresh any calculator/live-result displays so their unit labels update immediately
            if (typeof updateEspressoCalc === 'function') updateEspressoCalc();
            if (typeof updateBrewCalc === 'function') updateBrewCalc();
            if (typeof updateBlend === 'function') updateBlend();

            localStorage.setItem('jossee_lang', currentLang);
        }

        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            applyLanguage();
            console.log(`\ud83c\udf0d Language switched to: ${currentLang}`);
        }

        // Keep newly-injected content (cards, modals, alerts' underlying DOM, etc.) in sync
        // with the active language as soon as it's added to the page.
        const I18N_OBSERVER = new MutationObserver((mutations) => {
            for (const m of mutations) {
                m.addedNodes.forEach(node => {
                    if (node.nodeType === 1 || node.nodeType === 3) {
                        translateSubtree(node);
                    }
                });
            }
        });

        // ============================================================
        // COFFEE DATA — 44 PRODUCTS — verified line-by-line against the
        // 21 source menu photos (خوسية.zip). See AUDIT-checkpoint2.md for
        // the full per-item audit trail. Corrections applied per owner
        // decisions (2026 checkpoint):
        //   • Brand unified to "Jossee" everywhere (was "José")
        //   • Added missing base "خوسيه سادة/محوج" house-blend (230/280) —
        //     was photographed but had no entry; previously its data was
        //     wrongly merged into "Classic"
        //   • "Classic" rewritten with its own real data (Nepal/Everest)
        //   • Removed "Fernando" — no photo source exists for it (owner-
        //     confirmed: not a real product, do not keep guessed data)
        //   • Diego — origin/process/tasting notes were fabricated
        //     (Ethiopia Yirgacheffe/washed/jasmine); replaced with the
        //     real photographed product (Costa Rica/natural/blueberry).
        //     Price corrected 390→370 / 440→420.
        //   • Ashnait price corrected 370→440 / 420→480
        //   • Saqana (Savana) origin corrected Peru→Kenya (copy-paste bug)
        //   • Kaldi tasting note "ين" fixed to "تين" (typo)
        //   • Spelling normalized to match the real menu: Saqana→Savana,
        //     Buñonera→Bonbonera, Niroi→Nairobi, Goshsho→Gotcho
        //   • Don José → restructured with real per-kilo, per-roast tiers
        //     (250g/500g/1kg, derived proportionally from the photographed
        //     per-kilo prices — see priceTiers)
        //   • subGroup field added for the reorganized Turkish-coffee menu
        //     IA (house-blend / single-origin / premium / new)
        // ============================================================
        const COFFEES = [
            // Italian Coffee (9)
            {
                id: 'jose-espresso',
                name: 'خوسيه إسبريسو',
                nameEn: 'Jossee Espresso',
                category: 'italian',
                price: 340,
                weight: 250,
                roast: 'medium',
                origin: 'كوستاريكا',
                species: 'أرابيكا 70% + روبوستا 30%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'حار', 'جريب فروت', 'كراميل'],
                profile: { body: 8, acidity: 7, sweetness: 6, bitterness: 5, chocolate: 7, caramel: 5, nutty: 4, spice: 7, fruitiness: 6, floral: 3, aftertaste: 8 },
                bestFor: ['إسبريسو', 'مشروبات بالحليب'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-american',
                name: 'خوسيه أمريكان كوفي',
                nameEn: 'Jossee American Coffee',
                category: 'italian',
                price: 340,
                weight: 250,
                roast: 'medium',
                origin: 'كوستاريكا',
                species: 'أرابيكا 70% + روبوستا 30%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'حار', 'جريب فروت'],
                profile: { body: 7, acidity: 6, sweetness: 6, bitterness: 4, chocolate: 6, caramel: 5, nutty: 4, spice: 6, fruitiness: 5, floral: 2, aftertaste: 7 },
                bestFor: ['أمريكانو', 'فلتر'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-frenchpress',
                name: 'خوسيه فرينش بريس',
                nameEn: 'Jossee French Press',
                category: 'italian',
                price: 340,
                weight: 250,
                roast: 'medium',
                origin: 'كوستاريكا',
                species: 'أرابيكا 70% + روبوستا 30%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كراميل', 'جوزي'],
                profile: { body: 9, acidity: 5, sweetness: 5, bitterness: 6, chocolate: 7, caramel: 6, nutty: 6, spice: 4, fruitiness: 4, floral: 2, aftertaste: 8 },
                bestFor: ['فرينش بريس', 'كولد برو'],
                caffeine: 'مرتفع'
            },
            {
                id: 'santa-lucia-espresso',
                name: 'سانتا لوتشيا إسبريسو',
                nameEn: 'Santa Lucía Espresso',
                category: 'italian',
                price: 360,
                weight: 250,
                roast: 'medium',
                origin: 'كولومبيا - كوينديو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة ساخنة', 'فواكه حمضية'],
                profile: { body: 8, acidity: 7, sweetness: 6, bitterness: 5, chocolate: 8, caramel: 5, nutty: 3, spice: 4, fruitiness: 6, floral: 4, aftertaste: 8 },
                bestFor: ['إسبريسو', 'مشروبات بالحليب'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'santa-lucia-american',
                name: 'سانتا لوتشيا أمريكان كوفي',
                nameEn: 'Santa Lucía American Coffee',
                category: 'italian',
                price: 360,
                weight: 250,
                roast: 'medium',
                origin: 'كولومبيا - كوينديو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة ساخنة', 'فواكه حمضية'],
                profile: { body: 7, acidity: 6, sweetness: 6, bitterness: 4, chocolate: 7, caramel: 5, nutty: 3, spice: 3, fruitiness: 5, floral: 3, aftertaste: 7 },
                bestFor: ['أمريكانو'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'santa-lucia-frenchpress',
                name: 'سانتا لوتشيا فرينش بريس',
                nameEn: 'Santa Lucía French Press',
                category: 'italian',
                price: 360,
                weight: 250,
                roast: 'medium',
                origin: 'كولومبيا - كوينديو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة ساخنة', 'فواكه حمضية'],
                profile: { body: 9, acidity: 5, sweetness: 5, bitterness: 6, chocolate: 7, caramel: 5, nutty: 3, spice: 3, fruitiness: 5, floral: 3, aftertaste: 8 },
                bestFor: ['فرينش بريس'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-gonzalo-espresso',
                name: 'خوسيه جونزالو إسبريسو',
                nameEn: 'Jossee Gonzalo Espresso',
                category: 'italian',
                price: 360,
                weight: 250,
                roast: 'medium',
                origin: 'جواتيمالا + الهند',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كراميل', 'سكري'],
                profile: { body: 8, acidity: 6, sweetness: 7, bitterness: 4, chocolate: 8, caramel: 7, nutty: 5, spice: 4, fruitiness: 5, floral: 3, aftertaste: 9 },
                bestFor: ['إسبريسو', 'مشروبات بالحليب'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-gonzalo-american',
                name: 'خوسيه جونزالو أمريكان كوفي',
                nameEn: 'Jossee Gonzalo American Coffee',
                category: 'italian',
                price: 360,
                weight: 250,
                roast: 'medium',
                origin: 'جواتيمالا + الهند',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كراميل', 'سكري'],
                profile: { body: 7, acidity: 5, sweetness: 7, bitterness: 3, chocolate: 7, caramel: 7, nutty: 5, spice: 3, fruitiness: 4, floral: 2, aftertaste: 8 },
                bestFor: ['أمريكانو'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-gonzalo-frenchpress',
                name: 'خوسيه جونزالو فرينش بريس',
                nameEn: 'Jossee Gonzalo French Press',
                category: 'italian',
                price: 360,
                weight: 250,
                roast: 'medium',
                origin: 'جواتيمالا + الهند',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كراميل', 'سكري'],
                profile: { body: 9, acidity: 4, sweetness: 7, bitterness: 5, chocolate: 7, caramel: 7, nutty: 5, spice: 4, fruitiness: 4, floral: 2, aftertaste: 9 },
                bestFor: ['فرينش بريس'],
                caffeine: 'مرتفع جداً'
            },

            // Turkish Coffee (24 — includes the base house-blend added back in)
            // --- الأساسية (house blend, entry-level) ---
            {
                id: 'jose-base-sada',
                name: 'خوسيه سادة',
                nameEn: 'Jossee Sada (House Blend)',
                category: 'turkish',
                subGroup: 'house-blend',
                price: 230,
                weight: 250,
                roast: 'light-medium-dark',
                origin: 'شرق آسيا + أفريقيا + أمريكا الجنوبية + الهند',
                species: 'أرابيكا (توليفة) + نسبة قليلة روبوستا هندي',
                process: 'تجفيف طبيعي',
                tastingNotes: ['عشبي', 'شوكولاتة ساخنة', 'فواحة'],
                profile: { body: 9, acidity: 4, sweetness: 5, bitterness: 7, chocolate: 6, caramel: 4, nutty: 5, spice: 5, fruitiness: 3, floral: 2, woody: 7, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً',
                note: 'السعر ثابت بغض النظر عن درجة التحميص (فاتح/وسط/غامق)'
            },
            {
                id: 'jose-base-mahouj',
                name: 'خوسيه محوج (هيل)',
                nameEn: 'Jossee Mahouj (House Blend, Cardamom)',
                category: 'turkish',
                subGroup: 'house-blend',
                price: 280,
                weight: 250,
                roast: 'light-medium-dark',
                origin: 'شرق آسيا + أفريقيا + أمريكا الجنوبية + الهند',
                species: 'أرابيكا (توليفة) + نسبة قليلة روبوستا هندي',
                process: 'تجفيف طبيعي',
                tastingNotes: ['عشبي', 'شوكولاتة ساخنة', 'فواحة', 'هيل'],
                profile: { body: 9, acidity: 4, sweetness: 5, bitterness: 7, chocolate: 6, caramel: 4, nutty: 5, spice: 8, fruitiness: 3, floral: 2, woody: 7, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً',
                note: 'السعر ثابت بغض النظر عن درجة التحميص (فاتح/وسط/غامق)'
            },
            // --- كلاسيك خوسيه (Single Origin — Nepal/Everest) ---
            {
                id: 'jose-classic-sada',
                name: 'كلاسيك خوسيه سادة',
                nameEn: 'Classic Jossee',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium-dark',
                origin: 'جبال إيفرست - نيبال',
                species: 'أرابيكا 100% نيبالية',
                process: 'تجفيف طبيعي',
                tastingNotes: ['جوزي', 'فاكهي', 'شوكولاتة', 'عطري جداً'],
                profile: { body: 8, acidity: 5, sweetness: 6, bitterness: 4, chocolate: 8, caramel: 4, nutty: 7, spice: 3, fruitiness: 6, floral: 3, woody: 2, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-classic-mahouj',
                name: 'كلاسيك خوسيه محوج (هيل)',
                nameEn: 'Classic Jossee with Cardamom',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium-dark',
                origin: 'جبال إيفرست - نيبال',
                species: 'أرابيكا 100% نيبالية',
                process: 'تجفيف طبيعي',
                tastingNotes: ['جوزي', 'فاكهي', 'شوكولاتة', 'عطري جداً', 'هيل'],
                profile: { body: 8, acidity: 5, sweetness: 6, bitterness: 4, chocolate: 8, caramel: 4, nutty: 7, spice: 8, fruitiness: 6, floral: 3, woody: 2, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-saqana-sada',
                name: 'خوسيه سافانا سادة',
                nameEn: 'Jossee Savana',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium-dark',
                origin: 'رويري - كينيا',
                species: 'أرابيكا 100% AAA',
                process: 'تجفيف طبيعي',
                tastingNotes: ['عشبي', 'توت بري', 'زهرة شاي أسود'],
                profile: { body: 9, acidity: 5, sweetness: 5, bitterness: 5, chocolate: 3, caramel: 3, nutty: 3, spice: 3, fruitiness: 6, floral: 5, woody: 8, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-saqana-mahouj',
                name: 'خوسيه سافانا محوج (هيل)',
                nameEn: 'Jossee Savana with Cardamom',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium-dark',
                origin: 'رويري - كينيا',
                species: 'أرابيكا 100% AAA',
                process: 'تجفيف طبيعي',
                tastingNotes: ['عشبي', 'توت بري', 'زهرة شاي أسود', 'هيل'],
                profile: { body: 9, acidity: 5, sweetness: 5, bitterness: 5, chocolate: 3, caramel: 3, nutty: 3, spice: 8, fruitiness: 6, floral: 5, woody: 8, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-bunonera-sada',
                name: 'خوسيه بونبونيرا سادة',
                nameEn: 'Jossee Bonbonera',
                category: 'turkish',
                subGroup: 'premium',
                price: 440,
                weight: 250,
                roast: 'medium-dark',
                origin: 'خولان - اليمن + نيبال',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['جوزي', 'حار', 'شوكولاتة'],
                profile: { body: 8, acidity: 6, sweetness: 6, bitterness: 5, chocolate: 7, caramel: 5, nutty: 8, spice: 6, fruitiness: 4, floral: 3, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-bunonera-mahouj',
                name: 'خوسيه بونبونيرا محوج (هيل)',
                nameEn: 'Jossee Bonbonera with Cardamom',
                category: 'turkish',
                subGroup: 'premium',
                price: 480,
                weight: 250,
                roast: 'medium-dark',
                origin: 'خولان - اليمن + نيبال',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['جوزي', 'حار', 'شوكولاتة', 'هيل'],
                profile: { body: 8, acidity: 6, sweetness: 6, bitterness: 5, chocolate: 7, caramel: 5, nutty: 8, spice: 7, fruitiness: 4, floral: 3, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'don-jose-sada',
                name: 'دون خوسيه سادة',
                nameEn: 'Don Jossee',
                category: 'turkish',
                subGroup: 'new',
                // السعر الحقيقي على المنيو بالكيلو ويختلف حسب التحميص (فاتح680/وسط700/غامق750).
                // الأسعار للربع والنص كيلو محسوبة تناسبياً من سعر الكيلو (مش مصورة حرفياً) — راجعها/عدّلها لو التسعير الفعلي مختلف.
                price: 175, // = سعر التحميص الوسط لكل 250 جم (القيمة الافتراضية المعروضة في الكروت)
                weight: 250,
                unit: 'kilo-tiered',
                priceTiers: {
                    light:  { 250: 170,   500: 340, 1000: 680 },
                    medium: { 250: 175,   500: 350, 1000: 700 },
                    dark:   { 250: 187.5, 500: 375, 1000: 750 }
                },
                roast: 'light-medium-dark',
                origin: 'إثيوبيا + أمريكا الجنوبية + الهند',
                species: 'أرابيكا + روبوستا شرق آسيوي (قليل)',
                process: 'تجفيف مباشر',
                tastingNotes: ['خشبي', 'شوكولاتة داكنة', 'فواحة'],
                profile: { body: 9, acidity: 5, sweetness: 5, bitterness: 7, chocolate: 6, caramel: 4, nutty: 5, spice: 5, fruitiness: 3, floral: 2, woody: 8, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً',
                note: 'يُباع بالكيلو لا بالـ 250 جم مثل باقي الأصناف، والسعر يختلف حسب درجة التحميص'
            },
            {
                id: 'don-jose-mahouj',
                name: 'دون خوسيه محوج (هيل)',
                nameEn: 'Don Jossee with Cardamom',
                category: 'turkish',
                subGroup: 'new',
                price: 187.5, // = سعر التحميص الوسط لكل 250 جم (القيمة الافتراضية المعروضة في الكروت)
                weight: 250,
                unit: 'kilo-tiered',
                priceTiers: {
                    light:  { 250: 182.5, 500: 365, 1000: 730 },
                    medium: { 250: 187.5, 500: 375, 1000: 750 },
                    dark:   { 250: 200,   500: 400, 1000: 800 }
                },
                roast: 'light-medium-dark',
                origin: 'إثيوبيا + أمريكا الجنوبية + الهند',
                species: 'أرابيكا + روبوستا شرق آسيوي (قليل)',
                process: 'تجفيف مباشر',
                tastingNotes: ['خشبي', 'شوكولاتة داكنة', 'فواحة', 'هيل'],
                profile: { body: 9, acidity: 5, sweetness: 5, bitterness: 7, chocolate: 6, caramel: 4, nutty: 5, spice: 8, fruitiness: 3, floral: 2, woody: 8, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً',
                note: 'يُباع بالكيلو لا بالـ 250 جم مثل باقي الأصناف، والسعر يختلف حسب درجة التحميص'
            },
            {
                id: 'jose-pablo-sada',
                name: 'خوسيه بابلو سادة',
                nameEn: 'Jossee Pablo',
                category: 'turkish',
                subGroup: 'new',
                price: 540,
                weight: 250,
                roast: 'medium',
                origin: 'جبال حراز - اليمن',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كاكاو', 'توابل', 'فواكه جافة'],
                profile: { body: 7, acidity: 5, sweetness: 8, bitterness: 3, chocolate: 9, caramel: 6, nutty: 5, spice: 5, fruitiness: 5, floral: 4, aftertaste: 7 },
                bestFor: ['قهوة تركية', 'فلتر'],
                caffeine: 'قوي'
            },
            {
                id: 'jose-pablo-mahouj',
                name: 'خوسيه بابلو محوج (هيل)',
                nameEn: 'Jossee Pablo with Cardamom',
                category: 'turkish',
                subGroup: 'new',
                price: 590,
                weight: 250,
                roast: 'medium',
                origin: 'جبال حراز - اليمن',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كاكاو', 'توابل', 'فواكه جافة', 'هيل'],
                profile: { body: 7, acidity: 5, sweetness: 8, bitterness: 3, chocolate: 9, caramel: 6, nutty: 5, spice: 8, fruitiness: 5, floral: 4, aftertaste: 7 },
                bestFor: ['قهوة تركية', 'فلتر'],
                caffeine: 'قوي'
            },
            {
                id: 'jose-ashnait-sada',
                name: 'خوسيه أشانتي سادة',
                nameEn: 'Jossee Ashanti',
                category: 'turkish',
                subGroup: 'premium',
                price: 440,
                weight: 250,
                roast: 'medium-dark',
                origin: 'خولان - اليمن + رويري - كينيا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['حار', 'عشبي'],
                profile: { body: 8, acidity: 7, sweetness: 4, bitterness: 7, chocolate: 5, caramel: 3, nutty: 5, spice: 8, fruitiness: 4, floral: 2, woody: 8, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-ashnait-mahouj',
                name: 'خوسيه أشانتي محوج (هيل)',
                nameEn: 'Jossee Ashanti with Cardamom',
                category: 'turkish',
                subGroup: 'premium',
                price: 480,
                weight: 250,
                roast: 'medium-dark',
                origin: 'خولان - اليمن + رويري - كينيا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['حار', 'عشبي', 'هيل'],
                profile: { body: 8, acidity: 7, sweetness: 4, bitterness: 7, chocolate: 5, caramel: 3, nutty: 5, spice: 8, fruitiness: 4, floral: 2, woody: 8, aftertaste: 9 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-niroi-sada',
                name: 'خوسيه نيروبي سادة',
                nameEn: 'Jossee Nairobi',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium-dark',
                origin: 'كينيا + نيبال + كولومبيا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['خشبي', 'توت بري', 'شوكولاتة', 'جريب فروت'],
                profile: { body: 7, acidity: 6, sweetness: 5, bitterness: 4, chocolate: 7, caramel: 4, nutty: 4, spice: 4, fruitiness: 6, floral: 3, woody: 7, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-niroi-mahouj',
                name: 'خوسيه نيروبي محوج (هيل)',
                nameEn: 'Jossee Nairobi with Cardamom',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium-dark',
                origin: 'كينيا + نيبال + كولومبيا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['خشبي', 'توت بري', 'شوكولاتة', 'جريب فروت', 'هيل'],
                profile: { body: 7, acidity: 6, sweetness: 5, bitterness: 4, chocolate: 7, caramel: 4, nutty: 4, spice: 7, fruitiness: 6, floral: 3, woody: 7, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-calde-sada',
                name: 'خوسيه كالدي سادة',
                nameEn: 'Jossee Kaldi',
                category: 'turkish',
                subGroup: 'premium',
                price: 450,
                weight: 250,
                roast: 'medium',
                origin: 'خولان - اليمن',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['فواكه', 'تين', 'كراميل', 'شاي أسود'],
                profile: { body: 7, acidity: 7, sweetness: 7, bitterness: 5, chocolate: 5, caramel: 7, nutty: 3, spice: 4, fruitiness: 8, floral: 5, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-calde-mahouj',
                name: 'خوسيه كالدي محوج (هيل)',
                nameEn: 'Jossee Kaldi with Cardamom',
                category: 'turkish',
                subGroup: 'premium',
                price: 500,
                weight: 250,
                roast: 'medium',
                origin: 'خولان - اليمن',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['فواكه', 'تين', 'كراميل', 'شاي أسود', 'هيل'],
                profile: { body: 7, acidity: 7, sweetness: 7, bitterness: 5, chocolate: 5, caramel: 7, nutty: 3, spice: 7, fruitiness: 8, floral: 5, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع'
            },
            {
                id: 'grandi-jose-sada',
                name: 'جراندي خوسيه سادة',
                nameEn: 'Grandi Jossee',
                category: 'turkish',
                subGroup: 'new',
                price: 450,
                weight: 250,
                roast: 'light-medium',
                origin: 'خولان - اليمن + رويري - كينيا',
                species: 'أرابيكا 100%',
                process: 'غسيل وتجفيف أسبوعين',
                tastingNotes: ['سكري', 'حلوة الطعم'],
                profile: { body: 8, acidity: 1, sweetness: 9, bitterness: 1, chocolate: 6, caramel: 7, nutty: 4, spice: 3, fruitiness: 5, floral: 4, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع',
                note: 'السعر ثابت للتحميص الفاتح أو أول الوسط فقط (مفيش تحميص غامق). الإضافات المتاحة محدودة: هيل / مستكة يوناني / جينسينج أحمر كوري فقط — لأنه بيُطحن مباشرة بعد التحميص بسبب طريقة المعالجة بالغسيل'
            },
            {
                id: 'grandi-jose-mahouj',
                name: 'جراندي خوسيه محوج (هيل)',
                nameEn: 'Grandi Jossee with Cardamom',
                category: 'turkish',
                subGroup: 'new',
                price: 500,
                weight: 250,
                roast: 'light-medium',
                origin: 'خولان - اليمن + رويري - كينيا',
                species: 'أرابيكا 100%',
                process: 'غسيل وتجفيف أسبوعين',
                tastingNotes: ['سكري', 'حلوة الطعم', 'هيل'],
                profile: { body: 8, acidity: 1, sweetness: 9, bitterness: 1, chocolate: 6, caramel: 7, nutty: 4, spice: 7, fruitiness: 5, floral: 4, aftertaste: 8 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع',
                note: 'السعر ثابت للتحميص الفاتح أو أول الوسط فقط (مفيش تحميص غامق). الإضافات المتاحة محدودة: مستكة يوناني / جينسينج أحمر كوري فقط — لأنه بيُطحن مباشرة بعد التحميص بسبب طريقة المعالجة بالغسيل'
            },
            {
                id: 'jose-bogota-sada',
                name: 'خوسيه بوجوتا سادة',
                nameEn: 'Jossee Bogota',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium-dark',
                origin: 'كولومبيا - كوينديو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة بالحليب', 'كراميل', 'قهوة قوية'],
                profile: { body: 7, acidity: 6, bitterness: 7, sweetness: 5, chocolate: 8, caramel: 7, nutty: 4, spice: 3, fruitiness: 4, floral: 2, aftertaste: 6 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً'
            },
            {
                id: 'jose-bogota-mahouj',
                name: 'خوسيه بوجوتا محوج (هيل)',
                nameEn: 'Jossee Bogota with Cardamom',
                category: 'turkish',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium-dark',
                origin: 'كولومبيا - كوينديو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة بالحليب', 'كراميل', 'قهوة قوية', 'هيل'],
                profile: { body: 7, acidity: 6, bitterness: 7, sweetness: 5, chocolate: 8, caramel: 7, nutty: 4, spice: 7, fruitiness: 4, floral: 2, aftertaste: 6 },
                bestFor: ['قهوة تركية'],
                caffeine: 'مرتفع جداً'
            },

            // Specialty Coffee (6)
            {
                id: 'jose-goshsho-sada',
                name: 'خوسيه جوتشو سادة',
                nameEn: 'Jossee Gotcho',
                category: 'specialty',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium',
                origin: 'أمازوناس - بيرو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['فاكهة', 'زهور', 'حمضية', 'حلوة'],
                profile: { body: 6, acidity: 4, sweetness: 8, bitterness: 2, chocolate: 3, caramel: 4, nutty: 3, spice: 2, fruitiness: 8, floral: 7, aftertaste: 5 },
                bestFor: ['فلتر', 'قهوة تركية'],
                caffeine: 'معتدل'
            },
            {
                id: 'jose-goshsho-mahouj',
                name: 'خوسيه جوتشو محوج (هيل)',
                nameEn: 'Jossee Gotcho with Cardamom',
                category: 'specialty',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium',
                origin: 'أمازوناس - بيرو',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['فاكهة', 'زهور', 'حمضية', 'حلوة', 'هيل'],
                profile: { body: 6, acidity: 4, sweetness: 8, bitterness: 2, chocolate: 3, caramel: 4, nutty: 3, spice: 7, fruitiness: 8, floral: 7, aftertaste: 5 },
                bestFor: ['فلتر', 'قهوة تركية'],
                caffeine: 'معتدل'
            },
            {
                id: 'jose-barbarosa',
                name: 'خوسيه بارباروسا',
                nameEn: 'Jossee Barbarossa',
                category: 'specialty',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium',
                origin: 'جواتيمالا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كراميل', 'سكري', 'حلوة الطعم'],
                profile: { body: 8, acidity: 6, sweetness: 7, bitterness: 4, chocolate: 8, caramel: 7, nutty: 5, spice: 3, fruitiness: 5, floral: 4, aftertaste: 8 },
                bestFor: ['إسبريسو', 'مشروبات بالحليب'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-barbarosa-mahouj',
                name: 'خوسيه بارباروسا محوج (هيل)',
                nameEn: 'Jossee Barbarossa with Cardamom',
                category: 'specialty',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium',
                origin: 'جواتيمالا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['شوكولاتة', 'كراميل', 'سكري', 'حلوة الطعم', 'هيل'],
                profile: { body: 8, acidity: 6, sweetness: 7, bitterness: 4, chocolate: 8, caramel: 7, nutty: 5, spice: 7, fruitiness: 5, floral: 4, aftertaste: 8 },
                bestFor: ['إسبريسو', 'مشروبات بالحليب'],
                caffeine: 'مرتفع'
            },
            {
                id: 'jose-diego-sada',
                name: 'خوسيه دييجو سادة',
                nameEn: 'Jossee Diego',
                category: 'specialty',
                subGroup: 'single-origin',
                price: 370,
                weight: 250,
                roast: 'medium',
                origin: 'سان ماركوس - كوستاريكا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['بلوبيري', 'كراميل', 'سكر بني'],
                profile: { body: 5, acidity: 3, sweetness: 7, bitterness: 3, chocolate: 3, caramel: 7, nutty: 3, spice: 2, fruitiness: 7, floral: 3, aftertaste: 5 },
                bestFor: ['قهوة تركية'],
                caffeine: 'معتدل'
            },
            {
                id: 'jose-diego-mahouj',
                name: 'خوسيه دييجو محوج (هيل)',
                nameEn: 'Jossee Diego with Cardamom',
                category: 'specialty',
                subGroup: 'single-origin',
                price: 420,
                weight: 250,
                roast: 'medium',
                origin: 'سان ماركوس - كوستاريكا',
                species: 'أرابيكا 100%',
                process: 'تجفيف طبيعي',
                tastingNotes: ['بلوبيري', 'كراميل', 'سكر بني', 'هيل'],
                profile: { body: 5, acidity: 3, sweetness: 7, bitterness: 3, chocolate: 3, caramel: 7, nutty: 3, spice: 7, fruitiness: 7, floral: 3, aftertaste: 5 },
                bestFor: ['قهوة تركية'],
                caffeine: 'معتدل'
            },

            // ملحوظة: "خوسيه فيرناندو" اتشال من الكتالوج بالكامل — كان موجود
            // في نسخة سابقة من الملف بس مفيش أي صورة مصدر ليه في الـ 21 صورة
            // الأصلية، وأكّد صاحب المنتج إن الصنف ده مش حقيقي. لو ظهر على
            // المنيو الحقيقي مستقبلاً، يتضاف تاني بصورة توثقه.

            // Instant Coffee (2)
            {
                id: 'jose-instant',
                name: 'خوسيه سريعة التحضير',
                nameEn: 'Jossee Instant Coffee',
                category: 'instant',
                price: 400,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['NEEDS_REVIEW'],
                profile: { body: 5, acidity: 5, sweetness: 5, bitterness: 5, chocolate: 4, caramel: 4, nutty: 4, spice: 3, fruitiness: 3, floral: 2, aftertaste: 5 },
                bestFor: ['سريعة التحضير'],
                caffeine: 'NEEDS_REVIEW'
            },
            {
                id: 'jose-instant-gold',
                name: 'خوسيه جولد سريعة التحضير',
                nameEn: 'Jossee Gold Instant Coffee',
                category: 'instant',
                price: 500,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['NEEDS_REVIEW'],
                profile: { body: 6, acidity: 4, sweetness: 6, bitterness: 4, chocolate: 5, caramel: 5, nutty: 4, spice: 3, fruitiness: 3, floral: 2, aftertaste: 6 },
                bestFor: ['سريعة التحضير'],
                caffeine: 'NEEDS_REVIEW'
            },

            // Flavored Coffee (6)
            {
                id: 'jose-hazelnut',
                name: 'بندق قطع',
                nameEn: 'Hazelnut Cut',
                category: 'flavored',
                price: 240,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['بندق'],
                profile: { body: 6, acidity: 4, sweetness: 7, bitterness: 3, chocolate: 5, caramel: 6, nutty: 9, spice: 2, fruitiness: 3, floral: 2, aftertaste: 6 },
                bestFor: ['حليب'],
                caffeine: 'NEEDS_REVIEW'
            },
            {
                id: 'jose-hazelnut-almond',
                name: 'بندق لوز قطع',
                nameEn: 'Hazelnut Almond Cut',
                category: 'flavored',
                price: 240,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['بندق', 'لوز'],
                profile: { body: 6, acidity: 4, sweetness: 7, bitterness: 3, chocolate: 4, caramel: 5, nutty: 9, spice: 2, fruitiness: 3, floral: 2, aftertaste: 6 },
                bestFor: ['حليب'],
                caffeine: 'NEEDS_REVIEW'
            },
            {
                id: 'jose-french',
                name: 'فرنساوي',
                nameEn: 'French',
                category: 'flavored',
                price: 240,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['NEEDS_REVIEW'],
                profile: { body: 6, acidity: 4, sweetness: 6, bitterness: 4, chocolate: 5, caramel: 5, nutty: 4, spice: 3, fruitiness: 3, floral: 3, aftertaste: 5 },
                bestFor: ['حليب'],
                caffeine: 'NEEDS_REVIEW'
            },
            {
                id: 'jose-berry',
                name: 'توت',
                nameEn: 'Berry',
                category: 'flavored',
                price: 240,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['توت'],
                profile: { body: 6, acidity: 5, sweetness: 8, bitterness: 2, chocolate: 3, caramel: 4, nutty: 3, spice: 2, fruitiness: 9, floral: 4, aftertaste: 5 },
                bestFor: ['حليب'],
                caffeine: 'NEEDS_REVIEW'
            },
            {
                id: 'jose-mango',
                name: 'مانجو',
                nameEn: 'Mango',
                category: 'flavored',
                price: 240,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['مانجو'],
                profile: { body: 6, acidity: 5, sweetness: 9, bitterness: 2, chocolate: 3, caramel: 4, nutty: 3, spice: 2, fruitiness: 9, floral: 3, aftertaste: 5 },
                bestFor: ['حليب'],
                caffeine: 'NEEDS_REVIEW'
            },
            {
                id: 'jose-fantazm',
                name: 'خوسيه فانتازم',
                nameEn: 'Jossee Fantazm',
                category: 'flavored',
                price: 240,
                weight: 250,
                roast: 'medium',
                origin: 'NEEDS_REVIEW',
                species: 'NEEDS_REVIEW',
                process: 'NEEDS_REVIEW',
                tastingNotes: ['شوكولاتة', 'بندق'],
                profile: { body: 7, acidity: 3, sweetness: 8, bitterness: 4, chocolate: 8, caramel: 6, nutty: 8, spice: 2, fruitiness: 4, floral: 2, aftertaste: 7 },
                bestFor: ['حليب'],
                caffeine: 'NEEDS_REVIEW'
            }
        ];

        // Build coffee map
        const coffeeMap = {};
        COFFEES.forEach(c => coffeeMap[c.id] = c);

        // ============================================================
        // IMAGE HELPER
        // ============================================================
        // Real product photography (from the owner's own counter photos).
        // Confirmed with the owner: the 4 bag designs aren't tied to specific
        // products or categories — it's just visual variety, no fixed rule.
        // So we rotate the 4 real photos evenly across all 45 products by
        // index (deterministic — same product always shows the same photo,
        // it just doesn't carry any category meaning).
        const BAG_PHOTOS = [
            'assets/jossee-bag-gold.jpg',
            'assets/jossee-bag-burgundy.jpg',
            'assets/jossee-bag-beige.jpg',
            'assets/jossee-bag-black.jpg'
        ];
        function getCoffeeImage(id) {
            const index = COFFEES.findIndex(c => c.id === id);
            if (index === -1) return BAG_PHOTOS[0];
            return BAG_PHOTOS[index % BAG_PHOTOS.length];
        }

        // ============================================================
        // 16. COFFEE CATALOG
        // ============================================================
        // Turkish/specialty coffees carry a subGroup tag (house-blend /
        // single-origin / premium / new) so the 28-item Turkish menu reads
        // as 4 organized tiers instead of one flat wall of cards. Other
        // categories (italian/instant/flavored) have no subGroup and just
        // render in their original order with no headers.
        const SUBGROUP_LABELS = {
            'house-blend': { title: 'الأساسية', desc: 'توليفة اقتصادية يومية' },
            'single-origin': { title: 'أحادية المنشأ (Single Origin)', desc: 'حبوب من منشأ واحد محدد' },
            'premium': { title: 'مميزة', desc: 'توليفات أعلى كثافة ونكهة' },
            'new': { title: 'إصدارات جديدة ومميزة', desc: 'أحدث إضافات القائمة' }
        };
        const SUBGROUP_ORDER = ['house-blend', 'single-origin', 'premium', 'new'];

        function renderCoffeeCards(filter = 'all') {
            const grid = document.getElementById('coffeeGrid');
            if (!grid) return;
            const filtered = filter === 'all' ? COFFEES : COFFEES.filter(c => c.category === filter);

            const cardHtml = (coffee) => `
                <div class="coffee-card scroll-reveal" onclick="openCoffeeDetail('${coffee.id}')">
                    <div class="coffee-card-image">
                        <img 
                            src="${getCoffeeImage(coffee.id)}" 
                            alt="${T(coffee.name)}${L(' - قهوة خوسيه', ' - Jossee Coffee')}"
                            loading="lazy"
                        >
                        ${coffee.priceTiers ? '<span style="position:absolute; top:10px; inset-inline-start:10px; background:var(--gold); color:#fff; font-size:11px; font-weight:700; padding:4px 10px; border-radius:20px;">سعر متغير بالكيلو</span>' : ''}
                        <span class="wishlist-card-badge${wishlist.includes(coffee.id) ? ' active' : ''}" data-id="${coffee.id}" onclick="event.stopPropagation(); toggleWishlist('${coffee.id}');">${wishlist.includes(coffee.id) ? '♥' : '♡'}</span>
                    </div>
                    <div class="coffee-card-content">
                        <h3 class="coffee-card-title">${coffee.name}</h3>
                        <div class="coffee-card-origin">${T(coffee.origin)} • ${T(coffee.roast === 'medium' ? 'وسط' : coffee.roast === 'dark' ? 'غامق' : coffee.roast === 'light' ? 'فاتح' : coffee.roast === 'medium-dark' ? 'وسط-غامق' : coffee.roast === 'light-medium' ? 'فاتح-وسط' : coffee.roast === 'light-medium-dark' ? 'فاتح-وسط-غامق' : coffee.roast)}</div>
                        <div class="coffee-card-tags">
                            ${coffee.tastingNotes.slice(0, 3).map(note => `
                                <span class="coffee-tag">${note}</span>
                            `).join('')}
                            ${coffee.tastingNotes.length > 3 ? `<span class="coffee-tag">+${coffee.tastingNotes.length - 3}</span>` : ''}
                        </div>
                        <div class="coffee-card-footer">
                            <span class="coffee-card-price">${coffee.priceTiers ? L('من ', 'From ') + coffee.price : coffee.price} <small>${L('ج', 'EGP')} / ${coffee.weight} ${L('جم', 'g')}</small></span>
                            <span class="btn btn-outline btn-view" style="padding: 8px 20px; font-size: 13px; pointer-events: none;">${L('عرض', 'View')}</span>
                        </div>
                    </div>
                </div>
            `;

            // Does this filtered set actually have subGroup data worth grouping by?
            const hasSubGroups = filtered.some(c => c.subGroup);

            if (!hasSubGroups) {
                grid.innerHTML = filtered.map(cardHtml).join('');
            } else {
                // Items without a subGroup (italian/instant/flavored mixed into "all") render first, ungrouped
                const ungrouped = filtered.filter(c => !c.subGroup);
                let html = ungrouped.length ? `<div class="coffee-grid" style="grid-column: 1 / -1; margin-bottom: var(--space-xl);">${ungrouped.map(cardHtml).join('')}</div>` : '';

                SUBGROUP_ORDER.forEach(key => {
                    const items = filtered.filter(c => c.subGroup === key);
                    if (!items.length) return;
                    const label = SUBGROUP_LABELS[key];
                    html += `
                        <div class="subgroup-header scroll-reveal" style="grid-column: 1 / -1; margin: var(--space-xl) 0 var(--space-md); padding-bottom: var(--space-sm); border-bottom: 2px solid var(--gold);">
                            <h3 style="font-size: 20px; font-weight: 800; color: var(--coffee-brown);">${label.title}</h3>
                            <p style="font-size: 13px; color: var(--medium-roast);">${label.desc}</p>
                        </div>
                        <div class="coffee-grid" style="grid-column: 1 / -1; margin-bottom: var(--space-lg);">${items.map(cardHtml).join('')}</div>
                    `;
                });
                grid.innerHTML = html;
            }

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                if (isElementInViewport(el)) {
                    el.classList.add('visible');
                }
            });
        }

        // ============================================================
        // 18. COFFEE DETAIL
        // ============================================================
        // Renders the roast × weight price grid for products priced per-kilo
        // (currently only "Don Jose" — see priceTiers in COFFEES). Hides the
        // block entirely for every normal single-price product.
        function renderPriceTiers(coffee) {
            const box = document.getElementById('detailPriceTiers');
            if (!box) return;
            if (!coffee.priceTiers) { box.style.display = 'none'; return; }
            const roastLabels = { light: 'فاتح', medium: 'وسط', dark: 'غامق' };
            const weightLabels = { 250: 'ربع كيلو (250 جم)', 500: 'نص كيلو (500 جم)', 1000: 'كيلو (1000 جم)' };
            let rows = '';
            Object.keys(coffee.priceTiers).forEach(roastKey => {
                const tiers = coffee.priceTiers[roastKey];
                rows += `<tr>
                    <td style="padding:8px; font-weight:700;">${roastLabels[roastKey] || roastKey}</td>
                    ${Object.keys(weightLabels).map(w => `<td style="padding:8px; text-align:center;">${tiers[w]}${L(' ج', ' EGP')}</td>`).join('')}
                </tr>`;
            });
            box.innerHTML = `
                <div style="font-size:14px; font-weight:700; margin:var(--space-md) 0 var(--space-sm);">${L('جدول الأسعار (بالكيلو — يختلف حسب الوزن ودرجة التحميص)', 'Price table (by the kilo — varies by weight and roast level)')}</div>
                <table style="width:100%; border-collapse:collapse; font-size:13px; background:rgba(255,255,255,0.5); border-radius:var(--radius-sm); overflow:hidden;">
                    <thead><tr style="background:rgba(31,92,80,0.08);">
                        <th style="padding:8px; text-align:right;">التحميص</th>
                        ${Object.values(weightLabels).map(l => `<th style="padding:8px;">${l}</th>`).join('')}
                    </tr></thead>
                    <tbody>${rows}</tbody>
                </table>`;
            box.style.display = 'block';
        }

        // Radar Chart — Desktop only (بند 131). على الموبايل نعتمد فقط على
        // الأشرطة الأفقية (profileBars/detailProfile) لأن العجلة تنكسر في مساحة ضيقة.
        function renderRadarChart(profile) {
            const container = document.getElementById('detailRadar');
            if (!container) return;
            if (window.innerWidth < 768) { container.innerHTML = ''; return; }

            const axes = [
                { key: 'body', label: 'قوام' },
                { key: 'acidity', label: 'حمضية' },
                { key: 'sweetness', label: 'حلاوة' },
                { key: 'bitterness', label: 'مرارة' },
                { key: 'fruitiness', label: 'فواكه' },
                { key: 'chocolate', label: 'شوكولاتة' }
            ];
            const size = 220, center = size / 2, maxR = 85, n = axes.length;
            const pointFor = (i, value) => {
                const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
                const r = (value / 10) * maxR;
                return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
            };
            const dataPoints = axes.map((a, i) => pointFor(i, profile[a.key] || 0));
            const dataPath = dataPoints.map(p => p.join(',')).join(' ');

            // شبكة خلفية (3 مستويات) + محاور + تسميات
            let grid = '';
            [0.33, 0.66, 1].forEach(f => {
                const pts = axes.map((a, i) => {
                    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
                    const r = maxR * f;
                    return [center + r * Math.cos(angle), center + r * Math.sin(angle)].join(',');
                }).join(' ');
                grid += `<polygon points="${pts}" fill="none" stroke="rgba(23,18,15,0.12)" stroke-width="1"/>`;
            });
            let spokes = '', labels = '';
            axes.forEach((a, i) => {
                const [x, y] = pointFor(i, 10);
                spokes += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="rgba(23,18,15,0.12)" stroke-width="1"/>`;
                const [lx, ly] = pointFor(i, 12.2);
                labels += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="var(--espresso-black)">${a.label}</text>`;
            });

            container.innerHTML = `
                <svg viewBox="0 0 ${size} ${size + 20}" width="${size}" height="${size + 20}" role="img" aria-label="مخطط الملف الحسي الشعاعي">
                    ${grid}${spokes}
                    <polygon points="${dataPath}" fill="var(--coffee-brown)" fill-opacity="0.25" stroke="var(--coffee-brown)" stroke-width="2"/>
                    ${labels}
                </svg>
            `;
        }

        // ============================================================
        // ADD-ONS — من صور المنيو الأصلية (خوسية.zip)، تظهر في كل صفحات
        // "قهوة تركية" كقائمة أسعار موحدة. صنفان فقط (grandi-jose-*) عندهم
        // قائمة محدودة موثّقة في note الخاص بيهم.
        // ============================================================
        const STANDARD_ADDONS = [
            { name: 'مستكة يوناني', price: 80 },
            { name: 'جينسينج أحمر كوري', price: 80 },
            { name: 'ماكا سوداء', price: 100 },
            { name: 'زر ورد', price: 30 },
            { name: 'جوزة الطيب', price: 40, note: '+30 ج في حالة التحميص الغامق' }
        ];
        const LIMITED_ADDONS = {
            'grandi-jose-sada': ['هيل', 'مستكة يوناني', 'جينسينج أحمر كوري'],
            'grandi-jose-mahouj': ['مستكة يوناني', 'جينسينج أحمر كوري']
        };

        function renderAddOns(coffee) {
            const container = document.getElementById('detailAddOns');
            const wrapper = document.getElementById('detailAddOnsWrap');
            if (!container || !wrapper) return;
            if (coffee.category !== 'turkish') { wrapper.style.display = 'none'; return; }

            const limited = LIMITED_ADDONS[coffee.id];
            wrapper.style.display = 'block';
            if (limited) {
                container.innerHTML = `
                    <p style="font-size: 12px; color: var(--coffee-brown); margin-bottom: 6px;">${L('إضافات محدودة لهذا الصنف (بيُطحن مباشرة بعد التحميص):', 'Limited add-ons for this item (ground right after roasting):')}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${limited.map(n => `<span style="padding: 4px 12px; background: rgba(90,56,40,0.08); border-radius: 20px; font-size: 12px;">${n}</span>`).join('')}
                    </div>`;
            } else {
                container.innerHTML = `
                    <div style="display: grid; grid-template-columns: 1fr auto; gap: 4px 12px; font-size: 13px;">
                        ${STANDARD_ADDONS.map(a => `
                            <span>${T(a.name)}${a.note ? ` <span style="color: var(--coffee-brown); font-size: 11px;">(${T(a.note)})</span>` : ''}</span>
                            <span style="font-weight: 700;">${a.price}${L(' ج', ' EGP')}</span>
                        `).join('')}
                    </div>`;
            }
        }

        function openCoffeeDetail(id) {
            const coffee = COFFEES.find(c => c.id === id);
            if (!coffee) return;
            
            const modal = document.getElementById('coffee-detail');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            document.getElementById('detailName').textContent = coffee.name;
            document.getElementById('detailNameEn').textContent = coffee.nameEn || '';
            document.getElementById('detailOrigin').textContent = coffee.origin;
            document.getElementById('detailRoast').textContent = coffee.roast === 'medium' ? 'تحميص وسط' : 
                                                                coffee.roast === 'dark' ? 'تحميص غامق' :
                                                                coffee.roast === 'light' ? 'تحميص فاتح' :
                                                                coffee.roast === 'medium-dark' ? 'تحميص وسط-غامق' :
                                                                coffee.roast === 'light-medium' ? 'تحميص فاتح-وسط' :
                                                                coffee.roast === 'light-medium-dark' ? 'كل الدرجات (فاتح/وسط/غامق)' :
                                                                coffee.roast;
            document.getElementById('detailSpecies').textContent = coffee.species;
            document.getElementById('detailProcess').textContent = coffee.process;
            document.getElementById('detailCaffeine').textContent = coffee.caffeine;
            document.getElementById('detailPrice').textContent = coffee.price + L(' ج', ' EGP');
            document.getElementById('detailWeight').textContent = coffee.weight + L(' جم', 'g');
            renderPriceTiers(coffee);
            renderAddOns(coffee);
            document.getElementById('detailImage').src = getCoffeeImage(coffee.id);
            document.getElementById('detailImage').alt = coffee.name;
            
            if (coffee.bestFor && coffee.bestFor.length > 0) {
                document.getElementById('detailBestFor1').textContent = coffee.bestFor[0] || '';
                document.getElementById('detailBestFor2').textContent = coffee.bestFor[1] || '';
            }
            
            const notesContainer = document.getElementById('detailTastingNotes');
            notesContainer.innerHTML = coffee.tastingNotes.map(note => `
                <span style="padding: 6px 16px; background: rgba(90,56,40,0.08); border-radius: 20px; font-size: 13px;">${note}</span>
            `).join('');
            
            renderRadarChart(coffee.profile);

            const profileContainer = document.getElementById('detailProfile');
            const profileKeys = [
                { key: 'body', label: 'القوام' },
                { key: 'acidity', label: 'الحمضية' },
                { key: 'sweetness', label: 'الحلاوة' },
                { key: 'bitterness', label: 'المرارة' },
                { key: 'chocolate', label: 'شوكولاتة' },
                { key: 'caramel', label: 'كراميل' },
                { key: 'fruitiness', label: 'فواكه' },
                { key: 'nutty', label: 'جوزي' },
                { key: 'spice', label: 'حار' },
                { key: 'aftertaste', label: 'بعد الطعم' }
            ];
            
            profileContainer.innerHTML = profileKeys.map(({key, label}) => {
                const val = coffee.profile[key] || 0;
                return `
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 12px;">
                            <span>${label}</span>
                            <span>${val}/10</span>
                        </div>
                        <div style="height: 4px; background: rgba(23,18,15,0.06); border-radius: 4px; overflow: hidden;">
                            <div style="height: 100%; width: ${val * 10}%; background: var(--coffee-brown); border-radius: 4px;"></div>
                        </div>
                    </div>
                `;
            }).join('');
            
            currentDetailCoffeeId = coffee.id;
            const qtyEl = document.getElementById('detailQtyValue');
            if (qtyEl) qtyEl.textContent = '1';
            updateWishlistUI(coffee.id);
            displayRelatedCoffees(coffee.id);
            displayReviews(coffee.id);

            document.getElementById('detailCompareBtn').onclick = function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.querySelector('#coffee-comparison')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    const selects = ['compare1', 'compare2', 'compare3'];
                    const used = [];
                    for (let sel of selects) {
                        const el = document.getElementById(sel);
                        if (el && !used.includes(coffee.id)) {
                            el.value = coffee.id;
                            used.push(coffee.id);
                        }
                    }
                }, 500);
            };
        }

        document.getElementById('closeDetailBtn').addEventListener('click', function() {
            document.getElementById('coffee-detail').classList.remove('active');
            document.body.style.overflow = '';
        });

        document.getElementById('coffee-detail').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // ============================================================
        // 96. SCROLL REVEAL
        // ============================================================
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight - 100;
        }

        function handleScrollReveal() {
            document.querySelectorAll('.scroll-reveal:not(.visible)').forEach(el => {
                if (isElementInViewport(el)) {
                    el.classList.add('visible');
                }
            });
        }

        // ============================================================
        // 13. NAVIGATION
        // ============================================================
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Close nav on link click (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });

        // ============================================================
        // FILTERS
        // ============================================================
        let currentCoffeeFilter = 'all';
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('btn-primary'));
                this.classList.add('btn-primary');
                currentCoffeeFilter = this.dataset.filter;
                renderCoffeeCards(currentCoffeeFilter);
            });
        });

        // ============================================================
        // 38-40. ESPRESSO CALCULATOR
        // ============================================================
        const doseInput = document.getElementById('doseInput');
        const ratioSelect = document.getElementById('ratioSelect');
        const resultDose = document.getElementById('resultDose');
        const resultYield = document.getElementById('resultYield');
        const resultRatio = document.getElementById('resultRatio');

        function updateEspressoCalc() {
            const dose = parseFloat(doseInput.value) || 0;
            const ratio = parseFloat(ratioSelect.value) || 1;
            const yield_ = dose * ratio;
            
            resultDose.textContent = `${dose} ${L('جرام', 'g')}`;
            resultYield.textContent = `${yield_.toFixed(1)} ${L('جرام', 'g')}`;
            resultRatio.textContent = `1:${ratio}`;
        }

        if (doseInput) doseInput.addEventListener('input', updateEspressoCalc);
        if (ratioSelect) ratioSelect.addEventListener('change', updateEspressoCalc);
        if (doseInput && ratioSelect && resultDose && resultYield && resultRatio) updateEspressoCalc();

        // ============================================================
        // 41-42. BREW CALCULATOR
        // ============================================================
        const brewDose = document.getElementById('brewDose');
        const brewRatioSelect = document.getElementById('brewRatioSelect');
        const brewResultDose = document.getElementById('brewResultDose');
        const brewResultWater = document.getElementById('brewResultWater');
        const brewResultRatio = document.getElementById('brewResultRatio');

        function updateBrewCalc() {
            const dose = parseFloat(brewDose.value) || 0;
            const ratio = parseFloat(brewRatioSelect.value) || 15;
            const water = dose * ratio;
            
            brewResultDose.textContent = `${dose} ${L('جرام', 'g')}`;
            brewResultWater.textContent = `${water} ${L('مل', 'ml')}`;
            brewResultRatio.textContent = `1:${ratio}`;
        }

        if (brewDose) brewDose.addEventListener('input', updateBrewCalc);
        if (brewRatioSelect) brewRatioSelect.addEventListener('change', updateBrewCalc);
        if (brewDose && brewRatioSelect && brewResultDose && brewResultWater && brewResultRatio) updateBrewCalc();

        // ============================================================
        // 47. TROUBLESHOOTER
        // ============================================================
        // Variable-isolation dial-in logic (بند 139-140): يحدد متغيرًا واحدًا
        // كخطوة أولى بناءً على النسبة والوقت الفعليَين، ثم يرتب باقي الخيارات
        // كتسلسل "لو لسه مش مظبوطة" بدل اقتراح كل شيء دفعة واحدة.
        const troubleData = {
            sour: {
                diagnosis: 'استخلاص ناقص (Under-extraction)',
                fast: 'طحن أنعم قليلاً — أسرع طريقة لزيادة الاستخلاص',
                slow: 'زيادة وقت الاستخلاص (استهدف 25-30 ثانية)',
                sequence: ['زيادة درجة حرارة الماء (92-94°C)', 'توزيع القهوة بشكل متساوٍ داخل السلة']
            },
            bitter: {
                diagnosis: 'استخلاص زائد (Over-extraction)',
                fast: 'طحن أخشن قليلاً — أسرع طريقة لتقليل الاستخلاص',
                slow: 'تقليل وقت الاستخلاص (استهدف 25-30 ثانية)',
                sequence: ['خفض درجة حرارة الماء', 'تقليل جرعة القهوة']
            },
            weak: {
                diagnosis: 'قهوة ضعيفة التركيز',
                fast: 'طحن أنعم قليلاً لزيادة زمن التلامس',
                slow: 'زيادة جرعة القهوة (Dose) مع ثبات النسبة',
                sequence: ['استخدام نسبة قهوة:ماء أقل (1:15 بدلاً من 1:17)', 'زيادة وقت التخمير']
            },
            strong: {
                diagnosis: 'قهوة قوية جداً',
                fast: 'طحن أخشن قليلاً لتقليل زمن التلامس',
                slow: 'تقليل جرعة القهوة (Dose) مع ثبات النسبة',
                sequence: ['استخدام نسبة قهوة:ماء أعلى (1:17 بدلاً من 1:15)', 'تقليل وقت التخمير']
            }
        };

        function diagnoseDialIn(dose, yieldG, time, issue) {
            const data = troubleData[issue];
            if (!data || !dose || !yieldG || dose <= 0) return null;
            const ratio = yieldG / dose;
            // اختيار المتغير الأول بناءً على الوقت الفعلي مقارنة بالنطاق المثالي (25-30 ثانية):
            // لو الوقت خارج النطاق فعلاً، التوقيت هو أول متغير منطقي؛ غير كده الطحن هو الأسرع.
            const timeOutOfRange = time && (time < 22 || time > 32);
            const primary = timeOutOfRange ? data.slow : data.fast;
            const secondaryFirst = timeOutOfRange ? data.fast : data.slow;
            return {
                diagnosis: `${T(data.diagnosis)}${L(' — نسبتك الحالية 1:', ' — your current ratio is 1:')}${ratio.toFixed(1)}${time ? L(` في ${time} ثانية`, ` at ${time} seconds`) : ''}`,
                primary,
                solutions: [secondaryFirst, ...data.sequence]
            };
        }

        document.querySelectorAll('.trouble-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const issue = this.dataset.issue;
                const dose = parseFloat(document.getElementById('dialDose').value);
                const yieldG = parseFloat(document.getElementById('dialYield').value);
                const time = parseFloat(document.getElementById('dialTime').value);
                const data = diagnoseDialIn(dose, yieldG, time, issue);
                const result = document.getElementById('troubleResult');
                const diagnosis = document.getElementById('troubleDiagnosis');
                const primaryEl = document.getElementById('troublePrimary');
                const solutions = document.getElementById('troubleSolutions');
                
                if (data) {
                    result.style.display = 'block';
                    diagnosis.textContent = data.diagnosis;
                    primaryEl.textContent = data.primary;
                    solutions.innerHTML = data.solutions.map(s => 
                        `<li style="padding: var(--space-sm) 0; border-bottom: 1px solid rgba(255,255,255,0.06);">• ${s}</li>`
                    ).join('');
                    
                    document.querySelectorAll('.trouble-btn').forEach(b => b.classList.remove('btn-primary'));
                    this.classList.add('btn-primary');
                }
            });
        });

        // ============================================================
        // 22. FLAVOR WHEEL (multi-select: pick 2+ flavors together to see
        // which single coffee covers all of them, or get a blend suggestion
        // that combines beans to cover the whole selected flavor profile)
        // ============================================================
        const flavorData = {
            sweet: {
                title: 'سكري / حلو',
                desc: 'نكهات حلوة طبيعية تذكرنا بالسكر البني والكراميل والعسل',
                subs: ['سكر بني', 'كراميل', 'عسل'],
                coffees: ['خوسيه بابلو سادة', 'جراندي خوسيه سادة', 'خوسيه جونزالو إسبريسو']
            },
            fruity: {
                title: 'فاكهي / حمضي',
                desc: 'نكهات فاكهية منعشة مع حموضة مميزة تذكرنا بالفواكه الحمضية والتوت',
                subs: ['جريب فروت', 'توت بري', 'فواكه حمضية'],
                coffees: ['خوسيه جوتشو سادة', 'خوسيه كالدي سادة', 'خوسيه نيروبي سادة']
            },
            floral: {
                title: 'زهري / عطري',
                desc: 'نكهات زهرية عطرية مع لمسات من الياسمين والورد والشاي الأسود',
                subs: ['ياسمين', 'ورد', 'شاي أسود'],
                coffees: ['خوسيه جوتشو سادة', 'خوسيه سافانا سادة', 'خوسيه دييجو سادة']
            },
            spicy: {
                title: 'حار / توابل',
                desc: 'نكهات دافئة مع لمسات من التوابل والبهارات المميزة',
                subs: ['هيل', 'قرفة', 'فلفل أسود'],
                coffees: ['خوسيه أشانتي سادة', 'خوسيه إسبريسو']
            },
            nutty: {
                title: 'جوزي / مكسرات',
                desc: 'نكهات جوزية دافئة تذكرنا باللوز والبندق والجوز',
                subs: ['لوز', 'بندق', 'جوز'],
                coffees: ['خوسيه بونبونيرا سادة', 'خوسيه بوجوتا سادة']
            },
            chocolate: {
                title: 'شوكولاتة / كاكاو',
                desc: 'نكهات غنية بالشوكولاتة مع لمسات من الكاكاو الداكن والحليب',
                subs: ['شوكولاتة داكنة', 'شوكولاتة بالحليب', 'كاكاو'],
                coffees: ['خوسيه بابلو سادة', 'خوسيه بارباروسا', 'سانتا لوتشيا إسبريسو']
            },
            roasted: {
                title: 'محمص / قوي',
                desc: 'نكهات محمصة عميقة مع لمسات من الخبز المحمص والجوز المحمص',
                subs: ['خبز محمص', 'جوز محمص', 'دخان'],
                coffees: ['دون خوسيه سادة', 'خوسيه إسبريسو']
            },
            earthy: {
                title: 'ترابي / عشبي',
                desc: 'نكهات ترابية وعشبية تذكرنا بالغابات والأراضي البركانية',
                subs: ['تربة', 'عشب', 'خشب'],
                coffees: ['خوسيه أشانتي سادة', 'خوسيه سافانا سادة', 'خوسيه نيروبي سادة']
            }
        };

        const selectedFlavors = new Set();

        function renderFlavorPanel() {
            const default_ = document.getElementById('flavorDefault');
            const info = document.getElementById('flavorInfo');
            const multi = document.getElementById('flavorMulti');

            document.querySelectorAll('.flavor-segment').forEach(el => {
                el.style.fillOpacity = selectedFlavors.has(el.dataset.flavor) ? '0.5' : '0.25';
            });

            if (selectedFlavors.size === 0) {
                default_.style.display = 'block';
                info.style.display = 'none';
                multi.style.display = 'none';
                return;
            }

            if (selectedFlavors.size === 1) {
                const flavor = [...selectedFlavors][0];
                const data = flavorData[flavor];
                default_.style.display = 'none';
                multi.style.display = 'none';
                info.style.display = 'block';

                document.getElementById('flavorTitle').textContent = data.title;
                document.getElementById('flavorDesc').textContent = data.desc;
                document.getElementById('flavorSub1').textContent = data.subs[0] || '';
                document.getElementById('flavorSub2').textContent = data.subs[1] || '';
                document.getElementById('flavorSub3').textContent = data.subs[2] || '';
                document.getElementById('flavorCoffees').textContent = data.coffees.map(c => T(c)).join(' • ');
                return;
            }

            // 2+ flavors selected — combined view
            default_.style.display = 'none';
            info.style.display = 'none';
            multi.style.display = 'block';

            const flavors = [...selectedFlavors];
            const datas = flavors.map(f => flavorData[f]);

            document.getElementById('flavorMultiTitle').textContent = datas.map(d => T(d.title)).join(' + ');

            const allSubs = [...new Set(datas.flatMap(d => d.subs))];
            document.getElementById('flavorMultiBadges').innerHTML = allSubs.map(s =>
                `<span style="padding: 6px 16px; background: rgba(90,56,40,0.08); border-radius: 20px; font-size: 13px;">${T(s)}</span>`
            ).join('');

            // Coffees present in EVERY selected flavor's list = a single coffee covering the whole combo
            const intersection = datas.reduce((acc, d) => acc.filter(name => d.coffees.includes(name)),
                [...datas[0].coffees]);

            const matchEl = document.getElementById('flavorMultiMatch');
            const blendBox = document.getElementById('flavorMultiBlendBox');

            if (intersection.length > 0) {
                matchEl.innerHTML = `🎯 <strong>${L('أنواع بن تجمع كل النكهات دي مع بعض:', 'Coffee types that combine all these flavors:')}</strong><br>${intersection.map(c => T(c)).join(' • ')}`;
                blendBox.style.display = 'none';
            } else {
                matchEl.innerHTML = `${L('مفيش صنف واحد بيجمع كل النكهات دي بمفرده', "No single coffee combines all of these flavors on its own")}.`;

                // Build a blend suggestion: one representative coffee per selected flavor,
                // preferring a coffee not already used by an earlier flavor for variety.
                // Blend Builder supports at most 5 beans.
                const chosen = [];
                flavors.slice(0, 5).forEach(f => {
                    const candidates = flavorData[f].coffees;
                    const pick = candidates.find(c => !chosen.includes(c)) || candidates[0];
                    if (pick && !chosen.includes(pick)) chosen.push(pick);
                });

                if (chosen.length >= 2) {
                    blendBox.style.display = 'block';
                    const equalVal = Math.floor(100 / chosen.length);
                    document.getElementById('flavorMultiBlendList').textContent =
                        chosen.map(c => `${equalVal}% ${T(c)}`).join('  +  ');
                    const btn = document.getElementById('flavorMultiBlendBtn');
                    btn.onclick = () => applyFlavorBlend(chosen);
                } else {
                    blendBox.style.display = 'none';
                }
            }
        }

        document.querySelectorAll('.flavor-segment').forEach(el => {
            el.addEventListener('click', function() {
                const flavor = this.dataset.flavor;
                if (!flavorData[flavor]) return;
                if (selectedFlavors.has(flavor)) {
                    selectedFlavors.delete(flavor);
                } else {
                    selectedFlavors.add(flavor);
                }
                renderFlavorPanel();
            });
        });

        document.getElementById('flavorMultiClear')?.addEventListener('click', () => {
            selectedFlavors.clear();
            renderFlavorPanel();
        });

        // Builds the requested blend directly in the Blend Builder from a list
        // of Arabic coffee names (as used in flavorData), then scrolls to it.
        function applyFlavorBlend(coffeeNames) {
            const ids = coffeeNames
                .map(name => COFFEES.find(c => c.name === name)?.id)
                .filter(Boolean);
            if (ids.length < 2) return;

            const container = document.getElementById('blendBeans');
            const equalVal = Math.floor(100 / ids.length);
            const remainder = 100 - equalVal * ids.length;

            container.innerHTML = ids.map((id, idx) => {
                const beanNum = idx + 1;
                const val = equalVal + (idx === 0 ? remainder : 0);
                return `
                <div style="margin-bottom: var(--space-lg); padding: var(--space-md); background: rgba(255,255,255,0.03); border-radius: var(--radius-sm);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-sm);">
                        <select class="blend-bean-select bean-select" data-bean="${beanNum}" style="flex: 1; margin-right: var(--space-md);">
                            <option value="">اختر نوع البن</option>
                        </select>
                        <button class="blend-remove remove-bean" data-bean="${beanNum}"${ids.length <= 2 ? ' style="display:none;"' : ''}>✕</button>
                    </div>
                    <div style="display: flex; align-items: center; gap: var(--space-md);">
                        <input type="range" class="blend-slider bean-slider" data-bean="${beanNum}" min="0" max="100" value="${val}">
                        <span class="blend-percentage bean-percentage" data-bean="${beanNum}">${val}%</span>
                    </div>
                </div>`;
            }).join('');

            beanCount = ids.length;
            populateBlendSelects();
            ids.forEach((id, idx) => {
                const sel = document.querySelector(`.bean-select[data-bean="${idx + 1}"]`);
                if (sel) sel.value = id;
            });
            document.querySelectorAll('#blendBeans > div').forEach(div => attachBlendEvents(div));

            document.getElementById('blend-builder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateBlend();
        }

        // ============================================================
        // 23. COMPARISON
        // ============================================================
        function populateCompareSelects() {
            const selects = ['compare1', 'compare2', 'compare3'];
            selects.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.innerHTML = `<option value="">اختر النوع</option>` + 
                        COFFEES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
                }
            });
        }

        document.getElementById('compareBtn')?.addEventListener('click', function() {
            const ids = [
                document.getElementById('compare1').value,
                document.getElementById('compare2').value,
                document.getElementById('compare3').value
            ].filter(id => id !== '');
            
            if (ids.length < 2) {
                alert(T('الرجاء اختيار نوعين على الأقل للمقارنة'));
                return;
            }
            
            const coffees = ids.map(id => COFFEES.find(c => c.id === id)).filter(c => c);
            const results = document.getElementById('comparisonResults');
            const headers = document.getElementById('compareHeaders');
            const body = document.getElementById('compareBody');
            
            headers.innerHTML = `<th style="padding: var(--space-md); text-align: right;">الخاصية</th>` + 
                coffees.map(c => `<th style="padding: var(--space-md); text-align: center;">${c.name}</th>`).join('');
            
            const properties = [
                { key: 'origin', label: 'المنشأ' },
                { key: 'roast', label: 'التحميص' },
                { key: 'species', label: 'النوع' },
                { key: 'process', label: 'المعالجة' },
                { key: 'price', label: 'السعر (ج/250جم)' },
                { key: 'caffeine', label: 'الكافيين' },
                { key: 'body', label: 'القوام' },
                { key: 'acidity', label: 'الحمضية' },
                { key: 'sweetness', label: 'الحلاوة' },
                { key: 'bitterness', label: 'المرارة' },
                { key: 'aftertaste', label: 'بعد الطعم' }
            ];
            
            body.innerHTML = properties.map(prop => {
                const cells = coffees.map(c => {
                    if (prop.key === 'price') {
                        return `<td style="padding: var(--space-sm); text-align: center; font-weight: 700;">${c.price}</td>`;
                    }
                    if (['body', 'acidity', 'sweetness', 'bitterness', 'aftertaste'].includes(prop.key)) {
                        const val = c.profile[prop.key] || 0;
                        return `<td style="padding: var(--space-sm); text-align: center;">
                            <div style="display: inline-block; width: 60px; height: 4px; background: rgba(23,18,15,0.06); border-radius: 4px; overflow: hidden;">
                                <div style="height: 100%; width: ${val * 10}%; background: var(--coffee-brown); border-radius: 4px;"></div>
                            </div>
                            <span style="font-size: 12px; margin-right: 8px;">${val}/10</span>
                        </td>`;
                    }
                    const val = c[prop.key] || '—';
                    return `<td style="padding: var(--space-sm); text-align: center;">${val}</td>`;
                }).join('');
                return `<tr style="border-bottom: 1px solid rgba(23,18,15,0.04);">
                    <td style="padding: var(--space-sm); text-align: right; font-weight: 700; color: var(--coffee-brown);">${prop.label}</td>
                    ${cells}
                </tr>`;
            }).join('');
            
            results.style.display = 'block';
        });

        // ============================================================
        // 24-25. FIND YOUR COFFEE
        // ============================================================
        let selectedFlavorPrefs = [];

        document.querySelectorAll('.flavor-pref-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const flavor = this.dataset.flavor;
                const idx = selectedFlavorPrefs.indexOf(flavor);
                if (idx > -1) {
                    selectedFlavorPrefs.splice(idx, 1);
                    this.style.borderColor = 'rgba(23,18,15,0.08)';
                    this.style.background = 'transparent';
                } else {
                    selectedFlavorPrefs.push(flavor);
                    this.style.borderColor = 'var(--coffee-brown)';
                    this.style.background = 'rgba(90,56,40,0.08)';
                }
                document.getElementById('selectedFlavors').textContent = 
                    selectedFlavorPrefs.length ? L('المفضلة: ', 'Preferred: ') + selectedFlavorPrefs.join(', ') : '';
            });
        });

        document.getElementById('findCoffeeBtn')?.addEventListener('click', function() {
            const body = parseInt(document.getElementById('prefBody').value) || 5;
            const acidity = parseInt(document.getElementById('prefAcidity').value) || 5;
            const sweetness = parseInt(document.getElementById('prefSweetness').value) || 5;
            
            const results = COFFEES.filter(c => c.profile && c.profile.body).map(coffee => {
                let score = 0;
                let totalWeight = 0;
                
                const bodyDiff = Math.abs(coffee.profile.body - body) / 10;
                score += (1 - bodyDiff) * 20;
                totalWeight += 20;
                
                const acidityDiff = Math.abs(coffee.profile.acidity - acidity) / 10;
                score += (1 - acidityDiff) * 20;
                totalWeight += 20;
                
                const sweetnessDiff = Math.abs(coffee.profile.sweetness - sweetness) / 10;
                score += (1 - sweetnessDiff) * 20;
                totalWeight += 20;
                
                let flavorScore = 0;
                if (selectedFlavorPrefs.length > 0) {
                    selectedFlavorPrefs.forEach(pref => {
                        const val = coffee.profile[pref] || 0;
                        flavorScore += val / 10;
                    });
                    flavorScore = (flavorScore / selectedFlavorPrefs.length) * 40;
                } else {
                    flavorScore = 20;
                }
                score += flavorScore;
                totalWeight += 40;
                
                return {
                    coffee: coffee,
                    match: Math.round((score / totalWeight) * 100)
                };
            });
            
            results.sort((a, b) => b.match - a.match);
            const topResults = results.slice(0, 6);
            
            const container = document.getElementById('finderResults');
            const list = document.getElementById('finderResultsList');
            container.style.display = 'block';
            
            if (topResults.length === 0 || topResults[0].match < 30) {
                list.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-xl); color: var(--coffee-brown);">
                        <div style="font-size: 48px; margin-bottom: var(--space-md);">🔍</div>
                        <p>${L('لم نجد تطابقاً دقيقاً. حاول توسيع نطاق البحث.', "We couldn't find an exact match. Try broadening your search.")}</p>
                    </div>
                `;
                return;
            }
            
            list.innerHTML = topResults.map(({coffee, match}) => {
                const matchText = match >= 85 ? '🟢 مطابق ممتاز' : match >= 70 ? '🟡 مطابق جيد' : '🔵 يستحق التجربة';
                
                return `
                    <div style="background: white; padding: var(--space-md); border-radius: var(--radius-sm); border: 1px solid rgba(23,18,15,0.06); cursor: pointer;" onclick="openCoffeeDetail('${coffee.id}')">
                        <div style="font-weight: 700; font-size: 14px;">${coffee.name}</div>
                        <div style="font-size: 12px; color: var(--coffee-brown);">${coffee.origin}</div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-sm);">
                            <span style="font-size: 20px; font-weight: 900; color: var(--coffee-brown);">${match}%</span>
                            <span style="font-size: 12px; color: var(--coffee-brown);">${matchText}</span>
                        </div>
                        <div style="margin-top: var(--space-sm); display: flex; flex-wrap: wrap; gap: 4px;">
                            ${coffee.tastingNotes.slice(0, 3).map(n => `<span style="font-size: 10px; padding: 2px 10px; background: rgba(90,56,40,0.08); border-radius: 12px;">${n}</span>`).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        });

        // ============================================================
        // 27-35. BLEND BUILDER
        // ============================================================
        let beanCount = 3;

        function populateBlendSelects() {
            document.querySelectorAll('.bean-select').forEach(sel => {
                const current = sel.value;
                sel.innerHTML = `<option value="">اختر نوع البن</option>` + 
                    COFFEES.filter(c => c.category !== 'instant' && c.category !== 'flavored').map(c => 
                        `<option value="${c.id}">${T(c.name)} - ${T(c.origin)}</option>`
                    ).join('');
                if (current) sel.value = current;
            });
        }

        function attachBlendEvents(container) {
            container.querySelector('.bean-select')?.addEventListener('change', updateBlend);
            container.querySelector('.bean-slider')?.addEventListener('input', function() {
                const num = this.dataset.bean;
                document.querySelector(`.bean-percentage[data-bean="${num}"]`).textContent = this.value + '%';
                updateBlend();
            });
        }

        function updateBlend() {
            const selects = document.querySelectorAll('.bean-select');
            const sliders = document.querySelectorAll('.bean-slider');
            let total = 0;
            const blendData = [];

            sliders.forEach((slider) => {
                const val = parseInt(slider.value) || 0;
                total += val;
                const beanId = slider.dataset.bean;
                const select = document.querySelector(`.bean-select[data-bean="${beanId}"]`);
                const coffeeId = select?.value;
                
                blendData.push({
                    id: coffeeId,
                    percentage: val,
                    beanNum: beanId
                });
            });

            const totalEl = document.getElementById('totalPercentage');
            const warningEl = document.getElementById('totalWarning');
            totalEl.textContent = total + '%';
            totalEl.style.color = total === 100 ? 'var(--gold-light)' : '#FF6B6B';
            warningEl.style.display = total === 100 ? 'none' : 'block';

            const allSelected = blendData.every(b => b.id && b.id !== '');
            if (total === 100 && allSelected && blendData.length >= 2) {
                generateBlendResult(blendData);
            } else {
                document.getElementById('blendResult').innerHTML = `
                    <div style="text-align: center; padding: var(--space-xl); color: var(--sand);">
                        <div style="font-size: 48px; margin-bottom: var(--space-md);">⚗️</div>
                        <p>${total !== 100 ? '⚠️ يجب أن يكون المجموع 100%' : 'اختر أنواع البن لإنشاء مزيجك'}</p>
                    </div>
                `;
                document.getElementById('blendProfile').style.display = 'none';
            }
        }

        function calculateBlendProfile(blendData) {
            const keys = ['body', 'acidity', 'bitterness', 'sweetness', 'chocolate', 'caramel', 'fruitiness', 'floral', 'nutty', 'spice', 'aftertaste'];
            const profile = {};
            
            keys.forEach(key => {
                let weightedSum = 0;
                let hasData = false;
                
                blendData.forEach(b => {
                    const coffee = coffeeMap[b.id];
                    if (coffee && coffee.profile && coffee.profile[key] !== undefined) {
                        weightedSum += coffee.profile[key] * (b.percentage / 100);
                        hasData = true;
                    }
                });
                
                profile[key] = hasData ? Math.round(weightedSum * 10) / 10 : 0;
            });
            
            return profile;
        }

        function generateBlendResult(blendData) {
            const profile = calculateBlendProfile(blendData);
            const resultDiv = document.getElementById('blendResult');
            const batchSize = parseInt(document.getElementById('batchSize').value) || 1000;
            
            let beansHtml = blendData.map(b => {
                const coffee = coffeeMap[b.id];
                const weight = Math.round(batchSize * (b.percentage / 100));
                return `
                    <div style="display: flex; justify-content: space-between; padding: var(--space-sm) 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <span>${coffee?.name || 'غير معروف'}</span>
                        <span>${b.percentage}% (${weight} ${L('جرام', 'g')})</span>
                    </div>
                `;
            }).join('');

            resultDiv.innerHTML = `
                <div style="margin-bottom: var(--space-lg);">
                    <div style="font-size: 14px; color: var(--gold-light); margin-bottom: var(--space-sm);">مزيجك</div>
                    ${beansHtml}
                </div>
                <div style="padding: var(--space-md); background: rgba(255,255,255,0.04); border-radius: var(--radius-sm);">
                    <div style="font-size: 12px; color: var(--coffee-brown);">${L('الوزن الإجمالي', 'Total Weight')}</div>
                    <div style="font-size: 20px; font-weight: 900;">${batchSize} ${L('جرام', 'g')}</div>
                </div>
            `;

            document.getElementById('blendProfile').style.display = 'block';
            const barsContainer = document.getElementById('profileBars');
            const displayKeys = [
                { key: 'body', label: 'القوام' },
                { key: 'acidity', label: 'الحمضية' },
                { key: 'sweetness', label: 'الحلاوة' },
                { key: 'bitterness', label: 'المرارة' },
                { key: 'chocolate', label: 'شوكولاتة' },
                { key: 'caramel', label: 'كراميل' },
                { key: 'fruitiness', label: 'فواكه' },
                { key: 'nutty', label: 'جوزي' },
                { key: 'spice', label: 'حار' },
                { key: 'aftertaste', label: 'بعد الطعم' }
            ];

            barsContainer.innerHTML = displayKeys.map(({key, label}) => `
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--sand);">
                        <span>${label}</span>
                        <span>${profile[key] || 0}/10</span>
                    </div>
                    <div style="height: 4px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${(profile[key] || 0) * 10}%; background: var(--gold-light); border-radius: 4px; transition: width 600ms ease;"></div>
                    </div>
                </div>
            `).join('');
        }

        document.getElementById('addBean')?.addEventListener('click', function() {
            if (beanCount >= 5) {
                this.textContent = '⚠️ الحد الأقصى 5 أنواع';
                setTimeout(() => { this.textContent = '+ أضف نوع بن آخر'; }, 2000);
                return;
            }
            beanCount++;
            const container = document.getElementById('blendBeans');
            const newBean = document.createElement('div');
            newBean.style.cssText = 'margin-bottom: var(--space-lg); padding: var(--space-md); background: rgba(255,255,255,0.03); border-radius: var(--radius-sm);';
            newBean.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-sm);">
                    <select class="blend-bean-select bean-select" data-bean="${beanCount}" style="flex: 1; margin-right: var(--space-md);">
                        <option value="">اختر نوع البن</option>
                    </select>
                    <button class="blend-remove remove-bean" data-bean="${beanCount}">✕</button>
                </div>
                <div style="display: flex; align-items: center; gap: var(--space-md);">
                    <input type="range" class="blend-slider bean-slider" data-bean="${beanCount}" min="0" max="100" value="${Math.floor(100 / beanCount)}">
                    <span class="blend-percentage bean-percentage" data-bean="${beanCount}">${Math.floor(100 / beanCount)}%</span>
                </div>
            `;
            container.appendChild(newBean);
            
            populateBlendSelects();
            attachBlendEvents(newBean);
            // Recalculate percentages
            const sliders = document.querySelectorAll('.bean-slider');
            const equalVal = Math.floor(100 / sliders.length);
            sliders.forEach(slider => {
                slider.value = equalVal;
                const num = slider.dataset.bean;
                document.querySelector(`.bean-percentage[data-bean="${num}"]`).textContent = equalVal + '%';
            });
            updateBlend();
        });

        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-bean')) {
                const beanNum = parseInt(e.target.dataset.bean);
                if (beanCount > 2) {
                    const beanDiv = e.target.closest('div[style*="margin-bottom"]');
                    if (beanDiv) beanDiv.remove();
                    beanCount--;
                    const sliders = document.querySelectorAll('.bean-slider');
                    const equalVal = Math.floor(100 / sliders.length);
                    sliders.forEach(slider => {
                        slider.value = equalVal;
                        const num = slider.dataset.bean;
                        document.querySelector(`.bean-percentage[data-bean="${num}"]`).textContent = equalVal + '%';
                    });
                    updateBlend();
                }
            }
        });

        document.getElementById('batchSize')?.addEventListener('input', updateBlend);

        // ============================================================
        // 69-71. SAVE/LOAD BLENDS
        // ============================================================
        function saveBlend(name, blendData, batchSize) {
            const saved = JSON.parse(localStorage.getItem('jose_blends') || '[]');
            const blend = {
                id: Date.now(),
                name: name || `${L('مزيج', 'Blend')} ${saved.length + 1}`,
                date: new Date().toISOString(),
                beans: blendData,
                batchSize: batchSize,
                version: 1
            };
            saved.push(blend);
            localStorage.setItem('jose_blends', JSON.stringify(saved));
            return blend;
        }

        function loadSavedBlends() {
            return JSON.parse(localStorage.getItem('jose_blends') || '[]');
        }

        document.getElementById('saveBlendBtn')?.addEventListener('click', function() {
            const name = document.getElementById('blendName').value || `${L('مزيج', 'Blend')} ${Date.now()}`;
            const sliders = document.querySelectorAll('.bean-slider');
            const data = [];
            sliders.forEach(slider => {
                const beanId = slider.dataset.bean;
                const select = document.querySelector(`.bean-select[data-bean="${beanId}"]`);
                if (select && select.value) {
                    data.push({
                        id: select.value,
                        percentage: parseInt(slider.value) || 0
                    });
                }
            });
            const batch = parseInt(document.getElementById('batchSize').value) || 1000;
            
            if (data.length < 2 || data.some(b => !b.id || b.percentage === 0)) {
                alert(T('الرجاء اختيار نوعين على الأقل وتحديد النسب'));
                return;
            }
            
            const total = data.reduce((sum, b) => sum + b.percentage, 0);
            if (total !== 100) {
                alert(T('يجب أن يكون مجموع النسب 100%'));
                return;
            }
            
            saveBlend(name, data, batch);
            alert(`${L('✅ تم حفظ "', '✅ Saved "')}${name}${L('" بنجاح!', '" successfully!')}`);
            document.getElementById('savedBlendsList').style.display = 'none';
        });

        document.getElementById('loadBlendsBtn')?.addEventListener('click', function() {
            const list = document.getElementById('savedBlendsList');
            const blends = loadSavedBlends();
            
            if (blends.length === 0) {
                list.innerHTML = `<div style="text-align: center; color: var(--sand); padding: var(--space-lg);">${L('لا توجد مزيجات محفوظة', 'No saved blends')}</div>`;
            } else {
                list.innerHTML = blends.map(b => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); margin-bottom: var(--space-sm);">
                        <div>
                            <div style="font-weight: 700;">${b.name}</div>
                            <div style="font-size: 12px; color: var(--sand);">${new Date(b.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-EG')}</div>
                        </div>
                        <div style="display: flex; gap: var(--space-sm);">
                            <button class="load-blend-btn" data-id="${b.id}" style="padding: 6px 16px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); color: var(--beige); border-radius: var(--radius-sm); cursor: pointer;">${L('تحميل', 'Load')}</button>
                            <button class="delete-blend-btn" data-id="${b.id}" style="padding: 6px 16px; background: rgba(255,70,70,0.1); border: 1px solid rgba(255,70,70,0.2); color: #FF6B6B; border-radius: var(--radius-sm); cursor: pointer;">✕</button>
                        </div>
                    </div>
                `).join('');
            }
            list.style.display = 'block';
            
            document.querySelectorAll('.load-blend-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const blends = loadSavedBlends();
                    const blend = blends.find(b => b.id === id);
                    if (blend) {
                        const sliders = document.querySelectorAll('.bean-slider');
                        blend.beans.forEach((b, i) => {
                            if (sliders[i]) {
                                const select = document.querySelector(`.bean-select[data-bean="${sliders[i].dataset.bean}"]`);
                                if (select) select.value = b.id;
                                sliders[i].value = b.percentage;
                                document.querySelector(`.bean-percentage[data-bean="${sliders[i].dataset.bean}"]`).textContent = b.percentage + '%';
                            }
                        });
                        document.getElementById('batchSize').value = blend.batchSize || 1000;
                        updateBlend();
                        document.getElementById('savedBlendsList').style.display = 'none';
                        document.getElementById('blendName').value = blend.name;
                        alert(`${L('✅ تم تحميل "', '✅ Loaded "')}${blend.name}"`);
                    }
                });
            });
            
            document.querySelectorAll('.delete-blend-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    if (confirm(T('هل أنت متأكد من حذف هذا المزيج؟'))) {
                        let blends = loadSavedBlends();
                        blends = blends.filter(b => b.id !== id);
                        localStorage.setItem('jose_blends', JSON.stringify(blends));
                        document.getElementById('loadBlendsBtn').click();
                    }
                });
            });
        });

        // ============================================================
        // 141-142. BREW LOG
        // ============================================================
        function saveBrewLogEntry(entry) {
            const logs = JSON.parse(localStorage.getItem('jose_brew_logs') || '[]');
            logs.push({
                id: Date.now(),
                ...entry,
                date: new Date().toISOString()
            });
            localStorage.setItem('jose_brew_logs', JSON.stringify(logs));
            return logs;
        }

        function getBrewLogs() {
            return JSON.parse(localStorage.getItem('jose_brew_logs') || '[]');
        }

        // Populate brew log coffee select
        function populateBrewLogSelect() {
            const el = document.getElementById('brewLogCoffee');
            if (el) {
                el.innerHTML = `<option value="">اختر النوع</option>` + 
                    COFFEES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
            }
        }

        document.getElementById('saveBrewLog')?.addEventListener('click', function() {
            const coffee = document.getElementById('brewLogCoffee').value;
            const method = document.getElementById('brewLogMethod').value;
            const dose = parseFloat(document.getElementById('brewLogDose').value);
            const yield_ = parseFloat(document.getElementById('brewLogYield').value);
            const time = parseInt(document.getElementById('brewLogTime').value);
            const temp = parseInt(document.getElementById('brewLogTemp').value);
            const notes = document.getElementById('brewLogNotes').value;

            if (!coffee || !method || !dose || !yield_) {
                alert(T('الرجاء ملء جميع الحقول المطلوبة'));
                return;
            }

            const coffeeName = COFFEES.find(c => c.id === coffee)?.name || coffee;
            
            saveBrewLogEntry({
                coffee: coffeeName,
                coffeeId: coffee,
                method,
                dose,
                yield: yield_,
                time,
                temperature: temp,
                notes,
                ratio: (yield_ / dose).toFixed(1)
            });
            
            alert(T('✅ تم حفظ التجربة بنجاح!'));
            document.getElementById('brewLogNotes').value = '';
            document.getElementById('showBrewLogs').click();
        });

        document.getElementById('showBrewLogs')?.addEventListener('click', function() {
            const logs = getBrewLogs();
            const history = document.getElementById('brewLogHistory');
            const list = document.getElementById('brewLogList');
            
            if (logs.length === 0) {
                list.innerHTML = `<div style="text-align: center; padding: var(--space-lg); color: var(--coffee-brown);">${L('لا توجد تجارب مسجلة بعد', 'No experiments logged yet')}</div>`;
                history.style.display = 'block';
                return;
            }

            logs.sort((a, b) => new Date(b.date) - new Date(a.date));

            list.innerHTML = logs.map(log => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-md); border-bottom: 1px solid rgba(23,18,15,0.04);">
                    <div>
                        <div style="font-weight: 700;">${log.coffee}</div>
                        <div style="font-size: 13px; color: var(--coffee-brown);">
                            ${log.method} • ${log.dose}g → ${log.yield}g • ${L('نسبة', 'ratio')} 1:${log.ratio}
                            ${log.time ? ` • ${log.time}s` : ''}
                            ${log.temperature ? ` • ${log.temperature}°C` : ''}
                        </div>
                        ${log.notes ? `<div style="font-size: 13px; color: var(--coffee-brown); margin-top: var(--space-xs);">📝 ${log.notes}</div>` : ''}
                    </div>
                    <div style="font-size: 12px; color: var(--coffee-brown); text-align: right;">
                        ${new Date(log.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ar-EG')}
                    </div>
                </div>
            `).join('');

            document.getElementById('logTotal').textContent = logs.length;
            const avgDose = logs.reduce((sum, l) => sum + l.dose, 0) / logs.length;
            const avgYield = logs.reduce((sum, l) => sum + l.yield, 0) / logs.length;
            document.getElementById('logAvgDose').textContent = avgDose.toFixed(1);
            document.getElementById('logAvgYield').textContent = avgYield.toFixed(1);

            history.style.display = 'block';
        });

        // ============================================================
        // BREWING METHODS — DATA + RENDER (fixes previously empty #brewGrid)
        // ============================================================
        // ============================================================
        // DRINKS DATA — extracted to its own layer (was hardcoded HTML)
        // Ratios/doses here are the same standard espresso-drink ratios
        // already used elsewhere on the site (Espresso Calculator options);
        // classified as Reference, not brand-specific menu items.
        // ============================================================
        const DRINKS = [
            { id: 'espresso', name: 'إسبريسو', origin: 'إيطاليا', img: 'assets/drinks/espresso.jpg', detail: '1oz (30ml) | نسبة 1:2', source: 'Reference' },
            { id: 'ristretto', name: 'ريستريتو', origin: 'إيطاليا', img: 'assets/drinks/ristretto.jpg', detail: '0.5oz (15ml) | نسبة 1:1 أو أقل', source: 'Reference' },
            { id: 'lungo', name: 'لونجو', origin: 'إيطاليا', img: 'assets/drinks/lungo.jpg', detail: '2oz (60ml) | نسبة 1:3-1:4', source: 'Reference' },
            { id: 'macchiato', name: 'ماكياتو', origin: 'إيطاليا', img: 'assets/drinks/macchiato.jpg', detail: '1oz إسبريسو + لمسة حليب', source: 'Reference' },
            { id: 'espresso-romano', name: 'إسبريسو رومانو', origin: 'إيطاليا', img: 'assets/drinks/espresso_romano.jpg', detail: '1oz إسبريسو + ليمون', source: 'Reference' },
            { id: 'affogato', name: 'أفوجاتو', origin: 'إيطاليا', img: 'assets/drinks/affogato.jpg', detail: '1-2oz إسبريسو + آيس كريم', source: 'Reference' },
            { id: 'cortado', name: 'كورتادو', origin: 'إسبانيا', img: 'assets/drinks/cortado.jpg', detail: '1oz إسبريسو + 1oz حليب (1:1)', source: 'Reference' },
            { id: 'piccolo-latte', name: 'بيكولو لاتيه', origin: 'أستراليا', img: 'assets/drinks/piccolo_latte.jpg', detail: '1oz ريستريتو + 2oz حليب', source: 'Reference' },
            { id: 'breve', name: 'بريف', origin: 'أمريكا', img: 'assets/drinks/breve.jpg', detail: '1oz إسبريسو + 3oz كريمة نصف ونصف', source: 'Reference' },
            { id: 'flatwhite', name: 'فلات وايت', origin: 'أستراليا / نيوزيلندا', img: 'assets/drinks/flat_white.jpg', detail: '1oz إسبريسو + 2oz حليب ميكروفوم (2:1)', source: 'Reference' },
            { id: 'americano', name: 'أمريكانو', origin: 'أمريكا', img: 'assets/drinks/americano.jpg', detail: '1oz إسبريسو + 3oz ماء ساخن', source: 'Reference' },
            { id: 'long-black', name: 'لونج بلاك', origin: 'أستراليا / نيوزيلندا', img: 'assets/drinks/long_black.jpg', detail: '2oz إسبريسو فوق 3oz ماء ساخن', source: 'Reference' },
            { id: 'cafe-latte', name: 'كافيه لاتيه', origin: 'إيطاليا', img: 'assets/drinks/cafe_latte.jpg', detail: '1oz إسبريسو + 8-10oz حليب + رغوة خفيفة', source: 'Reference' },
            { id: 'cappuccino', name: 'كابتشينو', origin: 'إيطاليا', img: 'assets/drinks/cappuccino.jpg', detail: '1-2oz إسبريسو + 2oz حليب + 2oz رغوة', source: 'Reference' }
        ];

        function renderDrinks() {
            const container = document.getElementById('drinkGrid');
            if (!container) return;
            container.innerHTML = DRINKS.map(d => `
                <div class="coffee-card scroll-reveal" role="listitem" style="overflow: hidden; text-align: center;">
                    <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; background: rgba(23,18,15,0.04);">
                        <img src="${d.img}" alt="${d.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    </div>
                    <div style="padding: var(--space-md) var(--space-sm);">
                        <h4 style="font-size: 15px; margin-bottom: 2px;">${d.name}</h4>
                        <p style="font-size: 11px; color: var(--gold); margin-bottom: 4px;">${d.origin}</p>
                        <p style="font-size: 12px; color: var(--coffee-brown);">${d.detail}</p>
                    </div>
                </div>
            `).join('');
        }

        // ============================================================
        // EQUIPMENT DATA — extracted to its own layer (was hardcoded HTML)
        // General brewing-equipment reference, not brand-specific products.
        // ============================================================
        const EQUIPMENT = [
            { id: 'dripper', name: 'دريبر (V60)', icon: '', img: 'assets/equipment/dripper.jpg', level: 'متوسط', note: 'طحن: متوسط ناعم | 92-96°C | 3-4 دقائق' },
            { id: 'french-press', name: 'فرينش بريس', icon: '', img: 'assets/equipment/french_press.jpg', level: 'مبتدئ', note: 'طحن: خشن | 92-96°C | 4 دقائق' },
            { id: 'aeropress', name: 'إيروبريس', icon: '', img: 'assets/equipment/aeropress.jpg', level: 'مبتدئ', note: 'طحن: ناعم | 80-96°C | دقيقتين' },
            { id: 'moka-pot', name: 'موكا بوت', icon: '', img: 'assets/equipment/moka_pot.jpg', level: 'متوسط', note: 'طحن: متوسط ناعم | 99°C | 7 دقائق' },
            { id: 'chemex', name: 'تشيمكس', icon: '', img: 'assets/equipment/chemex.jpg', level: 'متوسط', note: 'طحن: متوسط | 92-96°C | 4-5 دقائق' },
            { id: 'syphon', name: 'سايفون', icon: '', img: 'assets/equipment/syphon.jpg', level: 'متقدم', note: 'طحن: ناعم | 90-94°C | 6-7 دقائق' },
            { id: 'turkish-pot', name: 'قهاوي (تركية)', icon: '', img: 'assets/equipment/turkish.jpg', level: 'متوسط', note: 'طحن: ناعم جداً | غليان | 3-4 دقائق' },
            { id: 'cold-brew-maker', name: 'إبريق كولد برو', icon: '', img: 'assets/equipment/cold_brew.jpg', level: 'مبتدئ', note: 'طحن: خشن جداً | ماء بارد | 12-18 ساعة' },
            { id: 'espresso-machine', name: 'آلة إسبريسو', icon: '☕', img: 'assets/equipment/espresso_machine.jpg', level: 'متقدم', note: '' },
            { id: 'grinder', name: 'مطحنة قهوة', icon: '🔄', img: 'assets/equipment/grinder.jpg', level: 'متوسط', note: '' },
            { id: 'scale', name: 'ميزان', icon: '⚖️', img: 'assets/equipment/scale.jpg', level: 'مبتدئ', note: 'دقة 0.1 جرام' },
            { id: 'kettle', name: 'غلاية', icon: '🌡️', img: 'assets/equipment/kettle.jpg', level: 'متوسط', note: '' }
        ];

        function renderEquipment() {
            const container = document.getElementById('equipmentGrid');
            if (!container) return;
            container.innerHTML = EQUIPMENT.map(e => `
                <div class="coffee-card scroll-reveal" role="listitem" style="text-align: center; overflow: hidden;">
                    ${e.img ? `
                    <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; background: rgba(23,18,15,0.04);">
                        <img src="${e.img}" alt="${e.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    </div>
                    <div style="padding: var(--space-md) var(--space-sm);">
                        <h4 style="font-size: 16px;">${e.name}</h4>
                        <p style="font-size: 12px; color: var(--gold);">${L('مستوى', 'Level')}: ${T(e.level)}</p>
                        ${e.note ? `<p style="font-size: 12px; color: var(--coffee-brown); margin-top: 4px;">${e.note}</p>` : ''}
                    </div>
                    ` : `
                    <div style="padding: var(--space-lg);">
                        <div style="font-size: 48px; margin-bottom: var(--space-sm);" aria-hidden="true">${e.icon}</div>
                        <h4 style="font-size: 18px;">${e.name}</h4>
                        <p style="font-size: 14px; color: var(--coffee-brown);">${L('مستوى', 'Level')}: ${T(e.level)}</p>
                        ${e.note ? `<p style="font-size: 13px; color: var(--coffee-brown);">${e.note}</p>` : ''}
                    </div>
                    `}
                </div>
            `).join('');
        }

        // ============================================================
        // COFFEE EDUCATION — general specialty-coffee knowledge (بند 137-138)
        // General coffee-science reference (not brand-specific claims),
        // classified as Reference per section 158.
        // ============================================================
        const EDUCATION = [
            { id: 'arabica', icon: '🌱', title: 'ما هو الأرابيكا؟', body: 'نوع البن الأكثر انتشارًا عالميًا (حوالي 60-70% من الإنتاج). يتميز بحموضة أوضح ونكهات أكثر تعقيدًا، ونسبة كافيين أقل من الروبوستا.' },
            { id: 'robusta', icon: '🌿', title: 'ما هو الروبوستا؟', body: 'نوع بن أقوى وأكثر مرارة، بكافيين أعلى بمرتين تقريبًا من الأرابيكا. غالبًا يُستخدم في مزيجات الإسبريسو لإضافة القوام والـCrema.' },
            { id: 'natural', icon: '☀️', title: 'ما هي المعالجة الطبيعية (Natural)؟', body: 'تُجفَّف حبة القهوة كاملة (مع القشرة الخارجية) تحت الشمس. تعطي حلاوة ونكهات فاكهية واضحة وقوام أثقل.' },
            { id: 'washed', icon: '💧', title: 'ما هي المعالجة المغسولة (Washed)؟', body: 'تُزال قشرة الثمرة قبل التجفيف عبر الغسيل بالماء. تنتج قهوة أنظف طعمًا وحموضة أوضح مع شفافية أكبر في النكهات.' },
            { id: 'body', icon: '🥛', title: 'ما هو القوام (Body)؟', body: 'الإحساس بثقل أو خفة القهوة في الفم — من خفيف كالشاي إلى ثقيل وكثيف كالقشدة. يتأثر بطريقة التحضير ونوع البن.' },
            { id: 'acidity', icon: '🍋', title: 'ما هي الحموضة (Acidity)؟', body: 'الإحساس المنعش واللامع في القهوة — ليست حموضة معدة، بل صفة نكهة مرغوبة تشبه حموضة الفواكه، وتكون أوضح في البن فاتح التحميص.' },
            { id: 'aftertaste', icon: '👅', title: 'ما هو الأفترتيست (Aftertaste)؟', body: 'الطعم المتبقي في الفم بعد البلع — قد يكون قصيرًا أو ممتدًا، حلوًا أو مرًا، وهو مؤشر مهم على جودة الاستخلاص.' },
            { id: 'grind-extraction', icon: '⚙️', title: 'كيف تؤثر درجة الطحن على الاستخلاص؟', body: 'الطحن الأنعم يزيد سطح التلامس مع الماء فيسرّع الاستخلاص (مناسب للإسبريسو)، والطحن الأخشن يبطئه (مناسب للفرينش بريس وCold Brew). طحن خاطئ = استخلاص ناقص أو زائد.' },
            { id: 'dial-in', icon: '🎯', title: 'كيف تضبط (Dial In) الإسبريسو؟', body: 'اضبط متغيرًا واحدًا فقط في كل مرة (الطحن أو الجرعة أو الوقت) وقارن النتيجة بالطعم. استخدم أداة "ضبط الإسبريسو" أدناه للحصول على تشخيص فوري.' }
        ];

        function renderEducation() {
            const container = document.getElementById('educationList');
            if (!container) return;
            container.innerHTML = EDUCATION.map((e, i) => `
                <div class="coffee-card" role="listitem" style="padding: 0; overflow: hidden;">
                    <button class="edu-toggle" data-edu="${i}" aria-expanded="false" aria-controls="edu-body-${i}"
                        style="width: 100%; display: flex; align-items: center; gap: var(--space-sm); padding: var(--space-md) var(--space-lg); background: transparent; border: none; cursor: pointer; text-align: ${L('right', 'left')}; font-family: inherit; color: inherit;">
                        <span aria-hidden="true" style="font-size: 22px;">${e.icon}</span>
                        <span style="flex: 1; font-weight: 700; font-size: 15px;">${e.title}</span>
                        <span aria-hidden="true" class="edu-chevron" style="transition: transform var(--transition-fast);">˅</span>
                    </button>
                    <div id="edu-body-${i}" class="edu-body" style="max-height: 0; overflow: hidden; transition: max-height var(--transition-medium);">
                        <p style="padding: 0 var(--space-lg) var(--space-md) 52px; font-size: 14px; color: var(--coffee-brown); line-height: 1.7;">${e.body}</p>
                    </div>
                </div>
            `).join('');
            container.querySelectorAll('.edu-toggle').forEach(btn => {
                btn.addEventListener('click', function() {
                    const body = document.getElementById('edu-body-' + this.dataset.edu);
                    const expanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', String(!expanded));
                    body.style.maxHeight = expanded ? '0' : body.scrollHeight + 'px';
                    this.querySelector('.edu-chevron').style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
                });
            });
        }

        const BREW_METHODS = [
            {
                id: 'espresso', name: 'إسبريسو', nameEn: 'Espresso', icon: '☕', img: 'assets/equipment/espresso_machine.jpg',
                dose: '18 جرام', water: '36 جرام', ratio: '1:2', temperature: '92-94°C',
                grind: 'ناعم', time: '27-30 ثانية',
                equipment: ['آلة إسبريسو', 'مطحنة', 'ميزان'], difficulty: 'متقدم',
                flavorResult: 'مركز، غني، كريمي',
                steps: ['سخن الآلة والمجموعة', 'اطحن 18 جرام من القهوة طحناً ناعماً', 'وزع القهوة بالتساوي في السلة', 'اضغط القهوة بضغط ثابت', 'شغل الاستخلاص لمدة 27-30 ثانية', 'استهدف ناتج 36 جرام'],
                tips: 'استخدم قهوة طازجة مطحونة قبل الاستخلاص مباشرة'
            },
            {
                id: 'v60', name: 'V60', nameEn: 'V60 Pour Over', icon: '🫖', img: 'assets/equipment/dripper.jpg',
                dose: '20 جرام', water: '320 مل', ratio: '1:16', temperature: '93°C',
                grind: 'متوسط ناعم', time: '2-3 دقائق',
                equipment: ['فلتر V60', 'إبريق', 'ميزان', 'غلاية'], difficulty: 'متوسط',
                flavorResult: 'نظيف، متوازن، معقد',
                steps: ['اشطف الفلتر بالماء الساخن', 'أضف 20 جرام من القهوة المطحونة', 'قم بالتخمير الأولي بـ 40 مل لمدة 30 ثانية', 'صب الماء تدريجياً بحركات دائرية', 'استمر حتى تصل إلى 320 مل', 'اترك القهوة تتصفى لمدة 2-3 دقائق'],
                tips: 'استخدم ماء بدرجة حرارة 93°C للنتائج المثالية'
            },
            {
                id: 'french-press', name: 'فرينش بريس', nameEn: 'French Press', icon: '🫗', img: 'assets/equipment/french_press.jpg',
                dose: '30 جرام', water: '360 مل', ratio: '1:12', temperature: '94°C',
                grind: 'خشن', time: '4 دقائق',
                equipment: ['فرينش بريس', 'ميزان', 'غلاية'], difficulty: 'مبتدئ',
                flavorResult: 'غني، ممتلئ الجسم، زيتي',
                steps: ['أضف 30 جرام من القهوة المطحونة خشناً', 'صب 360 مل من الماء الساخن 94°C', 'حرك القهوة لمدة 30 ثانية', 'غطِ واتركها تنقع لمدة 4 دقائق', 'اضغط المكبس ببطء', 'صب فوراً وقدمها'],
                tips: 'اضغط المكبس ببطء لتجنب الخلط الزائد'
            },
            {
                id: 'turkish', name: 'قهوة تركية', nameEn: 'Turkish Coffee', icon: '🏺', img: 'assets/equipment/turkish.jpg',
                dose: '10 جرام', water: '75 مل', ratio: '1:7.5', temperature: 'غليان',
                grind: 'ناعم جداً', time: '3-4 دقائق',
                equipment: ['قهاوي', 'ملعقة', 'ميزان'], difficulty: 'متوسط',
                flavorResult: 'غني، كثيف، تقليدي',
                steps: ['ضع الماء والقهوة في القهاوي', 'حرك حتى تذوب القهوة تماماً', 'ضع القهاوي على نار هادئة', 'عندما ترتفع الرغوة، ارفعها عن النار', 'أعد الكرّة مرتين أو ثلاث', 'صب في الفناجين واتركها تترسب'],
                tips: 'لا تحرك القهاوي أثناء الغليان لتجنب تكسير الرغوة'
            },
            {
                id: 'chemex', name: 'تشيمكس', nameEn: 'Chemex', icon: '🧪', img: 'assets/equipment/chemex.jpg',
                dose: '22 جرام', water: '374 مل', ratio: '1:17', temperature: '93°C',
                grind: 'متوسط خشن', time: '3-4 دقائق',
                equipment: ['تشيمكس', 'فلتر', 'ميزان', 'غلاية'], difficulty: 'متوسط',
                flavorResult: 'نظيف، هش، معقد',
                steps: ['اشطف الفلتر بالماء الساخن', 'أضف 22 جرام من القهوة المطحونة', 'قم بالتخمير الأولي بـ 44 مل لمدة 30 ثانية', 'صب الماء على مرحلتين أو ثلاث', 'استمر حتى تصل إلى 374 مل', 'اترك القهوة تتصفى بالكامل'],
                tips: 'استخدم فلتر التشيمكس المخصص للحصول على أفضل النتائج'
            },
            {
                id: 'cold-brew', name: 'كولد برو', nameEn: 'Cold Brew', icon: '🧊', img: 'assets/equipment/cold_brew.jpg',
                dose: '100 جرام', water: '1000 مل', ratio: '1:10', temperature: 'ماء بارد / غرفة',
                grind: 'خشن جداً', time: '12-18 ساعة',
                equipment: ['إبريق أو مرطبان', 'فلتر أو مصفاة قماش'], difficulty: 'مبتدئ',
                flavorResult: 'ناعم، حلو، حموضة منخفضة',
                steps: ['اطحن القهوة طحناً خشناً جداً', 'اخلطها مع الماء البارد في إبريق', 'غطِ واترك في الثلاجة 12-18 ساعة', 'صفِّ المزيج جيداً', 'خفف بالماء أو الحليب حسب الرغبة قبل التقديم'],
                tips: 'كلما زادت مدة النقع زادت الكثافة — جرّب واضبط حسب ذوقك'
            }
        ];

        function renderBrewMethods() {
            const container = document.getElementById('brewGrid');
            if (!container) return;
            container.innerHTML = BREW_METHODS.map(method => `
                <div class="coffee-card scroll-reveal" onclick="openBrewDetail('${method.id}')" style="cursor: pointer; overflow: hidden;">
                    ${method.img ? `
                    <div style="width: 100%; aspect-ratio: 4/3; overflow: hidden; background: rgba(23,18,15,0.04);">
                        <img src="${method.img}" alt="${method.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                    </div>` : ''}
                    <div style="padding: var(--space-lg); text-align: center;">
                        ${method.img ? '' : `<div style="font-size: 48px; margin-bottom: var(--space-sm);">${method.icon}</div>`}
                        <h3 style="font-size: 18px; margin-bottom: var(--space-xs);">${method.name}</h3>
                        <div style="font-size: 14px; color: var(--coffee-brown);">${method.nameEn}</div>
                        <div style="margin: var(--space-sm) 0; display: flex; flex-wrap: wrap; gap: 4px; justify-content: center;">
                            <span style="font-size: 11px; padding: 2px 12px; background: rgba(90,56,40,0.08); border-radius: 12px;">${method.difficulty}</span>
                            <span style="font-size: 11px; padding: 2px 12px; background: rgba(90,56,40,0.08); border-radius: 12px;">${method.ratio}</span>
                        </div>
                        <div style="font-size: 13px; color: var(--coffee-brown);">${method.flavorResult}</div>
                    </div>
                </div>
            `).join('');
        }

        function openBrewDetail(id) {
            const method = BREW_METHODS.find(m => m.id === id);
            if (!method) return;
            const modal = document.createElement('div');
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modal.setAttribute('aria-label', method.name);
            modal.style.cssText = `position: fixed; inset: 0; z-index: 10000; background: rgba(23,18,15,0.95); display: flex; align-items: center; justify-content: center; padding: var(--space-xl); animation: fadeIn 400ms ease;`;
            modal.innerHTML = `
                <div style="background: var(--beige); max-width: 700px; width: 100%; border-radius: var(--radius-lg); padding: var(--space-2xl); max-height: 90vh; overflow-y: auto;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-lg);">
                        <div>
                            ${method.img ? `<img src="${method.img}" alt="${method.name}" style="width: 64px; height: 64px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: var(--space-xs);">` : `<div style="font-size: 48px;">${method.icon}</div>`}
                            <h2 style="font-size: 24px;">${method.name}</h2>
                            <div style="color: var(--coffee-brown);">${method.nameEn}</div>
                        </div>
                        <button class="brew-detail-close" style="background: none; border: none; font-size: 28px; cursor: pointer; color: var(--coffee-brown);">&times;</button>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-lg);">
                        <div style="padding: var(--space-sm); background: rgba(23,18,15,0.04); border-radius: var(--radius-sm);"><div style="font-size: 11px; color: var(--coffee-brown);">الجرعة</div><div style="font-weight: 700;">${method.dose}</div></div>
                        <div style="padding: var(--space-sm); background: rgba(23,18,15,0.04); border-radius: var(--radius-sm);"><div style="font-size: 11px; color: var(--coffee-brown);">الماء</div><div style="font-weight: 700;">${method.water}</div></div>
                        <div style="padding: var(--space-sm); background: rgba(23,18,15,0.04); border-radius: var(--radius-sm);"><div style="font-size: 11px; color: var(--coffee-brown);">النسبة</div><div style="font-weight: 700;">${method.ratio}</div></div>
                        <div style="padding: var(--space-sm); background: rgba(23,18,15,0.04); border-radius: var(--radius-sm);"><div style="font-size: 11px; color: var(--coffee-brown);">درجة الحرارة</div><div style="font-weight: 700;">${method.temperature}</div></div>
                        <div style="padding: var(--space-sm); background: rgba(23,18,15,0.04); border-radius: var(--radius-sm);"><div style="font-size: 11px; color: var(--coffee-brown);">الطحن</div><div style="font-weight: 700;">${method.grind}</div></div>
                        <div style="padding: var(--space-sm); background: rgba(23,18,15,0.04); border-radius: var(--radius-sm);"><div style="font-size: 11px; color: var(--coffee-brown);">الوقت</div><div style="font-weight: 700;">${method.time}</div></div>
                    </div>
                    <div style="margin-bottom: var(--space-lg);">
                        <div style="font-size: 14px; font-weight: 700; margin-bottom: var(--space-sm);">المعدات</div>
                        <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">${method.equipment.map(e => `<span style="padding: 4px 14px; background: rgba(90,56,40,0.08); border-radius: 12px; font-size: 13px;">${e}</span>`).join('')}</div>
                    </div>
                    <div style="margin-bottom: var(--space-lg);">
                        <div style="font-size: 14px; font-weight: 700; margin-bottom: var(--space-sm);">خطوات التحضير</div>
                        <ol style="list-style: none; padding: 0;">${method.steps.map((step, i) => `<li style="padding: var(--space-sm) 0; border-bottom: 1px solid rgba(23,18,15,0.04); display: flex; align-items: start; gap: var(--space-sm);"><span style="background: var(--coffee-brown); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;">${i + 1}</span><span>${step}</span></li>`).join('')}</ol>
                    </div>
                    <div style="padding: var(--space-md); background: rgba(90,56,40,0.06); border-radius: var(--radius-sm);">
                        <div style="font-size: 14px; font-weight: 700; margin-bottom: var(--space-xs);">💡 نصيحة</div>
                        <div style="color: var(--coffee-brown);">${method.tips}</div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
            modal.querySelector('.brew-detail-close').addEventListener('click', () => modal.remove());
        }

        // ============================================================
        // PRODUCT STORYTELLING (extends COFFEES with narrative fields)
        // NOTE: only 5 IDs have hand-written stories from the source
        // material; the rest use a graceful generic fallback and are
        // flagged NEEDS_REVIEW for a future content pass.
        // ============================================================
        function getCoffeeStory(id) {
            const stories = {
                'jose-espresso': 'إسبريسو خوسيه هو مزيج مثالي من الحموضة العالية والقوام الكريمي، مستوحى من التقاليد الإيطالية العريقة.'
            };
            return stories[id] || 'NEEDS_REVIEW: قصة هذا الصنف لم تُستخرج بعد من المصدر الأصلي.';
        }
        COFFEES.forEach(coffee => { coffee.story = getCoffeeStory(coffee.id); });

        // ============================================================
        // CALCULATION ENGINE — shared math utilities + self-tests
        // ============================================================
        const CoffeeCalc = {
            calculateBrewRatio: function(dose, yield_) { if (!dose || dose <= 0) return null; return parseFloat((yield_ / dose).toFixed(1)); },
            calculateWater: function(dose, ratio) { if (!dose || dose <= 0 || !ratio || ratio <= 0) return null; return Math.round(dose * ratio); },
            calculateYield: function(dose, ratio) { if (!dose || dose <= 0 || !ratio || ratio <= 0) return null; return parseFloat((dose * ratio).toFixed(1)); },
            calculateExtractionYield: function(beverage, tds, dose) { if (!beverage || beverage <= 0 || !tds || tds <= 0 || !dose || dose <= 0) return null; return parseFloat(((beverage * tds) / dose * 100).toFixed(1)); },
            calculateBatch: function(blendData, batchSize) { return blendData.map(b => ({ ...b, weight: Math.round(batchSize * (b.percentage / 100)) })); },
            calculateMatchScore: function(userPrefs, coffee) {
                const weights = { body: 20, acidity: 20, sweetness: 20, fruitiness: 15, chocolate: 15, caramel: 10 };
                let score = 0, totalWeight = 0;
                for (let key in weights) {
                    if (userPrefs[key] !== undefined && coffee.profile[key] !== undefined) {
                        const diff = Math.abs(userPrefs[key] - coffee.profile[key]) / 10;
                        score += (1 - diff) * weights[key];
                        totalWeight += weights[key];
                    }
                }
                return totalWeight > 0 ? Math.round((score / totalWeight) * 100) : 0;
            }
        };

        function runCalculationTests() {
            const tests = [];
            tests.push({ name: 'Brew Ratio (18→36 = 1:2)', pass: CoffeeCalc.calculateBrewRatio(18, 36) === 2 });
            tests.push({ name: 'Water (20×16 = 320)', pass: CoffeeCalc.calculateWater(20, 16) === 320 });
            tests.push({ name: 'Yield (18×2 = 36)', pass: CoffeeCalc.calculateYield(18, 2) === 36 });
            tests.push({ name: 'Zero dose guarded', pass: CoffeeCalc.calculateYield(0, 2) === null });
            tests.push({ name: 'Negative dose guarded', pass: CoffeeCalc.calculateYield(-5, 2) === null });
            const batch = CoffeeCalc.calculateBatch([{ percentage: 50 }, { percentage: 50 }], 1000);
            tests.push({ name: 'Batch 50/50 of 1000g', pass: batch.every(b => b.weight === 500) });
            const passed = tests.filter(t => t.pass).length;
            console.log(`🧮 Calculation Engine: ${passed}/${tests.length} tests passed`);
            tests.filter(t => !t.pass).forEach(t => console.warn('  ❌', t.name));
            return { passed, total: tests.length };
        }

        // ============================================================
        // ACCESSIBILITY & MOTION
        // ============================================================
        function checkReducedMotion() {
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (prefersReduced.matches) document.body.classList.add('reduced-motion');
            prefersReduced.addEventListener('change', (e) => {
                document.body.classList.toggle('reduced-motion', e.matches);
            });
        }

        // ============================================================
        // LAZY IMAGE LOADING
        // ============================================================
        function initLazyLoading() {
            if ('IntersectionObserver' in window) {
                const images = document.querySelectorAll('img[loading="lazy"]');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('loaded');
                            observer.unobserve(entry.target);
                        }
                    });
                });
                images.forEach(img => observer.observe(img));
            }
        }

        // ============================================================
        // PWA — offline data cache (works even without a manifest/SW)
        // ============================================================
        const STORAGE_KEYS = {
            COFFEE_DATA: 'jose_coffee_data', DATA_VERSION: 'jose_data_version',
            BLENDS: 'jose_blends', BREW_LOGS: 'jose_brew_logs',
            FAVORITES: 'jose_favorites', RECENT: 'jose_recent', BREW_STATS: 'jose_brew_stats'
        };
        function cacheCoffeeData() {
            try {
                localStorage.setItem(STORAGE_KEYS.COFFEE_DATA, JSON.stringify(COFFEES));
                localStorage.setItem(STORAGE_KEYS.DATA_VERSION, '1.0.0');
            } catch (e) { /* storage unavailable — ignore silently */ }
        }
        function validateStoredData() {
            Object.values(STORAGE_KEYS).forEach(key => {
                try { const d = localStorage.getItem(key); if (d) JSON.parse(d); }
                catch (e) { localStorage.removeItem(key); }
            });
        }
        function registerServiceWorker() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('sw.js').catch(() => {
                    // No sw.js present in this deployment — safe to ignore.
                });
            }
        }

        // ============================================================
        // "ADD TO HOME SCREEN" INSTALL BANNER
        // ============================================================
        const INSTALL_DISMISS_KEY = 'jossee_install_dismissed_at';
        const INSTALL_DISMISS_DAYS = 14; // don't re-nag for 2 weeks after a dismissal

        function isRunningStandalone() {
            return window.matchMedia('(display-mode: standalone)').matches ||
                   window.navigator.standalone === true; // iOS Safari flag
        }

        function wasRecentlyDismissed() {
            try {
                const at = parseInt(localStorage.getItem(INSTALL_DISMISS_KEY) || '0', 10);
                if (!at) return false;
                const days = (Date.now() - at) / (1000 * 60 * 60 * 24);
                return days < INSTALL_DISMISS_DAYS;
            } catch (e) { return false; }
        }

        function showInstallBanner() {
            const banner = document.getElementById('installBanner');
            if (!banner) return;
            banner.hidden = false;
            // next frame, so the transform transition actually runs
            requestAnimationFrame(() => {
                banner.classList.add('show');
                document.documentElement.style.setProperty('--install-banner-offset', banner.offsetHeight + 'px');
            });
        }

        function hideInstallBanner() {
            const banner = document.getElementById('installBanner');
            if (!banner) return;
            banner.classList.remove('show');
            document.documentElement.style.setProperty('--install-banner-offset', '0px');
            setTimeout(() => { banner.hidden = true; }, 400);
        }

        function dismissInstallBanner() {
            try { localStorage.setItem(INSTALL_DISMISS_KEY, String(Date.now())); } catch (e) {}
            hideInstallBanner();
        }

        function setupInstallBanner() {
            if (isRunningStandalone() || wasRecentlyDismissed()) return;

            const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
                          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS 13+
            const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);

            const titleEl = document.getElementById('installBannerTitle');
            const subEl = document.getElementById('installBannerSubtitle');
            const actionBtn = document.getElementById('installBannerAction');
            const closeBtn = document.getElementById('installBannerClose');
            if (!actionBtn || !closeBtn) return;

            closeBtn.addEventListener('click', dismissInstallBanner);

            let deferredPrompt = null;

            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                if (titleEl) titleEl.textContent = L('ثبّت تطبيق Jossee Coffee', 'Install the Jossee Coffee app');
                if (subEl) subEl.textContent = L('وصول أسرع، وتجربة بملء الشاشة من غير المتصفح', 'Faster access, full-screen — no browser needed');
                actionBtn.textContent = L('تثبيت', 'Install');
                showInstallBanner();
            });

            actionBtn.addEventListener('click', async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    await deferredPrompt.userChoice;
                    deferredPrompt = null;
                    hideInstallBanner();
                } else if (isIOS && isSafari) {
                    // iOS has no programmatic install prompt — the button itself
                    // just re-states the manual steps rather than doing nothing.
                    if (subEl) subEl.textContent = L(
                        'اضغط زر المشاركة ⬆️ في الأسفل، ثم "إضافة إلى الشاشة الرئيسية"',
                        'Tap the Share ⬆️ button below, then "Add to Home Screen"'
                    );
                }
            });

            // iOS Safari never fires beforeinstallprompt — show manual instructions instead.
            if (isIOS && isSafari) {
                if (titleEl) titleEl.textContent = L('ثبّت تطبيق Jossee Coffee', 'Install the Jossee Coffee app');
                if (subEl) subEl.textContent = L(
                    'اضغط زر المشاركة ⬆️ ثم "إضافة إلى الشاشة الرئيسية"',
                    'Tap the Share ⬆️ button, then "Add to Home Screen"'
                );
                actionBtn.textContent = L('كيف؟', 'How?');
                setTimeout(showInstallBanner, 2500); // let the page settle first
            }
        }

        // ============================================================
        // FINAL QA CHECKLIST (dev-console only, no UI impact)
        // ============================================================
        window.addEventListener('error', (e) => { console.error('⚠️ Runtime error:', e.message); });

        function runFinalQA() {
            const checks = [
                { test: 'Coffee catalog renders', pass: !!document.querySelector('.coffee-card') },
                { test: 'Brew grid renders', pass: document.querySelectorAll('#brewGrid .coffee-card').length > 0 },
                { test: 'Footer exists', pass: !!document.querySelector('.footer') },
                { test: 'All coffees have prices', pass: COFFEES.every(c => c.price) },
                { test: 'All coffees have origins', pass: COFFEES.every(c => c.origin) }
            ];
            const passed = checks.filter(c => c.pass).length;
            console.log(`✅ Final QA: ${passed}/${checks.length} checks passed`);
            checks.filter(c => !c.pass).forEach(c => console.warn('  ❌', c.test));
        }

        // ============================================================
        // CART
        // ============================================================
        let cart = [];
        try { cart = JSON.parse(localStorage.getItem('jossee-cart')) || []; } catch (e) { cart = []; }

        function saveCart() {
            try { localStorage.setItem('jossee-cart', JSON.stringify(cart)); } catch (e) {}
        }

        function addToCart(coffeeId, qty) {
            const coffee = coffeeMap[coffeeId];
            if (!coffee) return;
            qty = Math.max(1, parseInt(qty, 10) || 1);
            const existing = cart.find(item => item.id === coffeeId);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id: coffeeId, qty });
            }
            saveCart();
            updateCartBadge();
            renderCartModal();
        }

        function removeFromCart(coffeeId) {
            cart = cart.filter(item => item.id !== coffeeId);
            saveCart();
            updateCartBadge();
            renderCartModal();
        }

        function updateCartItemQty(coffeeId, delta) {
            const item = cart.find(i => i.id === coffeeId);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) {
                removeFromCart(coffeeId);
                return;
            }
            saveCart();
            updateCartBadge();
            renderCartModal();
        }

        function clearCart() {
            cart = [];
            saveCart();
            updateCartBadge();
            renderCartModal();
        }

        function calculateCartTotal() {
            return cart.reduce((sum, item) => {
                const coffee = coffeeMap[item.id];
                return coffee ? sum + (coffee.price * item.qty) : sum;
            }, 0);
        }

        function updateCartBadge() {
            const badge = document.getElementById('cartBadge');
            if (!badge) return;
            const count = cart.reduce((s, i) => s + i.qty, 0);
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }

        function renderCartModal() {
            const list = document.getElementById('cartItemsList');
            const summaryWrap = document.getElementById('cartSummaryWrap');
            if (!list) return;

            if (cart.length === 0) {
                list.innerHTML = `<div class="cart-empty">🛒<br>${T('السلة فارغة حالياً')}</div>`;
                summaryWrap.style.display = 'none';
                return;
            }

            list.innerHTML = cart.map(item => {
                const coffee = coffeeMap[item.id];
                if (!coffee) return '';
                return `
                    <div class="cart-item-row">
                        <img src="${getCoffeeImage(coffee.id)}" alt="${T(coffee.name)}">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${T(coffee.name)}</div>
                            <div class="cart-item-meta">${coffee.price}${L(' ج', ' EGP')} × ${coffee.weight}${L('جم', 'g')}</div>
                        </div>
                        <div class="cart-qty-stepper">
                            <button type="button" onclick="updateCartItemQty('${coffee.id}', -1)">−</button>
                            <span style="min-width: 18px; text-align:center; font-weight:700;">${item.qty}</span>
                            <button type="button" onclick="updateCartItemQty('${coffee.id}', 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart('${coffee.id}')" aria-label="حذف">🗑️</button>
                    </div>
                `;
            }).join('');

            document.getElementById('cartTotal').textContent = calculateCartTotal() + L(' ج', ' EGP');
            summaryWrap.style.display = 'block';
        }

        function openCartModal() {
            renderCartModal();
            document.getElementById('cart-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCartModal() {
            document.getElementById('cart-modal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function buildWhatsAppCheckoutMessage() {
            const lines = [L('مرحباً، أريد طلب:', 'Hi, I would like to order:'), ''];
            cart.forEach(item => {
                const coffee = coffeeMap[item.id];
                if (!coffee) return;
                lines.push(`• ${coffee.name} (${coffee.weight} ${L('جم', 'g')}) × ${item.qty} = ${coffee.price * item.qty} ${L('ج', 'EGP')}`);
            });
            lines.push('');
            lines.push(`${L('الإجمالي التقريبي', 'Approximate total')}: ${calculateCartTotal()} ${L('ج', 'EGP')}`);
            const notes = document.getElementById('cartNotes').value.trim();
            if (notes) {
                lines.push('');
                lines.push(`${L('ملاحظات', 'Notes')}: ${notes}`);
            }
            return lines.join('\n');
        }

        document.getElementById('cartNavBtn')?.addEventListener('click', openCartModal);
        document.getElementById('closeCartBtn')?.addEventListener('click', closeCartModal);
        document.getElementById('cart-modal')?.addEventListener('click', function(e) {
            if (e.target === this) closeCartModal();
        });
        document.getElementById('clearCartBtn')?.addEventListener('click', function() {
            if (cart.length === 0) return;
            if (confirm(L('هل تريد إفراغ السلة؟', 'Clear the cart?'))) clearCart();
        });
        document.getElementById('checkoutWhatsappBtn')?.addEventListener('click', function() {
            if (cart.length === 0) return;
            const message = buildWhatsAppCheckoutMessage();
            window.open(`https://wa.me/201281300002?text=${encodeURIComponent(message)}`, '_blank');
        });

        // Quantity stepper + add-to-cart inside the coffee detail modal
        document.getElementById('detailQtyMinus')?.addEventListener('click', function() {
            const el = document.getElementById('detailQtyValue');
            el.textContent = Math.max(1, parseInt(el.textContent, 10) - 1);
        });
        document.getElementById('detailQtyPlus')?.addEventListener('click', function() {
            const el = document.getElementById('detailQtyValue');
            el.textContent = parseInt(el.textContent, 10) + 1;
        });
        document.getElementById('detailAddToCartBtn')?.addEventListener('click', function() {
            if (!currentDetailCoffeeId) return;
            const qty = parseInt(document.getElementById('detailQtyValue').textContent, 10) || 1;
            addToCart(currentDetailCoffeeId, qty);
            const btn = this;
            const original = btn.textContent;
            btn.textContent = L('✅ أُضيف للسلة', '✅ Added to cart');
            setTimeout(() => { btn.textContent = original; }, 1500);
        });

        // ============================================================
        // WISHLIST
        // ============================================================
        let wishlist = [];
        let currentDetailCoffeeId = null;
        try { wishlist = JSON.parse(localStorage.getItem('jossee-wishlist')) || []; } catch (e) { wishlist = []; }

        function toggleWishlist(coffeeId) {
            const btn = document.getElementById('wishlistBtn');
            const icon = document.getElementById('wishlistIcon');
            if (wishlist.includes(coffeeId)) {
                wishlist = wishlist.filter(id => id !== coffeeId);
                btn.classList.remove('active');
                icon.textContent = '♡';
            } else {
                wishlist.push(coffeeId);
                btn.classList.add('active');
                icon.textContent = '♥';
            }
            try { localStorage.setItem('jossee-wishlist', JSON.stringify(wishlist)); } catch (e) {}
            document.querySelectorAll(`.wishlist-card-badge[data-id="${coffeeId}"]`).forEach(b => {
                b.classList.toggle('active', wishlist.includes(coffeeId));
                b.textContent = wishlist.includes(coffeeId) ? '♥' : '♡';
            });
        }

        function updateWishlistUI(coffeeId) {
            const btn = document.getElementById('wishlistBtn');
            const icon = document.getElementById('wishlistIcon');
            if (!btn) return;
            const isSaved = wishlist.includes(coffeeId);
            btn.classList.toggle('active', isSaved);
            icon.textContent = isSaved ? '♥' : '♡';
        }

        document.getElementById('wishlistBtn')?.addEventListener('click', function() {
            if (currentDetailCoffeeId) toggleWishlist(currentDetailCoffeeId);
        });

        // ============================================================
        // REVIEWS
        // ============================================================
        let reviews = {};
        try { reviews = JSON.parse(localStorage.getItem('jossee-reviews')) || {}; } catch (e) { reviews = {}; }

        function getAllReviewsFlat() {
            return Object.values(reviews).flat();
        }

        function getOverallAverageRating() {
            const all = getAllReviewsFlat();
            if (all.length === 0) return null;
            return all.reduce((sum, r) => sum + r.rating, 0) / all.length;
        }

        function displayReviews(coffeeId) {
            const container = document.getElementById('reviewsList');
            const summaryWrap = document.getElementById('reviewsSummary');
            const coffeeReviews = (reviews[coffeeId] || []).slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

            if (coffeeReviews.length === 0) {
                summaryWrap.style.display = 'none';
                container.innerHTML = '<p style="text-align: center; color: var(--coffee-brown); opacity: 0.7; font-size: 14px;">لا توجد تقييمات بعد — كن أول من يقيّم</p>';
                return;
            }

            const avg = coffeeReviews.reduce((s, r) => s + r.rating, 0) / coffeeReviews.length;
            document.getElementById('reviewsAvg').textContent = avg.toFixed(1);
            document.getElementById('reviewsAvgStars').textContent = '★'.repeat(Math.round(avg)) + '☆'.repeat(5 - Math.round(avg));
            document.getElementById('reviewsCount').textContent = `${coffeeReviews.length} تقييم`;
            summaryWrap.style.display = 'flex';

            container.innerHTML = coffeeReviews.map(review => `
                <div class="review-card">
                    <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    <p>${T(review.text)}</p>
                    <span class="reviewer">— ${T(review.name)}</span>
                </div>
            `).join('');
        }

        function submitReview(event, coffeeId) {
            event.preventDefault();
            const rating = parseInt(document.getElementById('ratingValue').value, 10);
            const text = document.getElementById('reviewText').value.trim();
            const name = document.getElementById('reviewerName').value.trim() || 'مجهول';

            if (!rating) { alert(L('من فضلك اختر تقييماً', 'Please choose a rating')); return; }
            if (!text) { alert(L('من فضلك اكتب تعليقاً', 'Please write a comment')); return; }

            if (!reviews[coffeeId]) reviews[coffeeId] = [];
            reviews[coffeeId].push({ rating, text, name, timestamp: new Date().toISOString() });
            try { localStorage.setItem('jossee-reviews', JSON.stringify(reviews)); } catch (e) {}

            document.getElementById('reviewForm').reset();
            document.getElementById('ratingValue').value = 0;
            document.querySelectorAll('#starRating .star').forEach(s => { s.classList.remove('active'); s.style.color = '#ddd'; });

            displayReviews(coffeeId);
            updateTrustBadges();
        }

        document.getElementById('reviewForm')?.addEventListener('submit', function(e) {
            if (currentDetailCoffeeId) submitReview(e, currentDetailCoffeeId);
        });

        document.addEventListener('DOMContentLoaded', function() {
            const stars = document.querySelectorAll('#starRating .star');
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const value = star.dataset.value;
                    document.getElementById('ratingValue').value = value;
                    stars.forEach((s, idx) => s.classList.toggle('active', idx < value));
                });
                star.addEventListener('mouseover', () => {
                    const value = star.dataset.value;
                    stars.forEach((s, idx) => { s.style.color = idx < value ? 'var(--gold)' : '#ddd'; });
                });
            });
            document.getElementById('starRating')?.addEventListener('mouseout', () => {
                const active = document.getElementById('ratingValue').value;
                stars.forEach((s, idx) => { s.style.color = idx < active ? 'var(--gold)' : '#ddd'; });
            });
        });

        // ============================================================
        // RELATED COFFEES
        // ============================================================
        function findRelatedCoffees(currentCoffeeId, limit = 3) {
            const current = coffeeMap[currentCoffeeId];
            if (!current) return [];
            return Object.values(coffeeMap)
                .filter(c => {
                    if (c.id === currentCoffeeId) return false;
                    if (c.origin === current.origin) return true;
                    const sharedFlavors = (c.tastingNotes || []).filter(n => (current.tastingNotes || []).includes(n)).length;
                    return sharedFlavors >= 2;
                })
                .slice(0, limit);
        }

        function displayRelatedCoffees(coffeeId) {
            const related = findRelatedCoffees(coffeeId, 3);
            const container = document.getElementById('relatedCoffees');
            if (related.length === 0) {
                container.innerHTML = `<p style="color: var(--coffee-brown); opacity: 0.7; font-size: 13px;">${T('لا توجد قهوات مشابهة')}</p>`;
                return;
            }
            container.innerHTML = related.map(coffee => `
                <div class="related-card" onclick="openCoffeeDetail('${coffee.id}')">
                    <img src="${getCoffeeImage(coffee.id)}" alt="${coffee.name}" loading="lazy">
                    <div class="related-card-name">${T(coffee.name)}</div>
                    <div class="related-card-origin">${T(coffee.origin)}</div>
                </div>
            `).join('');
        }

        // ============================================================
        // TRUST / INFO BADGES
        // ============================================================
        function updateTrustBadges() {
            const varietiesEl = document.getElementById('badgeVarieties');
            if (varietiesEl) varietiesEl.textContent = COFFEES.length + '+';

            const ratingEl = document.getElementById('badgeRating');
            if (ratingEl) {
                const avg = getOverallAverageRating();
                ratingEl.textContent = avg ? avg.toFixed(1) + '★' : L('جديد', 'New');
            }
        }

        // ============================================================
        // NEWSLETTER
        // ============================================================
        let subscribers = [];
        try { subscribers = JSON.parse(localStorage.getItem('jossee-subscribers')) || []; } catch (e) { subscribers = []; }

        document.getElementById('newsletterForm')?.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value.trim().toLowerCase();
            const messageEl = document.getElementById('newsletterMessage');

            if (subscribers.includes(email)) {
                messageEl.textContent = L('أنت مشترك بالفعل!', "You're already subscribed!");
                messageEl.className = 'form-message success';
                setTimeout(() => { messageEl.textContent = ''; }, 4000);
                return;
            }

            subscribers.push(email);
            try { localStorage.setItem('jossee-subscribers', JSON.stringify(subscribers)); } catch (e) {}

            messageEl.textContent = L('✅ شكراً لاشتراكك!', '✅ Thanks for subscribing!');
            messageEl.className = 'form-message success';
            emailInput.value = '';
            setTimeout(() => { messageEl.textContent = ''; }, 4000);
        });

        // ============================================================
        // INITIALIZATION
        // ============================================================
        document.addEventListener('DOMContentLoaded', function() {
            console.log('☕ JOSSEE COFFEE — Digital Experience');
            console.log('═══════════════════════════════════════');
            console.log(`✅ ${COFFEES.length} coffee products loaded`);
            console.log(`📊 Italian: ${COFFEES.filter(c => c.category === 'italian').length}`);
            console.log(`📊 Turkish: ${COFFEES.filter(c => c.category === 'turkish').length}`);
            console.log(`📊 Specialty: ${COFFEES.filter(c => c.category === 'specialty').length}`);
            console.log(`📊 Instant: ${COFFEES.filter(c => c.category === 'instant').length}`);
            console.log(`📊 Flavored: ${COFFEES.filter(c => c.category === 'flavored').length}`);
            console.log('═══════════════════════════════════════');
            
            // Multi-page site: not every render/populate/util below has a
            // container on every page. Each call is isolated so a missing
            // element on this particular page can't stop the rest of init.
            function safe(fn, label) {
                try { fn(); } catch (e) { console.warn('init skipped:', label, e); }
            }

            // Render coffee catalog
            safe(() => renderCoffeeCards('all'), 'renderCoffeeCards');
            safe(updateTrustBadges, 'updateTrustBadges');
            safe(updateCartBadge, 'updateCartBadge');
            safe(renderBrewMethods, 'renderBrewMethods');
            safe(renderDrinks, 'renderDrinks');
            safe(renderEquipment, 'renderEquipment');
            safe(renderEducation, 'renderEducation');
            safe(renderPromoBanner, 'renderPromoBanner');

            // Populate selects
            safe(populateBlendSelects, 'populateBlendSelects');
            safe(populateCompareSelects, 'populateCompareSelects');
            safe(populateBrewLogSelect, 'populateBrewLogSelect');

            // i18n: apply saved language (if any) now that all content is rendered,
            // and start watching for future dynamic content so it stays translated.
            safe(applyLanguage, 'applyLanguage');
            safe(() => I18N_OBSERVER.observe(document.body, { childList: true, subtree: true }), 'I18N_OBSERVER');

            // Accessibility, performance, offline cache, QA
            safe(checkReducedMotion, 'checkReducedMotion');
            safe(initLazyLoading, 'initLazyLoading');
            safe(validateStoredData, 'validateStoredData');
            safe(cacheCoffeeData, 'cacheCoffeeData');
            safe(registerServiceWorker, 'registerServiceWorker');
            safe(setupInstallBanner, 'setupInstallBanner');
            setTimeout(() => safe(runCalculationTests, 'runCalculationTests'), 1000);
            setTimeout(() => safe(runFinalQA, 'runFinalQA'), 1500);

            // Attach blend events to initial beans
            safe(() => {
                document.querySelectorAll('.bean-select').forEach(el => {
                    el.addEventListener('change', updateBlend);
                });
                document.querySelectorAll('.bean-slider').forEach(el => {
                    el.addEventListener('input', function() {
                        const num = this.dataset.bean;
                        document.querySelector(`.bean-percentage[data-bean="${num}"]`).textContent = this.value + '%';
                        updateBlend();
                    });
                });
            }, 'blend-events');

            // Initial blend update
            setTimeout(() => safe(updateBlend, 'updateBlend'), 300);
            
            // Scroll reveal
            window.addEventListener('scroll', handleScrollReveal);
            window.addEventListener('load', handleScrollReveal);
            
            console.log('🎯 All features ready!');
            console.log('📦 Storage: LocalStorage enabled');
            console.log(`💾 ${loadSavedBlends().length} saved blends`);
            console.log(`📝 ${getBrewLogs().length} brew logs`);
            console.log('═══════════════════════════════════════');
            console.log('☕ JOSSEE COFFEE — Coffee Crafted with Character');
        });