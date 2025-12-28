// Global variables
let allCountries = [];
let filteredCountries = [];

// Countries data - hardcoded list with 195+ countries
const countriesData = [
    { name: "Afghanistan", flag: "<img src=\"b1/afghanistan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kabul", population: 38928341, region: "South Asia", continent: "Asia", currency: "Afghani", languages: "Pashto, Dari" },
    { name: "Andorra", flag: "<img src=\"b1/andorra.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Andorra la Vella", population: 77543, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Catalan" },
    { name: "Angola", flag: "<img src=\"b1/angola.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Luanda", population: 32866272, region: "Sub-Saharan Africa", continent: "Africa", currency: "Kwanza", languages: "Portuguese" },
    { name: "Argentina", flag: "<img src=\"b1/argentina.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Buenos Aires", population: 46233164, region: "South America", continent: "South America", currency: "Peso", languages: "Spanish" },
    { name: "Armenia", flag: "<img src=\"b1/armenia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Yerevan", population: 2963234, region: "Western Asia", continent: "Asia", currency: "Dram", languages: "Armenian" },
    { name: "Australia", flag: "<img src=\"b1/australia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Canberra", population: 25687041, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English" },
    { name: "Azerbaijan", flag: "<img src=\"b1/azerbaijan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Baku", population: 10139177, region: "Western Asia", continent: "Asia", currency: "Manat", languages: "Azerbaijani" },
    { name: "Bahamas", flag: "<img src=\"b1/bahamas.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Nassau", population: 393248, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Bahrain", flag: "<img src=\"b1/bahrain.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Manama", population: 1701575, region: "Western Asia", continent: "Asia", currency: "Dinar", languages: "Arabic" },
    { name: "Bangladesh", flag: "<img src=\"b1/bangladesh.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Dhaka", population: 168065920, region: "South Asia", continent: "Asia", currency: "Taka", languages: "Bengali" },
    { name: "Barbados", flag: "<img src=\"b1/barbados.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bridgetown", population: 287025, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Belarus", flag: "<img src=\"b1/belarus.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Minsk", population: 9408400, region: "Eastern Europe", continent: "Europe", currency: "Ruble", languages: "Belarusian, Russian" },
    { name: "Belgium", flag: "<img src=\"b1/belgium.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Brussels", population: 11590000, region: "Western Europe", continent: "Europe", currency: "Euro", languages: "Dutch, French, German" },
    { name: "Belize", flag: "<img src=\"b1/belize.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Belmopan", population: 397621, region: "Central America", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Benin", flag: "<img src=\"b1/benin.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Porto-Novo", population: 12996895, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Bhutan", flag: "<img src=\"b1/bhutan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Thimphu", population: 771608, region: "South Asia", continent: "Asia", currency: "Ngultrum", languages: "Dzongkha" },
    { name: "Bolivia", flag: "<img src=\"b1/bolivia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Sucre (constitutional), La Paz (seat of government)", population: 11832940, region: "South America", continent: "South America", currency: "Boliviano", languages: "Spanish, Quechua, Aymara, and others" },
    { name: "Bosnia and Herzegovina", flag: "<img src=\"b1/bosniaandherzegovina.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Sarajevo", population: 3233000, region: "Southern Europe", continent: "Europe", currency: "Mark", languages: "Bosnian, Serbian, Croatian" },
    { name: "Botswana", flag: "<img src=\"b1/botswana.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Gaborone", population: 2397241, region: "Sub-Saharan Africa", continent: "Africa", currency: "Pula", languages: "English, Setswana" },
    { name: "Brazil", flag: "<img src=\"b1/brazil.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Brasília", population: 215313498, region: "South America", continent: "South America", currency: "Real", languages: "Portuguese" },
    { name: "Brunei", flag: "<img src=\"b1/brunei.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bandar Seri Begawan", population: 437479, region: "Southeast Asia", continent: "Asia", currency: "Brunei Dollar", languages: "Malay" },
    { name: "Bulgaria", flag: "<img src=\"b1/bulgaria.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Sofia", population: 6880723, region: "Eastern Europe", continent: "Europe", currency: "Lev", languages: "Bulgarian" },
    { name: "Burkina Faso", flag: "<img src=\"b1/burkinafaso.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ouagadougou", population: 22100683, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Burundi", flag: "<img src=\"b1/burundi.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Gitega", population: 12889576, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "Kirundi, French" },
    { name: "Cambodia", flag: "<img src=\"b1/cambodia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Phnom Penh", population: 16926172, region: "Southeast Asia", continent: "Asia", currency: "Riel", languages: "Khmer" },
    { name: "Cameroon", flag: "<img src=\"b1/cameroon.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Yaoundé", population: 27914536, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French, English" },
    { name: "Canada", flag: "<img src=\"b1/canada.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ottawa", population: 39292355, region: "North America", continent: "North America", currency: "Dollar", languages: "English, French" },
    { name: "Cape Verde", flag: "<img src=\"b1/capeverde.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Praia", population: 555987, region: "Sub-Saharan Africa", continent: "Africa", currency: "Escudo", languages: "Portuguese" },
    { name: "Central African Republic", flag: "<img src=\"b1/centralafricanrepublic.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bangui", population: 4829767, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French, Sango" },
    { name: "Chad", flag: "<img src=\"b1/chad.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "N'Djamena", population: 17591558, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French, Arabic" },
    { name: "Chile", flag: "<img src=\"b1/chile.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Santiago", population: 19603733, region: "South America", continent: "South America", currency: "Peso", languages: "Spanish" },
    { name: "China", flag: "<img src=\"b1/china.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Beijing", population: 1412000000, region: "East Asia", continent: "Asia", currency: "Yuan", languages: "Mandarin, Cantonese, Wu" },
    { name: "Colombia", flag: "<img src=\"b1/colombia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bogotá", population: 52085168, region: "South America", continent: "South America", currency: "Peso", languages: "Spanish" },
    { name: "Comoros", flag: "<img src=\"b1/comoros.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Moroni", population: 859214, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "Comorian, French, Arabic" },
    { name: "Congo", flag: "<img src=\"b2/republicofthecongo.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Brazzaville", population: 6106869, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Costa Rica", flag: "<img src=\"b1/costarica.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "San José", population: 5180829, region: "Central America", continent: "North America", currency: "Colón", languages: "Spanish" },
    { name: "Croatia", flag: "<img src=\"b1/croatia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Zagreb", population: 3880000, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Croatian" },
    { name: "Cuba", flag: "<img src=\"b1/cuba.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Havana", population: 11212000, region: "Caribbean", continent: "North America", currency: "Peso", languages: "Spanish" },
    { name: "Cyprus", flag: "<img src=\"b1/cyprus.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Nicosia", population: 1251500, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Greek, Turkish" },
    { name: "Czech Republic", flag: "<img src=\"b1/czechrepublic.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Prague", population: 10510000, region: "Central Europe", continent: "Europe", currency: "Koruna", languages: "Czech" },
    { name: "Denmark", flag: "<img src=\"b1/denmark.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Copenhagen", population: 5906000, region: "Northern Europe", continent: "Europe", currency: "Krone", languages: "Danish" },
    { name: "Djibouti", flag: "<img src=\"b1/djibouti.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Djibouti City", population: 1120000, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French, Arabic" },
    { name: "Dominica", flag: "<img src=\"b1/dominica.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Roseau", population: 71625, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Dominican Republic", flag: "<img src=\"b1/dominicanrepublic.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Santo Domingo", population: 11056430, region: "Caribbean", continent: "North America", currency: "Peso", languages: "Spanish" },
    { name: "East Timor", flag: "<img src=\"b1/easttimor.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Dili", population: 1318445, region: "Southeast Asia", continent: "Asia", currency: "Dollar", languages: "Tetum, Portuguese" },
    { name: "Ecuador", flag: "<img src=\"b1/ecuador.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Quito", population: 18190484, region: "South America", continent: "South America", currency: "Dollar", languages: "Spanish" },
    { name: "Egypt", flag: "<img src=\"b1/egypt.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Cairo", population: 104124440, region: "North Africa", continent: "Africa", currency: "Pound", languages: "Arabic" },
    { name: "El Salvador", flag: "<img src=\"b1/elsalvador.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "San Salvador", population: 6336392, region: "Central America", continent: "North America", currency: "Dollar", languages: "Spanish" },
    { name: "Equatorial Guinea", flag: "<img src=\"b1/equatorialguinea.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Malabo", population: 1674908, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "Spanish, French, Portuguese" },
    { name: "Eritrea", flag: "<img src=\"b1/eritrea.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Asmara", population: 6333135, region: "Sub-Saharan Africa", continent: "Africa", currency: "Nakfa", languages: "Tigrinya, Arabic" },
    { name: "Estonia", flag: "<img src=\"b1/estonia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tallinn", population: 1379727, region: "Northern Europe", continent: "Europe", currency: "Euro", languages: "Estonian" },
    { name: "Eswatini", flag: "<img src=\"b1/eswatini.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Mbabane", population: 1201670, region: "Sub-Saharan Africa", continent: "Africa", currency: "Lilangeni", languages: "English, Siswati" },
    { name: "Ethiopia", flag: "<img src=\"b1/ethiopia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Addis Ababa", population: 120283026, region: "Sub-Saharan Africa", continent: "Africa", currency: "Birr", languages: "Amharic" },
    { name: "Fiji", flag: "<img src=\"b1/fiji.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Suva", population: 896444, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English, Fijian" },
    { name: "Finland", flag: "<img src=\"b1/finland.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Helsinki", population: 5563911, region: "Northern Europe", continent: "Europe", currency: "Euro", languages: "Finnish, Swedish" },
    { name: "France", flag: "<img src=\"b1/france.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Paris", population: 67750000, region: "Western Europe", continent: "Europe", currency: "Euro", languages: "French" },
    { name: "Gabon", flag: "<img src=\"b1/gabon.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Libreville", population: 2388992, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Gambia", flag: "<img src=\"b1/gambia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Banjul", population: 2705992, region: "Sub-Saharan Africa", continent: "Africa", currency: "Dalasi", languages: "English" },
    { name: "Georgia", flag: "<img src=\"b1/georgia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tbilisi", population: 3708610, region: "Western Asia", continent: "Asia", currency: "Lari", languages: "Georgian" },
    { name: "Germany", flag: "<img src=\"b1/germany.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Berlin", population: 83369843, region: "Central Europe", continent: "Europe", currency: "Euro", languages: "German" },
    { name: "Ghana", flag: "<img src=\"b1/ghana.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Accra", population: 33475780, region: "Sub-Saharan Africa", continent: "Africa", currency: "Cedi", languages: "English" },
    { name: "Greece", flag: "<img src=\"b1/greece.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Athens", population: 10640000, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Greek" },
    { name: "Grenada", flag: "<img src=\"b1/grenada.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Saint George's", population: 123220, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Guatemala", flag: "<img src=\"b1/guatemala.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Guatemala City", population: 17608483, region: "Central America", continent: "North America", currency: "Quetzal", languages: "Spanish" },
    { name: "Guinea", flag: "<img src=\"b1/guinea.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Conakry", population: 13531906, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Guinea-Bissau", flag: "<img src=\"b1/guineabissau.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bissau", population: 2105566, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "Portuguese" },
    { name: "Guyana", flag: "<img src=\"b1/guyana.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Georgetown", population: 804567, region: "South America", continent: "South America", currency: "Dollar", languages: "English" },
    { name: "Haiti", flag: "<img src=\"b1/haiti.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Port-au-Prince", population: 11402528, region: "Caribbean", continent: "North America", currency: "Gourde", languages: "French, Haitian Creole" },
    { name: "Honduras", flag: "<img src=\"b1/honduras.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tegucigalpa", population: 10062991, region: "Central America", continent: "North America", currency: "Lempira", languages: "Spanish" },
    { name: "Hungary", flag: "<img src=\"b1/hungary.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Budapest", population: 9710000, region: "Central Europe", continent: "Europe", currency: "Forint", languages: "Hungarian" },
    { name: "Iceland", flag: "<img src=\"b1/iceland.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Reykjavik", population: 382305, region: "Northern Europe", continent: "Europe", currency: "Króna", languages: "Icelandic" },
    { name: "India", flag: "<img src=\"b1/india.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "New Delhi", population: 1417173173, region: "South Asia", continent: "Asia", currency: "Rupee", languages: "Hindi, English, Bengali" },
    { name: "Indonesia", flag: "<img src=\"b1/indonesia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Jakarta", population: 277534122, region: "Southeast Asia", continent: "Asia", currency: "Rupiah", languages: "Indonesian" },
    { name: "Iran", flag: "<img src=\"b1/iran.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tehran", population: 88550570, region: "Western Asia", continent: "Asia", currency: "Rial", languages: "Persian" },
    { name: "Iraq", flag: "<img src=\"b1/iraq.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Baghdad", population: 43533592, region: "Western Asia", continent: "Asia", currency: "Dinar", languages: "Arabic, Kurdish" },
    { name: "Ireland", flag: "<img src=\"b1/ireland.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Dublin", population: 5127883, region: "Northern Europe", continent: "Europe", currency: "Euro", languages: "English, Irish" },
    { name: "Israel", flag: "<img src=\"b1/israel.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Jerusalem", population: 9656000, region: "Western Asia", continent: "Asia", currency: "Shekel", languages: "Hebrew, Arabic" },
    { name: "Italy", flag: "<img src=\"b1/italy.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Rome", population: 57550663, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Italian" },
    { name: "Ivory Coast", flag: "<img src=\"b1/ivorycoast.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Yamoussoukro (official), Abidjan (economic)", population: 27748435, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Jamaica", flag: "<img src=\"b1/jamaica.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kingston", population: 2825544, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Japan", flag: "<img src=\"b1/japan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tokyo", population: 123294513, region: "East Asia", continent: "Asia", currency: "Yen", languages: "Japanese" },
    { name: "Jordan", flag: "<img src=\"b1/jordan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Amman", population: 10203134, region: "Western Asia", continent: "Asia", currency: "Dinar", languages: "Arabic" },
    { name: "Kazakhstan", flag: "<img src=\"b1/kazakhstan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Astana", population: 19397998, region: "Central Asia", continent: "Asia", currency: "Tenge", languages: "Kazakh, Russian" },
    { name: "Kenya", flag: "<img src=\"b1/kenya.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Nairobi", population: 54027487, region: "Sub-Saharan Africa", continent: "Africa", currency: "Shilling", languages: "English, Swahili" },
    { name: "Kiribati", flag: "<img src=\"b1/kiribati.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tarawa", population: 131232, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English, Gilbertese" },
    { name: "North Korea", flag: "<img src=\"b2/northkorea.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Pyongyang", population: 25643466, region: "East Asia", continent: "Asia", currency: "North Korean Won", languages: "Korean" },
    { name: "South Korea", flag: "<img src=\"b3/southkorea.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Seoul", population: 51784059, region: "East Asia", continent: "Asia", currency: "South Korean Won", languages: "Korean" },
    { name: "Kuwait", flag: "<img src=\"b1/kuwait.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kuwait City", population: 4270571, region: "Western Asia", continent: "Asia", currency: "Dinar", languages: "Arabic" },
    { name: "Kyrgyzstan", flag: "<img src=\"b1/kyrgyzstan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bishkek", population: 6630100, region: "Central Asia", continent: "Asia", currency: "Som", languages: "Kyrgyz, Russian" },
    { name: "Laos", flag: "<img src=\"b1/laos.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Vientiane", population: 7529475, region: "Southeast Asia", continent: "Asia", currency: "Kip", languages: "Lao" },
    { name: "Latvia", flag: "<img src=\"b1/latvia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Riga", population: 1875757, region: "Northern Europe", continent: "Europe", currency: "Euro", languages: "Latvian" },
    { name: "Lebanon", flag: "<img src=\"b1/lebanon.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Beirut", population: 5489499, region: "Western Asia", continent: "Asia", currency: "Pound", languages: "Arabic, French" },
    { name: "Lesotho", flag: "<img src=\"b1/lesotho.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Maseru", population: 2142249, region: "Sub-Saharan Africa", continent: "Africa", currency: "Loti", languages: "English, Sotho" },
    { name: "Liberia", flag: "<img src=\"b2/liberia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Monrovia", population: 5302681, region: "Sub-Saharan Africa", continent: "Africa", currency: "Dollar", languages: "English" },
    { name: "Libya", flag: "<img src=\"b2/libya.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tripoli", population: 6871292, region: "North Africa", continent: "Africa", currency: "Dinar", languages: "Arabic" },
    { name: "Liechtenstein", flag: "<img src=\"b2/liechtenstein.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Vaduz", population: 39327, region: "Central Europe", continent: "Europe", currency: "Franc", languages: "German" },
    { name: "Lithuania", flag: "<img src=\"b2/lithuana.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Vilnius", population: 2801904, region: "Northern Europe", continent: "Europe", currency: "Euro", languages: "Lithuanian" },
    { name: "Luxembourg", flag: "<img src=\"b2/luxembourg.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Luxembourg City", population: 660809, region: "Western Europe", continent: "Europe", currency: "Euro", languages: "Luxembourgish, French, German" },
    { name: "Madagascar", flag: "<img src=\"b2/madagascar.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Antananarivo", population: 28226444, region: "Sub-Saharan Africa", continent: "Africa", currency: "Ariary", languages: "Malagasy, French" },
    { name: "Malawi", flag: "<img src=\"b2/malawi.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Lilongwe", population: 20008814, region: "Sub-Saharan Africa", continent: "Africa", currency: "Kwacha", languages: "English, Chichewa" },
    { name: "Malaysia", flag: "<img src=\"b2/malaysia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kuala Lumpur", population: 34160369, region: "Southeast Asia", continent: "Asia", currency: "Ringgit", languages: "Malay" },
    { name: "Maldives", flag: "<img src=\"b2/maldives.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Malé", population: 517607, region: "South Asia", continent: "Asia", currency: "Rufiyaa", languages: "Dhivehi" },
    { name: "Mali", flag: "<img src=\"b2/mali.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bamako", population: 22405178, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Malta", flag: "<img src=\"b2/malta.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Valletta", population: 551695, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Maltese, English" },
    { name: "Marshall Islands", flag: "<img src=\"b2/marshallislands.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Majuro", population: 42050, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English, Marshallese" },
    { name: "Mauritania", flag: "<img src=\"b2/mauritania.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Nouakchott", population: 4907000, region: "North Africa", continent: "Africa", currency: "Ouguiya", languages: "Arabic" },
    { name: "Mauritius", flag: "<img src=\"b2/mauritius.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Port Louis", population: 1299623, region: "Sub-Saharan Africa", continent: "Africa", currency: "Rupee", languages: "English, French, Mauritian Creole" },
    { name: "Mexico", flag: "<img src=\"b2/mexico.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Mexico City", population: 128932753, region: "North America", continent: "North America", currency: "Peso", languages: "Spanish" },
    { name: "Micronesia", flag: "<img src=\"b2/micronesia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Palikir", population: 115023, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English" },
    { name: "Moldova", flag: "<img src=\"b2/moldova.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Chişinău", population: 3518000, region: "Eastern Europe", continent: "Europe", currency: "Leu", languages: "Romanian" },
    { name: "Monaco", flag: "<img src=\"b2/monaco.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Monaco", population: 36469, region: "Western Europe", continent: "Europe", currency: "Euro", languages: "French, Monégasque" },
    { name: "Mongolia", flag: "<img src=\"b2/mongolia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ulaanbaatar", population: 3423038, region: "East Asia", continent: "Asia", currency: "Tugrik", languages: "Mongolian" },
    { name: "Montenegro", flag: "<img src=\"b2/montenegro.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Podgorica", population: 616695, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Montenegrin" },
    { name: "Morocco", flag: "<img src=\"b2/morocco.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Rabat", population: 37344795, region: "North Africa", continent: "Africa", currency: "Dirham", languages: "Arabic, French, Berber" },
    { name: "Mozambique", flag: "<img src=\"b2/mozambique.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Maputo", population: 33897853, region: "Sub-Saharan Africa", continent: "Africa", currency: "Metical", languages: "Portuguese" },
    { name: "Myanmar", flag: "<img src=\"b2/myanmar.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Naypyidaw", population: 54409794, region: "Southeast Asia", continent: "Asia", currency: "Kyat", languages: "Burmese" },
    { name: "Namibia", flag: "<img src=\"b2/namibia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Windhoek", population: 2540905, region: "Sub-Saharan Africa", continent: "Africa", currency: "Dollar", languages: "English, Afrikaans" },
    { name: "Nauru", flag: "<img src=\"b2/nauru.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Yaren", population: 12511, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English, Nauruan" },
    { name: "Nepal", flag: "<img src=\"b2/nepal.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kathmandu", population: 30547580, region: "South Asia", continent: "Asia", currency: "Rupee", languages: "Nepali" },
    { name: "Netherlands", flag: "<img src=\"b2/netherlands.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Amsterdam", population: 17780000, region: "Western Europe", continent: "Europe", currency: "Euro", languages: "Dutch, English" },
    { name: "New Zealand", flag: "<img src=\"b2/newzealand.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Wellington", population: 5228100, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English, Maori" },
    { name: "Nicaragua", flag: "<img src=\"b2/nicaragua.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Managua", population: 7045000, region: "Central America", continent: "North America", currency: "Córdoba", languages: "Spanish" },
    { name: "Niger", flag: "<img src=\"b2/niger.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Niamey", population: 25130817, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Nigeria", flag: "<img src=\"b2/nigeria.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Abuja", population: 223804632, region: "Sub-Saharan Africa", continent: "Africa", currency: "Naira", languages: "English, Hausa, Yoruba" },
    { name: "Norway", flag: "<img src=\"b2/norway.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Oslo", population: 5543818, region: "Northern Europe", continent: "Europe", currency: "Krone", languages: "Norwegian" },
    { name: "Oman", flag: "<img src=\"b2/oman.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Muscat", population: 4664844, region: "Western Asia", continent: "Asia", currency: "Rial", languages: "Arabic" },
    { name: "Pakistan", flag: "<img src=\"b2/pakistan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Islamabad", population: 240485658, region: "South Asia", continent: "Asia", currency: "Rupee", languages: "Urdu, English" },
    { name: "Palau", flag: "<img src=\"b2/palau.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ngerulmud", population: 18024, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English" },
    { name: "Palestine", flag: "<img src=\"b2/palestine.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ramallah", population: 4816503, region: "Western Asia", continent: "Asia", currency: "Shekel", languages: "Arabic" },
    { name: "Panama", flag: "<img src=\"b2/panama.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Panama City", population: 4384975, region: "Central America", continent: "North America", currency: "Balboa", languages: "Spanish, English" },
    { name: "Papua New Guinea", flag: "<img src=\"b2/papuanewguinea.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Port Moresby", population: 9612823, region: "Oceania", continent: "Oceania", currency: "Kina", languages: "English, Tok Pisin" },
    { name: "Paraguay", flag: "<img src=\"b2/paraguay.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Asunción", population: 6702000, region: "South America", continent: "South America", currency: "Guaraní", languages: "Spanish, Guarani" },
    { name: "Peru", flag: "<img src=\"b2/peru.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Lima", population: 34352719, region: "South America", continent: "South America", currency: "Sol", languages: "Spanish, Quechua, Aymara" },
    { name: "Philippines", flag: "<img src=\"b2/philippines.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Manila", population: 120588926, region: "Southeast Asia", continent: "Asia", currency: "Peso", languages: "Filipino, English" },
    { name: "Poland", flag: "<img src=\"b2/poland.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Warsaw", population: 37840000, region: "Central Europe", continent: "Europe", currency: "Zloty", languages: "Polish" },
    { name: "Portugal", flag: "<img src=\"b2/portugal.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Lisbon", population: 10438573, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Portuguese" },
    { name: "Qatar", flag: "<img src=\"b2/qatar.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Doha", population: 3087571, region: "Western Asia", continent: "Asia", currency: "Riyal", languages: "Arabic, English" },
    { name: "Romania", flag: "<img src=\"b2/romania.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bucharest", population: 18970000, region: "Eastern Europe", continent: "Europe", currency: "Leu", languages: "Romanian" },
    { name: "Russia", flag: "<img src=\"b2/russia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Moscow", population: 144444359, region: "Eastern Europe, Northern Asia", continent: "Europe", currency: "Ruble", languages: "Russian" },
    { name: "Rwanda", flag: "<img src=\"b2/rwanda.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kigali", population: 13776698, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "Kinyarwanda, French, English" },
    { name: "Saint Kitts and Nevis", flag: "<img src=\"b2/saintkittsandnevis.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Basseterre", population: 53199, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Saint Lucia", flag: "<img src=\"b2/saintlucia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Castries", population: 180870, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Saint Vincent and the Grenadines", flag: "<img src=\"b2/saintvincentandthegrenadines.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kingstown", population: 110589, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Samoa", flag: "<img src=\"b2/samoa.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Apia", population: 220695, region: "Oceania", continent: "Oceania", currency: "Tala", languages: "Samoan, English" },
    { name: "San Marino", flag: "<img src=\"b3/sanmarino.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "San Marino", population: 34660, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Italian" },
    { name: "Sao Tome and Principe", flag: "<img src=\"b3/sãotoméandpríncipe.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "São Tomé", population: 230617, region: "Sub-Saharan Africa", continent: "Africa", currency: "Dobra", languages: "Portuguese" },
    { name: "Saudi Arabia", flag: "<img src=\"b3/saudiarabia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Riyadh", population: 36408820, region: "Western Asia", continent: "Asia", currency: "Riyal", languages: "Arabic" },
    { name: "Senegal", flag: "<img src=\"b3/senegal.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Dakar", population: 17316449, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Serbia", flag: "<img src=\"b3/serbia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Belgrade", population: 6908668, region: "Southern Europe", continent: "Europe", currency: "Dinar", languages: "Serbian" },
    { name: "Seychelles", flag: "<img src=\"b3/seychelles.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Victoria", population: 98462, region: "Sub-Saharan Africa", continent: "Africa", currency: "Rupee", languages: "Seychellois Creole, English, French" },
    { name: "Sierra Leone", flag: "<img src=\"b3/sierraleone.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Freetown", population: 8605718, region: "Sub-Saharan Africa", continent: "Africa", currency: "Leone", languages: "English" },
    { name: "Singapore", flag: "<img src=\"b3/singapore.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Singapore", population: 5917600, region: "Southeast Asia", continent: "Asia", currency: "Dollar", languages: "English, Mandarin, Malay, Tamil" },
    { name: "Slovakia", flag: "<img src=\"b3/slovakia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bratislava", population: 5460000, region: "Central Europe", continent: "Europe", currency: "Euro", languages: "Slovak" },
    { name: "Slovenia", flag: "<img src=\"b3/slovenia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ljubljana", population: 2119543, region: "Central Europe", continent: "Europe", currency: "Euro", languages: "Slovenian" },
    { name: "Solomon Islands", flag: "<img src=\"b3/solomonislands.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Honiara", population: 707114, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English" },
    { name: "Somalia", flag: "<img src=\"b3/somalia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Mogadishu", population: 17065473, region: "Sub-Saharan Africa", continent: "Africa", currency: "Shilling", languages: "Somali, Arabic" },
    { name: "South Africa", flag: "<img src=\"b3/southafrica.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Pretoria", population: 60142978, region: "Sub-Saharan Africa", continent: "Africa", currency: "Rand", languages: "Zulu, Xhosa, Afrikaans, English" },
    { name: "South Sudan", flag: "<img src=\"b3/southsudan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Juba", population: 11381378, region: "Sub-Saharan Africa", continent: "Africa", currency: "Pound", languages: "English, Arabic" },
    { name: "Spain", flag: "<img src=\"b3/spain.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Madrid", population: 47565130, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Spanish" },
    { name: "Sri Lanka", flag: "<img src=\"b3/srilanka.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Colombo", population: 22156000, region: "South Asia", continent: "Asia", currency: "Rupee", languages: "Sinhala, Tamil, English" },
    { name: "Sudan", flag: "<img src=\"b3/sudan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Khartoum", population: 45657202, region: "Sub-Saharan Africa", continent: "Africa", currency: "Pound", languages: "Arabic" },
    { name: "Suriname", flag: "<img src=\"b3/suriname.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Paramaribo", population: 612385, region: "South America", continent: "South America", currency: "Dollar", languages: "Dutch" },
    { name: "Sweden", flag: "<img src=\"b3/sweden.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Stockholm", population: 10520186, region: "Northern Europe", continent: "Europe", currency: "Krona", languages: "Swedish" },
    { name: "Switzerland", flag: "<img src=\"b3/switzerland.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bern", population: 8776000, region: "Central Europe", continent: "Europe", currency: "Franc", languages: "German, French, Italian, Romansh" },
    { name: "Syria", flag: "<img src=\"b3/syria.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Damascus", population: 22125249, region: "Western Asia", continent: "Asia", currency: "Pound", languages: "Arabic" },
    { name: "Taiwan", flag: "<img src=\"b3/taiwan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Taipei", population: 23859912, region: "East Asia", continent: "Asia", currency: "Dollar", languages: "Mandarin, Taiwanese" },
    { name: "Tajikistan", flag: "<img src=\"b3/tajikistan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Dushanbe", population: 9952284, region: "Central Asia", continent: "Asia", currency: "Somoni", languages: "Tajik, Russian" },
    { name: "Tanzania", flag: "<img src=\"b3/tanzania.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Dar es Salaam", population: 65497748, region: "Sub-Saharan Africa", continent: "Africa", currency: "Shilling", languages: "Swahili, English" },
    { name: "Thailand", flag: "<img src=\"b3/thailand.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Bangkok", population: 71801279, region: "Southeast Asia", continent: "Asia", currency: "Baht", languages: "Thai" },
    { name: "Togo", flag: "<img src=\"b3/togo.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Lomé", population: 8848699, region: "Sub-Saharan Africa", continent: "Africa", currency: "Franc", languages: "French" },
    { name: "Tonga", flag: "<img src=\"b3/tonga.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Nuku'alofa", population: 103252, region: "Oceania", continent: "Oceania", currency: "Paanga", languages: "Tongan, English" },
    { name: "Trinidad and Tobago", flag: "<img src=\"b3/trinidadandtobago.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Port of Spain", population: 1525663, region: "Caribbean", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Tunisia", flag: "<img src=\"b3/tunisia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tunis", population: 12262716, region: "North Africa", continent: "Africa", currency: "Dinar", languages: "Arabic, French" },
    { name: "Turkey", flag: "<img src=\"b3/turkey.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ankara", population: 86411500, region: "Western Asia", continent: "Asia", currency: "Lira", languages: "Turkish" },
    { name: "Turkmenistan", flag: "<img src=\"b3/turkmenistan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Ashgabat", population: 6370883, region: "Central Asia", continent: "Asia", currency: "Manat", languages: "Turkmen, Russian" },
    { name: "Tuvalu", flag: "<img src=\"b3/tuvalu.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Funafuti", population: 11396, region: "Oceania", continent: "Oceania", currency: "Dollar", languages: "English, Tuvaluan" },
    { name: "Uganda", flag: "<img src=\"b3/uganda.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kampala", population: 48582334, region: "Sub-Saharan Africa", continent: "Africa", currency: "Shilling", languages: "English, Swahili" },
    { name: "Ukraine", flag: "<img src=\"b3/ukraine.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Kyiv", population: 38000000, region: "Eastern Europe", continent: "Europe", currency: "Hryvnia", languages: "Ukrainian, Russian" },
    { name: "United Arab Emirates", flag: "<img src=\"b3/unitedarabemirates.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Abu Dhabi", population: 9890400, region: "Western Asia", continent: "Asia", currency: "Dirham", languages: "Arabic, English" },
    { name: "United Kingdom", flag: "<img src=\"b3/unitedkingdom.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "London", population: 67736802, region: "Northern Europe", continent: "Europe", currency: "Pound", languages: "English" },
    { name: "United States", flag: "<img src=\"b3/unitedstates.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Washington, D.C.", population: 338289857, region: "North America", continent: "North America", currency: "Dollar", languages: "English" },
    { name: "Uruguay", flag: "<img src=\"b3/uruguay.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Montevideo", population: 3461734, region: "South America", continent: "South America", currency: "Peso", languages: "Spanish" },
    { name: "Uzbekistan", flag: "<img src=\"b3/uzbekistan.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Tashkent", population: 34261116, region: "Central Asia", continent: "Asia", currency: "Som", languages: "Uzbek, Russian" },
    { name: "Vanuatu", flag: "<img src=\"b3/vanuatu.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Port Vila", population: 307150, region: "Oceania", continent: "Oceania", currency: "Vatu", languages: "Bislama, English, French" },
    { name: "Vatican City", flag: "<img src=\"b3/vaticancity.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Vatican City", population: 825, region: "Southern Europe", continent: "Europe", currency: "Euro", languages: "Italian, Latin" },
    { name: "Venezuela", flag: "<img src=\"b3/venezuela.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Caracas", population: 28435943, region: "South America", continent: "South America", currency: "Bolívar", languages: "Spanish" },
    { name: "Vietnam", flag: "<img src=\"b3/vietnam.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Hanoi", population: 98186856, region: "Southeast Asia", continent: "Asia", currency: "Dong", languages: "Vietnamese" },
    { name: "Yemen", flag: "<img src=\"b3/yemen.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Sana'a", population: 33696614, region: "Western Asia", continent: "Asia", currency: "Rial", languages: "Arabic" },
    { name: "Zambia", flag: "<img src=\"b3/zambia.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Lusaka", population: 19606592, region: "Sub-Saharan Africa", continent: "Africa", currency: "Kwacha", languages: "English" },
    { name: "Zimbabwe", flag: "<img src=\"b3/zimbabwe.jpg\" alt=\"\" height=\"130\" width=\"200\">", capital: "Harare", population: 14862924, region: "Sub-Saharan Africa", continent: "Africa", currency: "Dollar", languages: "English, Shona, Ndebele" }  
];

// DOM Elements (initialize after DOM is ready)
let countriesContainer;
let searchInput;
let continentFilter;
let loadingMessage;
let noResults;

// Initialize DOM elements
function initializeDOMElements() {
    countriesContainer = document.getElementById('countriesContainer');
    searchInput = document.getElementById('searchInput');
    continentFilter = document.getElementById('continentFilter');
    loadingMessage = document.getElementById('loadingMessage');
    noResults = document.getElementById('noResults');
}

// Load countries data
function loadCountries() {
    try {
        console.log('Loading countries...');
        allCountries = [...countriesData];
        // Sort countries alphabetically by name
        allCountries.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        
        filteredCountries = [...allCountries];
        if (loadingMessage) loadingMessage.style.display = 'none';
        displayCountries(filteredCountries);
        console.log('Countries loaded:', allCountries.length);
    } catch (error) {
        console.error('Error loading countries:', error);
        if (loadingMessage) {
            loadingMessage.textContent = 'Error loading countries. Please refresh the page.';
        }
    }
}

// Display countries in the grid
function displayCountries(countries) {
    if (!countriesContainer || !noResults) {
        console.error('DOM elements not initialized');
        return;
    }
    
    countriesContainer.innerHTML = '';
    
    if (countries.length === 0) {
        noResults.style.display = 'block';
        countriesContainer.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    countriesContainer.style.display = 'grid';
    
    countries.forEach(country => {
        const countryCard = createCountryCard(country);
        countriesContainer.appendChild(countryCard);
    });
}

// Create a country card element
function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';
    
    // Format population with commas
    const population = formatPopulation(country.population);
    
    card.innerHTML = `
        <div class="country-flag">${country.flag}</div>
        <div class="country-info">
            <div class="country-name">${country.name}</div>
            <div class="info-item">
                <span class="info-label">Continent:</span>
                <span class="info-value">${country.continent}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Region:</span>
                <span class="info-value">${country.region}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Capital:</span>
                <span class="info-value">${country.capital}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Population:</span>
                <span class="info-value">${population}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Currency:</span>
                <span class="info-value">${country.currency}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Languages:</span>
                <span class="info-value">${country.languages}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Helper function to format population with commas
function formatPopulation(population) {
    return population ? population.toLocaleString() : 'N/A';
}

// Helper function to extract currencies
function getCurrencies(currenciesObj) {
    if (!currenciesObj) return 'N/A';
    
    try {
        const currencyNames = Object.values(currenciesObj)
            .map(curr => curr.name || '')
            .filter(name => name)
            .slice(0, 3)
            .join(', ');
        return currencyNames || 'N/A';
    } catch {
        return 'N/A';
    }
}

// Helper function to extract languages
function getLanguages(languagesObj) {
    if (!languagesObj) return 'N/A';
    
    try {
        const languageNames = Object.values(languagesObj)
            .slice(0, 3)
            .join(', ');
        return languageNames || 'N/A';
    } catch {
        return 'N/A';
    }
}

// Filter countries based on search and continent
function filterCountries() {
    if (!searchInput || !continentFilter) {
        console.error('Search/filter elements not initialized');
        return;
    }
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedContinent = continentFilter.value;
    
    filteredCountries = allCountries.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(searchTerm) ||
                             country.capital.toLowerCase().includes(searchTerm) ||
                             country.region.toLowerCase().includes(searchTerm);
        
        const matchesContinent = !selectedContinent || country.continent === selectedContinent;
        
        return matchesSearch && matchesContinent;
    });
    
    displayCountries(filteredCountries);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeDOMElements();
    
    // Add event listeners after DOM is initialized
    if (searchInput) searchInput.addEventListener('input', filterCountries);
    if (continentFilter) continentFilter.addEventListener('change', filterCountries);
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        // Check localStorage for dark mode preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Light Mode';
        }
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    loadCountries();
});