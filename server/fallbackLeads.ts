// Indian City Coordinates and Localities database
export const INDIAN_CITY_COORDINATES: Record<string, { lat: number; lon: number; localities: string[] }> = {
  bengaluru: {
    lat: 12.9716,
    lon: 77.5946,
    localities: ['100 Feet Road, Indiranagar', '80 Feet Road, Koramangala', 'MG Road', 'ITPB Main Road, Whitefield', '27th Main Road, HSR Layout', '11th Main, Jayanagar 4th Block', 'Church Street', 'Lavelle Road', 'Outer Ring Road, Bellandur', 'Cunningham Road']
  },
  mumbai: {
    lat: 19.0760,
    lon: 72.8777,
    localities: ['Linking Road, Bandra West', 'Chakala, Andheri East', 'Senapati Bapat Marg, Lower Parel', 'Central Avenue, Hiranandani, Powai', 'Nariman Point', 'Juhu Tara Road', 'Bandra Kurla Complex (BKC)', 'Colaba Causeway', 'Lokhandwala Complex, Andheri West', 'Worli Seaface']
  },
  delhi: {
    lat: 28.6139,
    lon: 77.2090,
    localities: ['Connaught Place Inner Circle', 'Hauz Khas Village', 'Nehru Place Commercial Complex', 'Press Enclave Road, Saket', 'Vasant Kunj Institutional Area', 'South Extension Part II', 'Barakhamba Road', 'Greater Kailash 1 M Block', 'Rajouri Garden Ring Road', 'Pusa Road, Karol Bagh']
  },
  hyderabad: {
    lat: 17.3850,
    lon: 78.4867,
    localities: ['Road No. 36, Jubilee Hills', 'Road No. 10, Banjara Hills', 'Cyber Towers, Hitec City', 'ISB Road, Gachibowli', 'Hitech City Main Road, Madhapur', 'Kondapur Main Road', 'Somajiguda Raj Bhavan Road', 'Himayatnagar', 'Kukatpally Housing Board', 'Begumpet']
  },
  chennai: {
    lat: 13.0827,
    lon: 80.2707,
    localities: ['Pondy Bazaar, T. Nagar', '2nd Avenue, Anna Nagar', 'Khader Nawaz Khan Road, Nungambakkam', 'Gandhi Nagar, Adyar', 'OMR IT Expressway', 'TTK Road, Alwarpet', 'Mount Road (Anna Salai)', 'Besant Nagar 2nd Avenue', 'Cathedral Road', 'Velachery Bypass Road']
  },
  pune: {
    lat: 18.5204,
    lon: 73.8567,
    localities: ['FC Road, Shivajinagar', 'North Main Road, Koregaon Park', 'Baner-Pashan Link Road', 'Viman Nagar Central', 'Kothrud Paud Road', 'Hinjewadi Phase 1 IT Park', 'DP Road, Aundh', 'Senapati Bapat Road', 'Kalyani Nagar', 'Magarpatta City, Hadapsar']
  },
  kolkata: {
    lat: 22.5726,
    lon: 88.3639,
    localities: ['Park Street', 'Sector V, Salt Lake City', 'New Town Action Area 1', 'Ballygunge Circular Road', 'Camac Street', 'Shakespeare Sarani', 'Southern Avenue', 'Gariahat Road', 'Alipore Road', 'Elgin Road']
  },
  ahmedabad: {
    lat: 23.0225,
    lon: 72.5714,
    localities: ['SG Highway', 'C.G. Road, Navrangpura', 'Prahlad Nagar Corporate Road', 'Sindhu Bhavan Road, Bodakdev', 'Satellite Road', 'Ashram Road', 'Vastrapur Lake Road', 'Maninagar Char Rasta', 'Drive-In Road', 'Law Garden']
  },
  gurugram: {
    lat: 28.4595,
    lon: 77.0266,
    localities: ['DLF Cyber City Phase 2', 'Golf Course Road Sector 54', 'Sector 29 Leisure Valley', 'Sohna Road Sector 48', 'Udyog Vihar Phase 4', 'Golf Course Extension Road', 'MG Road Heritage City', 'Sector 44 Institutional Area', 'Palam Vihar', 'Sector 14 Old Judicial Complex']
  },
  noida: {
    lat: 28.5355,
    lon: 77.3910,
    localities: ['Sector 18 Market', 'Sector 62 Electronic City', 'Sector 135 Expressway', 'Film City Sector 16A', 'Sector 15 Main Road', 'Sector 50 Market', 'Sector 63 Commercial Hub', 'Sector 128 Jaypee Greens', 'Sector 76', 'Sector 104 Boulevard']
  },
  jaipur: {
    lat: 26.9124,
    lon: 75.7873,
    localities: ['C-Scheme Subhash Marg', 'Gaurav Tower Marg, Malviya Nagar', 'Vaishali Nagar Amrapali Circle', 'MI Road', 'Mansarovar Madhyam Marg', 'Raja Park', 'Tonk Road', 'Civil Lines', 'Bani Park', 'JLN Marg']
  },
  chandigarh: {
    lat: 30.7333,
    lon: 76.7794,
    localities: ['Sector 17 Plaza', 'Sector 35 Inner Market', 'Sector 22 Market', 'Madhya Marg Sector 8', 'Industrial Area Phase 1', 'Sector 9 Boulevard', 'Sector 26 Madhya Marg', 'Sector 43 Bus Stand Road', 'Sector 8 Inner Market', 'IT Park Kishangarh']
  },
  lucknow: {
    lat: 26.8467,
    lon: 80.9462,
    localities: ['Vipin Khand, Gomti Nagar', 'Hazratganj MG Marg', 'Aliganj Kapoorthala', 'Indira Nagar Faizabad Road', 'Mahanagar Mandir Marg', 'Janki Puram', 'Alambagh Market', 'Chowk Heritage Area', 'Ashiyana Sector L', 'Vibhuti Khand']
  },
  kochi: {
    lat: 9.9312,
    lon: 76.2673,
    localities: ['MG Road Commercial Belt', 'Panampilly Nagar Main Ave', 'Kaloor Kadavanthra Road', 'Edappally Toll', 'Infopark Expressway, Kakkanad', 'Marine Drive Walkway', 'Fort Kochi Beach Road', 'Palarivattom Junction', 'Vyttila Mobility Hub', 'Banerji Road']
  },
  indore: {
    lat: 22.7196,
    lon: 75.8577,
    localities: ['Vijay Nagar Scheme 54', 'New Palasia Curewell Road', 'AB Road Velocity Hub', 'RNT Marg Treasure Island', 'Bhawarkua Square', 'Sapna Sangeeta Road', 'Annapurna Road', 'MG Road Kothari Market', 'Geeta Bhawan Square', 'Race Course Road']
  }
};

export function generateFallbackLeads(niche: string, city: string, state: string, count: number = 5) {
  const cleanCity = city.trim();
  const cleanState = state.trim();
  const citySlug = cleanCity.toLowerCase().replace(/[^a-z0-9]/g, '');

  const templates: Record<string, Array<{ nameSuffix: string; domainSuffix: string; locality: string }>> = {
    'Dentist': [
      { nameSuffix: 'Dental Clinic & Implant Center', domainSuffix: 'dentalclinic', locality: '104 Main Commercial Plaza' },
      { nameSuffix: 'Smiles Multispeciality Dental Hospital', domainSuffix: 'smilesdental', locality: '512 Metro Station Road' },
      { nameSuffix: 'Gentle Dental Care & Orthodontics', domainSuffix: 'gentledentalcare', locality: '88 Circular Road' },
      { nameSuffix: 'Apex Advanced Dental Studio', domainSuffix: 'apexdentalstudio', locality: '305 Central Avenue' },
      { nameSuffix: 'Root Canal & Aesthetic Smile Center', domainSuffix: 'smilecenter', locality: '721 Link Road' },
      { nameSuffix: 'Cornerstone Dental & Maxillofacial Care', domainSuffix: 'cornerstonedental', locality: '140 Professional Towers' },
      { nameSuffix: 'Radiance Laser Dentistry', domainSuffix: 'radiancedentistry', locality: '920 Sun City Complex' },
      { nameSuffix: 'Caring Kids Pediatric Dental Clinic', domainSuffix: 'caringkidsdental', locality: '430 Jubilee Square' },
      { nameSuffix: 'Horizon Family Dental Hospital', domainSuffix: 'horizondentalcare', locality: '610 Tech Park Ring Road' },
      { nameSuffix: 'Heritage Cosmetic Dental Clinic', domainSuffix: 'heritagedental', locality: '215 Heritage Lane' },
      { nameSuffix: 'Precision Orthodontic & Dental Lounge', domainSuffix: 'precisionorthodental', locality: '180 Cross Roads Mall' },
      { nameSuffix: 'ToothCraft Modern Dental Hospital', domainSuffix: 'toothcraftdental', locality: '422 Express Highway' },
      { nameSuffix: 'Elite Smiles Dental & Implantology', domainSuffix: 'elitesmilescare', locality: '315 Residency Road' },
      { nameSuffix: 'Prime Dental Health Center', domainSuffix: 'primedentalhealth', locality: '510 City Heart Arcade' },
      { nameSuffix: 'Urban Tooth Studio & Laser Center', domainSuffix: 'urbantoothstudio', locality: '750 Galleria Market' }
    ],
    'Restaurant': [
      { nameSuffix: 'Kitchen & Fine Dining Lounge', domainSuffix: 'dininglounge', locality: '402 Gourmet Enclave' },
      { nameSuffix: 'Grand Spice Multi-Cuisine Restaurant', domainSuffix: 'grandspicerestaurant', locality: '118 High Street Market' },
      { nameSuffix: 'Artisan Bistro & Rooftop Cafe', domainSuffix: 'bistrorooftop', locality: '905 Commercial Hub' },
      { nameSuffix: 'Coastal Flavours Seafood Kitchen', domainSuffix: 'coastalflavours', locality: '210 Promenade Road' },
      { nameSuffix: 'Urban Craft Cafe & Microbrewery', domainSuffix: 'urbancraftcafe', locality: '654 Central Boulevard' },
      { nameSuffix: 'Royal Feast North Indian Dining', domainSuffix: 'royalfeastdining', locality: '320 Club Road' },
      { nameSuffix: 'Golden Wok Pan-Asian Kitchen', domainSuffix: 'goldenwokkitchen', locality: '812 Asian Plaza' },
      { nameSuffix: 'Heritage Pure Veg Thali & Sweets', domainSuffix: 'heritagevegthali', locality: '145 Market Circle' },
      { nameSuffix: 'The Charcoal BBQ & Grill House', domainSuffix: 'charcoalbbqgrill', locality: '503 Station Road' },
      { nameSuffix: 'Green Leaf Organic Kitchen', domainSuffix: 'greenleafeatery', locality: '777 City Center' },
      { nameSuffix: 'Flavours of Punjab Family Dining', domainSuffix: 'flavoursofpunjab', locality: '380 Ring Road' },
      { nameSuffix: 'Copper Pot Dum Biryani & Kebabs', domainSuffix: 'copperpotbiryani', locality: '215 Food Court Hub' },
      { nameSuffix: 'Spice Route Continental & Bar', domainSuffix: 'spicerouterestaurant', locality: '460 Commercial Boulevard' },
      { nameSuffix: 'Olive Grove Italian Kitchen & Pizzeria', domainSuffix: 'olivegrovepizzeria', locality: '120 Fashion Square' },
      { nameSuffix: 'Saffron Heritage Indian Gourmet', domainSuffix: 'saffrongourmetdining', locality: '590 Lake View Promenade' }
    ],
    'Lawyer': [
      { nameSuffix: 'Legal Associates & Advocates', domainSuffix: 'legalassociates', locality: '500 High Court Road' },
      { nameSuffix: 'Chambers of Law & Corporate Counsel', domainSuffix: 'lawchambers', locality: '120 Justice Complex' },
      { nameSuffix: 'High Court Legal Advisory Group', domainSuffix: 'highcourtadvocates', locality: '310 Bar Association Road' },
      { nameSuffix: 'Taxation & Corporate Law Partners', domainSuffix: 'taxlawpartners', locality: '850 Financial District' },
      { nameSuffix: 'Civil Litigation & Arbitration Counsel', domainSuffix: 'civillawchambers', locality: '420 Lawyers Colony' },
      { nameSuffix: 'Property & Real Estate Legal Group', domainSuffix: 'propertylegalgroup', locality: '615 Civil Lines' },
      { nameSuffix: 'Criminal Defense & Trial Advocates', domainSuffix: 'defenseadvocates', locality: '740 Session Court Lane' },
      { nameSuffix: 'Intellectual Property & IP Counsel', domainSuffix: 'ipadvocates', locality: '205 Technology Park' },
      { nameSuffix: 'Apex Law Firm & Solicitors', domainSuffix: 'apexlawfirm', locality: '880 Commerce Tower' },
      { nameSuffix: 'Heritage Legal Consultants', domainSuffix: 'heritagelegal', locality: '330 Constitution Avenue' },
      { nameSuffix: 'Juris Prudence Law Offices', domainSuffix: 'jurisprudencelaw', locality: '190 Supreme Court Way' },
      { nameSuffix: 'Lex Chambers Corporate Legal Solutions', domainSuffix: 'lexchambersadvocates', locality: '410 Business Park' },
      { nameSuffix: 'Alliance Law Associates & Notary', domainSuffix: 'alliancelawassociates', locality: '620 Advocate Square' },
      { nameSuffix: 'Pinnacle Legal Advisors', domainSuffix: 'pinnaclelegaladvisors', locality: '340 Judicial Enclave' },
      { nameSuffix: 'Global Justice Legal Chambers', domainSuffix: 'globaljusticelaw', locality: '725 City Hall Road' }
    ],
    'HVAC & Plumbing': [
      { nameSuffix: 'Cooling Solutions & AC Services', domainSuffix: 'acservices', locality: '150 Industrial Area' },
      { nameSuffix: 'Pro Air Conditioning & HVAC Repair', domainSuffix: 'prohvacsolutions', locality: '820 Trade Center Road' },
      { nameSuffix: 'Sanitary & Plumbing Contractors', domainSuffix: 'plumbingcontractors', locality: '302 Pipeline Road' },
      { nameSuffix: 'Apex Climate Control & Refrigeration', domainSuffix: 'apexclimatecontrol', locality: '910 Workshop Row' },
      { nameSuffix: 'Precision HVAC & Chiller Works', domainSuffix: 'precisionchillers', locality: '240 Power House Road' },
      { nameSuffix: 'Reliable Central AC Maintenance', domainSuffix: 'centralacservice', locality: '510 Industrial Estate' },
      { nameSuffix: 'Fast Flow Emergency Plumbing Services', domainSuffix: 'fastflowplumbers', locality: '630 Utility Street' },
      { nameSuffix: 'Cool Breeze Commercial Refrigeration', domainSuffix: 'coolbreezehvac', locality: '118 Industrial Row' },
      { nameSuffix: 'Blue Star Climate Care Engineers', domainSuffix: 'climatecareengineers', locality: '425 Tech Park Access' },
      { nameSuffix: 'Urban Plumber 24x7 Leak Solutions', domainSuffix: 'urbanplumbers24x7', locality: '310 Municipal Road' },
      { nameSuffix: 'National Aircon Sales & Service', domainSuffix: 'nationalairconservice', locality: '560 Market Boulevard' },
      { nameSuffix: 'Frost Tech HVAC Systems & Ducting', domainSuffix: 'frosttechhvac', locality: '780 Factory Lane' },
      { nameSuffix: 'Aqua Jet Plumbing & Sanitary Works', domainSuffix: 'aquajetplumbing', locality: '235 Service Circle' },
      { nameSuffix: 'EverCool AC Repair & Installation', domainSuffix: 'evercoolacrepair', locality: '410 Central Bypass' },
      { nameSuffix: 'Metro Climate Solutions & Engineering', domainSuffix: 'metroclimatesolutions', locality: '670 Suburb Road' }
    ],
    'Auto Repair': [
      { nameSuffix: 'Multi-Brand Car Care & Service Center', domainSuffix: 'multibrandcarcare', locality: '110 Auto Motor Works Road' },
      { nameSuffix: 'Precision Auto Garage & Detailing', domainSuffix: 'precisionautogarage', locality: '450 Bypass Highway' },
      { nameSuffix: 'Apex Automotive Works & Wheel Alignment', domainSuffix: 'apexautomotive', locality: '780 Ring Road Service Lane' },
      { nameSuffix: 'Express Car Service & Denting Painting', domainSuffix: 'expresscarservice', locality: '320 Transport Nagar' },
      { nameSuffix: 'Smart Drive German Car Specialists', domainSuffix: 'smartdrivecars', locality: '615 Industrial Corridor' },
      { nameSuffix: 'Complete Auto Electricals & AC Repair', domainSuffix: 'autoelectricals', locality: '820 Garage Street' },
      { nameSuffix: 'Speedy Wheels Tyre & Alignment Hub', domainSuffix: 'speedywheelsautocare', locality: '215 Motor Market' },
      { nameSuffix: 'Auto Clinic Multi-Brand Workshop', domainSuffix: 'autoclinicworkshop', locality: '540 Highway Hub' },
      { nameSuffix: 'PitStop Auto Garage & Ceramic Coating', domainSuffix: 'pitstopautoworks', locality: '390 Express Row' },
      { nameSuffix: 'Gearheads Performance Auto Center', domainSuffix: 'gearheadsautocenter', locality: '170 Workshop Road' },
      { nameSuffix: 'Prime Auto Care & Body Shop', domainSuffix: 'primeautocarespot', locality: '630 Bypass Junction' },
      { nameSuffix: 'Turbo Drive Mechanical Works', domainSuffix: 'turbodrivegarage', locality: '480 Transport Hub' },
      { nameSuffix: 'Eco Car Detailing & Wash Studio', domainSuffix: 'ecocardetailing', locality: '290 Main Ring Road' },
      { nameSuffix: 'Royal Auto Works & Dent Repair', domainSuffix: 'royalautoworkshop', locality: '710 Industrial Crescent' },
      { nameSuffix: 'Apex Motors Four Wheeler Service', domainSuffix: 'apexmotorsservice', locality: '850 City Outer Road' }
    ],
    'Real Estate': [
      { nameSuffix: 'Realty Advisory & Property Consultants', domainSuffix: 'realtyadvisory', locality: '100 Executive Towers' },
      { nameSuffix: 'Heritage Homes & Real Estate Group', domainSuffix: 'heritagehomesrealty', locality: '220 Prime Commercial Hub' },
      { nameSuffix: 'Apex Commercial & Residential Properties', domainSuffix: 'apexproperties', locality: '350 Expressway Plaza' },
      { nameSuffix: 'Prime Acres Developers & Realtors', domainSuffix: 'primeacresrealty', locality: '480 Corporate Park' },
      { nameSuffix: 'Urban Space Realty & Property Mgmt', domainSuffix: 'urbanspacerealty', locality: '510 Metro Plaza' },
      { nameSuffix: 'Cornerstone Housing & Plots Advisory', domainSuffix: 'cornerstonerealty', locality: '630 Main Commercial Street' },
      { nameSuffix: 'Skyline Luxury Residences & Real Estate', domainSuffix: 'skylineluxuryrealty', locality: '210 Financial Hub' },
      { nameSuffix: 'Metro Gold Property Advisors', domainSuffix: 'metrogoldproperty', locality: '340 Tech Corridor' },
      { nameSuffix: 'Grandeur Estates Real Estate Group', domainSuffix: 'grandeurestatesrealty', locality: '590 Boulevard Arcade' },
      { nameSuffix: 'Asset Tree Realtors & Land Consultants', domainSuffix: 'assettreerealtors', locality: '415 Highway Plaza' },
      { nameSuffix: 'Cityscape Property Solutions', domainSuffix: 'cityscapepropertysol', locality: '170 Central Business District' },
      { nameSuffix: 'Homestead Realty & Rental Network', domainSuffix: 'homesteadrealtygroup', locality: '680 Green Park Enclave' },
      { nameSuffix: 'Landmark Spaces Commercial Realty', domainSuffix: 'landmarkspacesrealty', locality: '730 Corporate Avenue' },
      { nameSuffix: 'Infinity Housing & Real Estate Works', domainSuffix: 'infinityhousingrealty', locality: '290 Elite Tower Road' },
      { nameSuffix: 'TrustBridge Realtors & Property Care', domainSuffix: 'trustbridgerealtors', locality: '810 City Centre' }
    ],
    'Roofing': [
      { nameSuffix: 'Roofing Solutions & Waterproofing Experts', domainSuffix: 'roofingsolutions', locality: '115 Industrial Belt' },
      { nameSuffix: 'Apex Industrial Sheds & Roofing Sheets', domainSuffix: 'apexroofingsheets', locality: '230 Fabricators Lane' },
      { nameSuffix: 'Summit Terrace Waterproofing & Coating', domainSuffix: 'summitwaterproofing', locality: '345 Construction Hub' },
      { nameSuffix: 'Heritage Tensile & Polycarbonate Roofing', domainSuffix: 'heritageroofing', locality: '460 Builders Road' },
      { nameSuffix: 'Pro Shield Roofing & Gutter Works', domainSuffix: 'proshieldroofing', locality: '575 Contractor Street' },
      { nameSuffix: 'National Roofing & Metal Fabrications', domainSuffix: 'nationalroofings', locality: '210 Factory Row' },
      { nameSuffix: 'DuraTech Polyroofing & Shed Contractors', domainSuffix: 'duratechroofing', locality: '390 Heavy Industrial Hub' },
      { nameSuffix: 'SunGuard Roof Insulation & Repair', domainSuffix: 'sunguardroofs', locality: '420 Highway Works' },
      { nameSuffix: 'Elite Roof Trusses & Structural Systems', domainSuffix: 'eliterooftrusses', locality: '530 Commercial Street' },
      { nameSuffix: 'AquaStop Terrace Waterproofers', domainSuffix: 'aquastopwaterproofing', locality: '610 Metro Builders Lane' },
      { nameSuffix: 'Modern Sheds & Colour Coated Sheets', domainSuffix: 'modernroofingsheds', locality: '740 Suburb Industrial Area' },
      { nameSuffix: 'Supreme Roof Restoration & Tiling', domainSuffix: 'supremeroofingcare', locality: '180 Civil Lines' },
      { nameSuffix: 'EverLast Industrial Roofing Systems', domainSuffix: 'everlastroofingsys', locality: '320 Power Grid Way' },
      { nameSuffix: 'Pinnacle Roofing & Terrace Care', domainSuffix: 'pinnacleroofcare', locality: '490 Construction Market' },
      { nameSuffix: 'TrueShield Roof Waterproofing & Poly', domainSuffix: 'trueshieldroofs', locality: '860 Trade Hub' }
    ],
    'Solar': [
      { nameSuffix: 'Solar Energy Systems & Rooftop Installers', domainSuffix: 'solarenergysystems', locality: '101 Clean Energy Boulevard' },
      { nameSuffix: 'SunPower Clean Tech & Solar Panels', domainSuffix: 'sunpowersolars', locality: '212 Renewable Energy Park' },
      { nameSuffix: 'Green Grid Renewable Solar Solutions', domainSuffix: 'greengridsolar', locality: '323 Eco Zone' },
      { nameSuffix: 'Apex Rooftop Solar & Inverter Systems', domainSuffix: 'apexrooftopsolar', locality: '434 Solar Tech Way' },
      { nameSuffix: 'Eco Volt Solar EPC Contractors', domainSuffix: 'ecovoltsolarepc', locality: '545 Power Grid Road' },
      { nameSuffix: 'Solaria Clean Energy & Battery Systems', domainSuffix: 'solariacleanenergy', locality: '160 Green Tech Park' },
      { nameSuffix: 'BrightRay Solar Rooftop Power', domainSuffix: 'brightraysolar', locality: '280 Renewable Street' },
      { nameSuffix: 'Nova Solar Technologies & Subsidies', domainSuffix: 'novasolartech', locality: '390 Industrial Bypass' },
      { nameSuffix: 'SunHarvest Energy Systems & Maintenance', domainSuffix: 'sunharvestenergy', locality: '470 Commercial Lane' },
      { nameSuffix: 'GreenPeak Solar Power & Lighting', domainSuffix: 'greenpeaksolar', locality: '580 Eco Corridor' },
      { nameSuffix: 'Surya Shakti Solar Rooftop Works', domainSuffix: 'suryashaktisolar', locality: '690 Sunshine Boulevard' },
      { nameSuffix: 'Photon Green Renewable Energy', domainSuffix: 'photongreenenergy', locality: '715 Tech Innovation Park' },
      { nameSuffix: 'RayTech Commercial Solar Solutions', domainSuffix: 'raytechsolarsol', locality: '825 Metro Energy Hub' },
      { nameSuffix: 'EcoLite Solar Heaters & Panels', domainSuffix: 'ecolitesolarsystems', locality: '310 Power District' },
      { nameSuffix: 'Zenith Solar Plant & EPC Services', domainSuffix: 'zenithsolarplants', locality: '920 Clean Park Way' }
    ],
    'Fitness Gym': [
      { nameSuffix: 'Fitness Club & Strength Training Studio', domainSuffix: 'fitnessclub', locality: '105 Sports Arena Complex' },
      { nameSuffix: 'Iron Pulse Gym & CrossFit Studio', domainSuffix: 'ironpulsegym', locality: '215 Fitness Avenue' },
      { nameSuffix: 'Apex Performance Health & Fitness Club', domainSuffix: 'apexfitnessclub', locality: '325 Workout Road' },
      { nameSuffix: 'Gold Standard Wellness & Gym Lounge', domainSuffix: 'goldstandardgym', locality: '435 Health Center' },
      { nameSuffix: 'Core Power Cross Training & Yoga Studio', domainSuffix: 'corepowercrossfit', locality: '545 Active Row' },
      { nameSuffix: 'FitNation 24x7 Gym & Nutrition Hub', domainSuffix: 'fitnation24x7gym', locality: '160 Wellness Boulevard' },
      { nameSuffix: 'Spartan Strength & Conditioning Gym', domainSuffix: 'spartanstrengthgym', locality: '270 Athlete Lane' },
      { nameSuffix: 'Oxygen Fitness Lounge & Cardio Studio', domainSuffix: 'oxygenfitnesslounge', locality: '380 High Street Hub' },
      { nameSuffix: 'Raw Iron Hardcore Gym & Calisthenics', domainSuffix: 'rawirongymstudio', locality: '490 Ring Road Arcade' },
      { nameSuffix: 'Cultured Body Fitness & Aerobics', domainSuffix: 'culturedbodyfitness', locality: '610 Metro Fitness Park' },
      { nameSuffix: 'Velocity Fitness Studio & Spin Class', domainSuffix: 'velocityfitstudio', locality: '720 Central Plaza' },
      { nameSuffix: 'Titan Powerhouse Gym & Spa', domainSuffix: 'titanpowerhousegym', locality: '830 Sports Complex Road' },
      { nameSuffix: 'Pulse Athletic Club & MMA Training', domainSuffix: 'pulseathleticclub', locality: '140 Commercial Avenue' },
      { nameSuffix: 'Transform Fitness & Bodybuilding Studio', domainSuffix: 'transformfitstudio', locality: '360 City Center' },
      { nameSuffix: 'Zenith Wellness Gym & Pilates', domainSuffix: 'zenithwellnessgym', locality: '910 Elite Health Way' }
    ],
    'Accounting & Tax': [
      { nameSuffix: 'Chartered Accountants & Tax Consultants', domainSuffix: 'caassociates', locality: '110 Financial Center' },
      { nameSuffix: 'GST Advisory & Financial Auditors', domainSuffix: 'gstadvisory', locality: '220 Corporate Towers' },
      { nameSuffix: 'Apex Corporate Accounting & Bookkeeping', domainSuffix: 'apexcorporateca', locality: '330 Commerce Boulevard' },
      { nameSuffix: 'Pinnacle Tax Planning & Audit Services', domainSuffix: 'pinnacletaxplanning', locality: '440 Executive Chambers' },
      { nameSuffix: 'Heritage CA & Financial Partners', domainSuffix: 'heritageca', locality: '550 Auditor Row' },
      { nameSuffix: 'Vanguard Tax Solutions & Compliance', domainSuffix: 'vanguardtaxsolutions', locality: '160 High Court Annex' },
      { nameSuffix: 'BalanceSheet Financial Advisors & CA', domainSuffix: 'balancesheetadvisors', locality: '270 Corporate Crescent' },
      { nameSuffix: 'Krypton Accounting & ROC Filing', domainSuffix: 'kryptonaccounting', locality: '380 Finance Enclave' },
      { nameSuffix: 'Prime Tax Consultancy & Bookkeepers', domainSuffix: 'primetaxconsultancy', locality: '490 Commercial Boulevard' },
      { nameSuffix: 'Excel Accounting Partners & Auditors', domainSuffix: 'excelaccountingca', locality: '610 Business Park Way' },
      { nameSuffix: 'SureCount GST & Income Tax Advisory', domainSuffix: 'surecounttaxadvisory', locality: '720 Trade Hub' },
      { nameSuffix: 'FinEdge Corporate Legal & Tax Counsel', domainSuffix: 'finedgetaxadvisory', locality: '830 Central Chambers' },
      { nameSuffix: 'AccuTax Chartered Accountants', domainSuffix: 'accutaxcaservices', locality: '140 Metro Square' },
      { nameSuffix: 'Capital Care Auditing & Accounting', domainSuffix: 'capitalcareauditing', locality: '350 Bankers Lane' },
      { nameSuffix: 'Elite Advisory & Wealth CA Services', domainSuffix: 'elitecagroup', locality: '960 Financial Center' }
    ],
    'Barbershop & Salon': [
      { nameSuffix: 'Unisex Salon & Luxury Hair Spa', domainSuffix: 'unisexsalonspa', locality: '105 Style Boulevard' },
      { nameSuffix: 'Luxe Grooming Lounge & Bridal Studio', domainSuffix: 'luxegroominglounge', locality: '215 Fashion Mall Road' },
      { nameSuffix: 'Crown & Blade Men Grooming Lounge', domainSuffix: 'crownbladebarbers', locality: '325 High Street Arcade' },
      { nameSuffix: 'Velvet Touch Beauty Salon & Spa', domainSuffix: 'velvettouchsalon', locality: '435 Glamour Plaza' },
      { nameSuffix: 'Urban Trim Hair Studio & Spa', domainSuffix: 'urbantrimstudio', locality: '545 Central Market' },
      { nameSuffix: 'Gentleman Barbers & Beard Lounge', domainSuffix: 'gentlemanbarberspot', locality: '160 Trendy Lane' },
      { nameSuffix: 'Glam Studio Unisex Salon & Makeover', domainSuffix: 'glamstudiounisex', locality: '270 Fashion Street' },
      { nameSuffix: 'Scissors & Style Luxury Hair Lounge', domainSuffix: 'scissorsandstylesalon', locality: '380 Lifestyle Boulevard' },
      { nameSuffix: 'The Vintage Razor Men Salon', domainSuffix: 'vintagerazormensalon', locality: '490 Market Walk' },
      { nameSuffix: 'Blush & Glow Premium Beauty Parlour', domainSuffix: 'blushandglowsalon', locality: '610 Boutique Enclave' },
      { nameSuffix: 'Headturners Hair Care & Skin Clinic', domainSuffix: 'headturnershaircare', locality: '720 Mall Road' },
      { nameSuffix: 'Reflections Unisex Salon & Nail Spa', domainSuffix: 'reflectionssalonspa', locality: '830 Crossway Plaza' },
      { nameSuffix: 'Toni & Guy Hair Dressing Studio', domainSuffix: 'tonihairdressingstudio', locality: '140 City Heart Street' },
      { nameSuffix: 'Signature Cuts Barbershop & Spa', domainSuffix: 'signaturecutsbarber', locality: '350 Galleria Row' },
      { nameSuffix: 'Aura Organic Hair & Beauty Studio', domainSuffix: 'aurabeautystudio', locality: '960 Elite Center' }
    ],
    'Web Design Agency': [
      { nameSuffix: 'Digital Agency & Web Development', domainSuffix: 'digitalagency', locality: '102 Tech Park Phase 1' },
      { nameSuffix: 'Apex Creative Technologies & SEO', domainSuffix: 'apexcreatives', locality: '214 Innovation Hub' },
      { nameSuffix: 'NextGen Software & UI/UX Studio', domainSuffix: 'nextgensoftwareshop', locality: '326 IT Corridor' },
      { nameSuffix: 'Pixel Craft Web Design & Marketing', domainSuffix: 'pixelcraftdigital', locality: '438 Cyber Arcade' },
      { nameSuffix: 'BrandCraft Digital Solutions', domainSuffix: 'brandcraftsolutions', locality: '550 Electronic City Road' },
      { nameSuffix: 'WebStudio Infotech & Mobile Apps', domainSuffix: 'webstudioinfotech', locality: '160 Software Enclave' },
      { nameSuffix: 'CodeWave Software & SEO Services', domainSuffix: 'codewavesoftware', locality: '270 IT Expressway' },
      { nameSuffix: 'Digital Bloom Web & Growth Agency', domainSuffix: 'digitalbloomgrowth', locality: '380 Innovation Zone' },
      { nameSuffix: 'Vivid Web Dynamics & Brand Design', domainSuffix: 'vividwebdynamics', locality: '490 Tech Boulevard' },
      { nameSuffix: 'CloudScale Digital Creative Labs', domainSuffix: 'cloudscaledigital', locality: '610 Startup Hub' },
      { nameSuffix: 'HyperPixel Media & Web Marketing', domainSuffix: 'hyperpixelmedia', locality: '720 Cyber Gateway' },
      { nameSuffix: 'Alpha Code Web Design & Commerce', domainSuffix: 'alphacodewebstudio', locality: '830 Silicon Row' },
      { nameSuffix: 'BrightEdge Interactive Digital Agency', domainSuffix: 'brightedgedigital', locality: '140 Developer Park' },
      { nameSuffix: 'Matrix Digital Web & App Solutions', domainSuffix: 'matrixdigitalweb', locality: '350 Technology Plaza' },
      { nameSuffix: 'OmniBrand Creative Digital Studio', domainSuffix: 'omnibrandstudio', locality: '960 Digital District' }
    ]
  };

  // Find matching template array or fuzzy match
  let matchedTemplates = templates[niche];
  if (!matchedTemplates) {
    const lowerNiche = niche.toLowerCase();
    for (const [key, value] of Object.entries(templates)) {
      if (key.toLowerCase() === lowerNiche || key.toLowerCase().includes(lowerNiche) || lowerNiche.includes(key.toLowerCase())) {
        matchedTemplates = value;
        break;
      }
    }
  }

  const itemsCount = Math.max(1, Math.min(Number(count) || 5, 20));
  let resultItems: Array<{ nameSuffix: string; domainSuffix: string; locality: string }> = [];

  if (matchedTemplates && matchedTemplates.length > 0) {
    resultItems = matchedTemplates.slice(0, itemsCount);
  }

  // If matchedTemplates had fewer items than itemsCount or no matchedTemplates existed,
  // dynamically generate the remaining unique items to fulfill the exact count requested.
  if (resultItems.length < itemsCount) {
    const cleanNicheWord = niche.replace(/[^a-zA-Z0-9\s]/g, '').trim() || 'Services';
    const nicheSlug = cleanNicheWord.toLowerCase().replace(/\s+/g, '');

    const prefixes = [
      'Premier', 'Apex', 'Royal', 'Shree', 'Global', 'Heritage', 'Classic',
      'Pinnacle', 'Alliance', 'NextGen', 'Horizon', 'First Choice', 'National',
      'Star', 'Vanguard', 'Summit', 'Elite', 'Metro', 'Urban', 'Evergreen'
    ];
    const suffixes = [
      'Enterprises', 'Solutions', 'Associates', 'Hub', 'Services', 'Center', 'Partners',
      'Care', 'Specialists', 'Group', 'Studio', 'Network', 'Agency', 'Company', 'House'
    ];

    let genIndex = resultItems.length;
    while (resultItems.length < itemsCount) {
      const pref = prefixes[genIndex % prefixes.length];
      const suff = suffixes[genIndex % suffixes.length];
      resultItems.push({
        nameSuffix: `${pref} ${cleanNicheWord} ${suff}`,
        domainSuffix: `${nicheSlug}${genIndex + 1}`,
        locality: `${100 + genIndex * 45} Main Market Road`
      });
      genIndex++;
    }
  }

  // Get known coordinates and localities for Indian city
  const cityGeo = INDIAN_CITY_COORDINATES[citySlug] || {
    lat: 20.5937,
    lon: 78.9629,
    localities: ['MG Road', 'Station Road', 'Civil Lines', 'Main Commercial Complex', 'Bazaar Street', 'Ring Road']
  };

  const domainExtensions = ['.in', '.co.in', '.com', '.org.in'];

  return resultItems.map((item, idx) => {
    const businessName = `${cleanCity} ${item.nameSuffix}`;
    const ext = domainExtensions[idx % domainExtensions.length];
    const cleanDomain = `${citySlug}${item.domainSuffix.replace(/[^a-z0-9]/g, '')}${ext}`;
    const website = `https://www.${cleanDomain}`;
    
    // Pick locality from city knowledge or item default
    const locality = cityGeo.localities[idx % cityGeo.localities.length] || item.locality;
    
    // Realistic Indian Mobile / Landline number format
    const mobilePrefix = 98000 + ((idx * 179 + 4321) % 19000);
    const suffixNum = 10000 + ((idx * 313 + 5678) % 90000);
    const phone = `+91 ${mobilePrefix} ${suffixNum}`;

    return {
      id: `fallback-${citySlug}-${niche.toLowerCase().replace(/[^a-z0-9]/g, '')}-${idx}-${Date.now()}`,
      name: businessName,
      niche: niche,
      website: website,
      address: `${locality}, ${cleanCity}, ${cleanState}`,
      city: cleanCity,
      state: cleanState,
      phone: phone,
      placeId: `loc-${citySlug}-${idx}`,
      lat: cityGeo.lat + ((idx * 0.006) - 0.015),
      lon: cityGeo.lon + ((idx * 0.007) - 0.015),
      emailStatus: 'pending' as const,
      screenshotStatus: 'pending' as const,
      auditStatus: 'pending' as const,
      emailDraftStatus: 'pending' as const
    };
  });
}
